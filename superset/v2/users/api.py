# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

from __future__ import annotations

import logging
from typing import Any

from flask import request, Response
from flask_appbuilder.api import expose, safe
from marshmallow import ValidationError

from superset.extensions import event_logger
from superset.v2.users.commands.register import (
    RegisterUserCommand,
    UserAlreadyExistsError,
    UserRegistrationCreateError,
    UserRegistrationDisabledError,
    UserRegistrationRoleNotFoundError,
)
from superset.v2.users.commands.send_verification_code import (
    SendVerificationCodeCommand,
)
from superset.v2.users.schemas import (
    UserRegistrationResponseSchema,
    UserRegistrationSchema,
    VerificationCodeRequestSchema,
    VerificationCodeResponseSchema,
)
from superset.v2.users.verification import (
    InvalidVerificationCodeError,
    VerificationCodeDeliveryError,
    VerificationCodeRateLimitError,
)
from superset.views.base_api import BaseSupersetApi, requires_json, statsd_metrics

logger = logging.getLogger(__name__)


class UserRegistrationRestApi(BaseSupersetApi):
    """Public API for database-authenticated user registration."""

    resource_name = "v2/users"
    allow_browser_login = True
    openapi_spec_tag = "Users"

    @expose("/verification-code/", methods=("POST",))
    @safe
    @statsd_metrics
    @requires_json
    def send_verification_code(self) -> Response:
        """Send a registration verification code.
        ---
        post:
          summary: Send a registration verification code by email
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  VerificationCodeRequestSchema
          responses:
            202:
              description: Verification code accepted for delivery
              content:
                application/json:
                  schema:
                    VerificationCodeResponseSchema
            400:
              $ref: '#/components/responses/400'
            403:
              $ref: '#/components/responses/403'
            409:
              description: Email already exists
            429:
              description: Verification code requested too frequently
            500:
              $ref: '#/components/responses/500'
        """
        try:
            data: dict[str, Any] = VerificationCodeRequestSchema().load(request.json)
        except ValidationError as ex:
            return self.response_400(message=ex.messages)

        try:
            SendVerificationCodeCommand(data["email"]).run()
        except UserRegistrationDisabledError:
            return self.response_403(message="User registration is disabled.")
        except UserAlreadyExistsError:
            return self.response(409, message="The email is already registered.")
        except VerificationCodeRateLimitError:
            return self.response(
                429,
                message="Please wait before requesting another verification code.",
            )
        except VerificationCodeDeliveryError:
            logger.exception("Failed to send a registration verification code")
            return self.response_500(
                message="The verification email could not be sent.",
            )

        result = {"message": "Verification code sent."}
        return self.response(
            202,
            result=VerificationCodeResponseSchema().dump(result),
        )

    @expose("/register/", methods=("POST",))
    @safe
    @statsd_metrics
    @requires_json
    @event_logger.log_this_with_context(
        action=lambda self, *args, **kwargs: "UserRegistrationRestApi.post",
        object_ref=False,
        log_to_statsd=False,
    )
    def post(self) -> Response:
        """Register a user.
        ---
        post:
          summary: Register a database-authenticated user
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  UserRegistrationSchema
          responses:
            201:
              description: User registered
              content:
                application/json:
                  schema:
                    UserRegistrationResponseSchema
            400:
              $ref: '#/components/responses/400'
            403:
              $ref: '#/components/responses/403'
            409:
              description: Username or email already exists
            500:
              $ref: '#/components/responses/500'
        """
        try:
            data: dict[str, Any] = UserRegistrationSchema().load(request.json)
        except ValidationError as ex:
            return self.response_400(message=ex.messages)

        try:
            user = RegisterUserCommand(data).run()
        except UserRegistrationDisabledError:
            return self.response_403(message="User registration is disabled.")
        except UserAlreadyExistsError:
            return self.response(
                409,
                message="The username or email is already registered.",
            )
        except InvalidVerificationCodeError:
            return self.response_400(
                message="The verification code is invalid or has expired.",
            )
        except UserRegistrationRoleNotFoundError:
            logger.error("Configured user registration role was not found")
            return self.response_500(message="User registration is unavailable.")
        except UserRegistrationCreateError:
            logger.error("Security manager failed to create a registered user")
            return self.response_500(message="User registration failed.")

        result = {
            "id": user.id,
            "username": user.username,
            "message": "Registration successful.",
        }
        return self.response(
            201,
            result=UserRegistrationResponseSchema().dump(result),
        )

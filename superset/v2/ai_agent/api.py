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

from typing import Any

from flask import request, Response
from flask_appbuilder.api import expose, safe
from marshmallow import ValidationError

from superset.extensions import event_logger
from superset.v2.ai_agent.schemas import (
    AgentTokenResponseSchema,
    AgentTokenVerifyResponseSchema,
    AgentTokenVerifySchema,
)
from superset.v2.ai_agent.token import (
    AgentTokenAuthenticationError,
    AgentTokenInvalidError,
    create_agent_token,
    verify_agent_token,
)
from superset.views.base_api import BaseSupersetApi, requires_json, statsd_metrics


class AgentTokenRestApi(BaseSupersetApi):
    """APIs for issuing and validating short-lived agent tokens.

    用于签发和校验短期 Agent Token 的 API。
    """
    csrf_exempt = True
    resource_name = "agent/token"
    allow_browser_login = True
    openapi_spec_tag = "Agent"

    @expose("", methods=("POST",))
    @expose("/", methods=("POST",))
    @safe
    @statsd_metrics
    @event_logger.log_this_with_context(
        action=lambda self, *args, **kwargs: "AgentTokenRestApi.issue",
        object_ref=False,
        log_to_statsd=False,
    )
    def issue(self) -> Response:
        """Issue a token for the current Superset session user.

        为当前 Superset Session 用户签发 Token。
        ---
        post:
          summary: Issue a short-lived agent token
          responses:
            200:
              description: Agent token
              content:
                application/json:
                  schema:
                    AgentTokenResponseSchema
            401:
              $ref: '#/components/responses/401'
        """
        try:


            result = create_agent_token()
            print(result)
        except AgentTokenAuthenticationError:
            return self.response_401()

        return self.response(200, result=AgentTokenResponseSchema().dump(result))

    @expose("/verify", methods=("POST",))
    @safe
    @statsd_metrics
    @requires_json
    @event_logger.log_this_with_context(
        action=lambda self, *args, **kwargs: "AgentTokenRestApi.verify",
        object_ref=False,
        log_to_statsd=False,
    )
    def verify(self) -> Response:
        """Validate an agent token and return the bound user.

        校验 Agent Token 并返回绑定用户。
        ---
        post:
          summary: Verify an agent token
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  AgentTokenVerifySchema
          responses:
            200:
              description: Bound Superset user
              content:
                application/json:
                  schema:
                    AgentTokenVerifyResponseSchema
            400:
              $ref: '#/components/responses/400'
            401:
              $ref: '#/components/responses/401'
        """
        try:
            data: dict[str, Any] = AgentTokenVerifySchema().load(request.json)
        except ValidationError as ex:
            return self.response_400(message=ex.messages)

        try:
            result = verify_agent_token(data["token"])
        except AgentTokenInvalidError:
            return self.response(401, message="Invalid or expired agent token.")

        return self.response(
            200,
            result=AgentTokenVerifyResponseSchema().dump(result),
        )

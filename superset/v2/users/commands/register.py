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

from flask import current_app
from flask_appbuilder.const import AUTH_DB
from flask_appbuilder.security.sqla.models import User

from superset.extensions import security_manager
from superset.v2.users.verification import (
    consume_verification_code,
    validate_verification_code,
)


class UserRegistrationError(Exception):
    """Base exception for public user registration."""


class UserRegistrationDisabledError(UserRegistrationError):
    """Registration is disabled by configuration."""


class UserAlreadyExistsError(UserRegistrationError):
    """The requested username or email is already registered."""


class UserRegistrationRoleNotFoundError(UserRegistrationError):
    """The configured registration role does not exist."""


class UserRegistrationCreateError(UserRegistrationError):
    """The security manager could not create the user."""


class RegisterUserCommand:
    """Create a database-authenticated user from a validated request."""

    def __init__(self, data: dict[str, Any]) -> None:
        self._data = data

    def run(self) -> User:
        """Validate registration configuration and create the user."""
        if (
            not current_app.config["AUTH_USER_REGISTRATION"]
            or current_app.config["AUTH_TYPE"] != AUTH_DB
        ):
            raise UserRegistrationDisabledError

        username = self._data["username"].strip()
        email = self._data["email"].strip().lower()

        if security_manager.find_user(username=username) is not None:
            raise UserAlreadyExistsError
        if security_manager.find_user(email=email) is not None:
            raise UserAlreadyExistsError

        role_names = current_app.config.get("AUTH_USER_REGISTRATION_ROLE_LIST")

        if not role_names:
            default_role = current_app.config.get("AUTH_USER_REGISTRATION_ROLE")
            role_names = [default_role] if default_role else []

        if isinstance(role_names, str):
            role_names = [role_names]

        roles = []
        missing_role_names = []

        for role_name in role_names:
            role = security_manager.find_role(role_name)
            if role:
                roles.append(role)
            else:
                missing_role_names.append(role_name)

        if not roles or missing_role_names:
            raise UserRegistrationRoleNotFoundError

        validate_verification_code(email, self._data["verify_code"])

        user = security_manager.add_user(
            username=username,
            first_name=self._data["first_name"].strip(),
            last_name=self._data["last_name"].strip(),
            email=email,
            role=roles,
            password=self._data["password"],
        )
        if user is None:
            raise UserRegistrationCreateError

        consume_verification_code(email)
        return user

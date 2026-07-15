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

from flask import current_app
from flask_appbuilder.const import AUTH_DB

from superset.extensions import security_manager
from superset.v2.users.commands.register import (
    UserAlreadyExistsError,
    UserRegistrationDisabledError,
)
from superset.v2.users.verification import send_verification_code


class SendVerificationCodeCommand:
    """Send a registration verification code to an unused email address."""

    def __init__(self, email: str) -> None:
        self._email = email.strip().lower()

    def run(self) -> None:
        """Validate registration settings and deliver the code."""
        if (
            not current_app.config["AUTH_USER_REGISTRATION"]
            or current_app.config["AUTH_TYPE"] != AUTH_DB
        ):
            raise UserRegistrationDisabledError

        if security_manager.find_user(email=self._email) is not None:
            raise UserAlreadyExistsError

        send_verification_code(self._email)

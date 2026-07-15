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

from typing import Any
from unittest.mock import MagicMock, patch

import pytest
from flask import current_app
from flask_appbuilder.const import AUTH_DB
from marshmallow import ValidationError

from superset.v2.users.commands.register import (
    RegisterUserCommand,
    UserAlreadyExistsError,
    UserRegistrationDisabledError,
    UserRegistrationRoleNotFoundError,
)
from superset.v2.users.schemas import UserRegistrationSchema
from superset.v2.users.verification import (
    InvalidVerificationCodeError,
    VerificationCodeDeliveryError,
    VerificationCodeRateLimitError,
)

REGISTRATION_DATA = {
    "username": "new-user",
    "first_name": "New",
    "last_name": "User",
    "email": "new-user@example.com",
    "password": "password",
    "conf_password": "password",
    "verify_code": "123456",
}


def test_registration_schema_accepts_six_digit_code() -> None:
    """The verification code is retained for command validation."""
    result = UserRegistrationSchema().load(REGISTRATION_DATA)

    assert result["verify_code"] == "123456"


def test_registration_schema_requires_six_digit_code() -> None:
    """Registration requires a six-digit verification code."""
    with pytest.raises(ValidationError):
        UserRegistrationSchema().load(
            {
                **REGISTRATION_DATA,
                "verify_code": "12345",
            }
        )


def test_registration_schema_rejects_mismatched_passwords() -> None:
    """Password confirmation must match before command execution."""
    with pytest.raises(ValidationError):
        UserRegistrationSchema().load(
            {
                **REGISTRATION_DATA,
                "conf_password": "different-password",
            }
        )


def test_register_user_rejects_disabled_registration(app_context: None) -> None:
    """Registration configuration is enforced by the command."""
    current_app.config["AUTH_USER_REGISTRATION"] = False
    current_app.config["AUTH_TYPE"] = AUTH_DB

    with pytest.raises(UserRegistrationDisabledError):
        RegisterUserCommand(REGISTRATION_DATA).run()


def test_register_user_rejects_existing_username(app_context: None) -> None:
    """An existing username cannot be registered again."""
    current_app.config["AUTH_USER_REGISTRATION"] = True
    current_app.config["AUTH_TYPE"] = AUTH_DB

    security_manager = MagicMock()
    security_manager.find_user.return_value = MagicMock()

    with (
        patch(
            "superset.v2.users.commands.register.security_manager",
            security_manager,
        ),
        pytest.raises(UserAlreadyExistsError),
    ):
        RegisterUserCommand(REGISTRATION_DATA).run()


def test_register_user_rejects_missing_default_role(app_context: None) -> None:
    """Registration fails closed when its configured role is missing."""
    current_app.config["AUTH_USER_REGISTRATION"] = True
    current_app.config["AUTH_TYPE"] = AUTH_DB
    current_app.config["AUTH_USER_REGISTRATION_ROLE"] = "Public"

    security_manager = MagicMock()
    security_manager.find_user.return_value = None
    security_manager.find_role.return_value = None

    with (
        patch(
            "superset.v2.users.commands.register.security_manager",
            security_manager,
        ),
        pytest.raises(UserRegistrationRoleNotFoundError),
    ):
        RegisterUserCommand(REGISTRATION_DATA).run()


def test_register_user_creates_user_with_configured_role(
    app_context: None,
) -> None:
    """A valid registration creates a database-authenticated user."""
    current_app.config["AUTH_USER_REGISTRATION"] = True
    current_app.config["AUTH_TYPE"] = AUTH_DB
    current_app.config["AUTH_USER_REGISTRATION_ROLE"] = "Public"

    role = MagicMock()
    user = MagicMock()
    security_manager = MagicMock()
    security_manager.find_user.return_value = None
    security_manager.find_role.return_value = role
    security_manager.add_user.return_value = user

    with (
        patch(
            "superset.v2.users.commands.register.security_manager",
            security_manager,
        ),
        patch(
            "superset.v2.users.commands.register.validate_verification_code"
        ) as validate_code,
        patch(
            "superset.v2.users.commands.register.consume_verification_code"
        ) as consume_code,
    ):
        result = RegisterUserCommand(REGISTRATION_DATA).run()

    assert result is user
    security_manager.add_user.assert_called_once_with(
        username="new-user",
        first_name="New",
        last_name="User",
        email="new-user@example.com",
        role=role,
        password=REGISTRATION_DATA["password"],
    )
    validate_code.assert_called_once_with("new-user@example.com", "123456")
    consume_code.assert_called_once_with("new-user@example.com")


def test_registration_api_creates_user(client: Any, mocker: Any) -> None:
    """The public API validates JSON and returns the created user."""
    user = MagicMock(id=42, username="new-user")
    command = mocker.patch("superset.v2.users.api.RegisterUserCommand")
    command.return_value.run.return_value = user

    response = client.post(
        "/api/v1/v2/users/register/",
        json=REGISTRATION_DATA,
    )

    assert response.status_code == 201
    assert response.json["result"] == {
        "id": 42,
        "message": "Registration successful.",
        "username": "new-user",
    }
    command.assert_called_once_with(REGISTRATION_DATA)


def test_registration_api_rejects_invalid_payload(
    client: Any,
    mocker: Any,
) -> None:
    """Invalid registration input is rejected before command execution."""
    command = mocker.patch("superset.v2.users.api.RegisterUserCommand")

    response = client.post(
        "/api/v1/v2/users/register/",
        json={
            **REGISTRATION_DATA,
            "conf_password": "different-password",
        },
    )

    assert response.status_code == 400
    command.assert_not_called()


def test_registration_api_rejects_invalid_verification_code(
    client: Any,
    mocker: Any,
) -> None:
    """Expired or incorrect verification codes are rejected."""
    command = mocker.patch("superset.v2.users.api.RegisterUserCommand")
    command.return_value.run.side_effect = InvalidVerificationCodeError

    response = client.post(
        "/api/v1/v2/users/register/",
        json=REGISTRATION_DATA,
    )

    assert response.status_code == 400
    assert response.json["message"] == (
        "The verification code is invalid or has expired."
    )


def test_verification_code_api_accepts_email(client: Any, mocker: Any) -> None:
    """A valid email is passed to the verification command."""
    command = mocker.patch("superset.v2.users.api.SendVerificationCodeCommand")

    response = client.post(
        "/api/v1/v2/users/verification-code/",
        json={"email": "new-user@example.com"},
    )

    assert response.status_code == 202
    assert response.json["result"] == {"message": "Verification code sent."}
    command.assert_called_once_with("new-user@example.com")
    command.return_value.run.assert_called_once_with()


@pytest.mark.parametrize(
    ("error", "status_code"),
    [
        (VerificationCodeRateLimitError(), 429),
        (VerificationCodeDeliveryError(), 500),
    ],
)
def test_verification_code_api_handles_delivery_errors(
    client: Any,
    mocker: Any,
    error: Exception,
    status_code: int,
) -> None:
    """Delivery and rate-limit failures return useful statuses."""
    command = mocker.patch("superset.v2.users.api.SendVerificationCodeCommand")
    command.return_value.run.side_effect = error

    response = client.post(
        "/api/v1/v2/users/verification-code/",
        json={"email": "new-user@example.com"},
    )

    assert response.status_code == status_code

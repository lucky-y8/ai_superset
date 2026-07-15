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

from marshmallow import fields, Schema, validate, validates_schema, ValidationError


class UserRegistrationSchema(Schema):
    """Validate public user registration requests."""

    username = fields.String(
        required=True,
        validate=validate.Length(min=1, max=64),
    )
    first_name = fields.String(
        required=True,
        validate=validate.Length(min=1, max=64),
    )
    last_name = fields.String(
        required=True,
        validate=validate.Length(min=1, max=64),
    )
    email = fields.Email(required=True, validate=validate.Length(max=320))
    password = fields.String(
        required=True,
        load_only=True,
        validate=validate.Length(min=1, max=256),
    )
    conf_password = fields.String(required=True, load_only=True)
    verify_code = fields.String(
        required=True,
        load_only=True,
        validate=validate.Regexp(
            r"^\d{6}$",
            error="Verification code must contain exactly 6 digits.",
        ),
    )

    @validates_schema
    def validate_passwords(
        self,
        data: dict[str, str | None],
        **kwargs: object,
    ) -> None:
        """Require the password confirmation to match."""
        if data["password"] != data["conf_password"]:
            raise ValidationError(
                {"conf_password": ["Passwords must match."]},
            )


class UserRegistrationResponseSchema(Schema):
    """Describe a successful user registration response."""

    id = fields.Integer(required=True)
    username = fields.String(required=True)
    message = fields.String(required=True)


class VerificationCodeRequestSchema(Schema):
    """Validate registration verification code requests."""

    email = fields.Email(required=True, validate=validate.Length(max=320))


class VerificationCodeResponseSchema(Schema):
    """Describe a successful verification code request."""

    message = fields.String(required=True)

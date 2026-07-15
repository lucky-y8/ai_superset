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

from unittest.mock import MagicMock, patch

import pytest

from superset.v2.users.verification import (
    consume_verification_code,
    InvalidVerificationCodeError,
    send_verification_code,
    validate_verification_code,
    VerificationCodeRateLimitError,
)


def test_send_and_validate_verification_code(app_context: None) -> None:
    """The delivered code is hashed in cache and can be validated."""
    cache = MagicMock()
    cached_values: dict[str, object] = {}
    cache.get.side_effect = lambda key: cached_values.get(key)
    cache.set.side_effect = lambda key, value, timeout: cached_values.__setitem__(
        key, value
    )
    cache.delete.side_effect = lambda key: cached_values.pop(key, None)
    cache_manager = MagicMock(cache=cache, filter_state_cache=cache)

    with (
        patch("superset.v2.users.verification.cache_manager", cache_manager),
        patch(
            "superset.v2.users.verification.secrets.randbelow",
            return_value=123456,
        ),
        patch("superset.v2.users.verification.send_email_smtp") as send_email,
    ):
        send_verification_code("New-User@Example.com")
        validate_verification_code("new-user@example.com", "123456")
        cached_code = next(
            value for key, value in cached_values.items() if ":code:" in key
        )
        consume_verification_code("new-user@example.com")
        with pytest.raises(InvalidVerificationCodeError):
            validate_verification_code("new-user@example.com", "123456")

    send_email.assert_called_once()
    assert isinstance(cached_code, dict)
    assert cached_code["digest"] != "123456"


def test_verification_code_rejects_wrong_value(app_context: None) -> None:
    """A code with a different digest is rejected."""
    cache = MagicMock()
    cache.get.return_value = {
        "digest": "not-the-right-digest",
        "expires_at": 9999999999,
        "failed_attempts": 0,
    }
    cache_manager = MagicMock(cache=cache, filter_state_cache=cache)

    with (
        patch("superset.v2.users.verification.cache_manager", cache_manager),
        pytest.raises(InvalidVerificationCodeError),
    ):
        validate_verification_code("new-user@example.com", "654321")

    cache.set.assert_called_once()


def test_verification_code_is_consumed_after_five_failures(
    app_context: None,
) -> None:
    """Repeated invalid attempts invalidate the cached code."""
    cache = MagicMock()
    cache.get.return_value = {
        "digest": "not-the-right-digest",
        "expires_at": 9999999999,
        "failed_attempts": 4,
    }
    cache_manager = MagicMock(cache=cache, filter_state_cache=cache)

    with (
        patch("superset.v2.users.verification.cache_manager", cache_manager),
        pytest.raises(InvalidVerificationCodeError),
    ):
        validate_verification_code("new-user@example.com", "654321")

    cache.delete.assert_called_once()


def test_verification_code_respects_resend_interval(app_context: None) -> None:
    """A second request during the cooldown is rejected."""
    cache = MagicMock()
    cache.get.return_value = True
    cache_manager = MagicMock(cache=cache, filter_state_cache=cache)

    with (
        patch("superset.v2.users.verification.cache_manager", cache_manager),
        pytest.raises(VerificationCodeRateLimitError),
    ):
        send_verification_code("new-user@example.com")

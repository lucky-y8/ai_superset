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

import hashlib
import hmac
import secrets
import time
from typing import Any

from flask import current_app
from flask_caching import Cache

from superset.extensions import cache_manager
from superset.utils.core import send_email_smtp

DEFAULT_CODE_TTL_SECONDS = 300
DEFAULT_RESEND_INTERVAL_SECONDS = 60
MAX_VERIFICATION_ATTEMPTS = 5


def _verification_cache() -> Cache:
    cache_config = current_app.config.get("CACHE_CONFIG", {})
    if cache_config.get("CACHE_TYPE"):
        return cache_manager.cache
    return cache_manager.filter_state_cache


class VerificationCodeError(Exception):
    """Base exception for registration verification codes."""


class VerificationCodeRateLimitError(VerificationCodeError):
    """A verification code was requested too recently."""


class VerificationCodeDeliveryError(VerificationCodeError):
    """The verification email could not be delivered."""


class InvalidVerificationCodeError(VerificationCodeError):
    """The verification code is missing, invalid, or expired."""


def _email_key(email: str) -> str:
    return hashlib.sha256(email.strip().lower().encode()).hexdigest()


def _code_key(email: str) -> str:
    return f"v2:user-registration:code:{_email_key(email)}"


def _cooldown_key(email: str) -> str:
    return f"v2:user-registration:cooldown:{_email_key(email)}"


def _code_digest(email: str, code: str) -> str:
    secret_key = str(current_app.config["SECRET_KEY"]).encode()
    value = f"{email.strip().lower()}:{code}".encode()
    return hmac.new(secret_key, value, hashlib.sha256).hexdigest()


def send_verification_code(email: str) -> None:
    """Generate, deliver, and cache a registration verification code."""
    normalized_email = email.strip().lower()
    cooldown_key = _cooldown_key(normalized_email)
    cache = _verification_cache()
    if cache.get(cooldown_key):
        raise VerificationCodeRateLimitError

    code = f"{secrets.randbelow(1_000_000):06d}"
    code_ttl = int(
        current_app.config.get(
            "USER_REGISTRATION_CODE_TTL",
            DEFAULT_CODE_TTL_SECONDS,
        )
    )
    resend_interval = int(
        current_app.config.get(
            "USER_REGISTRATION_CODE_RESEND_INTERVAL",
            DEFAULT_RESEND_INTERVAL_SECONDS,
        )
    )

    try:
        send_email_smtp(
            to=normalized_email,
            subject="Superset 注册验证码",
            html_content=(
                "<p>您的 Superset 注册验证码是：</p>"
                f'<p><strong style="font-size: 24px">{code}</strong></p>'
                f"<p>验证码将在 {code_ttl // 60} 分钟后失效，请勿转发给他人。</p>"
            ),
            config=current_app.config,
        )
    except Exception as ex:
        raise VerificationCodeDeliveryError from ex

    cache.set(
        _code_key(normalized_email),
        {
            "digest": _code_digest(normalized_email, code),
            "expires_at": time.time() + code_ttl,
            "failed_attempts": 0,
        },
        timeout=code_ttl,
    )
    cache.set(cooldown_key, True, timeout=resend_interval)


def validate_verification_code(email: str, code: str) -> None:
    """Validate a cached registration verification code."""
    normalized_email = email.strip().lower()
    cached_value: Any = _verification_cache().get(_code_key(normalized_email))
    if not isinstance(cached_value, dict):
        raise InvalidVerificationCodeError

    digest = cached_value.get("digest")
    expires_at = cached_value.get("expires_at")
    if not isinstance(expires_at, (int, float)) or expires_at <= time.time():
        consume_verification_code(normalized_email)
        raise InvalidVerificationCodeError

    if not isinstance(digest, str) or not hmac.compare_digest(
        digest,
        _code_digest(normalized_email, code),
    ):
        failed_attempts = int(cached_value.get("failed_attempts", 0)) + 1
        if failed_attempts >= MAX_VERIFICATION_ATTEMPTS:
            consume_verification_code(normalized_email)
        else:
            cached_value["failed_attempts"] = failed_attempts
            _verification_cache().set(
                _code_key(normalized_email),
                cached_value,
                timeout=max(1, int(expires_at - time.time())),
            )
        raise InvalidVerificationCodeError


def consume_verification_code(email: str) -> None:
    """Invalidate a verification code after successful registration."""
    _verification_cache().delete(_code_key(email))

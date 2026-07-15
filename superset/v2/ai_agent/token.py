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
import uuid
from datetime import datetime, timedelta, timezone
from typing import Any

import jwt
from flask import current_app
from flask_login import current_user

from superset.extensions import security_manager


AGENT_TOKEN_AUDIENCE = "superset-agent-service"  # noqa: S105
AGENT_TOKEN_ISSUER = "superset"  # noqa: S105
AGENT_TOKEN_PURPOSE = "agent_chat"  # noqa: S105
DEFAULT_AGENT_TOKEN_TTL_SECONDS = 300
MIN_AGENT_TOKEN_TTL_SECONDS = 60
MAX_AGENT_TOKEN_TTL_SECONDS = 300


class AgentTokenError(Exception):
    """Base exception for agent token operations.

    Agent Token 操作的基础异常。
    """


class AgentTokenAuthenticationError(AgentTokenError):
    """The current request is not authenticated by a Superset session.

    当前请求没有通过 Superset Session 登录认证。
    """


class AgentTokenInvalidError(AgentTokenError):
    """The provided token is invalid, expired, or not intended for agents.

    提供的 Token 无效、已过期，或不是 Agent 专用 Token。
    """


def _signing_key() -> str:
    """Derive an agent-only signing key from Superset SECRET_KEY.

    从 Superset SECRET_KEY 派生 Agent 专用签名密钥。
    """
    secret_key = str(current_app.config["SECRET_KEY"]).encode()
    return hashlib.sha256(secret_key + b":v2-ai-agent-token").hexdigest()


def _token_ttl_seconds() -> int:
    """Return the configured token lifetime clamped to 1-5 minutes.

    返回配置的 Token 有效期，并限制在 1 到 5 分钟之间。
    """
    configured_ttl = int(
        current_app.config.get(
            "AI_AGENT_TOKEN_TTL_SECONDS",
            DEFAULT_AGENT_TOKEN_TTL_SECONDS,
        )
    )
    return max(
        MIN_AGENT_TOKEN_TTL_SECONDS,
        min(configured_ttl, MAX_AGENT_TOKEN_TTL_SECONDS),
    )


def create_agent_token() -> dict[str, Any]:
    """Create a short-lived token for the currently logged-in Superset user.

    为当前已登录的 Superset 用户创建短期 Agent Token。
    """
    if not current_user or not current_user.is_authenticated:
        raise AgentTokenAuthenticationError

    now = datetime.now(timezone.utc)
    expires_at = now + timedelta(seconds=_token_ttl_seconds())
    jti = str(uuid.uuid4())
    user_id = int(current_user.id)

    payload: dict[str, Any] = {
        "aud": AGENT_TOKEN_AUDIENCE,
        "exp": expires_at,
        "iat": now,
        "iss": AGENT_TOKEN_ISSUER,
        "jti": jti,
        "purpose": AGENT_TOKEN_PURPOSE,
        "sub": str(user_id),
        "token_type": "agent",
        "uid": user_id,
        # MCP default_user_resolver prefers username claims. Without this, MCP
        # may try to resolve sub="4" as a username and fall back to dev/admin.
        # MCP default_user_resolver ????? username?????? sub="4"
        # ?????????????????????
        "username": current_user.username,
    }
    token = jwt.encode(payload, _signing_key(), algorithm="HS256")

    return {
        "access_token": token,
        "expires_in": _token_ttl_seconds(),
        "jti": jti,
        "purpose": AGENT_TOKEN_PURPOSE,
        "token_type": "Bearer",
    }


def verify_agent_token(token: str) -> dict[str, Any]:
    """Validate an agent token and return its bound Superset user.

    校验 Agent Token，并返回绑定的 Superset 用户信息。
    """
    try:
        payload = jwt.decode(
            token,
            _signing_key(),
            algorithms=["HS256"],
            audience=AGENT_TOKEN_AUDIENCE,
            issuer=AGENT_TOKEN_ISSUER,
        )
    except jwt.PyJWTError as ex:
        raise AgentTokenInvalidError from ex

    if (
        payload.get("purpose") != AGENT_TOKEN_PURPOSE
        or payload.get("token_type") != "agent"
        or not payload.get("jti")
    ):
        raise AgentTokenInvalidError

    user_id = payload.get("uid") or payload.get("sub")
    try:
        user_id = int(user_id)
    except (TypeError, ValueError) as ex:
        raise AgentTokenInvalidError from ex

    user = security_manager.get_user_by_id(user_id)
    if user is None:
        raise AgentTokenInvalidError

    roles = [role.name for role in user.roles or []]

    return {
        "jti": payload["jti"],
        "purpose": AGENT_TOKEN_PURPOSE,
        "user_id": user.id,
        "username": user.username,
        "roles": roles,
        "permissions": {
            "roles": roles,
            "scopes": _agent_tool_scopes_for_current_user(),
            "dashboard_ids": [],
            "dataset_ids": [],
        },
    }


def _agent_tool_scopes_for_current_user() -> list[str]:
    """Return coarse Agent tool scopes for an authenticated Superset user.

    ????? Superset ???????? Agent ?? scopes?

    These scopes only decide whether the Agent may attempt a tool call. MCP and
    Superset still enforce dashboard, chart, dataset, and row-level permissions
    with the bearer token user on every request.

    ?? scopes ??? Agent ???????????MCP ? Superset ?????
    ????? Bearer Token ?????????????????????
    """

    return [
        "tool:list_dashboards",
        "tool:get_dashboard_info",
    ]

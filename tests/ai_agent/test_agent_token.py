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

import importlib
import os
from collections.abc import Iterator
from datetime import datetime, timedelta, timezone
from unittest.mock import MagicMock

import jwt
import pytest

from superset.app import SupersetApp
from superset.extensions import appbuilder
from superset.initialization import SupersetAppInitializer
from superset.v2.ai_agent.token import (
    _signing_key,
    AGENT_TOKEN_AUDIENCE,
    AGENT_TOKEN_ISSUER,
    AGENT_TOKEN_PURPOSE,
    AgentTokenAuthenticationError,
    AgentTokenInvalidError,
    create_agent_token,
    verify_agent_token,
)


@pytest.fixture(scope="session")
def app() -> object:
    """Create a Superset app for isolated agent token tests.

    为 Agent Token 测试创建独立的 Superset 应用。
    """
    app = SupersetApp(__name__)
    app.config.from_object("superset.config")
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        os.environ.get("SUPERSET__SQLALCHEMY_DATABASE_URI") or "sqlite://"
    )
    app.config["WTF_CSRF_ENABLED"] = False
    app.config["TESTING"] = True
    app.config["RATELIMIT_ENABLED"] = False
    app.config["SERVER_NAME"] = "example.com"
    app.config["APPLICATION_ROOT"] = "/"

    appbuilder.baseviews = []
    SupersetAppInitializer(app).init_app()

    with app.app_context():
        import superset.views.base  # pylint: disable=import-outside-toplevel

        importlib.reload(superset.views.base)

    return app


@pytest.fixture
def app_context(app: object) -> Iterator[None]:
    """Provide a Flask application context.

    提供 Flask 应用上下文。
    """
    with app.app_context():  # type: ignore[attr-defined]
        yield


@pytest.fixture
def client(app: object) -> Iterator[object]:
    """Provide a Flask test client.

    提供 Flask 测试客户端。
    """
    with app.test_client() as client:  # type: ignore[attr-defined]
        yield client


def test_create_agent_token_binds_current_user_without_roles(
    app_context: None,
    mocker: MagicMock,
) -> None:
    """A generated token is bound to the current user without role names.

    生成的 Token 绑定当前用户，并且不包含角色名。
    """
    current_user = MagicMock(
        id=7,
        username="alice",
        is_authenticated=True,
        roles=[MagicMock(name="Admin")],
    )
    mocker.patch("superset.v2.ai_agent.token.current_user", current_user)

    result = create_agent_token()
    payload = jwt.decode(
        result["access_token"],
        options={"verify_signature": False},
    )

    assert result["expires_in"] == 300
    assert result["purpose"] == AGENT_TOKEN_PURPOSE
    assert result["jti"] == payload["jti"]
    assert payload["aud"] == AGENT_TOKEN_AUDIENCE
    assert payload["iss"] == AGENT_TOKEN_ISSUER
    assert payload["purpose"] == AGENT_TOKEN_PURPOSE
    assert payload["sub"] == "7"
    assert payload["uid"] == 7
    assert payload["token_type"] == "agent"  # noqa: S105
    assert "roles" not in payload


def test_create_agent_token_requires_authenticated_session(
    app_context: None,
    mocker: MagicMock,
) -> None:
    """Anonymous requests cannot generate agent tokens.

    匿名请求不能生成 Agent Token。
    """
    current_user = MagicMock(is_authenticated=False)
    mocker.patch("superset.v2.ai_agent.token.current_user", current_user)

    with pytest.raises(AgentTokenAuthenticationError):
        create_agent_token()


def test_verify_agent_token_returns_bound_user(
    app_context: None,
    mocker: MagicMock,
) -> None:
    """A valid token resolves to the bound Superset user.

    有效 Token 会解析到绑定的 Superset 用户。
    """
    current_user = MagicMock(id=7, username="alice", is_authenticated=True)
    stored_user = MagicMock(id=7, username="alice")
    mocker.patch("superset.v2.ai_agent.token.current_user", current_user)
    mocker.patch(
        "superset.v2.ai_agent.token.security_manager.get_user_by_id",
        return_value=stored_user,
    )

    token = create_agent_token()["access_token"]
    result = verify_agent_token(token)

    assert result["user_id"] == 7
    assert result["username"] == "alice"
    assert result["purpose"] == AGENT_TOKEN_PURPOSE
    assert result["jti"]


def test_verify_agent_token_rejects_wrong_purpose(
    app_context: None,
    mocker: MagicMock,
) -> None:
    """Tokens for a different purpose are rejected.

    其他用途的 Token 会被拒绝。
    """
    now = datetime.now(timezone.utc)
    payload = {
        "aud": AGENT_TOKEN_AUDIENCE,
        "exp": now + timedelta(minutes=5),
        "iat": now,
        "iss": AGENT_TOKEN_ISSUER,
        "jti": "jti-for-test",
        "purpose": "another_purpose",
        "sub": "7",
        "token_type": "agent",
        "uid": 7,
    }
    token = jwt.encode(payload, _signing_key(), algorithm="HS256")
    mocker.patch(
        "superset.v2.ai_agent.token.security_manager.get_user_by_id",
        return_value=MagicMock(id=7, username="alice"),
    )

    with pytest.raises(AgentTokenInvalidError):
        verify_agent_token(token)


def test_verify_agent_token_rejects_expired_token(app_context: None) -> None:
    """Expired tokens are rejected.

    已过期的 Token 会被拒绝。
    """
    now = datetime.now(timezone.utc)
    payload = {
        "aud": AGENT_TOKEN_AUDIENCE,
        "exp": now - timedelta(seconds=1),
        "iat": now - timedelta(minutes=5),
        "iss": AGENT_TOKEN_ISSUER,
        "jti": "jti-for-test",
        "purpose": AGENT_TOKEN_PURPOSE,
        "sub": "7",
        "token_type": "agent",
        "uid": 7,
    }
    token = jwt.encode(payload, _signing_key(), algorithm="HS256")

    with pytest.raises(AgentTokenInvalidError):
        verify_agent_token(token)


def test_issue_agent_token_api_requires_session(
    client: MagicMock,
    mocker: MagicMock,
) -> None:
    """The issue endpoint returns 401 when no Superset session is present.

    没有 Superset Session 时，签发接口返回 401。
    """
    mocker.patch(
        "superset.v2.ai_agent.api.create_agent_token",
        side_effect=AgentTokenAuthenticationError,
    )

    response = client.post("/api/v1/agent/token/")

    assert response.status_code == 401


def test_issue_agent_token_api_returns_token(
    client: MagicMock,
    mocker: MagicMock,
) -> None:
    """The issue endpoint returns the generated agent token payload.

    签发接口返回生成的 Agent Token 响应体。
    """
    mocker.patch(
        "superset.v2.ai_agent.api.create_agent_token",
        return_value={
            "access_token": "token-for-test",
            "expires_in": 300,
            "jti": "jti-for-test",
            "purpose": AGENT_TOKEN_PURPOSE,
            "token_type": "Bearer",
        },
    )

    response = client.post("/api/v1/agent/token/")

    assert response.status_code == 200
    assert response.json["result"] == {
        "access_token": "token-for-test",
        "expires_in": 300,
        "jti": "jti-for-test",
        "purpose": AGENT_TOKEN_PURPOSE,
        "token_type": "Bearer",
    }


def test_issue_agent_token_api_supports_path_without_trailing_slash(
    client: MagicMock,
    mocker: MagicMock,
) -> None:
    """The issue endpoint supports the documented path without a trailing slash.

    签发接口支持文档中没有尾部斜杠的路径。
    """
    mocker.patch(
        "superset.v2.ai_agent.api.create_agent_token",
        return_value={
            "access_token": "token-for-test",
            "expires_in": 300,
            "jti": "jti-for-test",
            "purpose": AGENT_TOKEN_PURPOSE,
            "token_type": "Bearer",
        },
    )

    response = client.post("/api/v1/agent/token")

    assert response.status_code == 200


def test_verify_agent_token_api_returns_user(
    client: MagicMock,
    mocker: MagicMock,
) -> None:
    """The verify endpoint returns the user bound to the token.

    验证接口返回 Token 绑定的用户。
    """
    mocker.patch(
        "superset.v2.ai_agent.api.verify_agent_token",
        return_value={
            "jti": "jti-for-test",
            "purpose": AGENT_TOKEN_PURPOSE,
            "user_id": 7,
            "username": "alice",
        },
    )

    response = client.post(
        "/api/v1/agent/token/verify",
        json={"token": "token-for-test"},
    )

    assert response.status_code == 200
    assert response.json["result"] == {
        "jti": "jti-for-test",
        "purpose": AGENT_TOKEN_PURPOSE,
        "user_id": 7,
        "username": "alice",
    }


def test_verify_agent_token_api_rejects_invalid_token(
    client: MagicMock,
    mocker: MagicMock,
) -> None:
    """The verify endpoint returns 401 for invalid tokens.

    无效 Token 调用验证接口时返回 401。
    """
    mocker.patch(
        "superset.v2.ai_agent.api.verify_agent_token",
        side_effect=AgentTokenInvalidError,
    )

    response = client.post(
        "/api/v1/agent/token/verify",
        json={"token": "bad-token"},
    )

    assert response.status_code == 401


def test_verify_agent_token_api_rejects_invalid_payload(client: MagicMock) -> None:
    """The verify endpoint validates the request JSON payload.

    验证接口会校验请求 JSON 结构。
    """
    response = client.post("/api/v1/agent/token/verify", json={})

    assert response.status_code == 400


def test_agent_token_verify_endpoint_is_csrf_exempt(app: object) -> None:
    """The token verification endpoint is exempt from browser CSRF checks.

    Token 验证接口不依赖浏览器 Session，因此豁免 CSRF 检查。
    """
    assert "AgentTokenRestApi.verify" in app.config["WTF_CSRF_EXEMPT_LIST"]  # type: ignore[index]

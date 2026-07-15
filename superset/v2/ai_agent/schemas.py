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

from marshmallow import fields, Schema, validate

from superset.v2.ai_agent.token import AGENT_TOKEN_PURPOSE


class AgentTokenResponseSchema(Schema):
    """Describe the short-lived agent token response.

    描述短期 Agent Token 的响应结构。
    """

    access_token = fields.String(required=True)
    expires_in = fields.Integer(required=True)
    jti = fields.String(required=True)
    purpose = fields.Constant(AGENT_TOKEN_PURPOSE)
    token_type = fields.String(required=True)


class AgentTokenVerifySchema(Schema):
    """Validate an agent token verification request.

    校验 Agent Token 验证请求。
    """

    token = fields.String(
        required=True,
        validate=validate.Length(min=1),
    )

class AgentPermissionsSchema(Schema):
    """Describe Agent tool permissions returned after token verification.

    描述 Token 校验后返回给 Agent 的工具权限。
    """

    roles = fields.List(fields.String(), load_default=list, dump_default=list)
    scopes = fields.List(fields.String(), required=True)
    dashboard_ids = fields.List(fields.Integer(), load_default=list, dump_default=list)
    dataset_ids = fields.List(fields.Integer(), load_default=list, dump_default=list)


class AgentTokenVerifyResponseSchema(Schema):
    """Describe a successful agent token verification response.

    描述 Agent Token 验证成功后的响应结构。
    """

    jti = fields.String(required=True)
    purpose = fields.Constant(AGENT_TOKEN_PURPOSE)
    user_id = fields.Integer(required=True)
    username = fields.String(required=True)
    roles = fields.List(fields.String(), load_default=list, dump_default=list)
    permissions = fields.Nested(AgentPermissionsSchema, required=True)

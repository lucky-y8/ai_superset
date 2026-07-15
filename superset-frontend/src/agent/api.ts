/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable storybook/prefer-pascal-case */
import { SupersetClient } from '@superset-ui/core';
import { buildHttpUrl } from './config';
import type { AgentRunTrace, AgentTool } from './types';

type AgentTokenResponse = {
  token?: string;
  access_token?: string;
  expires_in?: number;
  result?: {
    token?: string;
    access_token?: string;
    expires_in?: number;
  };
};

type AgentTokenState = {
  token: string;
  expiresAt: number;
};

let cachedAgentToken: AgentTokenState | null = null;

const DEFAULT_AGENT_TOKEN_TTL_MS = 5 * 60 * 1000;
const AGENT_TOKEN_REFRESH_SKEW_MS = 30 * 1000;

function extractAgentToken(payload: AgentTokenResponse) {
  return (
    payload.token ||
    payload.access_token ||
    payload.result?.token ||
    payload.result?.access_token ||
    ''
  );
}

export async function getAgentToken() {
  if (cachedAgentToken && cachedAgentToken.expiresAt > Date.now()) {
    return cachedAgentToken.token;
  }

  const { json } = await SupersetClient.post({
    endpoint: '/api/v1/agent/token',
    jsonPayload: {},
  });
  const payload = json as AgentTokenResponse;
  const token = extractAgentToken(payload);
  if (!token) {
    throw new Error('Agent token response does not include token');
  }
  const expiresIn = payload.expires_in || payload.result?.expires_in;
  const ttlMs = Number.isFinite(expiresIn)
    ? Number(expiresIn) * 1000
    : DEFAULT_AGENT_TOKEN_TTL_MS;
  cachedAgentToken = {
    token,
    expiresAt: Date.now() + Math.max(0, ttlMs - AGENT_TOKEN_REFRESH_SKEW_MS),
  };
  return token;
}

export async function refreshAgentToken() {
  cachedAgentToken = null;
  return getAgentToken();
}

function addAgentTokenToBody(body: BodyInit | null | undefined, token: string) {
  if (typeof body !== 'string') {
    return body;
  }
  try {
    const payload = JSON.parse(body) as Record<string, unknown>;
    return JSON.stringify({
      ...payload,
      agent_token: token,
      token,
    });
  } catch {
    return body;
  }
}

export async function agentFetch<T>(
  baseUrl: string,
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const agentToken = await getAgentToken();
  const requestBody = addAgentTokenToBody(options.body, agentToken);
  const response = await fetch(buildHttpUrl(baseUrl, path, agentToken), {
    credentials: 'include',
    ...options,
    body: requestBody,
    headers: {
      ...(requestBody ? { 'Content-Type': 'application/json' } : {}),
      Authorization: `Bearer ${agentToken}`,
      'X-Superset-Agent-Token': agentToken,
      ...options.headers,
    },
  });
  const contentType = response.headers.get('content-type') || '';
  const responseBody = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const detail =
      typeof responseBody === 'object' &&
      responseBody !== null &&
      'detail' in responseBody
        ? String(responseBody.detail)
        : String(responseBody || `HTTP ${response.status}`);
    throw new Error(detail);
  }
  return responseBody as T;
}

export const getAgentHealth = (baseUrl: string) =>
  agentFetch<Record<string, unknown>>(baseUrl, '/api/v1/health');

export const getMcpStatus = (baseUrl: string) =>
  agentFetch<{
    server_name?: string;
    server_version?: string;
    protocol_version?: string;
    tool_count?: number;
  }>(baseUrl, '/api/v1/mcp/status');

export const getMcpTools = (baseUrl: string) =>
  agentFetch<{ tools: AgentTool[] }>(baseUrl, '/api/v1/mcp/tools');

export const callMcpTool = (
  baseUrl: string,
  name: string,
  toolArguments: Record<string, unknown>,
) =>
  agentFetch<Record<string, unknown>>(baseUrl, '/api/v1/mcp/call', {
    method: 'POST',
    body: JSON.stringify({ name, arguments: toolArguments }),
  });

export const getRunTrace = (baseUrl: string, runId: string) =>
  agentFetch<AgentRunTrace>(
    baseUrl,
    `/api/v1/runs/${encodeURIComponent(runId)}`,
  );

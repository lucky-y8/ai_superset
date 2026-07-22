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
import getBootstrapData from 'src/utils/getBootstrapData';

export const AGENT_BASE_URL_STORAGE_KEY = 'superset-agent-base-url';
export const AGENT_SESSION_STORAGE_KEY = 'superset-agent-assistant-session-v1';
// export const DEFAULT_AGENT_BASE_URL = 'http://localhost:9003';
export const DEFAULT_AGENT_BASE_URL = `https://ai.chexi.tech`;
declare global {
  interface Window {
    SUPERSET_AGENT_BASE_URL?: string;
  }
}

const normalizeBaseUrl = (value?: string | null) =>
  (value || '').trim().replace(/\/$/, '');

export function getBootstrapAgentBaseUrl() {
  const conf = getBootstrapData().common?.conf || {};
  return normalizeBaseUrl(
    (conf.SUPERSET_AGENT_BASE_URL as string | undefined) ||
      (conf.AGENT_BASE_URL as string | undefined) ||
      window.SUPERSET_AGENT_BASE_URL,
  );
}

export function getStoredAgentBaseUrl() {
  try {
    return normalizeBaseUrl(
      window.localStorage.getItem(AGENT_BASE_URL_STORAGE_KEY),
    );
  } catch {
    return '';
  }
}

export function getDefaultAgentBaseUrl() {
  // Priority: local override > backend bootstrap config > same-origin API.
  const stored = getStoredAgentBaseUrl();
  const bootstrap = getBootstrapAgentBaseUrl();
  return stored || bootstrap || DEFAULT_AGENT_BASE_URL;
}

export function persistAgentBaseUrl(value: string) {
  const normalizedValue = normalizeBaseUrl(value);
  if (normalizedValue) {
    window.localStorage.setItem(AGENT_BASE_URL_STORAGE_KEY, normalizedValue);
  } else {
    window.localStorage.removeItem(AGENT_BASE_URL_STORAGE_KEY);
  }
  return normalizedValue;
}

function appendQueryParam(url: string, name: string, value?: string | null) {
  if (!value) return url;
  const parsed = new URL(url, window.location.origin);
  parsed.searchParams.set(name, value);
  return parsed.pathname.startsWith('/') &&
    parsed.origin === window.location.origin
    ? `${parsed.pathname}${parsed.search}`
    : parsed.toString();
}

export function buildHttpUrl(
  baseUrl: string,
  path: string,
  agentToken?: string | null,
) {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  const url = normalizedBase ? `${normalizedBase}${path}` : path;
  return appendQueryParam(url, 'agent_token', agentToken);
}

export function buildWebSocketUrl(
  baseUrl: string,
  path: string,
  agentToken?: string | null,
) {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  if (normalizedBase) {
    const parsed = new URL(normalizedBase, window.location.origin);
    parsed.protocol = parsed.protocol === 'https:' ? 'wss:' : 'ws:';
    parsed.pathname = `${parsed.pathname.replace(/\/$/, '')}${path}`;
    parsed.search = '';
    if (agentToken) {
      parsed.searchParams.set('agent_token', agentToken);
    }
    parsed.hash = '';
    return parsed.toString();
  }

  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const parsed = new URL(`${protocol}//${window.location.host}${path}`);
  if (agentToken) {
    parsed.searchParams.set('agent_token', agentToken);
  }
  return parsed.toString();
}

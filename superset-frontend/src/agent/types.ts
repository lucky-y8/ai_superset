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

export type AgentView = 'chat' | 'tools' | 'trace' | 'settings';

export type AgentMessageRole = 'user' | 'assistant';

export type AgentMessage = {
  id: string;
  role: AgentMessageRole;
  content: string;
  streaming?: boolean;
};

export type AgentContext = {
  dashboard_id: string | null;
  chart_id: string | null;
  time_range: string | null;
  filters: Record<string, unknown>;
  user_id: string;
  tenant_id: string | null;
  roles: string[];
};

export type AgentRunTraceEvent = {
  event_type: string;
  created_at: string;
  payload?: Record<string, unknown>;
};

export type AgentRunTrace = {
  run_id?: string;
  user_id?: string;
  status?: string;
  question?: string;
  final_answer?: string;
  started_at?: string;
  completed_at?: string;
  duration_ms?: number;
  total_tokens?: number;
  input_tokens?: number;
  output_tokens?: number;
  error_message?: string;
  events?: AgentRunTraceEvent[];
};

export type AgentTool = {
  name: string;
  description?: string;
  input_schema?: Record<string, unknown>;
  [key: string]: unknown;
};

export type AgentSocketMessage = {
  type: string;
  run_id?: string;
  event?: AgentRunTraceEvent;
  payload?: {
    delta?: string;
    [key: string]: unknown;
  };
  response?: {
    run_id: string;
    answer: string;
  };
  error?: string;
};

export type AgentHealthStatus = {
  agentOnline: boolean;
  mcpOnline: boolean;
  socketOnline: boolean;
  agentText: string;
  mcpText: string;
  socketText: string;
};

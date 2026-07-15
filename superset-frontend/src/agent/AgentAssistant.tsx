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
/* eslint-disable theme-colors/no-literal-colors */
import {
  type FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@apache-superset/core/theme';
import Markdown from 'markdown-to-jsx';
import getBootstrapData from 'src/utils/getBootstrapData';
import {
  callMcpTool,
  getAgentToken,
  getAgentHealth,
  getMcpStatus,
  getMcpTools,
  getRunTrace,
  refreshAgentToken,
} from './api';
import {
  AGENT_SESSION_STORAGE_KEY,
  buildWebSocketUrl,
  getDefaultAgentBaseUrl,
  persistAgentBaseUrl,
} from './config';
import CuteAiCatIcon from './assets/cute_ai_cat_blue.svg';
import type {
  AgentContext,
  AgentHealthStatus,
  AgentMessage,
  AgentRunTrace,
  AgentRunTraceEvent,
  AgentSocketMessage,
  AgentTool,
  AgentView,
} from './types';

const makeId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

type PersistedAgentSession = {
  messages?: AgentMessage[];
  events?: AgentRunTraceEvent[];
  currentRunId?: string;
  trace?: AgentRunTrace;
};

const initialHealth: AgentHealthStatus = {
  agentOnline: false,
  mcpOnline: false,
  socketOnline: false,
  agentText: 'Agent 未检测',
  mcpText: 'MCP 未检测',
  socketText: '实时通道未连接',
};

const eventLabels: Record<string, [string, string]> = {
  run_started: ['开始运行', '已接收请求并创建运行记录'],
  plan: ['分析问题', '正在整理问题和上下文'],
  tools_discovered: ['发现工具', '已读取当前身份可用的 MCP 工具'],
  tool_plan: ['规划工具', '模型已选择下一步工具'],
  tool_started: ['执行工具', '正在调用 Superset MCP'],
  tool_completed: ['工具完成', 'MCP 已返回结果'],
  tool_failed: ['工具失败', '工具调用出现错误'],
  answer_generated: ['生成回答', '模型已完成最终回答'],
  run_completed: ['运行完成', '本次 Agent 运行已结束'],
  run_failed: ['运行失败', '本次 Agent 运行未完成'],
};

const SOCKET_TOKEN_REFRESH_INTERVAL_MS = 4.5 * 60 * 1000;

const Shell = styled.div`
  position: fixed;
  inset: auto 24px 24px auto;
  z-index: 2147482500;
  font-family: inherit;
`;

const Launcher = styled.button`
  position: relative;
  width: 108px;
  height: 108px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: #1f252b;
  background: transparent;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  cursor: pointer;
  transition:
    transform 220ms ease,
    filter 220ms ease,
    box-shadow 220ms ease;

  &:hover {
    transform: translateY(-5px) scale(1.05) rotate(-2deg);
    filter: saturate(1.08);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }

  &:hover svg {
    animation: catBounce 760ms cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  svg {
    width: 116px;
    height: 116px;
    display: block;
    transform-origin: center bottom;
    pointer-events: none;
    animation: catIdleFloat 3.2s ease-in-out infinite;
    filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));
  }

  @keyframes catIdleFloat {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-5px) rotate(1.4deg);
    }
  }

  @keyframes catBounce {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    42% {
      transform: translateY(3px) scale(0.96) rotate(-3deg);
    }
    78% {
      transform: translateY(-4px) scale(1.04) rotate(2deg);
    }
  }
`;

const PanelOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2147482501;
  background: rgba(30, 36, 42, 0.24);
  backdrop-filter: blur(4px);
`;

const Panel = styled.section`
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 2147482502;
  width: min(1180px, calc(100vw - 44px));
  height: min(760px, calc(100vh - 44px));
  display: grid;
  grid-template-columns: 218px minmax(0, 1fr);
  overflow: hidden;
  color: #1f252b;
  background: #f8f8f8;
  border: 1px solid rgba(61, 69, 77, 0.14);
  border-radius: 14px;
  box-shadow: 0 30px 90px rgba(31, 37, 43, 0.28);

  @media (max-width: 900px) {
    grid-template-columns: 68px minmax(0, 1fr);
  }

  @media (max-width: 720px) {
    inset: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

const Sidebar = styled.aside`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 16px 12px;
  color: #404a52;
  background: #f8f8f8;
  border-right: 1px solid #ececec;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  min-height: 48px;
  padding: 0 8px 16px;
  border-bottom: 1px solid #ececec;

  strong,
  span {
    display: block;
    letter-spacing: 0;
  }

  strong {
    font-size: 14px;
    color: #1f252b;
  }

  span {
    margin-top: 3px;
    color: #6f7a82;
    font-size: 11px;
  }

  @media (max-width: 900px) {
    div {
      display: none;
    }
  }
`;

const Mark = styled.div`
  width: 32px;
  height: 32px;
  display: grid;
  flex: 0 0 32px;
  place-items: center;
  color: #fff;
  font-weight: 800;
  background: linear-gradient(145deg, #22a78c, #168b68);
  border-radius: 7px;
`;

const Nav = styled.nav`
  display: grid;
  gap: 4px;
  margin-top: 16px;
`;

const NavButton = styled.button<{ $active: boolean }>`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  border: 0;
  border-radius: 6px;
  color: ${({ $active }) => ($active ? '#1f252b' : '#5f6a72')};
  background: ${({ $active }) => ($active ? '#ffffff' : 'transparent')};
  text-align: left;

  &:hover {
    color: #1f252b;
    background: #ffffff;
  }

  i {
    position: relative;
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    color: ${({ $active }) => ($active ? '#168b68' : '#8a948b')};
  }

  i::before,
  i::after {
    position: absolute;
    content: '';
    box-sizing: border-box;
  }

  i[data-icon='chat']::before {
    top: 4px;
    left: 3px;
    width: 14px;
    height: 11px;
    border: 1.6px solid currentColor;
    border-radius: 5px;
  }

  i[data-icon='chat']::after {
    top: 13px;
    left: 7px;
    width: 6px;
    height: 6px;
    border-right: 1.6px solid currentColor;
    border-bottom: 1.6px solid currentColor;
    background: #ffffff;
    transform: rotate(45deg);
  }

  i[data-icon='tools']::before {
    top: 4px;
    left: 4px;
    width: 5px;
    height: 5px;
    border: 1.6px solid currentColor;
    border-radius: 50%;
    box-shadow:
      7px 0 0 -1.6px #ffffff,
      7px 0 0 0 currentColor,
      3.5px 8px 0 -1.6px #ffffff,
      3.5px 8px 0 0 currentColor;
  }

  i[data-icon='tools']::after {
    top: 8px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-top: 1.6px solid currentColor;
    border-left: 1.6px solid currentColor;
    transform: rotate(45deg);
  }

  i[data-icon='trace']::before {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-left: 1.6px solid currentColor;
    border-bottom: 1.6px solid currentColor;
    border-radius: 0 0 0 4px;
  }

  i[data-icon='trace']::after {
    top: 5px;
    left: 8px;
    width: 8px;
    height: 1.6px;
    background: currentColor;
    border-radius: 99px;
    box-shadow:
      0 5px 0 currentColor,
      0 10px 0 currentColor;
  }

  i[data-icon='settings']::before {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border: 1.6px solid currentColor;
    border-radius: 50%;
    box-shadow:
      0 -4px 0 -2px currentColor,
      0 4px 0 -2px currentColor,
      4px 0 0 -2px currentColor,
      -4px 0 0 -2px currentColor;
  }

  i[data-icon='settings']::after {
    top: 8px;
    left: 8px;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 50%;
  }

  @media (max-width: 900px) {
    justify-content: center;
    padding: 0;
    font-size: 0;

    i {
      margin: 0;
    }
  }
`;

const ConnectionPanel = styled.div`
  display: grid;
  gap: 10px;
  margin-top: auto;
  padding: 15px 9px 2px;
  color: #647079;
  font-size: 12px;
  border-top: 1px solid #ececec;

  @media (max-width: 900px) {
    span:not(.dot),
    button {
      display: none;
    }
  }
`;

const StatusLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.span<{ $online: boolean }>`
  width: 8px;
  height: 8px;
  flex: 0 0 8px;
  background: ${({ $online }) => ($online ? '#42c793' : '#e66a67')};
  border-radius: 50%;
`;

const TextButton = styled.button`
  padding: 4px 0;
  border: 0;
  color: #168b68;
  background: transparent;
  text-align: left;
`;

const Workspace = styled.main`
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  overflow: hidden;
`;

const Topbar = styled.header`
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 18px;
  background: #ffffff;
  border-bottom: 1px solid #ececec;

  h2 {
    margin: 0;
    font-size: 15px;
  }

  p {
    margin: 4px 0 0;
    color: #74808a;
    font-size: 12px;
  }
`;

const IconButton = styled.button`
  min-width: 34px;
  height: 34px;
  border: 1px solid #e4e4e4;
  border-radius: 7px;
  color: #4b5563;
  background: #ffffff;
`;

const TopbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Content = styled.div`
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  overflow: hidden;
`;

const ChatLayout = styled.div`
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  overflow: hidden;

  @media (max-width: 980px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Conversation = styled.div`
  min-width: 0;
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  overflow: hidden;
  background: #ffffff;
`;

const Messages = styled.div`
  min-height: 0;
  padding: 24px clamp(18px, 5vw, 68px) 18px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c9c9c9 transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #c9c9c9;
    border: 2px solid #ffffff;
    border-radius: 99px;
  }
`;

const MessageRow = styled.article<{ $role: string }>`
  max-width: 880px;
  display: flex;
  justify-content: ${({ $role }) =>
    $role === 'user' ? 'flex-end' : 'flex-start'};
  gap: 12px;
  margin: 0 auto 22px;
`;

const MessageBubble = styled.div<{ $role: string }>`
  max-width: ${({ $role }) => ($role === 'user' ? '74%' : '100%')};
  min-width: 0;
  padding: ${({ $role }) => ($role === 'user' ? '12px 14px' : '0')};
  color: #242a30;
  background: ${({ $role }) => ($role === 'user' ? '#f8f8f8' : 'transparent')};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.65;
  white-space: pre-wrap;

  strong {
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
  }
`;

const StreamingCursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 15px;
  margin-left: 3px;
  vertical-align: -2px;
  background: #168b68;
  animation: blink 900ms infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

const MarkdownBody = styled.div`
  overflow-wrap: anywhere;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 18px 0 8px;
    color: #1f252b;
    font-weight: 700;
    line-height: 1.35;
  }

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 16px;
  }

  h4 {
    font-size: 14px;
  }

  p {
    margin: 0 0 12px;
  }

  ul,
  ol {
    margin: 8px 0 14px;
    padding-left: 22px;
  }

  li {
    margin: 4px 0;
  }

  table {
    display: block;
    max-width: 100%;
    margin: 12px 0 16px;
    overflow-x: auto;
    border-collapse: collapse;
    font-size: 13px;
    background: #ffffff;
  }

  th,
  td {
    padding: 8px 10px;
    border: 1px solid #e4e4e4;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: #f8f8f8;
    font-weight: 700;
  }

  blockquote {
    margin: 12px 0;
    padding: 8px 12px;
    color: #5f6a72;
    background: #f8f8f8;
    border-left: 3px solid #22a78c;
  }

  code {
    padding: 2px 5px;
    color: #1f252b;
    background: #f2f2f2;
    border-radius: 4px;
    font-family: 'Cascadia Code', Consolas, monospace;
    font-size: 0.92em;
  }

  pre {
    margin: 12px 0 16px;
    padding: 14px;
    overflow: auto;
    color: #dce5eb;
    background: #252c32;
    border: 1px solid #171c20;
    border-radius: 6px;
  }

  pre code {
    padding: 0;
    color: inherit;
    background: transparent;
    border-radius: 0;
  }
`;

const Composer = styled.form`
  flex: 0 0 auto;
  margin: 0 clamp(16px, 4vw, 58px) 18px;
  padding: 12px;
  background: #ffffff;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(36, 46, 54, 0.12);

  textarea {
    width: 100%;
    min-height: 70px;
    max-height: 180px;
    padding: 4px;
    border: 0;
    outline: 0;
    color: #20262b;
    line-height: 1.5;
    resize: vertical;
    background: transparent;
  }
`;

const ContextDetails = styled.details`
  margin-top: 8px;
  padding-top: 10px;
  border-top: 1px solid #e8e2d9;

  summary {
    color: #69757e;
    font-size: 12px;
    cursor: pointer;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.label`
  display: block;
  color: #647079;
  font-size: 11px;
  font-weight: 650;

  input,
  textarea,
  select {
    width: 100%;
    margin-top: 5px;
    padding: 9px 10px;
    border: 1px solid #c7cfd5;
    border-radius: 6px;
    outline: none;
    color: #252b30;
    background: #fffdfa;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
    font-family: 'Cascadia Code', Consolas, monospace;
  }

  input:focus,
  textarea:focus {
    border-color: #168b68;
    box-shadow: 0 0 0 3px rgba(22, 139, 104, 0.12);
  }
`;

const ComposerFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 10px;
  color: #89939b;
  font-size: 11px;
`;

const PrimaryButton = styled.button`
  min-height: 36px;
  padding: 7px 14px;
  border: 1px solid #168b68;
  border-radius: 7px;
  color: #fff;
  background: #168b68;
  font-weight: 700;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;

const SecondaryButton = styled.button`
  min-height: 34px;
  padding: 7px 12px;
  border: 1px solid #9fb5ad;
  border-radius: 7px;
  color: #245f4d;
  background: #fff;
  font-weight: 700;
`;

const ActivityPanel = styled.aside`
  min-width: 0;
  min-height: 0;
  max-height: 100%;
  overflow-y: auto;
  background: #f8f8f8;
  border-left: 1px solid #ececec;
  scrollbar-width: thin;
  scrollbar-color: #c9c9c9 transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #c9c9c9;
    border: 2px solid #f8f8f8;
    border-radius: 99px;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const ActivityHeader = styled.div`
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid #ececec;

  h3 {
    margin: 0;
    font-size: 14px;
  }

  span {
    display: block;
    margin-top: 4px;
    color: #7b8790;
    font-size: 11px;
    overflow-wrap: anywhere;
  }
`;

const Summary = styled.section`
  padding: 14px 16px 16px;
  background: #f8f8f8;
  border-bottom: 1px solid #ececec;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

const SummaryCard = styled.div`
  min-width: 0;
  padding: 10px 11px;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 7px;

  span {
    display: block;
    margin-bottom: 5px;
    color: #7b8790;
    font-size: 10px;
    font-weight: 700;
  }

  strong {
    display: block;
    color: #252d33;
    font-size: 12px;
    overflow-wrap: anywhere;
  }
`;

const ActivityList = styled.ol`
  margin: 0;
  padding: 18px;
  list-style: none;
`;

const ActivityItem = styled.li<{ $status: string }>`
  position: relative;
  min-height: 54px;
  padding: 0 0 17px 27px;
  border-left: 1px solid #cbd3d8;

  &:last-child {
    border-left-color: transparent;
  }

  &::before {
    position: absolute;
    top: 2px;
    left: -6px;
    width: 11px;
    height: 11px;
    content: '';
    background: ${({ $status }) =>
      $status === 'failed'
        ? '#d85c58'
        : $status === 'done'
          ? '#45b78e'
          : '#168b68'};
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px
      ${({ $status }) => ($status === 'failed' ? '#d85c58' : '#168b68')};
  }
`;

const ActivityTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;

  strong {
    font-size: 12px;
  }

  time {
    color: #929ca4;
    font-size: 10px;
  }
`;

const ActivityDetail = styled.p`
  margin: 5px 0 0;
  color: #6c7881;
  font-size: 11px;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

const EmptyState = styled.div`
  padding: 28px 12px;
  color: #87929a;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
`;

const ToolLayout = styled.div`
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  overflow: hidden;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
`;

const ToolForm = styled.div`
  padding: 22px;
  background: #ffffff;
  border-right: 1px solid #ececec;

  ${PrimaryButton} {
    width: 100%;
    margin-top: 12px;
  }
`;

const Output = styled.pre`
  height: 100%;
  min-height: 0;
  margin: 0;
  padding: 18px;
  overflow: auto;
  color: #d9e2e8;
  font-family: 'Cascadia Code', Consolas, monospace;
  font-size: 12px;
  line-height: 1.55;
  white-space: pre-wrap;
  background: #252c32;
  scrollbar-width: thin;
`;

const TraceLayout = styled.div`
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr);
  overflow: hidden;
  background: #fff;
`;

const TraceToolbar = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 1fr) 110px;
  gap: 10px;
  padding: 18px 22px;
  border-bottom: 1px solid #e2ddd3;
`;

const TraceBody = styled.div`
  min-height: 0;
  padding: 18px 24px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #c9c9c9 transparent;
`;

const Settings = styled.div`
  max-width: 760px;
  padding: 24px;
`;

const Toast = styled.div<{ $visible: boolean; $error: boolean }>`
  position: fixed;
  right: 42px;
  bottom: 104px;
  z-index: 2147482503;
  max-width: min(420px, calc(100vw - 44px));
  padding: 11px 14px;
  color: #fff;
  background: ${({ $error }) => ($error ? '#a63e3b' : '#293139')};
  border-radius: 7px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: none;
  transform: translateY(${({ $visible }) => ($visible ? 0 : 8)}px);
  transition: 160ms ease;
`;

function pretty(value: unknown) {
  return JSON.stringify(value, null, 2);
}

function formatDuration(milliseconds?: number) {
  if (!Number.isFinite(milliseconds)) {
    return '-';
  }
  return milliseconds! < 1000
    ? `${milliseconds} ms`
    : `${(milliseconds! / 1000).toFixed(2)} s`;
}

function formatTokens(trace?: AgentRunTrace | null) {
  const total = trace?.total_tokens;
  if (!Number.isFinite(total)) {
    return '未返回';
  }
  const input = Number.isFinite(trace?.input_tokens) ? trace?.input_tokens : 0;
  const output = Number.isFinite(trace?.output_tokens)
    ? trace?.output_tokens
    : 0;
  return `${total} total | ${input} in / ${output} out`;
}

function formatDateTime(value?: string) {
  return value ? new Date(value).toLocaleString() : '-';
}

function compactText(value?: string, maxLength = 220) {
  const text = String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function safeJsonParse(value: string, fallback: Record<string, unknown>) {
  try {
    return JSON.parse(value || '{}') as Record<string, unknown>;
  } catch {
    return fallback;
  }
}

function getDefaultContext(): AgentContext {
  const bootstrapData = getBootstrapData();
  const params = new URLSearchParams(window.location.search);
  const user =
    bootstrapData.user && 'username' in bootstrapData.user
      ? bootstrapData.user
      : undefined;
  const roleNames =
    bootstrapData.user && 'roles' in bootstrapData.user
      ? Object.keys(bootstrapData.user.roles || {})
      : [];

  return {
    dashboard_id:
      params.get('dashboard_id') ||
      params.get('dashboardId') ||
      params.get('id') ||
      null,
    chart_id: params.get('chart_id') || params.get('slice_id') || null,
    time_range: params.get('time_range') || null,
    filters: {},
    user_id: user?.username || String(user?.userId || 'superset-user'),
    tenant_id: null,
    roles: roleNames.length ? roleNames : ['user'],
  };
}

function readPersistedSession(): PersistedAgentSession | null {
  try {
    return JSON.parse(
      window.localStorage.getItem(AGENT_SESSION_STORAGE_KEY) || 'null',
    ) as PersistedAgentSession | null;
  } catch {
    return null;
  }
}

function activityStatus(eventType: string) {
  if (eventType === 'run_failed' || eventType === 'tool_failed') {
    return 'failed';
  }
  if (eventType === 'run_completed' || eventType === 'tool_completed') {
    return 'done';
  }
  return 'active';
}

function activityDetail(event: AgentRunTraceEvent) {
  const payload = event.payload || {};
  if (event.event_type === 'tools_discovered') {
    return `发现 ${String(payload.count || 0)} 个可用工具`;
  }
  if (event.event_type === 'tool_plan') {
    const tools = Array.isArray(payload.tools) ? payload.tools.join(', ') : '';
    return `计划调用：${tools || '未知工具'}`;
  }
  if (event.event_type === 'tool_started') {
    return `${String(payload.tool || '工具')} ${pretty(payload.arguments || {})}`;
  }
  if (event.event_type === 'tool_completed') {
    return `${String(payload.tool || '工具')} 已返回结果`;
  }
  if (payload.error) {
    return String(payload.error);
  }
  return eventLabels[event.event_type]?.[1] || '运行事件';
}

function MarkdownText({
  text,
  streaming,
}: {
  text: string;
  streaming?: boolean;
}) {
  return (
    <MarkdownBody>
      <Markdown
        options={{
          disableParsingRawHTML: true,
          forceBlock: true,
          optimizeForStreaming: Boolean(streaming),
          wrapper: 'div',
        }}
      >
        {text || (streaming ? ' ' : '')}
      </Markdown>
      {streaming && <StreamingCursor />}
    </MarkdownBody>
  );
}

export default function AgentAssistant() {
  const location = useLocation();
  const hiddenOnLogin = /^\/login\/?/.test(location.pathname);
  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimerRef = useRef<number | null>(null);
  const socketTokenRefreshTimerRef = useRef<number | null>(null);
  const intentionalSocketCloseRef = useRef(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const persistedSessionRef = useRef(readPersistedSession());
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<AgentView>('chat');
  const [baseUrl, setBaseUrl] = useState(getDefaultAgentBaseUrl);
  const [baseUrlDraft, setBaseUrlDraft] = useState(baseUrl);
  const [question, setQuestion] = useState(
    '请查询 Superset 中现有的仪表盘，返回前 5 个仪表盘的 ID、标题和发布状态。',
  );
  const [context, setContext] = useState<AgentContext>(getDefaultContext);
  const [filtersText, setFiltersText] = useState('{}');
  const [messages, setMessages] = useState<AgentMessage[]>([
    ...(persistedSessionRef.current?.messages?.length
      ? persistedSessionRef.current.messages
      : [
          {
            id: makeId(),
            role: 'assistant' as const,
            content:
              '你好，我是 Superset Agent。可以帮你查询仪表盘、图表、数据集和 SQL Lab。发送问题后，右侧会实时显示执行步骤。',
          },
        ]),
  ]);
  const [health, setHealth] = useState<AgentHealthStatus>(initialHealth);
  const [running, setRunning] = useState(false);
  const [currentRunId, setCurrentRunId] = useState<string | null>(
    persistedSessionRef.current?.currentRunId || null,
  );
  const [events, setEvents] = useState<AgentRunTraceEvent[]>(
    persistedSessionRef.current?.events || [],
  );
  const [trace, setTrace] = useState<AgentRunTrace | null>(
    persistedSessionRef.current?.trace || null,
  );
  const [tools, setTools] = useState<AgentTool[]>([]);
  const [toolName, setToolName] = useState('');
  const [toolArguments, setToolArguments] = useState('{}');
  const [toolResult, setToolResult] = useState('等待工具调用...');
  const [traceRunId, setTraceRunId] = useState(
    persistedSessionRef.current?.currentRunId || '',
  );
  const [toast, setToast] = useState({
    visible: false,
    error: false,
    text: '',
  });

  const activeTitle = useMemo(() => {
    if (view === 'tools') return ['MCP 工具', '查看工具 schema 并直接调试。'];
    if (view === 'trace') return ['Run Trace', '查询已完成或失败的运行事件。'];
    if (view === 'settings') return ['设置', '配置 Agent 服务域名和上下文。'];
    return ['Agent 对话', '像 Codex 一样边对话边观察工具执行过程。'];
  }, [view]);

  const showToast = useCallback((text: string, error = false) => {
    setToast({ visible: true, error, text });
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(
      () => setToast(current => ({ ...current, visible: false })),
      3000,
    );
  }, []);

  const persistSession = useCallback(() => {
    try {
      window.localStorage.setItem(
        AGENT_SESSION_STORAGE_KEY,
        JSON.stringify({ messages, events, currentRunId, trace }),
      );
    } catch {
      // Ignore storage failures in private browsing or locked-down browsers.
    }
  }, [currentRunId, events, messages, trace]);

  const refreshTrace = useCallback(
    async (runId: string, showErrors = false) => {
      if (!runId) return null;
      try {
        const runTrace = await getRunTrace(baseUrl, runId);
        setTrace(runTrace);
        if (Array.isArray(runTrace.events)) {
          setEvents(runTrace.events);
        }
        return runTrace;
      } catch (error) {
        if (showErrors) {
          showToast((error as Error).message, true);
        }
        return null;
      }
    },
    [baseUrl, showToast],
  );

  const refreshStatus = useCallback(async () => {
    const [agentCheck, mcpCheck] = await Promise.allSettled([
      getAgentHealth(baseUrl),
      getMcpStatus(baseUrl),
    ]);

    setHealth(current => ({
      ...current,
      agentOnline: agentCheck.status === 'fulfilled',
      mcpOnline: mcpCheck.status === 'fulfilled',
      agentText:
        agentCheck.status === 'fulfilled' ? 'Agent 在线' : 'Agent 离线',
      mcpText:
        mcpCheck.status === 'fulfilled'
          ? `MCP 在线 · ${mcpCheck.value.tool_count || 0} tools`
          : 'MCP 状态未确认',
    }));
  }, [baseUrl]);

  const connectSocket = useCallback(
    async (forceRefreshToken = false) => {
      if (reconnectTimerRef.current) {
        window.clearTimeout(reconnectTimerRef.current);
      }
      if (socketTokenRefreshTimerRef.current) {
        window.clearTimeout(socketTokenRefreshTimerRef.current);
      }
      if (socketRef.current) {
        intentionalSocketCloseRef.current = true;
        socketRef.current.close();
      }

      let agentToken = '';
      try {
        agentToken = forceRefreshToken
          ? await refreshAgentToken()
          : await getAgentToken();
      } catch (error) {
        setHealth(current => ({
          ...current,
          socketOnline: false,
          socketText: '实时通道 token 获取失败',
        }));
        showToast((error as Error).message, true);
        reconnectTimerRef.current = window.setTimeout(() => {
          connectSocket().catch(connectError =>
            showToast((connectError as Error).message, true),
          );
        }, 3000);
        return;
      }

      const socket = new WebSocket(
        buildWebSocketUrl(baseUrl, '/api/v1/agents/ws', agentToken),
      );
      socketRef.current = socket;

      socket.addEventListener('open', () => {
        setHealth(current => ({
          ...current,
          socketOnline: true,
          socketText: '实时通道在线',
        }));
        socketTokenRefreshTimerRef.current = window.setTimeout(() => {
          connectSocket(true).catch(error =>
            showToast((error as Error).message, true),
          );
        }, SOCKET_TOKEN_REFRESH_INTERVAL_MS);
      });

      socket.addEventListener('message', event => {
        const message = JSON.parse(event.data) as AgentSocketMessage;
        if (message.type === 'connected') return;
        if (message.run_id) {
          setCurrentRunId(message.run_id);
          setTraceRunId(message.run_id);
        }
        if (message.type === 'run_event' && message.event) {
          setEvents(current => [
            ...current,
            message.event as AgentRunTraceEvent,
          ]);
          if (
            [
              'tools_discovered',
              'tool_plan',
              'tool_started',
              'tool_completed',
            ].includes(message.event.event_type)
          ) {
            const toolCount = message.event.payload?.count;
            setHealth(current => ({
              ...current,
              mcpOnline: true,
              mcpText: Number.isFinite(toolCount)
                ? `MCP 在线 · ${toolCount} tools`
                : 'MCP 在线',
            }));
          }
          if (
            ['run_completed', 'run_failed'].includes(
              message.event.event_type,
            ) &&
            message.run_id
          ) {
            window.setTimeout(
              () => refreshTrace(message.run_id as string),
              350,
            );
          }
          return;
        }
        if (message.type === 'answer_delta') {
          const delta = message.payload?.delta || '';
          setMessages(current =>
            current.map(item =>
              item.streaming
                ? { ...item, content: `${item.content}${delta}` }
                : item,
            ),
          );
          return;
        }
        if (message.type === 'final' && message.response) {
          setRunning(false);
          setCurrentRunId(message.response.run_id);
          setTraceRunId(message.response.run_id);
          setMessages(current =>
            current.map(item =>
              item.streaming
                ? {
                    ...item,
                    content: message.response?.answer || item.content,
                    streaming: false,
                  }
                : item,
            ),
          );
          window.setTimeout(() => refreshTrace(message.response!.run_id), 350);
          showToast('Agent 运行完成');
          return;
        }
        if (message.type === 'error') {
          setRunning(false);
          setMessages(current =>
            current.map(item =>
              item.streaming
                ? {
                    ...item,
                    content: `运行失败：${message.error || '未知错误'}`,
                    streaming: false,
                  }
                : item,
            ),
          );
          showToast(message.error || 'Agent 运行失败', true);
        }
      });

      socket.addEventListener('close', () => {
        if (socketTokenRefreshTimerRef.current) {
          window.clearTimeout(socketTokenRefreshTimerRef.current);
        }
        if (intentionalSocketCloseRef.current) {
          intentionalSocketCloseRef.current = false;
          return;
        }
        setHealth(current => ({
          ...current,
          socketOnline: false,
          socketText: '实时通道重连中',
        }));
        reconnectTimerRef.current = window.setTimeout(() => {
          connectSocket().catch(error =>
            showToast((error as Error).message, true),
          );
        }, 1500);
      });

      socket.addEventListener('error', () => {
        setHealth(current => ({
          ...current,
          socketOnline: false,
          socketText: '实时通道异常',
        }));
      });
    },
    [baseUrl, refreshTrace, showToast],
  );

  useEffect(() => {
    if (hiddenOnLogin) return undefined;
    connectSocket().catch(error => showToast((error as Error).message, true));
    refreshStatus();
    return () => {
      if (reconnectTimerRef.current) {
        window.clearTimeout(reconnectTimerRef.current);
      }
      if (socketTokenRefreshTimerRef.current) {
        window.clearTimeout(socketTokenRefreshTimerRef.current);
      }
      if (socketRef.current) {
        intentionalSocketCloseRef.current = true;
        socketRef.current.close();
      }
    };
  }, [connectSocket, hiddenOnLogin, refreshStatus, showToast]);

  useEffect(() => {
    persistSession();
  }, [persistSession]);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  if (hiddenOnLogin) {
    return null;
  }

  const submitQuestion = async (event: FormEvent) => {
    event.preventDefault();
    if (running) return;
    const cleanQuestion = question.trim();
    if (!cleanQuestion) {
      showToast('请输入问题', true);
      return;
    }
    if (socketRef.current?.readyState !== WebSocket.OPEN) {
      showToast('实时通道尚未连接，请稍后重试', true);
      return;
    }

    let agentToken = '';
    try {
      agentToken = await getAgentToken();
    } catch (error) {
      showToast((error as Error).message, true);
      return;
    }

    const parsedFilters = safeJsonParse(filtersText, {});
    const requestContext = { ...context, filters: parsedFilters };
    setRunning(true);
    setCurrentRunId(null);
    setTrace(null);
    setEvents([]);
    setMessages(current => [
      ...current,
      { id: makeId(), role: 'user', content: cleanQuestion },
      { id: makeId(), role: 'assistant', content: '', streaming: true },
    ]);
    socketRef.current.send(
      JSON.stringify({
        type: 'run',
        token: agentToken,
        agent_token: agentToken,
        access_token: agentToken,
        request: {
          question: cleanQuestion,
          dashboard_id: requestContext.dashboard_id,
          chart_id: requestContext.chart_id,
          time_range: requestContext.time_range,
          filters: requestContext.filters,
        },
        context: {
          user_id: requestContext.user_id,
          tenant_id: requestContext.tenant_id,
          roles: requestContext.roles,
        },
      }),
    );
  };

  const clearChat = () => {
    setMessages([
      {
        id: makeId(),
        role: 'assistant',
        content: '对话已清空。继续提问后，我会重新开始记录执行过程。',
      },
    ]);
    setEvents([]);
    setTrace(null);
    setCurrentRunId(null);
    window.localStorage.removeItem(AGENT_SESSION_STORAGE_KEY);
  };

  const loadTools = async () => {
    try {
      setToolResult('正在读取工具列表...');
      const response = await getMcpTools(baseUrl);
      setTools(response.tools || []);
      setToolResult(pretty(response));
      setHealth(current => ({
        ...current,
        mcpOnline: true,
        mcpText: `MCP 在线 · ${response.tools?.length || 0} tools`,
      }));
    } catch (error) {
      setToolResult((error as Error).message);
      showToast((error as Error).message, true);
    }
  };

  const runTool = async () => {
    try {
      if (!toolName.trim()) {
        throw new Error('请输入 MCP 工具名称');
      }
      const args = safeJsonParse(toolArguments, {});
      setToolResult('工具调用中...');
      const response = await callMcpTool(baseUrl, toolName.trim(), args);
      setToolResult(pretty(response));
      setHealth(current => ({
        ...current,
        mcpOnline: true,
        mcpText: 'MCP 在线',
      }));
    } catch (error) {
      setToolResult((error as Error).message);
      showToast((error as Error).message, true);
    }
  };

  const loadTrace = async () => {
    if (!traceRunId.trim()) {
      showToast('请输入 run_id', true);
      return;
    }
    const loadedTrace = await refreshTrace(traceRunId.trim(), true);
    if (loadedTrace) {
      setView('trace');
    }
  };

  const saveBaseUrl = () => {
    const normalized = persistAgentBaseUrl(baseUrlDraft);
    setBaseUrl(normalized);
    showToast(normalized ? 'Agent 服务域名已保存' : '已恢复为当前域名');
  };

  const renderChat = () => (
    <ChatLayout>
      <Conversation>
        <Messages ref={messagesRef}>
          {messages.map(message => (
            <MessageRow key={message.id} $role={message.role}>
              {message.role === 'assistant' && <Mark>S</Mark>}
              <MessageBubble $role={message.role}>
                {message.role === 'assistant' && (
                  <strong>Superset Agent</strong>
                )}
                <MarkdownText
                  text={message.content}
                  streaming={message.streaming}
                />
              </MessageBubble>
            </MessageRow>
          ))}
        </Messages>
        <Composer onSubmit={submitQuestion}>
          <textarea
            value={question}
            onChange={event => setQuestion(event.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
            placeholder="向 Superset Agent 提问..."
          />
          <ContextDetails>
            <summary>请求上下文</summary>
            <Grid>
              <Field>
                Dashboard ID
                <input
                  value={context.dashboard_id || ''}
                  onChange={event =>
                    setContext(current => ({
                      ...current,
                      dashboard_id: event.target.value || null,
                    }))
                  }
                />
              </Field>
              <Field>
                Chart ID
                <input
                  value={context.chart_id || ''}
                  onChange={event =>
                    setContext(current => ({
                      ...current,
                      chart_id: event.target.value || null,
                    }))
                  }
                />
              </Field>
              <Field>
                时间范围
                <input
                  value={context.time_range || ''}
                  onChange={event =>
                    setContext(current => ({
                      ...current,
                      time_range: event.target.value || null,
                    }))
                  }
                />
              </Field>
              <Field>
                User ID
                <input
                  value={context.user_id}
                  onChange={event =>
                    setContext(current => ({
                      ...current,
                      user_id: event.target.value,
                    }))
                  }
                />
              </Field>
              <Field>
                Tenant ID
                <input
                  value={context.tenant_id || ''}
                  onChange={event =>
                    setContext(current => ({
                      ...current,
                      tenant_id: event.target.value || null,
                    }))
                  }
                />
              </Field>
              <Field>
                Roles
                <input
                  value={context.roles.join(',')}
                  onChange={event =>
                    setContext(current => ({
                      ...current,
                      roles: event.target.value
                        .split(',')
                        .map(role => role.trim())
                        .filter(Boolean),
                    }))
                  }
                />
              </Field>
            </Grid>
            <Field>
              Filters JSON
              <input
                value={filtersText}
                onChange={event => setFiltersText(event.target.value)}
              />
            </Field>
          </ContextDetails>
          <ComposerFooter>
            <span>Enter 发送，Shift+Enter 换行</span>
            <div>
              <SecondaryButton type="button" onClick={clearChat}>
                清空
              </SecondaryButton>{' '}
              <PrimaryButton type="submit" disabled={running}>
                {running ? '运行中' : '发送'}
              </PrimaryButton>
            </div>
          </ComposerFooter>
        </Composer>
      </Conversation>
      <ActivityPanel>
        <ActivityHeader>
          <div>
            <h3>Activity</h3>
            <span>{currentRunId || '等待运行'}</span>
          </div>
          <span>{events.length} 步</span>
        </ActivityHeader>
        <Summary>
          <SummaryGrid>
            <SummaryCard>
              <span>状态</span>
              <strong>{trace?.status || (running ? 'running' : '等待')}</strong>
            </SummaryCard>
            <SummaryCard>
              <span>耗时</span>
              <strong>{formatDuration(trace?.duration_ms)}</strong>
            </SummaryCard>
            <SummaryCard>
              <span>Token</span>
              <strong>{formatTokens(trace)}</strong>
            </SummaryCard>
            <SummaryCard>
              <span>错误</span>
              <strong>{compactText(trace?.error_message, 80) || '无'}</strong>
            </SummaryCard>
          </SummaryGrid>
        </Summary>
        <ActivityList>
          {events.length === 0 ? (
            <EmptyState>发送请求后，执行步骤会实时显示在这里。</EmptyState>
          ) : (
            events.map((event, index) => (
              <ActivityItem
                key={`${event.event_type}-${event.created_at}-${index}`}
                $status={activityStatus(event.event_type)}
              >
                <ActivityTitle>
                  <strong>
                    {eventLabels[event.event_type]?.[0] || event.event_type}
                  </strong>
                  <time>{formatDateTime(event.created_at)}</time>
                </ActivityTitle>
                <ActivityDetail>{activityDetail(event)}</ActivityDetail>
              </ActivityItem>
            ))
          )}
        </ActivityList>
      </ActivityPanel>
    </ChatLayout>
  );

  const renderTools = () => (
    <ToolLayout>
      <ToolForm>
        <Field>
          工具名称
          <input
            list="agent-tool-options"
            value={toolName}
            onChange={event => {
              setToolName(event.target.value);
              const selected = tools.find(
                tool => tool.name === event.target.value,
              );
              if (selected) {
                setToolResult(pretty(selected));
              }
            }}
            placeholder="例如 health_check"
          />
          <datalist id="agent-tool-options">
            {tools.map(tool => (
              <option key={tool.name} value={tool.name}>
                {tool.description || tool.name}
              </option>
            ))}
          </datalist>
        </Field>
        <Field>
          Arguments JSON
          <textarea
            value={toolArguments}
            onChange={event => setToolArguments(event.target.value)}
          />
        </Field>
        <SecondaryButton type="button" onClick={loadTools}>
          刷新工具
        </SecondaryButton>{' '}
        <PrimaryButton type="button" onClick={runTool}>
          调用工具
        </PrimaryButton>
      </ToolForm>
      <Output>{toolResult}</Output>
    </ToolLayout>
  );

  const renderTrace = () => (
    <TraceLayout>
      <TraceToolbar>
        <Field>
          Run ID
          <input
            value={traceRunId}
            onChange={event => setTraceRunId(event.target.value)}
            placeholder="输入 run_id"
          />
        </Field>
        <PrimaryButton type="button" onClick={loadTrace}>
          查询
        </PrimaryButton>
      </TraceToolbar>
      <Summary>
        <SummaryGrid>
          <SummaryCard>
            <span>用户</span>
            <strong>{trace?.user_id || '-'}</strong>
          </SummaryCard>
          <SummaryCard>
            <span>状态</span>
            <strong>{trace?.status || '-'}</strong>
          </SummaryCard>
          <SummaryCard>
            <span>事件</span>
            <strong>{trace?.events?.length || events.length}</strong>
          </SummaryCard>
          <SummaryCard>
            <span>耗时</span>
            <strong>{formatDuration(trace?.duration_ms)}</strong>
          </SummaryCard>
        </SummaryGrid>
      </Summary>
      <TraceBody>
        <MessageBubble $role="assistant">
          <strong>问题</strong>
          {compactText(trace?.question) || '-'}
        </MessageBubble>
        <MessageBubble $role="assistant">
          <strong>最终回答</strong>
          {compactText(trace?.final_answer) || '-'}
        </MessageBubble>
        <ActivityList>
          {(trace?.events || events).map((event, index) => (
            <ActivityItem
              key={`${event.event_type}-${event.created_at}-${index}`}
              $status={activityStatus(event.event_type)}
            >
              <ActivityTitle>
                <strong>{event.event_type}</strong>
                <time>{formatDateTime(event.created_at)}</time>
              </ActivityTitle>
              <ActivityDetail>{pretty(event.payload || {})}</ActivityDetail>
            </ActivityItem>
          ))}
        </ActivityList>
      </TraceBody>
    </TraceLayout>
  );

  const renderSettings = () => (
    <Settings>
      <Field>
        Agent Base URL
        <input
          value={baseUrlDraft}
          onChange={event => setBaseUrlDraft(event.target.value)}
          placeholder="http://localhost:9003"
        />
      </Field>
      <p>
        测试模式默认请求 <code>http://localhost:9003</code>。如果浏览器提示 CSP
        拦截，需要在 Superset 后端 CSP 的 <code>connect-src</code> 中放行
        <code> http://localhost:9003</code> 和<code> ws://localhost:9003</code>
        。
      </p>
      <PrimaryButton type="button" onClick={saveBaseUrl}>
        保存配置
      </PrimaryButton>{' '}
      <SecondaryButton type="button" onClick={refreshStatus}>
        检测连接
      </SecondaryButton>
    </Settings>
  );

  return (
    <>
      <Shell>
        <Launcher type="button" onClick={() => setOpen(true)} title="AI 助手">
          <CuteAiCatIcon title="AI 助手" aria-hidden="true" />
        </Launcher>
      </Shell>
      {open && (
        <>
          <PanelOverlay onClick={() => setOpen(false)} />
          <Panel role="dialog" aria-modal="true" aria-label="Superset Agent">
            <Sidebar>
              <Brand>
                <Mark>S</Mark>
                <div>
                  <strong>Superset Agent</strong>
                  <span>AI Assistant</span>
                </div>
              </Brand>
              <Nav aria-label="Agent views">
                {[
                  ['chat', '对话'],
                  ['tools', 'MCP 工具'],
                  ['trace', 'Run Trace'],
                  ['settings', '设置'],
                ].map(([key, label]) => (
                  <NavButton
                    key={key}
                    type="button"
                    $active={view === key}
                    onClick={() => setView(key as AgentView)}
                  >
                    <i data-icon={key} aria-hidden="true" />
                    {label}
                  </NavButton>
                ))}
              </Nav>
              <ConnectionPanel>
                <StatusLine>
                  <Dot className="dot" $online={health.agentOnline} />
                  <span>{health.agentText}</span>
                </StatusLine>
                <StatusLine>
                  <Dot className="dot" $online={health.mcpOnline} />
                  <span>{health.mcpText}</span>
                </StatusLine>
                <StatusLine>
                  <Dot className="dot" $online={health.socketOnline} />
                  <span>{health.socketText}</span>
                </StatusLine>
                <TextButton type="button" onClick={refreshStatus}>
                  刷新状态
                </TextButton>
              </ConnectionPanel>
            </Sidebar>
            <Workspace>
              <Topbar>
                <div>
                  <h2>{activeTitle[0]}</h2>
                  <p>{activeTitle[1]}</p>
                </div>
                <TopbarActions>
                  {view === 'chat' && (
                    <SecondaryButton type="button" onClick={clearChat}>
                      清空对话
                    </SecondaryButton>
                  )}
                  <IconButton type="button" onClick={() => setOpen(false)}>
                    ×
                  </IconButton>
                </TopbarActions>
              </Topbar>
              <Content>
                {view === 'chat' && renderChat()}
                {view === 'tools' && renderTools()}
                {view === 'trace' && renderTrace()}
                {view === 'settings' && renderSettings()}
              </Content>
            </Workspace>
          </Panel>
        </>
      )}
      <Toast $visible={toast.visible} $error={toast.error}>
        {toast.text}
      </Toast>
    </>
  );
}

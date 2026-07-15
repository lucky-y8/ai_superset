# AI Agent Full-Time Study Plan

目标：不绑定某个特定 Agent 框架，用 6 周全职学习掌握 AI Agent 的通用能力，最终做出一个偏 BI / Superset 场景的 SQL Agent MVP。

这版计划不以 Microsoft Agent Framework 为主线。Microsoft AI Agents for Beginners 只作为概念参考，实战主线改为：

```text
OpenAI-compatible API
-> Structured Output
-> Tool Calling
-> 手搓 Agent
-> RAG
-> LangGraph
-> SQL Safety
-> Superset AI Agent MVP
```

模型接入建议优先选择你更可能使用的服务：

```text
阿里百炼 / 通义千问
DeepSeek
豆包
OpenAI-compatible API
```

## 学习节奏

建议强度：

```text
每天 6-7 小时
每周 6 天学习 + 1 天复盘
总周期：6 周
```

每日固定节奏：

| 时间 | 内容 |
|---|---|
| 09:30-11:30 | 看文档 / 看课程 / 做笔记 |
| 11:30-12:00 | 画流程图 / 总结概念 |
| 14:00-17:30 | 写代码 demo / debug |
| 20:00-21:30 | 复盘 / README / 整理项目 |

## 核心资料

| 方向 | 资料 |
|---|---|
| Agent 入门概念 | [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/en) |
| 手搓 Agent | [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents) |
| 工作流 / DAG | [LangGraph Docs](https://langchain-ai.github.io/langgraph/) |
| Tool Calling 通用参考 | [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling?api-mode=chat) |
| 结构化输出 | [OpenAI Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs?api-mode=chat) |
| Agent SDK 参考 | [OpenAI Agents SDK](https://platform.openai.com/docs/guides/agents-sdk/) |
| 概念参考 | [Microsoft AI Agents for Beginners](https://github.com/microsoft/ai-agents-for-beginners) |
| 评估 | [LangSmith Evaluation](https://docs.langchain.com/langsmith/evaluation-concepts) |
| Prompt / LLM 测试 | [Promptfoo Guides](https://www.promptfoo.dev/docs/guides/) |

## Microsoft 课程怎么用

Microsoft AI Agents for Beginners 不作为代码主线，只看这些概念：

```text
人工智能代理及其应用案例简介
理解人工智能代理设计模式
工具使用设计模式
代理 RAG
构建可信赖的人工智能代理
规划设计模式
多智能体设计模式
生产环境中的人工智能代理
面向人工智能代理的上下文工程
管理代理记忆
```

可以跳过或快速扫过：

```text
探索 Microsoft Agent Framework
构建计算机使用代理 CUA
部署可扩展代理
创建本地人工智能代理
```

MCP / A2A / NLWeb 可以后面再学，不放在第一轮主线里。

## 第 1 周：LLM API + Tool Calling 基础

目标：不依赖 Agent 框架，先掌握模型调用、结构化输出和工具调用。

### Day 1：LLM API 和 Prompt 基础

学习内容：

```text
Chat Completions
System prompt
User prompt
Token / context window
Temperature
Streaming
OpenAI-compatible API
```

建议选择一个你后续会用的模型服务先跑通：

```text
阿里百炼 / 通义千问
DeepSeek
豆包
```

作业：

```text
写一个最小 chat demo。

要求：
1. 支持 system prompt
2. 支持 user prompt
3. 输出模型回复
4. README 里记录如何切换模型 provider
```

产出：

```text
assignments/week1/basic_chat_demo.py
notes/day01_llm_api.md
```

### Day 2：Structured Output

学习内容：

```text
JSON 输出
JSON Schema
Intent classification
输出校验
解析失败重试
```

资料：

- [OpenAI Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs?api-mode=chat)

作业：

```text
实现 intent classifier。

输入：
"帮我看一下这个 SQL 哪里错了"

输出：
{
  "intent": "fix_sql",
  "confidence": 0.92,
  "needs_tool": true
}
```

要求支持：

```text
generate_sql
fix_sql
explain_sql
summarize_dashboard
recommend_chart
unknown
```

产出：

```text
assignments/week1/intent_classifier.py
```

### Day 3：Tool Calling

学习内容：

```text
Tool schema
Tool input/output
Tool error
Tool result
模型选择工具
工具执行器
```

资料：

- [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling?api-mode=chat)

作业：

```text
实现 4 个 mock tools：

get_dataset_columns(dataset_id)
get_dataset_metrics(dataset_id)
validate_sql(sql)
recommend_chart_type(columns)
```

示例：

```python
get_dataset_columns("sales")
# 返回 ["ds", "region", "revenue", "quantity"]
```

产出：

```text
assignments/week1/tools.py
assignments/week1/tool_calling_demo.py
```

### Day 4：手搓 Tool Registry

学习内容：

```text
工具注册
工具查找
工具参数校验
工具执行错误处理
```

作业：

```text
实现 ToolRegistry：

register_tool()
list_tools()
get_tool_schema()
run_tool()
```

要求：

```text
工具不存在时返回结构化错误
参数错误时返回结构化错误
工具执行要有日志
```

产出：

```text
assignments/week1/tool_registry.py
```

### Day 5：ReAct Loop

学习内容：

```text
Reason -> Act -> Observe
最大循环次数
停止条件
工具调用结果如何回填给模型
```

作业：

```text
写一个最小 ReAct SQL Agent。

用户输入：
"帮我写一个查询每月销售额趋势的 SQL"

Agent 流程：
1. 调 get_dataset_columns
2. 根据字段生成 SQL
3. 调 validate_sql
4. 返回 SQL 和解释
```

限制：

```text
最多 5 次工具调用
工具失败后最多重试 1 次
必须输出最终 answer
```

产出：

```text
assignments/week1/react_sql_agent.py
```

### Day 6：周项目 1

项目：

```text
Mini SQL Assistant v0
```

功能：

```text
自然语言输入
-> 判断 intent
-> 获取 mock dataset schema
-> 生成 SQL
-> 校验 SQL
-> 返回 SQL 和解释
```

要求：

```text
有 README
有日志
有错误处理
最多 5 次 tool 调用
不依赖任何 Agent 框架
```

产出：

```text
projects/week1_mini_sql_assistant/
```

### Day 7：复盘

作业：

```text
写一篇复盘：
1. Agent 和普通 Chatbot 的区别是什么？
2. Tool Calling 的本质是什么？
3. 为什么 LLM 不应该直接执行 SQL？
4. ReAct Loop 有什么风险？
```

产出：

```text
notes/week1_summary.md
```

## 第 2 周：RAG + BI Metadata

目标：理解 Agent 如何拿外部知识，尤其是 BI 字段、数据集、图表上下文。

### Day 8：Embedding 和向量检索

学习内容：

```text
Embedding
Vector search
Semantic similarity
Top-k retrieval
```

作业：

```text
准备 20 条字段说明：

sales.revenue: 销售额
sales.ds: 日期
sales.region: 地区
sales.quantity: 销售数量
```

实现：

```text
用户问："哪个字段表示收入？"
系统返回最相关字段和相似度。
```

产出：

```text
assignments/week2/metadata_embedding_search.py
```

### Day 9：Chunking

学习内容：

```text
chunk size
chunk overlap
metadata
source tracking
```

作业：

```text
把一份业务说明文档切成 chunks。

每个 chunk 包含：
{
  "text": "...",
  "source": "business_doc.md",
  "section": "sales"
}
```

产出：

```text
assignments/week2/chunking_demo.py
```

### Day 10：Simple RAG Pipeline

学习内容：

```text
retrieve
rerank
generate
citation
answer grounding
```

作业：

```text
实现简单 RAG：

用户问题
-> 检索 top 3 chunks
-> 模型基于 chunks 回答
-> 返回引用 source
```

产出：

```text
assignments/week2/simple_rag.py
```

### Day 11：BI Metadata RAG

学习内容：

```text
Dataset metadata
Column description
Metric
Chart metadata
Dashboard metadata
```

作业：

```text
构造 mock Superset metadata：

datasets.json
charts.json
dashboards.json

实现：
用户问 "销售趋势图用了哪些字段？"
系统能找到对应 chart、dataset、columns。
```

产出：

```text
assignments/week2/bi_metadata_rag.py
```

### Day 12：RAG + Tool Router

学习内容：

```text
RAG 找知识
Tool 查实时信息
Agent 决定用哪个
```

作业：

```text
实现一个 router：

如果用户问字段含义 -> RAG
如果用户问表结构 -> Tool
如果用户问生成 SQL -> RAG + Tool
如果用户问 dashboard 总结 -> dashboard metadata tool
```

产出：

```text
assignments/week2/rag_tool_router.py
```

### Day 13：周项目 2

项目：

```text
BI Metadata Assistant
```

功能：

```text
用户问业务问题
-> 检索相关字段
-> 获取数据集 schema
-> 推荐 SQL 字段
-> 给出 SQL 草稿
```

产出：

```text
projects/week2_bi_metadata_assistant/
```

### Day 14：复盘

作业：

```text
写一篇：
RAG、Tool Calling、Agent 的区别和关系。

要求结合 Superset 场景举例：
- 字段解释用什么？
- 表结构查询用什么？
- SQL 生成用什么？
- Dashboard 总结用什么？
```

产出：

```text
notes/week2_summary.md
```

## 第 3 周：手搓 Agent 框架

目标：不依赖 LangGraph / CrewAI / AutoGen，理解 Agent 底层。

资料：

- [Datawhale Hello-Agents](https://github.com/datawhalechina/hello-agents)

### Day 15：Runtime 设计

作业：

```text
设计并实现：

Message
AgentState
ToolCall
ToolResult
AgentConfig
```

产出：

```text
mini_agent/message.py
mini_agent/state.py
```

### Day 16：ToolRegistry

作业：

```text
实现：

register_tool()
get_tool()
list_tools()
run_tool()
get_tool_schemas()
```

要求：

```text
工具不存在时返回明确错误
工具参数错误时返回结构化错误
工具执行需要记录耗时
```

产出：

```text
mini_agent/tool_registry.py
```

### Day 17：Agent Executor

作业：

```text
实现 ReAct executor：

while not done:
  call_model()
  parse_action()
  run_tool()
  append_observation()
```

要求：

```text
支持 max_steps
支持 final answer
支持 tool error observation
```

产出：

```text
mini_agent/executor.py
```

### Day 18：Memory

作业：

```text
实现 SessionMemory：

add_message()
add_tool_result()
get_recent_messages()
summarize_if_too_long()
```

产出：

```text
mini_agent/memory.py
```

### Day 19：Planner / Executor

作业：

```text
实现 Planner：

用户任务 -> steps[]

实现 StepExecutor：

steps[] -> 逐步执行
失败 -> 返回 failed step 和 reason
```

产出：

```text
mini_agent/planner.py
```

### Day 20：周项目 3

项目：

```text
Handmade SQL Agent
```

要求：

```text
不用 LangGraph
不用 CrewAI
不用 AutoGen
不用 Microsoft Agent Framework

自己实现：
ToolRegistry
Memory
Executor
Planner
SQL tools
```

产出：

```text
projects/week3_handmade_sql_agent/
```

### Day 21：复盘

作业：

```text
写一篇：
如果不用任何框架，Agent 框架最少需要哪些模块？

必须覆盖：
Model Client
Tool Registry
Executor
Memory
Planner
Policy Guard
Logger
```

产出：

```text
notes/week3_summary.md
```

## 第 4 周：LangGraph / DAG

目标：掌握生产级 Agent 工作流。LangGraph 是主线框架。

资料：

- [LangGraph Docs](https://langchain-ai.github.io/langgraph/)

### Day 22：StateGraph

作业：

```text
实现：

start -> classify_intent -> final_response
```

产出：

```text
assignments/week4/basic_state_graph.py
```

### Day 23：条件路由

作业：

```text
根据 intent 路由：

generate_sql -> sql_node
explain_sql -> explain_node
recommend_chart -> chart_node
summarize_dashboard -> dashboard_node
```

产出：

```text
assignments/week4/conditional_router.py
```

### Day 24：Tool Node

作业：

```text
在 LangGraph 中接入：

get_dataset_columns
get_dataset_metrics
validate_sql
recommend_chart_type
```

产出：

```text
assignments/week4/tool_node_demo.py
```

### Day 25：Human-in-the-loop

作业：

```text
SQL 生成后暂停：

Agent:
"这是生成的 SQL，是否插入 SQL Lab？"

用户确认后继续。
```

产出：

```text
assignments/week4/human_confirm_sql.py
```

### Day 26：Checkpoint / Resume

作业：

```text
让 Agent 支持：

中断
保存 state
恢复执行
```

产出：

```text
assignments/week4/checkpoint_resume.py
```

### Day 27：周项目 4

项目：

```text
LangGraph SQL Agent
```

流程：

```text
User
-> classify_intent
-> build_context
-> get_schema
-> generate_sql
-> sql_guard
-> wait_confirm
-> final_response
```

产出：

```text
projects/week4_langgraph_sql_agent/
```

### Day 28：复盘

作业：

```text
画一张 DAG 图：
Superset SQL Agent Workflow

写清楚：
1. 每个 node 的职责
2. 每条 edge 的条件
3. state 里保存什么
4. 哪些地方需要 human confirmation
```

产出：

```text
notes/week4_summary.md
```

## 第 5 周：SQL Safety + Agent 工程化

目标：从 demo 走向生产思维。

### Day 29：SQL Guard

作业：

```text
实现 sql_guard(sql)

只允许：
SELECT
WITH

禁止：
DROP
DELETE
UPDATE
INSERT
ALTER
TRUNCATE
CREATE
MERGE
CALL
```

产出：

```text
assignments/week5/sql_guard.py
```

### Day 30：SQL Validate Tool

作业：

```text
实现 validate_sql(sql)

返回：
{
  "valid": true,
  "reason": null,
  "normalized_sql": "..."
}
```

错误时：

```text
{
  "valid": false,
  "reason": "Only SELECT statements are allowed"
}
```

产出：

```text
assignments/week5/validate_sql_tool.py
```

### Day 31：Context Builder

作业：

```text
实现 mock context builder：

build_sqllab_context()
build_dashboard_context()
build_explore_context()
build_dataset_context()
```

返回结构化 JSON。

产出：

```text
assignments/week5/context_builder.py
```

### Day 32：Tool Layer 设计

作业：

```text
设计 10 个 Superset tools：

get_dataset_columns
get_dataset_metrics
get_chart_metadata
get_dashboard_charts
get_dashboard_filters
validate_sql
preview_sql
generate_chart_config
insert_sql_to_sqllab
create_chart_draft
```

每个工具写：

```text
input schema
output schema
permission
risk level
timeout
audit log fields
```

产出：

```text
assignments/week5/superset_tools_design.md
```

### Day 33：权限 / 审计

作业：

```text
设计 audit log schema：

user_id
session_id
tool_name
input_hash
risk_level
timestamp
status
error
model_provider
token_usage
```

产出：

```text
assignments/week5/audit_log_design.md
```

### Day 34：Eval

资料：

- [LangSmith Evaluation](https://docs.langchain.com/langsmith/evaluation-concepts)
- [Promptfoo Guides](https://www.promptfoo.dev/docs/guides/)

作业：

```text
写 20 条测试 case：

输入：
"帮我查每月销售额"

期望：
- 必须生成 SELECT
- 必须包含 revenue
- 必须按月份聚合
- 不能包含 DELETE / UPDATE
```

测试维度：

```text
SQL 是否安全
字段是否正确
是否调用了正确工具
是否需要用户确认
回答是否引用上下文
```

产出：

```text
assignments/week5/eval_cases.json
```

### Day 35：复盘

作业：

```text
写一篇：
为什么生产 Agent 必须有 Safety / Audit / Eval？

必须结合 Superset：
1. 权限
2. SQL 安全
3. 数据泄露
4. 用户确认
5. 日志审计
```

产出：

```text
notes/week5_summary.md
```

## 第 6 周：Superset AI Agent MVP

目标：做一个能讲清楚的作品。

### Day 36：MVP 范围

作业：

```text
写 MVP scope：

包含：
- 目标用户
- 用户故事
- 功能范围
- 不做什么
- 风险控制
- 成功标准
```

产出：

```text
projects/week6_superset_agent_mvp/mvp_scope.md
```

### Day 37：Mock API

作业：

```text
实现 mock API：

POST /ai/chat
POST /ai/confirm
GET /ai/session/:id
```

接口返回：

```text
assistant message
tool calls
generated SQL
confirmation required
```

产出：

```text
projects/week6_superset_agent_mvp/mock_api/
```

### Day 38：前端 UI 原型

作业：

```text
实现：
- assistant drawer
- message list
- input box
- SQL code block
- tool call timeline
- confirm button
```

产出：

```text
projects/week6_superset_agent_mvp/assistant_ui_demo/
```

### Day 39：端到端流程

作业：

```text
用户输入
-> API
-> Agent
-> build context
-> generate SQL
-> sql guard
-> 返回前端
```

产出：

```text
projects/week6_superset_agent_mvp/end_to_end_demo.md
```

### Day 40：用户确认

作业：

```text
用户点击确认
-> confirm API
-> 插入 SQL Lab / mock editor
```

要求：

```text
确认前不执行
确认后记录 audit log
取消后停止任务
```

产出：

```text
projects/week6_superset_agent_mvp/confirm_flow_demo/
```

### Day 41：文档和演示

作业：

```text
写 README：

1. 项目介绍
2. 架构图
3. 运行方式
4. 安全限制
5. 示例输入输出
6. 后续计划
```

产出：

```text
projects/week6_superset_agent_mvp/README.md
```

### Day 42：总复盘

最终答辩问题：

```text
1. 为什么用 DAG + ReAct？
2. 为什么不能让模型直接执行 SQL？
3. Superset 上下文怎么构建？
4. 权限怎么保证？
5. SQL 安全怎么做？
6. 如何评估 Agent 质量？
7. 为什么不绑定 Microsoft Agent Framework？
8. 如果换成百炼 / DeepSeek / 豆包，架构哪些地方需要改？
```

最终产出：

```text
projects/week6_superset_agent_mvp/
```

## 最终作品清单

6 周结束后，建议至少完成：

```text
1. Mini SQL Assistant v0
2. BI Metadata Assistant
3. Handmade SQL Agent Framework
4. LangGraph SQL Agent
5. SQL Safety + Eval Suite
6. Superset AI Agent MVP
```

## 学习原则

```text
每天必须写代码，不要只看课。
每周必须有一个可运行 demo。
每个 demo 都要有 README。
每周复盘都要回答：这周学的东西如何用到 Superset？
不要绑定单一框架，先理解通用架构。
模型 provider 可以换，Tool Layer / State / Safety 才是核心。
```

Agent 真正的难点不在概念，而在：

```text
状态怎么传
工具怎么设计
失败怎么恢复
权限怎么控制
用户确认怎么做
结果怎么评估
```

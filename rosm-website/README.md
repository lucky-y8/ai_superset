# 澈析 BI 官网

这是 `www.chexi.tech` 的纯静态公开官网，与 Superset 应用和 Agent 服务相互独立。

## 目录用途

- `index.html`：官网首页
- `features/`：AI Agent、仪表盘和权限隔离功能页
- `docs/`：公开使用文档
- `pricing/`：免费试用说明
- `about/`：产品与技术说明
- `privacy/`、`terms/`：法律页面基础版本
- `robots.txt`：搜索及 AI 爬虫规则
- `sitemap.xml`：公开页面站点地图
- `llms.txt`：面向大模型的产品摘要
- `deploy/`：Nginx 配置示例

## 本地预览

这些页面使用以 `/` 开头的站点根路径，建议通过静态 HTTP 服务预览：

```bash
cd rosm-website
python3 -m http.server 8080
```

然后访问 `http://127.0.0.1:8080/`。

## 部署目标

网站文件应部署到服务器 `/var/www/chexi`，Nginx 配置可参考 `deploy/www.chexi.tech.conf.example`。

切换 `www.chexi.tech` 前，应先确保：

1. `app.chexi.tech` 已代理 Superset 的 `127.0.0.1:9000`。
2. `ai.chexi.tech` 已代理 Agent 的 `127.0.0.1:9003`。
3. Superset 登录、Agent HTTP 请求及 WebSocket 均已验证。
4. `www.chexi.tech`、`app.chexi.tech` 和 `ai.chexi.tech` 均有有效 HTTPS 证书。

## 上线前必须补充

- 在隐私政策和服务条款中补充真实运营主体、联系方式、生效日期及适用规则。
- 确认免费试用的功能、期限和资源额度。
- 使用真实澈析 BI 产品截图替换临时产品截图（如界面已有明显差异）。
- 根据实际功能复核 AI Agent、权限隔离和数据源相关描述。

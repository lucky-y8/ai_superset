import os

PROJECT_ROOT = "/home/ubuntu/prod/ai_superset"
LOG_DIR = os.path.join(PROJECT_ROOT, "logs")

os.makedirs(LOG_DIR, exist_ok=True)

# 必须从项目根目录加载，避免 superset/key_value 遮蔽外部 key_value 包。
chdir = PROJECT_ROOT

# Gunicorn 只供本机 Nginx 访问。
bind = os.getenv("GUNICORN_BIND", "127.0.0.1:9000")
backlog = 2048

# 先使用适合中小型服务器的保守参数。
workers = int(os.getenv("GUNICORN_WORKERS", "2"))
worker_class = "gthread"
threads = int(os.getenv("GUNICORN_THREADS", "8"))

timeout = 300
graceful_timeout = 30
keepalive = 5

# 定期替换 worker，缓解长期运行产生的内存增长。
max_requests = 1000
max_requests_jitter = 100

# 使用内存文件系统保存 worker 临时状态。
worker_tmp_dir = "/dev/shm"

# Superset 官方示例允许较长请求行和请求头。
limit_request_line = 0
limit_request_field_size = 0

# 只信任本机 Nginx 传递的代理协议头。
forwarded_allow_ips = "127.0.0.1"

pidfile = os.path.join(LOG_DIR, "gunicorn.pid")

accesslog = os.path.join(LOG_DIR, "gunicorn_access.log")
errorlog = os.path.join(LOG_DIR, "gunicorn_error.log")
loglevel = os.getenv("GUNICORN_LOG_LEVEL", "info")

capture_output = True
enable_stdio_inheritance = True

# 使用 Nginx 传递的 X-Forwarded-For 记录真实客户端 IP。
access_log_format = (
    '%({x-forwarded-for}i)s %(t)s %(p)s '
    '"%(r)s" %(s)s %(b)s %(L)s "%(f)s" "%(a)s"'
)

daemon = False
preload_app = False

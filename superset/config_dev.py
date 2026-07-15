# -*- coding: utf-8 -*-
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
"""The main config file for Superset

All configuration in this file can be overridden by providing a superset_config
in your PYTHONPATH as there is a ``from superset_config import *``
at the end of this file.
"""

# pylint: disable=too-many-lines
from __future__ import annotations

import imp  # pylint: disable=deprecated-module
import importlib.util
import json
import logging
import os
import re
import sys
from collections import OrderedDict
from datetime import timedelta
from email.header import Header
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from typing import (
    Any,
    Callable,
    Dict,
    List,
    Literal,
    Optional,
    Set,
    Tuple,
    Type,
    TYPE_CHECKING,
    TypedDict,
    Union,
)

import pkg_resources
from cachelib.base import BaseCache
from cachelib.redis import RedisCache
from celery.schedules import crontab
from dateutil import tz
from flask import Blueprint
from pandas import Series
from pandas._libs.parsers import STR_NA_VALUES  # pylint: disable=no-name-in-module
from redis import Redis
from sqlalchemy.orm.query import Query

from superset.advanced_data_type.plugins.internet_address import internet_address
from superset.advanced_data_type.plugins.internet_port import internet_port
from superset.advanced_data_type.types import AdvancedDataType
from superset.constants import CHANGE_ME_SECRET_KEY
from superset.jinja_context import BaseTemplateProcessor
from superset.stats_logger import DummyStatsLogger
from superset.superset_typing import CacheConfig
from superset.tasks.types import ExecutorType
from superset.utils.core import is_test, NO_TIME_RANGE, parse_boolean_string
from superset.utils.encrypt import SQLAlchemyUtilsAdapter
from superset.utils.log import DBEventLogger
from superset.utils.logging_configurator import DefaultLoggingConfigurator
from typing_extensions import Literal
from werkzeug.local import LocalProxy

# ldap 验证导入
from flask_appbuilder.security.manager import AUTH_LDAP

# 远程验证方式
from flask_appbuilder.security.manager import AUTH_DB
from superset.custom_sso_security_manager import CustomSsoSecurityManager
from flask_appbuilder.api.manager import SwaggerView

logger = logging.getLogger(__name__)

if TYPE_CHECKING:
    from flask_appbuilder.security.sqla import models

    from superset.connectors.sqla.models import SqlaTable
    from superset.models.core import Database
    from superset.models.dashboard import Dashboard
    from superset.models.slice import Slice

# Realtime stats logger, a StatsD implementation exists
STATS_LOGGER = DummyStatsLogger()
EVENT_LOGGER = DBEventLogger()

SUPERSET_LOG_VIEW = True

BASE_DIR = pkg_resources.resource_filename("superset", "")
if "SUPERSET_HOME" in os.environ:
    DATA_DIR = os.environ["SUPERSET_HOME"]
else:
    DATA_DIR = os.path.expanduser("~/.superset")
DATA_DIR_PATH = Path(__file__).parent.parent.absolute()

# ---------------------------------------------------------
# 自定义配置
# ---------------------------------------------------------
# Optional prefix to be added to all static asset paths when rendering the UI.
# This is useful for hosting assets in an external CDN, for example
STATIC_ASSETS_PREFIX = ""  # uri前缀

# 判断是否有前缀,有则给swagger增加前缀
if STATIC_ASSETS_PREFIX:
    FAB_OPENAPI_SERVERS = [{"url": "https://uat.cdp.changan.com.cn/superset"}]
    SwaggerView.openapi_uri = STATIC_ASSETS_PREFIX + SwaggerView.openapi_uri

# UPM 单点登录
UMP_USER_INFO_URL = "http://uat.cdp.changan.com.cn/upm/api/user/info"

LOGIN_LOGO = STATIC_ASSETS_PREFIX + "/static/assets/images/changancar.png"
LOGIN_NAME = "长安汽车bi系统"

if sys.platform.startswith("win"):
    USER_IMPORT_TEMPLATE = BASE_DIR + r"\static\user_import_template.xlsx"
else:
    USER_IMPORT_TEMPLATE = BASE_DIR + r"/static/user_import_template.xlsx"

# ---------------------------------------------------------
# Superset specific config
# ---------------------------------------------------------
VERSION_INFO_FILE = pkg_resources.resource_filename(
    "superset", "static/version_info.json"
)
PACKAGE_JSON_FILE = pkg_resources.resource_filename(
    "superset", "static/assets/package.json"
)
TIME_GRAIN_JOIN_COLUMN_PRODUCERS: dict[str, Callable[[Series, int], str]] = {}
# Multiple favicons can be specified here. The "href" property
# is mandatory, but "sizes," "type," and "rel" are optional.
# For example:
# {
#     "href":path/to/image.png",
#     "sizes": "16x16",
#     "type": "image/png"
#     "rel": "icon"
# },
# FAVICONS = [{"href": "/static/assets/images/favicon.png"}]
FAVICONS = [{"href": "/static/assets/images/favicon_logo.ico"}]


def _try_json_readversion(filepath: str) -> Optional[str]:
    try:
        with open(filepath, "r") as f:
            return json.load(f).get("version")
    except Exception:  # pylint: disable=broad-except
        return None


def _try_json_readsha(filepath: str, length: int) -> Optional[str]:
    try:
        with open(filepath, "r") as f:
            return json.load(f).get("GIT_SHA")[:length]
    except Exception:  # pylint: disable=broad-except
        return None


#
# If True, we will skip the call to load the logger config found in alembic.init
#
ALEMBIC_SKIP_LOG_CONFIG = False

# Depending on the context in which this config is loaded, the
# version_info.json file may or may not be available, as it is
# generated on install via setup.py. In the event that we're
# actually running Superset, we will have already installed,
# therefore it WILL exist. When unit tests are running, however,
# it WILL NOT exist, so we fall back to reading package.json
VERSION_STRING = _try_json_readversion(VERSION_INFO_FILE) or _try_json_readversion(
    PACKAGE_JSON_FILE
)

VERSION_SHA_LENGTH = 8
VERSION_SHA = _try_json_readsha(VERSION_INFO_FILE, VERSION_SHA_LENGTH)

# Build number is shown in the About section if available. This
# can be replaced at build time to expose build information.
BUILD_NUMBER = None

# default viz used in chart explorer & SQL Lab explore
DEFAULT_VIZ_TYPE = "table"

# default row limit when requesting chart data
ROW_LIMIT = 50000
# 图表数据全量下载最大行数
CHART_EXPORT_MAX_LIMIT = 1000000
# default row limit when requesting samples from datasource in explore view
SAMPLES_ROW_LIMIT = 1000
# max rows retrieved by filter select auto complete
FILTER_SELECT_ROW_LIMIT = 10000
# default time filter in explore
# values may be "Last day", "Last week", "<ISO date> : now", etc.
DEFAULT_TIME_FILTER = NO_TIME_RANGE

SUPERSET_WEBSERVER_PROTOCOL = "https"
SUPERSET_WEBSERVER_ADDRESS = "0.0.0.0"
SUPERSET_WEBSERVER_PORT = 8088

# This is an important setting, and should be lower than your
# [load balancer / proxy / envoy / kong / ...] timeout settings.
# You should also make sure to configure your WSGI server
# (gunicorn, nginx, apache, ...) timeout setting to be <= to this setting
SUPERSET_WEBSERVER_TIMEOUT = int(timedelta(minutes=5).total_seconds())

# this 2 settings are used by dashboard period force refresh feature
# When user choose auto force refresh frequency
# < SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT
# they will see warning message in the Refresh Interval Modal.
# please check PR #9886
SUPERSET_DASHBOARD_PERIODICAL_REFRESH_LIMIT = 0
SUPERSET_DASHBOARD_PERIODICAL_REFRESH_WARNING_MESSAGE = None

SUPERSET_DASHBOARD_POSITION_DATA_LIMIT = 131071
CUSTOM_SECURITY_MANAGER = CustomSsoSecurityManager
SQLALCHEMY_TRACK_MODIFICATIONS = False
# ---------------------------------------------------------

# Your App secret key. Make sure you override it on superset_config.py
# or use `SUPERSET_SECRET_KEY` environment variable.
# Use a strong complex alphanumeric string and use a tool to help you generate
# a sufficiently random sequence, ex: openssl rand -base64 42"
PREVIOUS_SECRET_KEY = "CURRENT_SECRET_KEY"
SECRET_KEY = os.environ.get("SUPERSET_SECRET_KEY") or CHANGE_ME_SECRET_KEY
# SECRET_KEY = r"01zgArf4XuYYqos59h3pQ+f5yiaUhZNJ3eqViWuEXkzlqFYMPa503/9J"
RECAPTCHA_PUBLIC_KEY = SECRET_KEY
# ---------------------------------------------------------
# 渝北工厂的配置
# ---------------------------------------------------------
SUPERSET_REDIS_HOST = "127.0.0.1"
SUPERSET_REDIS_PORT = "6379"
SUPERSET_REDIS_PASSWORD = "Yanilo315*"
SUPERSET_REDIS_DB = 1

# #
# UPLOAD_HOST = "10.66.1.75"
# UPLOAD_USERNAME = "cabi_devz"
# UPLOAD_SCHEMA = "cabi_devz_api"
# UPLOAD_PASSWORD = "RwB9$8OxTQoGGumQFL"
# UPLOAD_PORT = 3306
#
# UPLOAD_DATABASE_URI = f'mysql+pymysql://{UPLOAD_USERNAME}:{UPLOAD_PASSWORD}@{UPLOAD_HOST}:{UPLOAD_PORT}/{UPLOAD_SCHEMA}?charset=utf8mb4'
# SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://cabi_devz:cd RwB9$8OxTQoGGumQFL@10.66.1.75:3306/cabi_devz?charset=utf8mb4'


UPLOAD_HOST = "127.0.0.1"
UPLOAD_USERNAME = "root"
UPLOAD_SCHEMA = "api_database"
UPLOAD_PASSWORD = f"123456"
UPLOAD_DATABASE_URI = f"mysql+pymysql://{UPLOAD_USERNAME}:{UPLOAD_PASSWORD}@{UPLOAD_HOST}/{UPLOAD_SCHEMA}?charset=utf8mb4"
# SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:123456@127.0.0.1:3306/cabi_v4?charset=utf8mb4'
# SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://ca_superset_deploy:IQovFBK3CBbuj8d0@10.64.22.229/ca_superset_uat_deploy?charset=UTF8'
# SQLALCHEMY_DATABASE_URI = 'mysql://root:123456@127.0.0.1:3306/cabi_test?charset=utf8mb4'
SQLALCHEMY_DATABASE_URI = "mysql://root:123456@127.0.0.1:3306/cabi_v4?charset=utf8mb4"
# SQLALCHEMY_DATABASE_URI = 'mysql://root:123456@127.0.0.1:3306/cabi_test?charset=utf8mb4'
# SQLALCHEMY_DATABASE_URI = 'mysql://root:123456@127.0.0.1:3306/cabi?charset=utf8mb4'
# 基本连接
"postgresql+psycopg2://postgres:yanilo315.@124.222.172.192:5432/superset"
# 'mysql+pymysql://root:yanilo315.@124.222.172.192:3306/api_database?charset=utf8mb4'
# In order to hook up a custom password store for all SQLACHEMY connections
# implement a function that takes a single argument of type 'sqla.engine.url',
# returns a password and set SQLALCHEMY_CUSTOM_PASSWORD_STORE.
#
# e.g.:
# def lookup_password(url):
#     return 'secret'
# SQLALCHEMY_CUSTOM_PASSWORD_STORE = lookup_password
SQLALCHEMY_CUSTOM_PASSWORD_STORE = None

#
# The EncryptedFieldTypeAdapter is used whenever we're building SqlAlchemy models
# which include sensitive fields that should be app-encrypted BEFORE sending
# to the DB.
#
# Note: the default impl leverages SqlAlchemyUtils' EncryptedType, which defaults
#  to AesEngine that uses AES-128 under the covers using the app's SECRET_KEY
#  as key material. Do note that AesEngine allows for queryability over the
#  encrypted fields.
#
#  To change the default engine you need to define your own adapter:
#
# e.g.:
#
# class AesGcmEncryptedAdapter(
#     AbstractEncryptedFieldAdapter
# ):
#     def create(
#         self,
#         app_config: Optional[Dict[str, Any]],
#         *args: List[Any],
#         **kwargs: Optional[Dict[str, Any]],
#     ) -> TypeDecorator:
#         if app_config:
#             return EncryptedType(
#                 *args, app_config["SECRET_KEY"], engine=AesGcmEngine, **kwargs
#             )
#         raise Exception("Missing app_config kwarg")
#
#
#  SQLALCHEMY_ENCRYPTED_FIELD_TYPE_ADAPTER = AesGcmEncryptedAdapter
SQLALCHEMY_ENCRYPTED_FIELD_TYPE_ADAPTER = (  # pylint: disable=invalid-name
    SQLAlchemyUtilsAdapter
)
# The limit of queries fetched for query search
QUERY_SEARCH_LIMIT = 1000

# Flask-WTF flag for CSRF
WTF_CSRF_ENABLED = False

# Add endpoints that need to be exempt from CSRF protection
WTF_CSRF_EXEMPT_LIST = [
    "superset.views.core.log",
    "superset.views.core.explore_json",
    "superset.charts.data.api.data",
]

# Whether to run the web server in debug mode or not
# DEBUG = os.environ.get("FLASK_ENV") == "development"
DEBUG = True
FLASK_USE_RELOAD = True

# Enable profiling of Python calls. Turn this on and append ``?_instrument=1``
# to the page to see the call stack.
PROFILING = False

# Superset allows server-side python stacktraces to be surfaced to the
# user when this feature is on. This may has security implications
# and it's more secure to turn it off in production settings.
SHOW_STACKTRACE = True

# Use all X-Forwarded headers when ENABLE_PROXY_FIX is True.
# When proxying to a different port, set "x_port" to 0 to avoid downstream issues.
ENABLE_PROXY_FIX = True
PROXY_FIX_CONFIG = {"x_for": 1, "x_proto": 1, "x_host": 1, "x_port": 1, "x_prefix": 1}

# Configuration for scheduling queries from SQL Lab.
SCHEDULED_QUERIES: Dict[str, Any] = {}

# ------------------------------
# GLOBALS FOR APP Builder
# ------------------------------
# Uncomment to setup Your App name
APP_NAME = LOGIN_NAME

# Specify the App icon
# APP_ICON = STATIC_ASSETS_PREFIX + "/static/assets/images/superset-logo-horiz.png"
APP_ICON = STATIC_ASSETS_PREFIX + "/static/assets/images/superset-logo-new-b.png"
APP_ICON_WIDTH = 126

# Specify where clicking the logo would take the user
# e.g. setting it to '/' would take the user to '/superset/welcome/'
LOGO_TARGET_PATH = STATIC_ASSETS_PREFIX

# Specify tooltip that should appear when hovering over the App Icon/Logo
LOGO_TOOLTIP = "长安汽车bi系统"

# Specify any text that should appear to the right of the logo
LOGO_RIGHT_TEXT: Union[Callable[[], str], str] = ""

# Enables SWAGGER UI for superset openapi spec
# ex: http://localhost:8080/swagger/v1
FAB_API_SWAGGER_UI = True

# Druid query timezone
# tz.tzutc() : Using utc timezone
# tz.tzlocal() : Using local timezone
# tz.gettz('Asia/Shanghai') : Using the time zone with specific name
# [TimeZone List]
# See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
# other tz can be overridden by providing a local_config
# DRUID_TZ = tz.tzutc()
DRUID_TZ = tz.gettz("Asia/Shanghai")
DRUID_ANALYSIS_TYPES = ["cardinality"]

# ----------------------------------------------------
# AUTHENTICATION CONFIG
# ----------------------------------------------------
# The authentication type
# AUTH_OID : Is for OpenID
# AUTH_DB : Is for database (username/password)
# AUTH_LDAP : Is for LDAP
# AUTH_REMOTE_USER : Is for using REMOTE_USER from web server
# 集成远程登录DDM的cas配置
AUTH_TYPE = AUTH_DB

# 是否使用DB认证登陆方式
LOGIN_METHODS_CONTAIN_DB = True
# Uncomment to setup Full admin role name
AUTH_ROLE_ADMIN = "Admin"

# Uncomment to setup Public role name, no authentication needed
AUTH_ROLE_PUBLIC = "Public"

# Will allow user self registration
AUTH_USER_REGISTRATION = True

# The default user self registration role
AUTH_USER_REGISTRATION_ROLE = "Public"

# When using LDAP Auth, setup the LDAP server
AUTH_LDAP_SERVER = "ldap://ldap.changan.com:389"
AUTH_LDAP_SEARCH = "dc=example,dc=org"
AUTH_LDAP_UID_FIELD = "cn"
AUTH_LDAP_USERNAME_FORMAT = "cn=%s"
AUTH_LDAP_BIND_USER = "cn=watcher,dc=example,dc=org"  # ldap 绑定用户
AUTH_LDAP_BIND_PASSWORD = "7g7J08xJcllNqsVl"  # ldap 密码LoginManager

# Uncomment to setup OpenID providers example for OpenID authentication
# OPENID_PROVIDERS = [
#    { 'name': 'Yahoo', 'url': 'https://open.login.yahoo.com/' },
#    { 'name': 'Flickr', 'url': 'https://www.flickr.com/<username>' },

# ---------------------------------------------------
# Roles config
# ---------------------------------------------------
# Grant public role the same set of permissions as for a selected builtin role.
# This is useful if one wants to enable anonymous users to view
# dashboards. Explicit grant on specific datasets is still required.
PUBLIC_ROLE_LIKE: Optional[str] = None

# ---------------------------------------------------
# Babel config for translations
# ---------------------------------------------------
# Setup default language
BABEL_DEFAULT_LOCALE = "zh"
# Your application default translation path
BABEL_DEFAULT_FOLDER = "superset/translations"
# The allowed translation for you app
LANGUAGES = {
    "en": {"flag": "us", "name": "English"},
    "zh": {"flag": "cn", "name": "Chinese"},
    "th": {"flag": "th", "name": "Thai"},
}
# Turning off i18n by default as translation in most languages are
# incomplete and not well maintained.
# LANGUAGES = {}

CURRENCIES = ["USD", "EUR", "GBP", "INR", "MXN", "JPY", "CNY"]

# ---------------------------------------------------
# Feature flags
# ---------------------------------------------------
# Feature flags that are set by default go here. Their values can be
# overwritten by those specified under FEATURE_FLAGS in superset_config.py
# For example, DEFAULT_FEATURE_FLAGS = { 'FOO': True, 'BAR': False } here
# and FEATURE_FLAGS = { 'BAR': True, 'BAZ': True } in superset_config.py
# will result in combined feature flags of { 'FOO': True, 'BAR': True, 'BAZ': True }
DEFAULT_FEATURE_FLAGS: Dict[str, bool] = {
    # allow dashboard to use sub-domains to send chart request
    # you also need ENABLE_CORS and
    # SUPERSET_WEBSERVER_DOMAINS for list of domains
    "ALLOW_DASHBOARD_DOMAIN_SHARDING": True,
    # Experimental feature introducing a client (browser) cache
    "CLIENT_CACHE": False,
    "DISABLE_DATASET_SOURCE_EDIT": False,
    # When using a recent version of Druid that supports JOINs turn this on
    "DRUID_JOINS": False,
    "DYNAMIC_PLUGINS": False,
    # With Superset 2.0, we are updating the default so that the legacy datasource
    # editor no longer shows. Currently this is set to false so that the editor
    # option does show, but we will be depreciating it.
    "DISABLE_LEGACY_DATASOURCE_EDITOR": True,
    # For some security concerns, you may need to enforce CSRF protection on
    # all query request to explore_json endpoint. In Superset, we use
    # `flask-csrf <https://sjl.bitbucket.io/flask-csrf/>`_ add csrf protection
    # for all POST requests, but this protection doesn't apply to GET method.
    # When ENABLE_EXPLORE_JSON_CSRF_PROTECTION is set to true, your users cannot
    # make GET request to explore_json. explore_json accepts both GET and POST request.
    # See `PR 7935 <https://github.com/apache/superset/pull/7935>`_ for more details.
    "ENABLE_EXPLORE_JSON_CSRF_PROTECTION": False,
    "ENABLE_TEMPLATE_PROCESSING": True,
    "ENABLE_TEMPLATE_REMOVE_FILTERS": True,
    # Allow for javascript controls components
    # this enables programmers to customize certain charts (like the
    # geospatial ones) by inputing javascript in controls. This exposes
    # an XSS security vulnerability
    "ENABLE_JAVASCRIPT_CONTROLS": False,
    "KV_STORE": False,
    # When this feature is enabled, nested types in Presto will be
    # expanded into extra columns and/or arrays. This is experimental,
    # and doesn't work with all nested types.
    "PRESTO_EXPAND_DATA": False,
    # Exposes API endpoint to compute thumbnails
    "THUMBNAILS": True,
    "DASHBOARD_CACHE": False,
    "REMOVE_SLICE_LEVEL_LABEL_COLORS": False,
    "SHARE_QUERIES_VIA_KV_STORE": False,
    "TAGGING_SYSTEM": False,
    "SQLLAB_BACKEND_PERSISTENCE": True,
    "LISTVIEWS_DEFAULT_CARD_VIEW": True,
    # When True, this flag allows display of HTML tags in Markdown components
    "DISPLAY_MARKDOWN_HTML": True,
    # When True, this escapes HTML (rather than rendering it) in Markdown components
    "ESCAPE_MARKDOWN_HTML": False,
    "DASHBOARD_NATIVE_FILTERS": True,
    "DASHBOARD_CROSS_FILTERS": True,  # 开启交叉过滤器
    "DASHBOARD_DRILL_DOWN": True,  # 开启下钻功能
    # Feature is under active development and breaking changes are expected
    "DASHBOARD_NATIVE_FILTERS_SET": False,
    "DASHBOARD_FILTERS_EXPERIMENTAL": False,
    "DASHBOARD_VIRTUALIZATION": False,
    "GLOBAL_ASYNC_QUERIES": False,
    "VERSIONED_EXPORT": True,
    # Note that: RowLevelSecurityFilter is only given by default to the Admin role
    # and the Admin Role does have the all_datasources security permission.
    # But, if users create a specific role with access to RowLevelSecurityFilter MVC
    # and a custom datasource access, the table dropdown will not be correctly filtered
    # by that custom datasource access. So we are assuming a default security config,
    # a custom security config could potentially give access to setting filters on
    # tables that users do not have access to.
    "ROW_LEVEL_SECURITY": True,
    "EMBEDDED_SUPERSET": True,
    # Enables Alerts and reports new implementation
    "ALERT_REPORTS": True,
    "DASHBOARD_RBAC": True,
    "ENABLE_EXPLORE_DRAG_AND_DROP": True,  # 启用指标拖拽
    "ENABLE_FILTER_BOX_MIGRATION": False,  # 弃用过滤器框审核提示
    "ENABLE_ADVANCED_DATA_TYPES": False,
    "ENABLE_DND_WITH_CLICK_UX": True,
    # Enabling ALERTS_ATTACH_REPORTS, the system sends email and slack message
    # with screenshot and link
    # Disables ALERTS_ATTACH_REPORTS, the system DOES NOT generate screenshot
    # for report with type 'alert' and sends email and slack message with only link;
    # for report with type 'report' still send with email and slack message with
    # screenshot and link
    "ALERTS_ATTACH_REPORTS": True,
    # FORCE_DATABASE_CONNECTIONS_SSL is depreciated.
    "FORCE_DATABASE_CONNECTIONS_SSL": False,
    # Enabling ENFORCE_DB_ENCRYPTION_UI forces all database connections to be
    # encrypted before being saved into superset metastore.
    "ENFORCE_DB_ENCRYPTION_UI": False,
    # Allow users to export full CSV of table viz type.
    # This could cause the server to run out of memory or compute.
    "ALLOW_FULL_CSV_EXPORT": False,
    "UX_BETA": False,
    "GENERIC_CHART_AXES": True,
    "ALLOW_ADHOC_SUBQUERY": False,
    "USE_ANALAGOUS_COLORS": True,
    "DASHBOARD_EDIT_CHART_IN_NEW_TAB": False,
    # Apply RLS rules to SQL Lab queries. This requires parsing and manipulating the
    # query, and might break queries and/or allow users to bypass RLS. Use with care!
    "RLS_IN_SQLLAB": True,
    # Enable caching per impersonation key (e.g username) in a datasource where user
    # impersonation is enabled
    "CACHE_IMPERSONATION": False,
    # Enable sharing charts with embedding
    "EMBEDDABLE_CHARTS": True,
    "DRILL_TO_DETAIL": True,
    "DATAPANEL_CLOSED_BY_DEFAULT": False,
    "HORIZONTAL_FILTER_BAR": True,
    # The feature is off by default, and currently only supported in Presto and Postgres,
    # and Bigquery.
    # It also needs to be enabled on a per-database basis, by adding the key/value pair
    # `cost_estimate_enabled: true` to the database `extra` attribute.
    "ESTIMATE_QUERY_COST": False,
    # Allow users to enable ssh tunneling when creating a DB.
    # Users must check whether the DB engine supports SSH Tunnels
    # otherwise enabling this flag won't have any effect on the DB.
    "SSH_TUNNELING": False,
}

# ------------------------------
# SSH Tunnel
# ------------------------------
# Allow users to set the host used when connecting to the SSH Tunnel
# as localhost and any other alias (0.0.0.0)
# ----------------------------------------------------------------------
#                             |
# -------------+              |    +----------+
#     LOCAL    |              |    |  REMOTE  | :22 SSH
#     CLIENT   | <== SSH ========> |  SERVER  | :8080 web service
# -------------+              |    +----------+
#                             |
#                          FIREWALL (only port 22 is open)

# ----------------------------------------------------------------------
SSH_TUNNEL_MANAGER_CLASS = "superset.extensions.ssh.SSHManager"
SSH_TUNNEL_LOCAL_BIND_ADDRESS = "127.0.0.1"
#: Timeout (seconds) for tunnel connection (open_channel timeout)
SSH_TUNNEL_TIMEOUT_SEC = 10.0
#: Timeout (seconds) for transport socket (``socket.settimeout``)
SSH_TUNNEL_PACKET_TIMEOUT_SEC = 1.0
# Feature flags may also be set via 'SUPERSET_FEATURE_' prefixed environment vars.
DEFAULT_FEATURE_FLAGS.update(
    {
        k[len("SUPERSET_FEATURE_") :]: parse_boolean_string(v)
        for k, v in os.environ.items()
        if re.search(r"^SUPERSET_FEATURE_\w+", k)
    }
)

# This is merely a default.
FEATURE_FLAGS: Dict[str, bool] = {}

# A function that receives a dict of all feature flags
# (DEFAULT_FEATURE_FLAGS merged with FEATURE_FLAGS)
# can alter it, and returns a similar dict. Note the dict of feature
# flags passed to the function is a deepcopy of the dict in the config,
# and can therefore be mutated without side-effect
#
# GET_FEATURE_FLAGS_FUNC can be used to implement progressive rollouts,
# role-based features, or a full on A/B testing framework.
#
# from flask import g, request
# def GET_FEATURE_FLAGS_FUNC(feature_flags_dict: Dict[str, bool]) -> Dict[str, bool]:
#     if hasattr(g, "user") and g.user.is_active:
#         feature_flags_dict['some_feature'] = g.user and g.user.get_id() == 5
#     return feature_flags_dict
GET_FEATURE_FLAGS_FUNC: Optional[Callable[[Dict[str, bool]], Dict[str, bool]]] = None
# A function that receives a feature flag name and an optional default value.
# Has a similar utility to GET_FEATURE_FLAGS_FUNC but it's useful to not force the
# evaluation of all feature flags when just evaluating a single one.
#
# Note that the default `get_feature_flags` will evaluate each feature with this
# callable when the config key is set, so don't use both GET_FEATURE_FLAGS_FUNC
# and IS_FEATURE_ENABLED_FUNC in conjunction.
IS_FEATURE_ENABLED_FUNC: Optional[Callable[[str, Optional[bool]], bool]] = None
# A function that expands/overrides the frontend `bootstrap_data.common` object.
# Can be used to implement custom frontend functionality,
# or dynamically change certain configs.
#
# Values in `bootstrap_data.common` should have these characteristics:
# - They are not specific to a page the user is visiting
# - They do not contain secrets
#
# Takes as a parameter the common bootstrap payload before transformations.
# Returns a dict containing data that should be added or overridden to the payload.
COMMON_BOOTSTRAP_OVERRIDES_FUNC: Callable[[Dict[str, Any]], Dict[str, Any]] = (
    lambda data: {}
)  # default: empty dict

# EXTRA_CATEGORICAL_COLOR_SCHEMES is used for adding custom categorical color schemes
# example code for "My custom warm to hot" color scheme
# EXTRA_CATEGORICAL_COLOR_SCHEMES = [
#     {
#         "id": 'myVisualizationColors',
#         "description": '',
#         "label": 'My Visualization Colors',
#         "isDefault": True,
#         "colors":
#          ['#006699', '#009DD9', '#5AAA46', '#44AAAA', '#DDAA77', '#7799BB', '#88AA77',
#          '#552288', '#5AAA46', '#CC7788', '#EEDD55', '#9977BB', '#BBAA44', '#DDCCDD']
#     }]

# This is merely a default
EXTRA_CATEGORICAL_COLOR_SCHEMES: List[Dict[str, Any]] = []

# THEME_OVERRIDES is used for adding custom theme to superset
# example code for "My theme" custom scheme
# THEME_OVERRIDES = {
#   "borderRadius": 4,
#   "colors": {
#     "primary": {
#       "base": 'red',
#     },
#     "secondary": {
#       "base": 'green',
#     },
#     "grayscale": {
#       "base": 'orange',
#     }
#   }
# }

THEME_OVERRIDES: Dict[str, Any] = {}

# EXTRA_SEQUENTIAL_COLOR_SCHEMES is used for adding custom sequential color schemes
EXTRA_SEQUENTIAL_COLOR_SCHEMES = [
    {
        "id": "warmToHot",
        "description": "",
        "isDiverging": True,
        "label": "My custom warm to hot",
        "isDefault": True,
        "colors": [
            "#552288",
            "#5AAA46",
            "#CC7788",
            "#EEDD55",
            "#9977BB",
            "#BBAA44",
            "#DDCCDD",
            "#006699",
            "#009DD9",
            "#5AAA46",
            "#44AAAA",
            "#DDAA77",
            "#7799BB",
            "#88AA77",
        ],
    }
]

# This is merely a default
EXTRA_SEQUENTIAL_COLOR_SCHEMES: List[Dict[str, Any]] = []

# ---------------------------------------------------
# Thumbnail config (behind feature flag)
# ---------------------------------------------------
# When executing Alerts & Reports or Thumbnails as the Selenium user, this defines
# the username of the account used to render the queries and dashboards/charts
THUMBNAIL_SELENIUM_USER: Optional[str] = "admin"

# To be able to have different thumbnails for different users, use these configs to
# define which user to execute the thumbnails and potentially custom functions for
# calculating thumbnail digests. To have unique thumbnails for all users, use the
# following config:
# THUMBNAIL_EXECUTE_AS = [ExecutorType.CURRENT_USER]
THUMBNAIL_EXECUTE_AS = [ExecutorType.SELENIUM]

# By default, thumbnail digests are calculated based on various parameters in the
# chart/dashboard metadata, and in the case of user-specific thumbnails, the
# username. To specify a custom digest function, use the following config parameters
# to define callbacks that receive
# 1. the model (dashboard or chart)
# 2. the executor type (e.g. ExecutorType.SELENIUM)
# 3. the executor's username (note, this is the executor as defined by
# `THUMBNAIL_EXECUTE_AS`; the executor is only equal to the currently logged in
# user if the executor type is equal to `ExecutorType.CURRENT_USER`)
# and return the final digest string:
THUMBNAIL_DASHBOARD_DIGEST_FUNC: Optional[
    Callable[[Dashboard, ExecutorType, str], str]
] = None
THUMBNAIL_CHART_DIGEST_FUNC: Optional[Callable[[Slice, ExecutorType, str], str]] = None

# THUMBNAIL_CACHE_CONFIG: CacheConfig = {
#     "CACHE_TYPE": "NullCache",
#     "CACHE_NO_NULL_WARNING": True,
# }
THUMBNAIL_CACHE_CONFIG: CacheConfig = {
    "CACHE_TYPE": "redis",
    "CACHE_NO_NULL_WARNING": True,
    "CACHE_DEFAULT_TIMEOUT": 86400,
    "CACHE_KEY_PREFIX": "superset_thumbnail_",
    "CACHE_REDIS_HOST": SUPERSET_REDIS_HOST,
    "CACHE_REDIS_PORT": SUPERSET_REDIS_PORT,
    "CACHE_REDIS_DB": SUPERSET_REDIS_DB,
    "CACHE_REDIS_URL": "redis://:"
    + SUPERSET_REDIS_PASSWORD
    + "@"
    + SUPERSET_REDIS_HOST
    + ":"
    + SUPERSET_REDIS_PORT
    + "/"
    + str(SUPERSET_REDIS_DB),
}

# Time before selenium times out after trying to locate an element on the page and wait
# for that element to load for a screenshot.
SCREENSHOT_LOCATE_WAIT = int(timedelta(seconds=10).total_seconds())
# Time before selenium times out after waiting for all DOM class elements named
# "loading" are gone.
SCREENSHOT_LOAD_WAIT = int(timedelta(minutes=1).total_seconds())
# Selenium destroy retries
SCREENSHOT_SELENIUM_RETRIES = 5
# Give selenium an headstart, in secondsad
SCREENSHOT_SELENIUM_HEADSTART = 3
# Wait for the chart animation, in seconds
SCREENSHOT_SELENIUM_ANIMATION_WAIT = 5
# Replace unexpected errors in screenshots with real error messages
SCREENSHOT_REPLACE_UNEXPECTED_ERRORS = False
# Max time to wait for error message modal to show up, in seconds
SCREENSHOT_WAIT_FOR_ERROR_MODAL_VISIBLE = 5
# Max time to wait for error message modal to close, in seconds
SCREENSHOT_WAIT_FOR_ERROR_MODAL_INVISIBLE = 5

# ---------------------------------------------------
# Image and file configuration
# ---------------------------------------------------
# The file upload folder, when using models with files
UPLOAD_FOLDER = BASE_DIR + "/app/static/uploads/"
UPLOAD_CHUNK_SIZE = 4096

# The image upload folder, when using models with images
IMG_UPLOAD_FOLDER = BASE_DIR + "/app/static/uploads/"

# The image upload url, when using models with images
IMG_UPLOAD_URL = "/static/uploads/"
# Setup image size default is (300, 200, True)
# IMG_SIZE = (300, 200, True)

# Default cache timeout, applies to all cache backends unless specifically overridden in
# each cache config.
CACHE_DEFAULT_TIMEOUT = int(timedelta(days=1).total_seconds())

# Optional maximum file size in bytes when uploading a CSV
CSV_UPLOAD_MAX_SIZE = None

# 元数据缓存
# Default cache for Superset objects
# CACHE_CONFIG: CacheConfig = {"CACHE_TYPE": "NullCache"}
CACHE_CONFIG: CacheConfig = {
    "CACHE_TYPE": "redis",
    "CACHE_DEFAULT_TIMEOUT": 60 * 60 * 24,  # 一天的缓存 即 60秒 * 60 * 24小时
    "CACHE_KEY_PREFIX": "superset_cache",
    "CACHE_REDIS_HOST": SUPERSET_REDIS_HOST,
    "CACHE_REDIS_PORT": SUPERSET_REDIS_PORT,
    "CACHE_REDIS_DB": SUPERSET_REDIS_DB,
    "CACHE_REDIS_URL": "redis://:"
    + SUPERSET_REDIS_PASSWORD
    + "@"
    + SUPERSET_REDIS_HOST
    + ":"
    + SUPERSET_REDIS_PORT
    + "/"
    + str(SUPERSET_REDIS_DB),
}

# 从数据集来的表的缓存
# Cache for datasource metadata and query results
# DATA_CACHE_CONFIG: CacheConfig = {"CACHE_TYPE": "NullCache"}
DATA_CACHE_CONFIG: CacheConfig = {
    "CACHE_TYPE": "redis",
    "CACHE_DEFAULT_TIMEOUT": 60 * 60 * 24,  # 一天的缓存 即 60秒 * 60 * 24小时
    "CACHE_KEY_PREFIX": "superset_data_cache",
    "CACHE_REDIS_HOST": SUPERSET_REDIS_HOST,
    "CACHE_REDIS_PORT": SUPERSET_REDIS_PORT,
    "CACHE_REDIS_DB": SUPERSET_REDIS_DB,
    "CACHE_REDIS_URL": "redis://:"
    + SUPERSET_REDIS_PASSWORD
    + "@"
    + SUPERSET_REDIS_HOST
    + ":"
    + SUPERSET_REDIS_PORT
    + "/"
    + str(SUPERSET_REDIS_DB),
}

# 仪表盘筛选状态缓存
# Cache for dashboard filter state (`CACHE_TYPE` defaults to `SimpleCache` when
#  running in debug mode unless overridden)
# FILTER_STATE_CACHE_CONFIG: CacheConfig = {
#     "CACHE_DEFAULT_TIMEOUT": int(timedelta(days=90).total_seconds()),
#     # should the timeout be reset when retrieving a cached value
#     "REFRESH_TIMEOUT_ON_RETRIEVAL": True,
# }
FILTER_STATE_CACHE_CONFIG: CacheConfig = {
    "CACHE_DEFAULT_TIMEOUT": int(timedelta(days=90).total_seconds()),
    # should the timeout be reset when retrieving a cached value
    "REFRESH_TIMEOUT_ON_RETRIEVAL": True,
    "CACHE_TYPE": "redis",
    # 'CACHE_DEFAULT_TIMEOUT': 60 * 60 * 24,  # 一天的缓存 即 60秒 * 60 * 24小时
    "CACHE_KEY_PREFIX": "superset_filter_state_cache",
    "CACHE_REDIS_HOST": SUPERSET_REDIS_HOST,
    "CACHE_REDIS_PORT": SUPERSET_REDIS_PORT,
    "CACHE_REDIS_DB": SUPERSET_REDIS_DB,
    "CACHE_REDIS_PASSWORD": SUPERSET_REDIS_PASSWORD,
    "CACHE_REDIS_URL": "redis://:"
    + SUPERSET_REDIS_PASSWORD
    + "@"
    + SUPERSET_REDIS_HOST
    + ":"
    + SUPERSET_REDIS_PORT
    + "/"
    + str(SUPERSET_REDIS_DB),
}

# 从数据浏览表缓存 (必须的)
# Cache for explore form data state (`CACHE_TYPE` defaults to `SimpleCache` when
#  running in debug mode unless overridden)
# EXPLORE_FORM_DATA_CACHE_CONFIG: CacheConfig = {
#     "CACHE_DEFAULT_TIMEOUT": int(timedelta(days=7).total_seconds()),
#     # should the timeout be reset when retrieving a cached value
#     "REFRESH_TIMEOUT_ON_RETRIEVAL": True,
# }
EXPLORE_FORM_DATA_CACHE_CONFIG: CacheConfig = {
    "CACHE_DEFAULT_TIMEOUT": int(timedelta(days=7).total_seconds()),
    # should the timeout be reset when retrieving a cached value
    "REFRESH_TIMEOUT_ON_RETRIEVAL": True,
    "CACHE_TYPE": "redis",
    "CACHE_KEY_PREFIX": "superset_explore_from_data_cache",
    "CACHE_REDIS_HOST": SUPERSET_REDIS_HOST,
    "CACHE_REDIS_PORT": SUPERSET_REDIS_PORT,
    "CACHE_REDIS_DB": SUPERSET_REDIS_DB,
    # 'CACHE_REDIS_PASSWORD': 'Abcd1234',
    "CACHE_REDIS_URL": "redis://:"
    + SUPERSET_REDIS_PASSWORD
    + "@"
    + SUPERSET_REDIS_HOST
    + ":"
    + SUPERSET_REDIS_PORT
    + "/"
    + str(SUPERSET_REDIS_DB),
}

# store cache keys by datasource UID (via CacheKey) for custom processing/invalidation
STORE_CACHE_KEYS_IN_METADATA_DB = False

# CORS Options
ENABLE_CORS = True
CORS_OPTIONS: Dict[Any, Any] = {
    "origins": "*",  # 允许所有域
}

# Sanitizes the HTML content used in markdowns to allow its rendering in a safe manner.
# Disabling this option is not recommended for security reasons. If you wish to allow
# valid safe elements that are not included in the default sanitization schema, use the
# HTML_SANITIZATION_SCHEMA_EXTENSIONS configuration.
HTML_SANITIZATION = True

# Use this configuration to extend the HTML sanitization schema.
# By default we use the Gihtub schema defined in
# https://github.com/syntax-tree/hast-util-sanitize/blob/main/lib/schema.js
# For example, the following configuration would allow the rendering of the
# style attribute for div elements and the ftp protocol in hrefs:
# HTML_SANITIZATION_SCHEMA_EXTENSIONS = {
#   "attributes": {
#     "div": ["style"],
#   },
#   "protocols": {
#     "href": ["ftp"],
#   }
# }
# Be careful when extending the default schema to avoid XSS attacks.
HTML_SANITIZATION_SCHEMA_EXTENSIONS: Dict[str, Any] = {}

# Chrome allows up to 6 open connections per domain at a time. When there are more
# than 6 slices in dashboard, a lot of time fetch requests are queued up and wait for
# next available socket. PR #5039 is trying to allow domain sharding for Superset,
# and this feature will be enabled by configuration only (by default Superset
# doesn't allow cross-domain request).
SUPERSET_WEBSERVER_DOMAINS = None

# Allowed format types for upload on Database view
EXCEL_EXTENSIONS = {"xlsx", "xls"}
CSV_EXTENSIONS = {"csv", "tsv", "txt"}
COLUMNAR_EXTENSIONS = {"parquet", "zip"}
ALLOWED_EXTENSIONS = {*EXCEL_EXTENSIONS, *CSV_EXTENSIONS, *COLUMNAR_EXTENSIONS}

# CSV Options: key/value pairs that will be passed as argument to DataFrame.to_csv
# method.
# note: index option should not be overridden
# CSV_EXPORT = {"encoding": "utf-8"}
CSV_EXPORT = {"encoding": "utf-8-sig"}
# csv 文件导出是否导出默认数字索引
CSV_EXPORT_INDEX = False

# Excel Options: key/value pairs that will be passed as argument to DataFrame.to_excel
# method.
# note: index option should not be overridden
EXCEL_EXPORT = {"encoding": "utf-8", "index": False}

# ---------------------------------------------------
# Time grain configurations
# ---------------------------------------------------
# List of time grains to disable in the application (see list of builtin
# time grains in superset/db_engine_specs/base.py).
# For example: to disable 1 second time grain:
# TIME_GRAIN_DENYLIST = ['PT1S']
TIME_GRAIN_DENYLIST: List[str] = []

# Additional time grains to be supported using similar definitions as in
# superset/db_engine_specs/base.py.
# For example: To add a new 2 second time grain:
# TIME_GRAIN_ADDONS = {'PT2S': '2 second'}
TIME_GRAIN_ADDONS: Dict[str, str] = {}

# Implementation of additional time grains per engine.
# The column to be truncated is denoted `{col}` in the expression.
# For example: To implement 2 second time grain on clickhouse engine:
# TIME_GRAIN_ADDON_EXPRESSIONS = {
#     'clickhouse': {
#         'PT2S': 'toDateTime(intDiv(toUInt32(toDateTime({col})), 2)*2)'
#     }
# }
TIME_GRAIN_ADDON_EXPRESSIONS: Dict[str, Dict[str, str]] = {}

# ---------------------------------------------------
# List of viz_types not allowed in your environment
# For example: Disable pivot table and treemap:
#  VIZ_TYPE_DENYLIST = ['pivot_table', 'treemap']
# ---------------------------------------------------

VIZ_TYPE_DENYLIST: List[str] = []

# --------------------------------------------------
# Modules, datasources and middleware to be registered
# --------------------------------------------------
DEFAULT_MODULE_DS_MAP = OrderedDict(
    [
        ("superset.connectors.sqla.models", ["SqlaTable"]),
    ]
)
ADDITIONAL_MODULE_DS_MAP: Dict[str, List[str]] = {}
ADDITIONAL_MIDDLEWARE: List[Callable[..., Any]] = []

# 1) https://docs.python-guide.org/writing/logging/
# 2) https://docs.python.org/2/library/logging.config.html

# Default configurator will consume the LOG_* settings below
LOGGING_CONFIGURATOR = DefaultLoggingConfigurator()

# Console Log Settings

LOG_FORMAT = "%(asctime)s:%(levelname)s:%(name)s:%(message)s"
LOG_LEVEL = "DEBUG"

# ---------------------------------------------------
# Enable Time Rotate Log Handler
# ---------------------------------------------------
# LOG_LEVEL = DEBUG, INFO, WARNING, ERROR, CRITICAL

ENABLE_TIME_ROTATE = True  # 开启日志
if sys.platform.startswith("win"):
    ENABLE_TIME_ROTATE = False
TIME_ROTATE_LOG_LEVEL = "DEBUG"
# FILENAME = os.path.join(r"/home/lys_dev/apps/ca_superset/log/superset.log")

# 配置superset的log日志路径(日志放在项目根路径下的logs文件里)
log_dir = Path(__file__).parent.parent.joinpath("logs")
if not log_dir.is_dir():
    log_dir.mkdir()
FILENAME = str(DATA_DIR_PATH.joinpath("logs/superset.log"))

ROLLOVER = "midnight"
INTERVAL = 1
BACKUP_COUNT = 30

# Custom logger for auditing queries. This can be used to send ran queries to a
# structured immutable store for auditing purposes. The function is called for
# every query ran, in both SQL Lab and charts/dashboards.
# def QUERY_LOGGER(
#     database,
#     query,
#     schema=None,
#     user=None,  # TODO(john-bodley): Deprecate in 3.0.
#     client=None,
#     security_manager=None,
#     log_params=None,
# ):
#     pass
QUERY_LOGGER = None

# Set this API key to enable Mapbox visualizations
MAPBOX_API_KEY = os.environ.get("MAPBOX_API_KEY", "")

# Maximum number of rows returned for any analytical database query
# sql工具箱查询时显示记录最大数量
SQL_MAX_ROW = 50000

# Maximum number of rows displayed in SQL Lab UI
# Is set to avoid out of memory/localstorage issues in browsers. Does not affect
# exported CSVs
DISPLAY_MAX_ROW = 10000

# Default row limit for SQL Lab q
# ueries. Is overridden by setting a new limit in
# the SQL Lab UI
DEFAULT_SQLLAB_LIMIT = 1000

# Maximum number of tables/views displayed in the dropdown window in SQL Lab.
MAX_TABLE_NAMES = 3000

# Adds a warning message on sqllab save query and schedule query modals.
SQLLAB_SAVE_WARNING_MESSAGE = None
SQLLAB_SCHEDULE_WARNING_MESSAGE = None

# Force refresh while auto-refresh in dashboard
DASHBOARD_AUTO_REFRESH_MODE: Literal["fetch", "force"] = "force"
# Dashboard auto refresh intervals
DASHBOARD_AUTO_REFRESH_INTERVALS = [
    [0, "Don't refresh"],
    [10, "10 seconds"],
    [30, "30 seconds"],
    [60, "1 minute"],
    [300, "5 minutes"],
    [1800, "30 minutes"],
    [3600, "1 hour"],
    [21600, "6 hours"],
    [43200, "12 hours"],
    [86400, "24 hours"],
]

# Default celery config is to use SQLA as a broker, in a production setting
# you'll want to use a proper broker as specified here:
# http://docs.celeryproject.org/en/latest/getting-started/brokers/index.html

CELERY_BROKER_REDIS_DB = 6
CELERY_BACKEND_REDIS_DB = 7


class CeleryConfig:  # pylint: disable=too-few-public-methods
    # broker_url = "sqla+sqlite:///celerydb.sqlite"
    # imports = ("superset.sql_lab",)
    # result_backend = "db+sqlite:///celery_results.sqlite"
    # worker_log_level = "DEBUG"
    # worker_prefetch_multiplier = 1
    # task_acks_late = False
    # task_annotations = {
    #     "sql_lab.get_sql_results": {"rate_limit": "100/s"},
    #     "email_reports.send": {
    #         "rate_limit": "1/s",
    #         "time_limit": int(timedelta(seconds=120).total_seconds()),
    #         "soft_time_limit": int(timedelta(seconds=150).total_seconds()),
    #         "ignore_result": True,
    #     },
    # }
    broker_url = (
        "redis://:"
        + SUPERSET_REDIS_PASSWORD
        + "@"
        + SUPERSET_REDIS_HOST
        + ":"
        + SUPERSET_REDIS_PORT
        + "/"
        + str(CELERY_BROKER_REDIS_DB)
    )

    broker_connection_retry = True
    broker_connection_retry_on_startup = True

    imports = (
        "superset.sql_lab",
        "superset.tasks",
        "superset.tasks.thumbnails",
    )
    result_backend = (
        "redis://:"
        + SUPERSET_REDIS_PASSWORD
        + "@"
        + SUPERSET_REDIS_HOST
        + ":"
        + SUPERSET_REDIS_PORT
        + "/"
        + str(CELERY_BACKEND_REDIS_DB)
    )
    worker_log_level = "DEBUG"
    worker_prefetch_multiplier = 10
    task_acks_late = True
    task_annotations = {
        "sql_lab.get_sql_results": {"rate_limit": "1000/s"},
        "email_reports.send": {
            "rate_limit": "1/s",
            "time_limit": int(timedelta(seconds=120).total_seconds()),
            "soft_time_limit": int(timedelta(seconds=150).total_seconds()),
            "ignore_result": True,
        },
    }
    broker_url = (
        "redis://:"
        + SUPERSET_REDIS_PASSWORD
        + "@"
        + SUPERSET_REDIS_HOST
        + ":"
        + SUPERSET_REDIS_PORT
        + "/"
        + str(CELERY_BROKER_REDIS_DB)
    )

    broker_connection_retry = True
    broker_connection_retry_on_startup = True

    imports = (
        "superset.sql_lab",
        "superset.tasks",
        "superset.tasks.thumbnails",
    )
    result_backend = (
        "redis://:"
        + SUPERSET_REDIS_PASSWORD
        + "@"
        + SUPERSET_REDIS_HOST
        + ":"
        + SUPERSET_REDIS_PORT
        + "/"
        + str(CELERY_BACKEND_REDIS_DB)
    )
    worker_log_level = "DEBUG"
    worker_prefetch_multiplier = 10
    task_acks_late = True
    task_annotations = {
        "sql_lab.get_sql_results": {"rate_limit": "1000/s"},
        "email_reports.send": {
            "rate_limit": "1/s",
            "time_limit": int(timedelta(seconds=120).total_seconds()),
            "soft_time_limit": int(timedelta(seconds=150).total_seconds()),
            "ignore_result": True,
        },
    }
    timezone = "Asia/Shanghai"
    enable_utc = False
    beat_schedule = {
        "cache-warmup-hourly": {
            "task": "cache-warmup",
            "schedule": crontab(minute=0, hour="*"),  # hourly
            "kwargs": {
                "strategy_name": "top_n_dashboards",
                "top_n": 30,
                "since": "7 days ago",
            },
        },
        "email_reports.schedule_hourly": {
            "task": "email_reports.schedule_hourly",
            "schedule": crontab(minute=1, hour="*"),
        },
        "reports.scheduler": {
            "task": "reports.scheduler",
            "schedule": crontab(minute="*", hour="*"),
        },
        "reports.prune_log": {
            "task": "reports.prune_log",
            "schedule": crontab(minute=0, hour=0),
        },
        # 每天凌晨 1 点执行任务。
        "user_management.cleanup_inactive_users": {
            "task": "user_management.cleanup_inactive_users",
            "schedule": crontab(minute="0", hour="1"),
        },
        "system_management.update_metadata": {
            "task": "system_management.update_metadata",
            "schedule": crontab(minute="0", hour="1,13"),
        },
        # 每天凌晨 3 点执行任务。
        "wechat.update_department_user": {
            "task": "wechat.update_department_user",
            "schedule": crontab(minute="0", hour="3"),
        },
        # 每天凌晨2点执行
        "reports.delete_obs_file": {
            "task": "reports.delete_obs_file",
            "schedule": crontab(minute="0", hour="2"),
        },
        # 数据集下的数据同步
        "dataset.scheduler": {
            "task": "dataset.scheduler",
            "schedule": crontab(minute="*", hour="*"),
        },
        # # 每天凌晨2点30分执行
        # "channel.update_channel_data":{
        #     "task": "channel.update_channel_data",
        #     "schedule": crontab(minute="30", hour="2"),
        # }
    }


CELERY_CONFIG = CeleryConfig  # pylint: disable=invalid-name

# Set celery config to None to disable all the above configuration
# CELERY_CONFIG = None

# Additional static HTTP headers to be served by your Superset server. Note
# Flask-Talisman applies the relevant security HTTP headers.
#
# DEFAULT_HTTP_HEADERS: sets default values for HTTP headers. These may be overridden
# within the app
# OVERRIDE_HTTP_HEADERS: sets override values for HTTP headers. These values will
# override anything set within the app
DEFAULT_HTTP_HEADERS: Dict[str, Any] = {}
OVERRIDE_HTTP_HEADERS: Dict[str, Any] = {}
HTTP_HEADERS: Dict[str, Any] = {}

# The db id here results in selecting this one as a default in SQL Lab
DEFAULT_DB_ID = None

# Timeout duration for SQL Lab synchronous queries
SQLLAB_TIMEOUT = int(timedelta(seconds=1800).total_seconds())

# Timeout duration for SQL Lab query validation
SQLLAB_VALIDATION_TIMEOUT = int(timedelta(seconds=10).total_seconds())

# SQLLAB_DEFAULT_DBID
SQLLAB_DEFAULT_DBID = None

# The MAX duration a query can run for before being killed by celery.
SQLLAB_ASYNC_TIME_LIMIT_SEC = int(timedelta(hours=6).total_seconds())

# Some databases support running EXPLAIN queries that allow users to estimate
# query costs before they run. These EXPLAIN queries should have a small
# timeout.
SQLLAB_QUERY_COST_ESTIMATE_TIMEOUT = int(timedelta(seconds=300).total_seconds())
# The feature is off by default, and currently only supported in Presto and Postgres.
# It also need to be enabled on a per-database basis, by adding the key/value pair
# `cost_estimate_enabled: true` to the database `extra` attribute.
ESTIMATE_QUERY_COST = False
# The cost returned by the databases is a relative value; in order to map the cost to
# a tangible value you need to define a custom formatter that takes into consideration
# your specific infrastructure. For example, you could analyze queries a posteriori by
# running EXPLAIN on them, and compute a histogram of relative costs to present the
# cost as a percentile, this step is optional as every db engine spec has its own
# query cost formatter, but it you wanna customize it you can define it inside the config:

# def postgres_query_cost_formatter(
#     result: List[Dict[str, Any]]
# ) -> List[Dict[str, str]]:
#     # 25, 50, 75% percentiles
#     percentile_costs = [100.0, 1000.0, 10000.0]
#
#     out = []
#     for row in result:
#         relative_cost = row["Total cost"]
#         percentile = bisect.bisect_left(percentile_costs, relative_cost) + 1
#         out.append({
#             "Relative cost": relative_cost,
#             "Percentile": str(percentile * 25) + "%",
#         })
#
#     return out
#
# QUERY_COST_FORMATTERS_BY_ENGINE: {"postgresql": postgres_query_cost_formatter}
QUERY_COST_FORMATTERS_BY_ENGINE: Dict[
    str, Callable[[List[Dict[str, Any]]], List[Dict[str, Any]]]
] = {}

# Flag that controls if limit should be enforced on the CTA (create table as queries).
SQLLAB_CTAS_NO_LIMIT = False

# This allows you to define custom logic around the "CREATE TABLE AS" or CTAS feature
# in SQL Lab that defines where the target schema should be for a given user.
# Database `CTAS Schema` has a precedence over this setting.
# Example below returns a username and CTA queries will write tables into the schema
# name `username`
# SQLLAB_CTAS_SCHEMA_NAME_FUNC = lambda database, user, schema, sql: user.username
# This is move involved example where depending on the database you can leverage data
# available to assign schema for the CTA query:
# def compute_schema_name(database: Database, user: User, schema: str, sql: str) -> str:
#     if database.name == 'mysql_payments_slave':
#         return 'tmp_superset_schema'
#     if database.name == 'presto_gold':
#         return user.username
#     if database.name == 'analytics':
#         if 'analytics' in [r.name for r in user.roles]:
#             return 'analytics_cta'
#         else:
#             return f'tmp_{schema}'
# Function accepts database object, user object, schema name and sql that will be run.
SQLLAB_CTAS_SCHEMA_NAME_FUNC: Optional[
    Callable[[Database, models.User, str, str], str]
    # Callable[["Database", "models.User", str, str], str]
] = None

# If enabled, it can be used to store the results of long-running queries
# in SQL Lab by using the "Run Async" button/feature
# RESULTS_BACKEND: Optional[BaseCache] = None
RESULTS_BACKEND = RedisCache(
    host=SUPERSET_REDIS_HOST,
    port=SUPERSET_REDIS_PORT,
    password=SUPERSET_REDIS_PASSWORD,
    key_prefix="superset_results",
)

# Use PyArrow and MessagePack for async query results serialization,
# rather than JSON. This feature requires additional testing from the
# community before it is fully adopted, so this config option is provided
# in order to disable should breaking issues be discovered.
RESULTS_BACKEND_USE_MSGPACK = True

# The S3 bucket where you want to store your external hive tables created
# from CSV files. For example, 'companyname-superset'
# CSV_TO_HIVE_UPLOAD_S3_BUCKET = None
CSV_TO_HIVE_UPLOAD_S3_BUCKET = "casuperset"

# The directory within the bucket specified above that will
# contain all the external tables
CSV_TO_HIVE_UPLOAD_DIRECTORY = "EXTERNAL_HIVE_TABLES/"


# Function that creates upload directory dynamically based on the
# database used, user and schema provided.
def CSV_TO_HIVE_UPLOAD_DIRECTORY_FUNC(  # pylint: disable=invalid-name
    database: Database,
    user: models.User,  # pylint: disable=unused-argument
    schema: Optional[str],
) -> str:
    # Note the final empty path enforces a trailing slash.
    return os.path.join(
        CSV_TO_HIVE_UPLOAD_DIRECTORY, str(database.id), schema or "", ""
    )


# The namespace within hive where the tables created from
# uploading CSVs will be stored.
UPLOADED_CSV_HIVE_NAMESPACE: Optional[str] = None

# Function that computes the allowed schemas for the CSV uploads.
# Allowed schemas will be a union of schemas_allowed_for_file_upload
# db configuration and a result of this function.

# mypy doesn't catch that if case ensures list content being always str
ALLOWED_USER_CSV_SCHEMA_FUNC: Callable[[Database, models.User], List[str]] = (
    lambda database, user: [UPLOADED_CSV_HIVE_NAMESPACE]
    if UPLOADED_CSV_HIVE_NAMESPACE
    else []
)

# Values that should be treated as nulls for the csv uploads.
CSV_DEFAULT_NA_NAMES = list(STR_NA_VALUES)

# A dictionary of items that gets merged into the Jinja context for
# SQL Lab. The existing context gets updated with this dictionary,
# meaning values for existing keys get overwritten by the content of this
# dictionary. Exposing functionality through JINJA_CONTEXT_ADDONS has security
# implications as it opens a window for a user to execute untrusted code.
# It's important to make sure that the objects exposed (as well as objects attached
# to those objets) are harmless. We recommend only exposing simple/pure functions that
# return native types.
JINJA_CONTEXT_ADDONS: Dict[str, Callable[..., Any]] = {}

# A dictionary of macro template processors (by engine) that gets merged into global
# template processors. The existing template processors get updated with this
# dictionary, which means the existing keys get overwritten by the content of this
# dictionary. The customized addons don't necessarily need to use Jinja templating
# language. This allows you to define custom logic to process templates on a per-engine
# basis. Example value = `{"presto": CustomPrestoTemplateProcessor}`
CUSTOM_TEMPLATE_PROCESSORS: Dict[str, Type[BaseTemplateProcessor]] = {}

# Roles that are controlled by the API / Superset and should not be changes
# by humans.
ROBOT_PERMISSION_ROLES = ["Public", "Gamma", "Alpha", "Admin", "sql_lab"]

CONFIG_PATH_ENV_VAR = "SUPERSET_CONFIG_PATH"

# If a callable is specified, it will be called at app startup while passing
# a reference to the Flask app. This can be used to alter the Flask app
# in whatever way.
# example: FLASK_APP_MUTATOR = lambda x: x.before_request = f
FLASK_APP_MUTATOR = None

# Set this to false if you don't want users to be able to request/grant
# datasource access requests from/to other users.
ENABLE_ACCESS_REQUEST = False

# smtp server configuration
# smtp 服务配置
EMAIL_NOTIFICATIONS = True  # all the emails are sent using dryrun
SMTP_HOST = "smtp.qq.com"
SMTP_STARTTLS = False
SMTP_SSL = True
SMTP_USER = "xiao3952@foxmail.com"
SMTP_PORT = 465
SMTP_PASSWORD = "kqfqavwwqppdbjhi"
SMTP_MAIL_FROM = "xiao3952@foxmail.com"

# If True creates a default SSL context with ssl.Purpose.CLIENT_AUTH using the
# default system root CA certificates.
SMTP_SSL_SERVER_AUTH = False
ENABLE_CHUNK_ENCODING = False

# Whether to bump the logging level to ERROR on the flask_appbuilder package
# Set to False if/when debugging FAB related issues like
# permission management
SILENCE_FAB = True

FAB_ADD_SECURITY_VIEWS = True
FAB_ADD_SECURITY_PERMISSION_VIEW = False
FAB_ADD_SECURITY_VIEW_MENU_VIEW = False
FAB_ADD_SECURITY_PERMISSION_VIEWS_VIEW = False

# The link to a page containing common errors and their resolutions
# It will be appended at the bottom of sql_lab errors.
TROUBLESHOOTING_LINK = ""

# CSRF token timeout, set to None for a token that never expires
WTF_CSRF_TIME_LIMIT = int(timedelta(weeks=1).total_seconds())

# This link should lead to a page with instructions on how to gain access to a
# Datasource. It will be placed at the bottom of permissions errors.
PERMISSION_INSTRUCTIONS_LINK = ""

# Integrate external Blueprints to the app by passing them to your
# configuration. These blueprints will get integrated in the app
BLUEPRINTS: List[Blueprint] = []

# Provide a callable that receives a tracking_url and returns another
# URL. This is used to translate internal Hadoop job tracker URL
# into a proxied one


# Transform SQL query tracking url for Hive and Presto engines. You may also
# access information about the query itself by adding a second parameter
# to your transformer function, e.g.:
#   TRACKING_URL_TRANSFORMER = (
#       lambda url, query: url if is_fresh(query) else None
#   )
TRACKING_URL_TRANSFORMER = lambda url: url

# customize the polling time of each engine
DB_POLL_INTERVAL_SECONDS: Dict[str, int] = {}

# Interval between consecutive polls when using Hive Engine
HIVE_POLL_INTERVAL = int(timedelta(seconds=5).total_seconds())

# Interval between consecutive polls when using Presto Engine
# See here: https://github.com/dropbox/PyHive/blob/8eb0aeab8ca300f3024655419b93dad926c1a351/pyhive/presto.py#L93  # pylint: disable=line-too-long,useless-suppression
PRESTO_POLL_INTERVAL = int(timedelta(seconds=5).total_seconds())

# Allow list of custom authentications for each DB engine.
# Example:
# from your.module import AuthClass
# from another.extra import auth_method
#
# ALLOWED_EXTRA_AUTHENTICATIONS: Dict[str, Dict[str, Callable[..., Any]]] = {
#     "trino": {
#         "custom_auth": AuthClass,
#         "another_auth_method": auth_method,
#     },
# }
ALLOWED_EXTRA_AUTHENTICATIONS: Dict[str, Dict[str, Callable[..., Any]]] = {}

# Allow for javascript controls components
# this enables programmers to customize certain charts (like the
# geospatial ones) by inputing javascript in controls. This exposes
# an XSS security vulnerability
ENABLE_JAVASCRIPT_CONTROLS = False

# The id of a template dashboard that should be copied to every new user
DASHBOARD_TEMPLATE_ID = None

# A callable that allows altering the database connection URL and params
# on the fly, at runtime. This allows for things like impersonation or
# arbitrary logic. For instance you can wire different users to
# use different connection parameters, or pass their email address as the
# username. The function receives the connection uri object, connection
# params, the username, and returns the mutated uri and params objects.
# Example:
#   def DB_CONNECTION_MUTATOR(uri, params, username, security_manager, source):
#       user = security_manager.find_user(username=username)
#       if user and user.email:
#           uri.username = user.email
#       return uri, params
#
# Note that the returned uri and params are passed directly to sqlalchemy's
# as such `create_engine(url, **params)`
DB_CONNECTION_MUTATOR = None


# A function that intercepts the SQL to be executed and can alter it.
# The use case is can be around adding some sort of comment header
# with information such as the username and worker node information
#
#    def SQL_QUERY_MUTATOR(
#        sql,
#        user_name=user_name,  # TODO(john-bodley): Deprecate in 3.0.
#        security_manager=security_manager,
#        database=database,
#    ):
#        dttm = datetime.now().isoformat()
#        return f"-- [SQL LAB] {user_name} {dttm}\n{sql}"
# For backward compatibility, you can unpack any of the above arguments in your
# function definition, but keep the **kwargs as the last argument to allow new args
# to be added later without any errors.
def SQL_QUERY_MUTATOR(  # pylint: disable=invalid-name,unused-argument
    sql: str, **kwargs: Any
) -> str:
    return sql


# A variable that chooses whether to apply the SQL_QUERY_MUTATOR before or after splitting the input query
# It allows for using the SQL_QUERY_MUTATOR function for more than comments
# Usage: If you want to apply a change to every statement to a given query, set MUTATE_AFTER_SPLIT = True
# An example use case is if data has role based access controls, and you want to apply
# a SET ROLE statement alongside every user query. Changing this variable maintains
# functionality for both the SQL_Lab and Charts.
MUTATE_AFTER_SPLIT = False


# This allows for a user to add header data to any outgoing emails. For example,
# if you need to include metadata in the header or you want to change the specifications
# of the email title, header, or sender.
def EMAIL_HEADER_MUTATOR(  # pylint: disable=invalid-name,unused-argument
    msg: MIMEMultipart, **kwargs: Any
) -> MIMEMultipart:
    # logger.error(msg)
    # msg["Subject"] = Header(msg["Subject"], "utf-8").encode()
    return msg


# Define a list of usernames to be excluded from all dropdown lists of users
# Owners, filters for created_by, etc.
# The users can also be excluded by overriding the get_exclude_users_from_lists method
# in security manager
EXCLUDE_USERS_FROM_LISTS: Optional[List[str]] = None

# For database connections, this dictionary will remove engines from the available
# list/dropdown if you do not want these dbs to show as available.
# The available list is generated by driver installed, and some engines have multiple
# drivers.
# e.g., DBS_AVAILABLE_DENYLIST: Dict[str, Set[str]] = {"databricks": {"pyhive", "pyodbc"}}
DBS_AVAILABLE_DENYLIST: Dict[str, Set[str]] = {}

# This auth provider is used by background (offline) tasks that need to access
# protected resources. Can be overridden by end users in order to support
# custom auth mechanisms
MACHINE_AUTH_PROVIDER_CLASS = "superset.utils.machine_auth.MachineAuthProvider"

# ---------------------------------------------------
# Alerts & Reports
# ---------------------------------------------------
# Used for Alerts/Reports (Feature flask ALERT_REPORTS) to set the size for the
# sliding cron window size, should be synced with the celery beat config minus 1 second
ALERT_REPORTS_CRON_WINDOW_SIZE = 59
ALERT_REPORTS_WORKING_TIME_OUT_KILL = True
# Which user to attempt to execute Alerts/Reports as. By default,
# use the user defined in the `THUMBNAIL_SELENIUM_USER` config parameter.
# To first try to execute as the creator in the owners list (if present), then fall
# back to the creator, then the last modifier in the owners list (if present), then the
# last modifier, then an owner (giving priority to the last modifier and then the
# creator if either is contained within the list of owners, otherwise the first owner
# will be used) and finally `THUMBNAIL_SELENIUM_USER`, set as follows:
# ALERT_REPORTS_EXECUTE_AS = [
#     ScheduledTaskExecutor.CREATOR_OWNER,
#     ScheduledTaskExecutor.CREATOR,
#     ScheduledTaskExecutor.MODIFIER_OWNER,
#     ScheduledTaskExecutor.MODIFIER,
#     ScheduledTaskExecutor.OWNER,
#     ScheduledTaskExecutor.SELENIUM,
# ]
ALERT_REPORTS_EXECUTE_AS: List[ExecutorType] = [ExecutorType.SELENIUM]
# if ALERT_REPORTS_WORKING_TIME_OUT_KILL is True, set a celery hard timeout
# Equal to working timeout + ALERT_REPORTS_WORKING_TIME_OUT_LAG
ALERT_REPORTS_WORKING_TIME_OUT_LAG = int(timedelta(seconds=10).total_seconds())
# if ALERT_REPORTS_WORKING_TIME_OUT_KILL is True, set a celery hard timeout
# Equal to working timeout + ALERT_REPORTS_WORKING_SOFT_TIME_OUT_LAG
ALERT_REPORTS_WORKING_SOFT_TIME_OUT_LAG = int(timedelta(seconds=1).total_seconds())
# If set to true no notification is sent, the worker will just log a message.
# Useful for debugging
ALERT_REPORTS_NOTIFICATION_DRY_RUN = False
# Max tries to run queries to prevent false errors caused by transient errors
# being returned to users. Set to a value >1 to enable retries.
ALERT_REPORTS_QUERY_EXECUTION_MAX_TRIES = 1

# A custom prefix to use on all Alerts & Reports emails
EMAIL_REPORTS_SUBJECT_PREFIX = "[Report] "

# The text for call-to-action link in Alerts & Reports emails
# 邮箱链接名
EMAIL_REPORTS_CTA = "跳转长安自助BI分析平台"

# Slack API token for the superset reports, either string or callable
SLACK_API_TOKEN: Optional[Union[Callable[[], str], str]] = None
SLACK_PROXY = None

# The webdriver to use for generating reports. Use one of the following
# firefox
#   Requires: geckodriver and firefox installations
#   Limitations: can be buggy at times
# chrome:
#   Requires: headless chrome
#   Limitations: unable to generate screenshots of elements
WEBDRIVER_TYPE = "chrome"

# Window size - this will impact the rendering of the data
WEBDRIVER_WINDOW = {
    "dashboard": (1600, 2000),
    "slice": (3000, 1200),
    "pixel_density": 1,
}

# An optional override to the default auth hook used to provide auth to the
# offline webdriver
WEBDRIVER_AUTH_FUNC = None

# Any config options to be passed as-is to the webdriver
WEBDRIVER_CONFIGURATION: Dict[Any, Any] = {"service_log_path": "/dev/null"}

# Additional args to be passed as arguments to the config object
# Note: If using Chrome, you'll want to add the "--marionette" arg.
WEBDRIVER_OPTION_ARGS = [
    "--force-device-scale-factor=2.0",
    "--high-dpi-support=2.0",
    "--headless",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-extensions",
]

# The base URL to query for accessing the user interface
# 驱动访问的url
WEBDRIVER_BASEURL = "https://127.0.0.1:5000"
# The base URL for the email report hyperlinks.
WEBDRIVER_BASEURL_USER_FRIENDLY = WEBDRIVER_BASEURL
# Time selenium will wait for the page to load and render for the email report.
EMAIL_PAGE_RENDER_WAIT = int(timedelta(seconds=30).total_seconds())
# Use r-string for clean path handling, but the content must match your path
WEBDRIVER_CHROME_DRIVER_PATH = (
    r"C:\Users\xiao3\Desktop\zb\server\superset\utils\chromedriver.exe"
)
# Send user to a link where they can report bugs
BUG_REPORT_URL = None
BUG_REPORT_TEXT = "Report a bug"
BUG_REPORT_ICON = None  # Recommended size: 16x16

# Send user to a link where they can read more about Superset
DOCUMENTATION_URL = "/cabi/document/chapter1/"
DOCUMENTATION_TEXT = "帮助手册"
DOCUMENTATION_ICON = "fa fa-book"  # Recommended size: 16x16

# What is the Last N days relative in the time selector to:
# 'today' means it is midnight (00:00:00) in the local timezone
# 'now' means it is relative to the query issue time
# If both start and end time is set to now, this will make the time
# filter a moving window. By only setting the end time to now,
# start time will be set to midnight, while end will be relative to
# the query issue time.
DEFAULT_RELATIVE_START_TIME = "today"
DEFAULT_RELATIVE_END_TIME = "today"

# Configure which SQL validator to use for each engine
SQL_VALIDATORS_BY_ENGINE = {
    "presto": "PrestoDBSQLValidator",
    "postgresql": "PostgreSQLValidator",
}

# A list of preferred databases, in order. These databases will be
# displayed prominently in the "Add Database" dialog. You should
# use the "engine_name" attribute of the corresponding DB engine spec
# in `superset/db_engine_specs/`.
PREFERRED_DATABASES: List[str] = [
    "PostgreSQL",
    "Presto",
    "MySQL",
    "SQLite",
    # etc.
]
# PREFERRED_DATABASES: List[str] = [
#   "MySQL",
#   "Oracle",
# 	"kylin",
# 	"hive",
# 	"trino"
# ]
# When adding a new database we try to connect to it. Depending on which parameters are
# incorrect this could take a couple minutes, until the SQLAlchemy driver pinging the
# database times out. Instead of relying on the driver timeout we can specify a shorter
# one here.
TEST_DATABASE_CONNECTION_TIMEOUT = timedelta(seconds=30)

# Enable/disable CSP warning
CONTENT_SECURITY_POLICY_WARNING = False

# Do you want Talisman enabled?
TALISMAN_ENABLED = False
# If you want Talisman, how do you want it configured??
TALISMAN_CONFIG = {
    "content_security_policy": None,
    "force_https": False,
    "force_https_permanent": False,
    # "frame_options": "ALLOW_FROM",
    # "frame_options_allow_from": "http://10.59.90.228:18080",
    # "session_cookie_samesite": None
}

TALISMAN_DEV_CONFIG = {
    "content_security_policy": None,
    "force_https": False,
    "force_https_permanent": False,
    # "frame_options": "ALLOW_FROM",
    # "frame_options_allow_from": "http://10.59.90.228:18080",
    # "session_cookie_samesite": None
}
# It is possible to customize which tables and roles are featured in the RLS
# dropdown. When set, this dict is assigned to `add_form_query_rel_fields` and
# `edit_form_query_rel_fields` on `RowLevelSecurityFiltersModelView`. Example:
#
# from flask_appbuilder.models.sqla import filters
# RLS_FORM_QUERY_REL_FIELDS = {
#     "roles": [["name", filters.FilterStartsWith, "RlsRole"]]
#     "tables": [["table_name", filters.FilterContains, "rls"]]
# }
RLS_FORM_QUERY_REL_FIELDS: Optional[Dict[str, List[List[Any]]]] = None

#
# Flask session cookie options
#
# See https://flask.palletsprojects.com/en/1.1.x/security/#set-cookie-options
# for details
#
SESSION_COOKIE_HTTPONLY = True  # Prevent cookie from being read by frontend JS?
SESSION_COOKIE_SECURE = False  # Prevent cookie from being transmitted over non-tls?
SESSION_COOKIE_SAMESITE: Optional[Literal["None", "Lax", "Strict"]] = "Lax"

# Cache static resources.
SEND_FILE_MAX_AGE_DEFAULT = int(timedelta(days=365).total_seconds())

# URI to database storing the example data, points to
# SQLALCHEMY_DATABASE_URI by default if set to `None`
# SQLALCHEMY_EXAMPLES_URI = None
SQLALCHEMY_EXAMPLES_URI = "sqlite:///" + os.path.join(DATA_DIR, "examples.db")

# Some sqlalchemy connection strings can open Superset to security risks.
# Typically these should not be allowed.
PREVENT_UNSAFE_DB_CONNECTIONS = True

# Prevents unsafe default endpoints to be registered on datasets.
PREVENT_UNSAFE_DEFAULT_URLS_ON_DATASET = True

# Define a list of allowed URLs for dataset data imports (v1).
# Simple example to only allow URLs that belong to certain domains:
# ALLOWED_IMPORT_URL_DOMAINS = [
#     r"^https://.+\.domain1\.com\/?.*", r"^https://.+\.domain2\.com\/?.*"
# ]
DATASET_IMPORT_ALLOWED_DATA_URLS = [r".*"]

# Path used to store SSL certificates that are generated when using custom certs.
# Defaults to temporary directory.
# Example: SSL_CERT_PATH = "/certs"
SSL_CERT_PATH: Optional[str] = None

# SQLA table mutator, every time we fetch the metadata for a certain table
# (superset.connectors.sqla.models.SqlaTable), we call this hook
# to allow mutating the object with this callback.
# This can be used to set any properties of the object based on naming
# conventions and such. You can find examples in the tests.

SQLA_TABLE_MUTATOR = lambda table: table

# Global async query config options.
# Requires GLOBAL_ASYNC_QUERIES feature flag to be enabled.
# GLOBAL_ASYNC_QUERIES_REDIS_CONFIG = {
#     "port": 6379,
#     "host": "127.0.0.1",
#     "password": "",
#     "db": 0,
#     "ssl": False,
# }
GLOBAL_ASYNC_QUERIES_REDIS_CONFIG = {
    "port": SUPERSET_REDIS_PORT,
    "host": SUPERSET_REDIS_HOST,
    "password": SUPERSET_REDIS_PASSWORD,
    "db": SUPERSET_REDIS_DB,
    "ssl": False,
}
GLOBAL_ASYNC_QUERIES_REDIS_STREAM_PREFIX = "async-events-"
GLOBAL_ASYNC_QUERIES_REDIS_STREAM_LIMIT = 1000
GLOBAL_ASYNC_QUERIES_REDIS_STREAM_LIMIT_FIREHOSE = 1000000
GLOBAL_ASYNC_QUERIES_JWT_COOKIE_NAME = "async-token"
GLOBAL_ASYNC_QUERIES_JWT_COOKIE_SECURE = False
GLOBAL_ASYNC_QUERIES_JWT_COOKIE_SAMESITE: Optional[Literal["None", "Lax", "Strict"]] = (
    None
)
GLOBAL_ASYNC_QUERIES_JWT_COOKIE_DOMAIN = None
GLOBAL_ASYNC_QUERIES_JWT_SECRET = (
    "tG5esXIVqp1TlnOF40zWW4zWxh7998zZy6M6aNIVCZNwSRn2T7kLfA2u"
)
GLOBAL_ASYNC_QUERIES_TRANSPORT = "polling"
GLOBAL_ASYNC_QUERIES_POLLING_DELAY = int(
    timedelta(milliseconds=500).total_seconds() * 1000
)
GLOBAL_ASYNC_QUERIES_WEBSOCKET_URL = "ws://127.0.0.1:8080/"

# Embedded config options
GUEST_ROLE_NAME = "Public"
GUEST_TOKEN_JWT_SECRET = "test-guest-secret-change-me"
GUEST_TOKEN_JWT_ALGO = "HS256"
GUEST_TOKEN_HEADER_NAME = "X-GuestToken"
GUEST_TOKEN_JWT_EXP_SECONDS = 300  # 5 minutes
# Guest token audience for the embedded superset, either string or callable
GUEST_TOKEN_JWT_AUDIENCE: Optional[Union[Callable[[], str], str]] = None

# A SQL dataset health check. Note if enabled it is strongly advised that the callable
# be memoized to aid with performance, i.e.,
#
#    @cache_manager.cache.memoize(timeout=0)
#    def DATASET_HEALTH_CHECK(datasource: SqlaTable) -> Optional[str]:
#        if (
#            datasource.sql and
#            len(sql_parse.ParsedQuery(datasource.sql, strip_comments=True).tables) == 1
#        ):
#            return (
#                "This virtual dataset queries only one table and therefore could be "
#                "replaced by querying the table directly."
#            )
#
#        return None
#
# Within the FLASK_APP_MUTATOR callable, i.e., once the application and thus cache have
# been initialized it is also necessary to add the following logic to blow the cache for
# all datasources if the callback function changed.
#
#    def FLASK_APP_MUTATOR(app: Flask) -> None:
#        name = "DATASET_HEALTH_CHECK"
#        func = app.config[name]
#        code = func.uncached.__code__.co_code
#
#        if cache_manager.cache.get(name) != code:
#            cache_manager.cache.delete_memoized(func)
#            cache_manager.cache.set(name, code, timeout=0)
#
DATASET_HEALTH_CHECK: Optional[Callable[["SqlaTable"], str]] = None

# Do not show user info or profile in the menu
MENU_HIDE_USER_INFO = False

# SQLalchemy link doc reference
SQLALCHEMY_DOCS_URL = "https://docs.sqlalchemy.org/en/13/core/engines.html"
SQLALCHEMY_DISPLAY_TEXT = "SQLAlchemy docs"

# Set to False to only allow viewing own recent activity
# or to disallow users from viewing other users profile page
ENABLE_BROAD_ACTIVITY_ACCESS = True

# 云图登录
YUNTU_CHECK_TOKEN_URL = (
    "https://yuntudev.aiyimaiche.com/prime/v1/api/uni/user/check/temp/token"
)
YUNTU_APP_KEY = "YT202307111415000005"
YUNTU_SECRET_KEY = "d139184ef60f4ce686ce54e342885d3b"

# CAS_SERVER = 'http://caddmuat.changan.com.cn/cas'
CAS_USER_INFO_URL = "https://caddmuat.changan.com.cn/cas/v1/users"
CAS_SERVER = "http://caddm.changan.com.cn/cas"
CAS_AFTER_LOGIN = "login"
# SESSION_TYPE = 'filesystem'
CAS_LOGOUT_ROUTE = "logout"
CAS_LOGINOUT_SERVER_URL = "https://caddm.changan.com.cn/cas/logout"
# CAS登陆时公钥存放路径
# caddmuat公钥
CAS_PUBLIC_KEY = "/public.pem"

# SESSION_PROTECTION
# 设置session保护值为：basic或strong
SESSION_PROTECTION = "strong"
SESSION_SERVER_SIDE = True
# the advanced data type key should correspond to that set in the column metadata
ADVANCED_DATA_TYPES: Dict[str, AdvancedDataType] = {
    "internet_address": internet_address,
    "port": internet_port,
}

# By default, the Welcome page features all charts and dashboards the user has access
# to. This can be changed to show only examples, or a custom view
# by providing the title and a FAB filter:
# WELCOME_PAGE_LAST_TAB = (
#     "Xyz",
#     [{"col": 'created_by', "opr": 'rel_o_m', "value": 10}],
# )
WELCOME_PAGE_LAST_TAB: Union[
    Literal["examples", "all"], Tuple[str, List[Dict[str, Any]]]
] = "all"

# Configuration for environment tag shown on the navbar. Setting 'text' to '' will hide the tag.
# 'color' can either be a hex color code, or a dot-indexed theme color (e.g. error.base)
ENVIRONMENT_TAG_CONFIG = {
    "variable": "FLASK_ENV",
    "values": {
        "development": {
            "color": "error.base",
            "text": "Development",
        },
        "production": {
            "color": "",
            "text": "",
        },
    },
}


class ExtraDynamicQueryFilters(TypedDict, total=False):
    databases: Callable[[Query], Query]


EXTRA_DYNAMIC_QUERY_FILTERS: ExtraDynamicQueryFilters = {}


# Extra related query filters make it possible to limit which objects are shown
# in the UI. For examples, to only show "admin" or users starting with the letter "b" in
# the "Owners" dropdowns, you could add the following in your config:
# def user_filter(query: Query, *args, *kwargs):
#     from superset import security_manager
#
#     user_model = security_manager.user_model
#     filters = [
#         user_model.username == "admin",
#         user_model.username.ilike("b%"),
#     ]
#     return query.filter(or_(*filters))
#
#  EXTRA_RELATED_QUERY_FILTERS = {"user": user_filter}
#
# Similarly, to restrict the roles in the "Roles" dropdown you can provide a custom
# filter callback for the "role" key.
class ExtraRelatedQueryFilters(TypedDict, total=False):
    role: Callable[[Query], Query]
    user: Callable[[Query], Query]


EXTRA_RELATED_QUERY_FILTERS: ExtraRelatedQueryFilters = {}

# A set of disallowed SQL functions per engine. This is used to restrict the use of
# unsafe SQL functions in SQL Lab and Charts. The keys of the dictionary are the engine
# names, and the values are sets of disallowed functions.
DISALLOWED_SQL_FUNCTIONS: dict[str, set[str]] = {
    # "postgresql": {"version", "query_to_xml", "inet_server_addr", "inet_client_addr"},
    # "clickhouse": {"url"},
    # "mysql": {"version"},
}

# -------------------------------------------------------------------
# *                WARNING:  STOP EDITING  HERE                    *
# -------------------------------------------------------------------
# Don't add config values below this line since local configs won't be
# able to override them.
if CONFIG_PATH_ENV_VAR in os.environ:
    # Explicitly import config module that is not necessarily in pythonpath; useful
    # for case where app is being executed via pex.
    cfg_path = os.environ[CONFIG_PATH_ENV_VAR]
    try:
        module = sys.modules[__name__]
        override_conf = imp.load_source("superset_config", cfg_path)
        for key in dir(override_conf):
            if key.isupper():
                setattr(module, key, getattr(override_conf, key))

        print(f"Loaded your LOCAL configuration at [{cfg_path}]")
    except Exception:
        logger.exception(
            "Failed to import config for %s=%s", CONFIG_PATH_ENV_VAR, cfg_path
        )
        raise
elif importlib.util.find_spec("superset_config") and not is_test():
    try:
        # pylint: disable=import-error,wildcard-import,unused-wildcard-import
        import superset_config
        from superset_config import *  # type: ignore

        print(f"Loaded your LOCAL configuration at [{superset_config.__file__}]")
    except Exception:
        logger.exception("Found but failed to import local superset_config")
        raise

# Max allowed size for a zipped file
ZIPPED_FILE_MAX_SIZE = 100 * 1024 * 1024  # 100MB
# Max allowed compression ratio for a zipped file
ZIP_FILE_MAX_COMPRESS_RATIO = 200.0

# ---------------------------------------------------
# Thumbnail config (behind feature flag)
# ---------------------------------------------------
# When executing Alerts & Reports or Thumbnails as the Selenium user, this defines
# the username of the account used to render the queries and dashboards/charts
THUMBNAIL_SELENIUM_USER: Optional[str] = "admin"
# selenium
V2_SELENIUM_LOGIN_URL = "http://127.0.0.1:5000/login/"
V2_SELENIUM_ADMIN_USERNAME = THUMBNAIL_SELENIUM_USER
V2_SELENIUM_ADMIN_PASSWORD = "123456"
V2_SELENIUM_COMMON_SLEEP_TIME = 3
# wkhtmlto
WK_BIN_PATH_PDF = "/usr/local/bin/wkhtmltopdf"
WK_BIN_PATH_IMG = "/usr/local/bin/wkhtmltoimage"
# 水印配置
# 文字
WATER_MARK_TEXT = "长安水印logo"
# 颜色(十六进制)
WATER_MARK_COLOR = "#8B8B1B"
# 字体大小
WATER_MARK_SIZE = 30
# 透明度 （0~1）
WATER_MARK_OPACITY = 0.5
# 文字间隔
WATER_MARK_SPACE = 400
# 文字旋转角度（逆时针方向以度为单位）
WATER_MARK_ANGLE = 50
# PDF 宽度
WATER_MARK_PDF_WIDTH = 1200
# PDF 高度
WATER_MARK_PDF_HIGH = 2000

# 网格计数列
GRID_COUNT_COLUMN = 36

# ichangan
CMP_LOGIN_URL = "http://cmp.changan.com/rescenter/rest/resRestApi/v2/userLogin"
CMP_LOGIN_ID = "900349"
CMP_LOGIN_PASSWORD = "A@*127sky"
CLIENT_IP = "10.18.31.36"
ICHANGAN_SEND_MSG_URL = "http://cmp.changan.com/mscenter/send/v2/app4.0"
WECOM_SEND_MSG_URL = "http://cmp.changan.com/mscenter/send/v2/weix"

# 登录限制
NUM_OF_LOGIN_FAILURES = 50  # 时间段内ip可失败次数
LOGIN_FAILURE_TIME = 1  # 登录失败锁定时间/hour

# 阿里云储存oss连接信息配置
ALY_AK = "tvPr7Iwyed5l3oEu"
ALY_SK = "ijF0E45wxbYabRuMsmoT5bsUlgyU1U"
ALY_ENDPOINT = ""
ALY_BUCKET_NAME = "shujuchu-bi-prod"

# 华为云储存obs连接信息配置
HUAWEI_ACCESS_KEY_ID = "JDNYUGW0ANW5O3ATP162"
HUAWEI_SECRET_ACCESS_KEY = "wwNhagg9wdtMi1Cj6Eu9UstlQROgRmX3kwoIYHah"
HUAWEI_BUCKET_NAME = "yanilo"
HUAWEI_SERVER = "https://obs.cn-north-4.myhuaweicloud.com"
HUAWEI_IMG_FOLDER_NAME = "yanilo_prod"

# 对象存储服务商 阿里的oss 华为云的obs 本地   ("aliyun" | "huaweicloud" | "local")
OBJECT_STORAGE_SERVICE = "local"

# iframe内嵌页面获取token方式
QUERY_TOKEN_TYPE = "message"

# 渝北工厂token校验
# CAPS_CHECK_TOKEN_URL = "http://ybapi.changan.com/caportal/v1/checktoken"
CAPS_CHECK_TOKEN_URL = "http://ybapi.changan.com/changan/caportal/v1/checktoken"
# 渝北工厂业务应用获取用户权限列表
CAPS_USER_PERMISSION = (
    "http://ybapi.changan.com/changan/caps/v1/user/queryUserPermission"
)
# API调用平台key
CAPS_APP_KEY = "65211d79559110139b0cd761"
# 门户应用编码
CAPS_APP_CODE = "superset-test"
CAPS = "CAPS"

# 智积工具门户校验
CMP_GET_USER_BY_TOKEN = (
    "http://cmp.changan.com/rescenter/rest/resRestApi/v2/getUserByToken"
)

# CDS统一门户token校验
# CDS = "CDS"
# CDS_CHECK_TOKEN_URL = "http://10.70.160.24:80/portal-server/checkToken"
CDS_CHECK_TOKEN_URL = "http://10.70.149.150/portal-server/checkToken"

# ichangan APP 集成
USER_BY_TOKEN_URL = "http://cmpuat.changan.com:80/rescenter/rest/resRestApi/v2/getUserByToken?identityToken={}"
REMEMBER_TIMEOUT = timedelta(minutes=30)

# PRESTO_STARROCKS_SCHEMA 用presto 连 starrocks数据库指定的SCHEMA
PRESTO_STARROCKS_SCHEMA = "ods_user_research"

# 设置数据库同步 定时任务队列的redis队列DB
DATABASE_SYNC_QUEUE_REDIS_DB = 15

# 菜单栏排序
MENU_BAR_SORTING = [
    # 'Home',
    "Dashboard",
    "Chart",
    "Dataset",
    "Datasource",
    "Database Sync",
    "Monitoring Reports",
    "Security",
    "Manage",
    "Records",
    "Spread Sheet",
    "Version Log",
    "SQL Lab",
    "System Manager",
]

# 自定义的token名
BI_TOKEN_NAME = False

# 工具链token名
TC_TOKEN_NAME = "ToolChainToken"

# 工具链 单点登录
TOOLCHAIN_USER_INFO_URL = (
    "https://apitest.changan.com.cn:30598/changan/user/currentUser"
)

# API生命周期平台的api-code
APIM_APPCODE_KEY = "6707888f4a7d5a288f301b73"

# 未登录用户的清理时间周期（天）
RETENTION_PERIOD_DAYS = 90

# 导出限制时间，单位：秒
EXPORT_LIMIT_TIME = 30000  # 1小时（3600秒）

# 导出限制次数，单位：次数
EXPORT_LIMIT_COUNT = 50  # 每小时最多允许导出 5 次

# 存储SESSION的redis配置
SESSION_TYPE = "redis"
SESSION_REDIS = Redis.from_url(
    f"redis://:{SUPERSET_REDIS_PASSWORD}@{SUPERSET_REDIS_HOST}:{SUPERSET_REDIS_PORT}/{11}"
)

# wecom 连接信息
WECHAT_CORP_ID = "ww6198dde4b1c0bc74"
WECHAT_CORP_SECRET = "qp3l1CHsAzRFTYSr2AL_YE8o8ET6fZGMC1mOVuaH_WA"
WECHAT_AGENT_ID = "1000002"
WECHAT_BASE_URL = "https://qyapi.weixin.qq.com/cgi-bin"
WECHAT_ACCESS_TOKEN_KEY = "wechat_access_token"
# SPREAD_SHEET_URL = "https://cabi-inet.changan.com.cn/spreadsheet/"
SPREAD_SHEET_URL = "http://127.0.0.1:5000/spreadsheet/"
WECHAT_AUTHORIZE_URL = "https://open.weixin.qq.com/connect/oauth2/authorize"
WECHAT_PI_CURL = "https://cabi-inet.changan.com.cn"
WECHAT_PI_CURL_PATH = "/static/assets/images/sheet.jpeg"

# 多点登陆参数 为1就是允许多点登陆,其他则为不允许多点登陆
MULTI_LOGIN = 1

# 工具链页面登陆地址
TC_LOGIN_URL = "http://10.64.23.23:8090/#/login?targetUrl="

#
SYSTEM_TYPE_IP = "10.64.23.2:10014"

# cabi操作文档前缀
DOCS_PREFIX = STATIC_ASSETS_PREFIX + "cabi"

# 添加cabi的操作文档蓝图
BLUEPRINTS = [
    Blueprint(
        "docs",
        __name__,
        static_folder=f"docs/dist/{DOCS_PREFIX}/",
        static_url_path=f"/{DOCS_PREFIX}/",
        template_folder=f"docs/dist/{DOCS_PREFIX}/",
    )
]

# 外网prod API生命周期平台的api-code
LOGIN_QRCODE_API_APPCODE_KEY = "67ab13772e6f425363fd25e8"

# 外网prod LOGIN_QRCODE_SERVER_URL 此接口是获取扫描登录后token的用户信息
LOGIN_QRCODE_SERVER = "https://gaia.changan.com.cn/link/apig/out/changan/ichangan/rescenter/rest/resRestApi/v2/getUserByToken"

# 是否使用扫描认证登陆方式
LOGIN_METHODS_CONTAIN_QRCODE = True

# 是否删除数据集表,只针对type_classify 类型为2和4的
DELETE_DATASET_TABLES = True

# spreadsheet华为云储存obs连接信息配置
HUAWEI_SPREAD_ACCESS_KEY_ID = "U08KEHAXHEW1L9DNM52Q"  # AK
HUAWEI_SPREAD_SECRET_ACCESS_KEY = "Z3heQiIKePaqxpmUh3o6HeouuCmh3WESxc2vVvR8"  # SK
HUAWEI_SPREAD_BUCKET_NAME = "obs-yb-mfd-dt-bi-32238-t-001"  # 桶名
HUAWEI_SPREAD_SERVER = "https://obsv3.ca-global-1.camcloud.changan.com"  # endpoint
HUAWEI_SPREAD_IMG_FOLDER_NAME = "cabi_test_spred/bendi"


# spreadsheet华为云储存obs连接信息配置
HUAWEI_SPREAD_ACCESS_KEY_ID = "JDNYUGW0ANW5O3ATP162"  # AK
HUAWEI_SPREAD_SECRET_ACCESS_KEY = "wwNhagg9wdtMi1Cj6Eu9UstlQROgRmX3kwoIYHah"  # SK
HUAWEI_SPREAD_BUCKET_NAME = "yanilo"  # 桶名
HUAWEI_SPREAD_SERVER = "https://obs.cn-north-4.myhuaweicloud.com"  # endpoint
HUAWEI_SPREAD_IMG_FOLDER_NAME = "yanilo_prod"


# 工具链 系统分享验证的URL
TOOLCHAIN_SYS_INFO_URL = (
    "https://apitest.changan.com.cn:30598/changan/devplatform/iic/dataAuth/checkAuth"
)

# 工具链 系统获取站点消息的URL
TOOLCHAIN_SITE_MESSAGES_URL = (
    "https://apitest.changan.com.cn:30598/changan/notification/info/read/record/page"
)

# 推文文件服务器缓存时间
CACHE_OBS_FILE = 7

# 工具链 日志推送的URL
TOOLCHAIN_PUSH_LOG_URL = (
    "https://apitest.changan.com.cn:30598/changan/devplatform/gaia/pushLog"
)

# 差异化推送
DIFFERENTIAL_PUSH = True

# 访问记录URL
PUSH_RECORDS_URL = STATIC_ASSETS_PREFIX + "/spreadsheet/push_records/"

# 开启电子表格相关功能
ENABLED_SPREAD_SHEET = True

YUNTU_APP_ID = "20250226000000000000000000000001"
YUNTU_APP_KEY = "YT202502261007000005"
YUNTU_APP_SECRET = "066666425f144c27988294f76de55e88"
YUNTU_HOST = "https://yuntudev.aiyimaiche.com"

QUDAO_APP_ID = "376a2dcfb99f4506a0a2cc6e66dbe129"
QUDAO_APP_CODE = "67d401b25166c541505a51d2"
QUDAO_PUBLIC_KEY = "/qudao_public.pem"
QUDAO_HOST = "https://apitest.changan.com.cn:30598/changan"

# 新发布功能
PUBLISH_COPY_FLAG = True

# 是否启用obs存
ENABLE_OBS_THUMBNAIL_STORAGE = False

# 永久链接是否启用鉴权
PERMANENT_LINK_AUTH_ENABLED = True

PERMANENT_SESSION_LIFETIME = timedelta(hours=8)

Cloudflare Workers ACG 资源导航系统
基于 Cloudflare Workers + D1 数据库构建的轻量级、高性能 ACG 资源导航站，开箱即用，零服务器成本，完美适配桌面端与移动端。
✨ 功能特性
🎨 精美主题：樱花粉渐变 UI，毛玻璃特效，现代化卡片式布局，自带 ACG 专属图标
📂 全分类覆盖：内置 15+ ACG 专属分类，涵盖动漫、漫画、GAL、小说、资源下载等全场景
🔍 全站模糊搜索：支持按站点名称、分类、备注快速检索，秒级响应
🔒 安全后台管理：Basic Auth 身份认证，支持资源的增删改查全操作
🖼️ 自定义封面：支持为每个站点设置专属封面图，提升视觉效果
🌐 访问状态标识：清晰标注站点是否需要代理（🔒 需代理 / 🌐 直连）
📱 全端响应式：完美适配电脑、平板、手机等所有设备
⚡ 全球极速访问：基于 Cloudflare 边缘网络，全球低延迟加载
🧩 零运维成本：无需服务器、无需域名，免费 Cloudflare 账号即可部署
📋 前置要求
一个 Cloudflare 账号（免费版即可使用全部功能）
🚀 详细部署教程
1. 创建 D1 数据库
登录 Cloudflare 控制台，进入左侧菜单 Workers 和 Pages → D1 数据库
点击右上角 创建数据库，自定义数据库名称（例如 acg_nav_db），点击创建
进入刚创建的数据库，切换到 控制台 标签页
复制下方 SQL 语句，粘贴到输入框，点击执行，初始化数据表：
sql
CREATE TABLE IF NOT EXISTS acg_websites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL,
  site_name TEXT NOT NULL,
  domain TEXT NOT NULL,
  remark TEXT,
  need_proxy INTEGER DEFAULT 0,
  img_url TEXT
);
执行成功后，会创建核心数据表，后续站点数据都存在这里。
2. 部署 Worker 服务
回到 Cloudflare 控制台，进入 Workers 和 Pages，点击右上角 创建应用程序
选择 创建 Worker，自定义 Worker 名称（例如 acg-resource-nav），点击部署
部署成功后，点击 编辑代码，进入代码编辑页
打开本仓库的 workes.js 文件，复制全部代码，粘贴到编辑框中，覆盖原有默认代码
点击右上角 保存并部署，等待部署完成。
3. 绑定 D1 数据库到 Worker
进入你刚部署的 Worker 页面，切换到顶部 设置 标签页
左侧菜单选择 绑定，点击 添加绑定
按以下内容填写：
绑定类型：选择 D1 数据库
变量名：必须填写 DB（和代码完全对应，大小写敏感）
D1 数据库：选择你第一步创建的数据库
点击保存，完成绑定。
4. 配置环境变量
还是在 Worker 的 设置 页面，左侧菜单选择 变量和机密
点击 添加变量，按下方表格填写必填项，按需填写选填项：
表格
变量名	示例值	是否必填	说明
ADMIN_USER	your_admin_name	✅ 必须	后台管理登录用户名
ADMIN_PASS	StrongPass123!@#	✅ 必须	后台管理登录密码（建议使用字母 + 数字 + 符号的强密码）
SITE_NAME	次元资源库	⭕ 可选	网站首页标题，不填默认显示「ACG 资源导航」
ADMIN_PATH	/manage	⭕ 可选	后台管理访问路径，不填默认是 /admin
⚠️ 安全提醒：ADMIN_USER 和 ADMIN_PASS 严禁使用弱口令（如 admin/123456），避免被暴力破解。
所有变量填写完成后，必须重新部署一次代码（进入编辑代码页，直接点击保存并部署），让配置生效。
🎯 使用说明
前台访问
直接访问你的 Worker 域名，即可看到 ACG 资源导航首页。
后台管理
访问地址：https://你的Worker域名/你的ADMIN_PATH（默认是 /admin）
输入你配置的 ADMIN_USER 和 ADMIN_PASS 即可登录
后台支持：添加站点、编辑站点信息、删除站点、修改分类等全功能操作
内置分类说明
代码内置了以下分类，添加站点时分类名称必须和下方完全一致，才会显示对应专属图标：
动漫在线
资源下载
字幕组库
漫画在线
漫画生肉
漫画下载
日轻小说
GAL 游戏
GAL 必备
ACG 音乐
ACG 资源
次元资讯
次元衍生
次元社区
次元美图
📊 数据库表结构
表格
字段名	数据类型	说明
id	INTEGER	主键，自增 ID，无需手动填写
category	TEXT	站点所属分类，必填
site_name	TEXT	站点名称，必填
domain	TEXT	站点网址，必填
remark	TEXT	站点备注 / 描述，可选
need_proxy	INTEGER	是否需要代理：0 = 直连，1 = 需代理，默认 0
img_url	TEXT	站点封面图片链接，可选
❓ 常见问题
1. 访问后台提示 401 未授权？
检查你的 ADMIN_USER 和 ADMIN_PASS 环境变量是否正确填写，并且已经重新部署了代码。
2. 添加的分类不显示图标？
确认分类名称和「内置分类说明」里的名称完全一致，包括文字、标点，大小写敏感。
3. 页面提示数据库错误？
检查 D1 数据库是否正确绑定到 Worker，变量名必须是 DB，并且已经执行了初始化 SQL 语句。
4. 怎么修改首页背景图？
打开 workes.js 代码，找到开头的 BG_IMAGES 数组，替换里面的图片链接即可，支持多张图片轮播。
📄 许可证
本项目基于 MIT License 开源，可自由使用、修改、分发。
🤝 贡献
欢迎提交 Issue 反馈问题，或提交 Pull Request 优化功能～

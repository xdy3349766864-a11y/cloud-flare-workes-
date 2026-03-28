# Cloudflare Workers ACG 资源导航系统

一个基于 Cloudflare Workers + D1 数据库构建的轻量级、高性能 ACG（动漫/漫画/游戏/小说）资源导航网站。

## ✨ 功能特性

- 🎨 **精美 UI**：樱花粉渐变主题，毛玻璃效果，现代化卡片式布局
- 📂 **分类导航**：内置 14+ 个 ACG 分类（动漫在线、资源下载、漫画、GAL、小说等），配有专属 SVG 图标
- 🔍 **全站搜索**：支持按站点名称、分类、备注进行模糊搜索
- 🔒 **后台管理**：Basic Auth 认证，支持资源的增删改查
- 🖼️ **封面支持**：支持为每个资源设置自定义封面图片
- 🌐 **状态标识**：清晰标注站点是否需要代理（🔒 需代理 / 🌐 直连）
- 📱 **响应式设计**：完美适配桌面端和移动端
- ⚡ **极速部署**：完全基于 Cloudflare 生态，零服务器成本

## 📦 部署教程

### 1. 准备工作
你需要一个 Cloudflare 账号（免费版即可）。

### 2. 创建 D1 数据库
1. 登录 Cloudflare 控制台，进入 **Workers 和 Pages** -> **D1 数据库**
2. 点击 **创建数据库**，输入名称（例如 `acg_nav_db`），点击创建
3. 进入刚创建的数据库，点击 **控制台** (Console)
4. 执行以下 SQL 语句创建数据表：

```sql
CREATE TABLE IF NOT EXISTS acg_websites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL,
  site_name TEXT NOT NULL,
  domain TEXT NOT NULL,
  remark TEXT,
  need_proxy INTEGER DEFAULT 0,
  img_url TEXT
);
3. 部署 Worker
进入 Workers 和 Pages，点击 创建应用程序 -> 创建 Worker
输入 Worker 名称（例如 acg-nav），点击 部署
部署成功后，点击 编辑代码，将本项目 workes.js 的代码完整复制粘贴进去，点击 保存并部署
4. 配置绑定与环境变量
进入你的 Worker -> 设置：
4.1 绑定 D1 数据库
点击 绑定 (Bindings) -> 添加绑定：
绑定类型：选择 D1 数据库
变量名：DB (必须是这个名字，代码里用的是 env.DB)
D1 数据库：选择你刚才创建的数据库
点击 保存
4.2 配置环境变量
点击 变量和机密 (Variables and Secrets) -> 添加变量：
表格
变量名	示例值	是否必填	说明
SITE_NAME	次元资源库	否	网站标题，不填默认为 "名称"
ADMIN_PATH	/admin	否	后台管理路径，不填默认为 /admin
ADMIN_USER	liuhua	是	后台登录用户名
ADMIN_PASS	StrongPass123!	是	后台登录密码
⚠️ 安全提醒：
ADMIN_USER 和 ADMIN_PASS 必须修改，不要使用默认值！
建议使用强密码（字母 + 数字 + 符号）。
5. （可选）修改背景图片
在代码的第 7 行左右，找到 BG_IMAGES 数组，填入你喜欢的背景图片 URL：
javascript
运行
const BG_IMAGES = [
  'https://example.com/bg1.jpg',
  'https://example.com/bg2.jpg'
];
🎯 使用说明
1. 访问前台
直接访问你的 Worker 域名即可看到资源导航首页。
2. 登录后台
访问 https://你的域名/admin (或你自定义的 ADMIN_PATH)
输入你配置的 ADMIN_USER 和 ADMIN_PASS 登录
在后台可以添加、编辑、删除资源
3. 添加资源时的分类说明
代码内置了以下分类（添加时分类名称必须完全一致才会显示对应图标）：
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
📄 数据库表结构
表格
字段名	类型	说明
id	INTEGER	主键，自增
category	TEXT	分类名称
site_name	TEXT	站点名称
domain	TEXT	站点网址
remark	TEXT	备注描述
need_proxy	INTEGER	是否需要代理 (0 = 否，1 = 是)
img_url	TEXT	封面图片链接
🤝 贡献
欢迎提交 Issue 和 Pull Request！
📄 许可证
MIT License

/************************** 1. 公共配置区 **************************/
const getConfig = (env) => ({
  SITE_NAME: env.SITE_NAME || '名称',
  ADMIN_PATH: env.ADMIN_PATH || '/admin',//变量配置管理员地址
  ADMIN_USER: env.ADMIN_USER || 'admin',//变量配置管理员用户名
  ADMIN_PASS: env.ADMIN_PASS || 'admin123',//变量配置管理员密码
  DB: env.DB || env.nav_db
});

// 背景图片
const BG_IMAGES = [
  //输入你的背景图片url
];

//图标可以自行更改
function getCategoryIcon(categoryName) {
  if (!categoryName) return '🌐';
  const iconMap = {
    // 📺 动漫在线 → 线性电视图标
    '动漫在线': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line></svg>',
    // 📥 资源下载 → 线性云下载图标
    '资源下载': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
    // 📝 字幕组库 → 线性字幕框图标
    '字幕组库': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="9" y1="14" x2="13" y2="14"></line></svg>',
    // 📖 漫画在线 → 线性漫画人物图标
    '漫画在线': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M2 21c0-4 4-6 10-6s10 2 10 6"></path><path d="M8 11h.01"></path><path d="M16 11h.01"></path></svg>',
    // 📄 漫画生肉 → 线性减号图标
    '漫画生肉': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>',
    // 📦 漫画下载 → 线性云下载（漫画版）图标
    '漫画下载': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.05.85-3.99 2.05C12.37 5.23 11.71 5 11 5a5.5 5.5 0 0 0-5.5 5.5c0 2.29 1.51 4.04 3 5.5"></path><polyline points="12 12 12 19 8 15"></polyline></svg>',
    // 📚 日轻小说 → 线性书本图标
    '日轻小说': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
    // 🎮 GAL游戏 → 线性游戏手柄图标
    'GAL游戏': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12"></path><path d="M6 16h12"></path><path d="M10 12h4"></path><path d="M12 8v8"></path></svg>',
    // 🔧 GAL必备 → 线性标签图标
    'GAL必备': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>',
    // 🎵 ACG音乐 → 线性音乐音符图标
    'ACG音乐': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
    // 📦 ACG资源 → 线性星星图标
    'ACG资源': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    // 📢 次元资讯 → 线性灯泡图标
    '次元资讯': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v3"></path><path d="M5.64 5.64l2.12 2.12"></path><path d="M1 12h3"></path><path d="M5.64 18.36l2.12-2.12"></path><path d="M12 20v3"></path><path d="M18.36 18.36l-2.12-2.12"></path><path d="M20 12h3"></path><path d="M18.36 5.64l-2.12 2.12"></path><path d="M8.5 8.5a5 5 0 0 1 7 7"></path></svg>',
    // ✨ 次元衍生 → 线性衍生箭头图标
    '次元衍生': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16V4M7 4L3 8M7 4L11 8"></path><path d="M17 8v12M17 12l4-4M17 12l-4-4"></path></svg>',
    // 👥 次元社区 → 线性右箭头图标
    '次元社区': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="10 8 14 12 10 16"></polyline></svg>',
    // 🖼️ 次元美图 → 线性眼睛图标
    '次元美图': '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>'
  };
  return iconMap[categoryName] || '🌐';
}
/************************** 2. 数据库操作区 **************************///需要绑定数据库
const DB = {
  async fetchAll(env, q = '', cid = '') {
    const db = getConfig(env).DB;
    if (!db) return { code: 1, msg: '数据库未绑定', categories: [], resources: [] };
    try {
      const catRes = await db.prepare(`SELECT DISTINCT category FROM acg_websites WHERE category IS NOT NULL AND category != '' ORDER BY category`).all();
      const categories = catRes.results.map((item, idx) => ({
        id: idx + 1,
        name: item.category,
        icon: getCategoryIcon(item.category)
      }));
      
      let sql = 'SELECT id, site_name, domain, category, remark, need_proxy, img_url FROM acg_websites WHERE 1=1';
      let params = [];
      if (q && q.trim()) {
        const key = `%${q.trim()}%`;
        sql += ' AND (site_name LIKE ? OR category LIKE ? OR remark LIKE ?)';
        params.push(key, key, key);
      }
      sql += ' ORDER BY category, site_name';
      
      const resRes = await db.prepare(sql).bind(...params).all();
      const resources = resRes.results.map(item => ({
        id: item.id,
        name: item.site_name,
        url: item.domain || '#',
        category: item.category,
        remark: item.remark || '无备注',
        icon: item.need_proxy === 1 ? '🔒' : '★',
        need_proxy: item.need_proxy || 0,
        img_url: item.img_url || ''
      }));
      
      return { code: 0, categories, resources };
    } catch (e) {
      return { code: 1, msg: '数据读取失败' + e.message, categories: [], resources: [] };
    }
  },
  
  async add(env, data) {
    const db = getConfig(env).DB;
    if (!db) return { code: 1, msg: '数据库未绑定' };
    try {
      await db.prepare(`
        INSERT INTO acg_websites (category, site_name, domain, remark, need_proxy, img_url)
        VALUES (?, ?, ?, ?, ?, ?)
      `).bind(
        data.category,
        data.site_name,
        data.domain || '',
        data.remark || '',
        Number(data.need_proxy) || 0,
        data.img_url || ''
      ).run();
      return { code: 0, msg: '添加成功' };
    } catch (e) {
      return { code: 1, msg: '添加失败：' + e.message };
    }
  },
  
  async del(env, id) {
    const db = getConfig(env).DB;
    if (!db) return { code: 1, msg: '数据库未绑定' };
    try {
      await db.prepare(`DELETE FROM acg_websites WHERE id = ?`).bind(id).run();
      return { code: 0, msg: '删除成功' };
    } catch (e) {
      return { code: 1, msg: '删除失败：' + e.message };
    }
  },
  
  async edit(env, id, data) {
    const db = getConfig(env).DB;
    if (!db) return { code: 1, msg: '数据库未绑定' };
    try {
      await db.prepare(`
        UPDATE acg_websites 
        SET category = ?, site_name = ?, domain = ?, remark = ?, need_proxy = ?, img_url = ?
        WHERE id = ?
      `).bind(
        data.category,
        data.site_name,
        data.domain || '',
        data.remark || '',
        Number(data.need_proxy) || 0,
        data.img_url || '',
        id
      ).run();
      return { code: 0, msg: '编辑成功' };
    } catch (e) {
      return { code: 1, msg: '编辑失败：' + e.message };
    }
  },
  
  async getOne(env, id) {
    const db = getConfig(env).DB;
    if (!db) return { code: 1, msg: '数据库未绑定' };
    try {
      const res = await db.prepare(`SELECT * FROM acg_websites WHERE id = ?`).bind(id).all();
      if (res.results.length === 0) return { code: 1, msg: '资源不存在' };
      return { code: 0, data: res.results[0] };
    } catch (e) {
      return { code: 1, msg: '查询失败：' + e.message };
    }
  }
};

/************************** 3. 前台页面渲染区 **************************///首页
function renderFrontend(config, data, currentCid, currentQ) {
  const { categories, resources } = data;
  const randomBG = BG_IMAGES[Math.floor(Math.random() * BG_IMAGES.length)];
  
  let sidebarHTML = '';
  categories.forEach((cat, index) => {
    const navId = `nav-${index + 1}`;
    const targetId = `category-${index + 1}`;
    sidebarHTML += `
      <div class=\"nav-item\" id=\"${navId}\" data-target=\"${targetId}\">
        <span class=\"nav-icon-wrap\">${cat.icon}</span>
        <span class=\"nav-text\">${cat.name}</span>
        <div class=\"active-indicator\"></div>
      </div>
    `;
  });
  
  let resourcesHTML = '';
  if (resources.length > 0) {
    const groupedResources = {};
    resources.forEach(item => {
      if (!groupedResources[item.category]) {
        groupedResources[item.category] = [];
      }
      groupedResources[item.category].push(item);
    });
    
    categories.forEach((cat, index) => {
      const targetId = `category-${index + 1}`;
      const catResources = groupedResources[cat.name] || [];
      
      if (catResources.length > 0) {
        resourcesHTML += `
          <div id=\"${targetId}\" class=\"category-title\">
            <span class=\"category-icon\">${getCategoryIcon(cat.name)}</span>
            <span class=\"category-name\">${cat.name}</span>
            <span class=\"category-count\">${catResources.length}</span>
          </div>
        `;
        resourcesHTML += '<div class=\"resources-grid\">';
        catResources.forEach(item => {
          let cardMedia = '';
          if (item.img_url && item.img_url.trim() !== '') {
            cardMedia = `
              <div class=\"card-avatar\">
                <img src=\"${item.img_url.trim()}\" alt=\"${item.name}\" loading=\"lazy\" onerror=\"this.parentElement.innerHTML='<div class=card-icon>${item.icon}</div>'\">
              </div>
            `;
          } else {
            cardMedia = `<div class=\"card-avatar\"><div class=\"card-icon\">${item.icon}</div></div>`;
          }
          
          resourcesHTML += `
            <a href=\"${item.url}\" target=\"_blank\" class=\"resource-card\">
              ${cardMedia}
              <div class=\"card-content\">
                <h3 class=\"card-title\">${item.name}</h3>
                <p class=\"card-remark\">${item.remark || '暂无描述'}</p>
                <div class=\"card-meta\">
                  <span class=\"meta-item\">${item.need_proxy ? '🔒 需代理' : '🌐 直连'}</span>
                </div>
              </div>
              <div class=\"card-arrow\">→</div>
            </a>
          `;
        });
        resourcesHTML += '</div>';
      }
    });
  } else {
    resourcesHTML = `
      <div class=\"empty-state\">
        <div class=\"empty-icon\">📭</div>
        <div class=\"empty-text\">暂无相关资源</div>
        <div class=\"empty-subtext\">试试搜索其他关键词或查看其他分类</div>
      </div>
    `;
  }

  return `
<!DOCTYPE html>
<html lang=\"zh-CN\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>${config.SITE_NAME}</title>
  //网站头部ico自定义
  <link rel=\"icon\" href=\"">
  <style>
    /* 全局变量：樱花粉主题*/
    :root {
      --primary-color: #e879f9;
      --primary-light: #f0abfc;
      --primary-gradient: linear-gradient(135deg, #f472b6 0%, #c084fc 100%);
      --bg-glass: rgba(255, 255, 255, 0.92);
      --bg-glass-hover: rgba(255, 255, 255, 0.98);
      --bg-dark-glass: rgba(244, 114, 182, 0.08);
      --text-main: #1f2937;
      --text-sub: #6b7280;
      --text-light: #9ca3af;
      --border-light: rgba(244, 114, 182, 0.2);
      --sidebar-width: 280px;
      --radius-xl: 16px;
      --radius-lg: 12px;
      --radius-md: 8px;
      --radius-sm: 6px;
      --radius-xs: 4px;
      --shadow-sm: 0 2px 8px rgba(244, 114, 182, 0.1);
      --shadow-md: 0 4px 16px rgba(244, 114, 182, 0.12);
      --shadow-lg: 0 8px 24px rgba(244, 114, 182, 0.15);
      --transition-fast: all 0.2s ease;
      --transition-slow: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* 基础重置 */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      font-family: \"Inter\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif;
      background: url('${randomBG}') no-repeat center center fixed;
      background-size: cover;
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      overflow: hidden;
      line-height: 1.5;
    }
    /* 透明背景（移除毛玻璃） */
    body::before {
      content: '';
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: transparent;
      z-index: -1;
    }
    a { text-decoration: none; color: inherit; }
    button, input { font-family: inherit; }

    /* 加载动画 */
    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: opacity 0.6s ease-out;
      gap: 30px;
    }
    /* 关闭按钮样式 */
    .loader-close-btn {
      padding: 12px 30px;
      border-radius: 50px;
      background: var(--primary-gradient);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: none;
      color: white;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition-fast);
      z-index: 10000;
      box-shadow: 0 4px 15px rgba(244, 114, 182, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .loader-close-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(244, 114, 182, 0.4);
      background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
    }
    .loader-close-btn:active {
      transform: translateY(-1px);
    }
    .loader-close-btn::before {
      content: '✕';
      font-size: 14px;
    }
    .loader-image {
      width: 180px;
      height: auto;
      max-height: 60vh;
      object-fit: contain;
      animation: rotate 4s linear infinite, pulse 2s ease-in-out infinite alternate;
      filter: drop-shadow(0 8px 20px rgba(0,0,0,0.3));
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulse {
      from { transform: rotate(0deg) scale(1); }
      to { transform: rotate(0deg) scale(1.05); }
    }
    .loader-hide {
      opacity: 0;
      pointer-events: none;
    }

    /* 侧边栏 */
    .sidebar {
      width: var(--sidebar-width);
      height: 100vh;
      /*50%白色透明背景 */
      background: rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      flex-direction: column;
      padding: 20px 16px;
      position: fixed;
      left: 0; top: 0;
      z-index: 100;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--primary-light) transparent;
    }
    /* 移除侧边栏伪元素背景 */
    .sidebar::before {
      display: none;
    }
    .sidebar::-webkit-scrollbar {
      width: 4px;
    }
    .sidebar::-webkit-scrollbar-thumb {
      background: var(--primary-light);
      border-radius: var(--radius-xs);
    }

    /* Log */
    .logo {
      font-size: 22px;
      font-weight: 800;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      color: #1f2937; /* 深色文字保证可读性 */
      margin-bottom: 24px;
      text-align: center;
      padding: 12px 0;
      border-radius: var(--radius-lg);
      background-color: transparent;
    }

    /* 导航项 */
    .nav-item {
      display: flex;
      align-items: center;
      padding: 12px 14px;
      border-radius: var(--radius-md);
      margin-bottom: 6px;
      cursor: pointer;
      transition: var(--transition-fast);
      user-select: none;
      /* 统一导航项样式，移除高亮差异 */
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.8);
      color: #1f2937; /* 深色文字 */
    }
    /* 移除h高亮效果 */
    .nav-item:hover {
      background: rgba(255, 255, 255, 0.8);
      transform: none;
    }
    .nav-item.active {
      /* 激活状态和普通状态样式一致 */
      background: rgba(255, 255, 255, 0.7);
      color: #1f2937;
      box-shadow: none;
      border-color: rgba(255, 255, 255, 0.8);
    }
    .nav-icon-wrap {
      margin-right: 12px;
      font-size: 18px;
      color: #1f2937; /* 深色图标 */
    }
    .nav-text {
      font-size: 15px;
      font-weight: 500;
      color: #1f2937; /* 深色文字 */
    }
    .active-indicator {
      display: none;
    }

    /* 主内容区 */
    .main-content {
      flex: 1;
      margin-left: var(--sidebar-width);
      padding: 20px 24px;
      height: 100vh;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--primary-light) transparent;
    }
    .main-content::-webkit-scrollbar {
      width: 6px;
    }
    .main-content::-webkit-scrollbar-thumb {
      background: var(--primary-light);
      border-radius: var(--radius-xs);
    }

    /* 搜索框 */
    .search-box {
      max-width: 520px;
      margin: 0 auto 24px;
      display: flex;
      gap: 8px;
    }
    .search-box input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid var(--border-light);
      border-radius: var(--radius-lg);
      background: var(--bg-glass);
      box-shadow: var(--shadow-sm);
      outline: none;
      font-size: 14px;
    }
    .search-box input:focus {
      box-shadow: 0 0 0 2px var(--primary-light), var(--shadow-md);
      border-color: var(--primary-light);
    }
    .search-box input::placeholder {
      color: var(--text-light);
    }
    .search-box button {
      padding: 0 20px;
      border: none;
      border-radius: var(--radius-lg);
      background: var(--primary-gradient);
      color: white;
      cursor: pointer;
      transition: var(--transition-fast);
      font-size: 16px;
      font-weight: 600;
      box-shadow: var(--shadow-sm);
    }
    .search-box button:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }
    .search-box button:active {
      transform: translateY(0);
    }

    /* 分类标题 */
    .category-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--text-main);
      margin: 24px 0 16px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border-light);
      scroll-margin-top: 30px;
    }
    .category-icon {
      font-size: 22px;
    }
    .category-count {
      font-size: 12px;
      font-weight: 500;
      padding: 2px 6px;
      background: var(--bg-dark-glass);
      border-radius: var(--radius-sm);
      color: var(--primary-color);
      margin-left: 8px;
    }

    /* 资源网格 */
    .resources-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 12px;
      margin-bottom: 16px;
    }

    /* 卡片样式 */
    .resource-card {
      background: var(--bg-glass);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-md);
      padding: 12px;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-slow);
      display: flex;
      align-items: center;
      gap: 12px;
      overflow: hidden;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      position: relative;
    }
    .resource-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(255, 255, 255, 0.1);
      opacity: 0;
      transition: var(--transition-fast);
      z-index: 0;
    }
    .resource-card:hover {
      background: var(--bg-glass-hover);
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--primary-light);
    }
    .resource-card:hover::before {
      opacity: 1;
    }

    /* 卡片头像 */
    .card-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(244, 114, 182, 0.1);
      z-index: 1;
    }
    .card-icon {
      font-size: 20px;
      color: var(--primary-color);
      z-index: 3;
    }
    .card-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
      z-index: 1;
    }
    .resource-card:hover .card-avatar img {
      transform: scale(1.15);
    }

    /* 卡片内容 */
    .card-content {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;
      z-index: 1;
    }
    .card-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-main);
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: var(--transition-fast);
    }
    .resource-card:hover .card-title {
      color: var(--primary-color);
    }
    .card-remark {
      font-size: 11px;
      color: var(--text-sub);
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .card-meta {
      margin-top: 2px;
    }
    .meta-item {
      font-size: 10px;
      padding: 1px 6px;
      background: var(--bg-dark-glass);
      border-radius: var(--radius-xs);
      color: var(--primary-color);
    }

    /* 卡片箭头 */
    .card-arrow {
      display: none;
    }

    /* 空状态 */
    .empty-state {
      text-align: center;
      padding: 80px 40px;
      color: var(--text-sub);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    .empty-icon {
      font-size: 60px;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      opacity: 0.8;
    }
    .empty-text {
      font-size: 18px;
      font-weight: 500;
      color: var(--text-main);
    }
    .empty-subtext {
      font-size: 14px;
      color: var(--text-sub);
      max-width: 400px;
    }

    /* 响应式适配（移动端） */
    @media (max-width: 768px) {
      :root {
        --sidebar-width: 70px;
      }
      .nav-text {
        display: none;
      }
      .nav-item {
        justify-content: center;
        padding: 14px;
      }
      .nav-icon-wrap {
        margin-right: 0;
        font-size: 20px;
      }
      .main-content {
        padding: 16px 12px;
      }
      .resources-grid {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 8px;
      }
      .category-title {
        font-size: 16px;
        margin: 20px 0 12px;
      }
      /* 移动端按钮适配 */
      .loader-close-btn {
        padding: 10px 24px;
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class=\"loader-overlay\" id=\"loader\">
  //加载图
    <img src=\"" alt=\"加载中\">
    <!-- 按钮放到图片下方，文字改为点此关闭 -->
    <button class=\"loader-close-btn\" id=\"loaderCloseBtn\">点此关闭</button>
  </div>

  <div class=\"sidebar\">
    <div class=\"logo\">${config.SITE_NAME}</div>
    <div class=\"nav-list\">${sidebarHTML}</div>
  </div>
  
  <div class=\"main-content\">
    <form class=\"search-box\" method=\"get\" id=\"search-form\">
      <input type=\"text\" name=\"q\" placeholder=\"搜索资源/分类/备注...\" value=\"${currentQ || ''}\">
      <input type=\"hidden\" name=\"cid\" value=\"${currentCid || 'all'}\">
      <button type=\"submit\">🔍</button>
    </form>
    ${resourcesHTML}
  </div>

  <script>
    const loader = document.getElementById('loader');
    const loaderCloseBtn = document.getElementById('loaderCloseBtn');
    
    // 点击关闭按钮立即隐藏加载层
    loaderCloseBtn.addEventListener('click', function() {
      loader.classList.add('loader-hide');
      setTimeout(() => loader.remove(), 500);
    });

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('loader-hide');
        setTimeout(() => loader.remove(), 500);
      }, 1500);
    });

    document.addEventListener('DOMContentLoaded', function() {
      // 搜索状态管理
      const isSearch = sessionStorage.getItem('isSearch');
      const searchForm = document.getElementById('search-form');
      const searchInput = document.querySelector('.search-box input[name=\"q\"]');
      const navItems = document.querySelectorAll('.nav-item');
      const mainContent = document.querySelector('.main-content');
      let lastActiveNav = null; // 记录上一个激活的导航项

      // 重置搜索状态
      if (!isSearch) {
        if (window.location.search) {
          window.history.replaceState({}, document.title, window.location.pathname);
          if (searchInput) searchInput.value = '';
        }
        mainContent.scrollTop = 0;
      } else {
        sessionStorage.removeItem('isSearch');
      }

      // 搜索提交
      searchForm.addEventListener('submit', function() {
        sessionStorage.setItem('isSearch', '1');
      });
      
      // 导航点击逻辑（保留功能，仅移除视觉高亮）
      navItems.forEach(function(item) {
        item.addEventListener('click', function() {
          navItems.forEach(function(nav) {
            nav.classList.remove('active');
          });
          this.classList.add('active');
          lastActiveNav = this;
          const targetId = this.dataset.target;
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            mainContent.scrollTop = targetElement.offsetTop - 80;
          }
        });
      });
      
      // 滚动高亮导航（防抖）
      function highlightNavOnScroll() {
        let currentActiveNav = null;
        const scrollTop = mainContent.scrollTop;
        const categoryTitles = document.querySelectorAll('.category-title');
        
        for (let i = categoryTitles.length - 1; i >= 0; i--) {
          const title = categoryTitles[i];
          const titleTop = title.offsetTop - 80;
          if (scrollTop >= titleTop) {
            currentActiveNav = navItems[i];
            break;
          }
        }

        if (currentActiveNav && currentActiveNav !== lastActiveNav) {
          navItems.forEach(function(nav) {
            nav.classList.remove('active');
          });
          currentActiveNav.classList.add('active');
          lastActiveNav = currentActiveNav;
        } else if (!currentActiveNav && navItems.length > 0 && lastActiveNav !== navItems[0]) {
          navItems.forEach(function(nav) {
            nav.classList.remove('active');
          });
          navItems[0].classList.add('active');
          lastActiveNav = navItems[0];
        }
      }
      
      let scrollTimer;
      mainContent.addEventListener('scroll', function() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(highlightNavOnScroll, 80);
      });
      
      // 默认激活第一个
      if (navItems.length > 0) {
        navItems[0].classList.add('active');
        lastActiveNav = navItems[0];
      }
    });
  </script>
</body>
</html>
  `;
}
/************************** 4. 后台页面渲染区 **************************///添加资源和图片url使用变量与机密中的用户名密码登陆
function renderAdmin(config, data, currentCid, currentQ, sortBy = 'id', sortOrder = 'asc') {
  const { categories, resources } = data;
  
  //       --- 排序逻辑  ---
  let sortedResources = [...resources];
  sortedResources.sort((a, b) => {
    let aVal = a[sortBy] || '';
    let bVal = b[sortBy] || '';
    if (sortBy === 'id' || sortBy === 'need_proxy') {
      aVal = Number(aVal);
      bVal = Number(bVal);
    } else {
      aVal = String(aVal).toLowerCase();
      bVal = String(bVal).toLowerCase();
    }
    return sortOrder === 'asc' ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
  });
  
  // --- 分类下拉框生成  ---
  let categorySelectHTML = '<option value="all">全部分类</option>';
  categories.forEach(cat => {
    const isSelected = currentCid == cat.id;
    categorySelectHTML += `
      <option value="${cat.id}" ${isSelected ? 'selected' : ''}>
        ${cat.icon} ${cat.name}
      </option>
    `;
  });
  
  // --- 表格内容生成  ---
  let resourcesTableHTML = '';
  if (sortedResources.length > 0) {
    sortedResources.forEach(item => {
      resourcesTableHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${getCategoryIcon(item.category)} ${item.category}</td>
          <td>${item.name}</td>
          <td><a href="${item.url}" target="_blank">${item.url}</a></td>
          <td>${item.remark}</td>
          <td>${item.need_proxy ? '是' : '否'}</td>
          <td>${item.img_url ? `<a href="${item.img_url}" target="_blank">查看</a>` : '无'}</td>
          <td>
            <div class="action-btns">
              <!-- 按钮 HTML  -->
              <button class="edit-btn" data-id="${item.id}" 
                      data-category="${encodeURIComponent(item.category)}"
                      data-site_name="${encodeURIComponent(item.name)}"
                      data-domain="${encodeURIComponent(item.url)}"
                      data-remark="${encodeURIComponent(item.remark || '')}"
                      data-need_proxy="${item.need_proxy}"
                      data-img_url="${encodeURIComponent(item.img_url || '')}">编辑</button>
              <button class="del-btn" data-id="${item.id}">删除</button>
            </div>
          </td>
        </tr>
      `;
    });
  } else {
    resourcesTableHTML = '<tr><td colspan="8" style="text-align:center;">暂无数据</td></tr>';
  }

  let addCategorySelectHTML = '';
  categories.forEach(cat => {
    addCategorySelectHTML += `<option value="${cat.name}">${cat.icon} ${cat.name}</option>`;
  });

  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.SITE_NAME} - 后台管理</title>
  <link rel="icon" href="">
  <style>
    /* --- 全局变量与重置 --- */
    :root {
      --primary-color: #3b82f6;
      --primary-hover: #2563eb;
      --primary-light: #eff6ff;
      --success-color: #10b981;
      --success-hover: #059669;
      --danger-color: #ef4444;
      --danger-hover: #dc2626;
      --bg-main: #f1f5f9;
      --bg-card: #ffffff;
      --text-main: #1e293b;
      --text-secondary: #64748b;
      --border-color: #e2e8f0;
      --radius-lg: 16px;
      --radius-md: 10px;
      --radius-sm: 6px;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
      background: var(--bg-main);
      color: var(--text-main);
      line-height: 1.6;
      padding: 30px 20px;
    }

    /* --- 加载动画 --- */
    .loader-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      z-index: 9999; display: flex; align-items: center; justify-content: center;
      transition: opacity 0.5s ease-out;
    }
    .loader-image {
      width: 120px; height: 120px; object-fit: contain;
      animation: bounce 1.5s infinite ease-in-out;
      filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .loader-hide { opacity: 0; pointer-events: none; }

    /* --- 布局与卡片 --- */
    .container { max-width: 1400px; margin: 0 auto; }
    .header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 30px; padding: 24px;
      background: var(--bg-card); border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
    }
    .title {
      color: var(--primary-color); font-size: 28px; font-weight: 800;
      letter-spacing: -0.5px;
    }
    .header a {
      color: var(--text-secondary); text-decoration: none;
      padding: 10px 20px; border-radius: var(--radius-md);
      background: var(--bg-main); transition: var(--transition); font-weight: 500;
    }
    .header a:hover { color: var(--primary-color); background: var(--primary-light); }
    .card {
      background: var(--bg-card); padding: 30px; border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md); margin-bottom: 30px;
      border: 1px solid var(--border-color);
    }

    /* --- 表单样式 --- */
    .add-form h3, .edit-form h3 {
      margin-bottom: 24px; color: var(--text-main); font-size: 20px;
      font-weight: 700; display: flex; align-items: center; gap: 10px;
    }
    .add-form h3::before, .edit-form h3::before {
      content: ''; width: 5px; height: 24px;
      background: var(--primary-color); border-radius: 10px;
    }
    .form-row {
      display: flex; gap: 20px; margin-bottom: 20px;
      align-items: center; flex-wrap: wrap;
    }
    .form-row label {
      min-width: 100px; font-weight: 600;
      color: var(--text-main); font-size: 14px;
    }
    .form-row input, .form-row select {
      flex: 1; min-width: 200px; padding: 12px 16px;
      border: 2px solid var(--border-color); border-radius: var(--radius-md);
      outline: none; font-size: 15px; transition: var(--transition);
      background: var(--bg-main);
    }
    .form-row input:focus, .form-row select:focus {
      border-color: var(--primary-color); background: var(--bg-card);
      box-shadow: 0 0 0 3px var(--primary-light);
    }
    .submit-btn {
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-hover) 100%);
      color: white !important; border: none; padding: 12px 30px;
      border-radius: var(--radius-md); cursor: pointer;
      font-weight: 600; font-size: 15px; transition: var(--transition);
      box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);
    }
    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);
    }

    /* --- 筛选栏 --- */
    .filter-bar {
      display: flex; gap: 15px; margin-bottom: 24px;
      align-items: center; flex-wrap: wrap;
    }
    .filter-bar select, .filter-bar input {
      padding: 12px 16px; border: 2px solid var(--border-color);
      border-radius: var(--radius-md); min-width: 200px;
      outline: none; font-size: 15px; transition: var(--transition);
      background: var(--bg-card);
    }
    .filter-bar input:focus, .filter-bar select:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px var(--primary-light);
    }
    .filter-bar button {
      padding: 12px 24px; border: none; border-radius: var(--radius-md);
      background: var(--primary-color); color: white !important;
      cursor: pointer; font-weight: 600; transition: var(--transition);
    }
    .filter-bar button:hover {
      background: var(--primary-hover); transform: translateY(-1px);
    }

    /* --- 表格样式 --- */
    table {
      width: 100%; border-collapse: separate; border-spacing: 0;
      background: var(--bg-card); border-radius: var(--radius-lg);
      overflow: hidden; box-shadow: var(--shadow-md);
      border: 1px solid var(--border-color);
    }
    th, td {
      padding: 16px 20px; text-align: left; vertical-align: middle;
    }
    th {
      background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
      font-weight: 700; color: var(--text-main); cursor: pointer;
      user-select: none; position: relative; font-size: 14px;
      text-transform: uppercase; letter-spacing: 0.5px;
      border-bottom: 2px solid var(--border-color); white-space: nowrap;
    }
    th:hover { background: var(--primary-light); color: var(--primary-color); }
    th .sort-icon {
      margin-left: 8px; font-size: 12px; opacity: 0.4;
      transition: var(--transition);
    }
    th.active .sort-icon { opacity: 1; color: var(--primary-color); }
    tbody tr {
      transition: var(--transition);
      border-bottom: 1px solid var(--border-color);
    }
    tbody tr:last-child { border-bottom: none; }
    tbody tr:hover { background: var(--primary-light); }
    td { color: var(--text-main); font-size: 14px; }
    td a {
      color: var(--primary-color); text-decoration: none;
      font-weight: 500; transition: var(--transition); word-break: break-all;
    }
    td a:hover { text-decoration: underline; }

    /* ========================================= */
    /*         核心修改：操作按钮样式 */
    /* ========================================= */
    
    /* 按钮容器 */
    .action-btns {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-start;
    }

    /* 通用按钮基础样式 - 使用 !important 强制生效 */
    .action-btns button {
      padding: 6px 14px !important;
      border: none !important;
      border-radius: 6px !important;
      cursor: pointer !important;
      font-weight: 600 !important;
      font-size: 12px !important;
      color: white !important; /* 强制文字白色 */
      transition: all 0.2s ease !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
      text-shadow: 0 1px 1px rgba(0,0,0,0.1) !important;
      display: inline-block !important;
      text-align: center !important;
      line-height: 1.2 !important;
    }

    /* 编辑按钮 - 绿色渐变 */
    .action-btns .edit-btn {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
    }
    .action-btns .edit-btn:hover {
      background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3) !important;
    }

    /* 删除按钮 - 红色渐变 */
    .action-btns .del-btn {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
    }
    .action-btns .del-btn:hover {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%) !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 6px rgba(239, 68, 68, 0.3) !important;
    }

    /* ========================================= */
    /*           模态框样式 --- */
    /* ========================================= */
    .modal-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(8px);
      z-index: 1000; display: none; align-items: center;
      justify-content: center; padding: 20px;
      animation: fadeIn 0.2s ease-out;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    .modal-overlay.show { display: flex; }
    .modal-content {
      background: var(--bg-card); padding: 40px;
      border-radius: var(--radius-lg); width: 100%;
      max-width: 700px; max-height: 90vh; overflow-y: auto;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .close-modal {
      background: var(--text-secondary); color: white !important;
      border: none; padding: 10px 20px;
      border-radius: var(--radius-md); cursor: pointer;
      margin-left: 10px; font-weight: 500;
      transition: var(--transition);
    }
    .close-modal:hover { background: var(--text-main); }
  </style>
</head>
<body>
  <div class="loader-overlay" id="loader">
    <img src="https://picui.ogmua.cn/s1/2026/03/13/69b3ed326e593.webp" class="loader-image" alt="加载中">
  </div>

  <div class="container">
    <div class="header">
      <h1 class="title">⚙️ ${config.SITE_NAME} - 后台管理</h1>
      <a href="/" target="_blank">← 返回前台</a>
    </div>
    
    <div class="add-form card">
      <h3>添加新资源</h3>
      <form id="add-form">
        <div class="form-row">
          <label>资源分类：</label>
          <select name="category" required>
            ${addCategorySelectHTML}
          </select>
        </div>
        <div class="form-row">
          <label>站点名称：</label>
          <input type="text" name="site_name" required placeholder="请输入站点名称">
        </div>
        <div class="form-row">
          <label>网址：</label>
          <input type="url" name="domain" required placeholder="请输入完整网址">
        </div>
        <div class="form-row">
          <label>备注：</label>
          <input type="text" name="remark" placeholder="选填，输入备注信息">
        </div>
        <div class="form-row">
          <label>是否代理：</label>
          <select name="need_proxy">
            <option value="0">否</option>
            <option value="1">是</option>
          </select>
        </div>
        <div class="form-row">
          <label>图片 URL：</label>
          <input type="url" name="img_url" placeholder="选填，资源封面图片链接">
        </div>
        <div class="form-row">
          <label></label>
          <button type="submit" class="submit-btn">➕ 添加资源</button>
        </div>
      </form>
    </div>

    <div class="card">
      <div class="filter-bar">
        <select name="cid" id="category-filter">
          ${categorySelectHTML}
        </select>
        <input type="text" name="q" id="search-input" placeholder="🔍 搜索资源名称或网址..." value="${currentQ || ''}">
        <button id="search-btn">搜索</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th data-sort="id" class="${sortBy === 'id' ? 'active' : ''}">
              ID <span class="sort-icon">${sortBy === 'id' ? (sortOrder === 'asc' ? '↑' : '↓') : '⇅'}</span>
            </th>
            <th data-sort="category" class="${sortBy === 'category' ? 'active' : ''}">
              分类 <span class="sort-icon">${sortBy === 'category' ? (sortOrder === 'asc' ? '↑' : '↓') : '⇅'}</span>
            </th>
            <th data-sort="name" class="${sortBy === 'name' ? 'active' : ''}">
              站点名称 <span class="sort-icon">${sortBy === 'name' ? (sortOrder === 'asc' ? '↑' : '↓') : '⇅'}</span>
            </th>
            <th>网址</th>
            <th data-sort="remark" class="${sortBy === 'remark' ? 'active' : ''}">
              备注 <span class="sort-icon">${sortBy === 'remark' ? (sortOrder === 'asc' ? '↑' : '↓') : '⇅'}</span>
            </th>
            <th data-sort="need_proxy" class="${sortBy === 'need_proxy' ? 'active' : ''}">
              是否需要代理 <span class="sort-icon">${sortBy === 'need_proxy' ? (sortOrder === 'asc' ? '↑' : '↓') : '⇅'}</span>
            </th>
            <th>图片链接</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${resourcesTableHTML}
        </tbody>
      </table>
    </div>
  </div>

  <div class="modal-overlay" id="edit-modal">
    <div class="modal-content">
      <h3>编辑资源</h3>
      <form id="edit-form">
        <input type="hidden" name="id" id="edit-id">
        <div class="form-row">
          <label>资源分类：</label>
          <select name="category" id="edit-category" required>
            ${addCategorySelectHTML}
          </select>
        </div>
        <div class="form-row">
          <label>站点名称：</label>
          <input type="text" name="site_name" id="edit-site_name" required placeholder="请输入站点名称">
        </div>
        <div class="form-row">
          <label>网址：</label>
          <input type="url" name="domain" id="edit-domain" required placeholder="请输入完整网址">
        </div>
        <div class="form-row">
          <label>备注：</label>
          <input type="text" name="remark" id="edit-remark" placeholder="选填，输入备注信息">
        </div>
        <div class="form-row">
          <label>是否代理：</label>
          <select name="need_proxy" id="edit-need_proxy">
            <option value="0">否</option>
            <option value="1">是</option>
          </select>
        </div>
        <div class="form-row">
          <label>图片 URL：</label>
          <input type="url" name="img_url" id="edit-img_url" placeholder="选填，资源封面图片链接">
        </div>
        <div class="form-row">
          <label></label>
          <button type="submit" class="submit-btn">💾 保存修改</button>
          <button type="button" class="close-modal">取消</button>
        </div>
      </form>
    </div>
  </div>

  <script>
    // --- JavaScript 逻辑 (核心修改：分类筛选只匹配分类，清空搜索词) ---
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('loader-hide');
        setTimeout(() => loader.remove(), 500);
      }, 1500);
    });
    
    // 分类筛选函数 - 只匹配分类，清空搜索关键词
    function filterByCategory() {
      const cid = document.getElementById('category-filter').value;
      const sortBy = '${sortBy}';
      const sortOrder = '${sortOrder}';
      // 关键：q 设为空字符串，只按分类筛选
      window.location.search = 'cid=' + encodeURIComponent(cid) + '&q=&sortBy=' + sortBy + '&sortOrder=' + sortOrder;
    }
    
    // 分类下拉框改变时，只执行分类筛选
    document.getElementById('category-filter').addEventListener('change', filterByCategory);
    
    // 搜索按钮：保留原有逻辑（分类+关键词组合搜索）
    function performSearch() {
      const cid = document.getElementById('category-filter').value;
      const q = document.getElementById('search-input').value;
      const sortBy = '${sortBy}';
      const sortOrder = '${sortOrder}';
      window.location.search = 'cid=' + encodeURIComponent(cid) + '&q=' + encodeURIComponent(q) + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder;
    }
    document.getElementById('search-btn').addEventListener('click', performSearch);
    
    // 删除按钮逻辑
    document.querySelectorAll('.del-btn').forEach(function(btn) {
      btn.addEventListener('click', async function() {
        const resourceId = this.dataset.id;
        if (confirm('确定要删除这条资源吗？删除后无法恢复！')) {
          try {
            const response = await fetch('${config.ADMIN_PATH}/del', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: resourceId })
            });
            const result = await response.json();
            alert(result.msg);
            if (result.code === 0) window.location.reload();
          } catch (error) {
            alert('删除失败：' + error.message);
          }
        }
      });
    });
    
    // 添加资源逻辑
    document.getElementById('add-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      try {
        const response = await fetch('${config.ADMIN_PATH}/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await response.json();
        alert(result.msg);
        if (result.code === 0) {
          this.reset();
          window.location.reload();
        }
      } catch (error) {
        alert('添加失败：' + error.message);
      }
    });
    
    // 编辑按钮逻辑
    document.querySelectorAll('.edit-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const id = this.dataset.id;
        const category = decodeURIComponent(this.dataset.category);
        const site_name = decodeURIComponent(this.dataset.site_name);
        const domain = decodeURIComponent(this.dataset.domain);
        const remark = decodeURIComponent(this.dataset.remark);
        const need_proxy = this.dataset.need_proxy;
        const img_url = decodeURIComponent(this.dataset.img_url);
        
        document.getElementById('edit-id').value = id;
        document.getElementById('edit-category').value = category;
        document.getElementById('edit-site_name').value = site_name;
        document.getElementById('edit-domain').value = domain;
        document.getElementById('edit-remark').value = remark;
        document.getElementById('edit-need_proxy').value = need_proxy;
        document.getElementById('edit-img_url').value = img_url;
        
        document.getElementById('edit-modal').classList.add('show');
      });
    });
    
    // 关闭模态框
    document.querySelector('.close-modal').addEventListener('click', function() {
      document.getElementById('edit-modal').classList.remove('show');
    });
    
    // 保存编辑逻辑
    document.getElementById('edit-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      const id = data.id;
      delete data.id;
      
      try {
        const response = await fetch('${config.ADMIN_PATH}/edit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: id, data: data })
        });
        const result = await response.json();
        alert(result.msg);
        if (result.code === 0) {
          document.getElementById('edit-modal').classList.remove('show');
          window.location.reload();
        }
      } catch (error) {
        alert('编辑失败：' + error.message);
      }
    });
    
    // 点击模态框外部关闭
    document.getElementById('edit-modal').addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('show');
    });
    
    // 表头排序逻辑
    document.querySelectorAll('th[data-sort]').forEach(function(th) {
      th.addEventListener('click', function() {
        const sortBy = this.dataset.sort;
        let sortOrder = 'asc';
        if (this.classList.contains('active')) {
          sortOrder = '${sortOrder}' === 'asc' ? 'desc' : 'asc';
        }
        const cid = document.getElementById('category-filter').value;
        const q = document.getElementById('search-input').value;
        window.location.search = 'cid=' + encodeURIComponent(cid) + '&q=' + encodeURIComponent(q) + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder;
      });
    });
  </script>
</body>
</html>
  `;
}

/************************** 5. 主入口区 **************************/
export default {
  async fetch(request, env) {
    const config = getConfig(env);
    const url = new URL(request.url);
    const path = url.pathname;
    const cid = url.searchParams.get('cid') || 'all';
    const q = url.searchParams.get('q') || '';
    const sortBy = url.searchParams.get('sortBy') || 'id';
    const sortOrder = url.searchParams.get('sortOrder') || 'asc';
    const data = await DB.fetchAll(env, q, cid);

    if (path.startsWith(config.ADMIN_PATH)) {
      const authHeader = request.headers.get('Authorization');
      const expectedAuth = 'Basic ' + btoa(`${config.ADMIN_USER}:${config.ADMIN_PASS}`);
      
      if (!authHeader || authHeader !== expectedAuth) {
        return new Response('需要管理员认证', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="管理员后台"',
            'Content-Type': 'text/plain'
          }
        });
      }
      
      if (path === `${config.ADMIN_PATH}/add` && request.method === 'POST') {
        const body = await request.json();
        const result = await DB.add(env, body);
        return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
      }
      
      if (path === `${config.ADMIN_PATH}/del` && request.method === 'POST') {
        const body = await request.json();
        const result = await DB.del(env, body.id);
        return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
      }
      
      if (path === `${config.ADMIN_PATH}/edit` && request.method === 'POST') {
        const body = await request.json();
        const result = await DB.edit(env, body.id, body.data);
        return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
      }
      
      return new Response(renderAdmin(config, data, cid, q, sortBy, sortOrder), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
    
    return new Response(renderFrontend(config, data, cid, q), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};

/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.urlnet.cn';
const SRC_DIR = path.join(__dirname, '../src/app');
const NEWS_DIR = path.join(__dirname, '../src/app/new/news');
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// 排除的路径
// const EXCLUDES = ['api', 'layout.tsx', 'globals.css', 'loading.tsx', 'not-found.tsx', 'error.tsx'];

function getRoutes(dir, baseUrl = '') {
  let routes = [];
  if (!fs.existsSync(dir)) return routes;

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 处理动态路由目录 [id]
      if (file.startsWith('[') && file.endsWith(']')) {
        // 动态路由不直接添加到 sitemap，除非有具体的数据源
      } else {
        routes = routes.concat(getRoutes(fullPath, `${baseUrl}/${file}`));
      }
    } else if (file === 'page.tsx') {
      routes.push(baseUrl === '' ? '/' : baseUrl);
    }
  });

  return routes;
}

function getBlogRoutes() {
  if (!fs.existsSync(NEWS_DIR)) return [];

  const files = fs.readdirSync(NEWS_DIR);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const id = file.replace('.md', '');
      return `/new/${id}`;
    });
}

function generateSitemap() {
  console.log('开始生成 Sitemap...');

  // 1. 获取静态路由
  const staticRoutes = getRoutes(SRC_DIR);

  // 2. 获取博客路由
  const blogRoutes = getBlogRoutes();

  // 3. 合并路由
  const allRoutes = [...staticRoutes, ...blogRoutes];

  // 4. 生成 XML
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  allRoutes.forEach(route => {
    // 优先级逻辑
    let priority = '0.8';
    if (route === '/') priority = '1.0';
    else if (route.startsWith('/products')) priority = '0.9';
    else if (route.startsWith('/new/')) priority = '0.7';

    // 更新频率
    let changefreq = 'weekly';
    if (route === '/' || route === '/new') changefreq = 'daily';
    else if (route.startsWith('/new/')) changefreq = 'monthly';

    xml += `
  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  // 5. 写入文件
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(SITEMAP_PATH, xml);
  console.log(`Sitemap 已生成，包含 ${allRoutes.length} 个链接。位置: ${SITEMAP_PATH}`);
}

generateSitemap();

/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllRoutes } from './utils/get-routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.urlnet.cn';
const DIST_DIR = path.join(__dirname, '../dist');

function generateSitemap() {
  console.log('开始生成 Sitemap...');

  // 获取所有路由
  const allRoutes = getAllRoutes();

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

  // 5. 写入文件到dist目录
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml);
  console.log('Sitemap 生成完成！');
}

generateSitemap();

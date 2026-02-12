/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';
import http from 'http';
import { getAllRoutes } from './utils/get-routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 4173;

/**
 * 查找本地已安装的浏览器路径
 * 支持 Chrome、Edge、Chromium
 * @returns {string|null} 浏览器可执行文件路径
 */
function findBrowserPath() {
  const browserPaths = [
    // Windows Edge
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    // Windows Chrome
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    // Windows 用户目录 Chrome
    path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
    // macOS Chrome
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // macOS Edge
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    // Linux Chrome
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium'
  ];

  for (const browserPath of browserPaths) {
    if (browserPath && fs.existsSync(browserPath)) {
      return browserPath;
    }
  }
  return null;
}

/**
 * 简单的静态文件服务器
 */
const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath += '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    } else {
      filePath = path.join(DIST_DIR, 'index.html');
    }
  }

  const extname = path.extname(filePath);
  const contentTypes = {
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.svg': 'image/svg+xml',
    '.html': 'text/html'
  };

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(err.code === 'ENOENT' ? 404 : 500);
      res.end(err.code === 'ENOENT' ? 'Not Found' : 'Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentTypes[extname] || 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

/**
 * 预渲染主函数
 */
async function prerender() {
  console.log('启动预渲染服务器...');

  const executablePath = findBrowserPath();
  if (!executablePath) {
    console.log('');
    console.log('⚠️  未找到本地浏览器，跳过预渲染步骤。');
    console.log('   请安装 Chrome 或 Edge 浏览器以启用预渲染功能。');
    console.log('   当前构建已生成 SPA 模式的静态文件。');
    console.log('');
    process.exit(0);
  }

  console.log(`使用浏览器: ${executablePath}`);

  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`预渲染服务器运行在 http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();

  const routes = getAllRoutes();
  console.log(`发现 ${routes.length} 个路由需要预渲染`);

  let successCount = 0;
  let failCount = 0;

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`正在预渲染: ${route}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
      const html = await page.content();

      let savePath;
      if (route === '/') {
        savePath = path.join(DIST_DIR, 'index.html');
      } else {
        const dir = path.join(DIST_DIR, route.slice(1));
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        savePath = path.join(dir, 'index.html');
      }

      fs.writeFileSync(savePath, html);
      console.log(`   ✅ 已保存: ${savePath}`);
      successCount++;

    } catch (err) {
      console.error(`   ❌ 预渲染失败: ${err.message}`);
      failCount++;
    }
  }

  await browser.close();
  server.close();
  
  console.log('');
  console.log('🎉 预渲染完成！');
  console.log(`   成功: ${successCount} 个页面`);
  if (failCount > 0) {
    console.log(`   失败: ${failCount} 个页面`);
  }
  
  process.exit(0);
}

prerender().catch(err => {
  console.error('预渲染脚本错误:', err);
  process.exit(1);
});

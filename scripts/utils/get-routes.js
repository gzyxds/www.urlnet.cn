/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../../src/app');
const NEWS_DIR = path.join(__dirname, '../../src/app/new/news');

/**
 * 动态路由数据源配置
 * 用于定义动态路由（如 [id]）如何获取其可能的值
 */
const DYNAMIC_ROUTES_SOURCE = [
  {
    // 路由模式（仅用于标识）
    pattern: '/new/[id]',
    // 获取数据列表的函数
    getData: () => {
      if (!fs.existsSync(NEWS_DIR)) return [];
      try {
        const files = fs.readdirSync(NEWS_DIR);
        return files
          .filter(file => file.endsWith('.md'))
          .map(file => ({ id: file.replace('.md', '') }));
      } catch (error) {
        console.error('Error reading news directory:', error);
        return [];
      }
    },
    // 将数据转换为实际路径的函数
    mapToPath: (item) => `/new/${item.id}`
  }
  // 未来可以在此处添加更多动态路由配置，例如：
  // {
  //   pattern: '/products/[id]',
  //   getData: () => fetchProductIds(),
  //   mapToPath: (item) => `/products/${item.id}`
  // }
];

/**
 * 递归扫描目录获取静态路由
 */
function getStaticRoutes(dir, baseUrl = '') {
  let routes = [];
  if (!fs.existsSync(dir)) return routes;

  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 遇到动态路由目录（如 [id]）时跳过，交由动态路由配置处理
      if (file.startsWith('[') && file.endsWith(']')) {
        return;
      }
      routes = routes.concat(getStaticRoutes(fullPath, `${baseUrl}/${file}`));
    } else if (file === 'page.tsx') {
      // 只有包含 page.tsx 的目录才被视为有效路由
      routes.push(baseUrl === '' ? '/' : baseUrl);
    }
  });

  return routes;
}

/**
 * 获取所有动态路由
 */
function getDynamicRoutes() {
  let routes = [];

  DYNAMIC_ROUTES_SOURCE.forEach(config => {
    try {
      const data = config.getData();
      const paths = data.map(config.mapToPath);
      routes = [...routes, ...paths];
    } catch (error) {
      console.warn(`Warning: Failed to generate routes for ${config.pattern}`, error);
    }
  });

  return routes;
}

/**
 * 获取应用所有路由（静态 + 动态）
 */
export function getAllRoutes() {
  // 1. 获取静态路由
  const staticRoutes = getStaticRoutes(SRC_DIR);

  // 2. 获取动态路由
  const dynamicRoutes = getDynamicRoutes();

  // 3. 合并路由并去重
  const allRoutes = [...new Set([...staticRoutes, ...dynamicRoutes])];

  return allRoutes;
}

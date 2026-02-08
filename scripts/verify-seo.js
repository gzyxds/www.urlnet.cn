/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHECKS = [
  { path: '../public/sitemap.xml', name: 'Sitemap' },
  { path: '../public/robots.txt', name: 'Robots.txt' },
  { path: '../src/components/SEO.tsx', name: 'SEO Component' },
  { path: '../src/hooks/use-page-metadata.ts', name: 'Page Metadata Hook' },
  { path: '../src/components/NotFound.tsx', name: '404 Page' }
];

console.log('开始 SEO 配置验证...');
let errors = 0;

CHECKS.forEach(check => {
  const fullPath = path.join(__dirname, check.path);
  if (fs.existsSync(fullPath)) {
    console.log(`[PASS] ${check.name} 存在`);
  } else {
    console.error(`[FAIL] ${check.name} 缺失 (${fullPath})`);
    errors++;
  }
});

// 检查 usePageMetadata 是否包含 Open Graph 逻辑
const hookPath = path.join(__dirname, '../src/hooks/use-page-metadata.ts');
if (fs.existsSync(hookPath)) {
  const content = fs.readFileSync(hookPath, 'utf-8');
  if (content.includes('og:title') && content.includes('canonical')) {
    console.log(`[PASS] usePageMetadata 包含 OG 和 Canonical 支持`);
  } else {
    console.error(`[FAIL] usePageMetadata 缺少 OG 或 Canonical 逻辑`);
    errors++;
  }
}

if (errors === 0) {
  console.log('\n✅ 所有 SEO 基础配置验证通过！');
} else {
  console.error(`\n❌ 发现 ${errors} 个问题，请检查。`);
  process.exit(1);
}

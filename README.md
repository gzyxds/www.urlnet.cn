# urlnet.cn 前端项目说明

本项目是一个基于 React 18 + TypeScript 5 + Vite 的现代化前端站点，采用 Tailwind CSS 构建设计系统，结合 Radix UI 与 shadcn/ui 组件模式，支持响应式设计、主题切换、动画动效和高性能构建。项目已适配 Windows 开发环境，并提供 Vercel 部署配置。

## 技术栈
- 框架：React 18、TypeScript 5
- 构建：Vite 7、@vitejs/plugin-react
- 路由：react-router-dom
- 样式：Tailwind CSS、CSS Variables（主题令牌）
- 组件：Radix UI + shadcn/ui（class-variance-authority）
- 图标：Lucide React
- 动画：Framer Motion
- 其他：react-helmet-async（SEO/Head）、tailwind-merge、date-fns、matter-js、recharts 等

## 环境要求
- Node.js 18 或更高版本（建议 18.x 或 20.x）
- 包管理器：npm（或可使用 pnpm/yarn，自行替换命令）

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发（默认 http://localhost:5173）
npm run dev

# 生产构建
npm run build

# 本地预览（构建后预览 dist）
npm run preview

# 代码检查（严格模式，无警告）
npm run lint
```

## NPM 脚本
- dev：启动 Vite 开发服务器
- build：构建生产产物到 dist/
- preview：预览构建结果
- lint：使用 ESLint 对 ts/tsx 进行检查

对应脚本配置见 [package.json](file:///e:/Github/www.urlnet.cn/package.json)。

## 目录结构概览

```
src/
├── app/                 # 页面与模块（按路由组织）
│  ├── products/         # 产品相关页面（/products/*）
│  ├── new/              # 新闻系统模块（Markdown 驱动）
│  ├── about/ agency/ api/ code/ demo/ docs/ download/ service/ tips/ ...
│  ├── globals.css       # 主题令牌与全局样式（Tailwind）
│  ├── layout.tsx        # 通用布局（部分页面）
│  └── page.tsx          # 首页
├── components/          # 可复用组件（含 shadcn/ui）
│  ├── ui/               # 基础 UI（Button/Card/Tabs/Toast 等）
│  ├── clients/          # 客户展示墙
│  └── 其他业务组件
├── hooks/               # 自定义 Hooks
├── lib/                 # 工具库（如 cn）
├── types/               # 类型定义
├── App.tsx              # 路由与应用骨架
├── main.tsx             # 应用入口（HelmetProvider + BrowserRouter）
└── vite-env.d.ts

配置文件：
- tailwind.config.ts      # Tailwind 配置（断点、颜色映射、暗色模式）
- vite.config.ts          # 构建/开发配置，自定义图片复制插件，手动分包
- tsconfig.json / *.app.json / *.node.json
- vercel.json             # Vercel 部署配置（SPA 重写到 index.html）
- components.json         # shadcn/ui 生成配置与别名
```

## 路由与页面
项目使用 react-router-dom 管理路由，入口位于 [App.tsx](file:///e:/Github/www.urlnet.cn/src/App.tsx)。主要路由：
- /                 首页
- /products         产品总览
- /products/human   数字人系统
- /products/ai      AI 变现系统
- /products/chat    AI 聊天绘画系统
- /products/paper   AI 论文写作系统
- /demo             在线演示
- /docs             文档说明
- /code             源码下载/展示
- /service          服务介绍
- /agency           渠道合作
- /about            关于我们
- /api              接口介绍（静态展示）
- /download         下载页面
- /new              新闻列表
- /new/[id]         新闻详情

HelmetProvider 用于设置页面级 meta/SEO，参见 [main.tsx](file:///e:/Github/www.urlnet.cn/src/main.tsx#L8-L15)。

## 设计系统与主题

Tailwind + CSS Variables 实现主题令牌，暗色模式以 class 切换：
- 令牌与暗色变量：见 [globals.css](file:///e:/Github/www.urlnet.cn/src/app/globals.css#L7-L67)
- 全局样式与滚动条/动画工具类：见 [globals.css](file:///e:/Github/www.urlnet.cn/src/app/globals.css#L70-L182)
- Tailwind 配置断点与颜色映射：见 [tailwind.config.ts](file:///e:/Github/www.urlnet.cn/tailwind.config.ts)

基础 UI 组件采用 shadcn 模式与 Radix UI 语义：
- Button 变体通过 class-variance-authority 定义：见 [button.tsx](file:///e:/Github/www.urlnet.cn/src/components/ui/button.tsx)
- 工具函数 cn 合并类名：见 [utils.ts](file:///e:/Github/www.urlnet.cn/src/lib/utils.ts)

## 新闻系统（Markdown 驱动）
- 位置：src/app/new/
- 内容来源：src/app/new/news/*.md（Front Matter + 正文）
- 渲染：在列表/详情页面中解析 Markdown，支持分类、标签、搜索、分页等
- 动态加载：基于 Vite `import.meta.glob` 自动检索并懒加载 MD 文件

数据服务位于 [newsService.ts](file:///e:/Github/www.urlnet.cn/src/app/new/services/newsService.ts)，要点：
- 单例服务负责初始化与缓存
- `import.meta.glob('../news/*.md', { eager: false, query: '?raw' })` 自动发现并加载文件
- 提供列表查询、筛选、排序、分页、热门、相关、统计等方法

详细使用与约定请参考模块内文档：[README.md](file:///e:/Github/www.urlnet.cn/src/app/new/README.md)。

## 构建与 Vite 配置要点
见 [vite.config.ts](file:///e:/Github/www.urlnet.cn/vite.config.ts)：
- Alias：`@` 指向 `src/`
- assetsInclude：允许导入 `*.md` 作为静态资产
- 手动分包（manualChunks）：对 three、react-dom、framer-motion 等拆分，提升缓存与首屏性能
- 开发服务器：`host: 0.0.0.0`，允许局域网访问
- 自定义插件：复制新闻相关图片到构建产物
  - 源：`src/app/new/picture/*`
  - 目标：`dist/picture/*`

## 部署说明（Vercel）
项目包含 [vercel.json](file:///e:/Github/www.urlnet.cn/vercel.json)：
- 构建命令：`npm run build`
- 输出目录：`dist`
- SPA 重写：所有请求重写到 `/index.html`

部署步骤（以 Vercel 为例）：
1. 推送到 Git 仓库（GitHub/GitLab）
2. 在 Vercel 导入该仓库
3. 保持默认 Build/Output 设置或按 vercel.json 自动识别
4. 部署后验证路由与静态资源是否正常

## 开发约定与代码规范
- TypeScript 严格模式，见 [tsconfig.json](file:///e:/Github/www.urlnet.cn/tsconfig.json)
- 统一使用 `@/` 别名与 `cn()` 合并类名
- 组件风格：Radix UI + shadcn/ui，尽量使用无障碍属性
- 样式优先级：基于 Tailwind 原子类与主题令牌，减少自定义 CSS
- 提交信息建议遵循 Conventional Commits（如 feat/fix/docs/refactor/style 等）
- Lint：`npm run lint`，CI/CD 可启用严格检查（当前无测试框架配置）

## 性能与体验
- 手动分包与浏览器缓存优化（见构建配置）
- 按需渲染与路由级代码拆分（建议在业务页采用）
- GPU 友好动效（transform/opacity），使用 Framer Motion 构建动效
- 响应式断点扩展，支持超宽屏（3xl），见 Tailwind 配置

## 常见问题
- 本地无法访问：确保 Node ≥ 18，端口未被占用（默认 5173），尝试切换包管理器
- 构建后图片缺失：确认 `src/app/new/picture/*` 是否存在，构建插件会复制到 `dist/picture/`
- 新闻未加载：确认 `.md` 文件位于 `src/app/new/news/`，Front Matter 与内容格式正确
- 样式异常：检查 Tailwind 内容扫描路径与 CSS 变量令牌是否正确

## 版权与许可
本仓库仅供业务演示与交付使用，版权归属与使用许可以双方约定为准。如需二次分发或商用授权，请联系项目维护方。

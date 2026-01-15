# 艺创AI (UrlNet) - 企业级 AI 平台系统解决方案

![Project Version](https://img.shields.io/badge/version-5.0-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6.svg?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF.svg?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css)

## 📖 项目简介

**艺创AI (UrlNet)** 是一套专注于提供企业级 AI 系统解决方案的现代化 Web 平台。本项目采用最新的前端技术栈构建，旨在展示和交付包括 AI 数字人系统、企业全能 AI 变现系统、AI 聊天绘画系统以及 AI 论文写作系统等在内的多种高性能 AI SaaS 产品。

平台设计注重用户体验、高性能渲染与响应式布局，完美适配桌面端与移动端设备。

## ✨ 核心特性

- **现代化技术栈**: 基于 React 18 + TypeScript 5 + Vite 构建，确保极致的开发体验与运行性能。
- **极致 UI/UX**: 采用 Radix UI 无头组件库结合 Tailwind CSS，打造精美且无障碍的交互界面。
- **流畅动画**: 深度集成 Framer Motion 与 Three.js (@react-three/fiber)，提供沉浸式的 3D 与 2D 动效体验。
- **响应式设计**: 移动端优先的设计理念，结合 Tailwind 的断点系统，支持从手机到超大屏幕的完美展示。
- **模块化架构**: 清晰的目录结构与组件化开发模式，便于维护与扩展。
- **丰富的功能模块**:
  - 🚀 **热门产品展示**: AI 数字人、AI 创作工具等核心产品推介。
  - 🏢 **开放场景**: 展示 AI 技术在金融、教育、医疗等多行业的落地应用。
  - 💼 **客户案例**: 真实的合作伙伴与成功案例展示 (Logo Wall)。
  - 📰 **新闻资讯**: 实时更新行业动态与平台新闻。
  - 🛠 **功能蓝图**: 清晰展示系统架构与功能全景。

## 🛠️ 技术栈

### 核心框架
- **构建工具**: [Vite 5](https://vitejs.dev/)
- **前端库**: [React 18](https://react.dev/)
- **编程语言**: [TypeScript 5](https://www.typescriptlang.org/)
- **路由管理**: [React Router v7](https://reactrouter.com/)

### 样式与 UI
- **CSS 框架**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **UI 组件原语**: [Radix UI](https://www.radix-ui.com/) (Accordion, Dialog, Popover, etc.)
- **图标库**: [Lucide React](https://lucide.dev/)
- **样式工具**: `clsx`, `tailwind-merge`, `class-variance-authority`

### 动画与图形
- **动画引擎**: [Framer Motion](https://www.framer.com/motion/)
- **3D 渲染**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **物理引擎**: [Matter.js](https://brm.io/matter-js/)

### 其他工具
- **表单处理**: React Hook Form + Zod (implied)
- **Markdown 渲染**: React Markdown
- **日期处理**: Date-fns
- **代码规范**: ESLint

## 📂 目录结构

```bash
e:\Github\www.urlnet.cn
├── public/              # 静态资源 (图片, icons 等)
├── src/
│   ├── app/             # 页面路由与布局 (Next.js 风格结构)
│   │   ├── about/       # 关于我们页面
│   │   ├── products/    # 产品中心页面
│   │   ├── globals.css  # 全局样式
│   │   ├── layout.tsx   # 根布局
│   │   └── page.tsx     # 首页入口
│   ├── components/      # 组件库
│   │   ├── clients/     # 客户相关组件
│   │   ├── ui/          # 基础 UI 组件 (Button, Input 等)
│   │   └── ...          # 业务组件 (Carousel, Navbar 等)
│   ├── data/            # 静态数据文件
│   ├── hooks/           # 自定义 Hooks
│   ├── lib/             # 工具函数 (utils.ts)
│   ├── types/           # TypeScript 类型定义
│   ├── App.tsx          # 应用根组件
│   └── main.tsx         # 入口文件
├── .gitignore           # Git 忽略配置
├── package.json         # 项目依赖与脚本
├── tailwind.config.ts   # Tailwind CSS 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- pnpm 或 npm 或 yarn

### 安装依赖

```bash
pnpm install
# 或者
npm install
# 或者
yarn install
```

### 启动开发服务器

```bash
npm run dev
```
访问 `http://localhost:5173` 查看效果。

### 构建生产版本

```bash
npm run build
```
构建产物将输出到 `dist` 目录。

### 本地预览生产构建

```bash
npm run preview
```

## 📜 脚本说明

| 脚本 | 描述 |
| :--- | :--- |
| `dev` | 启动开发服务器 (Vite) |
| `build` | 构建生产环境代码 |
| `preview` | 预览构建后的生产代码 |
| `lint` | 运行 ESLint 代码检查 |

## 🤝 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

Private / Proprietary Software.
Copyright © 2024 UrlNet. All rights reserved.

# AI科技企业网站

一个基于React和React Router的现代化AI科技企业网站，展示企业的产品、服务和解决方案。

## 目录

- [项目概述](#项目概述)
- [功能特点](#功能特点)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [页面组成](#页面组成)
  - [首页](#首页)
  - [产品页面](#产品页面)
  - [服务支持](#服务支持)
  - [其他页面](#其他页面)
- [安装与运行](#安装与运行)
  - [前提条件](#前提条件)
  - [安装依赖](#安装依赖)
  - [开发环境运行](#开发环境运行)
  - [构建生产版本](#构建生产版本)
  - [预览生产版本](#预览生产版本)
- [部署指南](#部署指南)
  - [部署到Vercel](#部署到vercel)
  - [部署到Netlify](#部署到netlify)
  - [其他部署选项](#其他部署选项)
- [自定义与扩展](#自定义与扩展)
  - [添加新页面](#添加新页面)
  - [修改样式](#修改样式)
  - [添加新组件](#添加新组件)
  - [路由配置](#路由配置)
- [常见问题解决](#常见问题解决)
- [贡献指南](#贡献指南)
- [许可证](#许可证)
- [联系方式](#联系方式)

## 项目概述

本项目是一个完整的企业官网，专为展示AI科技企业的产品、服务和解决方案而设计。网站采用现代化的UI设计和交互体验，通过直观的界面向用户展示企业的核心竞争力和技术优势。

主要功能和页面包括：

- **首页**：展示企业概况、产品介绍、优势亮点、客户案例和最新动态
- **产品页面**：详细介绍企业的各类AI产品
- **服务支持**：提供专业的技术支持和服务内容
- **产品演示**：提供各产品的在线演示功能
- **文档中心**：提供产品文档和技术资料
- **支持服务**：提供客户支持和联系方式

## 功能特点

1. **响应式设计**：适配各种屏幕尺寸，提供良好的移动端体验
2. **现代UI/UX**：采用现代化设计风格，提供流畅的用户体验
3. **动画效果**：使用Framer Motion实现平滑的页面过渡和元素动画
4. **组件化开发**：采用组件化思想，提高代码复用性和可维护性
5. **路由管理**：使用React Router实现客户端路由，提供无刷新页面切换体验
6. **交互式组件**：包含多种交互式组件，如轮播图、手风琴菜单、模态框等
7. **性能优化**：采用代码分割、懒加载等技术提升网站性能
8. **SEO友好**：合理的HTML结构和元数据，有利于搜索引擎优化

## 技术栈

- **前端框架**：React 18
- **路由管理**：React Router v6
- **样式解决方案**：Tailwind CSS
- **UI组件**：自定义组件库
- **动画效果**：Framer Motion
- **图标库**：Lucide React
- **构建工具**：Vite
- **类型检查**：TypeScript
- **代码规范**：ESLint + Prettier

## 项目结构

```
ai-enterprise-website/
├── public/              # 静态资源
│   ├── images/          # 图片资源
│   ├── fonts/           # 字体资源
│   └── favicon.ico      # 网站图标
├── src/                 # 源代码
│   ├── app/             # 页面组件
│   │   ├── products/    # 产品相关页面
│   │   │   ├── digital-twin/      # 数字分身产品
│   │   │   ├── knowledge-base/    # 企业知识库产品
│   │   │   ├── chat-drawing/      # 聊天绘画产品
│   │   │   ├── paper-writing/     # 论文创作产品
│   │   │   └── page.tsx           # 产品总览页面
│   │   ├── service/     # 服务页面
│   │   ├── demo/        # 演示页面
│   │   ├── docs/        # 文档页面
│   │   ├── agency/      # 代理页面
│   │   ├── globals.css  # 全局样式
│   │   └── page.tsx     # 首页
│   ├── components/      # 可复用组件
│   │   ├── ui/          # UI基础组件
│   │   ├── header.tsx   # 页头组件
│   │   ├── footer.tsx   # 页脚组件
│   │   ├── hero.tsx     # 首页英雄区组件
│   │   ├── products.tsx # 产品展示组件
│   │   ├── advantages.tsx # 优势展示组件
│   │   ├── cases.tsx    # 案例展示组件
│   │   ├── contact.tsx  # 联系我们组件
│   │   └── ...          # 其他组件
│   ├── hooks/           # 自定义Hooks
│   │   ├── use-mobile.tsx    # 移动端检测Hook
│   │   ├── use-toast.ts      # 提示消息Hook
│   │   └── usePageMetadata.ts # 页面元数据Hook
│   ├── lib/             # 工具函数和库
│   │   └── utils.ts     # 通用工具函数
│   ├── App.tsx          # 应用入口
│   └── main.tsx         # 渲染入口
├── index.html           # HTML模板
├── package.json         # 项目依赖
├── tsconfig.json        # TypeScript配置
├── vite.config.ts       # Vite配置
├── tailwind.config.ts   # Tailwind配置
└── README.md            # 项目说明
```

## 页面组成

### 首页

首页是网站的门户，包含以下主要区块：

- **英雄区(Hero)**：展示企业核心价值主张和品牌形象
- **产品介绍**：简要展示企业主要产品线
- **优势亮点**：突出企业的技术优势和特色
- **客户案例**：展示成功的客户合作案例
- **最新动态**：展示企业新闻和行业资讯
- **联系方式**：提供联系企业的方式

### 产品页面

产品页面详细介绍企业的AI产品系列，包括：

- **数字分身**：虚拟人物和数字孪生技术
- **企业知识库**：智能知识管理和检索系统
- **聊天绘画**：AI辅助创作和设计工具
- **论文创作**：学术研究和论文写作辅助工具

每个产品页面包含：
- 产品概述
- 核心功能
- 技术特点
- 应用场景
- 客户案例
- 常见问题

### 服务支持

服务支持页面提供企业的专业服务内容：

- 技术咨询
- 定制开发
- 实施部署
- 培训服务
- 运维支持
- 升级服务

### 其他页面

- **产品演示**：提供产品功能的在线体验
- **文档中心**：提供产品使用文档、API文档和技术白皮书
- **支持页面**：提供常见问题解答、联系方式和技术支持渠道

## 安装与运行

### 前提条件

- Node.js 16.x 或更高版本
- npm 8.x 或更高版本（或yarn 1.22.x+）

### 安装依赖

```bash
# 进入项目目录
cd ai-enterprise-website

# 使用npm安装依赖
npm install

# 或使用yarn安装依赖
yarn install
```

### 开发环境运行

```bash
# 使用npm
npm run dev

# 或使用yarn
yarn dev
```

开发服务器启动后，访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
# 使用npm
npm run build

# 或使用yarn
yarn build
```

构建后的文件将生成在 `dist` 目录中

### 预览生产版本

```bash
# 使用npm
npm run preview

# 或使用yarn
yarn preview
```

## 部署指南

本项目可以部署到任何支持静态网站的平台，以下是几种常见的部署方式。

### 部署到Vercel

1. 安装Vercel CLI：
   ```bash
   npm install -g vercel
   ```

2. 在项目根目录运行：
   ```bash
   vercel
   ```

3. 按照提示完成部署
   - 首次部署需要登录Vercel账号
   - 选择要部署的项目和团队
   - 确认部署配置

4. 部署完成后，Vercel会提供一个可访问的URL

### 部署到Netlify

1. 在Netlify创建新站点
2. 连接到代码仓库（GitHub, GitLab或Bitbucket）
3. 配置构建设置：
   - 构建命令设置为：`npm run build`
   - 发布目录设置为：`dist`
4. 点击"Deploy site"开始部署

### 其他部署选项

- **GitHub Pages**：使用gh-pages包部署
- **AWS S3 + CloudFront**：用于高性能全球分发
- **Firebase Hosting**：Google提供的托管服务
- **阿里云OSS**：国内访问友好的对象存储服务

## 自定义与扩展

### 添加新页面

1. 在`src/app`目录下创建新的页面组件目录和文件：
   ```tsx
   // src/app/new-page/page.tsx
   import React from 'react';
   
   export default function NewPage() {
     return (
       <div className="container mx-auto py-12">
         <h1 className="text-3xl font-bold">新页面标题</h1>
         <p className="mt-4">页面内容...</p>
       </div>
     );
   }
   ```

2. 在`src/App.tsx`中添加对应的路由配置：
   ```tsx
   import NewPage from './app/new-page/page';
   
   // 在路由配置中添加
   <Route path="/new-page" element={<NewPage />} />
   ```

### 修改样式

- 全局样式在`src/app/globals.css`中定义
- 组件样式使用Tailwind CSS类名直接在组件中定义
- 自定义Tailwind配置可在`tailwind.config.ts`中修改：
  ```ts
  // tailwind.config.ts
  export default {
    theme: {
      extend: {
        colors: {
          'brand': '#3B82F6',
          'brand-dark': '#2563EB',
        },
        // 其他自定义配置
      }
    },
    // ...
  }
  ```

### 添加新组件

在`src/components`目录下创建新的组件文件：

```tsx
// src/components/FeatureCard.tsx
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-brand mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

然后在需要的地方导入使用：

```tsx
import { FeatureCard } from '../components/FeatureCard';
import { Lightbulb } from 'lucide-react';

// 在组件中使用
<FeatureCard 
  title="智能分析" 
  description="利用AI技术提供深度数据分析" 
  icon={<Lightbulb size={24} />} 
/>
```

### 路由配置

路由配置在`src/App.tsx`中管理，使用React Router v6的声明式路由：

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import ProductsPage from './app/products/page';
import ServicePage from './app/service/page';
// 其他页面导入...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/digital-twin" element={<DigitalTwinPage />} />
        <Route path="/service" element={<ServicePage />} />
        {/* 其他路由... */}
      </Routes>
    </BrowserRouter>
  );
}
```

## 常见问题解决

### 路由问题

**问题**：访问某些页面出现404错误

**解决方案**：
1. 检查`src/App.tsx`中是否正确配置了对应路由
2. 确保导航组件中的链接URL正确
3. 对于嵌套路由，确保父路由和子路由都正确配置

例如，解决`/service`路由问题：
1. 在`App.tsx`中添加`/service`路由：
   ```tsx
   import ServicePage from './app/service/page';
   // 在路由配置中添加
   <Route path="/service" element={<ServicePage />} />
   ```
2. 在Header组件中添加导航链接：
   ```tsx
   <Link to="/service">服务支持</Link>
   ```

### 移动端适配问题

**问题**：移动端显示不正常或交互有问题

**解决方案**：
1. 使用`use-mobile`自定义Hook检测设备类型
2. 为不同设备提供不同的UI布局
3. 测试各种屏幕尺寸下的显示效果



1. 颜色系统
项目使用了HSL颜色模式，通过CSS变量定义了完整的颜色系统：

主色调：蓝色系列，主要使用 #015bfe（亮蓝色）作为品牌主色
暗色模式：项目支持亮色/暗色主题切换，通过 .dark 类应用不同的颜色变量
功能性颜色：
背景色：--background
前景色：--foreground
卡片色：--card 和 --card-foreground
主色：--primary 和 --primary-foreground
次要色：--secondary 和 --secondary-foreground
强调色：--accent 和 --accent-foreground
边框色：--border
图表色：--chart-1 到 --chart-5
侧边栏色：多个 --sidebar-* 变量

2. 字体和排版
基础字体：Arial, Helvetica, sans-serif
标题字体：使用 Inter 字体（从Google Fonts导入）
文本平衡：使用 text-balance 工具类

3. 圆角和间距
圆角：通过 --radius 变量定义（默认为0.5rem）
边框：使用 --border 变量定义颜色

4. 动画效果
项目使用了 framer-motion 库实现丰富的动画效果
自定义动画：
fadeIn 淡入效果
blob 气泡动画
accordion-down 和 accordion-up 手风琴效果

5. 自定义样式
滚动条样式：自定义了宽度、颜色和悬停效果
渐变文本：.text-gradient 类实现文本渐变效果
渐变背景：.bg-gradient 类实现背景渐变效果
文本截断：.line-clamp-2 和 .line-clamp-3 类实现多行文本截断

默认宽度设置
1. 容器宽度
项目使用 Tailwind CSS 的容器系统，主要通过 container 类来控制内容宽度：

基本用法：<div className="container mx-auto px-4">
这种模式在所有组件中一致使用（header、hero、about等）

2. 响应式断点
Tailwind CSS 默认的响应式断点：

sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px

3. 特殊宽度设置
侧边栏宽度：通过CSS变量控制

--sidebar-width
--sidebar-width-icon
--sidebar-width-mobile
最大宽度限制：

内容区域：max-w-2xl、max-w-3xl、max-w-4xl 等
弹出菜单：max-w-sm、max-w-lg 等
移动端菜单：w-3/4
响应式布局：

使用 Tailwind 的网格系统：grid grid-cols-1 lg:grid-cols-2
使用 Flexbox：flex flex-col lg:flex-row

4. 布局结构
页面结构采用组件化设计，每个部分都是独立的组件
所有组件都使用 container 类来控制内容宽度
页面内容通常使用 section 标签包裹，并设置适当的内边距（如 py-16、py-20）
总结
主题系统：项目使用 Tailwind CSS 和 CSS 变量构建了完整的主题系统，支持亮色/暗色模式切换
默认宽度：使用 container 类和 mx-auto 实现居中布局，通过 px-4 提供边距
响应式设计：采用移动优先的设计理念，使用 Tailwind 的响应式前缀（sm:, md:, lg:, xl:）适配不同屏幕尺寸
组件化结构：每个页面部分都是独立组件，保持了一致的布局结构和样式应用方式

## 贡献指南

我们欢迎社区贡献，请按照以下步骤参与项目：

1. Fork本仓库
2. 创建特性分支：`git checkout -b feature/your-feature-name`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/your-feature-name`
5. 提交Pull Request

**贡献规范**：
- 遵循项目的代码风格和命名规范
- 提交前运行测试确保代码质量
- 提交信息应清晰描述变更内容
- 大型功能变更请先创建Issue讨论

## 许可证

[MIT](LICENSE)

## 联系方式

- **官方网站**：[www.aitech.com](https://www.aitech.com)
- **电子邮箱**：contact@aitech.com
- **客服电话**：400-888-8888
- **公司地址**：北京市海淀区科技园区88号
- **社交媒体**：
  - 微信公众号：AITech科技
  - 知乎：AITech官方账号
  - LinkedIn：AITech Inc.
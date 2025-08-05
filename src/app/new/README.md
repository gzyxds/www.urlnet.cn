# 新闻系统使用指南

## 概述

这是一个基于本地 Markdown 文件的静态新闻系统，支持新闻列表展示、详情页面、分类筛选、搜索等功能。

## 目录结构

```
src/app/new/
├── components/          # 新闻相关组件
│   ├── Breadcrumb.tsx      # 面包屑导航
│   ├── MarkdownRenderer.tsx # Markdown渲染器
│   ├── NewsCard.tsx        # 新闻卡片
│   ├── NewsFilter.tsx      # 新闻筛选
│   ├── NewsPagination.tsx  # 分页组件
│   ├── NewsSidebar.tsx     # 侧边栏
│   └── RelatedNews.tsx     # 相关新闻
├── services/           # 数据服务
│   ├── newsService.ts      # 新闻数据服务
│   └── markdown.ts         # Markdown处理工具
├── [id]/              # 新闻详情页
│   └── page.tsx
├── page.tsx           # 新闻列表页
├── types.ts           # 类型定义
└── README.md          # 使用指南
```

## 新闻文件格式

新闻文件存放在 `public/news/` 目录下，使用 Markdown 格式，包含 Front Matter 元数据：

```markdown
---
title: "新闻标题"
summary: "新闻摘要"
category: "technology" # technology, business, industry
tags: ["标签1", "标签2"]
author:
  name: "作者姓名"
  avatar: "/avatars/author.jpg"
  bio: "作者简介"
publishDate: "2024-01-15"
updateDate: "2024-01-15"
coverImage: "/images/news/cover.jpg"
isSticky: false
isHot: true
views: 1250
readTime: 8
---

# 新闻内容

这里是新闻的正文内容...
```

## 功能特性

### 新闻列表页 (`/new`)

- ✅ 新闻卡片展示（标题、摘要、标签、作者、时间等）
- ✅ 分类筛选（技术、商业、行业）
- ✅ 搜索功能（标题和内容搜索）
- ✅ 标签筛选
- ✅ 排序功能（发布时间、浏览量、阅读时间）
- ✅ 分页导航
- ✅ 侧边栏（分类统计、热门新闻、标签云）

### 新闻详情页 (`/new/[id]`)

- ✅ 面包屑导航
- ✅ 文章元信息（作者、发布时间、阅读时间等）
- ✅ Markdown 内容渲染
- ✅ 相关新闻推荐
- ✅ 动态页面元数据设置

### 组件功能

#### NewsCard 组件
- 新闻卡片展示
- 支持置顶和热门标识
- 响应式设计

#### NewsFilter 组件
- 搜索框
- 分类快速筛选
- 展开式高级筛选
- 排序选项
- 已选筛选条件显示

#### NewsSidebar 组件
- 分类统计和筛选
- 热门新闻列表
- 标签云
- 快速链接

#### NewsPagination 组件
- 智能页码显示
- 页面大小选择
- 快速跳转功能

#### MarkdownRenderer 组件
- Markdown 转 HTML
- 代码高亮
- 样式美化
- HTML 安全转义

## 数据服务

### newsService

提供以下 API：

```typescript
// 获取新闻列表（支持筛选、排序、分页）
getNews(options?: NewsListOptions): Promise<NewsListResponse>

// 根据ID获取单篇新闻
getNewsById(id: string): Promise<NewsItem | null>

// 获取热门新闻
getHotNews(limit?: number): Promise<NewsItem[]>

// 获取相关新闻
getRelatedNews(newsId: string, options?: RelatedNewsOptions): Promise<NewsItem[]>

// 获取分类统计
getCategoryStats(): Promise<Record<NewsCategory, number>>

// 获取标签统计
getTagStats(): Promise<Record<string, number>>
```

### markdown 工具

提供 Markdown 文件处理功能：

```typescript
// 解析 Front Matter
parseFrontMatter(content: string): { frontMatter: any; content: string }

// 转换为新闻对象
convertToNewsItem(filename: string, content: string): NewsItem

// 估算阅读时间
estimateReadTime(content: string): number

// 生成新闻模板
generateNewsTemplate(options: Partial<NewsItem>): string
```

## 使用方法

### 1. 添加新闻

在 `public/news/` 目录下创建新的 `.md` 文件：

```bash
# 文件名格式：kebab-case.md
public/news/my-awesome-news.md
```

### 2. 访问页面

- 新闻列表：`http://localhost:5174/new`
- 新闻详情：`http://localhost:5174/new/my-awesome-news`

### 3. 筛选和搜索

- 分类筛选：`/new?category=technology`
- 标签筛选：`/new?tag=AI`
- 搜索：`/new?search=关键词`
- 排序：`/new?sortBy=views&sortOrder=desc`

## 样式和主题

系统使用 Tailwind CSS 构建，支持：

- 响应式设计
- 深色/浅色主题
- 现代化 UI 组件
- 无障碍访问支持

## 性能优化

- 组件懒加载
- 图片懒加载
- 虚拟滚动（大列表）
- 缓存策略
- SEO 优化

## 扩展功能

可以轻松扩展以下功能：

- 评论系统
- 点赞/收藏
- 社交分享
- RSS 订阅
- 全文搜索
- 多语言支持

## 注意事项

1. **文件命名**：使用 kebab-case 格式，避免特殊字符
2. **图片路径**：使用相对于 `public` 目录的路径
3. **Front Matter**：必须包含必要的元数据字段
4. **内容格式**：遵循标准 Markdown 语法

## 故障排除

### 常见问题

1. **新闻不显示**
   - 检查文件路径是否正确
   - 确认 Front Matter 格式正确
   - 查看浏览器控制台错误信息

2. **图片不显示**
   - 确认图片路径正确
   - 检查图片文件是否存在
   - 验证图片格式支持

3. **样式异常**
   - 清除浏览器缓存
   - 检查 CSS 类名是否正确
   - 确认 Tailwind CSS 配置

## 技术栈

- **框架**：React + TypeScript
- **构建工具**：Vite
- **样式**：Tailwind CSS
- **路由**：Next.js App Router
- **状态管理**：React Hooks
- **Markdown 处理**：自定义解析器

---

如有问题或建议，请联系开发团队。
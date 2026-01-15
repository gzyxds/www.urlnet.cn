import { NewsItem, NewsCategory } from '../types';

// 定义 FrontMatter 接口
export interface FrontMatter {
  title: string;
  summary?: string;
  description?: string; // 兼容 Vue 参考代码
  category?: string;
  tags?: string[];
  date?: string;
  publishDate?: string; // 兼容旧代码
  coverImage?: string;
  image?: string; // 兼容 Vue 参考代码
  author?: string;
}

export interface Post extends NewsItem {
  slug: string;
  content: string;
}

export interface SurroundingPosts {
  prev: Post | null; // 时间上更新的 (Newer)
  next: Post | null; // 时间上更旧的 (Older)
}

// 加载所有图片资源
const pictureModules = import.meta.glob('../picture/*.{jpg,jpeg,png,webp,svg}', { eager: true, import: 'default' });
const pictures = Object.values(pictureModules) as string[];

// 字符串哈希函数 (用于确定性随机)
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash;
}

// 简单的 YAML 解析器 (轻量级，无依赖)
function parseFrontMatter(content: string): { data: FrontMatter; content: string } {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    return { data: {} as FrontMatter, content };
  }

  const rawYaml = match[1];
  const markdownBody = match[2];
  const data: Record<string, string | string[]> = {};

  rawYaml.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();

      // 去除引号
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // 处理数组 (简单处理 [a, b])
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key] = value.slice(1, -1).split(',').map((s: string) => s.trim().replace(/^['"]|['"]$/g, ''));
      } else {
        data[key] = value;
      }
    }
  });

  return { data: data as unknown as FrontMatter, content: markdownBody };
}

// 获取所有文章
export async function getAllPosts(): Promise<Post[]> {
  const modules = import.meta.glob('../news/*.md', { query: '?raw', import: 'default' });
  const posts: Post[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]() as string;
    const { data, content } = parseFrontMatter(rawContent);
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    // 基于 slug 选择随机图片
    const randomImageIndex = Math.abs(hashCode(slug)) % pictures.length;
    const randomImage = pictures.length > 0 ? pictures[randomImageIndex] : undefined;

    // 标准化数据
    const post: Post = {
      id: slug,
      slug,
      title: data.title || '无标题',
      summary: data.summary || data.description || content.slice(0, 100).replace(/[#*`]/g, '') + '...',
      content: content,
      category: (data.category as NewsCategory) || NewsCategory.TECH,
      tags: data.tags || [],
      author: { id: '1', name: data.author || 'Admin' },
      publishDate: new Date(data.date || data.publishDate || new Date()),
      coverImage: data.coverImage || data.image || randomImage,
      readingTime: Math.ceil(content.length / 500), // 简单估算
      viewCount: 0
    };

    posts.push(post);
  }

  // 按日期降序排序
  return posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

// 获取单篇文章
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(p => p.slug === slug) || null;
}

// 获取相邻文章
export async function getSurroundingPosts(currentSlug: string): Promise<SurroundingPosts> {
  const posts = await getAllPosts();
  const index = posts.findIndex(p => p.slug === currentSlug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  // posts 是降序排列 (index 0 是最新的)
  // prev (Newer) 是 index - 1
  // next (Older) 是 index + 1
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null
  };
}

import { Buffer } from 'buffer';
import matter from 'gray-matter';
import { marked } from 'marked';
import { ImageUtils } from './imageUtils';

// 确保 Buffer 在全局可用
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

// 定义接口
export interface MarkdownMetadata {
  title: string;
  summary: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  children: TableOfContentsItem[];
}

export interface MarkdownContent {
  metadata: MarkdownMetadata;
  content: string;
  html: string;
  tableOfContents: TableOfContentsItem[];
}

// 目录项数组
const tocItems: TableOfContentsItem[] = [];
// 用于跟踪已使用的ID，确保唯一性
const usedIds = new Set<string>();

// 自定义渲染器
const renderer = new marked.Renderer();

// 重写标题渲染，生成目录
renderer.heading = function({ tokens, depth }) {
  // 从tokens中提取文本内容
  let textStr = '';
  if (tokens && tokens.length > 0) {
    textStr = tokens.map(token => {
      if (typeof token === 'string') {
        return token;
      } else if (token && typeof token === 'object' && 'text' in token) {
        return token.text;
      } else if (token && typeof token === 'object' && 'raw' in token) {
        return token.raw;
      }
      return String(token);
    }).join('');
  }
  
  // 清理文本，移除HTML标签和特殊字符
  const cleanText = textStr.replace(/<[^>]*>/g, '').trim();
  
  // 生成基础ID
  let baseId = cleanText.toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5\s]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  // 确保ID唯一性
  let uniqueId = baseId;
  let counter = 1;
  while (usedIds.has(uniqueId)) {
    uniqueId = `${baseId}-${counter}`;
    counter++;
  }
  usedIds.add(uniqueId);
  
  tocItems.push({
    id: uniqueId,
    title: cleanText,
    level: depth,
    children: []
  });
  
  return `<h${depth} id="${uniqueId}">${cleanText}</h${depth}>`;
};

// 配置marked选项
marked.setOptions({
  renderer,
  gfm: true,
  breaks: true,
  pedantic: false
});

export class MarkdownLoader {
  // 缓存已读取的markdown文件
  private static markdownCache = new Map<string, string>();

  // 清除缓存的方法
  static clearCache(): void {
    this.markdownCache.clear();
  }

  // 清除特定文件的缓存
  static clearFileCache(filename: string): void {
    this.markdownCache.delete(filename);
  }

  // 获取缓存大小
  static getCacheSize(): number {
    return this.markdownCache.size;
  }

  // 尝试从文件系统动态读取markdown文件
  private static async loadFromFileSystem(filename: string): Promise<string | null> {
    // 优先尝试通过动态导入读取（在开发环境中更可靠）
    try {
      const module = await import(`../content/news/${filename}.md?raw`);
      if (module.default) {
        console.log(`通过动态导入成功读取文件: ${filename}.md`);
        return module.default;
      }
    } catch (error) {
      console.debug(`动态导入方式读取文件失败: ${filename}`, error);
    }

    // 如果动态导入失败，再尝试通过fetch读取文件（主要用于生产环境）
    try {
      const response = await fetch(`/src/content/news/${filename}.md`);
      if (response.ok) {
        const content = await response.text();
        console.log(`成功通过fetch读取文件: ${filename}.md`);
        return content;
      }
    } catch (error) {
      // 如果fetch失败，不输出错误信息，因为这在开发环境中是正常的
      console.debug(`Fetch方式读取文件失败: ${filename}`, error);
    }

    return null;
  }

  // 从文件系统读取markdown文件（模拟）
  private static async loadMarkdownFromFile(filename: string): Promise<string | null> {
    // 检查缓存
    if (this.markdownCache.has(filename)) {
      return this.markdownCache.get(filename)!;
    }

    try {
      // 在实际应用中，这里应该是真正的文件读取
      // 由于浏览器环境限制，我们使用预定义的内容
      const markdownContent = await this.getMarkdownContent(filename);
      if (markdownContent) {
        this.markdownCache.set(filename, markdownContent);
        return markdownContent;
      }
      return null;
    } catch (error) {
      console.error(`读取markdown文件失败: ${filename}`, error);
      return null;
    }
  }

  // 获取markdown内容（动态读取或使用静态内容）
  private static async getMarkdownContent(filename: string): Promise<string | null> {
    // 首先尝试动态读取文件
    try {
      const dynamicContent = await this.loadFromFileSystem(filename);
      if (dynamicContent) {
        return dynamicContent;
      }
    } catch (error) {
      console.debug(`无法动态读取文件 ${filename}，使用静态内容:`, error);
    }

    // 如果动态读取失败，使用空的内容映射作为后备
    const contentMap: Record<string, string> = {
      // 所有内容现在都通过动态文件扫描获取
      // 这里保留空的映射作为最后的后备方案
    };

    return contentMap[filename] || null;
  }

  static async loadMarkdownFile(slug: string): Promise<MarkdownContent | null> {
    try {
      // 从文件系统读取markdown内容
      const markdownText = await this.loadMarkdownFromFile(slug);
      if (!markdownText) {
        console.warn(`未找到文件: ${slug}`);
        return null;
      }

      // 解析frontmatter和内容
      const { data, content } = matter(markdownText);
      
      // 重置目录数组和已使用的ID集合
      tocItems.length = 0;
      usedIds.clear();
      
      // 使用自定义渲染器生成HTML和目录
      const html = await marked(content);
      
      // 构建层级目录结构
      const tableOfContents = this.buildTocHierarchy([...tocItems]);

      // 自动分配随机封面图片（基于文章ID确保一致性）
      const metadata = data as MarkdownMetadata;
      if (!metadata.imageUrl || metadata.imageUrl === '/placeholder-image.jpg') {
        metadata.imageUrl = ImageUtils.getPictureByArticleId(slug);
      }

      return {
        metadata,
        content,
        html,
        tableOfContents
      };
    } catch (error) {
      console.error('加载Markdown文件失败:', error);
      return null;
    }
  }

  private static buildTocHierarchy(items: TableOfContentsItem[]): TableOfContentsItem[] {
    const result: TableOfContentsItem[] = [];
    const stack: TableOfContentsItem[] = [];

    for (const item of items) {
      // 找到合适的父级
      while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
        stack.pop();
      }

      if (stack.length === 0) {
        result.push(item);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(item);
      }

      stack.push(item);
    }

    return result;
  }

  // 获取所有可用的markdown文件slug
  static getAllSlugs(): string[] {
    // 这里应该动态扫描文件系统，返回所有.md文件的文件名（不含扩展名）
    // 现在通过 FileScanner 和 NewsApi 来动态获取文件列表
    return [];
  }

  // 检查文件是否存在
  static async fileExists(slug: string): Promise<boolean> {
    try {
      const content = await this.loadMarkdownFromFile(slug);
      return content !== null;
    } catch {
      return false;
    }
  }

  // 获取文件的基本信息（不加载完整内容）
  static async getFileInfo(slug: string): Promise<{ title: string; publishDate: string; category: string } | null> {
    try {
      const markdownText = await this.loadMarkdownFromFile(slug);
      if (!markdownText) return null;

      const { data } = matter(markdownText);
      const metadata = data as MarkdownMetadata;
      
      return {
        title: metadata.title || '未命名文章',
        publishDate: metadata.publishDate || new Date().toISOString().split('T')[0],
        category: metadata.category || '技术分享'
      };
    } catch {
      return null;
    }
  }

  // 批量加载多个文件的基本信息
  static async batchGetFileInfo(slugs: string[]): Promise<Array<{ slug: string; info: any }>> {
    const results = await Promise.allSettled(
      slugs.map(async (slug) => ({
        slug,
        info: await this.getFileInfo(slug)
      }))
    );

    return results
      .filter((result): result is PromiseFulfilledResult<{ slug: string; info: any }> => 
        result.status === 'fulfilled' && result.value.info !== null
      )
      .map(result => result.value);
  }
}
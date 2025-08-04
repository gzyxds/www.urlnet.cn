// 导入MarkdownLoader和FileScanner
import { MarkdownLoader } from './markdownLoader';
import { FileScanner } from './fileScanner';

// 新闻数据类型定义
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content?: string; // markdown内容
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  likes: number;
  tags: string[];
  featured: boolean;
  imageUrl?: string;
  slug: string; // 用于文件名和URL
}

export interface NewsMetadata {
  title: string;
  summary: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  imageUrl?: string;
}

// 新闻分类
export const NEWS_CATEGORIES = [
  '产品发布',
  '案例分析', 
  '行业洞察',
  '技术分享',
  '产品介绍',
  '公司动态',
  'AI技术',
  '教育科技'
];

// 自动扫描新闻文件的工具类
class NewsFileScanner {
  private static readonly COVER_IMAGES = [
    '/src/content/news/picture/picture.jpg',
    '/src/content/news/picture/picture1.jpg', 
    '/src/content/news/picture/picture2.jpg',
    '/src/content/news/picture/picture3.jpg',
    '/src/content/news/picture/picture4.jpg',
    '/src/content/news/picture/picture5.jpg',
    '/src/content/news/picture/picture6.jpg',
    '/src/content/news/picture/picture7.jpg'
  ];

  // 获取随机封面图片
  static getRandomCoverImage(): string {
    const randomIndex = Math.floor(Math.random() * this.COVER_IMAGES.length);
    return this.COVER_IMAGES[randomIndex];
  }

  // 动态扫描markdown文件
  static async scanMarkdownFiles(): Promise<string[]> {
    try {
      // 使用智能文件扫描器
      const discoveredFiles = await FileScanner.scanNewsMarkdownFiles();
      
      // 验证发现的文件是否有效
      const validFiles: string[] = [];
      
      for (const filename of discoveredFiles) {
        try {
          const isValid = await this.validateNewsFile(filename);
          if (isValid) {
            validFiles.push(filename);
          } else {
            console.warn(`文件 ${filename} 无效，已跳过`);
          }
        } catch (error) {
          console.warn(`验证文件 ${filename} 时出错:`, error);
        }
      }

      console.log(`自动扫描并验证了 ${validFiles.length} 个有效的markdown文件:`, validFiles);
      return validFiles;
    } catch (error) {
      console.error('扫描markdown文件时出错:', error);
      // 如果自动扫描失败，返回空数组
      return [];
    }
  }

  // 验证文件是否为有效的新闻文件
  static async validateNewsFile(filename: string): Promise<boolean> {
    try {
      const content = await MarkdownLoader.loadMarkdownFile(filename);
      return !!(content && content.metadata && content.metadata.title);
    } catch {
      return false;
    }
  }
}



// 新闻统计数据接口
interface NewsStats {
  totalNews: number;
  totalViews: number;
  totalLikes: number;
  categories: { [key: string]: number };
}

// Markdown 文件管理类
export class MarkdownNewsManager {
  private static dynamicNewsCache: NewsItem[] = [];
  private static cacheExpiry = 0;
  private static readonly CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存
  private static viewsStorage: { [key: string]: number } = {};
  private static likesStorage: { [key: string]: number } = {};
  private static fileWatcherInitialized = false;

  // 自动扫描并生成新闻列表
  private static async generateDynamicNewsList(): Promise<NewsItem[]> {
    try {
      // 扫描所有 markdown 文件
      const filenames = await NewsFileScanner.scanMarkdownFiles();
      const dynamicNews: NewsItem[] = [];

      for (const filename of filenames) {
        try {
          // 验证文件是否有效
          const isValid = await NewsFileScanner.validateNewsFile(filename);
          if (!isValid) {
            console.warn(`跳过无效文件: ${filename}`);
            continue;
          }

          const markdownContent = await MarkdownLoader.loadMarkdownFile(filename);
          if (markdownContent && markdownContent.metadata) {
            const metadata = markdownContent.metadata;
            
            // 从本地存储获取或生成统计数据
            const baseViews = Math.floor(Math.random() * 2000) + 500;
            const baseLikes = Math.floor(Math.random() * 200) + 20;
            
            const views = this.viewsStorage[filename] || baseViews;
            const likes = this.likesStorage[filename] || baseLikes;
            
            // 如果没有指定封面图片，随机分配一个
            const imageUrl = metadata.imageUrl || NewsFileScanner.getRandomCoverImage();
            
            // 生成动态新闻项
            const newsItem: NewsItem = {
              id: filename,
              slug: filename,
              title: metadata.title || '未命名文章',
              summary: metadata.summary || '暂无摘要',
              category: metadata.category || '技术分享',
              author: metadata.author || '匿名作者',
              publishDate: metadata.publishDate || new Date().toISOString().split('T')[0],
              readTime: metadata.readTime || '5分钟',
              views: views,
              likes: likes,
              tags: metadata.tags || [],
              featured: metadata.featured || false,
              imageUrl: imageUrl
            };
            
            dynamicNews.push(newsItem);
          }
        } catch (error) {
          console.error(`加载新闻失败: ${filename}`, error);
        }
      }

      // 按发布日期排序
      dynamicNews.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
      
      console.log(`成功加载 ${dynamicNews.length} 篇新闻文章`);
      return dynamicNews;
    } catch (error) {
      console.error('扫描新闻文件失败:', error);
      return [];
    }
  }

  // 刷新新闻缓存
  static async refreshNewsCache(): Promise<void> {
    this.dynamicNewsCache = [];
    this.cacheExpiry = 0;
    await this.generateDynamicNewsList();
  }

  // 初始化文件监听器
  private static initializeFileWatcher(): void {
    try {
      FileScanner.watchNewsFiles(() => {
        console.log('检测到新闻文件变化，自动刷新缓存...');
        this.refreshNewsCache().then(() => {
          console.log('新闻缓存已自动更新');
        }).catch((error) => {
          console.error('自动刷新缓存失败:', error);
        });
      });
      console.log('文件监听器已启动，将自动检测文件变化');
    } catch (error) {
      console.warn('无法启动文件监听器:', error);
    }
  }

  // 获取新闻列表（从Markdown文件动态生成）
  static async getNewsList(params?: {
    category?: string;
    search?: string;
    sortBy?: 'latest' | 'popular';
    limit?: number;
    featured?: boolean;
  }) {
    let newsData: NewsItem[] = [];

    // 初始化文件监听器（只初始化一次）
    if (!this.fileWatcherInitialized) {
      this.initializeFileWatcher();
      this.fileWatcherInitialized = true;
    }

    // 从Markdown文件获取数据
    const now = Date.now();
    if (this.dynamicNewsCache.length === 0 || now > this.cacheExpiry) {
      this.dynamicNewsCache = await this.generateDynamicNewsList();
      this.cacheExpiry = now + this.CACHE_DURATION;
    }
    newsData = [...this.dynamicNewsCache];

    let filtered = newsData;

    // 分类筛选
    if (params?.category && params.category !== '全部') {
      filtered = filtered.filter(item => item.category === params.category);
    }

    // 搜索筛选
    if (params?.search) {
      const searchTerm = params.search.toLowerCase();
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.summary.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // 精选筛选
    if (params?.featured) {
      filtered = filtered.filter(item => item.featured);
    }

    // 排序
    if (params?.sortBy === 'popular') {
      filtered.sort((a, b) => b.views - a.views);
    } else {
      // 默认按最新排序
      filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    }

    // 限制数量
    if (params?.limit) {
      filtered = filtered.slice(0, params.limit);
    }

    return {
      data: filtered,
      total: filtered.length
    };
  }

  // 根据ID获取新闻详情
  static async getNewsById(id: string): Promise<NewsItem | null> {
    const newsList = await this.getNewsList();
    return newsList.data.find(item => item.id === id) || null;
  }

  // 根据slug获取新闻详情
  static async getNewsBySlug(slug: string): Promise<NewsItem | null> {
    const newsList = await this.getNewsList();
    return newsList.data.find(item => item.slug === slug) || null;
  }

  // 获取相关新闻
  static async getRelatedNews(currentId: string, limit: number = 3): Promise<NewsItem[]> {
    const currentNews = await this.getNewsById(currentId);
    if (!currentNews) return [];

    const newsList = await this.getNewsList();
    return newsList.data
      .filter(item => 
        item.id !== currentId && 
        (item.category === currentNews.category || 
         item.tags.some(tag => currentNews.tags.includes(tag)))
      )
      .slice(0, limit);
  }

  // 获取所有分类
  static getCategories(): string[] {
    return NEWS_CATEGORIES;
  }

  // 获取热门标签
  static async getPopularTags(limit: number = 10): Promise<string[]> {
    const tagCount: { [key: string]: number } = {};
    const newsList = await this.getNewsList();
    
    newsList.data.forEach(item => {
      item.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([tag]) => tag);
  }

  // 点赞功能（模拟）
  static async toggleLike(id: string): Promise<{ liked: boolean; likes: number }> {
    const news = await this.getNewsById(id);
    if (!news) {
      throw new Error('新闻不存在');
    }

    // 模拟点赞逻辑（实际项目中需要后端支持）
    const liked = Math.random() > 0.5; // 随机模拟已点赞状态
    const likes = news.likes + (liked ? 1 : -1);
    
    // 更新本地存储
    this.likesStorage[id] = Math.max(0, likes);

    return { liked, likes: Math.max(0, likes) };
  }

  // 增加浏览量
  static incrementViews(id: string): void {
    // 更新动态存储
    this.viewsStorage[id] = (this.viewsStorage[id] || 0) + 1;
  }

  // 获取新闻统计数据
  static async getNewsStats(): Promise<NewsStats> {
    const newsList = await this.getNewsList();
    const categories: { [key: string]: number } = {};
    
    let totalViews = 0;
    let totalLikes = 0;
    
    newsList.data.forEach(news => {
      totalViews += news.views;
      totalLikes += news.likes;
      categories[news.category] = (categories[news.category] || 0) + 1;
    });
    
    return {
      totalNews: newsList.data.length,
      totalViews,
      totalLikes,
      categories
    };
  }

  // 获取热门新闻
  static async getPopularNews(limit: number = 5): Promise<NewsItem[]> {
    const newsList = await this.getNewsList({ sortBy: 'popular' });
    return newsList.data.slice(0, limit);
  }

  // 获取最新新闻
  static async getLatestNews(limit: number = 5): Promise<NewsItem[]> {
    const newsList = await this.getNewsList({ sortBy: 'latest' });
    return newsList.data.slice(0, limit);
  }

  // 获取精选新闻
  static async getFeaturedNews(limit: number = 3): Promise<NewsItem[]> {
    const newsList = await this.getNewsList({ featured: true });
    return newsList.data.slice(0, limit);
  }

  // 手动刷新所有数据（强制重新扫描文件）
  static async forceRefresh(): Promise<void> {
    console.log('开始强制刷新新闻数据...');
    
    // 清除所有缓存
    this.dynamicNewsCache = [];
    this.cacheExpiry = 0;
    MarkdownLoader.clearCache();
    
    // 重新扫描和加载
    await this.generateDynamicNewsList();
    
    console.log('新闻数据强制刷新完成');
  }

  // 获取系统状态信息
  static getSystemStatus(): {
    cacheSize: number;
    cacheExpiry: Date | null;
    fileWatcherActive: boolean;
  } {
    return {
      cacheSize: this.dynamicNewsCache.length,
      cacheExpiry: this.cacheExpiry > 0 ? new Date(this.cacheExpiry) : null,
      fileWatcherActive: this.fileWatcherInitialized
    };
  }
}

// 导出默认的新闻管理器
export const NewsAPI = MarkdownNewsManager;
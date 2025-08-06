import { NewsItem, NewsCategory, NewsListOptions, NewsListResponse, NewsStats } from '../types';
import { markdownToNewsItem } from '../utils/markdown';

/**
 * 新闻数据服务类
 * 
 * 功能说明：
 * - 管理新闻数据的获取和处理
 * - 提供新闻列表查询、筛选、排序、分页功能
 * - 支持分类、标签、关键词搜索
 * - 提供统计信息和相关新闻推荐
 * - 使用单例模式确保数据一致性
 */
class NewsService {
  private static instance: NewsService;
  private newsData: NewsItem[] = [];
  private initialized = false;

  private constructor() {}

  /**
   * 获取服务实例（单例模式）
   */
  public static getInstance(): NewsService {
    if (!NewsService.instance) {
      NewsService.instance = new NewsService();
    }
    return NewsService.instance;
  }

  /**
   * 初始化新闻数据
   * 从 Markdown 文件加载真实数据
   */
  private async initialize(): Promise<void> {
    if (this.initialized) {
      console.log('🔄 News service already initialized, skipping...');
      return;
    }

    try {
      console.log('🚀 Initializing news service with dynamic file detection...');
      // 加载真实的 Markdown 新闻数据
      this.newsData = await this.loadNewsFromMarkdown();
      this.initialized = true;
      console.log(`✅ News service initialized successfully with ${this.newsData.length} items`);
      console.log('📰 Loaded news items:', this.newsData.map(item => ({ id: item.id, title: item.title })));
    } catch (error) {
      console.error('❌ Failed to initialize news service:', error);
      this.newsData = [];
    }
  }

  /**
   * 刷新新闻数据
   * 强制重新加载所有新闻文件，用于添加新文件后的更新
   */
  public async refreshNews(): Promise<void> {
    console.log('Refreshing news data...');
    this.newsData = await this.loadNewsFromMarkdown();
    console.log(`News data refreshed. Total items: ${this.newsData.length}`);
  }



  /**
   * 从 Markdown 文件加载新闻数据
   * 使用 Vite 的 import.meta.glob 实现自动文件检测和动态导入
   * @returns Promise<NewsItem[]> 新闻数据数组
   */
  private async loadNewsFromMarkdown(): Promise<NewsItem[]> {
    const newsItems: NewsItem[] = [];
    
    try {
      console.log('🔍 Loading news files using import.meta.glob...');
      
      // 使用 import.meta.glob 自动检测所有 .md 文件
      // eager: false 表示懒加载，返回函数而不是直接导入内容
      // query: '?raw' 表示以原始文本形式导入文件内容
      const modules = import.meta.glob('../news/*.md', { 
        eager: false, 
        query: '?raw',
        import: 'default'
      });
      
      console.log(`📁 Found ${Object.keys(modules).length} markdown files:`, Object.keys(modules));
      
      // 遍历所有找到的文件
      for (const [path, moduleLoader] of Object.entries(modules)) {
        try {
          // 从路径中提取文件名
          const filename = path.split('/').pop() || '';
          console.log(`📄 Loading file: ${filename} from ${path}`);
          
          // 动态导入文件内容
          const content = await moduleLoader() as string;
          
          if (content && content.trim()) {
            // 将 Markdown 内容转换为 NewsItem 对象
            const newsItem = markdownToNewsItem(filename, content);
            newsItems.push(newsItem);
            console.log(`✅ Successfully loaded: ${filename} (${newsItem.title})`);
          } else {
            console.warn(`⚠️ Empty content in file: ${filename}`);
          }
        } catch (error) {
          console.error(`❌ Failed to load news file ${path}:`, error);
        }
      }
      
      // 按发布日期降序排序
      newsItems.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
      
      console.log(`🎉 Successfully loaded ${newsItems.length} news items`);
      
      // 输出加载的新闻标题列表用于调试
      if (newsItems.length > 0) {
        console.log('📰 Loaded news titles:', newsItems.map(item => `${item.id}: ${item.title}`));
      }
      
    } catch (error) {
      console.error('💥 Failed to load news from markdown:', error);
    }
    
    return newsItems;
  }



  /**
   * 获取新闻列表
   */
  public async getNews(options: NewsListOptions = {}): Promise<NewsListResponse> {
    console.log('getNews called with options:', options);
    await this.initialize();

    console.log(`Total news data available: ${this.newsData.length}`);

    const {
      page = 1,
      pageSize = 12,
      category,
      tags,
      search,
      sortBy = 'publishDate',
      sortOrder = 'desc'
    } = options;

    let filteredNews = [...this.newsData];
    console.log(`Initial filtered news count: ${filteredNews.length}`);

    // 分类筛选
    if (category) {
      filteredNews = filteredNews.filter(news => news.category === category);
    }

    // 标签筛选
    if (tags && tags.length > 0) {
      filteredNews = filteredNews.filter(news =>
        tags.some(tag => news.tags.includes(tag))
      );
    }

    // 关键词搜索
    if (search) {
      const searchLower = search.toLowerCase();
      filteredNews = filteredNews.filter(news =>
        news.title.toLowerCase().includes(searchLower) ||
        news.summary.toLowerCase().includes(searchLower) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // 排序
    filteredNews.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'publishDate':
          comparison = a.publishDate.getTime() - b.publishDate.getTime();
          break;
        case 'viewCount':
          comparison = a.viewCount - b.viewCount;
          break;
        case 'readingTime':
          comparison = a.readingTime - b.readingTime;
          break;
        default:
          comparison = a.publishDate.getTime() - b.publishDate.getTime();
      }

      return sortOrder === 'desc' ? -comparison : comparison;
    });

    // 分页
    const total = filteredNews.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const items = filteredNews.slice(startIndex, endIndex);

    console.log(`Pagination: total=${total}, totalPages=${totalPages}, page=${page}, pageSize=${pageSize}`);
    console.log(`Returning ${items.length} items for current page`);

    const result = {
      items,
      total,
      page,
      pageSize,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    };

    console.log('getNews result:', result);
    return result;
  }

  /**
   * 根据ID获取单篇新闻
   */
  public async getNewsById(id: string): Promise<NewsItem | null> {
    await this.initialize();
    return this.newsData.find(news => news.id === id) || null;
  }

  /**
   * 获取热门新闻
   */
  public async getPopularNews(limit: number = 5): Promise<NewsItem[]> {
    await this.initialize();
    
    return [...this.newsData]
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, limit);
  }

  /**
   * 获取相关新闻
   */
  public async getRelatedNews(newsId: string, limit: number = 4): Promise<NewsItem[]> {
    await this.initialize();
    
    const currentNews = this.newsData.find(news => news.id === newsId);
    if (!currentNews) return [];

    // 根据分类和标签计算相关度
    const relatedNews = this.newsData
      .filter(news => news.id !== newsId)
      .map(news => {
        let score = 0;
        
        // 同分类加分
        if (news.category === currentNews.category) {
          score += 3;
        }
        
        // 共同标签加分
        const commonTags = news.tags.filter(tag => currentNews.tags.includes(tag));
        score += commonTags.length * 2;
        
        return { news, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.news);

    return relatedNews;
  }

  /**
   * 获取统计信息
   */
  public async getStats(): Promise<NewsStats> {
    await this.initialize();

    // 生成分类统计 - 使用正确的属性名 categoryCounts
    const categoryCounts = Object.values(NewsCategory).reduce((acc, category) => {
      acc[category] = this.newsData.filter(news => news.category === category).length;
      return acc;
    }, {} as Record<NewsCategory, number>);

    // 生成标签统计
    const allTags = this.newsData.flatMap(news => news.tags);
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // 生成热门标签列表 - 使用正确的属性名 popularTags
    const popularTags = Object.entries(tagCounts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);

    // 计算总浏览量
    const totalViews = this.newsData.reduce((total, news) => total + news.viewCount, 0);

    return {
      totalNews: this.newsData.length,
      categoryCounts,
      popularTags,
      totalViews
    };
  }

  /**
   * 搜索新闻
   */
  public async searchNews(keyword: string, limit: number = 10): Promise<NewsItem[]> {
    await this.initialize();
    
    if (!keyword.trim()) return [];

    const searchLower = keyword.toLowerCase();
    return this.newsData
      .filter(news =>
        news.title.toLowerCase().includes(searchLower) ||
        news.summary.toLowerCase().includes(searchLower) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
      .slice(0, limit);
  }

  /**
   * 获取分类统计信息
   */
  public async getCategoryStats(): Promise<Record<NewsCategory, number>> {
    await this.initialize();
    
    const stats: Record<NewsCategory, number> = {} as Record<NewsCategory, number>;
    
    // 初始化所有分类为0
    Object.values(NewsCategory).forEach(category => {
      stats[category] = 0;
    });
    
    // 统计每个分类的新闻数量
    this.newsData.forEach(news => {
      stats[news.category]++;
    });
    
    return stats;
  }

  /**
   * 获取标签统计信息
   */
  public async getTagStats(): Promise<Record<string, number>> {
    await this.initialize();
    
    const tagStats: Record<string, number> = {};
    
    // 统计所有标签的使用次数
    this.newsData.forEach(news => {
      news.tags.forEach(tag => {
        tagStats[tag] = (tagStats[tag] || 0) + 1;
      });
    });
    
    return tagStats;
  }
}

// 导出单例实例
export const newsService = NewsService.getInstance();
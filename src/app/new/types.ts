/**
 * 新闻相关的类型定义
 */

// 新闻分类枚举
export enum NewsCategory {
  TECH = 'tech',
  PRODUCT = 'product',
  COMPANY = 'company',
  INDUSTRY = 'industry',
  AI = 'ai'
}

// 新闻分类标签映射
export const NewsCategoryLabels: Record<NewsCategory, string> = {
  [NewsCategory.TECH]: '技术资讯',
  [NewsCategory.PRODUCT]: '产品动态',
  [NewsCategory.COMPANY]: '公司新闻',
  [NewsCategory.INDUSTRY]: '行业动态',
  [NewsCategory.AI]: 'AI前沿'
};

// 新闻分类颜色映射（用于标签显示）
export const NewsCategoryColors: Record<NewsCategory, string> = {
  [NewsCategory.TECH]: 'bg-blue-100 text-blue-800',
  [NewsCategory.PRODUCT]: 'bg-green-100 text-green-800',
  [NewsCategory.INDUSTRY]: 'bg-orange-100 text-orange-800',
  [NewsCategory.AI]: 'bg-purple-100 text-purple-800',
  [NewsCategory.COMPANY]: 'bg-red-100 text-red-800'
};

// 新闻作者信息
export interface NewsAuthor {
  id: string;
  name: string;
  avatar?: string;
  title?: string;
}

// 新闻标签
export interface NewsTag {
  id: string;
  name: string;
  color?: string;
}

// 新闻项目接口
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: NewsCategory;
  tags: string[];          // 标签数组（字符串）
  author: NewsAuthor;
  publishDate: Date;       // 修改为 Date 类型
  updateDate?: Date;       // 修改为 Date 类型
  coverImage?: string;
  readingTime: number;     // 预计阅读时间（分钟）
  viewCount: number;       // 浏览量
  featured?: boolean;      // 是否为推荐文章
  sticky?: boolean;        // 是否置顶
}

// 排序字段类型
export type SortBy = 'publishDate' | 'viewCount' | 'readingTime';

// 排序顺序类型
export type SortOrder = 'asc' | 'desc';

// 新闻列表查询选项
export interface NewsListOptions {
  page?: number;
  pageSize?: number;
  category?: NewsCategory;
  tags?: string[];
  search?: string;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

// 新闻列表查询参数（兼容旧版本）
export interface NewsListParams {
  page?: number;
  pageSize?: number;
  category?: NewsCategory;
  tag?: string;
  keyword?: string;
  sortBy?: 'publishDate' | 'views' | 'readTime';
  sortOrder?: 'asc' | 'desc';
}

// 新闻列表响应
export interface NewsListResponse {
  items: NewsItem[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// 新闻统计信息
export interface NewsStats {
  totalNews: number;
  categoryCounts: Record<NewsCategory, number>;
  popularTags: Array<{ tag: string; count: number }>;
  totalViews: number;
}
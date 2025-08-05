import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NewsCategory, NewsCategoryLabels, NewsItem } from '../types';
import { newsService } from '../services/newsService';

interface NewsSidebarProps {
  currentCategory?: NewsCategory;
  onCategoryChange?: (category?: NewsCategory) => void;
}

/**
 * 新闻侧边栏组件
 * 包含分类筛选、热门新闻、标签云等功能
 */
const NewsSidebar: React.FC<NewsSidebarProps> = ({
  currentCategory,
  onCategoryChange
}) => {
  const [categoryStats, setCategoryStats] = useState<Record<NewsCategory, number>>({} as any);
  const [hotNews, setHotNews] = useState<NewsItem[]>([]);
  const [tagStats, setTagStats] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  /**
   * 加载侧边栏数据
   */
  const loadSidebarData = async () => {
    try {
      setLoading(true);
      
      const [categories, hot, tags] = await Promise.all([
        newsService.getCategoryStats(),
        newsService.getPopularNews(5),
        newsService.getTagStats()
      ]);

      setCategoryStats(categories);
      setHotNews(hot);
      setTagStats(tags);
    } catch (error) {
      console.error('Failed to load sidebar data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSidebarData();
  }, []);

  /**
   * 处理分类点击
   */
  const handleCategoryClick = (category?: NewsCategory) => {
    onCategoryChange?.(category);
  };

  /**
   * 格式化日期显示
   */
  const formatDate = (date: Date): string => {
    const now = new Date();
    const diffTime = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return '今天';
    } else if (diffDays === 1) {
      return '昨天';
    } else if (diffDays < 7) {
      return `${diffDays}天前`;
    } else {
      return date.toLocaleDateString('zh-CN', {
        month: 'short',
        day: 'numeric'
      });
    }
  };

  /**
   * 获取热门标签（按使用次数排序）
   */
  const getPopularTags = (limit: number = 10) => {
    return Object.entries(tagStats)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {/* 加载骨架屏 */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6">
            <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="space-y-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-3 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 分类筛选 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">新闻分类</h3>
        <div className="space-y-2">
          {/* 全部分类 */}
          <button
            onClick={() => handleCategoryClick()}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              !currentCategory
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>全部</span>
              <span className="text-sm text-gray-500">
                {Object.values(categoryStats).reduce((sum, count) => sum + count, 0)}
              </span>
            </div>
          </button>

          {/* 各个分类 */}
          {Object.entries(NewsCategoryLabels).map(([category, label]) => {
            const count = categoryStats[category as NewsCategory] || 0;
            const isActive = currentCategory === category;

            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category as NewsCategory)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{label}</span>
                  <span className="text-sm text-gray-500">{count}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 热门新闻 */}
      {hotNews.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">热门新闻</h3>
          <div className="space-y-4">
            {hotNews.map((news, index) => (
              <Link
                key={news.id}
                to={`/new/${news.id}`}
                className="block group"
              >
                <div className="flex items-start space-x-3">
                  {/* 排名 */}
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index < 3
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>

                  {/* 内容 */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                      {news.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{formatDate(news.publishDate)}</span>
                      <span>•</span>
                      <span>{news.viewCount}次浏览</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 标签云 */}
      {Object.keys(tagStats).length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">热门标签</h3>
          <div className="flex flex-wrap gap-2">
            {getPopularTags(15).map(([tagName, count]) => {
              // 根据使用次数确定标签大小
              const maxCount = Math.max(...Object.values(tagStats));
              const minCount = Math.min(...Object.values(tagStats));
              const range = maxCount - minCount;
              const normalizedSize = range > 0 ? ((count - minCount) / range) * 0.5 + 0.75 : 0.75;
              
              return (
                <Link
                  key={tagName}
                  to={`/new?tag=${encodeURIComponent(tagName)}`}
                  className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  style={{
                    fontSize: `${normalizedSize}rem`,
                    lineHeight: '1.5'
                  }}
                >
                  #{tagName}
                  <span className="ml-1 text-xs text-gray-500">({count})</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 快速链接 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">快速链接</h3>
        <div className="space-y-2">
          <Link
            to="/new?sortBy=publishDate&sortOrder=desc"
            className="block text-gray-600 hover:text-blue-600 transition-colors"
          >
            📅 最新发布
          </Link>
          <Link
            to="/new?sortBy=views&sortOrder=desc"
            className="block text-gray-600 hover:text-blue-600 transition-colors"
          >
            🔥 最多浏览
          </Link>
          <Link
            to="/new?sortBy=readTime&sortOrder=asc"
            className="block text-gray-600 hover:text-blue-600 transition-colors"
          >
            ⚡ 快速阅读
          </Link>
        </div>
      </div>

      {/* 联系信息 */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">有新闻线索？</h3>
        <p className="text-sm text-blue-100 mb-4">
          欢迎向我们提供有价值的新闻线索或投稿
        </p>
        <Link
          to="/contact"
          className="inline-block px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
        >
          联系我们
        </Link>
      </div>
    </div>
  );
};

export default NewsSidebar;
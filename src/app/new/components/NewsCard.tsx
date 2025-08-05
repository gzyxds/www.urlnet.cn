import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem, NewsCategoryLabels } from '../types';

interface NewsCardProps {
  news: NewsItem;
  showCategory?: boolean;
  className?: string;
}

/**
 * 新闻卡片组件
 * 用于在列表页面展示新闻摘要信息
 */
const NewsCard: React.FC<NewsCardProps> = ({
  news,
  showCategory = true,
  className = ''
}) => {


  /**
   * 截取摘要文本
   */
  const truncateSummary = (text: string, maxLength: number = 120): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <article className={`bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:bg-gray-50 transition-all duration-300 overflow-hidden group ${className}`}>
      <Link to={`/new/${news.id}`} className="block h-full">
        {/* 封面图片区域 - 现代简约设计 */}
        <div className="relative aspect-[16/9] bg-gray-50 overflow-hidden">
          {news.coverImage ? (
            <img
              src={news.coverImage}
              alt={news.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            /* 默认封面 - 极简设计 */
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white border border-gray-200 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-500">新闻资讯</p>
              </div>
            </div>
          )}

          {/* 状态标签 - 现代化设计 */}
          <div className="absolute top-4 left-4 flex gap-2">
            {news.sticky && (
              <span className="px-3 py-1.5 bg-black text-white text-xs font-medium tracking-wide">
                置顶
              </span>
            )}
            {news.featured && (
              <span className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium tracking-wide">
                推荐
              </span>
            )}
          </div>

          {/* 分类标签 - 简约设计 */}
          {showCategory && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 bg-white/95 text-gray-800 text-xs font-medium border border-white/50 backdrop-blur-sm">
                {NewsCategoryLabels[news.category]}
              </span>
            </div>
          )}
        </div>

        {/* 内容区域 - 优化留白和层次 */}
        <div className="p-6 flex flex-col h-[calc(100%-theme(spacing.48))]">
          {/* 标题区域 - 增强视觉层次 */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-black mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
              {news.title}
            </h3>
          </div>

          {/* 摘要区域 - 优化可读性 */}
          <div className="mb-6 flex-grow">
            <p className="text-gray-600 text-base line-clamp-3 leading-relaxed font-light">
              {truncateSummary(news.summary, 140)}
            </p>
          </div>

          {/* 标签区域 - 极简设计 */}
          {news.tags.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {news.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-normal hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                  >
                    #{tag}
                  </span>
                ))}
                {news.tags.length > 3 && (
                  <span className="text-gray-400 text-xs self-center font-light">+{news.tags.length - 3}</span>
                )}
              </div>
            </div>
          )}


        </div>
      </Link>
    </article>
  );
};

export default NewsCard;
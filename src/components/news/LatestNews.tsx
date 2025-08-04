import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Calendar, Eye } from 'lucide-react';
import NewsCard from './NewsCard';
import { MarkdownNewsManager as NewsAPI, NewsItem } from '@/lib/newsApi';

interface LatestNewsProps {
  limit?: number;
  showTitle?: boolean;
  variant?: 'grid' | 'list';
  className?: string;
}

const LatestNews: React.FC<LatestNewsProps> = ({
  limit = 4,
  showTitle = true,
  variant = 'grid',
  className = ''
}) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const response = await NewsAPI.getNewsList({
          sortBy: 'latest',
          limit
        });
        setNews(response.data);
      } catch (error) {
        console.error('Failed to load news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [limit]);

  if (loading) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showTitle && (
            <div className="text-center mb-12">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
            </div>
          )}
          <div className={variant === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' : 'space-y-6'}>
            {Array.from({ length: limit }).map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                最新资讯
              </h2>
            </div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              获取艺创AI最新动态、产品更新和行业洞察
            </p>
          </motion.div>
        )}

        {variant === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {news.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Link to={`/news/${item.id}`} className="block">
                  <div className="md:flex">
                    <div className="md:w-1/4">
                      <div className="aspect-video md:aspect-square bg-gradient-to-r from-blue-400 to-purple-500 relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                        {item.featured && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                              精选
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.publishDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {item.views}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {item.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{item.author}</span>
                        <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                          <span>阅读更多</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* 查看更多按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            <span>查看更多新闻</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Loader2,
} from 'lucide-react';
import { MarkdownNewsManager as NewsAPI, NewsItem } from '@/lib/newsApi';
import NewsCard from '@/components/news/NewsCard';

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');

  const categories = ['全部', '产品发布', '案例分析', '行业洞察', '技术分享', '公司动态'];

  const loadNews = async () => {
    setLoading(true);
    try {
      const newsResult = await NewsAPI.getNewsList();
      setNews(newsResult.data || []);
      setFilteredNews(newsResult.data || []);
    } catch (error) {
      console.error('加载新闻失败:', error);
      setNews([]);
      setFilteredNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  // 筛选逻辑
  useEffect(() => {
    let filtered = news.filter(item => {
      const matchesCategory = selectedCategory === '全部' || item.category === selectedCategory;
      return matchesCategory;
    });

    // 排序
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views;
        default:
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      }
    });

    setFilteredNews(filtered);
  }, [news, selectedCategory, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">正在加载新闻...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 页面头部 */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto pt-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              新闻<span className="text-blue-600">资讯</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              探索最新的科技动态、行业洞察和创新趋势
            </motion.p>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full">
          {/* 分类和排序 */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular')}
                className="bg-gray-100 border-gray-300 text-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
              >
                <option value="latest">最新发布</option>
                <option value="popular">最受欢迎</option>
              </select>
            </div>
          </div>

          {/* 新闻列表 */}
          <AnimatePresence>
            {filteredNews.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 mb-6">
                  <Search className="h-20 w-20 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  没有找到相关文章
                </h3>
                <p className="text-gray-500">
                  尝试调整搜索条件或浏览其他分类
                </p>
              </motion.div>
            ) : (
              <motion.div
                 key="content"
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
               >
                {filteredNews.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NewsCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
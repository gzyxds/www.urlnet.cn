import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  TrendingUp, 
  Eye, 
  Clock,
  Tag,
  ChevronRight,
  ChevronDown,
  Star,
  Users,
  BarChart3,
  Loader2,
  RefreshCw,
  Heart
} from 'lucide-react';
import { MarkdownNewsManager as NewsAPI, NewsItem } from '@/lib/newsApi';
import NewsCard from '@/components/news/NewsCard';

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState<'latest' | 'popular'>('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);
  const [popularNews, setPopularNews] = useState<NewsItem[]>([]);
  const [newsStats, setNewsStats] = useState<any>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [popularTags, setPopularTags] = useState<string[]>([]);

  const loadNews = async (showRefreshing = false) => {
    try {
      if (showRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      
      // 并行加载所有数据
      const [newsResult, featured, popular, stats, tags] = await Promise.all([
        NewsAPI.getNewsList(),
        NewsAPI.getFeaturedNews(3),
        NewsAPI.getPopularNews(5),
        NewsAPI.getNewsStats(),
        NewsAPI.getPopularTags(8)
      ]);
      
      setNews(newsResult.data || []);
      setFilteredNews(newsResult.data || []);
      setFeaturedNews(featured || []);
      setPopularNews(popular || []);
      setNewsStats(stats || { totalNews: 0, totalViews: 0, totalLikes: 0 });
      setPopularTags(tags || []);
      
    } catch (error) {
      console.error('加载新闻失败:', error);
      // 设置空数据
      setNews([]);
      setFilteredNews([]);
      setFeaturedNews([]);
      setPopularNews([]);
      setNewsStats({ totalNews: 0, totalViews: 0, totalLikes: 0 });
      setPopularTags([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  // 筛选逻辑
  useEffect(() => {
    if (!news || !Array.isArray(news)) {
      setFilteredNews([]);
      return;
    }
    
    let filtered = news.filter(item => {
      const matchesCategory = selectedCategory === '全部' || item.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
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
  }, [news, selectedCategory, searchTerm, sortBy]);

  // 交互处理函数
  const handleLike = async (id: string | number) => {
    try {
      NewsAPI.toggleLike(String(id));
      // 重新加载数据以更新点赞数
      loadNews(true);
    } catch (error) {
      console.error('点赞失败:', error);
    }
  };

  const handleBookmark = (id: string | number) => {
    // 这里可以添加收藏逻辑
    console.log('收藏新闻:', id);
  };

  const handleShare = (id: string | number) => {
    // 这里可以添加分享逻辑
    console.log('分享新闻:', id);
  };

  const handleRefresh = () => {
    loadNews(true);
  };

  const loadMore = async () => {
    setLoadingMore(true);
    // 这里可以实现分页加载逻辑
    setTimeout(() => {
      setLoadingMore(false);
    }, 1000);
  };

  // 获取所有分类
  const categories = ['全部', ...NewsAPI.getCategories()];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">正在加载新闻...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-32">
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                新闻资讯
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              >
                探索最新的科技动态、行业洞察和创新趋势
              </motion.p>
              
              {/* 统计信息 */}
              {newsStats && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center gap-8 text-sm text-gray-500"
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>{newsStats.totalNews} 篇文章</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{(newsStats.totalViews || 0).toLocaleString()} 总阅读</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{Object.keys(newsStats.categories || {}).length} 个分类</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* 搜索栏 */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="搜索新闻、标签或作者..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* 左侧边栏 */}
          <div className="w-72 flex-shrink-0 hidden lg:block">
            <div className="sticky top-8 space-y-6">
              {/* 分类筛选 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-blue-600" />
                  分类筛选
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-3 transition-all flex items-center justify-between group ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{category}</span>
                      {newsStats && newsStats.categories && newsStats.categories[category] && (
                        <span className="text-xs text-gray-400">
                          {newsStats.categories[category]}
                        </span>
                      )}
                      {selectedCategory === category && (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* 排序选择 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  排序方式
                </h3>
                <div className="space-y-1">
                  {[
                    { value: 'latest', label: '最新发布', icon: Clock },
                    { value: 'popular', label: '最受欢迎', icon: Heart },
                    { value: 'trending', label: '热门趋势', icon: TrendingUp }
                  ].map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setSortBy(value as any)}
                      className={`w-full text-left px-4 py-3 transition-all flex items-center gap-3 ${
                        sortBy === value
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* 热门标签 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-600" />
                  热门标签
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-2 bg-gray-100 text-gray-700 text-sm hover:bg-blue-600 hover:text-white transition-all border border-gray-300 hover:border-blue-600"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* 热门文章 */}
              {featuredNews.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white border border-gray-200 p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    热门文章
                  </h3>
                  <div className="space-y-4">
                    {popularNews.slice(0, 3).map((item, index) => (
                      <Link
                        key={item.id}
                        to={`/news/${item.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </span>
                          {item.imageUrl && (
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 line-clamp-2 text-sm group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                              <span>{item.publishDate}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {item.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}




            </div>
          </div>

          {/* 右侧主要内容 */}
          <div className="flex-1 min-w-0">
            {/* 工具栏 */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 bg-white border border-gray-200 p-6"
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                  刷新
                </button>
                <div className="flex items-center gap-1 bg-gray-100 p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-all ${
                      viewMode === 'grid'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    title="网格视图"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-all ${
                      viewMode === 'list'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                    title="列表视图"
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>共找到 {filteredNews.length} 篇文章</span>
                {selectedCategory !== '全部' && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {selectedCategory}
                  </span>
                )}
              </div>
            </motion.div>
            {/* 新闻列表 */}
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                      : 'grid-cols-1'
                  }`}
                >
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="animate-pulse">
                        <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="flex justify-between">
                          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : filteredNews.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-20 bg-white border border-gray-200"
                >
                  <div className="text-gray-400 mb-6">
                    <Search className="h-20 w-20 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    没有找到相关文章
                  </h3>
                  <p className="text-gray-500 mb-8">
                    尝试调整搜索条件或浏览其他分类
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('全部')
                    }}
                    className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    重置筛选
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                      : 'grid-cols-1'
                  }`}
                >
                  {filteredNews.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NewsCard
                        {...item}
                        variant={viewMode === 'grid' ? 'default' : 'list'}
                        onLike={handleLike}
                        onBookmark={handleBookmark}
                        onShare={handleShare}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* 加载更多按钮 */}
            {!loading && filteredNews.length > 0 && filteredNews.length >= 12 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-16"
              >
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="px-12 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                >
                  {loadingMore ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      加载中...
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      加载更多
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
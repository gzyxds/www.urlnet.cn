import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { NewsItem, NewsCategory, SortBy, SortOrder, NewsListOptions } from './types';
// import { newsService } from './services/newsService';
import { newsService } from './services/newsService';
import NewsCard from './components/NewsCard';
import NewsFilter from './components/NewsFilter';
import NewsPagination from './components/NewsPagination';

/**
 * 新闻列表页面组件
 * 
 * 功能说明：
 * - 展示新闻列表，支持分页显示
 * - 提供多维度筛选功能（分类、标签、搜索）
 * - 支持多种排序方式（时间、浏览量、阅读时间）
 * - 响应式布局，适配桌面端和移动端
 * - 集成SEO优化和页面元数据管理
 */
const NewsListPage: React.FC = () => {
  // URL参数管理
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 页面状态管理
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  // 筛选和排序状态
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [category, setCategory] = useState<NewsCategory | undefined>();
  const [sortBy, setSortBy] = useState<SortBy>('publishDate');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [searchKeyword, setSearchKeyword] = useState('');
  
  // 头部搜索框状态管理
  const [headerSearchInput, setHeaderSearchInput] = useState('');

  // 设置页面元数据
  usePageMetadata({
    title: '新闻资讯 - 最新技术动态与行业洞察',
    description: '获取最新的技术资讯、行业动态和深度分析文章，涵盖人工智能、Web开发、创业投资等多个领域。',
    keywords: '新闻资讯,技术动态,行业分析,人工智能,Web开发,创业投资'
  });

  /**
   * 从URL参数初始化筛选条件
   */
  useEffect(() => {
    const categoryParam = searchParams.get('category') as NewsCategory;
    const sortByParam = searchParams.get('sortBy') as SortBy;
    const sortOrderParam = searchParams.get('sortOrder') as SortOrder;
    const searchParam = searchParams.get('search') || '';
    const pageParam = parseInt(searchParams.get('page') || '1');

    if (categoryParam) setCategory(categoryParam);
    if (sortByParam) setSortBy(sortByParam);
    if (sortOrderParam) setSortOrder(sortOrderParam);
    if (searchParam) setSearchKeyword(searchParam);
    if (pageParam) setCurrentPage(pageParam);
  }, [searchParams]);

  /**
   * 加载新闻列表数据
   */
  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const options: NewsListOptions = {
        page: currentPage,
        pageSize,
        category,
        search: searchKeyword || undefined,
        sortBy,
        sortOrder
      };

      const response = await newsService.getNews(options);
      
      setNewsList(response.items);
      setTotalPages(response.totalPages);
      setTotalItems(response.total);
    } catch (err) {
      console.error('Failed to load news:', err);
      setError('加载新闻列表失败，请稍后重试');
      setNewsList([]);
    } finally {
      setLoading(false);
    }
  };

  // 监听筛选条件变化，重新加载数据
  useEffect(() => {
    loadNews();
  }, [currentPage, pageSize, category, sortBy, sortOrder, searchKeyword]);

  // 同步头部搜索框与主搜索状态
  useEffect(() => {
    setHeaderSearchInput(searchKeyword);
  }, [searchKeyword]);

  /**
   * 更新URL参数
   */
  const updateUrlParams = (params: Record<string, string | number | undefined>) => {
    const newParams = new URLSearchParams(searchParams);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });

    setSearchParams(newParams);
  };

  /**
   * 处理分类变更
   */
  const handleCategoryChange = (newCategory?: NewsCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
    updateUrlParams({ 
      category: newCategory,
      page: undefined // 重置页码
    });
  };

  /**
   * 处理排序变更
   */
  const handleSortChange = (newSortBy: SortBy, newSortOrder: SortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    setCurrentPage(1);
    updateUrlParams({
      sortBy: newSortBy,
      sortOrder: newSortOrder,
      page: undefined
    });
  };

  /**
   * 处理搜索变更
   */
  const handleSearchChange = (keyword: string) => {
    setSearchKeyword(keyword);
    setCurrentPage(1);
    updateUrlParams({
      search: keyword,
      page: undefined
    });
  };

  /**
   * 处理头部搜索框提交
   */
  const handleHeaderSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearchChange(headerSearchInput.trim());
  };



  /**
   * 处理页码变更
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateUrlParams({ page });
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * 处理页面大小变更
   */
  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    updateUrlParams({
      pageSize: newPageSize,
      page: undefined
    });
  };




  return (
    <div className="min-h-screen bg-slate-50/30">
      {/* 添加头部间距 */}
      <div className="h-12 sm:h-16 lg:h-20"></div>
      
      {/* 头部设计 - 参考图片风格的简洁居中布局 */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* 主标题 - 调整为较小字体 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              每日掌握 <span className="text-blue-600">AI</span>行业关键动态
            </h1>
            
            {/* 副标题描述 - 调整为较小字体 */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              加入28,000+专业人士的AI情报网络
            </p>
            
            {/* 搜索区域 - 连接到搜索逻辑 */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleHeaderSearchSubmit}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={headerSearchInput}
                      onChange={(e) => setHeaderSearchInput(e.target.value)}
                      placeholder="搜索AI行业资讯..."
                      className="w-full h-12 pl-12 pr-12 border-2 border-gray-200 bg-white text-black placeholder-gray-400 focus:border-blue-600 focus:outline-none transition-all duration-200 text-sm font-medium"
                    />
                    {/* 搜索图标 */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    {/* 清除按钮 */}
                    {headerSearchInput && (
                      <button
                        type="button"
                        onClick={() => {
                          setHeaderSearchInput('');
                          handleSearchChange('');
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <button 
                    type="submit"
                    className="h-12 px-6 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 whitespace-nowrap"
                  >
                    搜索
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* 筛选组件 - 响应式设计 */}
        <div className="mb-6 sm:mb-8">
          <NewsFilter
            category={category}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onCategoryChange={handleCategoryChange}
            onSortChange={handleSortChange}
          />
        </div>

        {/* 主内容区域 - 响应式全宽显示 */}
        <div className="w-full">
          {/* 加载状态 - 响应式网格 */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(12)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200/60 p-4 sm:p-6 animate-pulse">
                  <div className="w-full h-40 sm:h-48 bg-slate-100 rounded-lg mb-3 sm:mb-4"></div>
                  <div className="h-4 sm:h-5 bg-slate-100 rounded mb-2 sm:mb-3"></div>
                  <div className="h-3 sm:h-4 bg-slate-100 rounded w-3/4 mb-3 sm:mb-4"></div>
                  <div className="flex space-x-2">
                    <div className="h-2 sm:h-3 bg-slate-100 rounded w-12 sm:w-16"></div>
                    <div className="h-2 sm:h-3 bg-slate-100 rounded w-12 sm:w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 错误状态 - 响应式布局 */}
          {error && (
            <div className="bg-white rounded-xl border border-slate-200/60 p-6 sm:p-8 md:p-12 text-center">
              <div className="text-slate-400 mb-3 sm:mb-4">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-slate-700 mb-2">加载失败</h3>
              <p className="text-slate-500 mb-4 sm:mb-6 text-xs sm:text-sm px-4 sm:px-0">{error}</p>
              <button
                onClick={loadNews}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-xs sm:text-sm font-medium"
              >
                重新加载
              </button>
            </div>
          )}

          {/* 新闻列表 - 响应式网格布局 */}
          {!loading && !error && (
            <>
              {newsList.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    {newsList.map((news) => (
                      <NewsCard key={news.id} news={news} />
                    ))}
                  </div>

                  {/* 分页组件 - 响应式居中 */}
                  <div className="flex justify-center px-4 sm:px-0">
                    <NewsPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalItems={totalItems}
                      itemsPerPage={pageSize}
                      onPageChange={handlePageChange}
                      onPageSizeChange={handlePageSizeChange}
                      showPageSizeSelector={true}
                    />
                  </div>
                </>
              ) : (
                /* 空状态 - 响应式布局 */
                <div className="bg-white rounded-xl border border-slate-200/60 p-6 sm:p-8 md:p-12 text-center">
                  <div className="text-slate-300 mb-3 sm:mb-4">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-700 mb-2">暂无新闻</h3>
                  <p className="text-slate-500 mb-4 sm:mb-6 text-xs sm:text-sm px-4 sm:px-0">
                    {searchKeyword || category
                      ? '没有找到符合条件的新闻，请尝试调整筛选条件'
                      : '还没有发布任何新闻，请稍后再来查看'
                    }
                  </p>
                  {(searchKeyword || category) && (
                    <button
                      onClick={() => {
                        setCategory(undefined);
                        setSearchKeyword('');
                        setHeaderSearchInput('');
                        setCurrentPage(1);
                        setSearchParams(new URLSearchParams());
                      }}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-xs sm:text-sm font-medium"
                    >
                      清除筛选条件
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsListPage;
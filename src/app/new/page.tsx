import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, Post } from './lib/posts';
import { usePageMetadata } from '@/hooks/use-page-metadata';

export default function BlogList() {
  usePageMetadata({
    title: '艺创AI技术博客 - 行业动态与技术见解',
    description: '浏览艺创AI技术博客，获取最新的人工智能行业动态、技术深度解析、最佳实践分享以及企业数字化转型案例。',
    keywords: '艺创AI博客, 人工智能技术, AI行业动态, 数字化转型, 技术见解, 最佳实践, AI新闻'
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [loading, setLoading] = useState(true);
  const pageSize = 8;

  useEffect(() => {
    getAllPosts().then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  // 提取所有分类
  const categories = useMemo(() => {
    const cats = new Set(posts.map(p => p.category));
    return ['全部', ...Array.from(cats)];
  }, [posts]);

  // 过滤逻辑
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory = selectedCategory === '全部' || post.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  // 分页状态
  const [currentPage, setCurrentPage] = useState(1);

  // 分页数据
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredPosts.slice(startIndex, startIndex + pageSize);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / pageSize);

  // 搜索或分类变化时重置页码
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">加载中...</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <main className="flex-grow pt-32 pb-16 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">技术博客</h1>
          <p className="text-xl text-gray-600">分享技术见解、最佳实践和行业动态</p>
        </div>

        {/* 搜索与过滤 */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="搜索文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 文章列表 */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedPosts.map(post => (
                <Link
                  key={post.id}
                  to={`/new/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden relative">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                        <svg className="w-12 h-12 text-blue-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/95 backdrop-blur-sm text-blue-600 shadow-sm border border-blue-50">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                      <span>{post.publishDate.toLocaleDateString('zh-CN')}</span>
                      {post.tags.length > 0 && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span className="text-gray-400">#{post.tags[0]}</span>
                        </>
                      )}
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed mb-4 flex-grow">
                      {post.summary}
                    </p>

                    <div className="flex items-center text-blue-600 text-xs font-medium group-hover:gap-1.5 transition-all mt-auto pt-4 border-t border-gray-50">
                      阅读全文
                      <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* 分页控制 */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-2">
                <button
                  onClick={() => {
                    setCurrentPage(p => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  上一页
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setCurrentPage(p => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  下一页
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">未找到相关文章</h3>
            <p className="text-gray-500">尝试调整搜索关键词或分类</p>
          </div>
        )}
      </main>
    </div>
  );
}

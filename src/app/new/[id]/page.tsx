import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { NewsItem } from '../types';
import { newsService } from '../services/newsService';
import MarkdownRenderer from '../components/MarkdownRenderer';
import RelatedNews from '../components/RelatedNews';
import Breadcrumb, { generateNewsBreadcrumb } from '../components/Breadcrumb';

/**
 * 新闻详情页面组件
 * 
 * 功能说明：
 * - 展示单篇新闻的完整内容
 * - 提供面包屑导航和返回功能
 * - 显示文章元信息（作者、发布时间、阅读时间等）
 * - 渲染Markdown格式的文章内容
 * - 推荐相关新闻
 * - 动态设置页面SEO元数据
 */
const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // 页面状态管理
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * 加载新闻详情数据
   */
  const loadNewsDetail = async () => {
    if (!id) {
      setError('新闻ID不存在');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const newsData = await newsService.getNewsById(id);
      
      if (!newsData) {
        setError('新闻不存在或已被删除');
        setNews(null);
      } else {
        setNews(newsData);
      }
    } catch (err) {
      console.error('Failed to load news detail:', err);
      setError('加载新闻详情失败，请稍后重试');
      setNews(null);
    } finally {
      setLoading(false);
    }
  };

  // 页面初始化时加载数据
  useEffect(() => {
    loadNewsDetail();
  }, [id]);

  // 动态设置页面元数据
  usePageMetadata({
    title: news ? `${news.title} - 新闻详情` : '新闻详情',
    description: news?.summary || '查看新闻详细内容',
    keywords: news?.tags.join(',') || '新闻,资讯'
  });

  /**
   * 格式化日期显示
   */
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  /**
   * 处理返回操作
   */
  const handleGoBack = () => {
    navigate('/new');
  };

  // 加载状态
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50/30">
        <div className="container mx-auto px-4 py-8">
          {/* 面包屑骨架屏 */}
          <div className="mb-6">
            <div className="h-4 bg-slate-200 rounded w-64 animate-pulse"></div>
          </div>

          {/* 文章头部骨架屏 */}
          <div className="bg-white rounded-xl border border-slate-200/60 p-8 mb-8">
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2 mb-6 animate-pulse"></div>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full animate-pulse"></div>
                <div className="h-4 bg-slate-200 rounded w-20 animate-pulse"></div>
              </div>
              <div className="h-4 bg-slate-200 rounded w-32 animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded w-24 animate-pulse"></div>
            </div>

            <div className="w-full h-64 bg-slate-200 rounded-lg animate-pulse"></div>
          </div>

          {/* 内容骨架屏 */}
          <div className="bg-white rounded-xl border border-slate-200/60 p-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="mb-4">
                <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error || !news) {
    return (
      <div className="min-h-screen bg-slate-50/30">
        <div className="container mx-auto px-4 py-8">
          {/* 面包屑导航 */}
          <div className="mb-6">
            <Breadcrumb items={generateNewsBreadcrumb()} />
          </div>

          {/* 错误提示 */}
          <div className="bg-white rounded-xl border border-slate-200/60 p-12 text-center">
            <div className="text-slate-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              {error || '新闻不存在'}
            </h3>
            <p className="text-slate-500 mb-6 text-sm">
              {error === '新闻不存在或已被删除' 
                ? '您访问的新闻可能已被删除或链接有误'
                : '加载新闻内容时出现问题，请稍后重试'
              }
            </p>
            <div className="space-x-3">
              <button
                onClick={handleGoBack}
                className="px-5 py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                返回新闻列表
              </button>
              {error && error !== '新闻不存在或已被删除' && (
                <button
                  onClick={loadNewsDetail}
                  className="px-5 py-2.5 bg-slate-500 text-white rounded-lg hover:bg-slate-600 transition-colors text-sm font-medium"
                >
                  重新加载
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/30">
      <div className="container mx-auto px-4 py-8">
        {/* 面包屑导航 */}
        <div className="mb-8">
          <Breadcrumb items={generateNewsBreadcrumb(news.title)} />
        </div>

        {/* 左右布局容器 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧内容区域 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 文章头部 */}
            <article className="bg-white rounded-xl border border-slate-200/60 overflow-hidden">
              {/* 封面图片 */}
              {news.coverImage && (
                <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
                  <img
                    src={news.coverImage}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // 图片加载失败时隐藏
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}

              <div className="p-8">
                {/* 特殊标记 */}
                <div className="flex space-x-3 mb-6">
                  {news.sticky && (
                    <span className="px-3 py-1.5 bg-red-500/10 text-red-600 text-sm font-semibold rounded-lg border border-red-200">
                      🔝 置顶
                    </span>
                  )}
                  {news.featured && (
                    <span className="px-3 py-1.5 bg-amber-500/10 text-amber-600 text-sm font-semibold rounded-lg border border-amber-200">
                      ⭐ 推荐
                    </span>
                  )}
                </div>

                {/* 标题和摘要 */}
                <div className="mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                    {news.title}
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {news.summary}
                  </p>
                </div>

                {/* 文章元信息 */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-slate-500 pb-6 border-b border-slate-100">
                  {/* 作者信息 */}
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/scenarios/logo.svg"
                      alt="网站Logo"
                      className="w-10 h-10 rounded-full object-cover bg-white border-2 border-slate-200 p-1"
                    />
                    <div>
                      <div className="font-semibold text-slate-700">{news.author.name}</div>
                      <div className="text-xs text-slate-500">{news.author.title}</div>
                    </div>
                  </div>

                  {/* 发布时间 */}
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{formatDate(news.publishDate)}</span>
                  </div>

                  {/* 阅读时间 */}
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">约 {news.readingTime} 分钟阅读</span>
                  </div>
                </div>

                {/* 标签 */}
                {news.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {news.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>

            {/* 文章内容 */}
            <div className="bg-white rounded-xl border border-slate-200/60 p-8">
              <MarkdownRenderer content={news.content} />
            </div>

            {/* 操作按钮 */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleGoBack}
                className="flex items-center space-x-2 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>返回新闻列表</span>
              </button>

              {/* 分享按钮 */}
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: news.title,
                        text: news.summary,
                        url: window.location.href
                      });
                    } else {
                      // 复制链接到剪贴板
                      navigator.clipboard.writeText(window.location.href);
                      alert('链接已复制到剪贴板');
                    }
                  }}
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span>分享</span>
                </button>
              </div>
            </div>
          </div>

          {/* 右侧边栏 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* 文章信息卡片 */}
              <div className="bg-white rounded-xl border border-slate-200/60 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">文章信息</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">发布时间</span>
                    <span className="text-slate-700 font-medium">{formatDate(news.publishDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">阅读时间</span>
                    <span className="text-slate-700 font-medium">{news.readingTime} 分钟</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">分类</span>
                    <span className="text-slate-700 font-medium">{news.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">作者</span>
                    <span className="text-slate-700 font-medium">{news.author.name}</span>
                  </div>
                </div>
              </div>

              {/* 目录导航（可选） */}
              <div className="bg-white rounded-xl border border-slate-200/60 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">快速导航</h3>
                <div className="space-y-2 text-sm">
                  <a href="#content" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                    文章内容
                  </a>
                  <a href="#related" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                    相关推荐
                  </a>
                </div>
              </div>

              {/* 相关新闻 */}
              <div id="related">
                <RelatedNews currentNewsId={news.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';
import { getAllPosts, Post } from '@/app/new/lib/posts';
import { NewsCategoryLabels } from '@/app/new/types';
import { cn } from '@/lib/utils';

/**
 * 新闻组件 - 在首页展示最新新闻
 * 显示最新的3-4条新闻，支持点击跳转到新闻详情页
 */
const NewsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then(data => {
      setPosts(data.slice(0, 4)); // 只显示前4条新闻
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse h-8 w-48 bg-gray-200 rounded mx-auto mb-4" />
            <div className="animate-pulse h-4 w-64 bg-gray-200 rounded mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="relative py-20 lg:py-32 bg-gray-50/50 dark:bg-gray-900 overflow-hidden" id="news">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 dark:bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 头部区域 */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 dark:bg-blue-500/10 text-primary dark:text-blue-400 text-sm font-medium rounded-full mb-6 border border-primary/20 dark:border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Newspaper className="w-4 h-4 mr-2" />
            最新动态
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            行业<span className="text-primary dark:text-blue-400 mx-2 relative inline-block">
              <span className="relative z-10">资讯</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 dark:bg-blue-500/20 -rotate-1 z-0" />
            </span>动态
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            了解最新的 AI 技术趋势、产品动态和行业洞察
          </motion.p>
        </motion.div>

        {/* 新闻卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Link
                to={`/new/${post.slug}`}
                className="group h-full flex flex-col"
              >
                <div className="relative h-48 lg:h-56 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-5 group-hover:shadow-xl group-hover:shadow-primary/10 dark:group-hover:shadow-primary/5 transition-all duration-500">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                      <Newspaper className="w-12 h-12 text-blue-500/30" />
                    </div>
                  )}
                  {/* 分类标签 */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-blue-600 dark:text-blue-400 shadow-sm border border-blue-50 dark:border-blue-900/50">
                      {NewsCategoryLabels[post.category] || '资讯'}
                    </span>
                  </div>
                  {/* 悬停遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="flex flex-col flex-grow">
                  {/* 元信息 */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground dark:text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.publishDate.toLocaleDateString('zh-CN')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTime} 分钟</span>
                    </div>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-base lg:text-lg font-bold text-foreground dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  {/* 摘要 */}
                  <p className="text-sm text-muted-foreground dark:text-gray-400 line-clamp-2 leading-relaxed mb-4 flex-grow">
                    {post.summary}
                  </p>

                  {/* 阅读更多 */}
                  <div className="flex items-center text-primary dark:text-blue-400 text-sm font-medium group-hover:gap-2 transition-all mt-auto pt-3 border-t border-border/50 dark:border-gray-700/50">
                    阅读全文
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/new"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary dark:bg-blue-600 text-primary-foreground dark:text-white rounded-xl font-semibold hover:bg-primary/90 dark:hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-blue-600/20 transition-all duration-300"
          >
            查看全部新闻
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;

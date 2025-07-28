"use client";

import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import DemoShowcase from './components/demo';

/**
 * 产品演示页面
 * @returns {JSX.Element} 页面组件
 */
const DemoPage = () => {
  // 设置页面元数据，用于SEO优化
  usePageMetadata({
    title: '艺创AI_AI系统源码_AI数字人源码_AI数字人系统源码_产品演示',
    description: '艺创AI提供全方位的AI解决方案，包括AI数字人SaaS系统、全能知识库、聊天绘画系统和论文写作系统。立即体验我们的产品特性，探索AI带来的无限可能',
    keywords: '艺创AI,AI数字人,知识库,聊天绘画,论文写作,SaaS系统,PHP系统,Java系统,AI演示'
  });

  return (
    // 页面主容器，采用白色背景
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        {/* 英雄区域，展示核心标语 */}
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-32">
          {/* 背景装饰 - 渐变背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 opacity-70"></div>
          
          {/* 背景装饰 - 几何图形 */}
          <div className="absolute top-24 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-32 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* 背景装饰 - 网格图案 */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEuNWE0LjUgNC41IDAgMDA0LjUtNC41IDQuNSA0LjUgMCAwMC00LjUtNC41SDM2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIgZmlsbD0iI2YwZjBmMCIvPjxwYXRoIGQ9Ik0yIDM2djEuNWE0LjUgNC41IDAgMDA0LjUgNC41IDQuNSA0LjUgMCAwMDQuNS00LjVWMzZoMThjOS45NCAwIDE4LTguMDYgMTgtMThIMzZjMCA5Ljk0LTguMDYgMTgtMTggMThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIiBmaWxsPSIjZjBmMGYwIi8+PC9nPjwvc3ZnPg==')] opacity-[0.15]"></div>
          
          {/* 装饰元素 - 浮动圆点 */}
          <div className="absolute top-20 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-1/4 w-3 h-3 bg-indigo-500 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-purple-400 rounded-full opacity-60"></div>
          
          {/* 内容容器 */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {/* 主标题 */}
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                每一款产品都用心打造
              </h1>
              {/* 副标题 */}
              <p className="mt-6 text-lg leading-8 text-gray-600">
                联系客服，获取最新版本体验
              </p>
              {/* 操作按钮 */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-blue-500 hover:to-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
                >
                  开始使用
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  了解更多 <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 产品展示区域 */}
        <DemoShowcase />
      </main>
    </div>
  );
};

export default DemoPage;
"use client";

import React from 'react';
import Header from '@/components/header';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import ProductComponent from '@/components/Productcomponent';

/**
 * 产品演示页面
 * @returns {JSX.Element} 页面组件
 */
const ProductsPage = () => {
  // 设置页面元数据，用于SEO优化
  usePageMetadata({
    title: '产品中心_艺创AI_AI系统源码_AI系统_AI系统源码下载_AI系统源码',
    description: '艺创AI提供AI数字人源码、AI数字人系统源码、AI数字人SaaS系统源码等产品,支持私有化部署,提供数字人克隆、语音合成、视频生成等功能,是企业打造数字化转型的理想选择',
    keywords: 'AI系统源码,AI数字人系统,聊天绘画系统,AI平台源码,AI创作系统,AI官网源码,AI变现系统,AI论文写作,AI解决方案'
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
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
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
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
                >
                  联系客服
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
                >
                  下载源码 <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 产品展示区域 */}
        <ProductComponent />
      </main>
    </div>
  );
};

export default ProductsPage;
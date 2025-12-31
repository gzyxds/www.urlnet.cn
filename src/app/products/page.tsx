"use client";

import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePageMetadata } from '@/hooks/use-page-metadata';
import ProductComponent from '@/components/ProductShowcase';

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

  /**
   * 处理联系客服按钮点击事件
   * 触发BackToTop组件中的二维码弹窗
   */
  const handleContactService = () => {
    // 触发自定义事件，让BackToTop组件显示二维码弹窗
    window.dispatchEvent(new CustomEvent('showQRCodeModal'));
  };

  return (
    // 页面主容器，采用白色背景
    <div className="bg-white text-gray-800">
      <main>
        {/* 简约英雄区域 - 调整高度，使其更加紧凑 */}
        <section className="relative bg-slate-100 border-b border-gray-100">
          <div className="container mx-auto px-6 py-16 sm:py-18 lg:py-20">
            <div className="max-w-4xl mx-auto text-center flex flex-col justify-center min-h-[300px] sm:min-h-[320px] lg:min-h-[350px]">
              {/* 内容区域 - 使用 flex 布局确保垂直居中 */}
              <div className="flex flex-col items-center justify-center space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center space-y-4"
                >
                  {/* 产品标签徽章 */}
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" />
                    精心打造每一款产品
                  </div>

                  {/* 主标题 */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                    产品中心
                  </h1>

                  {/* 副标题描述 */}
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发，包含PC端、H5端、小程序端、APP端
                  </p>
                </motion.div>

                {/* 操作按钮组 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3"
                    onClick={handleContactService}
                  >
                    联系客服
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3"
                  >
                    下载源码
                  </Button>
                </motion.div>
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

"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePageMetadata } from '@/hooks/use-page-metadata';
import DemoShowcase from './components/demo';
import Contact from '@/components/ContactSection';

/**
 * 产品演示页面
 * @returns {JSX.Element} 页面组件
 */
const DemoPage = () => {
  // 设置页面元数据，用于SEO优化
  usePageMetadata({
    title: '产品演示_艺创AI_AI系统源码_AI数字人源码_AI数字人系统源码',
    description: '艺创AI提供全方位的AI解决方案，包括AI数字人SaaS系统、全能知识库、聊天绘画系统和论文写作系统。立即体验我们的产品特性，探索AI带来的无限可能',
    keywords: '艺创AI,AI数字人,知识库,聊天绘画,论文写作,SaaS系统,PHP系统,Java系统,AI演示'
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
    <>
      <div className="min-h-screen bg-slate-50/30">
        <div className="h-16 lg:h-20 bg-white"></div>

        {/* 简约英雄区域 */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
          {/* 背景装饰 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
          </div>

          <div className="container relative z-10 mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100/50 mb-8">
                  <Sparkles className="w-3.5 h-3.5 mr-2" />
                  用科技创造无限可能
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                  产品<span className="text-blue-600">体验中心</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发，包含PC端、H5端、小程序端、APP端，全方位满足您的业务需求。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-blue-600 text-white shadow-lg shadow-blue-900/10 hover:shadow-blue-600/20 transition-all rounded-xl h-12 px-8"
                  onClick={() => window.open('https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20', '_blank')}
                >
                  立即购买
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all rounded-xl h-12 px-8"
                  onClick={handleContactService}
                >
                  联系我们
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <main className="relative z-10 -mt-10 container mx-auto px-4 pb-20">
          {/* 产品展示区域 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-100/50 overflow-hidden">
             <DemoShowcase />
          </div>
        </main>
      </div>
      <Contact />
    </>
  );
};

export default DemoPage;

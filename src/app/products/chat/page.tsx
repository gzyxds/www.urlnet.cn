"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Mic, Tv, PenTool } from "lucide-react";
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ChatPage = () => {
  const [activeScenario, setActiveScenario] = useState('chat');
  
  usePageMetadata({
    title: '艺创AI_AI系统源码_AI智能聊天系统_AI绘画系统',
    description: '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
    keywords: 'AI系统源码,AI智能聊天系统,AI绘画系统,艺创AI'
  });

  // 常用样式常量
  const buttonPrimary = "bg-blue-600 hover:bg-blue-700 text-white";
  const buttonSecondary = "border-blue-600 text-blue-600 hover:bg-blue-50";
  const iconContainer = "w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center";
  const sectionPadding = "py-20";
  const containerBase = "container mx-auto px-4";

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 - 响应式现代化设计 */}
      <section className="relative min-h-screen sm:min-h-[80vh] md:min-h-screen flex items-center overflow-hidden">
        {/* 动态渐变背景 - 响应式优化 */}
        <div className="absolute inset-0 bg-white">
          {/* 动态光效 - 适配不同屏幕尺寸 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
          
          {/* 网格背景 - 响应式网格大小 */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse" className="sm:w-10 sm:h-10">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2563eb" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* 响应式容器 - 优化不同设备的内边距 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* 顶部状态标签 - 响应式设计 */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/90 backdrop-blur-md border border-blue-200 text-black shadow-lg">
              <div className="flex items-center mr-2 sm:mr-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-pulse mr-1 sm:mr-2"></div>
                <span className="text-xs sm:text-sm font-medium">系统在线</span>
              </div>
              <div className="h-3 sm:h-4 w-px bg-blue-600 mx-2 sm:mx-3"></div>
              <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent font-bold">
                V3.0 全新发布
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* 左侧内容区 - 响应式优化 */}
            <div className="text-center lg:text-left">
              {/* 主标题 - 响应式字体大小 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black mb-6 sm:mb-8 leading-tight">
                <span className="block">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                    艺创AI
                  </span>
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
                  智能聊天绘画系统
                </span>
              </h1>

              {/* 副标题 - 响应式字体和间距 */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                集成最新GPT-4、DALL-E 3、Midjourney等顶级AI模型，
                <span className="text-blue-600 font-semibold">一站式AI创作平台</span>，
                让创意无限可能
              </p>

              {/* 核心特性标签 - 响应式布局 */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 backdrop-blur-sm rounded-full text-blue-600 text-xs sm:text-sm border border-blue-200">
                  🤖 智能对话
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 backdrop-blur-sm rounded-full text-blue-600 text-xs sm:text-sm border border-blue-300">
                  🎨 AI绘画
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-300">
                  ✍️ 智能创作
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 backdrop-blur-sm rounded-full text-gray-800 text-xs sm:text-sm border border-gray-300">
                  💰 营销变现
                </span>
              </div>
              
              {/* 行动按钮组 - 响应式按钮布局 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-600 hover:to-blue-600 text-white px-6 py-2 h-auto text-sm sm:text-base font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  立即体验
                </Button>
                <Button variant="outline" className="border-2 border-black text-black hover:bg-gray-100 backdrop-blur-sm px-6 py-2 h-auto text-sm sm:text-base font-medium rounded-full">
                  观看演示
                </Button>
              </div>

              {/* 实时数据展示 - 响应式网格 */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">1000+</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">企业用户</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">50万+</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">AI创作</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">99.9%</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">系统稳定</div>
                </div>
              </div>
            </div>

            {/* 右侧展示区 - 响应式优化 */}
            <div className="relative mt-8 lg:mt-0">
              {/* 主展示容器 - 响应式尺寸 */}
              <div className="relative">
                {/* 展示卡片 - 响应式内边距 */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
                  {/* 顶部状态栏 - 响应式布局 */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 bg-blue-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">艺创AI助手</h3>
                        <p className="text-xs sm:text-sm text-gray-500">智能对话 | 图像生成</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">在线服务中</span>
                      <span className="text-xs text-gray-600 sm:hidden">在线</span>
                    </div>
                  </div>

                  {/* 对话展示区 - 响应式设计 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 mb-4 sm:mb-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex gap-2 sm:gap-3">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <div className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none p-2 sm:p-3 shadow-sm max-w-xs">
                          <p className="text-gray-800 text-xs sm:text-sm">您好！我可以帮您进行AI创作、图片生成等服务</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 sm:gap-3 justify-end">
                        <div className="bg-blue-600 rounded-xl sm:rounded-2xl rounded-tr-none p-2 sm:p-3 shadow-sm max-w-xs">
                          <p className="text-white text-xs sm:text-sm">请帮我生成一张未来科技城市的图片</p>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 功能展示区 - 响应式网格 */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl p-2 sm:p-3 text-white">
                      <PenTool className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2" />
                      <h4 className="font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">AI创作</h4>
                      <p className="text-xs text-blue-100 hidden sm:block">智能文案生成</p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg sm:rounded-xl p-2 sm:p-3 text-white">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <h4 className="font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">AI绘画</h4>
                      <p className="text-xs text-indigo-100 hidden sm:block">图像智能生成</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl p-2 sm:p-3 text-white">
                      <Mic className="w-4 h-4 sm:w-5 sm:h-5 mb-1 sm:mb-2" />
                      <h4 className="font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">语音助手</h4>
                      <p className="text-xs text-purple-100 hidden sm:block">智能语音交互</p>
                    </div>
                  </div>
                </div>

                {/* 装饰浮动元素 - 响应式位置和大小 */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg animate-float">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Video className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      AI数字人
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg animate-float animation-delay-2000">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Tv className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                    <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      4K超清
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 自定义CSS动画样式 */}
         <style dangerouslySetInnerHTML={{
           __html: `
             @keyframes float {
               0%, 100% { transform: translateY(0px); }
               50% { transform: translateY(-10px); }
             }
             .animate-float {
               animation: float 3s ease-in-out infinite;
             }
             .animation-delay-2000 {
               animation-delay: 2s;
             }
             .animation-delay-4000 {
               animation-delay: 4s;
             }
             .rotate-3d {
               transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
             }
           `
         }} />
      </section>

      {/* 底部滚动提示 - 移动到容器外部下方显示，增加底部间距 */}
      <div className="relative flex justify-center py-8 pb-16 bg-white">
        <div className="flex flex-col items-center text-gray-700">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">探索更多功能</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-blue-600 rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-blue-600 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      
      {/* 产品优势 - 简约风格 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI智能产品优势</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">多维度产品优势，助力企业智能化升级</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 产品卡片1 - AI对话 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">AI对话</h3>
                  <div className="text-blue-600 font-medium">智能对话</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">对接ChatAI接口，AI秒回复，让您在工作中得心应手</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">AI秒级回复</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">提供精准回答和服务</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">工作助手，得心应手</span>
                </li>
              </ul>
            </div>
            
            {/* 产品卡片2 - AI创作 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">AI创作</h3>
                  <div className="text-blue-600 font-medium">智能创作</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">根据不同模型进行提问，AI会针对输入的问题进行深度创作</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">多模型支持</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">深度创作能力</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">提高创作效率</span>
                </li>
              </ul>
            </div>
            
            {/* 产品卡片3 - AI技能 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">AI技能</h3>
                  <div className="text-blue-600 font-medium">技能模型</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">可定义不同的技能模型，技能分类得越细，AI回答得越准确</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">自定义技能模型</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">精准问答匹配</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">细分领域专精</span>
                </li>
              </ul>
            </div>
            
            {/* 产品卡片4 - VIP会员 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">VIP会员</h3>
                  <div className="text-blue-600 font-medium">无限使用</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">会员期间不消耗次数，可无限使用，实现运营收益</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">无限次数使用</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">会员专属权益</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">转化效果好</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 演示中心 - 优化布局结构 */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 - 简化结构 */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-100 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 左侧内容 - 减少嵌套 */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                在线演示
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">艺创AI-聊天绘画系统<br />演示中心</h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                通过我们的在线演示系统，您可以亲身体验AI聊天绘画系统的强大功能和直观界面，无需安装，即刻体验。
              </p>
              
              {/* 演示账号信息 - 优化结构 */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium">演示账号信息</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">PC端后台</p>
                      <p className="text-xs text-gray-500">https://ai.xxx.com/admin/login</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">admin</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">123456</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">代理商后台</p>
                      <p className="text-xs text-gray-500">https://ai.xxx.com/agent/login</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">admin</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">123456</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">前端演示</p>
                      <p className="text-xs text-gray-500">https://ai.xxx.com/index</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">admin</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">123456</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full">
                        访问
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  立即体验
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full">
                  联系客服
                </Button>
              </div>
            </div>
            
            {/* 右侧内容 - 简化嵌套结构 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* 主要演示图 */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://artaigc.cn/assets/ai.svg" 
                    alt="AI聊天绘画系统演示界面" 
                    className="w-full rounded-lg"
                  />
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">聊天绘画系统管理平台</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有聊天绘画系统资产</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* 二维码 */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <img 
                    src="/images/qrcode.png" 
                    alt="演示二维码" 
                    className="w-24 h-24 bg-white rounded-md"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">扫码体验移动端</p>
                </div>
                
                {/* 装饰元素 */}
                <div className="absolute -top-6 -left-6 bg-blue-600 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">在线演示</p>
                      <p className="text-xs text-blue-100">实时体验</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* 功能特色区域 - 优化布局结构 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* 标题区域 - 简化结构 */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              功能特色
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
              丰富的功能特色，满足多种业务需求
            </p>
          </div>

          <Tabs defaultValue="virtualIP" className="w-full mx-auto">
            {/* 标签导航 - 简化设计 */}
            <TabsList className="flex w-full mb-16 bg-transparent">
              <TabsTrigger 
                value="virtualIP" 
                className="flex-1 text-center py-4 px-6 text-base font-medium transition-all duration-200 bg-transparent border-0 rounded-none
                data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent
                data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900"
              >
                AI对话
              </TabsTrigger>
              <TabsTrigger 
                value="digitalEmployee" 
                className="flex-1 text-center py-4 px-6 text-base font-medium transition-all duration-200 bg-transparent border-0 rounded-none
                data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent
                data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900"
              >
                智能创作
              </TabsTrigger>
              <TabsTrigger 
                value="contentCreation" 
                className="flex-1 text-center py-4 px-6 text-base font-medium transition-all duration-200 bg-transparent border-0 rounded-none
                data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent
                data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900"
              >
                AI绘画
              </TabsTrigger>
              <TabsTrigger 
                value="virtualLive" 
                className="flex-1 text-center py-4 px-6 text-base font-medium transition-all duration-200 bg-transparent border-0 rounded-none
                data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent
                data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:text-gray-900"
              >
                AI技能
              </TabsTrigger>
            </TabsList>

            {/* AI对话功能 - 优化卡片结构 */}
            <TabsContent value="virtualIP" className="animate-in fade-in-50 duration-500">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                <div className="flex flex-col xl:flex-row items-center gap-16">
                  {/* 左侧内容区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2 space-y-6">
                    <div className="space-y-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                        <Users className="w-3 h-3 mr-1.5" />
                        AI对话解决方案
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        文案AI对话
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        对接GPT接口，AI秒级回复，让您在工作中得心应手，提供更加精准的回答和服务，助力高效办公与内容创作。
                      </p>
                    </div>

                    {/* 功能特点列表 - 改为语义化列表 */}
                    <ul className="space-y-4">
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">AI秒级回复</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">对接GPT接口，快速响应您的每一个问题</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">精准内容生成</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">智能理解需求，生成高质量文案和专业解答</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">高效办公助手</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">提升工作效率，助力内容创作与日常沟通</p>
                        </div>
                      </li>
                    </ul>

                    <div className="pt-5">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 text-base hover:scale-105">
                        查看详情
                      </Button>
                    </div>
                  </div>
                  
                  {/* 右侧图片区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-200/50">
                      <img 
                        src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png" 
                        alt="文案AI对话应用场景" 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                              <Users className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold">文案AI对话解决方案</p>
                              <p className="text-gray-600 text-sm">AI赋能高效沟通与内容创作</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AI智能创作功能 - 优化卡片结构 */}
            <TabsContent value="digitalEmployee" className="animate-in fade-in-50 duration-500">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                <div className="flex flex-col xl:flex-row items-center gap-16">
                  {/* 左侧内容区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2 space-y-6">
                    <div className="space-y-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                        <Bot className="w-3 h-3 mr-1.5" />
                        智能创作解决方案
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        AI智能创作
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        根据不同模型进行提问，AI会针对输入的问题进行深度创作，显著提升内容创作能力，满足多样化创作需求。
                      </p>
                    </div>

                    {/* 功能特点列表 - 改为语义化列表 */}
                    <ul className="space-y-4">
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">多模型支持</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">支持多种AI模型，满足不同场景创作需求</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">深度内容生成</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">根据输入问题，AI进行深度理解与创作</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">提升创作能力</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">高效生成高质量内容，助力创意表达</p>
                        </div>
                      </li>
                    </ul>

                    <div className="pt-5">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 text-base hover:scale-105">
                        查看详情
                      </Button>
                    </div>
                  </div>
                  
                  {/* 右侧图片区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-200/50">
                      <img 
                        src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/create.png" 
                        alt="AI智能创作应用场景" 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                              <Bot className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold">AI智能创作解决方案</p>
                              <p className="text-gray-600 text-sm">多模型驱动，深度内容创作</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AI绘画功能 - 优化卡片结构 */}
            <TabsContent value="contentCreation" className="animate-in fade-in-50 duration-500">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                <div className="flex flex-col xl:flex-row items-center gap-16">
                  {/* 左侧内容区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2 space-y-6">
                    <div className="space-y-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                        <PenTool className="w-3 h-3 mr-1.5" />
                        AI绘画解决方案
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        AI绘画
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        只需一句话，让文字秒变精美画作。
                      </p>
                    </div>

                    {/* 功能特点列表 - 改为语义化列表 */}
                    <ul className="space-y-4">
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">文生图</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">输入描述，AI自动生成精美图片</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">多风格支持</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">支持多种绘画风格，满足不同创作需求</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">高效生成</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">一键生成，快速获得高质量画作</p>
                        </div>
                      </li>
                    </ul>

                    <div className="pt-5">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 text-base hover:scale-105">
                        查看详情
                      </Button>
                    </div>
                  </div>
                  
                  {/* 右侧图片区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-200/50">
                      <img 
                        src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png" 
                        alt="AI绘画应用场景" 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                              <PenTool className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold">AI绘画解决方案</p>
                              <p className="text-gray-600 text-sm">只需一句话，轻松生成精美画作</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* AI技能功能 - 优化卡片结构 */}
            <TabsContent value="virtualLive" className="animate-in fade-in-50 duration-500">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                <div className="flex flex-col xl:flex-row items-center gap-16">
                  {/* 左侧内容区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2 space-y-6">
                    <div className="space-y-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                        <Tv className="w-3 h-3 mr-1.5" />
                        AI技能解决方案
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        AI技能
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        可自定义不同的技能模型，用户可根据具体技能进行提问。技能分类越细致，AI的回答就越精准，满足多样化业务场景需求。
                      </p>
                    </div>

                    {/* 功能特点列表 - 改为语义化列表 */}
                    <ul className="space-y-4">
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">技能自定义</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">支持自定义各类AI技能模型，灵活适配不同场景</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">细分技能分类</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">技能分类越细，AI回答越精准，提升专业度</p>
                        </div>
                      </li>
                      
                      <li className="flex items-start group">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors duration-300">
                          <Check className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-base font-semibold text-gray-900">多场景适用</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">适用于客服、教育、医疗等多行业智能问答</p>
                        </div>
                      </li>
                    </ul>

                    <div className="pt-5">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 text-base hover:scale-105">
                        查看详情
                      </Button>
                    </div>
                  </div>
                  
                  {/* 右侧图片区域 - 简化结构 */}
                  <div className="w-full xl:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-200/50">
                      <img 
                        src="https://java-chat-front.chatmoney.cn/api/uploads/image/20240612/04197fe3-1ad8-40b0-8b79-a63249d1bc83.png" 
                        alt="AI技能应用场景" 
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                              <Tv className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold">AI技能解决方案</p>
                              <p className="text-gray-600 text-sm">多技能模型，智能高效问答</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
 {/* 应用场景 */}


      {/* 功能特色 - 卡片式布局 */}
      {/* 功能特色区域 - 优化结构 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">功能特色</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              提供智能助手、内容创作、虚拟直播、AI对话等多维度的功能，满足不同行业的业务需求。
            </p>
          </header>

          {/* 功能特色卡片网格 - 优化卡片结构 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI智能对话 - 优化卡片结构 */}
            <article className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png" 
                  alt="AI智能对话" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">AI智能对话</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  智能聊天对话，AI秒回答。对接ChatAI接口，可以对自然语言进行深度理解，识别出用户的意图和需求，从而提供更加精准的回答和服务。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">自然语言深度理解，精准识别用户意图</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">秒级响应，提升服务体验</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">多场景适配，满足多行业需求</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto rounded-full">
                  查看详情
                </Button>
              </div>
            </article>

            {/* AI模型创作 - 优化卡片结构 */}
            <article className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png" 
                  alt="AI模型创作" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">AI模型创作</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  它无所不知，无所不能。根据不同模型进行提问，AI会针对输入的问题进行深度创作，提高创作能力；可定义不同的技能模型，用户根据不同技能进行提问，技能分类得越细，AI回答得越准确。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">多模型支持，满足多样化创作需求</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">技能模型可自定义，分类越细，回答越精准</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">深度创作，提升内容质量与创新力</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto rounded-full">
                  查看详情
                </Button>
              </div>
            </article>

            {/* AI绘画 - 优化卡片结构 */}
            <article className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png" 
                  alt="AI绘画" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">AI绘画</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  只需一句话，生成精美画作。支持知数云MJ。即将支持gpt3.5、api2d3.5生图、意间AI、SD、Midjourney官方、灵犀星火；已支持以图生图！生图速度快，不用排队等半天。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">一句话生成精美画作，操作简单高效</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">支持多平台模型，生图速度快，无需排队</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">支持以图生图，创作更自由</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto rounded-full">
                  查看详情
                </Button>
              </div>
            </article>

            {/* 丰富的营销功能 - 优化卡片结构 */}
            <article className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src="https://server.mddai.cn/uploads/images/2023083117485511ff85180.png" 
                  alt="丰富的营销功能" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">丰富的营销功能</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  VIP会员、挽留优惠券。1、会员期间不消耗次数，可无限使用；2、系统赠送优惠券挽留用户，每个套餐赠送的优惠券金额不同，给用户更大的优惠或更多的权益，以吸引其继续购买。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">VIP会员期间不限次数，畅享全部功能</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">系统自动赠送优惠券，提升用户复购率</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">多种套餐权益，满足不同用户需求</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto rounded-full">
                  查看详情
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>



           {/* 产品核心功能 */}
           <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-700 text-sm font-medium">核心功能</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">产品核心功能</h2>
            <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">强大的AI技术能力，为您提供全方位的数字人解决方案</p>
          </div>

          {/* AI智能对话 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">核心功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI智能对话</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  智能聊天对话，AI秒回答。对接ChatAI接口，可以对自然语言进行深度理解，识别出用户的意图和需求，从而提供更加精准的回答和服务。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">智能对话</span>
                  </div>
                  <p className="text-sm text-gray-600">AI秒级响应</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">意图识别</span>
                  </div>
                  <p className="text-sm text-gray-600">精准理解需求</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多场景适用</span>
                  </div>
                  <p className="text-sm text-gray-600">灵活对接业务</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-full shadow-lg">
                  查看演示
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-full">
                  购买授权
                </Button>
              </div>
            </div>
            
            {/* 右侧图片 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8">
                <img 
                  src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/dialogue.png" 
                  alt="AI智能对话" 
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              {/* 悬浮标签 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI智能对话</p>
                    <p className="text-sm text-gray-500">智能聊天秒响应</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI智能创作 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 右侧内容 */}
            <div className="lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">热门功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI智能创作</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  适用多场景，不同类型场景，满足您的不同需求，快速为您创作新的灵感。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多场景创作</span>
                  </div>
                  <p className="text-sm text-gray-600">可自定义多种创作场景，有效提高效率</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">精准调教</span>
                  </div>
                  <p className="text-sm text-gray-600">自定义调教指令，表单联动，创作更精准</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">GPT4.0支持</span>
                  </div>
                  <p className="text-sm text-gray-600">已支持GPT4.0超强模型，满足聊天不同需求</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-full shadow-lg">
                  查看演示
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-full">
                  购买授权
                </Button>
              </div>
            </div>
            {/* 左侧图片 */}
            <div className="lg:order-1 relative">
              <div className="bg-white rounded-3xl p-8">
                <img 
                  src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/create.png" 
                  alt="AI智能创作界面" 
                  className="w-full rounded-2xl shadow-lg"
                />
              {/* 悬浮标签 */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI智能创作</p>
                    <p className="text-sm text-gray-500">多场景支持</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI绘画 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">AI绘画</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">生成AI大师级作品</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  已对接MJ、SD绘图、DALLE-3等众多绘画模型，作图更强大。适用于各类图像创作需求，包括图片创作、风景生成等场景。支持文生图、图生图等功能，满足绘画一系列需求。提供多种绘画风格和绘画类型，生成图片更生动。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多模型接入</span>
                  </div>
                  <p className="text-sm text-gray-600">MJ、SD、DALLE-3等主流AI绘画模型</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多场景适用</span>
                  </div>
                  <p className="text-sm text-gray-600">图片创作、风景生成等多种应用场景</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多样化风格</span>
                  </div>
                  <p className="text-sm text-gray-600">多种绘画风格与类型，图片更生动</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-full shadow-lg">
                  查看演示
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-full">
                  购买授权
                </Button>
              </div>
            </div>
            
            {/* 右侧图片 */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8">
                <img 
                  src="https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png" 
                  alt="AI绘画界面" 
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              {/* 悬浮标签 */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI绘画</p>
                    <p className="text-sm text-gray-500">大师级作品生成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 {/* 产品核心功能 */}
         

          {/* 准备好开启您的AI之旅了吗？ - 优化结构 */}
          <footer className="mt-24 container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden relative border border-gray-200">
              {/* 装饰元素 - 简化结构 */}
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
                  <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
                  <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
                  <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* 左侧内容 - 优化结构 */}
                <div className="md:col-span-3 p-8 md:p-12 relative z-10">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      准备好开启您的<span className="text-blue-600">AI之旅</span>了吗？
                    </h3>
                    <p className="text-gray-600 mb-6 text-base">
                      已有数百家企业和品牌通过我们的AI解决方案，提升了客户体验和运营效率，助力您的业务发展飞跃。
                    </p>
                    
                    {/* 特性列表 - 改为语义化列表 */}
                    <ul className="grid grid-cols-2 gap-4 mb-6">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">高清还原</h4>
                          <p className="text-gray-500 text-sm">100%真实感官体验</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">专业服务</h4>
                          <p className="text-gray-500 text-sm">7×24小时技术支持</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">数据安全</h4>
                          <p className="text-gray-500 text-sm">企业级安全保障</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">持续更新</h4>
                          <p className="text-gray-500 text-sm">定期功能迭代升级</p>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-full shadow-lg">
                        立即开始
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-full">
                        咨询价格
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* 右侧功能卡片 - 优化结构 */}
                <aside className="md:col-span-2 relative hidden md:block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-6 flex items-center">
                      <div className="bg-gray-50 rounded-2xl w-full h-full p-4 shadow-lg">
                        <div className="grid grid-cols-2 gap-4 h-full">
                          {/* AI数字人 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">AI数字人</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">PHP/Java双版本支持</p>
                          </div>
                          
                          {/* 私有部署 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">私有部署</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">安全可控的私有化部署</p>
                          </div>
                          
                          {/* 专业团队 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">专业团队</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">一对一技术支持</p>
                          </div>
                          
                          {/* 开源方案 */}
                          <div className="bg-white rounded-xl p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">开源方案</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">灵活定制，售后无忧</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default ChatPage;
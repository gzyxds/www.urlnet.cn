"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Mic, Tv, PenTool, X } from "lucide-react";
import { usePageMetadata } from '@/hooks/usePageMetadata';
import BackToTop from '@/components/back-to-top';
import { motion, AnimatePresence } from "framer-motion";

const HumanPage = () => {
  const [activeScenario, setActiveScenario] = useState('virtualIP');
  // 添加二维码弹窗状态
  const [showQRCode, setShowQRCode] = useState(false);
  
  usePageMetadata({
    title: '艺创AI_AI数字人系统源码_AI开源saas数字人系统_艺创AI数字人系统',
    description: 'AIGC系统源码,是专注提供AI系统源代码解决方案的技术团队，目前已开源「AI数字人SaaS系统」「超级全能AI变现系统」「企业AI知识库」「AI聊天绘画系统」「论文写作系统」拥有PHP和JAVA两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
    keywords: 'AI数字人系统,数字人源码,数字人saas系统,开源数字人系统,AI数字人平台,虚拟数字人系统'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 - 优化响应式设计 */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* 背景装饰 - 优化移动端显示 */}
          <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/4 h-1/2 sm:h-1/4 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* 左侧内容 - 优化移动端布局 */}
            <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                虚拟数字人
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                数字分身
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型
              </p>
              
              {/* 数据指标 - 优化移动端网格 */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">98.5<span className="text-sm sm:text-base font-normal">万+</span></span>
                  <span className="text-xs sm:text-sm text-gray-500 mt-1 text-center sm:text-left">日活用户</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">500<span className="text-sm sm:text-base font-normal">ms</span></span>
                  <span className="text-xs sm:text-sm text-gray-500 mt-1 text-center sm:text-left">响应速度</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">5<span className="text-sm sm:text-base font-normal">min起</span></span>
                  <span className="text-xs sm:text-sm text-gray-500 mt-1 text-center sm:text-left">训练时长</span>
                </div>
              </div>
              
              {/* 按钮组 - 优化移动端按钮大小 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即试用
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>
            
            {/* 右侧图形 - 优化移动端显示 */}
            <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative mt-0 lg:mt-0">
                {/* 主图 */}
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* 模拟界面容器 */}
                  <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-lg p-4">
                    {/* 模拟顶部导航栏 */}
                    <div className="h-6 bg-white rounded-md shadow-sm mb-3 flex items-center px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                    
                    {/* 模拟主内容区域 */}
                    <div className="grid grid-cols-3 gap-3 h-[calc(100%-2rem)]">
                      {/* 左侧边栏 */}
                      <div className="bg-white rounded-md shadow-sm p-2">
                        <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                        <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                      </div>
                      
                      {/* 中间内容区 */}
                      <div className="col-span-2 bg-white rounded-md shadow-sm p-2">
                        <div className="w-full h-full bg-blue-50 rounded-md flex items-center justify-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 悬浮标签 - 优化移动端位置和显示 */}
                  <div className="absolute top-3 sm:top-4 right-2 sm:right-3 transform translate-x-0 -translate-y-0 bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center max-w-[140px] sm:max-w-[160px] md:max-w-[180px] z-10">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-50 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <Video className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">视频生成</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 leading-tight mt-0.5">高清视频合成</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 sm:bottom-4 left-2 sm:left-3 transform translate-x-0 translate-y-0 bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center max-w-[140px] sm:max-w-[160px] md:max-w-[180px] z-10">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-purple-50 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <Mic className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">声音克隆</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 leading-tight mt-0.5">实时语音合成</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 产品优势 - 优化响应式布局 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题区域 - 优化移动端间距 */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">产品优势</h2>
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">多维度产品优势，助力企业数字化升级</p>
          </div>
          
          {/* 企业智能客服卡片网格 - 优化移动端布局 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* 产品卡片1 - 数字分身训练数据 */}
            <div className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 opacity-90">数字分身训练数据</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-5xl font-bold">5</span>
                    <span className="text-lg sm:text-xl font-medium ml-2">min</span>
                  </div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6 sm:p-8">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6">形象自然丰富</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">超短时间即可生成分身</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">口型自然，表情丰富，30+表情</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">量产功能，批量生成和转换</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片2 - 声音复刻训练数据 */}
            <div className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 opacity-90">声音复刻训练数据</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-5xl font-bold">10</span>
                    <span className="text-lg sm:text-xl font-medium ml-2">min</span>
                  </div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6 sm:p-8">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6">多元高质生成能力</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">超短时高质量声音复刻</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">情绪转换和语音表达，保留个性</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">提供语音合成，多20+种语言</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片3 - 数字人整体效果达 */}
            <div className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 opacity-90">数字人整体效果达</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-5xl font-bold">MOS</span>
                    <span className="text-2xl sm:text-3xl font-bold ml-2">4.0</span>
                  </div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6 sm:p-8">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6">强大AI技术能力</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">行业领先的研究模型支持技术</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">感知准确率达98.5%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">数字人响应时间仅需500ms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片4 - 集成和接入方式 */}
            <div className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                <div className="relative z-10">
                  <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 opacity-90">集成和接入方式</h3>
                  <div className="text-2xl sm:text-4xl font-bold">灵活</div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6 sm:p-8">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6">快速接入</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-700 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">API、SDK多种接入方式</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-700 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">APP/Web/小程序全端支持</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-700 mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">公有云、私有化部署选择</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 演示中心 - 优化响应式布局 */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 - 优化移动端显示 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-100 blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 bg-indigo-100 blur-2xl sm:blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* 左侧内容 - 优化移动端布局 */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 bg-blue-600 mr-2"></span>
                在线演示
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                AI数字人SaaS系统2.0<br className="hidden sm:block" />演示中心
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
              </p>
              
              <div className="bg-white shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 flex items-center justify-center mr-2 sm:mr-3">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium">演示账号信息</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">PC端后台</p>
                      <p className="text-xs text-blue-600 break-all sm:break-normal">https://v.cnai.art</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">账号:</span>
                        <span className="text-xs font-medium">自行注册</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">密码:</span>
                        <span className="text-xs font-medium">自行注册</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">代理商后台</p>
                      <p className="text-xs text-blue-600 break-all sm:break-normal">https://demo.cnai.art/admin</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">账号:</span>
                        <span className="text-xs font-medium">demo</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">密码:</span>
                        <span className="text-xs font-medium">demo</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">SaaS平台端</p>
                      <p className="text-xs text-blue-600 break-all sm:break-normal">https://saas.cnai.art/platform</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">账号:</span>
                        <span className="text-xs font-medium">占不提供</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">密码:</span>
                        <span className="text-xs font-medium">占不提供</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0">
                        访问
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px]"
                  onClick={() => setShowQRCode(true)}
                >
                  申请专属演示
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px]"
                  onClick={() => setShowQRCode(true)}
                >
                  联系客服
                </Button>
              </div>
            </div>
            
            {/* 二维码弹窗 */}
            <AnimatePresence>
              {showQRCode && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center"
                  onClick={() => setShowQRCode(false)}
                >
                  {/* 背景遮罩 */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                  
                  {/* 模态框内容 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* 关闭按钮 */}
                    <button
                      onClick={() => setShowQRCode(false)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                      aria-label="关闭"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                    
                    {/* 内容区域 */}
                    <div className="p-8 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">联系客服</h3>
                      <p className="text-sm text-gray-600 mb-6">扫描二维码添加客服微信</p>
                      
                      {/* 二维码 */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <img 
                            src="/images/qrcode.png" 
                            alt="客服二维码" 
                            className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
                          />
                        </div>
                      </div>
                      
                      {/* 提示文字 */}
                      <p className="text-xs text-gray-500">长按二维码保存到相册</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
             
            {/* 右侧内容 - 优化移动端显示 */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* 主要演示视频 */}
                <div className="bg-white p-4 sm:p-6 shadow-lg">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4"
                  className="w-full h-auto"
                  preload="metadata"
                    className="w-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  />
                  
                  <div className="mt-3 sm:mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900">数字人管理平台</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有数字人资产</p>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* 二维码 - 优化移动端位置 */}
                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white p-3 sm:p-4 shadow-lg">
                  <img 
                    src="/images/wechat.png"
                    alt="演示二维码" 
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white"
                    loading="lazy"
                  />
                  <p className="text-xs text-center mt-1 sm:mt-2 text-gray-600">扫码体验移动端</p>
                </div>
                
                {/* 装饰元素 - 优化移动端显示 */}
                <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-gradient-to-br from-blue-600 to-blue-700 p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 sm:h-5 sm:w-5 text-white" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path 
                          fillRule="evenodd" 
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm sm:text-base font-medium text-white tracking-wide">在线演示</p>
                      <p className="text-xs sm:text-sm text-blue-100/90">实时体验</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* 应用场景 - 现代化简约风格 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-700 text-sm font-medium">场景应用</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">应用场景</h2>
            <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">丰富的应用场景和解决方案，满足多种业务需求</p>
          </div>

          {/* 场景标签导航 - 现代化简约风格 - 优化移动端滚动 */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-50 p-1.5 shadow-sm overflow-x-auto max-w-full scrollbar-hide">
              <button 
                className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                  activeScenario === 'virtualIP' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                }`}
                onClick={() => setActiveScenario('virtualIP')}
              >
                <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                  <Video className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  带货视频
                </span>
                {activeScenario === 'virtualIP' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                )}
              </button>
              <button 
                className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                  activeScenario === 'digitalEmployee' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                }`}
                onClick={() => setActiveScenario('digitalEmployee')}
              >
                <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  数字员工
                </span>
                {activeScenario === 'digitalEmployee' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                )}
              </button>
              <button 
                className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                  activeScenario === 'contentCreation' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                }`}
                onClick={() => setActiveScenario('contentCreation')}
              >
                <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                  <PenTool className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  内容创作
                </span>
                {activeScenario === 'contentCreation' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                )}
              </button>
              <button 
                className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                  activeScenario === 'virtualLive' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                }`}
                onClick={() => setActiveScenario('virtualLive')}
              >
                <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                  <Tv className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  虚拟直播
                </span>
                {activeScenario === 'virtualLive' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
                )}
              </button>
            </div>
          </div>

          {/* 带货视频场景 - 现代化简约风格 */}
          {activeScenario === 'virtualIP' && (
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
              {/* 左侧内容 */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                    <span className="text-blue-600 text-xs font-medium">热门场景</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">带货视频</h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    面向文化传播、影视内容等多个行业，帮助打造带货视频，赋能品牌营销，提升品牌心智。
                  </p>
                </div>
                
                {/* 功能特性 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">品牌代言</span>
                    </div>
                    <p className="text-sm text-gray-600">提升品牌辨识度</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">内容创作</span>
                    </div>
                    <p className="text-sm text-gray-600">高质量虚拟角色</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">社交互动</span>
                    </div>
                    <p className="text-sm text-gray-600">增强用户体验</p>
                  </div>
                </div>
                
                {/* 按钮组 - 优化移动端按钮大小 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即试用
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>
              
              {/* 右侧视频 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-3xl p-4 sm:p-8">
                  <video
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d7597b2e51444a40_1697534317820.mp4"
                    className="w-full h-auto"
                    preload="metadata"
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    您的浏览器不支持 video 标签。
                  </video>
                </div>
                {/* 悬浮标签 */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">带货视频</p>
                      <p className="text-sm text-gray-500">品牌营销解决方案</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 数字员工场景 - 现代化简约风格 */}
          {activeScenario === 'digitalEmployee' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* 左侧内容 */}
              <div className="order-2 lg:order-1 space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                    <span className="text-blue-600 text-xs font-medium">企业应用</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">数字员工</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。
                  </p>
                </div>
                
                {/* 功能特性 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">智能客服</span>
                    </div>
                    <p className="text-sm text-gray-600">7×24小时在线服务</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">销售助手</span>
                    </div>
                    <p className="text-sm text-gray-600">提高转化率</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">培训讲师</span>
                    </div>
                    <p className="text-sm text-gray-600">标准化培训内容</p>
                  </div>
                </div>
                
                {/* 按钮组 - 优化移动端按钮大小 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即试用
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>

              {/* 右侧视频 */}
              <div className="order-1 lg:order-2 relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-3xl p-4 sm:p-8">
                  <video
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58de8e04fa71151b_1697611541810.mp4"
                    className="w-full h-auto"
                    preload="metadata"
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  />
                </div>
                {/* 悬浮标签 */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">数字员工</p>
                      <p className="text-sm text-gray-500">智能业务助手</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 内容创作场景 - 现代化简约风格 */}
          {activeScenario === 'contentCreation' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* 左侧内容 */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                    <span className="text-blue-600 text-xs font-medium">创意应用</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">内容创作</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。
                  </p>
                </div>
                
                {/* 功能特性 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">视频脚本</span>
                    </div>
                    <p className="text-sm text-gray-600">专业视频脚本</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">营销文案</span>
                    </div>
                    <p className="text-sm text-gray-600">提高转化率</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">多语言翻译</span>
                    </div>
                    <p className="text-sm text-gray-600">拓展全球市场</p>
                  </div>
                </div>
                
                {/* 按钮组 - 优化移动端按钮大小 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即试用
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>

              {/* 右侧视频 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                  <video
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/77eb68b8aabcb8aa_1697534305029.mp4"
                    className="w-full h-auto"
                    preload="metadata"
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    {/* 视频不支持时显示的替代内容 */}
                    <img 
                      src="https://server.mddai.cn/uploads/images/202411281956113c42f8382.png"
                      alt="内容创作应用场景"
                      className="w-full rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </video>
                </div>
                {/* 悬浮标签 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">内容创作</p>
                      <p className="text-sm text-gray-500">智能创作解决方案</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 虚拟直播场景 - 现代化简约风格 */}
          {activeScenario === 'virtualLive' && (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* 左侧内容 */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                    <span className="text-blue-600 text-xs font-medium">直播应用</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">虚拟直播</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。
                  </p>
                </div>
                
                {/* 功能特性 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">电商直播</span>
                    </div>
                    <p className="text-sm text-gray-600">24小时不间断直播</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">新闻播报</span>
                    </div>
                    <p className="text-sm text-gray-600">专业播报服务</p>
                  </div>
                  
                  <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">活动主持</span>
                    </div>
                    <p className="text-sm text-gray-600">增强互动体验</p>
                  </div>
                </div>
                
                {/* 按钮组 - 优化移动端按钮大小 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即试用
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>
            
              {/* 右侧视频 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                  <video
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/84136783a28cddee_1697534229451.mp4"
                    className="w-full h-auto"
                    preload="metadata"
                    playsInline
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                    loading="lazy"
                  >
                    <source type="video/mp4" />
                    您的浏览器不支持视频播放
                  </video>
                </div>
                {/* 悬浮标签 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">虚拟直播</p>
                      <p className="text-sm text-gray-500">智能直播解决方案</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 产品核心功能 */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-700 text-xs sm:text-sm font-medium">核心功能</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">产品核心功能</h2>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">强大的AI技术能力，为您提供全方位的数字人解决方案</p>
          </div>

          {/* 数字分身 */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
            {/* 左侧内容 */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-3 sm:mb-4">
                  <span className="text-blue-600 text-xs font-medium">核心功能</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">数字分身</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  轻松创建你的AI虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">高清还原</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">100%真实感官体验</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">形象生成</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">100%快速生成</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">定制形象</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">个性化定制服务</p>
                </div>
              </div>
              
              
             {/* 按钮组 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.open('https://v.cnai.art', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>

               <Button variant="outline" 
               className="border-blue-500 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
               onClick={() => window.open('https://auth.cnai.art', '_blank')}
               >
                 <Check className="w-4 h-4 mr-2" />
                 购买授权
               </Button>

                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Bot className="w-4 h-4 mr-2" />
                  体验Demo
                </Button>
                
                 <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  联系客服
                </Button>
              </div>
            </div>
            
            {/* 右侧图片 */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <img 
                  src="https://artaigc.cn/assets/img/human1.png" 
                  alt="数字人形象" 
                  className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
              {/* 悬浮标签 - 移动端优化 */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-4 border border-gray-100 max-w-[140px] sm:max-w-none">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">数字分身</p>
                    <p className="text-xs text-gray-500 truncate">高清形象生成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 声音克隆 */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
            {/* 右侧内容 */}
            <div className="lg:order-2 space-y-6 sm:space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-3 sm:mb-4">
                  <span className="text-blue-600 text-xs font-medium">热门功能</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">声音克隆</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  有声胜过一个性格说，仅需1句话，快速克隆你的声色，配合文案即可生成专属声音口播内容！
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">声音还原</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">100%真实还原</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">语音转换</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">100%智能转换</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">超逼真</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">100%自然效果</p>
                </div>
              </div>
              
              {/* 按钮组 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.open('https://v.cnai.art', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>

               <Button variant="outline" 
               className="border-blue-500 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
               onClick={() => window.open('https://auth.cnai.art', '_blank')}
               >
                 <Check className="w-4 h-4 mr-2" />
                 购买授权
               </Button>

                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Bot className="w-4 h-4 mr-2" />
                  体验Demo
                </Button>
                
                 <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  联系客服
                </Button>
              </div>
            </div>

            {/* 左侧图片 */}
            <div className="lg:order-1 relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <img 
                  src="https://lf3-starry.byteimg.com/obj/starry/image/r6j8q8i2q1_%E9%AB%98%E8%87%AA%E7%84%B6%E5%BA%A6.webp" 
                  alt="声音克隆界面" 
                  className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
              {/* 悬浮标签 - 移动端优化 */}
              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-4 border border-gray-100 max-w-[140px] sm:max-w-none">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">声音克隆</p>
                    <p className="text-xs text-gray-500 truncate">已完成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 用户管理 */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
            {/* 左侧内容 */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-3 sm:mb-4">
                  <span className="text-blue-600 text-xs font-medium">实用功能</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">用户管理</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">多级分站</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">灵活的分站管理</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">账户管理</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">完善的账户体系</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">权限管理</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">精细的权限控制</p>
                </div>
              </div>
              
             {/* 按钮组 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.open('https://v.cnai.art', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>

               <Button variant="outline" 
               className="border-blue-500 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
               onClick={() => window.open('https://auth.cnai.art', '_blank')}
               >
                 <Check className="w-4 h-4 mr-2" />
                 购买授权
               </Button>

                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Bot className="w-4 h-4 mr-2" />
                  体验Demo
                </Button>
                
                 <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  联系客服
                </Button>
              </div>
            </div>
            
            {/* 右侧模拟界面 */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                {/* 模拟浏览器窗口 */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                  {/* 浏览器标题栏 */}
                  <div className="bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 flex items-center space-x-1 sm:space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-white rounded-md py-0.5 px-2 text-xs sm:text-sm text-gray-600 max-w-xs mx-auto truncate">
                        艺创AI数字人管理系统
                      </div>
                    </div>
                  </div>
                  
                  {/* 模拟界面内容 */}
                  <div className="p-3 sm:p-4">
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="bg-blue-50 rounded-lg p-2 sm:p-3">
                        <h3 className="text-xs font-medium text-gray-700">总用户数</h3>
                        <p className="text-lg sm:text-xl font-bold text-blue-600 mt-1">12,458</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-2 sm:p-3">
                        <h3 className="text-xs font-medium text-gray-700">今日活跃</h3>
                        <p className="text-lg sm:text-xl font-bold text-purple-600 mt-1">2,845</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-2 sm:p-3">
                        <h3 className="text-xs font-medium text-gray-700">转化率</h3>
                        <p className="text-lg sm:text-xl font-bold text-green-600 mt-1">32.6%</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <h3 className="font-medium text-gray-700 text-xs sm:text-sm">最近访问</h3>
                        <button className="text-xs text-blue-600">查看全部</button>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        {[1,2,3].map((i) => (
                          <div key={i} className="flex items-center bg-white p-1.5 sm:p-2 rounded-md">
                            <div className="w-5 sm:w-6 h-5 sm:h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                            <div className="ml-2 min-w-0 flex-1">
                              <p className="text-xs font-medium text-gray-800 truncate">用户_{i}</p>
                              <p className="text-xs text-gray-500 truncate">最近访问时间: 2024-01-{i}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 悬浮标签 - 移动端优化 */}
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-4 border border-gray-100 max-w-[140px] sm:max-w-none">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">用户管理</p>
                    <p className="text-xs text-gray-500 truncate">多级权限控制</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 视频生成 */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-16 sm:mt-20 lg:mt-24">
            {/* 右侧视频 */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4"
                  autoPlay
                  preload="metadata"
                  playsInline
                  loop
                  muted
                  className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                >
                  <source type="video/mp4" />
                  您的浏览器不支持视频播放
                </video>
              </div>
              {/* 悬浮标签 - 移动端优化 */}
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-4 border border-gray-100 max-w-[140px] sm:max-w-none">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                    <Video className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">视频生成</p>
                    <p className="text-xs text-gray-500 truncate">AI智能创作</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 左侧内容 */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-3 sm:mb-4">
                  <span className="text-blue-600 text-xs font-medium">AI视频</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">AI一键自动生成视频</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  从容应对内容创作和营销需求，助力商家和创作者提升视频生成的效率，更好的在公私域做好内容营销，助力GMV提升。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">一键生成</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">智能快速生成视频</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">场景丰富</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">多样化视频模板</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">高效营销</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">提升内容转化率</p>
                </div>
              </div>
              
              {/* 按钮组 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.open('https://v.cnai.art', '_blank')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>

               <Button variant="outline" 
               className="border-blue-500 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
               onClick={() => window.open('https://auth.cnai.art', '_blank')}
               >
                 <Check className="w-4 h-4 mr-2" />
                 购买授权
               </Button>

                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                  onClick={() => window.location.href = '/demo'}
                >
                  <Bot className="w-4 h-4 mr-2" />
                  体验Demo
                </Button>
                
                 <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                  onClick={() => setShowQRCode(true)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  联系客服
                </Button>
              </div>
            </div>
          </div>


          {/* 产品核心功能 */}

          <section className="py-24 mt-12">
            <div className="container mx-auto px-4 space-y-8">
              {/* 标题区域 */}
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">接入流程</h2>
                <p className="text-gray-600 text-sm mb-3">为你提供快速、便捷的接入服务</p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium mt-4"
                  onClick={() => window.open('https://v.cnai.art', '_blank')}
                >
                  立即接入
                </Button>
              </div>

              {/* 流程步骤 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 步骤1：需求沟通 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">01</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">需求沟通</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">提供产品信息，沟通数字人类型、使用场景和交付形式</p>
                </div>

                {/* 步骤2：确认合作 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">02</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">确认合作</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">通过控制台直接下单，或线下沟通商务合作</p>
                </div>

                {/* 步骤3：资产制作 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">03</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">资产制作</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">采集数据，制作数字人形象和声音资产</p>
                </div>

                {/* 步骤4：正式上线 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">04</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">正式上线</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">数字人上线，调用接口驱动或通过平台直接使用</p>
                </div>
              </div>
            </div>
          </section>

          {/* 准备好开启您的AI数字人之旅了吗？ */}
          <div className="mt-24 py-8">
            <div className="bg-white overflow-hidden relative border border-gray-200">
              {/* 装饰元素 */}
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
                  <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
                  <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
                  <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* 左侧内容 */}
                <div className="md:col-span-3 p-8 md:p-12 relative z-10">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      准备好开启您的<span className="text-blue-600">AI数字人之旅</span>了吗？
                    </h3>
                    <p className="text-gray-600 mb-6 text-base">
                      已有数百家企业和品牌通过我们的AI数字人解决方案，提升了客户体验和运营效率，助力您的业务发展飞跃。
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">高清还原</h4>
                          <p className="text-gray-500 text-sm">100%真实感官体验</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">专业服务</h4>
                          <p className="text-gray-500 text-sm">7×24小时技术支持</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">数据安全</h4>
                          <p className="text-gray-500 text-sm">企业级安全保障</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">持续更新</h4>
                          <p className="text-gray-500 text-sm">定期功能迭代升级</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-none shadow-lg">
                        立即体验
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-none">
                        咨询价格
                      </Button>
                    </div>
                  </div>
                </div>
                {/* 右侧功能卡片 */}
                <div className="md:col-span-2 relative hidden md:block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-6 flex items-center">
                      <div className="bg-gray-50 w-full h-full p-4 shadow-lg">
                        <div className="grid grid-cols-2 gap-4 h-full">
                          {/* AI数字人 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">AI数字人</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">PHP/Java双版本支持</p>
                          </div>
                          
                          {/* 私有部署 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">私有部署</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">安全可控的私有化部署</p>
                          </div>
                          
                          {/* 专业团队 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">专业团队</h4>
                            <p className="text-gray-500 text-sm text-center mt-1">一对一技术支持</p>
                          </div>
                          
                          {/* 开源方案 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanPage;

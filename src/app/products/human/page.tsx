"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Mic, Tv, PenTool } from "lucide-react";
import { usePageMetadata } from '@/hooks/usePageMetadata';

const HumanPage = () => {
  const [activeScenario, setActiveScenario] = useState('virtualIP');
  
  usePageMetadata({
    title: '艺创AI_AI数字人系统源码_AI开源saas数字人系统_艺创AI数字人系统',
    description: 'AIGC系统源码,是专注提供AI系统源代码解决方案的技术团队，目前已开源「AI数字人SaaS系统」「超级全能AI变现系统」「企业AI知识库」「AI聊天绘画系统」「论文写作系统」拥有PHP和JAVA两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
    keywords: 'AI数字人系统,数字人源码,数字人saas系统,开源数字人系统,AI数字人平台,虚拟数字人系统'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 - 优化响应式设计 */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* 背景装饰 - 优化移动端显示 */}
          <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/2 sm:w-1/4 h-1/2 sm:h-1/4 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-2xl sm:blur-3xl -z-10"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* 左侧内容 - 优化移动端布局 */}
            <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                数字孪生技术
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                虚拟数字人
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-lg shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px]">
                  立即试用
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]">
                  了解更多
                </Button>
              </div>
            </div>
            
            {/* 右侧图形 - 优化移动端显示 */}
            <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative mt-0 lg:mt-0">
                {/* 主图 */}
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20241128195610379379917.png" 
                    alt="AI数字人界面展示" 
                    className="w-full rounded-lg shadow-lg"
                    loading="lazy"
                  />
                  
                  {/* 悬浮标签 - 优化移动端位置和显示 */}
                  <div className="absolute top-4 sm:top-6 right-2 sm:right-4 transform translate-x-0 -translate-y-0 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex items-center max-w-[160px] sm:max-w-[180px] md:max-w-[200px] z-10">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Video className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-medium text-gray-900 leading-tight">视频生成</p>
                      <p className="text-xs sm:text-sm text-gray-500 leading-tight mt-0.5">高清视频合成</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 sm:bottom-6 left-2 sm:left-4 transform translate-x-0 translate-y-0 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex items-center max-w-[160px] sm:max-w-[180px] md:max-w-[200px] z-10">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Mic className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm sm:text-base font-medium text-gray-900 leading-tight">声音克隆</p>
                      <p className="text-xs sm:text-sm text-gray-500 leading-tight mt-0.5">实时语音合成</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* 产品卡片1 - 数字分身训练数据 */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
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
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">超短时间即可生成分身</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">口型自然，表情丰富，30+表情</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">量产功能，批量生成和转换</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片2 - 声音复刻训练数据 */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
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
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">超短时高质量声音复刻</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">情绪转换和语音表达，保留个性</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">提供语音合成，多20+种语言</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片3 - 数字人整体效果达 */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
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
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">行业领先的研究模型支持技术</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">感知准确率达98.5%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">数字人响应时间仅需500ms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片4 - 集成和接入方式 */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* 数据展示区域 */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
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
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-700 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">API、SDK多种接入方式</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-700 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">APP/Web/小程序全端支持</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-700 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
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
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-100 blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-indigo-100 blur-2xl sm:blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* 左侧内容 - 优化移动端布局 */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                在线演示
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                AI数字人SaaS系统2.0<br className="hidden sm:block" />演示中心
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
              </p>
              
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium">演示账号信息</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">PC端后台</p>
                      <p className="text-xs text-gray-500 break-all sm:break-normal">https://v.cnai.art</p>
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
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">代理商后台</p>
                      <p className="text-xs text-gray-500 break-all sm:break-normal">https://demo.cnai.art/admin</p>
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
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">SaaS平台端</p>
                      <p className="text-xs text-gray-500 break-all sm:break-normal">https://saas.cnai.art/platform</p>
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]">
                  申请专属演示
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]">
                  联系客服
                </Button>
              </div>
            </div>
             
            {/* 右侧内容 - 优化移动端显示 */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* 主要演示图 */}
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20241128195611806125108.png" 
                    alt="AI数字人演示界面" 
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                  
                  <div className="mt-3 sm:mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900">数字人管理平台</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有数字人资产</p>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* 二维码 - 优化移动端位置 */}
                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
                  <img 
                    src="/images/wechat.png"
                    alt="演示二维码" 
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-md"
                    loading="lazy"
                  />
                  <p className="text-xs text-center mt-1 sm:mt-2 text-gray-600">扫码体验移动端</p>
                </div>
                
                {/* 装饰元素 - 优化移动端显示 */}
                <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-blue-600 rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
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

      {/* 应用场景 - 优化响应式标签布局 */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">应用场景</h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto px-4">丰富的应用场景和解决方案，满足多种业务需求</p>
          </div>

          {/* 场景标签导航 - 优化移动端滚动 */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="flex space-x-1 bg-white border border-gray-200 rounded-2xl p-1 shadow-sm overflow-x-auto max-w-full">
              <button 
                className={`px-4 sm:px-6 py-2.5 sm:py-3 font-medium rounded-xl transition-all duration-300 relative whitespace-nowrap min-w-[80px] sm:min-w-[100px] ${
                  activeScenario === 'virtualIP' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveScenario('virtualIP')}
              >
                <span className="relative z-10 text-sm sm:text-base">带货视频</span>
                {activeScenario === 'virtualIP' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl"></div>
                )}
              </button>
              <button 
                className={`px-4 sm:px-6 py-2.5 sm:py-3 font-medium rounded-xl transition-all duration-300 relative whitespace-nowrap min-w-[80px] sm:min-w-[100px] ${
                  activeScenario === 'digitalEmployee' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveScenario('digitalEmployee')}
              >
                <span className="relative z-10 text-sm sm:text-base">数字员工</span>
                {activeScenario === 'digitalEmployee' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl"></div>
                )}
              </button>
              <button 
                className={`px-4 sm:px-6 py-2.5 sm:py-3 font-medium rounded-xl transition-all duration-300 relative whitespace-nowrap min-w-[80px] sm:min-w-[100px] ${
                  activeScenario === 'contentCreation' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveScenario('contentCreation')}
              >
                <span className="relative z-10 text-sm sm:text-base">内容创作</span>
                {activeScenario === 'contentCreation' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl"></div>
                )}
              </button>
              <button 
                className={`px-4 sm:px-6 py-2.5 sm:py-3 font-medium rounded-xl transition-all duration-300 relative whitespace-nowrap min-w-[80px] sm:min-w-[100px] ${
                  activeScenario === 'virtualLive' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setActiveScenario('virtualLive')}
              >
                <span className="relative z-10 text-sm sm:text-base">虚拟直播</span>
                {activeScenario === 'virtualLive' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl"></div>
                )}
              </button>
            </div>
          </div>

          {/* 带货视频场景 - 优化移动端布局 */}
          {activeScenario === 'virtualIP' && (
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              {/* 左侧内容 */}
              <div className="w-full lg:w-1/2 lg:pr-6 sm:pr-8 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">带货视频</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  面向文化传播、影视内容等多个行业，帮助打造带货视频，赋能品牌营销，提升品牌心智。
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">品牌代言</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">创建专属品牌虚拟形象，提升品牌辨识度和亲和力</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">内容创作</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">为影视、游戏、动漫等行业提供高质量虚拟角色</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">社交互动</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">打造虚拟社交形象，增强用户互动体验</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]">
                  查看详情
                </Button>
              </div>
              
              {/* 右侧图片 */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://artaigc.cn/assets/img/human1.png" 
                    alt="带货视频应用场景" 
                    className="w-full rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">带货视频解决方案</p>
                        <p className="text-white/80 text-xs sm:text-sm">打造专属品牌虚拟形象</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 数字员工场景 - 优化移动端布局 */}
          {activeScenario === 'digitalEmployee' && (
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              {/* 左侧内容 */}
              <div className="w-full lg:w-1/2 lg:pr-6 sm:pr-8 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">数字员工</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">智能客服</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">7×24小时在线服务，快速响应客户需求</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">销售助手</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">智能推荐产品，提高转化率和客户满意度</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">培训讲师</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">提供标准化培训内容，确保培训质量一致性</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]">
                  查看详情
                </Button>
              </div>
              
              {/* 右侧图片 */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://artaigc.cn/assets/img/human2.png" 
                    alt="数字员工应用场景" 
                    className="w-full rounded-2xl"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">数字员工解决方案</p>
                        <p className="text-white/80 text-xs sm:text-sm">智能高效的业务助手</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 内容创作场景 - 优化移动端布局 */}
          {activeScenario === 'contentCreation' && (
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              {/* 左侧内容 */}
              <div className="w-full lg:w-1/2 lg:pr-6 sm:pr-8 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">内容创作</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">视频脚本</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">快速生成专业视频脚本，提高内容创作效率</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">营销文案</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">生成吸引人的营销文案，提高转化率</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">多语言翻译</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">支持多语言内容创作和翻译，拓展全球市场</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]">
                  查看详情
                </Button>
              </div>
              
              {/* 右侧图片 */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img 
                  src="https://server.mddai.cn/uploads/images/202411281956113c42f8382.png" 
                  alt="内容创作应用场景" 
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* 虚拟直播场景 - 优化移动端布局 */}
          {activeScenario === 'virtualLive' && (
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              {/* 左侧内容 */}
              <div className="w-full lg:w-1/2 lg:pr-6 sm:pr-8 order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">虚拟直播</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">电商直播</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">24小时不间断直播，提高商品曝光和销售</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">新闻播报</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">实时生成新闻内容，提供专业播报服务</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                      <Check className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">活动主持</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">为线上活动提供专业主持服务，增强互动体验</p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]">
                  查看详情
                </Button>
              </div>
              
              {/* 右侧图片 */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img 
                  src="https://server.mddai.cn/uploads/images/20241128195610379379917.png" 
                  alt="虚拟直播应用场景" 
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          )}
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

          {/* 数字分身 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">核心功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">数字分身</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  轻松创建你的AI虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">高清还原</span>
                  </div>
                  <p className="text-sm text-gray-600">100%真实感官体验</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">形象生成</span>
                  </div>
                  <p className="text-sm text-gray-600">100%快速生成</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">定制形象</span>
                  </div>
                  <p className="text-sm text-gray-600">个性化定制服务</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-xl shadow-lg">
                  查看演示
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-xl">
                  购买授权
                </Button>
              </div>
            </div>
            
            {/* 右侧图片 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img 
                  src="https://artaigc.cn/assets/img/human1.png" 
                  alt="数字人形象" 
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
                    <p className="font-semibold text-gray-900">数字分身</p>
                    <p className="text-sm text-gray-500">高清形象生成</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 声音克隆 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 右侧内容 */}
            <div className="lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">热门功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">声音克隆</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  有声胜过一个性格说，仅需1句话，快速克隆你的声色，配合文案即可生成专属声音口播内容！
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">声音还原</span>
                  </div>
                  <p className="text-sm text-gray-600">100%真实还原</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">语音转换</span>
                  </div>
                  <p className="text-sm text-gray-600">100%智能转换</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">超逼真</span>
                  </div>
                  <p className="text-sm text-gray-600">100%自然效果</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-xl shadow-lg">
                  查看演示
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-xl">
                  购买授权
                </Button>
              </div>
            </div>
            {/* 左侧图片 */}
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img 
                  src="https://artaigc.cn/assets/img/human2.png" 
                  alt="声音克隆界面" 
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
                    <p className="font-semibold text-gray-900">声音克隆</p>
                    <p className="text-sm text-gray-500">已完成</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 用户管理 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">实用功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">用户管理</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多级分站</span>
                  </div>
                  <p className="text-sm text-gray-600">灵活的分站管理</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">账户管理</span>
                  </div>
                  <p className="text-sm text-gray-600">完善的账户体系</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">权限管理</span>
                  </div>
                  <p className="text-sm text-gray-600">精细的权限控制</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-xl shadow-lg">
                  查看演示
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-xl">
                  购买授权
                </Button>
              </div>
            </div>
            
            {/* 右侧图片 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img 
                  src="https://server.mddai.cn/uploads/images/20241128195611806125108.png" 
                  alt="用户管理界面" 
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
                    <p className="font-semibold text-gray-900">用户管理</p>
                    <p className="text-sm text-gray-500">多级权限控制</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 {/* 产品核心功能 */}
         

          {/* 准备好开启您的AI数字人之旅了吗？ */}
          <div className="mt-24 container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden relative border border-gray-200">
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
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
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
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
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
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
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
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
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
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-lg shadow-lg">
                        立即体验
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-lg">
                        咨询价格
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* 右侧功能卡片 */}
                <div className="md:col-span-2 relative hidden md:block">
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

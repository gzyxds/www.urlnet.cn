"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Mic, Tv, PenTool } from "lucide-react";
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AiPage = () => {
  usePageMetadata({
    title: '艺创AI_全能AI知识库系统_全能AI知识库系统源码_AIGC系统',
    description: '艺创AI全能AI知识库系统是一款基于PHP和Java双语言开发的AI知识库系统,支持私有化部署,提供知识库训练、智能问答、数字人等多种功能,是企业打造数字化转型的理想选择',
    keywords: '全能AI知识库系统,全能AI知识库系统源码,全能AI知识库系统源码,AI知识库系统,AI知识库系统源码'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅区域 - 展示产品核心价值和数据指标 */}
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* 产品版本标签 */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs sm:text-sm font-medium">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500 mr-1.5 sm:mr-2 animate-pulse"></span>
              <span className="mr-1.5 sm:mr-2">全新升级</span>
              <span className="text-xs px-1.5 sm:px-2 py-0.5 bg-blue-100 rounded-md">V2.0</span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* 左侧内容区域 - 产品介绍和行动按钮 */}
            <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
              {/* 
                标题部分调整说明：
                1. 第一排（"全能 AI知识库"）字体缩小，使用 text-xl~lg:3xl，避免过大。
                2. 第二排（"智能管理系统"）与第一排增加更明显的垂直间距（mt-3 sm:mt-4）。
                3. 结构分为两行，便于单独控制样式。
              */}
              <h1 className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                  <span className="inline-block relative">
                    全能
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-blue-500"></span>
                  </span>
                  <span className="text-blue-600"> AI知识库</span>
                </span>
                <span className="block mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                  智能管理系统
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                基于先进的AI技术，提供高度拟真的数字人解决方案，赋能企业知识管理与数字化转型
              </p>
              
              {/* 核心数据指标展示 */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm transform transition-all hover:shadow-md">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-baseline">
                      98.5<span className="text-sm sm:text-base font-normal text-blue-600 ml-1">万+</span>
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 mt-1">日活跃用户</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm transform transition-all hover:shadow-md">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-baseline">
                      500<span className="text-sm sm:text-base font-normal text-blue-600 ml-1">ms</span>
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 mt-1">极速响应</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-100 shadow-sm transform transition-all hover:shadow-md">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-baseline">
                      5<span className="text-sm sm:text-base font-normal text-blue-600 ml-1">min起</span>
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 mt-1">快速训练</span>
                  </div>
                </div>
              </div>
              
              {/* 行动按钮组 */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-lg shadow-sm">
                  立即试用
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-2.5 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-lg">
                  了解更多
                </Button>
              </div>
            </div>
            
            {/* 右侧产品展示区域 */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                {/* 产品主图展示 */}
                <div className="relative mx-auto px-4 sm:px-8 lg:px-0">
                  <img 
                    src="https://www.lightai.com/_nuxt/overview.k0OW2K--.png" 
                    alt="AI知识库系统界面展示" 
                    className="w-full h-auto transform scale-105 sm:scale-110"
                  />
                  
                  {/* 功能特性悬浮标签 */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:-top-6 lg:-right-6 bg-white rounded-xl shadow-md p-2 sm:p-3 lg:p-4 flex items-center border border-gray-100 transform hover:shadow-lg transition-all z-10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <Video className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-xs lg:text-sm font-medium text-gray-900">智能视频生成</p>
                      <p className="text-xs text-gray-500">8K超高清合成</p>
                    </div>
                    <div className="sm:hidden">
                      <p className="text-xs font-medium text-gray-900">视频生成</p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl shadow-md p-2 sm:p-3 lg:p-4 flex items-center border border-gray-100 transform hover:shadow-lg transition-all z-10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <Mic className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-xs lg:text-sm font-medium text-gray-900">AI声音克隆</p>
                      <p className="text-xs text-gray-500">5秒实时合成</p>
                    </div>
                    <div className="sm:hidden">
                      <p className="text-xs font-medium text-gray-900">声音克隆</p>
                    </div>
                  </div>
                  
                  {/* 多模态学习标签 */}
                  <div className="absolute top-1/2 right-2 sm:right-4 lg:-right-4 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-md p-2 sm:p-3 flex items-center border border-gray-100 hover:shadow-lg transition-all z-10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5"></path>
                        <path d="M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-xs font-medium text-gray-900">多模态学习</p>
                    </div>
                    <div className="sm:hidden">
                      <p className="text-xs font-medium text-gray-900">多模态</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 技术标签展示 */}
          <div className="flex justify-center mt-8 sm:mt-12 gap-2 sm:gap-4 flex-wrap">
            <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              自然语言处理
            </div>
            <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              计算机视觉
            </div>
            <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              深度学习
            </div>
            <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              知识图谱
            </div>
            <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-blue-50 rounded-full text-xs text-blue-700 border border-blue-100">
              多模态融合
            </div>
          </div>
        </div>
      </section>

      {/* 产品优势展示区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">产品优势</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">多维度产品优势，助力企业数字化升级</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 企业智能客服功能卡片 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">企业智能客服</h3>
                  <div className="text-blue-600 font-medium">5分钟</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                企业可以上传产品资料、FAQ手册等信息，完成训练后，对外发布智能客服聊天窗口。通过AI客服可以提供24小时在线客服支持，节省人力物力。
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">支持上传多种企业资料，快速训练专属客服</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">对外发布智能客服聊天窗口，灵活集成</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">AI客服7x24小时在线，显著节省人力物力</span>
                </li>
              </ul>
            </div>
            
            {/* 企业智能文档功能卡片 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">企业智能文档</h3>
                  <div className="text-blue-600 font-medium">10分钟</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                企业可以上传产品文档、合同内容等信息，完成训练后，仅限内部员工登录访问。通过AI助手，可以快速、准确地查询企业内部有关的信息文档，增强企业内部信息流动性。
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">支持上传多种企业文档，快速训练专属AI</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">仅限内部员工登录访问，保障数据安全</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">AI助手高效检索企业内部信息，提升办公效率</span>
                </li>
              </ul>
            </div>
            
            {/* 专家顾问助理功能卡片 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">专家顾问助理</h3>
                  <div className="text-blue-600 font-medium">MOS4.0</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                企业可以上传产品资料、FAQ手册等信息，完成训练后，对外发布智能客服聊天窗口。通过AI客服可以提供24小时在线客服支持，节省人力物力。
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">行业领先的研究模型支持技术</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">感知准确率达98.5%</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">数字人响应时间仅需500ms</span>
                </li>
              </ul>
            </div>
            
            {/* 数据训练功能卡片 */}
            <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">数据训练</h3>
                  <div className="text-blue-600 font-medium">灵活</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                独立训练机器人数据，支持问答型、文档型的知识库，知识库可共享。通过数据训练，用户可在前台以聊天对话模式快速查阅各类内部资料和文档
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">支持问答型、文档型知识库独立训练</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">知识库可共享，灵活配置权限</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">机器学习驱动，自动优化知识库内容</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 演示中心区域 */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-100 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 演示信息左侧内容 */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                在线演示
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">艺创AI-全能知识库PHP&Java<br />演示中心</h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                通过我们的在线演示系统，您可以亲身体验艺创AI-全能知识库PHP&Java的强大功能和直观界面，无需安装，即刻体验。
              </p>
              
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
                      <p className="text-sm font-medium text-gray-900">演示前台</p>
                      <p className="text-xs text-gray-500">https://www.cnai.art</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">自行注册</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">自行注册</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">体验后台</p>
                      <p className="text-xs text-gray-500">https://www.cnai.art/admin</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">联系客服</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">联系客服</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
                        访问
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">移动端</p>
                      <p className="text-xs text-gray-500">https://www.cnai.art/mobile</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">账号:</span>
                        <span className="text-xs font-medium">自行注册</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">密码:</span>
                        <span className="text-xs font-medium">自行注册</span>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
                        访问
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  申请专属演示
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  联系客服
                </Button>
              </div>
            </div>
            
            {/* 演示界面右侧展示 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* 演示界面主图 */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://artaigc.cn/assets/work.svg" 
                    alt="AI数字人演示界面" 
                    className="w-full rounded-lg"
                  />
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">艺创AI-全能知识库PHP&Java</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有知识库资产</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                
                {/* 移动端二维码 */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20250718115939d37a60656.jpg" 
                    alt="演示二维码" 
                    className="w-24 h-24 bg-white rounded-md"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">扫码体验移动端</p>
                </div>
                
                {/* 在线演示装饰元素 */}
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
    {/* 应用场景展示区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">应用场景</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">丰富的应用场景和解决方案，满足多种业务需求</p>
          </div>

          <Tabs defaultValue="virtualIP" className="w-full">
            <TabsList className="flex w-full mb-12 p-1 bg-gray-50 rounded-full max-w-3xl mx-auto">
              <TabsTrigger value="virtualIP" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">数据训练</TabsTrigger>
              <TabsTrigger value="digitalEmployee" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">知识库应用</TabsTrigger>
              <TabsTrigger value="contentCreation" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">内容创作</TabsTrigger>
              <TabsTrigger value="virtualLive" className="flex-1 text-center py-2.5 px-4 text-base font-medium rounded-full transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-100">虚拟直播</TabsTrigger>
            </TabsList>

            {/* 数据训练应用场景 */}
            <TabsContent value="virtualIP">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 场景介绍左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">数据训练</h3>
                  <p className="text-gray-600 mb-6">
                    面向文化传播、影视内容等多个行业，帮助打造数据训练，赋能品牌营销，提升品牌心智。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">品牌代言</h4>
                        <p className="text-sm text-gray-600">创建专属品牌虚拟形象，提升品牌辨识度和亲和力</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">内容创作</h4>
                        <p className="text-sm text-gray-600">为影视、游戏、动漫等行业提供高质量虚拟角色</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">社交互动</h4>
                        <p className="text-sm text-gray-600">打造虚拟社交形象，增强用户互动体验</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    查看详情
                  </Button>
                </div>
                
                {/* 场景展示右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/202404301708507bb6c4908.png  " 
                      alt="数据训练应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">数据训练解决方案</p>
                          <p className="text-white/80 text-sm">打造专属品牌虚拟形象</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 知识库应用应用场景 */}
            <TabsContent value="digitalEmployee">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">知识库应用</h3>
                  <p className="text-gray-600 mb-6">
                    为企业提供智能知识库应用解决方案，提高工作效率，降低人力成本，实现业务流程自动化。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">智能客服</h4>
                        <p className="text-sm text-gray-600">7×24小时在线服务，快速响应客户需求</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">销售助手</h4>
                        <p className="text-sm text-gray-600">智能推荐产品，提高转化率和客户满意度</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">培训讲师</h4>
                        <p className="text-sm text-gray-600">提供标准化培训内容，确保培训质量一致性</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    查看详情
                  </Button>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/2024043017093405e292244.png" 
                      alt="知识库应用应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <Bot className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">知识库应用解决方案</p>
                          <p className="text-white/80 text-sm">智能高效的业务助手</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 内容创作场景 */}
            <TabsContent value="contentCreation">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">内容创作</h3>
                  <p className="text-gray-600 mb-6">
                    为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">视频脚本</h4>
                        <p className="text-sm text-gray-600">快速生成专业视频脚本，提高内容创作效率</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">营销文案</h4>
                        <p className="text-sm text-gray-600">生成吸引人的营销文案，提高转化率</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">多语言翻译</h4>
                        <p className="text-sm text-gray-600">支持多语言内容创作和翻译，拓展全球市场</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    查看详情
                  </Button>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/20240430170946fe6af4788.png" 
                      alt="内容创作应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <PenTool className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">内容创作解决方案</p>
                          <p className="text-white/80 text-sm">高效智能的内容生产</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* 虚拟直播场景 */}
            <TabsContent value="virtualLive">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8">
                  <h3 className="text-2xl font-bold mb-4">虚拟直播</h3>
                  <p className="text-gray-600 mb-6">
                    为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">电商直播</h4>
                        <p className="text-sm text-gray-600">24小时不间断直播，提高商品曝光和销售</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">新闻播报</h4>
                        <p className="text-sm text-gray-600">实时生成新闻内容，提供专业播报服务</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">活动主持</h4>
                        <p className="text-sm text-gray-600">为线上活动提供专业主持服务，增强互动体验</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    查看详情
                  </Button>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://server.mddai.cn/uploads/images/2024043017080004b6e9791.png" 
                      alt="虚拟直播应用场景" 
                      className="w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                          <Tv className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium">虚拟直播解决方案</p>
                          <p className="text-white/80 text-sm">智能高效的直播助手</p>
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



      {/* 功能特色 - 卡片式布局 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">功能特色</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              提供机器人管理、知识库数据训练、AI数字人、AI大语言模型等多维度核心功能，满足企业智能化转型需求。
            </p>
          </div>

          {/* 场景卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 机器人管理 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-blue-50">
                <img 
                  src="https://server.mddai.cn/uploads/images/20240430170834b521c6017.png" 
                  alt="机器人管理" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">机器人管理</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  创建机器人，可单独创建和设置私有机器人。发布机器人，支持发布多种渠道，如网页、JS嵌入、API接口、微信公众号等等。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">支持私有机器人独立配置</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">多渠道发布：网页、JS嵌入、API、公众号等</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>

            {/* 知识库数据训练 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-blue-50">
                <img 
                  src="https://server.mddai.cn/uploads/images/202404301708507bb6c4908.png" 
                  alt="知识库数据训练" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">知识库数据训练</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  通过数据训练，用户在前台通过聊天对话模式快速查阅各种内部资料和文档。使用机器学习技术，让系统自动学习并优化知识库中的知识，提高知识库的准确性和智能性。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">对话式查阅企业内部资料</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">机器学习自动优化知识库</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>

            {/* AI数字人 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-blue-50">
                <img 
                  src="https://server.mddai.cn/uploads/images/2024043017080004b6e9791.png" 
                  alt="AI数字人" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">AI数字人</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  结合语音合成、语音识别、语义理解、图像处理、机器翻译、虚拟形象驱动等多项AI核心技术，实现信息播报、互动交流、业务咨询、服务导览等多项功能，满足新闻、政企、文旅、金融等多场景需求。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">多模态AI能力融合</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">适配多行业多场景应用</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>

            {/* AI大语言模型 */}
            <div className="flex flex-col rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-blue-50">
                <img 
                  src="https://server.mddai.cn/uploads/images/202404301708507bb6c4908.png" 
                  alt="AI大语言模型" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">AI大语言模型</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  支持GPT3.5、GPT4.0、api2d3.5、api2d4.0、ChatGLM（清华）等大语言模型，满足多样化智能对话和内容生成需求。
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">多模型灵活接入</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-2.5 w-2.5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">支持主流国产与国际大模型</p>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                  查看详情
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*功能特色*/}



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

          {/* 机器人管理 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">核心功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">机器人管理</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  支持创建/发布机器人，打造企业专属应用。
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-base leading-relaxed space-y-1 mt-4">
                  <li>
                    <span className="font-medium text-gray-900">创建机器人：</span>
                    可单独创建和设置私有机器人
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">发布机器人：</span>
                    支持发布多种渠道，如网页、JS嵌入、API接口、微信公众号等等
                  </li>
                </ul>
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
                  src="https://server.mddai.cn/uploads/images/20240430170834b521c6017.png" 
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

          {/* 知识库数据训练 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 右侧内容 */}
            <div className="lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">核心功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">知识库数据训练</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  独立训练机器人数据，支持问答型、文档型的知识库，知识库可共享。通过数据训练，用户可在前台通过聊天对话模式快速查阅各种内部资料和文档。系统采用机器学习技术，自动学习并优化知识库内容，不断提升知识库的准确性和智能性。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">独立训练</span>
                  </div>
                  <p className="text-sm text-gray-600">机器人数据独立训练</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多类型知识库</span>
                  </div>
                  <p className="text-sm text-gray-600">支持问答型、文档型</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">知识库共享</span>
                  </div>
                  <p className="text-sm text-gray-600">多机器人知识库共享</p>
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
                  src="https://server.mddai.cn/uploads/images/202404301708507bb6c4908.png" 
                  alt="知识库数据训练界面" 
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
                    <p className="font-semibold text-gray-900">知识库训练</p>
                    <p className="text-sm text-gray-500">持续优化</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI数字人 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">AI数字人</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">多形象对话</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  满足多用户需求，结合语音合成、语音识别、语义理解、图像处理、机器翻译、虚拟形象驱动等多项AI核心技术，实现了信息播报、互动交流、业务咨询、服务导览等多项功能，满足了新闻、政企、文旅、金融等多场景的需要。
                </p>
              </div>
              
              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多形象对话</span>
                  </div>
                  <p className="text-sm text-gray-600">支持多用户多形象互动</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">多场景适配</span>
                  </div>
                  <p className="text-sm text-gray-600">满足新闻、政企、文旅、金融等多场景需求</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">AI核心技术</span>
                  </div>
                  <p className="text-sm text-gray-600">语音合成/识别、语义理解、虚拟形象驱动</p>
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
                  src="https://server.mddai.cn/uploads/images/2024043017080004b6e9791.png" 
                  alt="AI数字人界面" 
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
                    <p className="font-semibold text-gray-900">AI数字人</p>
                    <p className="text-sm text-gray-500">多形象多场景</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
 {/* 产品核心功能 */}

          {/* 准备好开启您的AI之旅了吗？ */}
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
                      准备好开启您的<span className="text-blue-600">AI产品</span>了吗？
                    </h3>
                    <p className="text-gray-600 mb-6 text-base">
                      已有数百家企业和品牌通过我们的AI产品获得成功，实现了高效解决方案，提升了客户体验和运营效率，助力您的业务发展飞跃。
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
                            <h4 className="text-gray-900 font-medium text-lg">AI知识库</h4>
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

export default AiPage;

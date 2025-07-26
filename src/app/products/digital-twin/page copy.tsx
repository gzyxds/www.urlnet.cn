"use client";

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Brain, CheckCircle, Users, Bot, Play, Zap, Shield, BarChart3, Video, Mic, Tv, PenTool } from "lucide-react";
import { usePageMetadata } from '@/hooks/usePageMetadata';

const DigitalTwinPage = () => {
  // 添加状态来跟踪当前选中的场景标签
  const [activeScenario, setActiveScenario] = useState('virtualIP');
  
  // 设置页面元数据
  usePageMetadata({
    title: '虚拟数字人 - AI数字孪生技术解决方案 | 艺创AI',
    description: '基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型。包括数字分身、声音克隆、虚拟IP等多种功能。',
    keywords: '数字孪生,虚拟数字人,AI数字人,声音克隆,数字分身,虚拟IP,数字员工,内容创作,虚拟直播'
  });
  
  const features = [
    {
      icon: <Video className="h-5 w-5" />,
      title: "数字分身",
      description: "创建逼真的数字人形象，支持个性化定制，满足不同场景需求。"
    },
    {
      icon: <Mic className="h-5 w-5" />,
      title: "声音克隆",
      description: "基于先进的语音合成技术，可以克隆指定声音，实现自然流畅的语音交互。"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "非免安装",
      description: "无需复杂安装过程，开箱即用，快速部署到您的系统中。"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "预设文案模板",
      description: "内置多种行业文案模板，快速生成专业内容，提高工作效率。"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "分销中心",
      description: "完善的分销系统，支持多级分销，帮助合作伙伴共同成长。"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "实时热点",
      description: "自动抓取热门话题，生成相关内容，保持信息的时效性和吸引力。"
    }
  ];

  const scenarios = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "零售场景",
      description: "为线上线下零售提供智能客服和销售顾问，提升用户体验和转化率，减少人工成本。"
    },
    {
      icon: <Bot className="h-6 w-6 text-purple-500" />,
      title: "虚拟数字人",
      description: "创建企业专属虚拟形象，作为品牌代言人与用户互动，提升品牌亲和力和影响力。"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "智能客服",
      description: "提供全天候智能客服服务，快速响应用户咨询，解决常见问题，提高客户满意度。"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>虚拟数字人 - AI数字孪生技术解决方案 | 艺创AI</title>
        <meta name="description" content="基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型。包括数字分身、声音克隆、虚拟IP等多种功能。" />
        <meta name="keywords" content="数字孪生,虚拟数字人,AI数字人,声音克隆,数字分身,虚拟IP,数字员工,内容创作,虚拟直播" />
      </Helmet>
      {/* 头部横幅 - 参考火山引擎风格 */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* 左侧内容 */}
            <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                数字孪生技术
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">虚拟数字人</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型
              </p>
              
              {/* 数据指标 */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">98.5<span className="text-base font-normal">万+</span></span>
                  <span className="text-sm text-gray-500 mt-1">日活用户</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">500<span className="text-base font-normal">ms</span></span>
                  <span className="text-sm text-gray-500 mt-1">响应速度</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">5<span className="text-base font-normal">min起</span></span>
                  <span className="text-sm text-gray-500 mt-1">训练时长</span>
                </div>
              </div>
              
              {/* 按钮组 */}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-lg">
                  立即试用
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 h-auto text-base font-medium rounded-lg">
                  了解更多
                </Button>
              </div>
            </div>
            
            {/* 右侧图形 */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                {/* 主图 */}
                <div className="relative mx-auto">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20241128195610379379917.png" 
                    alt="AI数字人界面展示" 
                    className="w-full rounded-lg shadow-lg"
                  />
                  
                  {/* 悬浮标签 */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-md p-4 flex items-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">视频生成</p>
                      <p className="text-xs text-gray-500">高清视频合成</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-md p-4 flex items-center">
                    <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mr-3">
                      <Mic className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">声音克隆</p>
                      <p className="text-xs text-gray-500">实时语音合成</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">产品优势</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">多维度产品优势，助力企业数字化升级</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* 产品卡片1 - 数字分身训练数据 */}
            <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-500 p-6 text-white">
                <h3 className="text-lg font-medium mb-1">数字分身训练数据</h3>
                <div className="text-4xl font-bold">5min</div>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="text-sm text-gray-700 font-medium mb-4">形象自然丰富</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">超短时间即可生成分身</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">口型自然，表情丰富，30+表情</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">量产功能，批量生成和转换</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片2 - 声音复刻训练数据 */}
            <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-cyan-500 p-6 text-white">
                <h3 className="text-lg font-medium mb-1">声音复刻训练数据</h3>
                <div className="text-4xl font-bold">10min</div>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="text-sm text-gray-700 font-medium mb-4">多元高质生成能力</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">超短时高质量声音复刻</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">情绪转换和语音表达，保留个性</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">提供语音合成，多20+种语言</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片3 - 数字人整体效果达 */}
            <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-400 p-6 text-white">
                <h3 className="text-lg font-medium mb-1">数字人整体效果达</h3>
                <div className="text-4xl font-bold">MOS4.0</div>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="text-sm text-gray-700 font-medium mb-4">强大AI技术能力</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">行业领先的研究模型支持技术</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">感知准确率达98.5%</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">数字人响应时间仅需500ms</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 产品卡片4 - 集成和接入方式 */}
            <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-blue-600 p-6 text-white">
                <h3 className="text-lg font-medium mb-1">集成和接入方式</h3>
                <div className="text-4xl font-bold">灵活</div>
              </div>
              <div className="bg-gray-50 p-6">
                <p className="text-sm text-gray-700 font-medium mb-4">快速接入</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">API、SDK多种接入方式</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">APP/Web/小程序全端支持</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">公有云、私有化部署选择</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 演示中心 - 左右布局 */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-100 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 左侧内容 */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                在线演示
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI数字人SaaS系统2.0<br />演示中心</h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
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
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
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
                      <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
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
            
            {/* 右侧内容 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* 主要演示图 */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20241128195611806125108.png" 
                    alt="AI数字人演示界面" 
                    className="w-full rounded-lg"
                  />
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">数字人管理平台</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有数字人资产</p>
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
                    src="https://server.mddai.cn/uploads/images/20250718115939d37a60656.jpg" 
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

      {/* 应用场景 - 标签式布局 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">应用场景</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">丰富的应用场景和解决方案，满足多种业务需求</p>
          </div>

          {/* 场景标签导航 */}
          <div className="flex justify-center mb-12 border-b border-gray-200">
            <button 
              className={`px-6 py-3 font-medium ${activeScenario === 'virtualIP' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveScenario('virtualIP')}
            >
              虚拟IP
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeScenario === 'digitalEmployee' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveScenario('digitalEmployee')}
            >
              数字员工
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeScenario === 'contentCreation' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveScenario('contentCreation')}
            >
              内容创作
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeScenario === 'virtualLive' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveScenario('virtualLive')}
            >
              虚拟直播
            </button>
          </div>

          {/* 虚拟IP场景 */}
          {activeScenario === 'virtualIP' && (
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* 左侧内容 */}
              <div className="w-full lg:w-1/2 lg:pr-8">
                <h3 className="text-2xl font-bold mb-4">虚拟IP</h3>
                <p className="text-gray-600 mb-6">
                  面向文化传播、影视内容等多个行业，帮助打造虚拟IP，赋能品牌营销，提升品牌心智。
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
              
              {/* 右侧图片 */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://artaigc.cn/assets/img/human1.png" 
                    alt="虚拟IP应用场景" 
                    className="w-full rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-white font-medium">虚拟IP解决方案</p>
                        <p className="text-white/80 text-sm">打造专属品牌虚拟形象</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 数字员工场景 */}
          {activeScenario === 'digitalEmployee' && (
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* 左侧内容 */}
              <div className="w-full lg:w-1/2 lg:pr-8">
                <h3 className="text-2xl font-bold mb-4">数字员工</h3>
                <p className="text-gray-600 mb-6">
                  为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。
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
                    src="https://artaigc.cn/assets/img/human2.png" 
                    alt="数字员工应用场景" 
                    className="w-full rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                        <Bot className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-white font-medium">数字员工解决方案</p>
                        <p className="text-white/80 text-sm">智能高效的业务助手</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 内容创作场景 */}
          {activeScenario === 'contentCreation' && (
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
                    src="https://server.mddai.cn/uploads/images/202411281956113c42f8382.png" 
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
          )}

          {/* 虚拟直播场景 */}
          {activeScenario === 'virtualLive' && (
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
                    src="https://server.mddai.cn/uploads/images/20241128195610379379917.png" 
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
          )}
        </div>
      </section>

      {/* 产品介绍 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">产品核心功能</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          {/* 数字分身 */}
          <div className="flex flex-col md:flex-row items-center mb-24 overflow-hidden">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="p-8 h-full relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">核心功能</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">数字分身</h3>
                <p className="text-gray-600 mb-6">
                  轻松创建你的AI虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">高清还原 100%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">形象生成 100%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">定制形象</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    查看演示
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    购买授权
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 right-10 w-32 h-32 rounded-full opacity-50 blur-xl"></div>
                <img 
                  src="https://artaigc.cn/assets/img/human1.png" 
                  alt="数字人形象" 
                  className="rounded-2xl shadow-lg w-full relative z-10"
                />
                <div className="absolute top-1/4 right-0 transform translate-x-1/4 bg-white rounded-xl shadow-lg p-3 z-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full overflow-hidden">
                      <img 
                        src="https://server.mddai.cn/uploads/images/202411281956113c42f8382.png" 
                        alt="头像" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium">数字分身形象</p>
                      <p className="text-xs text-gray-500">已生成</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 声音克隆 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-24 overflow-hidden">
            <div className="w-full md:w-1/2 md:pl-12 mb-8 md:mb-0">
              <div className="p-8 h-full relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">热门功能</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">声音克隆</h3>
                <p className="text-gray-600 mb-6">
                  有声胜过一个性格说，仅需1句话，快速克隆你的声色，配合文案即可生成专属声音口播内容！
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">声音还原 100%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">语音转换 100%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">超逼真 100%</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    查看演示
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    购买授权
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-10 left-10 w-32 h-32 rounded-full opacity-50 blur-xl"></div>
                <img 
                  src="https://artaigc.cn/assets/img/human2.png" 
                  alt="声音克隆界面" 
                  className="rounded-2xl shadow-lg w-full relative z-10"
                />
                <div className="absolute top-1/3 left-0 transform -translate-x-1/4 bg-white rounded-xl shadow-lg p-3 z-20">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium">声音克隆</p>
                      <p className="text-xs text-gray-500">已完成</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 用户管理 */}
          <div className="flex flex-col md:flex-row items-center overflow-hidden">
            <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="p-8 h-full relative">
                <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">实用功能</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">用户管理</h3>
                <p className="text-gray-600 mb-6">
                  基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">多级分站</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">账户管理</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">权限管理</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    查看演示
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    购买授权
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 right-10 w-32 h-32 rounded-full opacity-50 blur-xl"></div>
                <img 
                  src="https://server.mddai.cn/uploads/images/20241128195611806125108.png" 
                  alt="用户管理界面" 
                  className="rounded-2xl shadow-lg w-full relative z-10"
                />
                <div className="absolute bottom-10 right-0 transform translate-x-1/4 bg-white rounded-xl shadow-lg p-3 z-20">
                  <img 
                    src="https://server.mddai.cn/uploads/images/20241128195611806125108.png" 
                    alt="用户管理小图" 
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 应用场景 */}
         

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

export default DigitalTwinPage;

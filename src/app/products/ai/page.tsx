"use client";

import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Mic, Tv, PenTool } from "lucide-react";
import { usePageMetadata } from '@/hooks/usePageMetadata';

const AiPage = () => {
  usePageMetadata({
    title: '艺创AI_全能AI知识库系统_全能AI知识库系统源码_AIGC系统',
    description: '艺创AI全能AI知识库系统是一款基于PHP和Java双语言开发的AI知识库系统,支持私有化部署,提供知识库训练、智能问答、数字人等多种功能,是企业打造数字化转型的理想选择',
    keywords: '全能AI知识库系统,全能AI知识库系统源码,全能AI知识库系统源码,AI知识库系统,AI知识库系统源码'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅区域 - 现代化简约设计，白黑蓝配色方案 */}
      <section className="relative min-h-screen sm:min-h-[80vh] flex items-center overflow-hidden pt-8 sm:pt-12 lg:pt-16">
        {/* 简约几何背景装饰 */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-50/50 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
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
                V2.0 全新升级
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* 左侧内容区 - 响应式优化 */}
            <div className="text-center lg:text-left">
              {/* 主标题 - 响应式字体大小 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black mb-6 sm:mb-8 leading-tight">
                <div className="pt-6"> {/* 为艺创AI span增加顶部间距 */}
                  <span className="block">
                    <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                      艺创AI
                    </span>
                  </span>
                </div>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-4">
                  全能AI知识库
                </span>
              </h1>

              {/* 副标题 - 响应式字体和间距 */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                基于先进的AI技术，提供高度拟真的数字人解决方案，
                <span className="text-blue-600 font-semibold">赋能企业知识管理与数字化转型</span>，
                让智能服务触手可及
              </p>
              {/* 核心特性标签 - 响应式布局 */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 backdrop-blur-sm rounded-full text-gray-800 text-xs sm:text-sm border border-gray-300 flex items-center">
                  <Bot className="w-3.5 h-3.5 mr-1" /> 智能知识库
                </span>
                 <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 backdrop-blur-sm rounded-full text-gray-800 text-xs sm:text-sm border border-gray-300 flex items-center">
                  <Users className="w-3.5 h-3.5 mr-1" /> 数字人克隆
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-300 flex items-center">
                  <Video className="w-3.5 h-3.5 mr-1" /> 视频生成
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 backdrop-blur-sm rounded-full text-gray-800 text-xs sm:text-sm border border-gray-300 flex items-center">
                  <Mic className="w-3.5 h-3.5 mr-1" /> 语音合成
                </span>
              </div>

              {/* 行动按钮组 - 响应式按钮布局 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
                <Button
                  className="relative overflow-hidden bg-blue-600 text-white px-8 py-3 h-auto text-sm sm:text-base font-bold rounded-full group"
                  onClick={() => window.location.href = "/demo"}
                >
                  <span className="relative z-10">立即体验</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-500"></div>
                </Button>
                <Button
                  variant="outline"
                  className="relative overflow-hidden border-2 border-blue-600 text-blue-600 px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-full group"
                  onClick={() => {
                    // 触发自定义事件来显示二维码弹窗
                    const event = new CustomEvent('showQRCodeModal');
                    window.dispatchEvent(event);
                  }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">联系客服</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 bg-blue-600"></div>
                </Button>
              </div>

              {/* 实时数据展示 - 响应式网格 */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">98.5万+</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">日活跃用户</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">500ms</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">极速响应</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">5min起</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">快速训练</div>
                </div>
              </div>
            </div>

            {/* 右侧展示区 - 响应式优化 */}
            <div className="relative mt-8 lg:mt-0 mx-4 sm:mx-0">
              {/* 主展示容器 - 响应式尺寸 */}
              <div className="relative">
                {/* 展示卡片 - 优化移动端高度，增加平板断点 */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 border border-gray-100 transition-all duration-300 min-h-[380px] sm:min-h-[460px] md:min-h-[500px]">
                  {/* 顶部状态栏 - 响应式布局 */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 bg-blue-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">艺创AI知识库</h3>
                        <p className="text-xs sm:text-sm text-gray-500">智能问答 | 数字人服务</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">在线服务中</span>
                      <span className="text-xs text-gray-600 sm:hidden">在线</span>
                    </div>
                  </div>

                  {/* 对话展示区 - 优化响应式设计 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 mb-4 sm:mb-6 min-h-[170px] sm:min-h-[220px] md:min-h-[250px] transition-all duration-300 hover:shadow-md">
                    <div className="space-y-3 sm:space-y-5">
                      {/* AI消息 */}
                      <div className="flex gap-2 sm:gap-3 items-start animate-fade-in">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                          <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
                          <span className="sr-only">AI助手</span>
                        </div>
                        <div className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none p-2.5 sm:p-3.5 max-w-[calc(100%-3rem)] sm:max-w-xs">
                          <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">您好！我可以为您提供专业的知识问答和数字人服务</p>
                        </div>
                      </div>

                      {/* 用户消息 */}
                      <div className="flex gap-2 sm:gap-3 justify-end items-start animate-fade-in animation-delay-300">
                        <div className="bg-blue-600 rounded-xl sm:rounded-2xl rounded-tr-none p-2.5 sm:p-3.5 max-w-[calc(100%-3rem)] sm:max-w-xs">
                          <p className="text-white text-xs sm:text-sm leading-relaxed">请帮我创建一个数字人培训师</p>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center shadow-sm">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
                          <span className="sr-only">用户</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 功能展示区 - 响应式网格 */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {/* 知识库功能卡片 */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 text-white transition-all duration-300 group">
                      <PenTool className="w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <h4 className="font-medium mb-0.5 sm:mb-1.5 text-xs sm:text-sm">知识库</h4>
                      <p className="text-xs text-blue-100 hidden sm:block opacity-80">智能问答系统</p>
                    </div>

                    {/* 数字人功能卡片 */}
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 text-white transition-all duration-300 group">
                      <Video className="w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <h4 className="font-medium mb-0.5 sm:mb-1.5 text-xs sm:text-sm">数字人</h4>
                      <p className="text-xs text-indigo-100 hidden sm:block opacity-80">虚拟形象生成</p>
                    </div>

                    {/* 语音合成功能卡片 */}
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 text-white transition-all duration-300 group">
                      <Mic className="w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <h4 className="font-medium mb-0.5 sm:mb-1.5 text-xs sm:text-sm">语音合成</h4>
                      <p className="text-xs text-purple-100 hidden sm:block opacity-80">AI声音克隆</p>
                    </div>
                  </div>
                </div>

                {/* 装饰浮动元素 - 响应式位置和大小，增加平板断点 */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg animate-float transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      智能问答
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg animate-float animation-delay-2000 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <Video className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                    <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-black whitespace-nowrap">
                      知识库数据训练
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 技术标签展示 - 简约线条设计 */}
          <div className="flex justify-center mt-16 sm:mt-20">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl">
              {['自然语言处理', '计算机视觉', '深度学习', '知识图谱', '多模态融合'].map((tag, index) => (
                <div key={index} className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                  {tag}
                </div>
              ))}
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
            .animation-delay-300 {
              animation-delay: 0.3s;
            }
            .rotate-3d {
              transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
              animation: fadeIn 0.5s ease-out forwards;
            }
          `
        }} />
 </section>
{/*  英雄区块结束 */}


      {/* 产品优势展示区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">产品优势</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">多维度产品优势，助力企业数字化升级</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 企业智能客服功能卡片 */}
            <div className="bg-white p-6 hover:shadow-sm transition-shadow border-b-2 border-transparent hover:border-blue-500">
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">企业智能客服</h3>
                <div className="text-sm text-gray-500">快速部署</div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                企业可以上传产品资料、FAQ手册等信息，完成训练后，对外发布智能客服聊天窗口。
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>快速训练专属客服</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>灵活集成部署</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>24小时在线服务</span>
                </li>
              </ul>
            </div>

            {/* 企业知识库功能卡片 */}
            <div className="bg-white p-6 hover:shadow-sm transition-shadow border-b-2 border-transparent hover:border-blue-500">
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <Bot className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">企业知识库</h3>
                <div className="text-sm text-gray-500">专属AI训练</div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                企业可以上传产品文档、合同内容等信息，完成训练后，仅限内部员工访问使用。
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>多类型文档支持</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>内部安全访问</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>高效信息检索</span>
                </li>
              </ul>
            </div>

            {/* 专家顾问助理功能卡片 */}
            <div className="bg-white p-6 hover:shadow-sm transition-shadow border-b-2 border-transparent hover:border-blue-500">
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <PenTool className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">专家顾问助理</h3>
                <div className="text-sm text-gray-500">MOS4.0</div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                基于先进AI模型，提供专业的顾问咨询服务，快速响应各类专业咨询需求。
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>领先研究模型</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>98.5%准确率</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>500ms响应时间</span>
                </li>
              </ul>
            </div>

            {/* 数据训练功能卡片 */}
            <div className="bg-white p-6 hover:shadow-sm transition-shadow border-b-2 border-transparent hover:border-blue-500">
              <div className="mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <Tv className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">数据训练</h3>
                <div className="text-sm text-gray-500">灵活配置</div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                支持多种类型知识库训练，可灵活配置访问权限，实现知识共享与管理。
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>多类型知识库</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>灵活权限配置</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-blue-500 mr-2" />
                  <span>自动优化内容</span>
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
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 bg-blue-600 mr-2"></span>
                在线演示
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">艺创AI-全能知识库PHP&Java<br />演示中心</h2>

              <p className="text-gray-600 mb-8 text-lg">
                通过我们的在线演示系统，您可以亲身体验艺创AI-全能知识库PHP&Java的强大功能和直观界面，无需安装，即刻体验。
              </p>

              <div className="bg-white shadow-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mr-3">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium">演示账号信息</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">演示前台</p>
                      <p className="text-xs text-blue-600">https://www.cnai.art</p>
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

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">体验后台</p>
                      <p className="text-xs text-blue-600">https://www.cnai.art/admin</p>
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

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-gray-900">移动端</p>
                      <p className="text-xs text-blue-600">https://www.cnai.art/mobile</p>
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none">
                  申请专属演示
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none">
                  联系客服
                </Button>
              </div>
            </div>

            {/* 演示界面右侧展示 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* 演示界面主图 */}
                <div className="bg-white p-6 shadow-lg">
                  <img
                    src="/product/work.svg"
                    alt="AI数字人演示界面"
                    className="w-full"
                  />

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">艺创AI-全能知识库PHP&Java</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有知识库资产</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-red-500"></div>
                      <div className="w-2 h-2 bg-yellow-500"></div>
                      <div className="w-2 h-2 bg-green-500"></div>
                    </div>
                  </div>
                </div>

                {/* 移动端二维码 */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-xl">
                  <img
                    src="/images/qrcode.png"
                    alt="演示二维码"
                    className="w-24 h-24 bg-white rounded-lg"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">扫码体验移动端</p>
                </div>

                {/* 在线演示装饰元素 */}
                <div className="absolute -top-6 -left-6 bg-blue-600 p-4 shadow-lg rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded-lg">
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
      <section className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200/50 text-slate-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              应用场景
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
              多元化应用场景
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              覆盖多个行业领域，提供专业的AI解决方案，助力企业数字化转型升级
            </p>
          </div>

          {/* 场景卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 [&>*]:rounded-none">
            {/* 数据训练卡片 */}
            <div className="relative bg-white/95 backdrop-blur-sm p-8 shadow-sm border border-slate-200/50 rounded-2xl">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">数据训练</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  面向文化传播、影视内容等多个行业，帮助打造数据训练，赋能品牌营销
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    品牌代言形象
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    虚拟角色创作
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    社交互动体验
                  </div>
                </div>
                <Button className="w-full bg-white text-gray-900 border border-gray-200 py-2.5 font-medium hover:bg-white">
                  了解更多
                </Button>
              </div>
            </div>

            {/* 知识库应用卡片 */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-200/50">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <Bot className="h-6 w-6 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">知识库应用</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  为企业提供智能知识库应用解决方案，提高工作效率，降低人力成本
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    智能客服系统
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    销售助手工具
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    培训讲师服务
                  </div>
                </div>
               <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-white">
                  了解更多
                </Button>
              </div>
            </div>

            {/* 内容创作卡片 */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-200/50">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <PenTool className="h-6 w-6 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">内容创作</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  为媒体、自媒体、营销团队提供智能内容创作解决方案
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    视频脚本生成
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    营销文案创作
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    多语言翻译
                  </div>
                </div>
                <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-white">
                  了解更多
                </Button>
              </div>
            </div>

            {/* 虚拟直播卡片 */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-200/50">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <Tv className="h-6 w-6 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">虚拟直播</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  为直播行业提供虚拟主播解决方案，降低直播成本，提高效率
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    电商直播带货
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    新闻播报服务
                  </div>
                  <div className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    活动主持互动
                  </div>
                </div>
                <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-white">
                  了解更多
                </Button>
              </div>
            </div>
          </div>

          {/* 底部展示区域 */}
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-md border border-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 左侧内容 */}
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                  全场景覆盖
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  一站式AI解决方案
                  <br />
                  <span className="text-blue-600">
                    赋能业务增长
                  </span>
                </h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  从数据训练到内容创作，从智能客服到虚拟直播，我们提供完整的AI产品矩阵，
                  帮助企业在数字化转型中抢占先机，实现业务的快速增长和效率提升。
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-sm text-slate-600">企业客户</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                    <div className="text-sm text-slate-600">服务可用性</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 rounded-none font-medium transition-all duration-300">
                    立即体验
                  </Button>
                  <Button variant="outline" className="border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 px-8 py-3 rounded-none font-medium transition-all duration-300">
                    查看案例
                  </Button>
                </div>
              </div>

              {/* 右侧图片展示 */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/industry-application.be882574.png"
                    alt="AI应用场景展示"
                    className="w-full h-auto rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
                {/* 浮动装饰元素 */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-2xl blur-lg animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-400/20 rounded-2xl blur-lg animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 应用场景展示区域 */}


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
            <div className="flex flex-col rounded-none overflow-hidden shadow-md border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                {/* 模拟机器人管理界面 */}
                <div className="w-full h-full p-4 relative">
                  {/* 顶部导航栏 */}
                  <div className="h-8 bg-white rounded-lg shadow-sm flex items-center px-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  {/* 主内容区 */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
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
               <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-white">
                  了解更多
                </Button>
              </div>
            </div>

            {/* 知识库数据训练 */}
            <div className="flex flex-col rounded-none overflow-hidden shadow-md border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-blue-50">
                {/* 模拟知识库训练界面 */}
                <div className="w-full h-full p-4 bg-white">
                  {/* 顶部进度条 */}
                  <div className="h-2 bg-gray-100 rounded-full mb-4">
                    <div className="h-full w-3/4 bg-blue-600 rounded-full animate-pulse"></div>
                  </div>
                  {/* 模拟文档列表 */}
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                        <PenTool className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2 mt-2"></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                        <PenTool className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/3 mt-2"></div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                        <PenTool className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/4 mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-white">
                  了解更多
                </Button>
              </div>
            </div>

            {/* AI数字人 */}
            <div className="flex flex-col rounded-none overflow-hidden shadow-md border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                {/* 模拟AI数字人界面 */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* 模拟数字人形象 */}
                  <div className="absolute w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <Users className="w-12 h-12 text-blue-600 mb-2" />
                    <div className="text-sm font-medium text-blue-600">AI数字人演示</div>
                  </div>
                  {/* 装饰元素 */}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-white/80 rounded-full text-xs text-blue-600 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                    在线演示中
                  </div>
                </div>
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
                <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-white">
                  了解更多
                </Button>
              </div>
            </div>

            {/* AI大语言模型 */}
            <div className="flex flex-col rounded-none overflow-hidden shadow-md border border-gray-200">
              <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                {/* 模拟AI界面的示意图 */}
                <div className="w-full h-full p-4 flex flex-col">
                  {/* 模拟对话界面 */}
                  <div className="flex-1 bg-white/80 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white rounded-xl p-3 shadow-sm max-w-[80%]">
                        <p className="text-sm text-gray-800">您好！我是AI助手，可以为您提供智能对话服务。</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-blue-600 rounded-xl p-3 shadow-sm max-w-[80%]">
                        <p className="text-sm text-white">请帮我分析一下这段数据。</p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* 模拟输入框 */}
                  <div className="mt-3 bg-white/80 rounded-xl p-2 backdrop-blur-sm flex items-center">
                    <div className="flex-1 h-8 bg-gray-100/50 rounded-lg"></div>
                    <button className="ml-2 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
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
                <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-white">
                  了解更多
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

          {/* AIGC专区 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">全部商品</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AIGC专区</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  数字人、生图、写作、视频，AI助力企业提效。
                </p>
                <ul className="list-disc pl-5 text-gray-600 text-base leading-relaxed space-y-1 mt-4">
                  <li>
                    <span className="font-medium text-gray-900">海量数字人形象：</span>
                    覆盖电商、直播、广告等领域，助力企业视频内容生产
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">极速定制：</span>
                    短期极速定制虚拟人形象，企业级形象快速创建，帮助企业品牌快速传播
                  </li>
                </ul>
              </div>

              {/* 按钮 */}
              <div className="flex space-x-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-none shadow-lg flex items-center"
                  onClick={() => window.location.href = "/demo"}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-none flex items-center"
                  onClick={() => window.open("https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20", "_blank")}
                >
                  <Check className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>
             {/* 按钮 */}

            {/* 右侧视频 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-writing.37942fd6.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl shadow-lg"
                >
                  {/* 视频不支持时显示的替代内容 */}
                  <img
                    src="https://res.qiyukf.net/operation/0a99dec9aafbb4c7c36749bc9bad3400"
                    alt="数字人形象"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </video>
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
                    <p className="font-semibold text-gray-900">AIGC专区</p>
                    <p className="text-sm text-gray-500">数字人、生图、写作、视频</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 营销获客 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* 右侧内容 */}
            <div className="lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">核心功能</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">营销获客</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  为短视频创作者及抖音经营者提供智能灵感挖掘、智能剧本创作、智能视频生成、智能客服回复等AI工具，增强曝光及品牌影响力，全面提升获客转化率。精准挖掘潜在客户，提供创意文案生成，提升营销效果。
                </p>
              </div>

              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">智能创作</span>
                  </div>
                  <p className="text-sm text-gray-600">灵感挖掘与剧本创作</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">创意文案</span>
                  </div>
                  <p className="text-sm text-gray-600">智能生成营销文案</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">获客转化</span>
                  </div>
                  <p className="text-sm text-gray-600">提升营销获客效果</p>
                </div>
              </div>

             {/* 按钮 */}
              <div className="flex space-x-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-none shadow-lg flex items-center"
                  onClick={() => window.location.href = "/demo"}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-none flex items-center"
                  onClick={() => window.open("https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20", "_blank")}
                >
                  <Check className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>
             {/* 按钮 */}

            {/* 左侧图片 */}
            <div className="lg:order-1 relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/market-interaction.20054d0c.png"
                  alt="营销获客界面"
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
                    <p className="font-semibold text-gray-900">营销获客</p>
                    <p className="text-sm text-gray-500">提升营销获客效果</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3.多形象对话 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">爆款文案生成</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">智能文案创作</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  为内容创作者提供全网灵感洞察、智能文案生成服务，结合AI大语言模型和创意写作能力，一键生成爆款短视频剧本、直播话术和图文内容，让创作更轻松、更高效，助力打造爆款内容。
                </p>
              </div>

              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">短视频剧本</span>
                  </div>
                  <p className="text-sm text-gray-600">智能生成爆款视频文案和直播话术</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">平台适配</span>
                  </div>
                  <p className="text-sm text-gray-600">小红书/抖音等平台风格文案生成</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="font-medium text-gray-900">灵感洞察</span>
                  </div>
                  <p className="text-sm text-gray-600">全网热点分析，智能创意推荐</p>
                </div>
              </div>

              {/* 按钮 */}
              <div className="flex space-x-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-none shadow-lg flex items-center"
                  onClick={() => window.location.href = "/demo"}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-none flex items-center"
                  onClick={() => window.open("https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20", "_blank")}
                >
                  <Check className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>
             {/* 按钮 */}

            {/* 右侧图片 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-writing.37942fd6.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl shadow-lg"
                >
                  {/* 视频不支持时显示的替代内容 */}
                  <img
                    src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/industry-application.be882574.png"
                    alt="AI数字人界面"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </video>
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
                    <p className="font-semibold text-gray-900">爆款文案生成</p>
                    <p className="text-sm text-gray-500">智能文案创作</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4.视频生成 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
            {/* 左侧图片 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-2xl shadow-lg"
                >
                  {/* 视频不支持时显示的替代内容 */}
                  <img
                    src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/industry-application.be882574.png"
                    alt="AI视频生成界面"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </video>
              </div>
              {/* 悬浮标签 */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                    <Video className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI视频</p>
                    <p className="text-sm text-gray-500">一键生成营销视频</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧内容 */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">视频生成</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI一键自动生成视频</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  从容应对内容创作和营销需求，助力商家和创作者提升视频生成的效率，更好的在公私域做好内容营销，助力GMV提升。
                </p>
              </div>

              {/* 功能特性 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <Video className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">一键生成</span>
                  </div>
                  <p className="text-sm text-gray-600">快速生成营销视频</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <Play className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">多场景适配</span>
                  </div>
                  <p className="text-sm text-gray-600">公私域内容营销场景</p>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <PenTool className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">效率提升</span>
                  </div>
                  <p className="text-sm text-gray-600">显著提升内容创作效率</p>
                </div>
              </div>

              {/* 按钮 */}
              <div className="flex space-x-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-none shadow-lg flex items-center"
                  onClick={() => window.location.href = "/demo"}
                >
                  <Play className="w-4 h-4 mr-2" />
                  立即体验
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-none flex items-center"
                  onClick={() => window.open("https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20", "_blank")}
                >
                  <Check className="w-4 h-4 mr-2" />
                  购买授权
                </Button>
              </div>
            </div>
           </div>
          {/* 按钮 */}
 {/* 产品核心功能 */}

          {/* 准备好开启您的AI之旅了吗？ */}
          <div className="py-20">
            <div className="bg-white rounded-none overflow-hidden relative border border-gray-200">
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
                    基于Vue3和ThinkPHP技术栈开发,支持PC端和H5端。系统支持多种文档格式导入,完成AI训练后可进行智能问答。
                    提供网页窗口、API等多种接入方式,可快速对接第三方系统。适用于企业智能客服、智能文档、顾问助理等多种商用场景。
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
                            <h4 className="text-gray-900 font-medium text-lg">AI知识库</h4>
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

export default AiPage;

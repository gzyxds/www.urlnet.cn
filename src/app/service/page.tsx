"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>支持与服务 - 火山引擎云服务 | 艺创AI</title>
        <meta name="description" content="火山引擎提供专业的售前及售后服务，助力您轻松开启上云之旅。提供24/7技术支持、在线客服、电话支持等多种服务方式。" />
        <meta name="keywords" content="支持与服务,火山引擎,云服务,技术支持,在线客服,售前咨询,售后服务" />
      </Helmet>

      {/* 支持与服务横幅 */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden relative">
        <div className="container mx-auto px-4 relative">
          {/* 背景装饰云朵 */}
          <div className="absolute top-16 right-24 w-48 h-32 bg-white/40 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-48 w-36 h-24 bg-white/30 rounded-full blur-lg"></div>
          <div className="absolute bottom-24 right-16 w-56 h-36 bg-white/50 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-80 w-28 h-20 bg-white/25 rounded-full blur-md"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* 左侧内容 */}
            <div className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">支持与服务</h1>
              <p className="text-base text-gray-700 mb-3 font-medium">
                火山引擎提供专业的售前及售后服务
              </p>
              <p className="text-sm text-gray-600 mb-6">
                助力您轻松开启上云之旅
              </p>
              
              {/* 服务特色 */}
              <div className="flex flex-col space-y-2 mb-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">火山引擎提供专业的售前及售后服务</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mr-2">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">配备专业技术团队提供上云支持</span>
                </div>
              </div>
              
              {/* 按钮 */}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 h-auto text-sm font-medium rounded-lg shadow-lg">
                立即咨询
              </Button>
            </div>
            
            {/* 右侧现代化服务展示 */}
            <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[400px]">
              <div className="relative max-w-sm w-full">
                {/* 主要服务卡片组 */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {/* 在线客服卡片 */}
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-xs mb-1">在线客服</h3>
                      <p className="text-xs text-green-500 mb-1">● 24/7在线</p>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                        <div className="bg-blue-500 h-1.5 rounded-full w-4/5"></div>
                      </div>
                      <span className="text-xs text-gray-500">响应率 98%</span>
                    </div>
                  </div>

                  {/* 技术支持卡片 */}
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-xs mb-1">技术支持</h3>
                      <p className="text-xs text-blue-500 mb-1">● 专业团队</p>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                        <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                      </div>
                      <span className="text-xs text-gray-500">满意度 99%</span>
                    </div>
                  </div>

                  {/* 电话支持卡片 */}
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-xs mb-1">电话支持</h3>
                      <p className="text-xs text-purple-500 mb-1">● 即时响应</p>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                        <div className="bg-purple-500 h-1.5 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-xs text-gray-500">平均 30s</span>
                    </div>
                  </div>

                  {/* 邮件支持卡片 */}
                  <div className="bg-white rounded-xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-xs mb-1">邮件支持</h3>
                      <p className="text-xs text-orange-500 mb-1">● 详细解答</p>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                        <div className="bg-orange-500 h-1.5 rounded-full w-5/6"></div>
                      </div>
                      <span className="text-xs text-gray-500">2小时内</span>
                    </div>
                  </div>
                </div>

                {/* 中心连接线装饰 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  {/* 连接线 */}
                  <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 -translate-x-3 rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 -translate-x-3 -rotate-45"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 -translate-x-3 rotate-135"></div>
                  <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 -translate-x-3 -rotate-135"></div>
                </div>

                {/* 浮动装饰元素 */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-12 left-8 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-12 right-12 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">服务优势</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">多维度服务优势，为您提供全方位技术支持</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 专业团队 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">专业团队</h3>
              <p className="text-gray-600">拥有资深技术专家团队，提供专业的技术咨询和解决方案</p>
            </div>

            {/* 快速响应 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">快速响应</h3>
              <p className="text-gray-600">7×24小时在线服务，平均响应时间30秒，快速解决您的问题</p>
            </div>

            {/* 全程跟踪 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">全程跟踪</h3>
              <p className="text-gray-600">从售前咨询到售后服务，全程跟踪服务进度，确保问题得到解决</p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">联系我们</h2>
            <p className="text-gray-500 text-lg">多种联系方式，随时为您提供帮助</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 在线客服 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">在线客服</h3>
              <p className="text-gray-600 text-sm mb-3">24小时在线服务</p>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                立即咨询
              </Button>
            </div>

            {/* 电话支持 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">电话支持</h3>
              <p className="text-gray-600 text-sm mb-3">400-888-8888</p>
              <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                拨打电话
              </Button>
            </div>

            {/* 邮件支持 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">邮件支持</h3>
              <p className="text-gray-600 text-sm mb-3">support@example.com</p>
              <Button size="sm" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                发送邮件
              </Button>
            </div>

            {/* 工单系统 */}
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">工单系统</h3>
              <p className="text-gray-600 text-sm mb-3">提交技术工单</p>
              <Button size="sm" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                提交工单
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
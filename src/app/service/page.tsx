"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>支持与服务 - 艺创云服务 | 艺创AI</title>
        <meta name="description" content="艺创提供专业的售前及售后服务，助力您轻松开启上云之旅。提供24/7技术支持、在线客服、电话支持等多种服务方式。" />
        <meta name="keywords" content="支持与服务,艺创,云服务,技术支持,在线客服,售前咨询,售后服务" />
      </Helmet>

      {/* 支持与服务横幅 - 现代化简约设计 */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 relative overflow-hidden">
        {/* 简约几何背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 主要装饰元素 - 蓝色渐变圆形 */}
          <div className="absolute top-20 right-16 w-80 h-80 bg-gradient-to-br from-blue-200/50 to-indigo-300/30 rounded-full blur-3xl"></div>
          {/* 次要装饰元素 - 深蓝色小圆 */}
          <div className="absolute bottom-32 left-20 w-32 h-32 bg-blue-600/10 rounded-full"></div>
          {/* 新增装饰元素 - 紫色渐变 */}
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-200/30 to-pink-200/20 rounded-full blur-2xl"></div>
          {/* 线条装饰 */}
          <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>
          <div className="absolute top-1/3 right-0 w-px h-24 bg-gradient-to-b from-transparent via-indigo-300 to-transparent"></div>
          {/* 新增装饰点 */}
          <div className="absolute top-40 left-1/3 w-2 h-2 bg-blue-600/30 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-indigo-600/40 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* 主要内容区域 */}
          <div className="max-w-8xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* 左侧内容区域 - 简约排版 */}
              <div className="space-y-6">
                {/* 标题区域 */}
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                    <span className="text-sm font-medium text-blue-700">专业服务支持</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    支持与服务
                  </h1>
                  <div className="space-y-2">
                    <p className="text-xl text-gray-700 font-medium">艺创提供专业的售前及售后服务</p>
                    <p className="text-lg text-gray-600">助力您轻松开启上云之旅</p>
                  </div>
                </div>
                
                {/* 服务特色 - 简洁列表 */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">专业的售前及售后服务团队</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">专业技术团队提供上云支持</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">7×24小时全天候技术保障</span>
                  </div>
                </div>
                
                {/* 行动按钮 */}
                <div className="pt-2">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    立即咨询
                  </Button>
                </div>
              </div>
              
              {/* 右侧数据展示区域 - 现代化卡片设计 */}
              <div className="lg:pl-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* 在线客服卡片 - 蓝色主题 */}
                  <div className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-3">
                      {/* 图标和标题 */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">在线客服</h3>
                          <p className="text-sm text-blue-600 font-medium">24/7全天候在线</p>
                        </div>
                      </div>
                      
                      {/* 数据指标 */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">响应速度</span>
                          <span className="text-lg font-bold text-gray-900">98%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 w-[98%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 技术支持卡片 - 绿色主题 */}
                  <div className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">技术支持</h3>
                          <p className="text-sm text-green-600 font-medium">专业技术团队</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">满意度</span>
                          <span className="text-lg font-bold text-gray-900">99%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full transition-all duration-1000 w-[99%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 电话支持卡片 - 紫色主题 */}
                  <div className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                          <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">电话支持</h3>
                          <p className="text-sm text-purple-600 font-medium">即时响应服务</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">响应时间</span>
                          <span className="text-lg font-bold text-gray-900">30秒</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full transition-all duration-1000 w-[85%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 邮件支持卡片 - 橙色主题 */}
                  <div className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                          <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">邮件支持</h3>
                          <p className="text-sm text-orange-600 font-medium">详细问题解答</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">响应时间</span>
                          <span className="text-lg font-bold text-gray-900">2小时</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full transition-all duration-1000 w-[90%]"></div>
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

      {/* 售前咨询 - 现代化简约设计 */}
      <section className="py-32 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 relative overflow-hidden">
        {/* 极简几何背景装饰 - 统一蓝色调 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 主要装饰元素 - 蓝色渐变 */}
          <div className="absolute top-24 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-indigo-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-16 w-64 h-64 bg-blue-100/40 rounded-full blur-2xl"></div>
          
          {/* 新增装饰元素 - 绿色渐变 */}
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-green-100/30 to-emerald-200/20 rounded-full blur-2xl"></div>
          
          {/* 简约线条装饰 */}
          <div className="absolute top-1/3 left-0 w-px h-40 bg-gradient-to-b from-transparent via-blue-300/60 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-indigo-300/60 to-transparent"></div>
          
          {/* 微妙的几何形状 */}
          <div className="absolute top-40 left-1/3 w-2 h-2 bg-blue-600/30 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-indigo-600/40 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-green-600/25 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-8xl mx-auto">
            {/* 标题区域 - 优化排版层次 */}
            <div className="text-center mb-20 space-y-6">
              {/* 标签优化 - 更简洁的设计 */}
              <div className="inline-flex items-center px-5 py-2.5 bg-blue-50/80 rounded-full border border-blue-100/60 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 tracking-wide">多渠道咨询服务</span>
              </div>
              
              {/* 主标题 - 增强视觉层次 */}
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                  售前咨询
                </h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>
              
              {/* 副标题 - 优化间距和字体 */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                多种售前咨询方式，满足您多场景需求，专业团队为您提供全方位服务支持
              </p>
            </div>
            
            {/* 数据展示区域 - 现代化简约4列布局 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 在线咨询卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* 顶部装饰线 - 极简设计 */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                {/* 内容区域 - 优化排版和间距 */}
                <div className="p-6 space-y-5">
                  {/* 标题区域 - 图标与文字并排显示 */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {/* 图标 - 简约设计 */}
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      
                      {/* 标题和序号 */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-bold text-gray-900">在线咨询</h3>
                          <div className="w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                            01
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed pl-16">
                      获取产品顾问的专业帮助，快速解答您的产品疑惑
                    </p>
                  </div>
                  
                  {/* 特色标签 - 简约设计 */}
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">即时响应</span>
                    </div>
                  </div>
                  
                  {/* 数据指标区域 - 现代化简约设计 */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">响应时间</span>
                      <span className="text-lg font-bold text-gray-900">&lt;30<span className="text-xs font-normal text-gray-600 ml-1">秒</span></span>
                    </div>
                    
                    {/* 进度条 - 极简设计 */}
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 w-[95%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>0秒</span>
                        <span className="font-medium text-blue-600">95% 满意度</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 售前电话卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                <div className="p-6 space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {/* 图标 - 简约设计 */}
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      
                      {/* 标题和序号 */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-bold text-gray-900">售前电话</h3>
                          <div className="w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                            02
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed pl-16">
                      专业顾问一对一服务，深度解答产品疑问
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">7×24小时</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">服务热线</span>
                      <span className="text-base font-bold text-gray-900">400-850-0030</span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 w-[100%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>全天候服务</span>
                        <span className="font-medium text-blue-600">100% 覆盖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 咨询工单卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                <div className="p-6 space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {/* 图标 - 简约设计 */}
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      
                      {/* 标题和序号 */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-bold text-gray-900">咨询工单</h3>
                          <div className="w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                            03
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed pl-16">
                      提交详细问题描述，专业技术团队提供完整解决方案
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">全程跟踪</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">处理时效</span>
                      <span className="text-lg font-bold text-gray-900">24<span className="text-xs font-normal text-gray-600 ml-1">小时内</span></span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 w-[92%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>提交工单</span>
                        <span className="font-medium text-blue-600">92% 按时完成</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 建议与投诉卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                <div className="p-6 space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      {/* 图标 - 简约设计 */}
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      
                      {/* 标题和序号 */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-bold text-gray-900">建议与投诉</h3>
                          <div className="w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                            04
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed pl-16">
                      聆听您对艺创产品与服务的建议和投诉
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">持续改进</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">反馈渠道</span>
                      <span className="text-base font-bold text-gray-900">多渠道</span>
                    </div>
                    
                    <div className="relative">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                        意见建议
                      </Button>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>在线反馈</span>
                        <span className="font-medium text-blue-600">快速响应</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部行动区域 - 现代化简约设计 */}
            <div className="text-center mt-20">
              {/* 主要行动区域 - 简约卡片设计 */}
              <div className="inline-flex items-center space-x-6 p-5 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
                {/* 在线状态指示 - 简化设计 */}
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-blue-600 rounded-full animate-ping opacity-30"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">专业团队在线服务</span>
                </div>
                
                {/* 分隔线 - 极简设计 */}
                <div className="w-px h-4 bg-gray-200"></div>
                
                {/* 行动按钮 - 简约设计 */}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  立即开始咨询
                </Button>
              </div>
              
              {/* 补充信息 - 优化排版 */}
              <div className="mt-6 space-y-3">
                <p className="text-xs text-gray-400 font-light">
                  平均响应时间 &lt; 30秒 · 专业团队 7×24 小时在线服务
                </p>
                
                {/* 数据统计 - 简约数据展示 */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-500">客户满意度</div>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-500">全天候服务</div>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900">&lt;30s</div>
                    <div className="text-xs text-gray-500">平均响应</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 售后服务 - 现代化简约设计 */}
      <section className="py-32 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20 relative overflow-hidden">
        {/* 简约几何背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 主要装饰元素 - 蓝色渐变 */}
          <div className="absolute top-24 right-20 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-16 w-64 h-64 bg-indigo-100/40 rounded-full blur-2xl"></div>
          
          {/* 新增装饰元素 - 橙色渐变 */}
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-100/25 to-amber-200/15 rounded-full blur-2xl"></div>
          
          {/* 简约线条装饰 */}
          <div className="absolute top-1/3 left-0 w-px h-40 bg-gradient-to-b from-transparent via-indigo-300/60 to-transparent"></div>
          <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-purple-300/60 to-transparent"></div>
          
          {/* 微妙的几何形状 */}
          <div className="absolute top-40 left-1/3 w-2 h-2 bg-indigo-600/30 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-purple-600/40 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-orange-600/25 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-8xl mx-auto">
            {/* 标题区域 - 优化排版层次 */}
            <div className="text-center mb-20 space-y-6">
              {/* 标签优化 - 更简洁的设计 */}
              <div className="inline-flex items-center px-5 py-2.5 bg-blue-50/80 rounded-full border border-blue-100/60 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 tracking-wide">专业售后保障</span>
              </div>
              
              {/* 主标题 - 增强视觉层次 */}
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                  售后服务
                </h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>
              
              {/* 副标题 - 优化间距和字体 */}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                极速的售后服务支持，因为出场晚，所以服务更用心
              </p>
            </div>
            
            {/* 服务卡片区域 - 现代化简约4列布局 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 在线咨询卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* 顶部装饰线 - 极简设计 */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                {/* 图片区域 - 保留原有图片 */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/7ca0080e43fbff5b_1637162855791.png" 
                    alt="在线咨询" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* 序号标签 - 简约设计 */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                    01
                  </div>
                </div>
                
                {/* 内容区域 - 优化排版和间距 */}
                <div className="p-6 space-y-5">
                  {/* 标题区域 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">在线咨询</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      秒级解答，为您匹配合适的人工服务，提供最佳解决方案
                    </p>
                  </div>
                  
                  {/* 特色标签 - 简约设计 */}
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">秒级响应</span>
                    </div>
                  </div>
                  
                  {/* 数据指标区域 - 现代化简约设计 */}
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">响应速度</span>
                      <span className="text-lg font-bold text-gray-900">&lt;30<span className="text-xs font-normal text-gray-600 ml-1">秒</span></span>
                    </div>
                    
                    {/* 进度条 - 极简设计 */}
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 w-[95%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>0秒</span>
                        <span className="font-medium text-blue-600">95% 满意度</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 售后工单卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                {/* 图片区域 - 保留原有图片 */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/16109cf69762df98_1637162865915.png" 
                    alt="售后工单" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* 序号标签 - 简约设计 */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                    02
                  </div>
                </div>
                
                <div className="p-6 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">售后工单</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      工单支持：7×24小时工单支持，提供产品使用咨询及基础技术支援
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">全天候服务</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">处理时效</span>
                      <span className="text-lg font-bold text-gray-900">24<span className="text-xs font-normal text-gray-600 ml-1">小时内</span></span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 w-[98%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>提交工单</span>
                        <span className="font-medium text-blue-600">98% 按时完成</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 售后电话卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                {/* 图片区域 - 保留原有图片 */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/e6b94abc619cbc69_1637162873769.png" 
                    alt="售后电话" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* 序号标签 - 简约设计 */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                    03
                  </div>
                </div>
                
                <div className="p-6 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">售后电话</h3>
                    <div className="text-gray-600 text-sm space-y-2">
                      <p>售后电话：7×12小时热线服务，为您提供专业的售后支持</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">专业团队</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">服务时间</span>
                      <span className="text-base font-bold text-gray-900">7×12小时</span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-1000 w-[100%]"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>全天候服务</span>
                        <span className="font-medium text-blue-600">100% 覆盖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 建议与投诉卡片 - 现代化简约设计 */}
              <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                
                {/* 图片区域 - 保留原有图片 */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/8d460c0a2c958d4c_1637162882349.png" 
                    alt="建议与投诉" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* 序号标签 - 简约设计 */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gray-900 text-white text-xs font-bold rounded-lg flex items-center justify-center">
                    04
                  </div>
                </div>
                
                <div className="p-6 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">建议与投诉</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      聆听您对艺创产品与服务的建议和投诉
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-xs font-medium text-blue-700">持续改进</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">反馈渠道</span>
                      <span className="text-base font-bold text-gray-900">多渠道</span>
                    </div>
                    
                    <div className="relative">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                        意见建议
                      </Button>
                      <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                        <span>在线反馈</span>
                        <span className="font-medium text-blue-600">快速响应</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部行动区域 - 现代化简约设计 */}
            <div className="text-center mt-20">
              {/* 主要行动区域 - 简约卡片设计 */}
              <div className="inline-flex items-center space-x-6 p-5 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
                {/* 在线状态指示 - 简化设计 */}
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-blue-600 rounded-full animate-ping opacity-30"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">专业团队在线服务</span>
                </div>
                
                {/* 分隔线 - 极简设计 */}
                <div className="w-px h-4 bg-gray-200"></div>
                
                {/* 行动按钮 - 简约设计 */}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  立即获取支持
                </Button>
              </div>
              
              {/* 补充信息 - 优化排版 */}
              <div className="mt-6 space-y-3">
                <p className="text-xs text-gray-400 font-light">
                  平均响应时间 &lt; 30秒 · 专业团队 7×24 小时在线服务
                </p>
                
                {/* 数据统计 - 简约数据展示 */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900">99%</div>
                    <div className="text-xs text-gray-500">客户满意度</div>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-500">全天候服务</div>
                  </div>
                  <div className="w-px h-6 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-base font-bold text-gray-900">&lt;30s</div>
                    <div className="text-xs text-gray-500">平均响应</div>
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

export default ServicePage;

"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Sparkles, ChevronRight, Users, Bot, PenTool, Tv } from "lucide-react";

const Hero = () => {
  // 添加状态来跟踪当前选中的场景标签
  const [activeScenario, setActiveScenario] = useState('virtualIP');
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f0f4ff] to-[#e6eeff] overflow-hidden pt-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#8b9ddb" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/30 to-blue-300/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/30 to-indigo-300/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>全新版本已发布</span>
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6"
          >
            面向 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">AI开发者</span> | 创业者 
            <span className="block mt-2">开源的<span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">AI应用搭建框架</span></span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-xl text-gray-600 mb-2">它可以 
              <span className="relative inline-block mx-2 px-2">
                <span className="absolute inset-x-0 bottom-0 h-3 bg-yellow-200/70"></span>
                <span className="relative">快速构建</span>
              </span> 
              私有AI应用 ✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              轻松部署
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full transition-all duration-300">
              在线使用
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>AI原生开发体验</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Code className="h-5 w-5 text-blue-600" />
              <span>无缝学习与集成</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span>同时兼容可视化</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <ChevronRight className="h-5 w-5 text-blue-600" />
              <span>开源可扩展</span>
            </div>
          </motion.div>
        </div>

        {/* 热门产品 - 标签式布局 */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-12 sm:py-16 lg:py-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">热门产品</h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">丰富的应用场景和解决方案，满足多种业务需求</p>
            </div>

            {/* 场景标签导航 - 响应式设计 */}
            <div className="flex flex-wrap justify-center mb-8 sm:mb-12 border-b border-gray-200 gap-1 sm:gap-0">
              <button 
                className={`px-3 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base whitespace-nowrap ${activeScenario === 'virtualIP' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveScenario('virtualIP')}
              >
                虚拟IP
              </button>
              <button 
                className={`px-3 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base whitespace-nowrap ${activeScenario === 'digitalEmployee' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveScenario('digitalEmployee')}
              >
                数字员工
              </button>
              <button 
                className={`px-3 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base whitespace-nowrap ${activeScenario === 'contentCreation' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveScenario('contentCreation')}
              >
                内容创作
              </button>
              <button 
                className={`px-3 py-2 sm:px-6 sm:py-3 font-medium transition-colors text-sm sm:text-base whitespace-nowrap ${activeScenario === 'virtualLive' ? 'text-gray-800 border-b-2 border-gray-800' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveScenario('virtualLive')}
              >
                虚拟直播
              </button>
            </div>

            {/* 虚拟IP场景 - 响应式布局 */}
            {activeScenario === 'virtualIP' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              >
                {/* 左侧内容 */}
                <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center lg:text-left">虚拟IP</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base text-center lg:text-left leading-relaxed">
                    面向文化传播、影视内容等多个行业，帮助打造虚拟IP，赋能品牌营销，提升品牌心智。
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">品牌代言</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">创建专属品牌虚拟形象，提升品牌辨识度和亲和力</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">内容创作</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">为影视、游戏、动漫等行业提供高质量虚拟角色</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">社交互动</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">打造虚拟社交形象，增强用户互动体验</p>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center lg:text-left">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                      查看详情
                    </Button>
                  </div>
                </div>
                
                {/* 右侧图片 */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                    <img 
                      src="https://artaigc.cn/assets/img/human1.png" 
                      alt="虚拟IP应用场景" 
                      className="w-full rounded-xl sm:rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm sm:text-base">虚拟IP解决方案</p>
                          <p className="text-white/80 text-xs sm:text-sm">打造专属品牌虚拟形象</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 数字员工场景 - 响应式布局 */}
            {activeScenario === 'digitalEmployee' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              >
                <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center lg:text-left">数字员工</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base text-center lg:text-left leading-relaxed">
                    为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">智能客服</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">7×24小时在线服务，快速响应客户需求</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">销售助手</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">智能推荐产品，提高转化率和客户满意度</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">培训讲师</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">提供标准化培训内容，确保培训质量一致性</p>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center lg:text-left">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                      查看详情
                    </Button>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                    <img 
                      src="https://artaigc.cn/assets/img/human2.png" 
                      alt="数字员工应用场景" 
                      className="w-full rounded-xl sm:rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-6">
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
              </motion.div>
            )}

            {/* 内容创作场景 - 响应式布局 */}
            {activeScenario === 'contentCreation' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              >
                <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center lg:text-left">内容创作</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base text-center lg:text-left leading-relaxed">
                    为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">视频脚本</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">快速生成专业视频脚本，提高内容创作效率</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">营销文案</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">生成吸引人的营销文案，提高转化率</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">多语言翻译</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">支持多语言内容创作和翻译，拓展全球市场</p>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center lg:text-left">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                      查看详情
                    </Button>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                    <img 
                      src="https://server.mddai.cn/uploads/images/202411281956113c42f8382.png" 
                      alt="内容创作应用场景" 
                      className="w-full rounded-xl sm:rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <PenTool className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm sm:text-base">内容创作解决方案</p>
                          <p className="text-white/80 text-xs sm:text-sm">高效智能的内容生产</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 虚拟直播场景 - 响应式布局 */}
            {activeScenario === 'virtualLive' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
              >
                <div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 text-center lg:text-left">虚拟直播</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base text-center lg:text-left leading-relaxed">
                    为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。
                  </p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">电商直播</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">24小时不间断直播，提高商品曝光和销售</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">新闻播报</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">实时生成新闻内容，提供专业播报服务</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 text-gray-800" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm sm:text-base">活动主持</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">为线上活动提供专业主持服务，增强互动体验</p>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center lg:text-left">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                      查看详情
                    </Button>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                    <img 
                      src="https://server.mddai.cn/uploads/images/20241128195610379379917.png" 
                      alt="虚拟直播应用场景" 
                      className="w-full rounded-xl sm:rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-2 sm:mr-3">
                          <Tv className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm sm:text-base">虚拟直播解决方案</p>
                          <p className="text-white/80 text-xs sm:text-sm">智能高效的直播助手</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default Hero;

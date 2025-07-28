"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, FileText, Book, Code, HelpCircle, ChevronRight, ArrowRight } from "lucide-react";
import Header from '@/components/header';
import Contact from '@/components/contact';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const DocsPage = () => {
  // 设置文档页面元数据
  usePageMetadata({
    title: '产品文档 - 使用指南与API文档 | 艺创AI',
    description: '艺创AI产品文档中心，提供详细的使用指南、API文档和常见问题解答。包括数字分身、企业知识库、聊天绘画、论文创作等产品的完整文档。',
    keywords: '产品文档,使用指南,API文档,常见问题,技术支持,开发文档,SDK下载,艺创AI'
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("guides");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 实际应用中这里会调用搜索API
    console.log("搜索:", searchQuery);
  };

  // 使用指南数据 - 优化布局和描述
  const guides = [
    {
      title: "快速入门",
      description: "了解如何开始使用我们的AI产品，包括账号设置、基本操作和常见问题解答。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "/docs/getting-started",
      category: "基础"
    },
    {
      title: "数字分身使用指南",
      description: "学习如何配置和使用数字分身产品，包括个性化设置、多渠道部署和数据分析。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "/docs/digital-twin-guide",
      category: "产品"
    },
    {
      title: "企业知识库使用指南",
      description: "掌握企业知识库的构建和管理方法，包括文档导入、权限设置和智能检索。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "/docs/knowledge-base-guide",
      category: "产品"
    },
    {
      title: "聊天绘画使用指南",
      description: "探索聊天绘画的创作技巧，包括提示词编写、风格选择和图像编辑。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "/docs/chat-drawing-guide",
      category: "产品"
    },
    {
      title: "论文创作使用指南",
      description: "了解如何使用论文创作工具提升研究效率，包括文献分析、写作辅助和格式规范。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "/docs/paper-writing-guide",
      category: "产品"
    },
    {
      title: "最佳实践",
      description: "获取各行业使用AI产品的最佳实践和成功案例，帮助您充分发挥产品价值。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "/docs/best-practices",
      category: "进阶"
    }
  ];

  // API文档数据 - 优化布局和描述
  const api = [
    {
      title: "API概述",
      description: "了解我们的API架构、认证方式和基本使用流程。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "/docs/api-overview",
      category: "基础"
    },
    {
      title: "数字分身API",
      description: "数字分身API文档，包括对话接口、情感分析和个性化配置。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "/docs/digital-twin-api",
      category: "产品"
    },
    {
      title: "企业知识库API",
      description: "企业知识库API文档，包括文档管理、搜索查询和权限控制。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "/docs/knowledge-base-api",
      category: "产品"
    },
    {
      title: "聊天绘画API",
      description: "聊天绘画API文档，包括图像生成、风格转换和批量处理。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "/docs/chat-drawing-api",
      category: "产品"
    },
    {
      title: "论文创作API",
      description: "论文创作API文档，包括文献分析、内容生成和格式转换。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "/docs/paper-writing-api",
      category: "产品"
    },
    {
      title: "SDK下载",
      description: "各种编程语言的SDK下载和使用说明，包括Python、Java、JavaScript等。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "/docs/sdk-download",
      category: "工具"
    }
  ];

  // 常见问题数据 - 优化布局和描述
  const faq = [
    {
      question: "如何开始使用AI科技的产品？",
      answer: "您可以通过注册账号，选择适合您的产品和套餐，完成付款后即可开始使用。我们提供14天免费试用，帮助您充分了解产品功能。",
      link: "/docs/faq#getting-started",
      category: "账户"
    },
    {
      question: "产品支持哪些语言？",
      answer: "我们的产品目前支持中文、英文、日文、韩文等多种语言，未来将继续扩展语言支持范围。",
      link: "/docs/faq#languages",
      category: "功能"
    },
    {
      question: "如何确保数据安全？",
      answer: "我们采用银行级加密技术保护您的数据，所有数据传输和存储均经过加密。我们遵循严格的数据保护政策，不会未经授权访问或分享您的数据。",
      link: "/docs/faq#data-security",
      category: "安全"
    },
    {
      question: "是否提供定制开发服务？",
      answer: "是的，我们提供定制开发服务，可以根据您的特定需求调整产品功能或开发全新解决方案。请联系我们的销售团队了解详情。",
      link: "/docs/faq#customization",
      category: "服务"
    },
    {
      question: "如何获取技术支持？",
      answer: "您可以通过在线客服、电子邮件或电话获取技术支持。我们的支持团队将在24小时内回应您的问题。企业版客户享有专属技术支持经理。",
      link: "/docs/faq#agency",
      category: "支持"
    },
    {
      question: "如何升级或更改订阅计划？",
      answer: "您可以在账户设置中查看和管理您的订阅计划。根据需要，您可以随时升级套餐或添加更多用户许可。",
      link: "/docs/faq#subscription",
      category: "账户"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* 页面头部区域 - 优化视觉层次 */}
        {/* 增加顶部间距，防止Header与主内容紧贴 */}
        <div className="h-6 sm:h-8 lg:h-10"></div>
        <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* 增加标题与顶部的间距 */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                产品文档
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-14 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                全面的产品使用指南、API文档和常见问题解答，帮助您充分利用AI科技的产品和服务
              </motion.p>
              
              {/* 搜索框 - 响应式优化设计 */}
              <motion.div 
                className="max-w-2xl mx-auto w-full px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSearch} className="flex bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
                  <Input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索文档、API或常见问题..."
                    className="flex-1 bg-transparent border-0 text-gray-900 placeholder:text-gray-500 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-sm sm:text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
                    aria-label="搜索文档内容"
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-none border-0 transition-all duration-300 shadow-lg flex-shrink-0"
                    aria-label="搜索"
                  >
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 主要内容区域 - 优化布局和间距 */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* 标签页导航 - 重新设计的现代化导航 */}
            <Tabs defaultValue="guides" className="w-full" onValueChange={setActiveTab}>
              {/* 新设计的标签页导航 - 响应式优化 */}
              <div className="flex justify-start mb-12 sm:mb-16 overflow-x-auto">
                <div className="flex items-center bg-gray-50 p-1.5 sm:p-2 rounded-2xl border border-gray-200 shadow-sm min-w-fit">
                  <TabsList className="grid grid-cols-3 bg-transparent p-0 h-auto gap-1 sm:gap-2">
                    <TabsTrigger 
                      value="guides" 
                      className="flex items-center justify-center px-3 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:bg-gray-100 data-[state=active]:hover:from-blue-700 data-[state=active]:hover:to-blue-800 font-medium text-xs sm:text-sm border border-transparent data-[state=active]:border-blue-600 whitespace-nowrap"
                      role="tab"
                      aria-label="使用指南标签页"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="p-1.5 sm:p-2 bg-blue-50 data-[state=active]:bg-white/20 rounded-lg transition-colors">
                          <Book className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 data-[state=active]:text-white" />
                        </div>
                        <span className="font-semibold hidden sm:inline">使用指南</span>
                        <span className="font-semibold sm:hidden">指南</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="api" 
                      className="flex items-center justify-center px-3 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:bg-gray-100 data-[state=active]:hover:from-blue-700 data-[state=active]:hover:to-blue-800 font-medium text-xs sm:text-sm border border-transparent data-[state=active]:border-blue-600 whitespace-nowrap"
                      role="tab"
                      aria-label="API文档标签页"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="p-1.5 sm:p-2 bg-blue-50 data-[state=active]:bg-white/20 rounded-lg transition-colors">
                          <Code className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 data-[state=active]:text-white" />
                        </div>
                        <span className="font-semibold hidden sm:inline">API文档</span>
                        <span className="font-semibold sm:hidden">API</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="faq" 
                      className="flex items-center justify-center px-3 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl transition-all duration-300 hover:bg-gray-100 data-[state=active]:hover:from-blue-700 data-[state=active]:hover:to-blue-800 font-medium text-xs sm:text-sm border border-transparent data-[state=active]:border-blue-600 whitespace-nowrap"
                      role="tab"
                      aria-label="常见问题标签页"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="p-1.5 sm:p-2 bg-blue-50 data-[state=active]:bg-white/20 rounded-lg transition-colors">
                          <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 data-[state=active]:text-white" />
                        </div>
                        <span className="font-semibold hidden sm:inline">常见问题</span>
                        <span className="font-semibold sm:hidden">FAQ</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              {/* 使用指南内容 - 响应式卡片设计 */}
              <TabsContent value="guides" className="mt-0" role="tabpanel" aria-labelledby="guides-tab">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {guides.map((guide, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card className="h-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                              {guide.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {guide.category}
                            </span>
                          </div>
                          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {guide.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            {guide.description}
                          </p>
                          <Button 
                            variant="ghost" 
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium"
                            asChild
                          >
                            <Link to={guide.link} className="flex items-center">
                              阅读文档
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* API文档内容 - 响应式卡片设计 */}
              <TabsContent value="api" className="mt-0" role="tabpanel" aria-labelledby="api-tab">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {api.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card className="h-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                              {item.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            {item.description}
                          </p>
                          <Button 
                            variant="ghost" 
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium"
                            asChild
                          >
                            <Link to={item.link} className="flex items-center">
                              查看文档
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* 常见问题内容 - 响应式布局设计 */}
              <TabsContent value="faq" className="mt-0" role="tabpanel" aria-labelledby="faq-tab">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {faq.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card className="h-full border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                              {item.question}
                            </h3>
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-3 flex-shrink-0">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                            {item.answer}
                          </p>
                          <Link 
                            to={item.link} 
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center group/link"
                          >
                            查看详细解答
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default DocsPage;
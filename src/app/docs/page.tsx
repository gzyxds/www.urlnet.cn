"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, FileText, Book, Code, HelpCircle, ArrowRight, Menu, X } from "lucide-react";
import Contact from '@/components/ContactSection';
import { usePageMetadata } from '@/hooks/use-page-metadata';
import { DocItem, FAQItem, NavigationItem } from '@/types';

const DocsPage = () => {
  // 设置文档页面元数据
  usePageMetadata({
    title: '产品文档 - 使用指南与API文档 | 艺创AI',
    description: '艺创AI产品文档中心，提供详细的使用指南、API文档和常见问题解答。包括数字分身、企业知识库、聊天绘画、论文创作等产品的完整文档。',
    keywords: '产品文档,使用指南,API文档,常见问题,技术支持,开发文档,SDK下载,艺创AI'
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("guides");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 实际应用中这里会调用搜索API
    console.log("搜索:", searchQuery);
  };

  // 导航菜单数据
  const navigationItems: NavigationItem[] = [
    {
      id: "guides",
      title: "使用指南",
      icon: <Book className="h-5 w-5" />,
      description: "产品使用指南和教程"
    },
    {
      id: "api",
      title: "API文档",
      icon: <Code className="h-5 w-5" />,
      description: "开发者API接口文档"
    },
    {
      id: "faq",
      title: "常见问题",
      icon: <HelpCircle className="h-5 w-5" />,
      description: "常见问题解答"
    }
  ];

  // 使用指南数据 - 每个产品都有独特的文档链接
  const guides: DocItem[] = [
    {
      title: "快速入门",
      description: "了解如何开始使用我们的AI产品，包括账号设置、基本操作和常见问题解答。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "https://rwm01l8tn3x.feishu.cn/wiki/VqNCwBO0KiqWIWkSfdHcDigGnZg?from=getting_started",
      category: "基础",
      tags: ["新手", "入门", "设置"]
    },
    {
      title: "数字分身使用指南",
      description: "学习如何配置和使用数字分身产品，包括个性化设置、多渠道部署和数据分析。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "https://rwm01l8tn3x.feishu.cn/wiki/WzEywceOSioYQCkT5lzczU4znee?from=from_copylink",
      category: "产品",
      tags: ["数字分身", "配置", "部署"]
    },
    {
      title: "企业知识库使用指南",
      description: "掌握企业知识库的构建和管理方法，包括文档导入、权限设置和智能检索。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "https://rwm01l8tn3x.feishu.cn/wiki/QrAHwLXHIiOlZVk2u7mcqT63nJd?from=from_copylink",
      category: "产品",
      tags: ["知识库", "管理", "检索"]
    },
    {
      title: "聊天绘画使用指南",
      description: "探索聊天绘画的创作技巧，包括提示词编写、风格选择和图像编辑。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "https://rwm01l8tn3x.feishu.cn/wiki/WhaQwtkk0iKZ8Dke8kccCwUynBb?from=from_copylink",
      category: "产品",
      tags: ["绘画", "创作", "提示词"]
    },
    {
      title: "论文创作使用指南",
      description: "了解如何使用论文创作工具提升研究效率，包括文献分析、写作辅助和格式规范。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "https://rwm01l8tn3x.feishu.cn/wiki/ESanw7rLri4MhXkE6b9c4qpenjh?from=from_copylink",
      category: "产品",
      tags: ["论文", "写作", "研究"]
    },
    {
      title: "最佳实践",
      description: "获取各行业使用AI产品的最佳实践和成功案例，帮助您充分发挥产品价值。",
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      link: "https://rwm01l8tn3x.feishu.cn/wiki/VqNCwBO0KiqWIWkSfdHcDigGnZg?from=from_copylink",
      category: "进阶",
      tags: ["实践", "案例", "优化"]
    }
  ];

  // API文档数据 - 每个API都有独特的文档链接
  const api: DocItem[] = [
    {
      title: "API概述",
      description: "了解我们的API架构、认证方式和基本使用流程。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "https://api-docs.urlnet.cn/overview/introduction?from=api_overview",
      category: "基础",
      tags: ["API", "认证", "架构"]
    },
    {
      title: "数字分身API",
      description: "数字分身API文档，包括对话接口、情感分析和个性化配置。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "https://78kttw0tjc.apifox.cn/",
      category: "产品",
      tags: ["数字分身", "对话", "API"]
    },
    {
      title: "企业知识库API",
      description: "企业知识库API文档，包括文档管理、搜索查询和权限控制。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "https://io38j82vph.apifox.cn/",
      category: "产品",
      tags: ["知识库", "搜索", "API"]
    },
    {
      title: "聊天绘画API",
      description: "聊天绘画API文档，包括图像生成、风格转换和批量处理。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "https://api-docs.urlnet.cn/chat-painting/generation?from=painting_api",
      category: "产品",
      tags: ["绘画", "图像", "API"]
    },
    {
      title: "论文创作API",
      description: "论文创作API文档，包括文献分析、内容生成和格式转换。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "https://api-docs.urlnet.cn/paper-writing/analysis?from=paper_api",
      category: "产品",
      tags: ["论文", "写作", "API"]
    },
    {
      title: "SDK下载",
      description: "各种编程语言的SDK下载和使用说明，包括Python、Java、JavaScript等。",
      icon: <Code className="h-5 w-5 text-blue-600" />,
      link: "https://developer.urlnet.cn/sdk/downloads?from=sdk_download",
      category: "工具",
      tags: ["SDK", "下载", "开发"]
    }
  ];

  // 常见问题数据 - 每个FAQ都有独特的帮助链接
  const faq: FAQItem[] = [
    {
      question: "如何开始使用AI科技的产品？",
      answer: "您可以通过注册账号，选择适合您的产品和套餐，完成付款后即可开始使用。我们提供14天免费试用，帮助您充分了解产品功能。",
      link: "https://help.urlnet.cn/getting-started/registration?from=faq_start",
      category: "账户",
      tags: ["入门", "注册", "试用"]
    },
    {
      question: "产品支持哪些语言？",
      answer: "我们的产品目前支持中文、英文、日文、韩文等多种语言，未来将继续扩展语言支持范围。",
      link: "https://help.urlnet.cn/features/language-support?from=faq_language",
      category: "功能",
      tags: ["语言", "多语言", "支持"]
    },
    {
      question: "如何确保数据安全？",
      answer: "我们采用银行级加密技术保护您的数据，所有数据传输和存储均经过加密。我们遵循严格的数据保护政策，不会未经授权访问或分享您的数据。",
      link: "https://help.urlnet.cn/security/data-protection?from=faq_security",
      category: "安全",
      tags: ["安全", "加密", "隐私"]
    },
    {
      question: "是否提供定制开发服务？",
      answer: "是的，我们提供定制开发服务，可以根据您的特定需求调整产品功能或开发全新解决方案。请联系我们的销售团队了解详情。",
      link: "https://help.urlnet.cn/services/custom-development?from=faq_custom",
      category: "服务",
      tags: ["定制", "开发", "服务"]
    },
    {
      question: "如何获取技术支持？",
      answer: "您可以通过在线客服、电子邮件或电话获取技术支持。我们的支持团队将在24小时内回应您的问题。企业版客户享有专属技术支持经理。",
      link: "https://help.urlnet.cn/support/contact-methods?from=faq_support",
      category: "支持",
      tags: ["支持", "客服", "帮助"]
    },
    {
      question: "如何升级或更改订阅计划？",
      answer: "您可以在账户设置中查看和管理您的订阅计划。根据需要，您可以随时升级套餐或添加更多用户许可。",
      link: "https://help.urlnet.cn/account/subscription-management?from=faq_subscription",
      category: "账户",
      tags: ["订阅", "升级", "计划"]
    }
  ];

  // 根据当前分类获取数据
  const getCurrentData = (): DocItem[] | FAQItem[] => {
    switch (activeCategory) {
      case "guides":
        return guides;
      case "api":
        return api;
      case "faq":
        return faq;
      default:
        return guides;
    }
  };

  // 渲染内容卡片
  const renderContentCards = () => {
    const currentData = getCurrentData();

    if (activeCategory === "faq") {
      const faqData = currentData as FAQItem[];
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
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
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight pr-4">
                      {item.question}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center group/link"
                  >
                    查看详细解答
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      );
    }

    const docData = currentData as DocItem[];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {docData.map((item, index) => (
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
                {/* 标签显示 */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 transition-all duration-200 text-sm font-medium group"
                >
                  {activeCategory === "api" ? "查看文档" : "阅读文档"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* 页面头部区域 - 简约设计 */}
        <div className="h-12 sm:h-16 lg:h-20"></div>
        <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                产品文档
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                全面的产品使用指南、API文档和常见问题解答
              </motion.p>

              {/* 搜索框 - 简约设计 */}
              <motion.div
                className="max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSearch} className="flex bg-white rounded-xl shadow-lg overflow-hidden">
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索文档内容..."
                    className="flex-1 border-0 text-gray-900 placeholder:text-gray-500 px-4 py-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                    aria-label="搜索文档内容"
                  />
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-none border-0"
                    aria-label="搜索"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 主要内容区域 - 左右布局设计 */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

              {/* 左侧导航栏 */}
              <div className="lg:w-80 flex-shrink-0">
                {/* 移动端菜单按钮 */}
                <div className="lg:hidden mb-6">
                  <Button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    variant="outline"
                    className="w-full justify-between"
                  >
                    <span>文档导航</span>
                    {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </Button>
                </div>

                {/* 导航菜单 */}
                <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                  <Card className="bg-white border border-gray-200 shadow-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">文档分类</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <nav className="space-y-2">
                        {navigationItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              setActiveCategory(item.id);
                              setIsSidebarOpen(false);
                            }}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
                              activeCategory === item.id
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg transition-colors ${
                                activeCategory === item.id
                                  ? 'bg-white/20 text-white'
                                  : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                              }`}>
                                {item.icon}
                              </div>
                              <div>
                                <div className="font-medium">{item.title}</div>
                                <div className={`text-sm ${
                                  activeCategory === item.id
                                    ? 'text-blue-100'
                                    : 'text-gray-500'
                                }`}>
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>

                  {/* 快速链接 */}
                  <Card className="mt-6 bg-white border border-gray-200 shadow-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">快速链接</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        <Link
                          to="/support"
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          技术支持
                        </Link>
                        <Link
                          to="/contact"
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          联系我们
                        </Link>
                        <Link
                          to="/changelog"
                          className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          更新日志
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 右侧内容区域 */}
              <div className="flex-1 min-w-0">
                {/* 内容标题 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {navigationItems.find(item => item.id === activeCategory)?.title}
                  </h2>
                  <p className="text-gray-600">
                    {navigationItems.find(item => item.id === activeCategory)?.description}
                  </p>
                </div>

                {/* 内容展示区域 */}
                {renderContentCards()}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
};

export default DocsPage;

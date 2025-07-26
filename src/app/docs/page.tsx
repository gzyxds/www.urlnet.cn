"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, FileText, Book, Code, HelpCircle, ChevronRight } from "lucide-react";
import Header from '@/components/header';
import Footer from '@/components/footer';
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

  const guides = [
    {
      title: "快速入门",
      description: "了解如何开始使用我们的AI产品，包括账号设置、基本操作和常见问题解答。",
      icon: <FileText className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/getting-started"
    },
    {
      title: "数字分身使用指南",
      description: "学习如何配置和使用数字分身产品，包括个性化设置、多渠道部署和数据分析。",
      icon: <FileText className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/digital-twin-guide"
    },
    {
      title: "企业知识库使用指南",
      description: "掌握企业知识库的构建和管理方法，包括文档导入、权限设置和智能检索。",
      icon: <FileText className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/knowledge-base-guide"
    },
    {
      title: "聊天绘画使用指南",
      description: "探索聊天绘画的创作技巧，包括提示词编写、风格选择和图像编辑。",
      icon: <FileText className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/chat-drawing-guide"
    },
    {
      title: "论文创作使用指南",
      description: "了解如何使用论文创作工具提升研究效率，包括文献分析、写作辅助和格式规范。",
      icon: <FileText className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/paper-writing-guide"
    },
    {
      title: "最佳实践",
      description: "获取各行业使用AI产品的最佳实践和成功案例，帮助您充分发挥产品价值。",
      icon: <FileText className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/best-practices"
    }
  ];

  const api = [
    {
      title: "API概述",
      description: "了解我们的API架构、认证方式和基本使用流程。",
      icon: <Code className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/api-overview"
    },
    {
      title: "数字分身API",
      description: "数字分身API文档，包括对话接口、情感分析和个性化配置。",
      icon: <Code className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/digital-twin-api"
    },
    {
      title: "企业知识库API",
      description: "企业知识库API文档，包括文档管理、搜索查询和权限控制。",
      icon: <Code className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/knowledge-base-api"
    },
    {
      title: "聊天绘画API",
      description: "聊天绘画API文档，包括图像生成、风格转换和批量处理。",
      icon: <Code className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/chat-drawing-api"
    },
    {
      title: "论文创作API",
      description: "论文创作API文档，包括文献分析、内容生成和格式转换。",
      icon: <Code className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/paper-writing-api"
    },
    {
      title: "SDK下载",
      description: "各种编程语言的SDK下载和使用说明，包括Python、Java、JavaScript等。",
      icon: <Code className="h-6 w-6 text-[#015bfe]" />,
      link: "/docs/sdk-download"
    }
  ];

  const faq = [
    {
      question: "如何开始使用AI科技的产品？",
      answer: "您可以通过注册账号，选择适合您的产品和套餐，完成付款后即可开始使用。我们提供14天免费试用，帮助您充分了解产品功能。",
      link: "/docs/faq#getting-started"
    },
    {
      question: "产品支持哪些语言？",
      answer: "我们的产品目前支持中文、英文、日文、韩文等多种语言，未来将继续扩展语言支持范围。",
      link: "/docs/faq#languages"
    },
    {
      question: "如何确保数据安全？",
      answer: "我们采用银行级加密技术保护您的数据，所有数据传输和存储均经过加密。我们遵循严格的数据保护政策，不会未经授权访问或分享您的数据。",
      link: "/docs/faq#data-security"
    },
    {
      question: "是否提供定制开发服务？",
      answer: "是的，我们提供定制开发服务，可以根据您的特定需求调整产品功能或开发全新解决方案。请联系我们的销售团队了解详情。",
      link: "/docs/faq#customization"
    },
    {
      question: "如何获取技术支持？",
      answer: "您可以通过在线客服、电子邮件或电话获取技术支持。我们的支持团队将在24小时内回应您的问题。企业版客户享有专属技术支持经理。",
      link: "/docs/faq#support"
    },
    {
      question: "如何升级或更改订阅计划？",
      answer: "您可以在账户设置中查看和管理您的订阅计划。根据需要，您可以随时升级套餐或添加更多用户许可。",
      link: "/docs/faq#subscription"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f9f0] pt-20">
        <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">产品文档</h1>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                全面的产品使用指南、API文档和常见问题解答，帮助您充分利用AI科技的产品和服务。
              </p>
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSearch} className="flex">
                  <Input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜索文档..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button type="submit" className="bg-white text-[#015bfe] hover:bg-white/90 rounded-l-none">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="guides" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto">
                <TabsTrigger value="guides" className="flex items-center">
                  <Book className="mr-2 h-4 w-4" />
                  <span>使用指南</span>
                </TabsTrigger>
                <TabsTrigger value="api" className="flex items-center">
                  <Code className="mr-2 h-4 w-4" />
                  <span>API文档</span>
                </TabsTrigger>
                <TabsTrigger value="faq" className="flex items-center">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>常见问题</span>
                </TabsTrigger>
              </TabsList>

              {/* 使用指南 */}
              <TabsContent value="guides">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guides.map((guide, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:border-[#015bfe] hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                          <div className="mb-2">{guide.icon}</div>
                          <CardTitle>{guide.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{guide.description}</p>
                          <Button 
                            variant="outline" 
                            className="text-[#015bfe] border-[#015bfe] hover:bg-[#015bfe] hover:text-white"
                            asChild
                          >
                            <Link to={guide.link}>
                              阅读文档
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* API文档 */}
              <TabsContent value="api">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {api.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:border-[#015bfe] hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                          <div className="mb-2">{item.icon}</div>
                          <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <Button 
                            variant="outline" 
                            className="text-[#015bfe] border-[#015bfe] hover:bg-[#015bfe] hover:text-white"
                            asChild
                          >
                            <Link to={item.link}>
                              查看文档
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* 常见问题 */}
              <TabsContent value="faq">
                <div className="max-w-3xl mx-auto">
                  {faq.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="mb-6"
                    >
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-2 text-[#015bfe]">{item.question}</h3>
                          <p className="text-gray-600 mb-4">{item.answer}</p>
                          <Link 
                            to={item.link} 
                            className="text-sm text-[#015bfe] hover:underline flex items-center"
                          >
                            查看详细解答
                            <ChevronRight className="ml-1 h-4 w-4" />
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">需要更多帮助？</h2>
              <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                如果您在文档中没有找到所需的信息，我们的支持团队随时为您提供帮助。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#015bfe]">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">在线客服</h3>
                  <p className="text-gray-600 mb-4">
                    通过在线聊天获取即时帮助，工作时间：周一至周五 9:00-18:00
                  </p>
                  <Button className="bg-[#015bfe] hover:bg-blue-700">
                    开始聊天
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#015bfe]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">电子邮件</h3>
                  <p className="text-gray-600 mb-4">
                    发送邮件至support@aitech.com，我们将在24小时内回复
                  </p>
                  <Button className="bg-[#015bfe] hover:bg-blue-700">
                    发送邮件
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#015bfe]">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">电话支持</h3>
                  <p className="text-gray-600 mb-4">
                    拨打400-888-8888获取电话支持，工作时间：周一至周五 9:00-18:00
                  </p>
                  <Button className="bg-[#015bfe] hover:bg-blue-700">
                    拨打电话
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
};

export default DocsPage;
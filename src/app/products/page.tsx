"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Database, MessageSquare, FileText } from "lucide-react";
import { Link } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const ProductsPage = () => {
  // 设置产品页面元数据
  usePageMetadata({
    title: '产品中心 - AI系统解决方案 | 艺创AI',
    description: 'AI科技提供全面的人工智能解决方案，包括数字分身、企业知识库、聊天绘画、论文创作等产品，帮助企业实现数字化转型和智能化升级。',
    keywords: '产品中心,AI解决方案,数字分身,企业知识库,聊天绘画,论文创作,人工智能产品,艺创AI'
  });
  const products = [
    {
      icon: <Brain className="h-12 w-12 text-[#015bfe]" />,
      title: "数字分身",
      description: "基于大语言模型的智能对话系统，可以模拟特定角色或专业人士，提供自然流畅的对话体验。",
      features: ["多轮对话理解", "情感识别", "个性化定制", "多渠道部署"],
      link: "/products/digital-twin"
    },
    {
      icon: <Database className="h-12 w-12 text-[#015bfe]" />,
      title: "企业知识库",
      description: "智能整合企业各类文档资料，构建结构化知识体系，提供精准搜索和智能问答功能。",
      features: ["智能检索", "自动分类", "权限管理", "知识图谱"],
      link: "/products/knowledge-base"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-[#015bfe]" />,
      title: "聊天绘画",
      description: "结合NLP和计算机视觉技术，通过自然语言描述生成专业级图像，激发创意表达。",
      features: ["文本生成图像", "多风格支持", "高清导出", "批量处理"],
      link: "/products/chat-drawing"
    },
    {
      icon: <FileText className="h-12 w-12 text-[#015bfe]" />,
      title: "论文创作",
      description: "辅助学术研究人员进行文献综述、数据分析和论文撰写，提高研究效率和质量。",
      features: ["文献分析", "智能写作", "格式规范", "查重检测"],
      link: "/products/paper-writing"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">我们的产品</h1>
            <p className="text-xl max-w-3xl mx-auto">
              AI科技提供全面的人工智能解决方案，帮助企业实现数字化转型和智能化升级。
              我们的产品涵盖多个应用场景，满足不同行业的需求。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-[#015bfe] hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-[#015bfe]/10 rounded-lg flex items-center justify-center mr-6">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <ul className="mb-6 space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="bg-[#015bfe] hover:bg-blue-700"
                          asChild
                        >
                          <Link to={product.link}>
                            了解详情
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f7f9f0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">为什么选择我们的产品？</h2>
            <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的产品基于最新的人工智能技术，具有高度的可靠性、安全性和可扩展性，
              能够满足企业在不同场景下的需求。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#015bfe]">
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">先进技术</h3>
              <p className="text-gray-600">
                采用最新的深度学习和大语言模型技术，持续创新，保持技术领先优势。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#015bfe]">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 7h.01"></path>
                  <path d="M17 7h.01"></path>
                  <path d="M7 17h.01"></path>
                  <path d="M17 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">灵活定制</h3>
              <p className="text-gray-600">
                根据企业特定需求提供定制化解决方案，满足不同行业和场景的应用需求。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#015bfe]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">安全可靠</h3>
              <p className="text-gray-600">
                严格的数据安全保障和隐私保护措施，确保客户数据安全和业务连续性。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
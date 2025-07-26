"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Database } from "lucide-react";
import { Link } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const KnowledgeBasePage = () => {
  // 设置知识库页面元数据
  usePageMetadata({
    title: '企业知识库 - 智能知识管理系统 | 艺创AI',
    description: '智能整合企业各类文档资料，构建结构化知识体系，提供精准搜索和智能问答功能。支持多格式文档、权限管理、知识图谱等功能。',
    keywords: '企业知识库,知识管理系统,智能检索,知识图谱,文档管理,智能问答,艺创AI'
  });
  const features = [
    {
      title: "智能检索",
      description: "基于语义理解的搜索引擎，支持自然语言提问，精准找到所需信息。"
    },
    {
      title: "自动分类",
      description: "利用机器学习算法，自动对企业文档进行分类整理，构建结构化知识体系。"
    },
    {
      title: "知识图谱",
      description: "构建企业知识关联网络，展示知识点之间的联系，帮助用户全面理解知识体系。"
    },
    {
      title: "多格式支持",
      description: "支持Word、PDF、PPT、Excel等多种文件格式，满足企业多样化的文档需求。"
    },
    {
      title: "权限管理",
      description: "细粒度的权限控制系统，确保敏感信息安全，同时方便共享和协作。"
    },
    {
      title: "智能问答",
      description: "基于企业知识库的智能问答系统，快速解答员工和客户的问题。"
    }
  ];

  const useCases = [
    {
      title: "企业内部知识管理",
      description: "整合企业内部文档、规章制度、操作手册等资料，提供统一的知识管理平台，提高信息获取效率。"
    },
    {
      title: "客户服务知识库",
      description: "构建产品手册、常见问题解答等客户服务知识库，提升客服人员的服务质量和效率。"
    },
    {
      title: "研发知识沉淀",
      description: "沉淀研发过程中的技术文档、设计方案、问题解决方案等，促进知识共享和技术创新。"
    },
    {
      title: "培训学习平台",
      description: "整合培训材料和学习资源，为员工提供便捷的学习平台，促进企业学习型组织建设。"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">企业知识库</h1>
              <p className="text-xl mb-8">
                智能整合企业各类文档资料，构建结构化知识体系，
                提供精准搜索和智能问答功能，让企业知识资产发挥最大价值。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-[#015bfe] hover:bg-gray-100">
                  免费试用
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  了解更多
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-xl blur"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#015bfe]/20 rounded-full flex items-center justify-center mr-4">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">企业知识库</h3>
                      <p className="text-white/80">智能知识管理系统</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                        <span className="text-sm font-medium">产品手册.pdf</span>
                      </div>
                      <p className="text-xs text-white/70">最后更新: 2023-05-15</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                        <span className="text-sm font-medium">技术白皮书.docx</span>
                      </div>
                      <p className="text-xs text-white/70">最后更新: 2023-06-22</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <line x1="10" y1="9" x2="8" y2="9"></line>
                        </svg>
                        <span className="text-sm font-medium">市场分析报告.pptx</span>
                      </div>
                      <p className="text-xs text-white/70">最后更新: 2023-07-05</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">核心功能</h2>
            <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              企业知识库集成了多项先进的知识管理技术，提供全面的企业知识管理解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-6 w-6 text-[#015bfe]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">应用场景</h2>
            <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              企业知识库可应用于多种业务场景，为企业提供智能化知识管理解决方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="w-full h-40 bg-gray-100 rounded-lg mb-4">
                      <img 
                        src={`https://images.unsplash.com/photo-${1560000000 + index * 10000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} 
                        alt={useCase.title} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              className="bg-[#015bfe] hover:bg-blue-700"
              asChild
            >
              <Link to="/demo">
                体验产品演示
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBasePage;
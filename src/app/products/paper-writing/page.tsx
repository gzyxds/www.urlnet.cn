"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, FileText } from "lucide-react";
import { Link } from 'react-router-dom';

const PaperWritingPage = () => {
  const features = [
    {
      title: "文献分析",
      description: "智能分析海量学术文献，提取关键信息，帮助研究人员快速了解研究现状。"
    },
    {
      title: "智能写作",
      description: "生成结构化的论文初稿，包括摘要、引言、方法、结果和讨论等部分，提高写作效率。"
    },
    {
      title: "格式规范",
      description: "支持APA、MLA、Chicago等多种学术格式，自动调整排版和引用格式。"
    },
    {
      title: "查重检测",
      description: "内置查重功能，检测文章原创性，避免学术不端行为。"
    },
    {
      title: "参考文献管理",
      description: "自动生成和管理参考文献，确保引用格式正确和完整。"
    },
    {
      title: "多语言支持",
      description: "支持中英文等多种语言的论文写作，满足国际化学术需求。"
    }
  ];

  const useCases = [
    {
      title: "学术论文写作",
      description: "辅助研究人员撰写高质量的学术论文，提高研究成果的表达质量和发表效率。"
    },
    {
      title: "研究报告生成",
      description: "快速生成结构化的研究报告，帮助企业和机构整理和呈现研究成果。"
    },
    {
      title: "学位论文辅助",
      description: "为硕博研究生提供论文写作辅助，包括文献综述、方法描述和结果分析等。"
    },
    {
      title: "科研项目申请",
      description: "辅助科研人员撰写项目申请书，提高申请成功率。"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">论文创作</h1>
              <p className="text-xl mb-8">
                辅助学术研究人员进行文献综述、数据分析和论文撰写，
                提高研究效率和质量，让学术写作更加高效和专业。
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
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">论文创作助手</h3>
                      <p className="text-white/80">智能学术写作系统</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm">请输入您的论文主题：</p>
                    </div>
                    <div className="bg-[#015bfe] p-3 rounded-lg ml-auto max-w-[80%]">
                      <p className="text-sm">人工智能在医疗诊断中的应用</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm mb-2">已生成论文大纲：</p>
                      <div className="text-xs space-y-1">
                        <p>1. 引言</p>
                        <p>2. 文献综述</p>
                        <p>3. 研究方法</p>
                        <p>4. 结果分析</p>
                        <p>5. 讨论</p>
                        <p>6. 结论</p>
                      </div>
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
              论文创作助手集成了多项先进的AI写作技术，提供全面的学术写作解决方案。
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
              论文创作助手可应用于多种学术场景，为研究人员提供高效的写作解决方案。
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
                        src={`https://images.unsplash.com/photo-${1580000000 + index * 10000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} 
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

export default PaperWritingPage;
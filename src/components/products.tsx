"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Database, MessageSquare, FileText } from "lucide-react";
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      icon: <Brain className="h-10 w-10 text-[#015bfe]" />,
      title: "数字分身",
      description: "基于大语言模型的智能对话系统，可以模拟特定角色或专业人士，提供自然流畅的对话体验。",
      features: ["多轮对话理解", "情感识别", "个性化定制", "多渠道部署"],
      link: "/products/digital-twin"
    },
    {
      icon: <Database className="h-10 w-10 text-[#015bfe]" />,
      title: "企业知识库",
      description: "智能整合企业各类文档资料，构建结构化知识体系，提供精准搜索和智能问答功能。",
      features: ["智能检索", "自动分类", "权限管理", "知识图谱"],
      link: "/products/knowledge-base"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#015bfe]" />,
      title: "聊天绘画",
      description: "结合NLP和计算机视觉技术，通过自然语言描述生成专业级图像，激发创意表达。",
      features: ["文本生成图像", "多风格支持", "高清导出", "批量处理"],
      link: "/products/chat-drawing"
    },
    {
      icon: <FileText className="h-10 w-10 text-[#015bfe]" />,
      title: "论文创作",
      description: "辅助学术研究人员进行文献综述、数据分析和论文撰写，提高研究效率和质量。",
      features: ["文献分析", "智能写作", "格式规范", "查重检测"],
      link: "/products/paper-writing"
    }
  ];

  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的产品</h2>
          <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们提供全面的AI解决方案，帮助企业和个人提升效率、激发创意、创造价值。
            从智能对话到创意生成，我们的产品覆盖多种AI应用场景。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-[#015bfe] hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
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
                    variant="outline" 
                    className="w-full text-[#015bfe] border-[#015bfe] hover:bg-[#015bfe] hover:text-white"
                    asChild
                  >
                    <Link to={product.link}>
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
            <Link to="/products">
              查看所有产品
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
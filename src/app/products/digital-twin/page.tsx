"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Brain } from "lucide-react";
import { Link } from 'react-router-dom';

const DigitalTwinPage = () => {
  const features = [
    {
      title: "多轮对话理解",
      description: "基于先进的大语言模型，能够理解上下文语境，实现自然流畅的多轮对话交互。"
    },
    {
      title: "情感识别",
      description: "通过分析用户的语言表达，识别用户情绪状态，提供情感化的回应，增强用户体验。"
    },
    {
      title: "个性化定制",
      description: "根据企业特点和需求，定制专属数字分身，包括语言风格、专业知识和回应策略。"
    },
    {
      title: "多渠道部署",
      description: "支持网站、APP、小程序、智能硬件等多种渠道部署，实现全方位的用户触达。"
    },
    {
      title: "知识库集成",
      description: "与企业知识库无缝集成，确保回答的专业性和准确性，持续学习和优化。"
    },
    {
      title: "多语言支持",
      description: "支持中文、英文、日文等多种语言，满足全球化业务需求。"
    }
  ];

  const useCases = [
    {
      title: "智能客服",
      description: "7×24小时在线客服，快速响应客户咨询，提高客户满意度，降低人工成本。"
    },
    {
      title: "销售顾问",
      description: "根据客户需求推荐合适的产品和服务，提供专业的购买建议，提升转化率。"
    },
    {
      title: "培训助手",
      description: "为新员工提供培训指导和问题解答，加速员工上手，提高培训效率。"
    },
    {
      title: "品牌代言人",
      description: "创建虚拟品牌代言人，通过社交媒体与粉丝互动，提升品牌形象和影响力。"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">数字分身</h1>
              <p className="text-xl mb-8">
                基于大语言模型的智能对话系统，可以模拟特定角色或专业人士，
                提供自然流畅的对话体验，为企业和个人提供全天候的智能服务。
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
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">AI数字助手</h3>
                      <p className="text-white/80">智能对话系统</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm">您好！我是AI科技的数字分身助手，有什么可以帮您解答的问题吗？</p>
                    </div>
                    <div className="bg-[#015bfe] p-3 rounded-lg ml-auto max-w-[80%]">
                      <p className="text-sm">请介绍一下数字分身的主要功能。</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm">数字分身具有多轮对话理解、情感识别、个性化定制和多渠道部署等核心功能，可以为企业提供智能客服、销售顾问等多种应用场景的解决方案。</p>
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
              数字分身集成了多项先进的AI技术，提供全面的智能对话解决方案。
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
              数字分身可应用于多种业务场景，为企业提供智能化解决方案。
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
                        src={`https://images.unsplash.com/photo-${1550000000 + index * 10000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} 
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

export default DigitalTwinPage;
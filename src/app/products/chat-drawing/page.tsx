"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom';

const ChatDrawingPage = () => {
  const features = [
    {
      title: "文本生成图像",
      description: "通过自然语言描述生成高质量图像，将创意想法快速可视化。"
    },
    {
      title: "多风格支持",
      description: "支持写实、卡通、油画、水彩等多种艺术风格，满足不同创作需求。"
    },
    {
      title: "高清导出",
      description: "支持多种分辨率和格式导出，满足不同应用场景的需求。"
    },
    {
      title: "图像编辑",
      description: "支持对生成图像进行二次编辑和修改，实现精细化创作。"
    },
    {
      title: "批量处理",
      description: "支持批量生成和处理图像，提高创作效率。"
    },
    {
      title: "创意提示",
      description: "内置丰富的创意提示库，帮助用户更好地表达创意想法。"
    }
  ];

  const useCases = [
    {
      title: "营销素材创作",
      description: "快速生成各类营销素材，包括广告图、社交媒体配图、产品展示图等，提升营销效率。"
    },
    {
      title: "概念设计",
      description: "为产品设计、UI设计、建筑设计等领域提供概念图，加速设计过程。"
    },
    {
      title: "内容创作",
      description: "为文章、故事、教材等内容创作配图，增强内容表现力和吸引力。"
    },
    {
      title: "艺术创作",
      description: "辅助艺术家进行创作，提供灵感和参考，拓展艺术表现形式。"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">聊天绘画</h1>
              <p className="text-xl mb-8">
                结合NLP和计算机视觉技术，通过自然语言描述生成专业级图像，
                激发创意表达，让创意无需专业技能也能轻松实现。
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
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">AI绘画助手</h3>
                      <p className="text-white/80">文本生成图像系统</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm">请描述您想要生成的图像：</p>
                    </div>
                    <div className="bg-[#015bfe] p-3 rounded-lg ml-auto max-w-[80%]">
                      <p className="text-sm">一只在月光下奔跑的狼，背景是雪山和星空</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg">
                      <p className="text-sm mb-2">已生成图像：</p>
                      <div className="w-full h-32 bg-gray-800 rounded overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1561100344-0cce8621ca6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                          alt="生成的图像" 
                          className="w-full h-full object-cover"
                        />
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
              聊天绘画集成了多项先进的AI生成技术，提供全面的图像生成解决方案。
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
              聊天绘画可应用于多种创意场景，为企业和个人提供高效的图像生成解决方案。
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
                        src={`https://images.unsplash.com/photo-${1570000000 + index * 10000}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} 
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

export default ChatDrawingPage;
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Play } from "lucide-react";
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      image: "https://artaigc.cn/assets/saas.svg",
      title: "艺创超级IP数字人SaaS系统",
      subtitle: "[PHP源码版]",
      description: "为企业主、个人博主打造短视频IP的数字人聊天系统，支持真人音+形象定制...",
      features: ["声音克隆", "形象定制", "视频生成", "AI交谈", "热点话题"],
      price: 4999,
      originalPrice: 6800,
      link: "/products/digital-human"
    },
    {
      image: "https://artaigc.cn/assets/work.svg",
      title: "艺创全能AI知识库系统",
      subtitle: "[PHP源码版]",
      description: "全能AI知识库系统(Java版，基于前后端分离架构)以及Vue3、uni-app...",
      features: ["多模式输入", "向量检索", "智能问答", "多端支持"],
      price: 6600,
      originalPrice: 9800,
      link: "/products/knowledge-base"
    },
    {
      image: "https://artaigc.cn/assets/ai.svg",
      title: "艺创AI聊天绘画系统",
      subtitle: "[PHP源码版]",
      description: "实现了AI对话+AI绘画的融合使用，系统功能特色：AI画图对话、AI创作模型...",
      features: ["AI绘画", "智能聊天", "场景定制", "一键部署"],
      price: 2999,
      originalPrice: 3800,
      link: "/products/chat-drawing"
    },
    {
      image: "https://artaigc.cn/assets/lw.svg",
      title: "艺创AI论文写作系统",
      subtitle: "[PHP源码版]",
      description: "10分钟可生成几万字长文的系统，只需要输入主题关键词，AI即可快速为您生...",
      features: ["快速生成文稿", "一键生成论文", "可下载资料", "走改订通知"],
      price: 3200,
      originalPrice: 4695,
      link: "/products/paper-writing"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">我们的产品</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            探索我们的创新产品系列，为您的业务提供最佳解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* 产品图片 */}
              <div className="relative bg-blue-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">热销</div>
              </div>
              
              {/* 产品内容 */}
              <div className="p-4 flex-grow">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-600">{product.title}</h3>
                  <p className="text-sm font-medium text-gray-700 mb-2">{product.subtitle}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* 价格和按钮 */}
              <div className="p-3 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-blue-600 text-lg font-bold">¥{product.price}</span>
                    <span className="text-gray-400 text-xs line-through ml-2">¥{product.originalPrice}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      购买
                    </Button>
                    
                    <Button 
                      variant="default"
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      asChild
                    >
                      <Link to={product.link} className="flex items-center">
                        <Play className="h-3 w-3 mr-1" />
                        演示
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

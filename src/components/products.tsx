"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Play, Star } from "lucide-react";
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
      link: "/products/digital-human",
      rating: 4.8,
      sales: 156
    },
    {
      image: "https://artaigc.cn/assets/work.svg",
      title: "艺创全能AI知识库系统",
      subtitle: "[PHP源码版]",
      description: "全能AI知识库系统(Java版，基于前后端分离架构)以及Vue3、uni-app...",
      features: ["多模式输入", "向量检索", "智能问答", "多端支持"],
      price: 6600,
      originalPrice: 9800,
      link: "/products/knowledge-base",
      rating: 4.9,
      sales: 203
    },
    {
      image: "https://artaigc.cn/assets/ai.svg",
      title: "艺创AI聊天绘画系统",
      subtitle: "[PHP源码版]",
      description: "实现了AI对话+AI绘画的融合使用，系统功能特色：AI画图对话、AI创作模型...",
      features: ["AI绘画", "智能聊天", "场景定制", "一键部署"],
      price: 2999,
      originalPrice: 3800,
      link: "/products/chat-drawing",
      rating: 4.7,
      sales: 89
    },
    {
      image: "https://artaigc.cn/assets/lw.svg",
      title: "艺创AI论文写作系统",
      subtitle: "[PHP源码版]",
      description: "10分钟可生成几万字长文的系统，只需要输入主题关键词，AI即可快速为您生...",
      features: ["快速生成文稿", "一键生成论文", "可下载资料", "走改订通知"],
      price: 3200,
      originalPrice: 4695,
      link: "/products/paper-writing",
      rating: 4.6,
      sales: 134
    }
  ];

  return (
    <section className="py-24 bg-white" id="products">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            我们的产品
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            探索我们的创新产品系列，为您的业务提供最佳解决方案
          </motion.p>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
            >
              {/* 产品图片区域 */}
              <div className="relative bg-gradient-to-br from-blue-50 to-gray-50 p-6">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    热销
                  </span>
                </div>
                <div className="flex items-center justify-center h-48">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              
              {/* 产品内容区域 */}
              <div className="p-6">
                {/* 标题和评分 */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-3">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">已售 {product.sales}</span>
                  </div>
                </div>
                
                {/* 描述 */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                  {product.description}
                </p>
                
                {/* 功能标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="text-xs text-blue-600 font-medium">
                      +{product.features.length - 3} 更多
                    </span>
                  )}
                </div>
              </div>
              
              {/* 价格和操作区域 */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-blue-600">¥{product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 line-through ml-3">¥{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    购买
                  </Button>
                  
                  <Button 
                    variant="default"
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors"
                    asChild
                  >
                    <Link to={product.link} className="flex items-center justify-center">
                      <Play className="h-4 w-4 mr-2" />
                      演示
                    </Link>
                  </Button>
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

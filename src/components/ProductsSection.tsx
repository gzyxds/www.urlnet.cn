"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Play, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      image: "/product/saas.svg",
      title: "数字分身IP数字人SaaS系统",
      subtitle: "[PHP源码版]",
      description: "为企业主、个人博主打造短视频IP的数字人聊天系统，支持真人音+形象定制...",
      features: ["声音克隆", "形象定制", "视频生成", "AI交谈", "热点话题"],
      price: 4999,
      originalPrice: 6800,
      link: "/demo",
      rating: 4.8,
      sales: 156,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/work.svg",
      title: "企业级全能AI知识库系统",
      subtitle: "[PHP源码版]",
      description: "全能AI知识库系统(PHP版，基于前后端分离架构)以及Vue3、uni-app...",
      features: ["多模式输入", "向量检索", "智能问答", "多端支持"],
      price: 6600,
      originalPrice: 9800,
      link: "/demo",
      rating: 4.9,
      sales: 203,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/ai.svg",
      title: "艺创AI智能聊天绘画系统",
      subtitle: "[PHP源码版]",
      description: "基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发...",
      features: ["Python架构", "向量检索", "多源接入", "智能问答"],
      price: 2999,
      originalPrice: 3800.00,
      link: "/demo",
      rating: 4.9,
      sales: 178,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/lw.svg",
      title: "论文创作写作系统",
      subtitle: "[全新升级]",
      description: "你只需要输入论文关键词，AI即可快速为您生成论文大纲...",
      features: ["期刊论文", "科普文章", "学生作业", "商业报告"],
      price: 3200,
      originalPrice: 4698,
      link: "/demo",
      rating: 4.8,
      sales: 132,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/picture/Python.png",
      title: "全能AI知识库系统Python源码版",
      subtitle: "[Python源码版]",
      description: "基于Java开发的企业级AI知识库系统，高性能、高并发，支持大规模部署...",
      features: ["Java架构", "高并发", "企业级", "多端支持"],
      price: 6600,
      originalPrice: 9800,
      link: "/demo",
      rating: 4.9,
      sales: 165,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/saas.svg",
      title: "艺创AI数字分身2.0",
      subtitle: "[PHP源码版]",
      description: "基于Java开发的AI聊天绘画系统，高性能架构，支持多种绘画模型和聊天场景...",
      features: ["Java架构", "多模型支持", "高性能", "场景定制"],
      price: 6600,
      originalPrice: 9800,
      link: "/demo",
      rating: 4.8,
      sales: 108,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/ai.svg",
      title: "艺创AI聊天绘画系统Java",
      subtitle: "[Java源码版]",
      description: "实现了AI对话+AI绘画的融合使用，系统功能特色：AI画图对话、AI创作模型...",
      features: ["AI绘画", "智能聊天", "场景定制", "一键部署"],
      price: 2999,
      originalPrice: 3800,
      link: "/demo",
      rating: 4.7,
      sales: 89,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/lw.svg",
      title: "艺创AI论文写作系统",
      subtitle: "[PHP源码版]",
      description: "10分钟可生成几万字长文的系统，只需要输入主题关键词，AI即可快速为您生...",
      features: ["快速生成文稿", "一键生成论文", "可下载资料", "走改订通知"],
      price: 3200,
      originalPrice: 4695,
      link: "/demo",
      rating: 4.6,
      sales: 134,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
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
              className="group overflow-hidden transition-all duration-500 bg-gradient-to-b from-[#f3f5f8] to-white border-2 border-white rounded-[2px] shadow-[0_6px_20px_#dce0e8] hover:shadow-[0_8px_25px_#dce0e8]"
            >
              {/* 产品图片区域 */}
              <div className="relative bg-gradient-to-br from-blue-50 to-gray-50 p-4">
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2 py-0.5">
                    热销
                  </span>
                </div>
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* 产品内容区域 */}
              <div className="p-4">
                {/* 标题和评分 */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md inline-block mb-2 border border-blue-100">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 ml-1.5">{product.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">已售 {product.sales}</span>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* 功能标签 */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 font-medium"
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
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-baseline">
                    <span className="text-xl font-bold text-blue-600">¥{product.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-400 line-through ml-2">¥{product.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-green-600 font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 px-2 text-xs text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    onClick={() => window.open(product.buyLink, '_blank')}
                  >
                    <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                    购买
                  </Button>

                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 h-8 px-2 text-xs bg-blue-600 hover:bg-blue-700 transition-colors"
                    asChild
                  >
                    <Link to={product.link} className="flex items-center justify-center">
                      <Play className="h-3.5 w-3.5 mr-1.5" />
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

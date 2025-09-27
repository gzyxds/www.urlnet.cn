import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, Users, Store, GraduationCap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from '@/components/ContactSection';

// 定义产品数据类型
interface Product {
  title: string;
  description: string;
  features: string[];
  originalPrice: string;
  currentPrice: string;
  sourceCodeLink: string;
  badge?: string;
  icon?: React.ReactNode;
  iconColor: string;
  tags: string[];
}

// 产品数据 - AI企业级解决方案
const products: Product[] = [
  {
    title: "数字分身PHP版",
    description: "基于PHP开发的数字分身系统，支持声音克隆、形象生成、视频制作等功能，适用于品牌宣传、在线教育、虚拟客服等场景。",
    features: [
      "声音克隆",
      "形象生成",
      "视频制作",
      "多平台部署",
      "实时渲染"
    ],
    originalPrice: "¥6800.00",
    currentPrice: "¥4999.00",
    sourceCodeLink: "/products/human",
    badge: "PHP版",
    icon: <Users className="h-5 w-5" />,
    iconColor: "bg-blue-500",
    tags: ["PHP"]
  },
  {
    title: "企业知识库PHP版",
    description: "基于PHP开发的企业知识库系统，支持文档智能解析、语义搜索、知识图谱构建等功能，帮助企业构建智能化的知识管理体系。",
    features: [
      "文档解析",
      "语义搜索",
      "知识图谱",
      "智能问答",
      "多格式支持"
    ],
    originalPrice: "¥9800.00",
    currentPrice: "¥6600.00",
    sourceCodeLink: "/demo",
    badge: "PHP版",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-orange-500",
    tags: ["PHP"]
  },
  {
    title: "聊天绘画PHP版",
    description: "基于PHP开发的AI聊天绘画系统，支持多种艺术风格、批量生成、智能编辑等功能，为设计师和创作者提供强大的AI辅助工具。",
    features: [
      "多种风格",
      "批量生成",
      "智能编辑",
      "高清输出",
      "云端部署"
    ],
    originalPrice: "¥3800.00",
    currentPrice: "¥2999.00",
    sourceCodeLink: "/demo",
    badge: "PHP版",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-purple-500",
    tags: ["PHP"]
  },
  {
    title: "论文创作PHP版",
    description: "基于PHP开发的论文创作系统，支持文章生成、内容优化、多语言翻译等功能，为学术研究提供高效的写作解决方案。",
    features: [
      "文章生成",
      "内容优化",
      "多语言翻译",
      "格式排版",
      "参考文献"
    ],
    originalPrice: "¥4699.00",
    currentPrice: "¥3999.00",
    sourceCodeLink: "/demo",
    badge: "PHP版",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "bg-purple-700",
    tags: ["PHP"]
  },
  {
    title: "知识库Python版",
    description: "基于Python开发的知识库系统，支持深度学习、自然语言处理、知识图谱等技术，提供智能化的知识管理解决方案。",
    features: [
      "深度学习",
      "NLP处理",
      "知识图谱",
      "智能检索",
      "自动分类"
    ],
    originalPrice: "¥9800.00",
    currentPrice: "¥6600.00",
    sourceCodeLink: "/demo",
    badge: "Python版",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-red-500",
    tags: ["Python"]
  },
  {
    title: "数字分身2.0-pro",
    description: "基于Java开发的数字分身系统，采用微服务架构，支持高并发、分布式部署，提供企业级的数字人解决方案。",
    features: [
      "微服务架构",
      "高并发支持",
      "分布式部署",
      "容器化",
      "服务治理"
    ],
    originalPrice: "¥9800.00",
    currentPrice: "¥6600.00",
    sourceCodeLink: "/demo",
    badge: "pro版",
    icon: <Users className="h-5 w-5" />,
    iconColor: "bg-orange-500",
    tags: ["Java"]
  },
  {
    title: "企业知识库JAVA版",
    description: "基于Java开发的企业知识库系统，采用Spring Cloud框架，支持大规模数据处理和企业级应用部署。",
    features: [
      "Spring Cloud",
      "分布式存储",
      "集群部署",
      "权限管理",
      "数据安全"
    ],
    originalPrice: "¥98800.00",
    currentPrice: "¥6600.00",
    sourceCodeLink: "/demo",
    badge: "Java版",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-purple-500",
    tags: ["Java"]
  },
  {
    title: "聊天绘画JAVA版",
    description: "基于Java开发的聊天绘画系统，采用分布式架构，支持大规模并发访问和海量图片处理能力。",
    features: [
      "分布式计算",
      "图像处理",
      "负载均衡",
      "高可用性",
      "监控告警"
    ],
    originalPrice: "¥3800.00",
    currentPrice: "¥2999.00",
    sourceCodeLink: "/demo",
    badge: "Java版",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-blue-500",
    tags: ["Java"]
  },
    {
    title: "艺创开源Agent系统",
    description: "基于NestJS和Nuxt3构建的现代全栈框架，支持插件化开发和AI原生集成，为企业级应用提供灵活可扩展的技术架构。",
    features: [
      "NestJS + PostgreSQL后端",
      "Nuxt3 + Nuxt UI前端",
      "运行时插件系统",
      "AI原生协作能力",
      "TypeScript全栈支持"
    ],
    originalPrice: "免费开源",
    currentPrice: "免费开源",
    sourceCodeLink: "/demo",
    badge: "全栈版",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-blue-500",
    tags: ["TypeScript", "NestJS", "Nuxt"]
  },
  {
    title: "论文创作JAVA版",
    description: "基于Java开发的论文创作系统，采用微服务架构，支持多用户协同写作和大规模内容处理。",
    features: [
      "协同写作",
      "版本控制",
      "实时保存",
      "格式转换",
      "智能校对"
    ],
    originalPrice: "¥469800.00",
    currentPrice: "¥3999.00",
    sourceCodeLink: "/demo",
    badge: "Java版",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "bg-blue-500",
    tags: ["Java"]
  }
];

/**
 * 产品展示组件 - 参考图片样式重新设计
 * 采用现代化简约风格，白、黑、蓝色调
 * 优化数据展示区域排版，提升视觉层次感
 * @returns {JSX.Element} 组件
 */
const ProductShowcase = () => {
  // 添加二维码弹窗状态
  const [showQRCode, setShowQRCode] = useState<boolean>(false);

  // 处理显示二维码弹窗
  const handleShowQRCode = () => {
    setShowQRCode(true);
  };

  // 处理关闭二维码弹窗
  const handleCloseQRCode = () => {
    setShowQRCode(false);
  };

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 tracking-tight">
            企业级AI解决方案
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
            为不同规模企业提供专业的AI系统解决方案，支持多种AI应用场景和技术架构
          </p>
        </motion.div>

        {/* 产品网格 - 响应式布局 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              className="group"
              variants={cardVariants}
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* 产品头部 */}
                <div className="relative p-4 sm:p-6 border-b border-gray-100">
                  {/* 图标、标题和徽章 */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <div className={`flex items-center justify-center w-8 h-8 ${product.iconColor} rounded-lg text-white mr-2`}>
                        {React.cloneElement(product.icon as React.ReactElement, { className: "h-4 w-4" })}
                      </div>
                      {/* 标题 */}
                      <h3 className="text-base sm:text-lg font-bold text-black leading-tight">
                        {product.title}
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>



                  {/* 描述 */}
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {product.description}
                  </p>
                </div>

                {/* 特性列表 */}
                <div className="p-4 sm:p-6 flex-1">
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-md">
                        <div className="flex-shrink-0 w-3 h-3 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-2 w-2 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* 价格区域 */}
                  <div className="border-t border-gray-100 pt-3 sm:pt-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500">原价</span>
                          <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-blue-600">
                          {product.currentPrice}
                        </div>
                      </div>

                      {/* 评分 */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* 操作按钮 - 并排显示 */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-lg h-9 transition-all duration-200 text-xs border border-gray-200"
                        onClick={handleShowQRCode}
                      >
                        联系客服
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>

                      <Button
                        size="sm"
                        className="flex-1 border border-[#1d4ed8] bg-transparent hover:bg-[rgba(29,78,216,0.1)] text-[#1d4ed8] font-medium rounded-lg h-9 transition-all duration-200 text-xs"
                        onClick={() => window.open(product.sourceCodeLink, '_blank', 'noopener,noreferrer')}
                      >
                        免费试用
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 添加联系我们组件 */}
      <Contact />

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseQRCode}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-sm w-full relative shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                onClick={handleCloseQRCode}
                aria-label="关闭"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">联系客服</h3>
                <p className="text-sm text-gray-600 mb-6">扫描二维码添加客服微信，获取产品免费试用资格</p>

                {/* 二维码 */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src="/images/qrcode.png"
                      alt="客服二维码"
                      className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
                    />
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductShowcase;//产品展示组件

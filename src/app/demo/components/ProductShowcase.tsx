import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// 定义产品数据类型
interface Product {
  title: string;
  features: string[];
  description: string;
  image: string;
  price: string;
  sourceCodeLink: string; // 添加源码购买链接
}

// 产品数据
const products: Product[] = [
  {
    title: "码多多ChatMoney-全能AI知识库系统",
    features: [
      "AI智能对话",
      "知识库应用",
      "机器人广场",
      "知识库训练",
      "发布网页/js/api",
    ],
    description: "基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心，提升信息检索效率。",
    image: "https://artaigc.cn/assets/saas.svg",
    price: "¥9800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/chatmoney"
  },
  {
    title: "码多多-AI数字人SaaS系统 2.0版",
    features: [
      "声音克隆",
      "数字形象",
      "视频创作",
      "多平台适用",
      "营销中心",
    ],
    description: "专为企业和个人打造的数字人解决方案。通过AI技术，实现声音、形象的克隆，快速生成高质量视频内容，适用于品牌宣传、在线教育、虚拟客服等多种场景。",
    image: "https://artaigc.cn/assets/work.svg",
    price: "¥12800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/digitaltwin"
  },
  {
    title: "ChatAI-智能聊天绘画系统",
    features: [
      "AI绘画",
      "智能聊天",
      "多模型支持",
      "商业级应用",
      "主题模板切换",
    ],
    description: "集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AI进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型，适用于创意设计、内容生成等领域。",
    image: "https://artaigc.cn/assets/ai.svg",
    price: "¥3800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/chatai"
  },
  {
    title: "ChatPaper-长文写作系统",
    features: [
      "快速生成大纲",
      "一键生成全文",
      "海量文献支持",
      "自定义学科领域",
      "查重检测",
    ],
    description: "专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。",
    image: "https://artaigc.cn/assets/lw.svg",
    price: "¥4698.00",
    sourceCodeLink: "https://shop.maddodo.com/product/chatpaper"
  },
];

/**
 * 产品展示组件 - 现代化高级风格
 * 采用卡片式布局、渐变色彩、动画效果和精致细节
 * 优化版本：移除悬停效果和阴影，使用框架默认宽度
 * @returns {JSX.Element} 组件
 */
const ProductShowcase = () => {

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            企业级 AI 解决方案
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            为您的业务提供最先进的人工智能技术支持，提升效率，创造价值
          </p>
        </motion.div>

        {/* 产品列表 */}
        <motion.div 
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.title} 
              className="relative"
              variants={itemVariants}
            >
              <div className={`
                rounded-2xl 
                overflow-hidden 
                bg-white 
                border border-gray-100
                flex flex-col lg:flex-row
                h-auto lg:h-[480px]
                transition-all 
                duration-300
              `}>
                {/* 产品图片区域 - 均匀分布布局 */}
                <div className={`
                  lg:w-1/2 
                  overflow-hidden 
                  ${index % 2 === 1 ? 'lg:order-last' : ''}
                `}>
                  <div className="h-full relative">
                    {/* 背景渐变 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
                    
                    {/* 产品图片 - 优化显示方式 */}
                    <div className="relative h-96 lg:h-full w-full flex items-center justify-center p-4">
                      <motion.img 
                        src={product.image} 
                        alt={`${product.title} 产品示意图`} 
                        className="max-h-full max-w-full h-auto w-auto object-contain z-10"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    
                    {/* 装饰元素 */}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      热门产品
                    </div>
                  </div>
                </div>

                {/* 产品信息区域 - 均匀分布布局 */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                  {/* 产品标题和描述 */}
                  <div>
                    {/* 标签 */}
                    <div className="flex items-center mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        企业级解决方案
                      </span>
                      <div className="ml-3 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    {/* 标题 */}
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 mb-3">
                      {product.title}
                    </h3>
                    
                    {/* 描述 */}
                    <p className="text-base leading-relaxed text-gray-600 mb-6">
                      {product.description}
                    </p>
                    
                    {/* 特性列表 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-x-2">
                          <CheckCircle2 className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 价格和操作按钮 */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">起始价格</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {product.price}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full group"
                      >
                        查看详情
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                      <Button 
                        size="lg" 
                        className="border-2 border-blue-600 bg-transparent hover:bg-blue-50 text-blue-600 font-medium rounded-full" 
                        asChild
                      >
                        <a href={product.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                          购买源码
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
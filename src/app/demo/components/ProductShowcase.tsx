import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, ShoppingCart, Users, Globe, Store, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

// 定义产品数据类型
interface Product {
  title: string;
  subtitle: string;
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
    title: "AI智能对话系统",
    subtitle: "AI Chat System",
    description: "基于大语言模型的企业级智能对话系统，支持多轮对话、知识库集成、情感分析等功能，助力企业构建智能客服和知识问答平台。",
    features: [
      "智能对话",
      "知识库集成",
      "多轮对话",
      "情感分析",
      "API接口"
    ],
    originalPrice: "¥12800.00",
    currentPrice: "¥9800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/",
    badge: "AI对话",
    icon: <ShoppingCart className="h-5 w-5" />,
    iconColor: "bg-blue-500",
    tags: ["AI对话"]
  },
  {
    title: "AI数字人系统",
    subtitle: "AI Digital Human",
    description: "企业级AI数字人解决方案，支持声音克隆、形象生成、视频制作等功能，适用于品牌宣传、在线教育、虚拟客服等场景。",
    features: [
      "声音克隆",
      "形象生成",
      "视频制作",
      "多平台部署",
      "实时渲染"
    ],
    originalPrice: "¥16800.00",
    currentPrice: "¥12800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/multi-merchant",
    badge: "AI数字人",
    icon: <Users className="h-5 w-5" />,
    iconColor: "bg-orange-500",
    tags: ["AI数字人"]
  },
  {
    title: "AI绘画创作系统",
    subtitle: "AI Art Creation",
    description: "基于深度学习的AI绘画创作平台，支持多种艺术风格、批量生成、智能编辑等功能，为设计师和创作者提供强大的AI辅助工具。",
    features: [
      "多种风格",
      "批量生成",
      "智能编辑",
      "高清输出",
      "云端部署"
    ],
    originalPrice: "¥15800.00",
    currentPrice: "¥11800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/private-domain",
    badge: "AI绘画",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-purple-500",
    tags: ["AI绘画"]
  },
  {
    title: "AI知识库系统",
    subtitle: "AI Knowledge Base",
    description: "企业级AI知识库管理平台，支持文档智能解析、语义搜索、知识图谱构建等功能，帮助企业构建智能化的知识管理体系。",
    features: [
      "文档解析",
      "语义搜索",
      "知识图谱",
      "智能问答",
      "多格式支持"
    ],
    originalPrice: "¥18800.00",
    currentPrice: "¥14800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/multi-store",
    badge: "AI知识库",
    icon: <Store className="h-5 w-5" />,
    iconColor: "bg-purple-700",
    tags: ["AI知识库"]
  },
  {
    title: "AI写作助手系统",
    subtitle: "AI Writing Assistant",
    description: "智能AI写作助手，支持文章生成、内容优化、多语言翻译等功能，为内容创作者和企业提供高效的AI写作解决方案。",
    features: [
      "文章生成",
      "内容优化",
      "多语言翻译",
      "SEO优化",
      "批量处理"
    ],
    originalPrice: "¥15800.00",
    currentPrice: "¥11800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/java-standard",
    badge: "AI写作",
    icon: <ShoppingCart className="h-5 w-5" />,
    iconColor: "bg-red-500",
    tags: ["AI写作"]
  },
  {
    title: "AI数据分析系统",
    subtitle: "AI Data Analytics",
    description: "企业级AI数据分析平台，支持数据挖掘、智能预测、可视化分析等功能，帮助企业实现数据驱动的智能决策。",
    features: [
      "数据挖掘",
      "智能预测",
      "可视化分析",
      "实时监控",
      "报表生成"
    ],
    originalPrice: "¥19800.00",
    currentPrice: "¥15800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/java-multi-merchant",
    badge: "AI分析",
    icon: <Users className="h-5 w-5" />,
    iconColor: "bg-orange-500",
    tags: ["AI分析"]
  },
  {
    title: "AI营销自动化系统",
    subtitle: "AI Marketing Automation",
    description: "智能AI营销自动化平台，支持精准投放、用户画像、营销策略优化等功能，提升企业营销效率和转化率。",
    features: [
      "精准投放",
      "用户画像",
      "策略优化",
      "效果分析",
      "多渠道整合"
    ],
    originalPrice: "¥22800.00",
    currentPrice: "¥18800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/foreign-trade",
    badge: "AI营销",
    icon: <Globe className="h-5 w-5" />,
    iconColor: "bg-purple-500",
    tags: ["AI营销"]
  },
  {
    title: "AI教育培训系统",
    subtitle: "AI Education Platform",
    description: "智能AI教育培训平台，支持个性化学习、智能推荐、学习效果评估等功能，为教育机构提供现代化的AI教学解决方案。",
    features: [
      "个性化学习",
      "智能推荐",
      "效果评估",
      "课程管理",
      "学习追踪"
    ],
    originalPrice: "¥12800.00",
    currentPrice: "¥9800.00",
    sourceCodeLink: "https://shop.maddodo.com/product/knowledge-payment",
    badge: "AI教育",
    icon: <GraduationCap className="h-5 w-5" />,
    iconColor: "bg-blue-500",
    tags: ["AI教育"]
  },
];

/**
 * 产品展示组件 - 参考图片样式重新设计
 * 采用现代化简约风格，白、黑、蓝色调
 * 优化数据展示区域排版，提升视觉层次感
 * @returns {JSX.Element} 组件
 */
const ProductShowcase = () => {
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
          {products.map((product, index) => (
            <motion.div 
              key={product.title} 
              className="group"
              variants={cardVariants}
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full flex flex-col">
                {/* 产品头部 */}
                <div className="relative p-4 sm:p-6 border-b border-gray-100">
                  {/* 图标和徽章 */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${product.iconColor} rounded-lg text-white`}>
                      {product.icon}
                    </div>
                    <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* 标题 */}
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 leading-tight">
                    {product.title}
                  </h3>
                  
                  {/* 副标题 */}
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    {product.subtitle}
                  </p>
                  
                  {/* 描述 */}
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {product.description}
                  </p>
                </div>

                {/* 特性列表 */}
                <div className="p-4 sm:p-6 flex-1">
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 sm:gap-3">
                        <div className="flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-blue-600" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">{feature}</span>
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

                    {/* 操作按钮 */}
                    <div className="flex flex-col gap-2">
                      <Button 
                        size="sm" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg h-9 sm:h-10 transition-all duration-200 text-xs sm:text-sm"
                      >
                        免费试用
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                      
                      <Button 
                        size="sm" 
                        className="w-full border border-blue-600 bg-transparent hover:bg-blue-50 text-blue-600 font-medium rounded-lg h-9 sm:h-10 transition-all duration-200 text-xs sm:text-sm" 
                        asChild
                      >
                        <a href={product.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                          查看详情
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

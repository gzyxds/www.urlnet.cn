"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BookOpen, Palette, User, Lightbulb } from "lucide-react";
import { Link } from 'react-router-dom';

/**
 * 应用场景组件
 * 展示不同行业/领域的AI应用场景，用户可以通过点击标签切换不同场景
 */
const Scenario = () => {
  // 定义所有应用场景数据
  const scenarios = [
    {
      id: "ecommerce",
      title: "企业知识库",
      icon: BookOpen,
      image: "/product/work.svg",
      description: "智能企业知识管理系统，通过AI技术自动整理、分类和检索企业内部文档、经验和知识资产，建立统一的知识库平台。支持智能问答、知识推荐和协作分享，帮助员工快速获取所需信息，提升工作效率，促进知识传承和创新，实现企业智慧资产的最大化利用。",
      features: [
        {
          title: "智能检索",
          description: "AI驱动的语义搜索，快速定位相关知识和文档资料"
        },
        {
          title: "知识推荐",
          description: "基于工作场景和用户需求，主动推送相关知识内容"
        },
        {
          title: "协作共享",
          description: "支持团队协作编辑和知识分享，促进企业知识传承"
        }
      ]
    },
    {
      id: "media",
      title: "聊天绘画",
      icon: Palette,
      image: "/product/ai.svg",
      description: "AI驱动的智能对话绘画创作平台，通过自然语言描述即可生成高质量的艺术作品和设计图像。支持多种绘画风格、实时交互调整和创意灵感激发，为设计师、艺术家和创作者提供强大的AI创作工具，大幅提升创作效率和创意表达能力。",
      features: [
        {
          title: "语言创作",
          description: "通过自然语言描述，AI自动生成符合需求的艺术作品"
        },
        {
          title: "风格多样",
          description: "支持多种艺术风格和绘画技法，满足不同创作需求"
        },
        {
          title: "实时交互",
          description: "支持实时调整和优化，与AI进行创作对话和灵感碰撞"
        }
      ]
    },
    {
      id: "education",
      title: "数字分身",
      icon: User,
      image: "/product/saas.svg",
      description: "AI数字分身技术平台，为用户创建高度逼真的数字化身，支持语音克隆、表情同步和智能对话。可应用于虚拟主播、在线教育、客户服务等多个场景，提供24小时不间断的个性化服务，实现真人与数字世界的无缝连接和交互体验。",
      features: [
        {
          title: "形象克隆",
          description: "高精度还原真人外貌特征，创建逼真的数字化身"
        },
        {
          title: "语音合成",
          description: "智能语音克隆技术，保持原有的语调和说话习惯"
        },
        {
          title: "智能交互",
          description: "支持自然对话和情感表达，提供真实的交互体验"
        }
      ]
    },
    {
      id: "gaming",
      title: "聊天绘画",
      icon: Palette,
      image: "/product/ai.svg",
      description: "AI驱动的智能对话绘画创作平台，通过自然语言描述即可生成高质量的艺术作品和设计图像。支持多种绘画风格、实时交互调整和创意灵感激发，为设计师、艺术家和创作者提供强大的AI创作工具，大幅提升创作效率和创意表达能力。",
      features: [
        {
          title: "语言创作",
          description: "通过自然语言描述，AI自动生成符合需求的艺术作品"
        },
        {
          title: "风格多样",
          description: "支持多种艺术风格和绘画技法，满足不同创作需求"
        },
        {
          title: "实时交互",
          description: "支持实时调整和优化，与AI进行创作对话和灵感碰撞"
        }
      ]
    },
    {
      id: "translation",
      title: "创作创作",
      icon: Lightbulb,
      image: "/product/lw.svg",
      description: "AI智能创作助手平台，集成文案写作、内容策划、创意设计等多种创作功能。通过深度学习技术理解用户需求，自动生成高质量的营销文案、产品描述、创意方案等内容，为创作者和营销人员提供灵感启发和效率提升，实现创作流程的智能化升级。",
      features: [
        {
          title: "智能写作",
          description: "AI辅助生成各类文案内容，提供创作灵感和素材支持"
        },
        {
          title: "多场景适配",
          description: "支持营销、教育、娱乐等多个领域的内容创作需求"
        },
        {
          title: "创意优化",
          description: "基于数据分析优化创作效果，提升内容质量和传播力"
        }
      ]
    }
  ];

  // 当前选中的场景ID
  const [activeScenario, setActiveScenario] = useState("ecommerce");

  // 获取当前选中的场景数据
  const currentScenario = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <section className="py-24 bg-white" id="scenarios">
      <div className="container mx-auto px-6">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            热门产品
          </h2>
          <div className="w-20 h-1 bg-[#015bfe] mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            我们的AI解决方案广泛应用于各行各业，为不同领域带来智能化转型和效率提升
          </p>
        </div>

        {/* 场景选择标签 */}
        <div className="mb-12 lg:mb-16">
          {/* 移动端横向滚动 */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 px-4 pb-2" style={{ width: 'max-content' }}>
              {scenarios.map((scenario) => {
                const IconComponent = scenario.icon;
                return (
                  <Button
                    key={scenario.id}
                    variant={activeScenario === scenario.id ? "default" : "outline"}
                    className={`rounded-none px-6 py-3.5 text-sm font-medium transition-all duration-300 border-2 whitespace-nowrap flex-shrink-0 flex items-center gap-2 ${
                      activeScenario === scenario.id
                        ? "bg-[#015bfe] text-white shadow-lg shadow-blue-100 border-[#015bfe]"
                        : "bg-white text-gray-700 hover:bg-gray-50 hover:text-[#015bfe] hover:border-[#015bfe] border-gray-200"
                    }`}
                    onClick={() => setActiveScenario(scenario.id)}
                  >
                    <IconComponent className="w-4 h-4" />
                    {scenario.title}
                  </Button>
                );
              })}
            </div>
          </div>
          
          {/* 桌面端多行布局 */}
          <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:gap-4">
            {scenarios.map((scenario) => {
              const IconComponent = scenario.icon;
              return (
                <Button
                  key={scenario.id}
                  variant={activeScenario === scenario.id ? "default" : "outline"}
                  className={`rounded-none px-12 py-6 text-base font-medium transition-all duration-300 border-2 flex items-center gap-3 ${
                    activeScenario === scenario.id
                      ? "bg-[#015bfe] text-white shadow-lg shadow-blue-100 border-[#015bfe]"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:text-[#015bfe] hover:border-[#015bfe] border-gray-200"
                  }`}
                  onClick={() => setActiveScenario(scenario.id)}
                >
                  <IconComponent className="w-5 h-5" />
                  {scenario.title}
                </Button>
              );
            })}
          </div>
        </div>

        {/* 场景内容展示 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* 左侧内容 */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="mb-5">
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3 tracking-tight">
                    {currentScenario.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#015bfe] mb-3"></div>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                    {currentScenario.description}
                  </p>
                </div>

                {/* 特点列表 */}
                <div className="space-y-3">
                  {currentScenario.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="w-4 h-4 text-[#015bfe] mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 右侧图片 - 16:9比例 */}
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[450px] overflow-hidden">
                <img
                  src={currentScenario.image}
                  alt={`${currentScenario.title}场景`}
                  className="w-full h-full object-contain lg:object-cover"
                />
                {/* 装饰性几何元素 */}
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-none"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#015bfe]/20 rounded-none"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 了解更多按钮 */}
        <div className="mt-16 text-center">
          <Button
            className="group relative bg-blue-600 text-white hover:bg-blue-700 px-10 py-6 text-base font-medium rounded-none transition-all duration-300"
            asChild
          >
            <Link to="/products" className="flex items-center">
              <span className="relative z-10 tracking-wider uppercase">探索更多解决方案</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Scenario;

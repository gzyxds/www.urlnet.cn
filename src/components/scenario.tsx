"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
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
      title: "电商",
      image: "/images/scenarios/gaming.png",
      description: "大规模智能化推荐系统，基于用户行为数据和市场变化，提供个性化、实时连接的商品推荐，不仅能够显著提升转化率，还能精准把握消费者需求，从而有效驱动销量增长。同时，通过自动化优化推荐算法，减少人工干预，显著降低运营成本，实现更加高效的资源配置和业务运营。",
      features: [
        {
          title: "精准推荐",
          description: "提供个性化商品推荐，精准匹配用户需求，提高转化率"
        },
        {
          title: "销售增长",
          description: "基于大数据分析，智能调整推荐算法，实现销量大幅提升"
        },
        {
          title: "成本降低",
          description: "自动化优化推荐方向，减少人工干预，有效降低运营成本"
        }
      ]
    },
    {
      id: "media",
      title: "新媒体",
      image: "/images/scenarios/gaming.png",
      description: "智能内容创作与分发平台，利用AI技术自动生成高质量文章、视频脚本和社交媒体内容，同时基于用户兴趣和行为数据，精准投放内容，提高用户参与度和内容转化率，大幅降低内容创作成本和时间，使新媒体运营更加高效和精准。",
      features: [
        {
          title: "智能创作",
          description: "AI辅助内容创作，自动生成文章、视频脚本和社交媒体内容"
        },
        {
          title: "精准分发",
          description: "基于用户画像的内容推荐系统，提高内容触达率和转化效果"
        },
        {
          title: "数据分析",
          description: "全面的内容效果分析，指导内容策略优化和运营决策"
        }
      ]
    },
    {
      id: "education",
      title: "教育",
      image: "/images/scenarios/gaming.png",
      description: "个性化学习平台，通过AI技术分析学生的学习行为、能力水平和学习风格，自动生成定制化学习路径和内容推荐，提供实时反馈和辅导，帮助学生高效掌握知识点，同时为教师提供详细的学生学习数据分析，辅助教学决策和个性化指导。",
      features: [
        {
          title: "个性化学习",
          description: "根据学生能力和学习风格，定制个性化学习路径和内容"
        },
        {
          title: "智能评估",
          description: "实时评估学习进度和掌握程度，提供针对性反馈和建议"
        },
        {
          title: "教学辅助",
          description: "为教师提供学生学习数据分析，辅助教学决策和个性化指导"
        }
      ]
    },
    {
      id: "gaming",
      title: "游戏",
      image: "/images/scenarios/gaming.png",
      description: "AI驱动的游戏体验增强系统，通过实时分析玩家行为和偏好，动态调整游戏难度和内容，创造个性化游戏体验；同时利用AI生成游戏场景、角色和剧情，大幅提高游戏开发效率和创新性，为玩家提供更加沉浸和有趣的游戏体验。",
      features: [
        {
          title: "动态调整",
          description: "根据玩家能力实时调整游戏难度和内容，提供最佳游戏体验"
        },
        {
          title: "内容生成",
          description: "AI自动生成游戏场景、角色和剧情，提高游戏开发效率和创新性"
        },
        {
          title: "玩家分析",
          description: "深度分析玩家行为和偏好，指导游戏设计和运营策略优化"
        }
      ]
    },
    {
      id: "translation",
      title: "翻译",
      image: "/images/scenarios/translation.png",
      description: "高精度多语言翻译系统，支持100+种语言的实时翻译，准确理解文化背景和行业专业术语，保持原文风格和语气，适用于商务文档、技术资料、文学作品等多种场景，大幅提高跨语言沟通效率和准确性。",
      features: [
        {
          title: "多语言支持",
          description: "支持100+种语言的实时翻译，覆盖全球主要语言和方言"
        },
        {
          title: "专业术语",
          description: "精准翻译各行业专业术语，保持专业文档的准确性和一致性"
        },
        {
          title: "风格保持",
          description: "智能保持原文风格和语气，适用于文学、营销等创意内容翻译"
        }
      ]
    },
    {
      id: "finance",
      title: "金融",
      image: "/images/scenarios/finance.png",
      description: "智能金融风控和投资分析系统，通过AI技术实时监控交易行为，精准识别欺诈风险；同时分析海量市场数据和新闻信息，提供投资建议和风险预警，帮助金融机构提高风控效率和投资决策准确性，降低运营风险和成本。",
      features: [
        {
          title: "风险控制",
          description: "实时监控交易行为，精准识别欺诈风险，提高风控效率和准确性"
        },
        {
          title: "投资分析",
          description: "分析市场数据和新闻信息，提供投资建议和风险预警"
        },
        {
          title: "合规监管",
          description: "自动化合规检查和报告生成，降低合规风险和人力成本"
        }
      ]
    }
  ];

  // 当前选中的场景ID
  const [activeScenario, setActiveScenario] = useState("ecommerce");

  // 获取当前选中的场景数据
  const currentScenario = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <section className="py-20 bg-gray-50" id="scenarios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">应用场景</h2>
          <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们的AI解决方案广泛应用于各行各业，为不同领域带来智能化转型和效率提升
          </p>
        </div>

        {/* 场景选择标签 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {scenarios.map((scenario) => (
            <Button
              key={scenario.id}
              variant={activeScenario === scenario.id ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeScenario === scenario.id 
                  ? "bg-[#015bfe] text-white shadow-md shadow-blue-200" 
                  : "bg-white text-gray-700 hover:bg-gray-50 hover:text-[#015bfe] border-gray-200"
              }`}
              onClick={() => setActiveScenario(scenario.id)}
            >
              {scenario.title}
            </Button>
          ))}
        </div>

        {/* 场景内容展示 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* 左侧内容 */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-4">{currentScenario.title}</h3>
                <p className="text-gray-600 mb-8">
                  {currentScenario.description}
                </p>
                
                {/* 特点列表 */}
                <div className="space-y-6">
                  {currentScenario.features.map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#015bfe]/10 text-[#015bfe]">
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-[#015bfe]">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 右侧图片 */}
              <div className="relative h-[300px] lg:h-auto overflow-hidden p-4">
                <div className="absolute inset-4 bg-gradient-to-r from-black/30 to-transparent z-10 rounded-xl"></div>
                <img
                  src={currentScenario.image}
                  alt={`${currentScenario.title}场景`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 了解更多按钮 */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-[#015bfe] hover:bg-blue-700"
            asChild
          >
            <Link to="/products">
              了解更多解决方案
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Scenario;
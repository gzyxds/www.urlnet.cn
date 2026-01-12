"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
  Building2,
  Stethoscope,
  Factory,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileText,
  Quote
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from 'lucide-react';

// 类型定义
interface CaseMetrics {
  [key: string]: string;
}

interface CaseData {
  id: number;
  category: string;
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
  tags: string[];
  metrics: CaseMetrics;
  highlights: string[];
  features: string[];
}

interface CategoryData {
  id: string;
  name: string;
  icon: LucideIcon;
}

// 客户案例数据常量
const CASES_DATA: CaseData[] = [
    {
      id: 1,
      category: 'finance',
      image: "/images/cases/finance-case.jpg",
      icon: Building2,
      title: "某国有银行智慧金融升级",
      description: "通过引入AI智能客服与风控中台，实现了全行级业务流程的智能化改造，显著降低了运营成本，同时将客户满意度提升至行业领先水平。",
      author: {
        name: "张伟",
        role: "科技部总经理",
        avatar: "/images/cases/avatar-zhang.jpg"
      },
      rating: 5,
      tags: ["智能客服", "风控系统", "降本增效"],
      metrics: {
        efficiency: "+80%",
        satisfaction: "+30%",
        cost: "-45%",
        response: "<2s"
      },
      highlights: ["处理80%常见问题", "客户满意度提升30%", "成本降低45%"],
      features: [
        "智能语音识别与自然语言理解",
        "实时风险评估与预警系统",
        "多渠道统一客户服务平台",
        "个性化金融产品推荐引擎"
      ]
    },
    {
      id: 2,
      category: 'healthcare',
      image: "/images/cases/healthcare-case.jpg",
      icon: Stethoscope,
      title: "三甲医院辅助诊疗平台",
      description: "利用深度学习技术对医学影像进行智能分析，辅助医生快速定位病灶，大幅缩短了诊断时间，并有效降低了漏诊率。",
      author: {
        name: "李娜",
        role: "影像科主任",
        avatar: "/images/cases/avatar-li.jpg"
      },
      rating: 5,
      tags: ["辅助诊断", "医学影像", "智慧医疗"],
      metrics: {
        accuracy: "98%",
        efficiency: "+60%",
        time: "-50%",
        cases: "10W+"
      },
      highlights: ["诊断准确率95%", "效率提升60%", "处理案例10000+"],
      features: [
        "医学影像智能识别与分析",
        "多模态数据融合诊断",
        "临床路径智能推荐",
        "药物相互作用风险评估"
      ]
    },
    {
      id: 3,
      category: 'manufacturing',
      image: "/images/cases/manufacturing-case.jpg",
      icon: Factory,
      title: "高端制造精密质检",
      description: "基于计算机视觉的工业质检系统，能够识别微米级的产品缺陷，实现了生产线全自动化质量控制，确保产品零缺陷出厂。",
      author: {
        name: "王强",
        role: "生产总监",
        avatar: "/images/cases/avatar-wang.jpg"
      },
      rating: 5,
      tags: ["工业视觉", "智能制造", "零缺陷"],
      metrics: {
        efficiency: "+200%",
        defectRate: "-99%",
        cost: "-60%",
        roi: "12月"
      },
      highlights: ["效率提升200%", "不良品率下降40%", "成本降低60%"],
      features: [
        "高精度视觉检测算法",
        "实时缺陷识别与分类",
        "生产线智能监控系统",
        "质量数据分析与预测"
      ]
    },
    {
      id: 4,
      category: 'retail',
      image: "/images/cases/retail-case.jpg",
      icon: TrendingUp,
      title: "新零售智能营销中台",
      description: "构建用户画像与精准推荐系统，实现了千人千面的营销触达，大幅提升了会员复购率和客单价。",
      author: {
        name: "赵敏",
        role: "运营总监",
        avatar: "/images/cases/avatar-zhao.jpg"
      },
      rating: 5,
      tags: ["精准营销", "用户增长", "数据中台"],
      metrics: {
        conversion: "+150%",
        retention: "+80%",
        revenue: "+120%",
        ctr: "5.8%"
      },
      highlights: ["转化率提升150%", "用户留存增加80%", "销售额增长120%"],
      features: [
        "智能商品推荐算法",
        "用户行为深度分析",
        "动态定价优化系统",
        "库存智能管理平台"
      ]
    }
  ];

// 分类选项常量
const CATEGORIES_DATA: CategoryData[] = [
    { id: 'all', name: '全部案例', icon: Award },
    { id: 'finance', name: '金融科技', icon: Building2 },
    { id: 'healthcare', name: '医疗健康', icon: Stethoscope },
    { id: 'manufacturing', name: '智能制造', icon: Factory },
    { id: 'retail', name: '零售电商', icon: TrendingUp }
  ];

const Cases = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  const filteredCases = useMemo(() => {
    return selectedCategory === 'all'
      ? CASES_DATA
      : CASES_DATA.filter(case_ => case_.category === selectedCategory);
  }, [selectedCategory]);

  const currentCase = filteredCases[currentCaseIndex] || filteredCases[0];

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentCaseIndex(0);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentCaseIndex((prev) => (prev + 1) % filteredCases.length);
  }, [filteredCases.length]);

  const handlePrev = useCallback(() => {
    setCurrentCaseIndex((prev) => (prev - 1 + filteredCases.length) % filteredCases.length);
  }, [filteredCases.length]);

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-muted/20 dark:bg-gray-900 overflow-hidden" id="cases">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 头部区域 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-blue-500/10 text-primary dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 border border-primary/20 dark:border-blue-500/20"
            >
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>客户成功案例</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight text-gray-900 dark:text-gray-100"
            >
              见证<span className="text-primary dark:text-blue-400">AI</span>落地的力量
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground dark:text-gray-400"
            >
              深入各行各业，探索人工智能如何重塑业务价值
            </motion.p>
          </div>

          {/* 分类筛选 */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES_DATA.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={cn(
                  "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap",
                  selectedCategory === category.id
                    ? "bg-primary dark:bg-blue-600 text-primary-foreground dark:text-white shadow-lg shadow-primary/25 dark:shadow-blue-600/25"
                    : "bg-background dark:bg-gray-800 border border-border dark:border-gray-700 hover:bg-muted dark:hover:bg-gray-700 text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-gray-100"
                )}
              >
                <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 案例展示区域 */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center"
            >
              {/* 左侧：图片展示 */}
              <div className="relative group rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px] shadow-lg sm:shadow-2xl dark:shadow-gray-900/50">
                <img
                  src={currentCase.image}
                  alt={currentCase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent dark:from-black/90 dark:via-black/30" />

                {/* 浮动数据卡片 - 移动端优化 */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-2 gap-2 sm:gap-4">
                  {Object.entries(currentCase.metrics).map(([key, value], idx) => (
                    <div key={key} className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 dark:border-white/10">
                      <div className="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">{value}</div>
                      <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium truncate">
                        {key === 'efficiency' ? '效率提升' :
                         key === 'satisfaction' ? '满意度' :
                         key === 'cost' ? '成本降低' :
                         key === 'response' ? '响应速度' :
                         key === 'accuracy' ? '准确率' :
                         key === 'time' ? '时间缩短' :
                         key === 'cases' ? '处理量' :
                         key === 'defectRate' ? '缺陷率' :
                         key === 'roi' ? '投资回报' :
                         key === 'conversion' ? '转化率' :
                         key === 'retention' ? '留存率' :
                         key === 'revenue' ? '营收增长' :
                         key === 'ctr' ? '点击率' : key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右侧：内容详情 */}
              <div className="space-y-6 sm:space-y-8 px-1 sm:px-0">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 dark:bg-blue-500/10 flex items-center justify-center text-primary dark:text-blue-400">
                      <currentCase.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-muted dark:bg-gray-800 text-[10px] sm:text-xs font-medium text-muted-foreground dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground dark:text-gray-100">{currentCase.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 leading-relaxed mb-6 sm:mb-8">
                    {currentCase.description}
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {currentCase.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground/80 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* 客户证言 */}
                  <div className="bg-card dark:bg-gray-800 border border-border/50 dark:border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/20 dark:text-blue-400/20 absolute top-4 right-4" />
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={currentCase.author.avatar}
                        alt={currentCase.author.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-primary/20 dark:ring-blue-400/20"
                      />
                      <div>
                        <div className="font-bold text-foreground dark:text-gray-100 text-sm sm:text-base">{currentCase.author.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400">{currentCase.author.role}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 导航控制 */}
                <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-border/50 dark:border-gray-700/50 relative z-20">
                  <div className="flex gap-3 sm:gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border dark:border-gray-700 bg-background dark:bg-gray-800 flex items-center justify-center hover:bg-muted dark:hover:bg-gray-700 hover:border-primary/30 dark:hover:border-blue-400/30 transition-all duration-300 active:scale-95"
                      aria-label="Previous case"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180 text-muted-foreground dark:text-gray-400 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary dark:bg-blue-600 text-primary-foreground dark:text-white flex items-center justify-center hover:bg-primary/90 dark:hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-primary/25 dark:shadow-blue-600/25 hover:shadow-primary/40 dark:hover:shadow-blue-600/40 active:scale-95"
                      aria-label="Next case"
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    {filteredCases.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentCaseIndex(idx);
                        }}
                        className={cn(
                          "rounded-full transition-all duration-300",
                          idx === currentCaseIndex
                            ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-primary dark:bg-blue-500 shadow-sm"
                            : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-border dark:bg-gray-700 hover:bg-primary/50 dark:hover:bg-blue-500/50"
                        )}
                        aria-label={`Go to case ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 底部 CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4 sm:px-0">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4 items-center bg-card dark:bg-gray-800 border border-border dark:border-gray-700 p-3 sm:p-2 sm:pr-6 rounded-2xl sm:rounded-full shadow-sm hover:shadow-md dark:hover:shadow-gray-900/30 transition-shadow w-full sm:w-auto mx-auto max-w-sm sm:max-w-none">
            <span className="bg-primary/10 dark:bg-blue-500/10 text-primary dark:text-blue-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-full text-xs sm:text-sm font-semibold w-full sm:w-auto text-center border border-primary/20 dark:border-blue-500/20">
              New
            </span>
            <span className="text-sm font-medium text-foreground dark:text-gray-100 text-center sm:text-left flex-1 sm:flex-none">
              探索更多行业解决方案与成功实践
            </span>
            <Button variant="ghost" className="gap-2 text-primary dark:text-blue-400 hover:text-primary dark:hover:text-blue-300 hover:bg-primary/5 dark:hover:bg-blue-500/10 w-full sm:w-auto h-10 sm:h-10 text-sm justify-center sm:justify-start -ml-0 sm:-ml-2 rounded-lg sm:rounded-md">
              查看所有案例 <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;

"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Stethoscope, Factory, TrendingUp, Award, CheckCircle, ChevronLeft, ChevronRight, MessageCircle, FileText } from "lucide-react";
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
      image: "https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_15d88c7090e6eb48b418c60248ac6805.jpg",
      icon: Building2,
      title: "智慧金融解决方案",
      description: "为客户提供智能客服和风控系统，提升客户服务质量和风险管理能力。通过AI技术实现24小时智能服务，大幅提升客户体验。我们的解决方案包括自然语言处理、机器学习算法和实时数据分析，帮助银行实现智能化转型。",

      rating: 5,
      tags: ["智能客服", "风控系统", "24小时服务"],
      metrics: {
        efficiency: "80%",
        satisfaction: "30%",
        cost: "-45%",
        response: "2秒"
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
      image: "https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_8aee35ca9d91caeb00fc553f376d6ff4.jpg",
      icon: Stethoscope,
      title: "智能医疗辅助诊断系统",
      description: "利用AI技术辅助医生进行疾病诊断和治疗方案制定，提高诊断准确率和效率。深度学习算法助力精准医疗，通过医学影像分析、病历数据挖掘和临床决策支持，为医生提供全方位的智能辅助。",

      rating: 5,
      tags: ["辅助诊断", "深度学习", "精准医疗"],
      metrics: {
        accuracy: "95%",
        efficiency: "60%",
        time: "-50%",
        cases: "10000+"
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
      image: "https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_6156b7489c3bccfceb80a1dabccca470.jpg",
      icon: Factory,
      title: "智能制造质检系统",
      description: "基于计算机视觉的智能质检系统，提高产品质量检测的准确率和效率。实现全自动化质量控制流程，通过深度学习算法识别产品缺陷，实时监控生产线状态，确保产品质量稳定性。",

      rating: 5,
      tags: ["计算机视觉", "质量检测", "自动化"],
      metrics: {
        efficiency: "200%",
        defectRate: "-40%",
        cost: "-60%",
        speed: "5倍"
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
      image: "https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_bc8f0783381ab93ded6ad15a34471c57.jpg",
      icon: TrendingUp,
      title: "智能零售推荐系统",
      description: "基于用户行为分析的个性化推荐系统，提升用户购买转化率和客户满意度。实现精准营销和库存优化，通过机器学习算法分析用户偏好，提供个性化商品推荐和营销策略。",

      rating: 5,
      tags: ["个性化推荐", "行为分析", "精准营销"],
      metrics: {
        conversion: "150%",
        retention: "80%",
        revenue: "120%",
        ctr: "3.2%"
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

// 指标标签映射常量



/**
 * 客户案例展示组件 - 左右布局设计
 * 左侧区域显示文本内容，右侧区域嵌入媒体（图片或视频）
 * 支持筛选和动画效果，展示客户成功案例
 */
const Cases = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  // 使用 useMemo 优化筛选逻辑
  const filteredCases = useMemo(() => {
    return selectedCategory === 'all'
      ? CASES_DATA
      : CASES_DATA.filter(case_ => case_.category === selectedCategory);
  }, [selectedCategory]);

  // 当前显示的案例
  const currentCase = filteredCases[currentCaseIndex] || filteredCases[0];

  /**
   * 处理分类切换
   * @param categoryId - 分类ID
   */
  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentCaseIndex(0); // 重置到第一个案例
  }, []);

  /**
   * 切换到下一个案例
   */
  const nextCase = useCallback(() => {
    setCurrentCaseIndex((prev) => (prev + 1) % filteredCases.length);
  }, [filteredCases.length]);

  /**
   * 切换到上一个案例
   */
  const prevCase = useCallback(() => {
    setCurrentCaseIndex((prev) => (prev - 1 + filteredCases.length) % filteredCases.length);
  }, [filteredCases.length]);

  /**
   * 直接跳转到指定案例
   * @param index - 案例索引
   */
  const goToCase = useCallback((index: number) => {
    setCurrentCaseIndex(index);
  }, []);



  // 自动轮播效果
  useEffect(() => {
    if (filteredCases.length <= 1) return;

    const timer = setInterval(() => {
      nextCase();
    }, 8000); // 8秒自动切换

    return () => clearInterval(timer);
  }, [filteredCases.length, nextCase]);

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50" id="cases">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        <SectionHeader />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <CaseDisplay
          currentCase={currentCase}
          selectedCategory={selectedCategory}
          currentCaseIndex={currentCaseIndex}
        />

        <NavigationControls
          filteredCases={filteredCases}
          currentCaseIndex={currentCaseIndex}
          onPrevCase={prevCase}
          onNextCase={nextCase}
          onGoToCase={goToCase}
        />



        <CallToAction />
      </div>
    </section>
  );
};

// 子组件实现

/**
 * 页面标题组件
 */
const SectionHeader = () => (
  <div className="text-center mb-8 md:mb-12 lg:mb-16">
    <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-md mb-4">
      <Award className="h-4 w-4 text-gray-600 mr-2" />
      <span className="text-gray-600 text-sm font-medium">成功案例</span>
    </div>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
      客户成功案例
    </h2>
    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
      我们的AI解决方案已成功应用于金融、医疗、制造、零售等多个行业，帮助客户实现数字化转型，提升效率、降低成本、创造价值。
    </p>
  </div>
);

/**
 * 分类筛选组件
 */
interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => (
  <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
    {CATEGORIES_DATA.map((category) => {
      const IconComponent = category.icon;
      return (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center px-4 md:px-6 py-2.5 md:py-3 rounded-lg border transition-colors duration-200 text-sm md:text-base ${
            selectedCategory === category.id
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
          } min-w-0 flex-shrink-0`}
        >
          <IconComponent className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 flex-shrink-0" />
          <span className="font-medium whitespace-nowrap">{category.name}</span>
        </button>
      );
    })}
  </div>
);

/**
 * 案例展示组件
 */
interface CaseDisplayProps {
  currentCase: CaseData | undefined;
  selectedCategory: string;
  currentCaseIndex: number;
}

const CaseDisplay = ({ currentCase }: CaseDisplayProps) => {
  if (!currentCase) return null;

  return (
    <div className="mb-12">
      <Card className="border border-gray-300 bg-white overflow-hidden rounded-lg">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px] md:min-h-[320px] lg:min-h-[400px]">
            {/* 左侧文本内容区域 */}
            <CaseContent currentCase={currentCase} />
            {/* 右侧媒体内容区域 */}
            <CaseMedia currentCase={currentCase} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * 案例内容组件
 */
interface CaseContentProps {
  currentCase: CaseData;
}

const CaseContent = ({ currentCase }: CaseContentProps) => (
  <div className="p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-center space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
    {/* 主标题区域 */}
    <div className="space-y-3 md:space-y-4 lg:space-y-5">
      <div className="flex items-start md:items-center space-x-3">
        <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex-shrink-0">
          <currentCase.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight break-words">
            {currentCase.title}
          </h3>
        </div>
      </div>
      {/* 标签组 */}
      <TagList tags={currentCase.tags} />
    </div>
    {/* 项目描述 */}
    <div className="space-y-3">
      <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium break-words">
        {currentCase.description}
      </p>
    </div>
    {/* 核心功能特性 */}
    <FeatureList features={currentCase.features} />
    {/* 关键成果展示 */}
    <HighlightList highlights={currentCase.highlights} />
  </div>
);

/**
 * 案例媒体组件
 */
interface CaseMediaProps {
  currentCase: CaseData;
}

const CaseMedia = ({ currentCase }: CaseMediaProps) => (
  <div className="bg-gray-100 flex items-center justify-center overflow-hidden order-1 lg:order-2 min-h-[200px] md:min-h-[250px] lg:min-h-full">
    <div className="w-full h-full">
      <img
        src={currentCase.image}
        alt={currentCase.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

/**
 * 标签列表组件
 */
interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => (
  <div className="flex flex-wrap gap-1.5 md:gap-2">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
);

/**
 * 功能特性列表组件
 */
interface FeatureListProps {
  features: string[];
}

const FeatureList = ({ features }: FeatureListProps) => (
  <div className="space-y-2">
    <h4 className="text-sm md:text-base font-semibold text-gray-900">核心功能</h4>
    <ul className="space-y-1.5">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-2">
          <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-700 text-xs md:text-sm leading-relaxed break-words">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * 亮点成果列表组件
 */
interface HighlightListProps {
  highlights: string[];
}

const HighlightList = ({ highlights }: HighlightListProps) => (
  <div className="space-y-2">
    <h4 className="text-sm md:text-base font-semibold text-gray-900">关键成果</h4>
    <ul className="space-y-1.5">
      {highlights.map((highlight, index) => (
        <li key={index} className="flex items-start space-x-2">
          <TrendingUp className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-700 text-xs md:text-sm leading-relaxed break-words">
            {highlight}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * 导航控制组件
 */
interface NavigationControlsProps {
  filteredCases: CaseData[];
  currentCaseIndex: number;
  onPrevCase: () => void;
  onNextCase: () => void;
  onGoToCase: (index: number) => void;
}

const NavigationControls = ({
  filteredCases,
  currentCaseIndex,
  onPrevCase,
  onNextCase,
  onGoToCase
}: NavigationControlsProps) => (
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-12">
    {/* 左侧导航按钮 */}
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onPrevCase}
        disabled={filteredCases.length <= 1}
        className="flex items-center space-x-1 px-3 py-2 rounded-xl"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">上一个</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onNextCase}
        disabled={filteredCases.length <= 1}
        className="flex items-center space-x-1 px-3 py-2 rounded-xl"
      >
        <span className="hidden sm:inline">下一个</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>

    {/* 中间指示器 */}
    <div className="flex items-center space-x-2">
      {filteredCases.map((_, index) => (
        <button
          key={index}
          onClick={() => onGoToCase(index)}
          className={`w-2 h-2 rounded-full transition-colors duration-200 ${
            index === currentCaseIndex ? 'bg-primary' : 'bg-gray-300'
          }`}
          aria-label={`切换到案例 ${index + 1}`}
        />
      ))}
    </div>

    {/* 右侧案例计数 */}
    <div className="text-sm text-gray-600">
      {filteredCases.length > 0 && (
        <span>
          {currentCaseIndex + 1} / {filteredCases.length}
        </span>
      )}
    </div>
  </div>
);

/**
 * 行动号召组件
 */
const CallToAction = () => (
  <div className="text-center bg-gradient-to-r from-primary/5 to-blue-50 rounded-lg p-6 md:p-8">
    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
      想了解更多成功案例？
    </h3>
    <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
      我们的专业团队将为您提供定制化的AI解决方案咨询
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
        <MessageCircle className="h-4 w-4 mr-2" />
        联系我们
      </Button>
      <Button variant="outline" className="px-6 py-2">
        <FileText className="h-4 w-4 mr-2" />
        下载案例集
      </Button>
    </div>
  </div>
);

export default Cases;

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Building2, Stethoscope, Factory, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

/**
 * 客户案例展示组件 - 左右布局设计
 * 左侧区域显示文本内容，右侧区域嵌入媒体（图片或视频）
 * 支持筛选和动画效果，展示客户成功案例
 */
const Cases = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  // 客户案例数据 - 左右布局版本
  const cases = [
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

  // 分类选项
  const categories = [
    { id: 'all', name: '全部案例', icon: Award },
    { id: 'finance', name: '金融科技', icon: Building2 },
    { id: 'healthcare', name: '医疗健康', icon: Stethoscope },
    { id: 'manufacturing', name: '智能制造', icon: Factory },
    { id: 'retail', name: '零售电商', icon: TrendingUp }
  ];

  // 筛选案例
  const filteredCases = selectedCategory === 'all'
    ? cases
    : cases.filter(case_ => case_.category === selectedCategory);

  // 当前显示的案例
  const currentCase = filteredCases[currentCaseIndex] || filteredCases[0];

  /**
   * 处理分类切换
   * @param categoryId - 分类ID
   */
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentCaseIndex(0); // 重置到第一个案例
  };

  /**
   * 切换到下一个案例
   */
  const nextCase = () => {
    setCurrentCaseIndex((prev) => (prev + 1) % filteredCases.length);
  };

  /**
   * 切换到上一个案例
   */
  const prevCase = () => {
    setCurrentCaseIndex((prev) => (prev - 1 + filteredCases.length) % filteredCases.length);
  };



  // 自动轮播效果
  useEffect(() => {
    const timer = setInterval(() => {
      if (filteredCases.length > 1) {
        nextCase();
      }
    }, 8000); // 8秒自动切换

    return () => clearInterval(timer);
  }, [filteredCases.length]);

  /**
   * 获取指标显示文本
   * @param key - 指标键名
   * @returns 指标的中文显示名称
   */
  const getMetricLabel = (key: string): string => {
    const labels: Record<string, string> = {
      efficiency: '效率提升',
      satisfaction: '满意度提升',
      accuracy: '准确率',
      defectRate: '不良品率下降',
      cost: '成本降低',
      response: '响应时间',
      time: '时间节省',
      cases: '处理案例',
      conversion: '转化率提升',
      retention: '用户留存提升',
      revenue: '营收增长',
      ctr: '点击率',
      speed: '处理速度'
    };
    return labels[key] || key;
  };

  return (
    <section className="py-16 bg-gray-50" id="cases">

      <div className="container mx-auto px-6 relative">

        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-md mb-4">
            <Award className="h-4 w-4 text-gray-600 mr-2" />
            <span className="text-gray-600 text-sm font-medium">成功案例</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            客户成功案例
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            我们的AI解决方案已成功应用于金融、医疗、制造、零售等多个行业，帮助客户实现数字化转型，提升效率、降低成本、创造价值。
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center px-4 py-2 rounded-md border transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* 主要案例展示 - 左右布局 */}
        {currentCase && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentCaseIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="border border-gray-300 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">

                    {/* 左侧文本内容区域 */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center space-y-8">

                      {/* 主标题区域 */}
                      <div className="space-y-5">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                            <currentCase.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                              {currentCase.title}
                            </h3>
                          </div>
                        </div>

                        {/* 标签组 */}
                        <div className="flex flex-wrap gap-2">
                          {currentCase.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-md border border-gray-200 font-medium transition-colors hover:bg-gray-100"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 项目描述 */}
                      <div className="space-y-3">
                        <p className="text-gray-700 leading-relaxed text-base font-medium">
                          {currentCase.description}
                        </p>
                      </div>

                      {/* 核心功能特性 */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-1 h-6 bg-primary rounded-full"></div>
                          <h4 className="text-lg font-semibold text-gray-900">核心功能特性</h4>
                        </div>
                        <div className="grid grid-cols-1 gap-3 pl-3">
                          {currentCase.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3 group">
                              <div className="flex items-center justify-center w-5 h-5 bg-green-100 rounded-full flex-shrink-0 mt-0.5 group-hover:bg-green-200 transition-colors">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 关键成果展示 */}
                       <div className="space-y-3">
                         <div className="flex items-center space-x-2">
                           <div className="w-1 h-6 bg-primary rounded-full"></div>
                           <h4 className="text-lg font-semibold text-gray-900">关键成果</h4>
                         </div>
                         <div className="flex flex-wrap gap-2 pl-3">
                           {currentCase.highlights.map((highlight, index) => (
                             <span key={index} className="inline-flex items-center px-3 py-1 text-xs font-medium text-primary bg-blue-50 rounded-md border border-blue-200">
                               {highlight}
                             </span>
                           ))}
                         </div>
                       </div>


                    </div>

                    {/* 右侧媒体内容区域 */}
                     <div className="bg-gray-100 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full">
                          <img
                            src={currentCase.image}
                            alt={currentCase.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        )}

        {/* 案例导航控制 */}
        {filteredCases.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <button
              onClick={prevCase}
              className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex space-x-2">
              {filteredCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCaseIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentCaseIndex
                      ? 'bg-primary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}



        {/* 底部CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white border border-gray-200 rounded p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">准备开始您的AI转型之旅？</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
              加入我们的成功客户行列，让AI技术为您的业务创造更大价值
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                className="bg-primary text-white hover:bg-primary/90 px-6 py-2 text-sm font-medium transition-colors duration-200"
                asChild
              >
                <Link to="/cases" className="flex items-center justify-center">
                  <span>探索更多案例</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-gray-50 px-6 py-2 text-sm font-medium transition-colors duration-200"
                asChild
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <span>免费咨询</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;

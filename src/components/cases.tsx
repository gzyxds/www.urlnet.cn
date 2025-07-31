"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Quote, User, Building2, Stethoscope, Factory } from "lucide-react";
import { Link } from 'react-router-dom';

const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 客户案例数据 - 优化数据结构，增加更多细节
  const cases = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Building2,
      title: "智慧金融解决方案",
      client: "某大型银行",
      description: "为客户提供智能客服和风控系统，提升客户服务质量和风险管理能力。通过AI技术实现24小时智能服务，大幅提升客户体验。",
      testimonial: "AI科技的解决方案帮助我们大幅提升了客户服务效率，智能客服系统处理了80%的常见问题，客户满意度提升了30%。",
      person: "张总监",
      role: "客户服务部负责人",
      metrics: {
        efficiency: "80%",
        satisfaction: "30%"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Stethoscope,
      title: "智能医疗辅助诊断系统", 
      client: "某三甲医院",
      description: "利用AI技术辅助医生进行疾病诊断和治疗方案制定，提高诊断准确率和效率。深度学习算法助力精准医疗。",
      testimonial: "AI科技的辅助诊断系统帮助我们提高了诊断准确率，特别是在复杂病例的分析上，为医生提供了有力的决策支持。",
      person: "李主任",
      role: "医学影像科主任",
      metrics: {
        accuracy: "95%",
        efficiency: "60%"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Factory,
      title: "智能制造质检系统",
      client: "某制造企业", 
      description: "基于计算机视觉的智能质检系统，提高产品质量检测的准确率和效率。实现全自动化质量控制流程。",
      testimonial: "引入AI科技的智能质检系统后，我们的质检效率提升了200%，不良品率下降了40%，大幅降低了人工成本和质量风险。",
      person: "王经理",
      role: "生产质量部经理",
      metrics: {
        efficiency: "200%",
        defectRate: "-40%"
      }
    }
  ];

  // 切换到下一个案例
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  // 切换到上一个案例
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        
        {/* 页面标题 - 优化移动端响应式设计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight px-2">
            客户案例
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light max-w-3xl mx-auto px-4 sm:px-6">
            我们的AI解决方案已成功应用于金融、医疗、制造等多个行业，
            帮助客户提升效率、降低成本、创造价值。
          </p>
        </motion.div>

        {/* 案例展示区域 - 优化移动端响应式设计 */}
        <div className="relative">
          {/* 滑动容器 - 优化移动端触摸滑动 */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-1000 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4 xl:px-6 2xl:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 bg-white overflow-hidden group">
                      <CardContent className="p-0">
                        {/* 移动端垂直布局，桌面端水平布局 */}
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 items-stretch lg:items-center min-h-[400px] sm:min-h-[500px] xl:min-h-[600px]">
                          
                          {/* 图片区域 - 优化移动端显示 */}
                          <div className="relative order-1 lg:order-1 px-4 sm:px-6 lg:px-0 pt-4 sm:pt-6 lg:pt-0">
                            {/* 简约几何背景装饰 - 移动端隐藏，避免溢出 */}
                            <div className="hidden lg:block absolute -top-4 -left-4 w-16 h-16 border border-blue-100 opacity-30"></div>
                            <div className="hidden lg:block absolute -bottom-3 -right-3 w-12 h-12 bg-blue-50 opacity-40"></div>
                            
                            {/* 主图片容器 - 响应式宽高比 */}
                            <div className="relative bg-white border border-gray-100 overflow-hidden aspect-[16/10] sm:aspect-[4/3] group">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                              />
                              
                              {/* 简约状态指示器 - 优化移动端尺寸 */}
                              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/95 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 border border-gray-100 rounded-sm">
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                  <item.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 flex-shrink-0" />
                                  <span className="text-xs font-medium text-black truncate max-w-[80px] sm:max-w-none">{item.client}</span>
                                </div>
                              </div>
                            </div>

                            {/* 数据指标卡片 - 移动端内联显示，避免溢出 */}
                            <div className="mt-4 lg:absolute lg:-bottom-6 lg:-right-3 bg-white border border-gray-200 p-3 sm:p-4 shadow-lg lg:max-w-[200px]">
                              <div className="grid grid-cols-2 gap-2 sm:gap-3 text-center">
                                {Object.entries(item.metrics || {}).slice(0, 2).map(([key, value], idx) => (
                                  <div key={idx} className="min-w-0">
                                    <div className="text-base sm:text-lg font-light text-blue-600 truncate">{value}</div>
                                    <div className="text-xs text-gray-500 font-medium leading-tight">
                                      {key === 'efficiency' ? '效率提升' : 
                                       key === 'satisfaction' ? '满意度提升' :
                                       key === 'accuracy' ? '准确率' :
                                       key === 'defectRate' ? '不良品率下降' : key}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* 内容区域 - 优化移动端排版 */}
                          <div className="order-2 lg:order-2 p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16 space-y-4 sm:space-y-6 lg:space-y-8">
                            
                            {/* 头部信息 - 响应式文本大小 */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="space-y-3 sm:space-y-4"
                            >
                              <div className="text-xs sm:text-sm font-medium text-blue-600 uppercase tracking-wide">
                                {item.client}
                              </div>
                              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-black leading-tight break-words">
                                {item.title}
                              </h3>
                              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-light break-words">
                                {item.description}
                              </p>
                            </motion.div>

                            {/* 客户评价 - 优化移动端显示 */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                              className="pt-4 sm:pt-6 border-t border-gray-100"
                            >
                              <div className="relative">
                                <Quote className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mb-2 sm:mb-3 flex-shrink-0" />
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light italic mb-3 sm:mb-4 break-words">
                                  {item.testimonial}
                                </p>
                                <div className="flex items-center">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 flex items-center justify-center text-white mr-2 sm:mr-3 flex-shrink-0">
                                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="font-medium text-black text-xs sm:text-sm truncate">{item.person}</div>
                                    <div className="text-xs text-gray-500 truncate">{item.role}</div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* 导航按钮 - 优化移动端触摸交互 */}
          <button 
            className="absolute top-1/2 left-1 sm:left-2 lg:left-4 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group z-10 rounded-full sm:rounded-none shadow-lg"
            onClick={prevSlide}
            aria-label="上一个案例"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button 
            className="absolute top-1/2 right-1 sm:right-2 lg:right-4 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group z-10 rounded-full sm:rounded-none shadow-lg"
            onClick={nextSlide}
            aria-label="下一个案例"
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* 指示器 - 优化移动端触摸交互 */}
          <div className="flex justify-center mt-8 sm:mt-12 xl:mt-16 space-x-2 sm:space-x-4 xl:space-x-6 px-4">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`h-1 sm:h-0.5 transition-all duration-500 touch-manipulation ${
                  currentSlide === index 
                    ? "w-8 sm:w-12 xl:w-16 bg-blue-600" 
                    : "w-4 sm:w-6 xl:w-8 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`转到案例 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 底部CTA - 优化移动端按钮设计 */}
        <motion.div 
          className="mt-12 sm:mt-16 xl:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-3 xl:px-12 xl:py-4 text-sm sm:text-base xl:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-none w-full sm:w-auto max-w-xs sm:max-w-none touch-manipulation"
            asChild
          >
            <Link to="/cases" className="flex items-center justify-center">
              <span>探索更多案例</span>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
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
    <section className="py-20 lg:py-32 bg-white" id="cases">
      <div className="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        
        {/* 页面标题 - 参考 about.tsx 的简约设计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            客户案例
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
            我们的AI解决方案已成功应用于金融、医疗、制造等多个行业，
            帮助客户提升效率、降低成本、创造价值。
          </p>
        </motion.div>

        {/* 案例展示区域 - 简约现代化设计 */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 xl:px-6 2xl:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 bg-white overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[500px] xl:min-h-[600px]">
                          
                          {/* 图片区域 - 参考 about.tsx 的简约设计 */}
                          <div className="relative order-2 lg:order-1">
                            {/* 简约几何背景装饰 */}
                            <div className="absolute -top-4 -left-4 w-16 h-16 border border-blue-100 opacity-30"></div>
                            <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-blue-50 opacity-40"></div>
                            
                            {/* 主图片容器 */}
                            <div className="relative bg-white border border-gray-100 overflow-hidden aspect-[4/3] group">
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              
                              {/* 简约状态指示器 */}
                              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 border border-gray-100">
                                <div className="flex items-center space-x-2">
                                  <item.icon className="h-4 w-4 text-blue-600" />
                                  <span className="text-xs font-medium text-black">{item.client}</span>
                                </div>
                              </div>
                            </div>

                            {/* 数据指标卡片 - 现代化设计 */}
                            <div className="absolute -bottom-6 -right-3 bg-white border border-gray-200 p-4 shadow-lg">
                              <div className="grid grid-cols-2 gap-3 text-center">
                                {Object.entries(item.metrics || {}).slice(0, 2).map(([key, value], idx) => (
                                  <div key={idx}>
                                    <div className="text-lg font-light text-blue-600">{value}</div>
                                    <div className="text-xs text-gray-500 font-medium">
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
                          
                          {/* 内容区域 - 参考 about.tsx 的现代化排版 */}
                          <div className="order-1 lg:order-2 p-8 lg:p-12 xl:p-16 space-y-8">
                            
                            {/* 头部信息 */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="space-y-4"
                            >
                              <div className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                                {item.client}
                              </div>
                              <h3 className="text-2xl lg:text-3xl font-light text-black leading-tight">
                                {item.title}
                              </h3>
                              <p className="text-lg text-gray-700 leading-relaxed font-light">
                                {item.description}
                              </p>
                            </motion.div>

                            {/* 客户评价 - 简约引用设计 */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }}
                              viewport={{ once: true }}
                              className="pt-6 border-t border-gray-100"
                            >
                              <div className="relative">
                                <Quote className="h-5 w-5 text-blue-600 mb-3" />
                                <p className="text-base text-gray-700 leading-relaxed font-light italic mb-4">
                                  {item.testimonial}
                                </p>
                                <div className="flex items-center">
                                  <div className="w-10 h-10 bg-blue-600 flex items-center justify-center text-white mr-3">
                                    <User className="h-5 w-5" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-black text-sm">{item.person}</div>
                                    <div className="text-xs text-gray-500">{item.role}</div>
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

          {/* 导航按钮 - 简约设计 */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group z-10"
            onClick={prevSlide}
            aria-label="上一个案例"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group z-10"
            onClick={nextSlide}
            aria-label="下一个案例"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* 指示器 - 简约线条设计 */}
          <div className="flex justify-center mt-12 xl:mt-16 space-x-4 xl:space-x-6">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`h-0.5 transition-all duration-500 ${
                  currentSlide === index 
                    ? "w-12 xl:w-16 bg-blue-600" 
                    : "w-6 xl:w-8 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`转到案例 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 底部CTA - 简约按钮设计 */}
        <motion.div 
          className="mt-16 xl:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 xl:px-12 xl:py-4 text-base xl:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-none"
            asChild
          >
            <Link to="/cases" className="flex items-center">
              <span>探索更多案例</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
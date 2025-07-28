"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Quote, Star, User, Building2, Stethoscope, Factory } from "lucide-react";
import { Link } from 'react-router-dom';

const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      icon: Building2,
      title: "智慧金融解决方案",
      client: "某大型银行",
      description: "为客户提供智能客服和风控系统，提升客户服务质量和风险管理能力。",
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
      description: "利用AI技术辅助医生进行疾病诊断和治疗方案制定，提高诊断准确率和效率。",
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
      description: "基于计算机视觉的智能质检系统，提高产品质量检测的准确率和效率。",
      testimonial: "引入AI科技的智能质检系统后，我们的质检效率提升了200%，不良品率下降了40%，大幅降低了人工成本和质量风险。",
      person: "王经理",
      role: "生产质量部经理",
      metrics: {
        efficiency: "200%",
        defectRate: "-40%"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white" id="cases">
      <div className="container mx-auto px-4">
        {/* 标题区域 - 减少底部间距 */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              客户案例
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              我们的AI解决方案已成功应用于金融、医疗、制造等多个行业，
              帮助客户提升效率、降低成本、创造价值。
            </p>
          </motion.div>
        </div>

        {/* 案例展示区域 */}
        <div className="relative w-full">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-xl bg-white overflow-hidden">
                    <CardContent className="p-0">
                      {/* 减少最小高度从600px到500px */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                        {/* 图片区域 - 减少高度 */}
                        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-gray-50 to-gray-100">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        
                        {/* 内容区域 - 减少内边距 */}
                        <div className="p-6 lg:p-8 flex flex-col justify-between">
                          {/* 头部信息 */}
                          <div>
                            <div className="flex items-center mb-4">
                              <div className="w-14 h-14 rounded-xl overflow-hidden mr-4 border-2 border-gray-100 bg-blue-50 flex items-center justify-center">
                                <item.icon className="h-7 w-7 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.client}</h3>
                                <p className="text-blue-600 font-medium">{item.title}</p>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                              {item.description}
                            </p>
                          </div>

                          {/* 数据指标 - 减少间距 */}
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {Object.entries(item.metrics || {}).map(([key, value], idx) => (
                              <div key={idx} className="bg-gray-50 rounded-xl p-3 text-center">
                                <div className="text-xl font-bold text-blue-600 mb-1">{value}</div>
                                <div className="text-sm text-gray-500 capitalize">
                                  {key === 'efficiency' ? '效率提升' : 
                                   key === 'satisfaction' ? '满意度提升' :
                                   key === 'accuracy' ? '准确率' :
                                   key === 'defectRate' ? '不良品率下降' : key}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* 客户评价 - 减少内边距 */}
                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
                            <div className="flex items-start mb-3">
                              <Quote className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                              <p className="text-gray-700 italic leading-relaxed text-sm">
                                {item.testimonial}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                                <User className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 text-sm">{item.person}</div>
                                <div className="text-xs text-gray-500">{item.role}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* 导航按钮 */}
          <button 
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
            onClick={prevSlide}
            aria-label="上一个案例"
          >
            <ArrowLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button 
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
            onClick={nextSlide}
            aria-label="下一个案例"
          >
            <ArrowRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* 指示器 */}
          <div className="flex justify-center mt-6 space-x-3">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "bg-blue-600 scale-110" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`转到案例 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 底部CTA - 减少顶部间距 */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link to="/cases" className="flex items-center">
              查看更多案例
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
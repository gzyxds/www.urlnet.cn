"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";
import { Link } from 'react-router-dom';

const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "智慧金融解决方案",
      client: "某大型银行",
      description: "为客户提供智能客服和风控系统，提升客户服务质量和风险管理能力。",
      testimonial: "AI科技的解决方案帮助我们大幅提升了客户服务效率，智能客服系统处理了80%的常见问题，客户满意度提升了30%。",
      person: "张总监",
      role: "客户服务部负责人"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      logo: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "智能医疗辅助诊断系统",
      client: "某三甲医院",
      description: "利用AI技术辅助医生进行疾病诊断和治疗方案制定，提高诊断准确率和效率。",
      testimonial: "AI科技的辅助诊断系统帮助我们提高了诊断准确率，特别是在复杂病例的分析上，为医生提供了有力的决策支持。",
      person: "李主任",
      role: "医学影像科主任"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      title: "智能制造质检系统",
      client: "某制造企业",
      description: "基于计算机视觉的智能质检系统，提高产品质量检测的准确率和效率。",
      testimonial: "引入AI科技的智能质检系统后，我们的质检效率提升了200%，不良品率下降了40%，大幅降低了人工成本和质量风险。",
      person: "王经理",
      role: "生产质量部经理"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-white" id="cases">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">客户案例</h2>
          <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们的AI解决方案已成功应用于金融、医疗、制造等多个行业，
            帮助客户提升效率、降低成本、创造价值。
          </p>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-64 md:h-auto">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 md:p-8">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded overflow-hidden mr-4">
                              <img 
                                src={item.logo} 
                                alt={item.client} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-bold">{item.client}</h3>
                              <p className="text-sm text-gray-500">{item.title}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-6">{item.description}</p>
                          <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <Quote className="h-6 w-6 text-[#015bfe] mb-2" />
                            <p className="text-gray-600 italic mb-4">{item.testimonial}</p>
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-[#015bfe] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                {item.person.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium">{item.person}</div>
                                <div className="text-sm text-gray-500">{item.role}</div>
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
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={prevSlide}
            aria-label="上一个案例"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={nextSlide}
            aria-label="下一个案例"
          >
            <ArrowRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* 指示器 */}
          <div className="flex justify-center mt-6 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-[#015bfe]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`转到案例 ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-[#015bfe] hover:bg-blue-700"
            asChild
          >
            <Link to="/cases">
              查看更多案例
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
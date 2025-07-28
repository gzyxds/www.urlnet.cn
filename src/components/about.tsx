"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  // 统计数据配置，包含图标和更详细的信息
  const stats = [
    { 
      value: "5+", 
      label: "年行业经验",
      icon: Clock,
      description: "深耕AI领域"
    },
    { 
      value: "1000+", 
      label: "企业客户",
      icon: Users,
      description: "服务各行业"
    },
    { 
      value: "50+", 
      label: "AI专家团队",
      icon: Award,
      description: "技术实力雄厚"
    },
    { 
      value: "99.9%", 
      label: "服务可用性",
      icon: Shield,
      description: "稳定可靠"
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[600px]">
          
          {/* 左侧图片区域 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex items-center"
          >
            <div className="relative w-full h-full">
              {/* 背景装饰 */}
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl blur-xl opacity-60"></div>
              
              {/* 主图片容器 */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-full h-full min-h-[500px] p-4 lg:p-0">
                <img 
                  src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/16109cf69762df98_1637162865915.png" 
                  alt="AI科技团队" 
                  className="w-full h-full object-cover"
                />
                
                {/* 图片上的装饰元素 */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700">AI技术领先</span>
                  </div>
                </div>
              </div>

              {/* 客户满意度卡片 */}
              <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 bg-white rounded-xl shadow-xl p-2 lg:p-4 border border-gray-100 z-10 max-w-[120px] sm:max-w-[140px] lg:max-w-none">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-gray-600 truncate">客户满意度</div>
                    <div className="text-base sm:text-lg lg:text-xl font-bold text-blue-600">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧内容区域 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            {/* 标题区域 */}
            <div className="text-center lg:text-left mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  关于我们
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto lg:mx-0 rounded-full"></div>
              </motion.div>
            </div>

            {/* 描述文字 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                艺创AI科技是一家专注于人工智能技术研发和应用的高新技术企业，致力于为各行业提供先进的AI解决方案。
                我们拥有一支由顶尖AI专家、工程师和行业顾问组成的专业团队，具有丰富的技术积累和行业经验。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                公司成立以来，我们始终坚持"技术创新、质量为本、客户至上"的理念，
                不断推动AI技术在各行业的落地应用，帮助企业实现数字化转型和智能化升级。
                我们的产品和服务已覆盖金融、医疗、教育、制造等多个领域，获得了广泛的市场认可和客户好评。
              </p>
            </motion.div>

            {/* 统计数据展示区域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                            <div className="text-xs text-gray-500">{stat.description}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* 按钮区域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                了解更多
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  // 统计数据配置 - 现代化简约设计
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
    <section className="py-20 lg:py-32 bg-white" id="about">
      <div className="container mx-auto px-6 lg:px-8 max-w-8xl">
        
        {/* 页面标题 - 简约设计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            关于我们
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* 主要内容区域 - 现代化布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* 左侧图片区域 - 简约设计 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* 简约几何背景装饰 */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-blue-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-lg opacity-40"></div>
              
              {/* 主图片容器 - 简约边框 */}
              <div className="relative bg-white border border-gray-100 overflow-hidden aspect-[4/3] group">
                <img 
                  src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/16109cf69762df98_1637162865915.png" 
                  alt="AI科技团队" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* 简约状态指示器 */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm font-medium text-black">AI技术领先</span>
                  </div>
                </div>
              </div>

              {/* 客户满意度卡片 - 现代化设计 */}
              <div className="absolute -bottom-8 -right-4 bg-white border border-gray-200 p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600 uppercase tracking-wide">客户满意度</div>
                    <div className="text-2xl font-light text-black">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧内容区域 - 现代化排版 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-12"
          >
            
            {/* 描述文字 - 简约排版 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                艺创AI科技是一家专注于人工智能技术研发和应用的高新技术企业，致力于为各行业提供先进的AI解决方案。
                我们拥有一支由顶尖AI专家、工程师和行业顾问组成的专业团队。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                公司成立以来，我们始终坚持"技术创新、质量为本、客户至上"的理念，
                不断推动AI技术在各行业的落地应用，帮助企业实现数字化转型和智能化升级。
              </p>
            </motion.div>

            {/* 统计数据展示区域 - 优化高度协调性 */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               viewport={{ once: true }}
               className="grid grid-cols-2 gap-4 lg:gap-6"
             >
               {stats.map((stat, index) => {
                 const IconComponent = stat.icon;
                 return (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                     viewport={{ once: true }}
                     className="group"
                   >
                     {/* 简约数据卡片 - 更小尺寸 */}
                      <div className="bg-white border border-gray-100 p-3 lg:p-4 transition-all duration-300 hover:border-blue-200 hover:shadow-sm h-full">
                        
                        {/* 图标区域 - 更小设计 */}
                        <div className="mb-2">
                          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-700">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        
                        {/* 数据展示 - 更小字体 */}
                        <div className="space-y-0.5">
                          <div className="text-lg lg:text-xl font-light text-black leading-tight">{stat.value}</div>
                          <div className="text-xs font-medium text-black uppercase tracking-wide leading-tight">{stat.label}</div>
                          <div className="text-xs text-gray-500 font-light leading-tight">{stat.description}</div>
                        </div>
                      </div>
                   </motion.div>
                 );
               })}
             </motion.div>

            {/* 按钮区域 - 简约设计 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
           
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
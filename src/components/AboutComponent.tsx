"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock, Shield, ArrowRight } from "lucide-react";

const About = () => {
  // 统计数据配置 - 按照技术规范设计
  const stats = [
    { 
      value: "5+", 
      label: "年行业经验",
      icon: Clock,
      description: "深耕AI领域，积累丰富的技术经验和行业洞察"
    },
    { 
      value: "1000+", 
      label: "企业客户",
      icon: Users,
      description: "服务各行业头部企业，覆盖金融、制造、教育等领域"
    },
    { 
      value: "50+", 
      label: "AI专家团队",
      icon: Award,
      description: "技术实力雄厚，拥有博士、硕士等高学历人才"
    },
    { 
      value: "99.9%", 
      label: "服务可用性",
      icon: Shield,
      description: "稳定可靠的技术架构，7x24小时不间断服务"
    }
  ];

  // 核心优势配置 - 简化卡片设计（无图片）
  const advantages = [
    {
      title: "技术创新",
      description: "持续投入研发，保持技术领先优势，拥有多项核心专利技术"
    },
    {
      title: "专业团队", 
      description: "汇聚行业顶尖人才，提供专业服务，团队成员来自知名科技企业"
    },
    {
      title: "客户至上",
      description: "以客户需求为导向，提供定制化解决方案，确保项目成功落地"
    },
    {
      title: "行业领先",
      description: "在AI技术应用方面处于行业领先地位，获得多项权威认证"
    }
  ];

  return (
    <section 
      className="py-16 md:py-24 lg:py-32" 
      style={{ backgroundColor: 'rgba(247,248,251, 1)' }}
      id="about"
      data-monitor-comp-id="c854860"
    >
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* 页面标题 - H2加粗居中 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            关于我们
          </h2>
          <div className="w-16 h-1 bg-[#0055ff] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            专业的AI技术服务商，致力于为企业提供高效智能的解决方案
          </p>
        </motion.div>

        {/* 主要内容区域 - 响应式双列/单列布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* 左侧图片卡片 - 纯白背景+1px边框 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
            data-monitor-click-id="about-image-card"
          >
            <div 
              className="bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-lg rounded-lg"
              style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
            >
              {/* 主图片容器 - 416px高度 */}
              <div className="relative mb-6">
                <img 
                  src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/16109cf69762df98_1637162865915.png" 
                  alt="AI科技团队" 
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                  style={{ height: '416px' }}
                />
                
                {/* 状态指示器 */}
                <div 
                  className="absolute top-4 right-4 bg-white px-3 py-2 rounded-md"
                  style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#0055ff] rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">AI技术领先</span>
                  </div>
                </div>
              </div>

              {/* 满意度数据卡片 - 自适应内容区 */}
              <div 
                className="bg-gray-50 p-4 rounded-lg"
                style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#0055ff] flex items-center justify-center rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">客户满意度</div>
                    <div className="text-2xl font-semibold text-gray-900">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧企业简介卡片（包含核心数据） */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
            data-monitor-click-id="about-intro-card"
          >
            <div 
              className="bg-white p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-lg rounded-lg flex flex-col"
              style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
            >
              {/* 企业简介内容 */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">企业简介</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-base text-gray-700" style={{ lineHeight: '1.6' }}>
                    艺创AI科技是一家专注于人工智能技术研发和应用的高新技术企业，致力于为各行业提供先进的AI解决方案。
                    我们拥有一支由顶尖AI专家、工程师和行业顾问组成的专业团队。
                  </p>
                  <p className="text-base text-gray-700" style={{ lineHeight: '1.6' }}>
                    公司成立以来，我们始终坚持"技术创新、质量为本、客户至上"的理念，
                    不断推动AI技术在各行业的落地应用，帮助企业实现数字化转型和智能化升级。
                  </p>
                </div>
                
                {/* 按钮使用主色调强调 */}
                <button 
                  className="inline-flex items-center px-6 py-3 bg-[#0055ff] text-white transition-all duration-300 hover:bg-[#0044cc] group rounded-md"
                  style={{ fontWeight: '500' }}
                  data-monitor-click-id="about-learn-more"
                >
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* 核心数据展示区域 - 简化设计 */}
               <div className="border-t pt-6 mt-8" style={{ borderColor: 'rgba(221, 226, 233, 1)' }}>

                 <div className="grid grid-cols-2 gap-6">
                   {stats.map((stat, index) => (
                     <div
                       key={index}
                       className="text-center group cursor-pointer"
                       data-monitor-click-id={`stat-card-${index}`}
                     >
                       {/* 简化的数据展示 - 去掉图标，突出数字 */}
                       <div className="text-2xl font-bold text-[#0055ff] mb-1 group-hover:scale-105 transition-transform duration-200">
                         {stat.value}
                       </div>
                       <div className="text-sm font-medium text-gray-900 mb-1">
                         {stat.label}
                       </div>
                       <div 
                         className="text-xs text-gray-500"
                         style={{ lineHeight: '1.3' }}
                       >
                         {stat.description}
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* 核心优势功能卡片 - 响应式四列布局 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="cursor-pointer group"
                data-monitor-click-id={`advantage-card-${index}`}
              >
                {/* 功能卡片采用简化设计 - 纯文字卡片 */}
                <div 
                  className="bg-white transition-all duration-300 hover:shadow-lg rounded-lg p-6 h-full flex flex-col"
                  style={{ border: '1px solid rgba(221, 226, 233, 1)' }}
                >
                  {/* 标题区域 */}
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h4>
                    <div className="w-8 h-1 bg-[#0055ff] rounded-full"></div>
                  </div>
                  
                  {/* 描述内容 - 占据剩余空间 */}
                  <div className="flex-1 mb-6">
                    <p className="text-base text-gray-700" style={{ lineHeight: '1.6' }}>
                      {advantage.description}
                    </p>
                  </div>
                  
                  {/* 按钮区域 - 固定在底部 */}
                  <div>
                    <button 
                      className="inline-flex items-center px-4 py-2 bg-[#0055ff] text-white transition-all duration-300 hover:bg-[#0044cc] group rounded-md text-sm"
                      style={{ fontWeight: '500' }}
                      data-monitor-click-id={`advantage-btn-${index}`}
                    >
                      查看详情
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
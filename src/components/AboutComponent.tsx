"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Clock, Shield } from "lucide-react";

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
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        
        {/* 页面标题 - 简约设计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-tight px-2">
            关于我们
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* 主要内容区域 - 现代化布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center overflow-hidden">
          
          {/* 左侧图片区域 - 简约设计 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* 外层容器 - 确保不溢出 */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none overflow-hidden">
              {/* 内层容器 - 为卡片预留空间 */}
              <div className="relative pb-8 sm:pb-12 pr-4 sm:pr-8">
                
                {/* 简约几何背景装饰 - 移动端隐藏，桌面端显示 */}
                <div className="hidden lg:block absolute -top-8 -left-8 w-32 h-32 border border-blue-100 rounded-full opacity-30"></div>
                <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-lg opacity-40"></div>
                
                {/* 主图片容器 - 简约边框 */}
                <div className="relative bg-white border border-gray-100 overflow-hidden aspect-[4/3] group rounded-lg lg:rounded-none">
                  <img 
                    src="https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/16109cf69762df98_1637162865915.png" 
                    alt="AI科技团队" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* 简约状态指示器 - 响应式调整 */}
                  <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/95 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 border border-gray-100 rounded">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-medium text-black whitespace-nowrap">AI技术领先</span>
                    </div>
                  </div>
                </div>

                {/* 客户满意度卡片 - 重新设计，确保不溢出 */}
                <div className="absolute bottom-0 right-0 bg-white border border-gray-200 shadow-lg rounded-lg w-32 sm:w-40 lg:w-48">
                  <div className="p-2 sm:p-3 lg:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-3 sm:h-4 lg:h-5 w-3 sm:w-4 lg:w-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[8px] sm:text-[10px] lg:text-xs font-medium text-gray-600 uppercase tracking-wide leading-tight">满意度</div>
                        <div className="text-sm sm:text-lg lg:text-xl font-light text-black leading-tight">98%</div>
                      </div>
                    </div>
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
            className="order-1 lg:order-2 space-y-8 sm:space-y-10 lg:space-y-12"
          >
            
            {/* 描述文字 - 简约排版 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                艺创AI科技是一家专注于人工智能技术研发和应用的高新技术企业，致力于为各行业提供先进的AI解决方案。
                我们拥有一支由顶尖AI专家、工程师和行业顾问组成的专业团队。
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
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
               className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 xl:gap-6"
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
                     className="group w-full"
                   >
                     {/* 简约数据卡片 - 响应式尺寸，防溢出 */}
                      <div className="bg-white border border-gray-100 p-2 sm:p-3 lg:p-4 xl:p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-sm h-full rounded-lg lg:rounded-none touch-manipulation w-full overflow-hidden">
                        
                        {/* 图标区域 - 响应式设计 */}
                        <div className="mb-1 sm:mb-2 lg:mb-3">
                          <div className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 bg-blue-600 rounded flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-700">
                            <IconComponent className="h-2.5 sm:h-3 lg:h-4 w-2.5 sm:w-3 lg:w-4 text-white" />
                          </div>
                        </div>
                        
                        {/* 数据展示 - 响应式字体，防溢出 */}
                        <div className="space-y-0.5 sm:space-y-1 w-full">
                          <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-light text-black leading-tight truncate">{stat.value}</div>
                          <div className="text-[8px] sm:text-[10px] lg:text-xs font-medium text-black uppercase tracking-wide leading-tight break-words hyphens-auto">{stat.label}</div>
                          <div className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500 font-light leading-tight break-words hyphens-auto">{stat.description}</div>
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
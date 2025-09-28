"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, Users } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Zap className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#015bfe]" />,
      title: "丰富模型API",
      description: "提供文本、文本图、文本视频多种模型API，包括DeepSeek-R1-052B、Qwen3-235B、ERNIE4.5、StepTX、Flux kontext、Flux DEV等。"
    },
    {
      icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#015bfe]" />,
      title: "高效部署管理",
      description: "一站式自动化平台，开箱即用，全面覆盖从模型训练到应用上线的全流程，轻松实现业务模型的快速验证与适配。"
    },
    {
      icon: <Clock className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#015bfe]" />,
      title: "强大算法支持",
      description: "聚焦行业优先的预训练模型和垂直领域的专业模型，支持多种业务场景，帮助企业迅速实现业务创新。"
    },
    {
      icon: <Users className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#015bfe]" />,
      title: "灵活算力购买",
      description: "API按需付费，根据用户实际用量计费，结合错峰优化引擎，提供经济实惠的文本、文生图服务，实现高效的成本控制。"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/80 overflow-hidden" id="advantages">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#015bfe]/10 dark:bg-[#015bfe]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <motion.span
            className="inline-block px-5 py-2.5 bg-gradient-to-r from-[#015bfe]/10 to-blue-50 dark:from-[#015bfe]/20 dark:to-blue-900/40 text-[#015bfe] dark:text-blue-300 text-sm font-semibold rounded-full mb-6 shadow-sm border border-[#015bfe]/20 dark:border-blue-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            产品核心优势
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            智能<span className="relative inline-block px-2">
              <span className="relative z-10 bg-gradient-to-r from-[#015bfe] via-blue-500 to-blue-600 bg-clip-text text-transparent">优势</span>赋能
            </span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            凭借先进的技术、专业的团队和丰富的行业经验，我们为客户提供全方位的AI解决方案和服务支持
          </motion.p>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-[#015bfe] via-blue-500 to-blue-600 mx-auto rounded-full shadow-lg"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-sm hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50 group">
                {/* 装饰性背景元素 */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#015bfe]/10 via-blue-50/40 to-transparent dark:from-[#015bfe]/20 dark:via-blue-900/20 dark:to-transparent rounded-bl-2xl"></div>
                
                <CardContent className="p-2 sm:p-4 lg:p-5 relative z-10">
                  {/* 图标和标题并排显示 */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-5">
                    {/* 缩小后的图标容器 */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#015bfe]/10 dark:bg-[#015bfe]/20 flex items-center justify-center group-hover:scale-105 transition-all duration-300 rounded-lg shadow-sm border border-[#015bfe]/20 dark:border-blue-700/50 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#015bfe] dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight bg-gradient-to-r from-gray-50/80 to-blue-50/60 dark:from-gray-700/50 dark:to-blue-900/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-6 font-medium line-clamp-3 sm:line-clamp-none">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/*为什么选择我们*/}
        <motion.div
          className="relative overflow-hidden transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-sm hover:shadow-lg p-8 sm:p-10 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* 装饰性背景元素 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#015bfe]/5 via-blue-50/20 to-transparent dark:from-[#015bfe]/10 dark:via-blue-900/10 dark:to-transparent rounded-bl-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div>
                <motion.span
                  className="inline-block px-4 py-2 bg-gradient-to-r from-[#015bfe]/10 to-blue-50 dark:from-[#015bfe]/20 dark:to-blue-900/40 text-[#015bfe] dark:text-blue-300 text-sm font-semibold rounded-full mb-4 shadow-sm border border-[#015bfe]/20 dark:border-blue-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  核心竞争力
                </motion.span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                  为什么选择<span className="bg-gradient-to-r from-[#015bfe] via-blue-500 to-blue-600 bg-clip-text text-transparent">我们</span>？
                </h3>
                <div className="w-16 h-1.5 bg-gradient-to-r from-[#015bfe] via-blue-500 to-blue-600 mb-6 rounded-full shadow-sm" />
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
                  AI科技拥有丰富的行业经验和技术积累，我们不仅提供标准化的AI产品，
                  还能根据客户的特定需求提供定制化解决方案，帮助客户在数字化转型中获得竞争优势
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "5年+行业经验，服务超过1000家企业客户",
                  "50+AI专家团队，持续技术创新",
                  "99.9%服务可用性，7x24小时技术支持",
                  "灵活的部署方案，支持云端和本地部署"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#015bfe] to-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 rounded-full shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#015bfe]/10 to-transparent transform rotate-3 rounded-xl" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="团队合作"
                  className="relative shadow-lg object-cover w-full h-96 rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;

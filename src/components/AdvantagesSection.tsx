"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, Users } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Zap className="h-8 w-8 text-[#015bfe]" />,
      title: "丰富模型API",
      description: "提供文本、文本图、文本视频多种模型API，包括DeepSeek-R1-052B、Qwen3-235B、ERNIE4.5、StepTX、Flux kontext、Flux DEV等。"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#015bfe]" />,
      title: "高效部署管理",
      description: "一站式自动化平台，开箱即用，全面覆盖从模型训练到应用上线的全流程，轻松实现业务模型的快速验证与适配。"
    },
    {
      icon: <Clock className="h-8 w-8 text-[#015bfe]" />,
      title: "强大算法支持",
      description: "聚焦行业优先的预训练模型和垂直领域的专业模型，支持多种业务场景，帮助企业迅速实现业务创新。"
    },
    {
      icon: <Users className="h-8 w-8 text-[#015bfe]" />,
      title: "灵活算力购买",
      description: "API按需付费，根据用户实际用量计费，结合错峰优化引擎，提供经济实惠的文本、文生图服务，实现高效的成本控制。"
    }
  ];

  return (
    <section className="py-24 bg-white" id="advantages">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            产品优势
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-[#015bfe] mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            凭借先进的技术、专业的团队和丰富的行业经验，我们为客户提供全方位的AI解决方案和服务支持。
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white group rounded-none">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 rounded-none">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 leading-tight">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm p-12 rounded-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">为什么选择我们？</h3>
                <div className="w-12 h-1 bg-[#015bfe] mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  AI科技拥有丰富的行业经验和技术积累，我们不仅提供标准化的AI产品，
                  还能根据客户的特定需求提供定制化解决方案，帮助客户在数字化转型中获得竞争优势。
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
                    <div className="w-6 h-6 bg-[#015bfe] flex items-center justify-center flex-shrink-0 mt-0.5 rounded-none">
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
                    <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#015bfe]/10 to-transparent transform rotate-3" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="团队合作"
                  className="relative shadow-lg object-cover w-full h-96"
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

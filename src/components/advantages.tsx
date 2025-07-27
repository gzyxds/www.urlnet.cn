"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, Users } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Zap className="h-10 w-10 text-[#015bfe]" />,
      title: "丰富模型API",
      description: "提供文本、文本图、文本视频多种模型API，包括DeepSeek-R1-052B、Qwen3-235B、ERNIE4.5、StepTX、Flux kontext、Flux DEV等。"
    },
    {
      icon: <Shield className="h-10 w-10 text-[#015bfe]" />,
      title: "高效部署管理",
      description: "一站式自动化平台，开箱即用，全面覆盖从模型训练到应用上线的全流程，轻松实现业务模型的快速验证与适配。"
    },
    {
      icon: <Clock className="h-10 w-10 text-[#015bfe]" />,
      title: "强大算法支持",
      description: "聚焦行业优先的预训练模型和垂直领域的专业模型，支持多种业务场景，帮助企业迅速实现业务创新。"
    },
    {
      icon: <Users className="h-10 w-10 text-[#015bfe]" />,
      title: "灵活算力购买",
      description: "API按需付费，根据用户实际用量计费，结合错峰优化引擎，提供经济实惠的文本、文生图服务，实现高效的成本控制。"
    }
  ];

  return (
    <section className="py-20 bg-white" id="advantages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">产品优势</h2>
          <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            凭借先进的技术、专业的团队和丰富的行业经验，我们为客户提供全方位的AI解决方案和服务支持。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#f0f4ff] rounded-lg flex items-center justify-center mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">为什么选择我们？</h3>
              <p className="text-gray-600 mb-6">
                AI科技拥有丰富的行业经验和技术积累，我们不仅提供标准化的AI产品，
                还能根据客户的特定需求提供定制化解决方案，帮助客户在数字化转型中获得竞争优势。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#015bfe] flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">5年+行业经验，服务超过1000家企业客户</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#015bfe] flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">50+AI专家团队，持续技术创新</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#015bfe] flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">99.9%服务可用性，7x24小时技术支持</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-[#015bfe] flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">灵活的部署方案，支持云端和本地部署</span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="团队合作" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
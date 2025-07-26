"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Clock, Users } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: <Zap className="h-12 w-12 text-[#015bfe]" />,
      title: "先进技术",
      description: "采用最新的深度学习和大语言模型技术，持续创新，保持技术领先优势。"
    },
    {
      icon: <Shield className="h-12 w-12 text-[#015bfe]" />,
      title: "安全可靠",
      description: "严格的数据安全保障和隐私保护措施，确保客户数据安全和业务连续性。"
    },
    {
      icon: <Clock className="h-12 w-12 text-[#015bfe]" />,
      title: "高效便捷",
      description: "简化复杂流程，提供直观易用的界面和API，帮助客户快速实现业务价值。"
    },
    {
      icon: <Users className="h-12 w-12 text-[#015bfe]" />,
      title: "专业服务",
      description: "专业的技术团队和客户服务，提供全方位的实施、培训和技术支持。"
    }
  ];

  return (
    <section className="py-20 bg-white" id="advantages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的优势</h2>
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
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#015bfe]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
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
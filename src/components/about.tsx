"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { value: "5+", label: "年行业经验" },
    { value: "1000+", label: "企业客户" },
    { value: "50+", label: "AI专家团队" },
    { value: "99.9%", label: "服务可用性" }
  ];

  return (
<section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#015bfe]/10 rounded-xl blur-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="AI科技团队" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-[#015bfe]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">客户满意度</div>
                    <div className="text-xl font-bold text-[#015bfe]">98%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">关于我们</h2>
              <div className="w-24 h-1 bg-[#015bfe] mx-auto lg:mx-0 mb-6"></div>
            </div>
            <p className="text-gray-600 mb-6">
              AI科技是一家专注于人工智能技术研发和应用的高新技术企业，致力于为各行业提供先进的AI解决方案。
              我们拥有一支由顶尖AI专家、工程师和行业顾问组成的专业团队，具有丰富的技术积累和行业经验。
            </p>
            <p className="text-gray-600 mb-8">
              公司成立以来，我们始终坚持"技术创新、质量为本、客户至上"的理念，
              不断推动AI技术在各行业的落地应用，帮助企业实现数字化转型和智能化升级。
              我们的产品和服务已覆盖金融、医疗、教育、制造等多个领域，获得了广泛的市场认可和客户好评。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#015bfe]">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-[#015bfe] hover:bg-blue-700">
              了解更多
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
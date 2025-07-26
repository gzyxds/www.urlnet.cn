"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "AI科技发布最新版数字分身产品，情感识别能力大幅提升",
      date: "2023-06-15",
      category: "产品更新",
      summary: "AI科技今日发布数字分身产品3.2版本，新增情感识别模块，支持识别用户7种基本情绪，并提供适当回应，大幅提升用户体验。",
      link: "/news/digital-twin-update"
    },
    {
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "AI科技与某大型医疗集团达成战略合作，共同推进AI医疗应用",
      date: "2023-05-28",
      category: "公司新闻",
      summary: "AI科技与国内某大型医疗集团签署战略合作协议，双方将在智能诊断、医疗影像分析等领域展开深入合作，推动AI技术在医疗健康领域的创新应用。",
      link: "/news/medical-partnership"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "AI科技荣获2023年度最具创新力AI企业称号",
      date: "2023-04-20",
      category: "公司荣誉",
      summary: "在近日举办的2023全球人工智能创新峰会上，AI科技凭借在大语言模型和生成式AI领域的突出贡献，荣获2023年度最具创新力AI企业称号。",
      link: "/news/innovation-award"
    }
  ];

  return (
    <section className="py-20 bg-white" id="news">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">最新动态</h2>
          <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            了解AI科技的最新产品更新、公司新闻和行业洞察，
            保持对AI技术和应用的前沿了解。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-[#015bfe]/10 text-[#015bfe] text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center ml-auto text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                  <Link 
                    to={item.link}
                    className="text-[#015bfe] font-medium hover:underline flex items-center"
                  >
                    阅读更多
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-[#015bfe] hover:bg-blue-700"
            asChild
          >
            <Link to="/news">
              查看所有动态
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Sparkles, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f0f4ff] to-[#e6eeff] overflow-hidden pt-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#8b9ddb" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-300/30 to-blue-300/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/30 to-indigo-300/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>全新版本已发布</span>
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6"
          >
            面向 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">AI开发者</span> | 创业者 
            <span className="block mt-2">开源的<span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">AI应用搭建框架</span></span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-xl text-gray-600 mb-2">它可以 
              <span className="relative inline-block mx-2 px-2">
                <span className="absolute inset-x-0 bottom-0 h-3 bg-yellow-200/70"></span>
                <span className="relative">快速构建</span>
              </span> 
              私有AI应用 ✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              轻松部署
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full transition-all duration-300">
              在线使用
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>AI原生开发体验</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Code className="h-5 w-5 text-blue-600" />
              <span>无缝学习与集成</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span>同时兼容可视化</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <ChevronRight className="h-5 w-5 text-blue-600" />
              <span>开源可扩展</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <img 
              src="https://server.mddai.cn/uploads/images/20250717160615b43560727.png" 
              alt="艺创AI平台界面" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
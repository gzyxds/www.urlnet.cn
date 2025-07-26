"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-[#015bfe] to-blue-700 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              人工智能赋能<br />
              <span className="text-yellow-300">企业数字化转型</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              我们提供先进的AI解决方案，帮助企业提升效率、降低成本、创造价值，
              实现业务流程的智能化升级和创新突破。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-[#015bfe] hover:bg-gray-100 px-6 py-6 text-lg">
                免费试用
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-6 py-6 text-lg">
                了解更多
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt={`用户${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-yellow-300 font-bold">1000+</div>
                <div className="text-white/80 text-sm">企业客户的信赖之选</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-xl blur"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80" 
                  alt="AI科技平台" 
                  className="w-full h-auto rounded-t-xl"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-white font-bold">AI科技平台</div>
                    <div className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full">在线演示</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/20 rounded-full w-full"></div>
                    <div className="h-2 bg-white/20 rounded-full w-3/4"></div>
                    <div className="h-2 bg-white/20 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 波浪底部 */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#f7f9f0">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
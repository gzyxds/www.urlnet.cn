"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Code, Zap, Sparkles, ChevronRight, X } from "lucide-react";

// 打字机效果 Hook
const useTypewriter = (text: string, speed: number = 100, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isStarted]);

  return displayText;
};

// 循环文字效果 Hook
const useRotatingText = (texts: string[], speed: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (!isDeleting) {
      // 打字效果
      if (displayText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // 完成打字后等待
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, speed);
        return () => clearTimeout(timer);
      }
    } else {
      // 删除效果
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // 删除完成后切换到下一句
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, currentIndex, isDeleting, texts, speed]);

  return displayText;
};

const Hero = () => {
  const firstLine = "艺创AI 新一代AI系统 赋能企业";
  const rotatingTexts = [
    "它拥有完善的计费和收款能力",
    "它支持用户管理和权限管理", 
    "它可以帮助你快速实现AI商业闭环",
    "它正在成为AI场景落地首选方案",
    "它一次购买、永久免费更新",
    "它技术过硬、私有部署、个性化定制、稳定使用"
  ];
  
  const typewriterFirst = useTypewriter(firstLine, 80, 0);
  const rotatingSecond = useRotatingText(rotatingTexts, 3000);

  // 新增：点击弹出的二维码状态
  const [showQRCode, setShowQRCode] = useState(false);

  // 新增：处理点击弹出二维码的函数
  const handleClickQRCode = () => {
    setShowQRCode(true);
  };

  // 新增：关闭点击弹出的二维码
  const handleCloseQRCode = () => {
    setShowQRCode(false);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
        {/* 背景装饰 - 参考chat页面的简洁设计 */}
        <div className="absolute inset-0 overflow-hidden bg-white">
          {/* 动态光效 - 蓝色主题 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          {/* 网格背景 - 简洁线条 */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2563eb" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-20 relative z-10">
          {/* 版本标签 - 参考chat页面的状态标签设计 */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/90 backdrop-blur-md border border-blue-200 text-black shadow-lg">
              <div className="flex items-center mr-2 sm:mr-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-pulse mr-1 sm:mr-2"></div>
                <span className="text-xs sm:text-sm font-medium">最新版本</span>
              </div>
              <div className="h-3 sm:h-4 w-px bg-blue-600 mx-2 sm:mx-3"></div>
              <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent font-bold">
                V3.0 全新发布
              </span>
            </div>
          </div>

          {/* 主标题区域 */}
          <div className="flex flex-col items-center text-center w-full max-w-none mx-auto">
          {/* 主标题 - 参考chat页面的标题设计 */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black mb-6 sm:mb-8 leading-tight">
              <div className="pt-6">
                <span className="block">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                    艺创AI
                  </span>
                </span>
              </div>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-4">
                {rotatingSecond}
                <span className="animate-pulse text-blue-600 drop-shadow-sm">|</span>
              </span>
            </h1>
          </div>
          {/* 描述文字 - 参考chat页面的副标题设计 */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
           <span className="text-blue-600 font-semibold">一站式AIGC系统</span>，
            提供面向个人用户(ToC)、开发者(ToD)和企业(ToB)的全面AI解决方案
          </p>
          {/* 核心特性标签 - 参考chat页面的特性标签设计 */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12">
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-200">
              <svg className="w-4 h-4 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
              AI数字人
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-200">
              <svg className="w-4 h-4 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              知识库
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-200">
              <svg className="w-4 h-4 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
              智能绘画
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-200">
              <svg className="w-4 h-4 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              论文创作
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-200">
              <svg className="w-4 h-4 inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              PHP&Java
            </span>
          </div>
          {/* 行动按钮组 - 参考chat页面的按钮设计 */}
          <div className="flex flex-row gap-3 justify-center mb-8 sm:mb-12">
            <Button className="rounded-full px-6 py-2 h-auto text-sm sm:text-base font-medium">
             立即体验
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-black text-black hover:bg-gray-100 backdrop-blur-sm px-6 py-2 h-auto text-sm sm:text-base font-medium rounded-full"
              onClick={() => setShowQRCode(true)}
            >
              联系客服
            </Button>
          </div>

          {/* 实时数据展示 - 参考chat页面的数据展示设计 */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">1000+</span>
              </div>
              <div className="text-gray-700 text-xs sm:text-sm">企业用户</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">50万+</span>
              </div>
              <div className="text-gray-700 text-xs sm:text-sm">AI创作</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">99.9%</span>
              </div>
              <div className="text-gray-700 text-xs sm:text-sm">系统稳定</div>
            </div>
          </div>
          </div>


        </div>
      </section>

      {/* 新增：点击弹出的二维码模态框 */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            onClick={handleCloseQRCode}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseQRCode}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="关闭"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              
              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">联系客服</h3>
                <p className="text-sm text-gray-600 mb-6">扫描二维码添加客服微信</p>
                
                {/* 二维码 */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img 
                      src="/images/qrcode.png" 
                      alt="客服二维码" 
                      className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
                    />
                  </div>
                </div>
                
                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;

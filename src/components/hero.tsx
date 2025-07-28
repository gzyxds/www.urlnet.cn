"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Sparkles, ChevronRight, X } from "lucide-react";

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
  const firstLine = "艺创AI 面向 AI开发者 | 创业者";
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
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f0f4ff] to-[#e6eeff] overflow-hidden pt-16">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
          {/* 版本标签 */}
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

          {/* 主标题区域 */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-[7rem]"
            >
              {/* 第一行 */}
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {typewriterFirst}
                </span>
                <span className="inline-block w-1 h-6 sm:h-8 md:h-10 lg:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 ml-1 animate-pulse"></span>
              </div>
              
              {/* 第二行 */}
              <div>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text relative">
                    {rotatingSecond}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 to-purple-400 opacity-60"></span>
                  </span>
                </span>
                <span className="inline-block w-1 h-5 sm:h-6 md:h-7 lg:h-8 bg-gradient-to-r from-indigo-600 to-purple-600 ml-1 animate-pulse"></span>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <p className="text-lg sm:text-xl text-gray-600 mb-2">它可以 
                <span className="relative inline-block mx-2 px-2">
                  <span className="absolute inset-x-0 bottom-0 h-3 bg-yellow-200/70"></span>
                  <span className="relative">快速构建</span>
                </span> 
                私有AI应用 ✨
              </p>
            </motion.div>

            {/* 操作按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full sm:w-auto"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                轻松部署
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 w-full sm:w-auto"
                onClick={handleClickQRCode}
              >
                联系客服
              </Button>
            </motion.div>

            {/* 特性列表 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto w-full"
            >
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span>AI原生开发体验</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span>无缝学习与集成</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span>同时兼容可视化</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span>开源可扩展</span>
              </div>
            </motion.div>
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

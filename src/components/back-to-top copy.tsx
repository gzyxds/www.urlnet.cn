"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, MessageCircle, Headphones, Gift, User } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showAfterSales, setShowAfterSales] = useState(false);

  // 监听滚动事件，当页面滚动超过300px时显示按钮
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 点击按钮时滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {/* 售前咨询按钮 - 蓝色渐变 */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onMouseEnter={() => setShowQRCode(true)}
            onMouseLeave={() => setShowQRCode(false)}
          >
            <button
              className="w-12 h-28 rounded-full bg-gradient-to-b from-blue-500 to-blue-400 text-white shadow-lg flex flex-col items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="售前咨询"
            >
              <Headphones className="h-6 w-6 mb-2" />
              <div className="text-xs font-medium leading-tight">
                <div>售前</div>
                <div>咨询</div>
              </div>
            </button>
            
            {/* 二维码弹窗 */}
            <AnimatePresence>
              {showQRCode && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 right-full mr-3 bg-white rounded-lg shadow-2xl border border-gray-100 min-w-[200px] backdrop-blur-sm"
                  style={{
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <div className="p-5">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-4">扫码联系客服</div>
                      <div className="flex justify-center">
                        <img 
                          src="/images/qrcode.png" 
                          alt="客服二维码" 
                          className="w-36 h-36 object-contain rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 小三角 */}
                  <div className="absolute top-5 left-full w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
                  {/* 装饰性边框 */}
                  <div className="absolute inset-0 rounded-lg border border-gray-100/50 pointer-events-none"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 售后/活动按钮 - 白色按钮包含两个选项 */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative"
            onMouseEnter={() => setShowAfterSales(true)}
            onMouseLeave={() => setShowAfterSales(false)}
          >
            <div className="w-12 h-28 rounded-full bg-white shadow-lg border border-gray-200/50 flex flex-col overflow-hidden">
              {/* 售后选项 */}
              <button className="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <User className="h-4 w-4 mb-1" />
                <span className="text-xs font-medium">售后</span>
              </button>
              
              {/* 活动选项 */}
              <button className="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
                <Gift className="h-4 w-4 mb-1" />
                <span className="text-xs font-medium">活动</span>
              </button>
            </div>
            
            {/* 售后详情弹窗 */}
            <AnimatePresence>
              {showAfterSales && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 right-full mr-3 bg-white rounded-lg shadow-2xl border border-gray-100 min-w-[180px] backdrop-blur-sm"
                >
                  <div className="p-5">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-3">售后服务</div>
                      <div className="text-xs text-gray-500">专业售后团队为您服务</div>
                    </div>
                  </div>
                  
                  {/* 小三角 */}
                  <div className="absolute top-5 left-full w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 返回顶部按钮 - 白色圆形 */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white text-gray-700 shadow-lg flex items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-gray-200/50"
            aria-label="返回顶部"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackToTop;
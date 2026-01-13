"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Headphones, Gift, User } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showAfterSales, setShowAfterSales] = useState(false);
  // 新增：点击弹出的二维码状态
  const [showClickQRCode, setShowClickQRCode] = useState(false);

  // 监听滚动事件，当页面滚动超过300px时显示按钮
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 监听滚动事件
    window.addEventListener('scroll', toggleVisibility);
    
    // 监听自定义事件，用于从其他组件触发二维码弹窗
    const handleShowQRCodeModal = () => {
      setShowClickQRCode(true);
    };
    
    window.addEventListener('showQRCodeModal', handleShowQRCodeModal);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('showQRCodeModal', handleShowQRCodeModal);
    };
  }, []);

  // 点击按钮时滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 新增：处理点击弹出二维码的函数
  const handleClickQRCode = () => {
    setShowClickQRCode(true);
  };

  // 新增：关闭点击弹出的二维码
  const handleCloseClickQRCode = () => {
    setShowClickQRCode(false);
  };

  return (
    <>
      <div className="fixed bottom-20 sm:bottom-32 right-4 sm:right-11 z-50 flex flex-col gap-2 sm:gap-3">
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
                className="w-10 h-20 sm:w-12 sm:h-28 bg-gradient-to-b from-blue-500 to-blue-400 text-white shadow-lg flex flex-col items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="售前咨询"
                // 新增：添加点击事件
                onClick={handleClickQRCode}
              >
                <Headphones className="h-4 w-4 sm:h-6 sm:w-6 mb-1 sm:mb-2" />
                <div className="text-xs font-medium leading-tight">
                  <div>售前</div>
                  <div>咨询</div>
                </div>
              </button>
              
              {/* 二维码弹窗 - 悬停显示 */}
              <AnimatePresence>
                {showQRCode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 right-full mr-2 sm:mr-3 bg-white shadow-2xl border border-gray-100 min-w-[160px] sm:min-w-[200px] backdrop-blur-sm"
                    style={{
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="p-3 sm:p-5">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">扫码联系客服</div>
                        <div className="flex justify-center">
                          <img 
                            src="/images/qrcode.png" 
                            alt="客服二维码" 
                            className="w-28 h-28 sm:w-36 sm:h-36 object-contain border border-gray-200"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* 小三角 */}
                    <div className="absolute top-5 left-full w-0 h-0 border-t-6 border-b-6 border-l-6 border-transparent border-l-white"></div>
                    {/* 装饰性边框 */}
                    <div className="absolute inset-0 border border-gray-100/50 pointer-events-none"></div>
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
              <div className="w-10 h-20 sm:w-12 sm:h-28 bg-white shadow-lg border border-gray-200/50 flex flex-col overflow-hidden">
                {/* 售后选项 */}
                <button className="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 mb-0.5 sm:mb-1" />
                  <span className="text-xs font-medium">售后</span>
                </button>
                
                {/* 活动选项 */}
                <button className="flex-1 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
                  <Gift className="h-3 w-3 sm:h-4 sm:w-4 mb-0.5 sm:mb-1" />
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
                    className="absolute bottom-0 right-full mr-2 sm:mr-3 bg-white shadow-2xl border border-gray-100 min-w-[140px] sm:min-w-[180px] backdrop-blur-sm"
                  >
                    <div className="p-3 sm:p-5">
                      <div className="text-center">
                        <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">售后服务</div>
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
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-gray-700 shadow-lg flex items-center justify-center transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-gray-200/50"
              aria-label="返回顶部"
            >
              <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* 点击弹出的二维码模态框 */}
      <AnimatePresence>
        {showClickQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4"
            onClick={handleCloseClickQRCode}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-lg shadow-2xl w-full max-w-[600px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 顶部公告条 */}
              <div className="bg-primary/10 px-4 sm:px-5 py-3 flex items-center justify-between">
                <div className="flex items-center text-sm flex-wrap gap-1">
                  <span className="flex items-center mr-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5 animate-pulse"></span>
                    <span className="text-gray-600">公告：</span>
                  </span>
                  <span className="text-primary font-medium">联系客服</span>
                  <span className="text-gray-600">获取产品优惠码、关注公众号了解</span>
                  <span className="text-primary font-medium">优惠活动</span>
                  <span className="text-gray-600">和</span>
                  <span className="text-primary font-medium">产品更新</span>
                </div>
                {/* 关闭按钮 */}
                <button
                  onClick={handleCloseClickQRCode}
                  className="text-gray-400 hover:text-gray-600 text-xl leading-none ml-2 flex-shrink-0"
                  aria-label="关闭"
                >
                  ×
                </button>
              </div>

              {/* 主内容区域 */}
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                {/* 标题区域 */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <span className="w-6 h-[2px] bg-primary mr-3"></span>
                    <span className="text-xs tracking-widest text-primary font-medium">CONNECT SUPPORT</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">联系客服</h3>
                  <p className="text-sm text-gray-500">扫码添加客服微信获取【优惠码】   关注公众号了解最新优惠活动和产品更新</p>
                </div>
                
                {/* 二维码区域 */}
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  {/* 微信客服 */}
                  <div className="text-center">
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-6 mb-3 sm:mb-4">
                      <img 
                        src="/images/qrcode.png" 
                        alt="微信客服二维码" 
                        className="w-full max-w-[180px] mx-auto" 
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">添加客服微信</h4>
                    <p className="text-xs text-gray-500">产品咨询 / 优惠码 / </p>
                  </div>
                  
                  {/* 公众号 */}
                  <div className="text-center">
                    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-6 mb-3 sm:mb-4">
                      <img 
                        src="/images/wechat.png" 
                        alt="微信公众号二维码" 
                        className="w-full max-w-[180px] mx-auto" 
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">关注公众号</h4>
                    <p className="text-xs text-gray-500">优惠活动 / 产品更新</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackToTop;

/*
使用说明：

1. 现有功能保持不变：
   - 悬停显示二维码弹窗（售前咨询按钮）
   - 悬停显示售后信息（售后/活动按钮）
   - 返回顶部功能

2. 新增点击弹出功能：
   - 点击"售前咨询"按钮会弹出全屏模态框
   - 模态框包含更大的二维码和更详细的信息
   - 可以通过点击关闭按钮或点击背景关闭

3. 功能特点：
   - 双重交互：悬停显示小弹窗，点击显示大模态框
   - 响应式设计：模态框在不同屏幕尺寸下都能正常显示
   - 动画效果：使用 Framer Motion 提供流畅的动画
   - 无障碍支持：包含适当的 aria-label

4. 自定义选项：
   - 修改二维码图片路径：更改 src="/images/qrcode.png"
   - 调整模态框大小：修改 max-w-sm 类名
   - 更改颜色主题：修改渐变和颜色类名
   - 添加更多内容：在模态框内容区域添加更多元素

5. 状态管理：
   - showQRCode: 控制悬停弹窗显示
   - showClickQRCode: 控制点击模态框显示
   - showAfterSales: 控制售后信息弹窗显示

6. 事件处理：
   - handleClickQRCode: 处理点击显示模态框
   - handleCloseClickQRCode: 处理关闭模态框
   - 阻止事件冒泡：防止点击模态框内容时关闭
*/
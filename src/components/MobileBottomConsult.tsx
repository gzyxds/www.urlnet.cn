"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MessageCircle, MessageSquare, X } from 'lucide-react';

/**
 * 手机端底部业务咨询组件属性接口
 */
interface MobileBottomConsultProps {
  /**
   * 咨询电话号码
   * @default "400-123-4567"
   */
  phoneNumber?: string;

  /**
   * 售前客服二维码URL
   * @default "/images/qrcode.png"
   */
  presalesQR?: string;

  /**
   * 售后客服二维码URL
   * @default "/images/qrcode.png"
   */
  aftersalesQR?: string;
}

/**
 * 二维码弹窗数据接口
 */
interface QRModalData {
  type: string;
  url: string;
  title: string;
  description: string;
}

/**
 * 手机端底部业务咨询组件
 * 参考火山引擎的设计风格，提供移动端底部固定的业务咨询功能
 * 
 * 功能特性：
 * 1. 固定在移动端底部，不影响页面内容
 * 2. 包含演示、客服、QQ客服三个主要功能
 * 3. 响应式设计，仅在移动端显示
 * 4. 支持暗黑模式
 * 5. 使用Framer Motion实现流畅动画
 * 
 * @param props - 组件属性
 * @returns React组件
 */
const MobileBottomConsult: React.FC<MobileBottomConsultProps> = ({
  phoneNumber = "400-123-4567",
  presalesQR = "/images/qrcode.png",
  aftersalesQR = "/images/qrcode.png"
}) => {
  const [showQR, setShowQR] = useState(false);
  const [qrData, setQRData] = useState<QRModalData | null>(null);

  /**
   * 打开二维码弹窗
   * @param type - 二维码类型
   * @param url - 二维码图片URL
   * @param title - 弹窗标题
   * @param description - 描述文字
   */
  const openQR = (type: string, url: string, title: string, description: string) => {
    setQRData({ type, url, title, description });
    setShowQR(true);
  };

  /**
   * 关闭二维码弹窗
   */
  const closeQR = () => {
    setShowQR(false);
    setTimeout(() => setQRData(null), 300);
  };

  /**
   * 跳转到演示页面
   */
  const goToDemo = () => {
    window.location.href = '/demo';
  };

  /**
   * 更新body底部内边距，避免内容被遮挡
   */
  useEffect(() => {
    const updateBodyPadding = () => {
      if (window.innerWidth >= 768) {
        document.body.style.paddingBottom = '0';
      } else {
        document.body.style.paddingBottom = '80px';
      }
    };

    updateBodyPadding();

    // 防抖处理resize事件
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateBodyPadding, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.paddingBottom = '0';
    };
  }, []);

  return (
    <>
      {/* 手机端底部业务咨询组件 */}
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* 左右分离布局：左侧图标按钮，右侧业务咨询按钮 */}
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* 左侧三个图标按钮容器 */}
          <div className="flex items-center gap-3">
            {/* 查看演示按钮 */}
            <motion.button
              className="flex flex-col items-center justify-center py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              onClick={goToDemo}
              aria-label="查看产品演示"
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">演示</span>
            </motion.button>

            {/* 联系客服按钮 */}
            <motion.button
              className="flex flex-col items-center justify-center py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              onClick={() => openQR('presales', presalesQR, '联系客服', '扫描二维码添加客服，获取产品咨询和技术支持')}
              aria-label="联系客服"
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">客服</span>
            </motion.button>

            {/* QQ客服按钮 */}
            <motion.button
              className="flex flex-col items-center justify-center py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              onClick={() => openQR('aftersales', aftersalesQR, 'QQ客服', '扫描二维码添加QQ客服，获取技术支持和问题解决')}
              aria-label="QQ客服"
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">QQ</span>
            </motion.button>
          </div>

          {/* 业务咨询按钮单独靠右边缘显示 */}
          <motion.button
            className="bg-[#0055ff] hover:bg-[#0055ff]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm shadow-md"
            onClick={() => openQR('business', presalesQR, '业务咨询', '扫描二维码联系我们，获取专业的业务咨询服务')}
            aria-label="业务咨询"
            whileTap={{ scale: 0.95 }}
          >
            业务咨询
          </motion.button>
        </div>
      </motion.div>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQR && qrData && (
          <motion.div
            className="fixed inset-0 flex items-end justify-center z-[60] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeQR}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            
            {/* 弹窗内容 */}
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl mb-24"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 弹窗头部 */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {qrData.title}
                </h3>
                <motion.button
                  onClick={closeQR}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="关闭弹窗"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* 二维码图片 */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200 dark:border-gray-600">
                  <img
                    src={qrData.url}
                    alt={`${qrData.title}二维码`}
                    className="w-40 h-40 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/qrcode.png'; // 备用图片
                    }}
                  />
                </div>
              </div>

              {/* 描述文字 */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {qrData.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileBottomConsult;
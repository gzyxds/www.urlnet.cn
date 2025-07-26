"use client";

import { useState, useEffect } from 'react';

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 检查是否在客户端
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // 初始检查
      checkMobile();

      // 监听窗口大小变化
      window.addEventListener('resize', checkMobile);

      // 清理函数
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
  }, []);

  return isMobile;
}
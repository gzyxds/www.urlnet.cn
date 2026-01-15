"use client";

import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { featuresData } from '@/data/features';

/**
 * 渐变色配置
 */
const gradients = [
  'from-sky-500/15 to-sky-500/5', // Sky Blue
  'from-purple-500/15 to-purple-500/5', // Purple
  'from-rose-500/15 to-rose-500/5', // Rose
  'from-amber-500/15 to-amber-500/5', // Amber
  'from-emerald-500/15 to-emerald-500/5', // Emerald
  'from-indigo-500/15 to-indigo-500/5', // Indigo
  'from-orange-500/15 to-orange-500/5', // Orange
  'from-teal-500/15 to-teal-500/5', // Teal
  'from-fuchsia-500/15 to-fuchsia-500/5', // Fuchsia
  'from-cyan-500/15 to-cyan-500/5', // Cyan
  'from-yellow-500/15 to-yellow-500/5', // Yellow
  'from-red-500/15 to-red-500/5', // Red
  'from-violet-500/15 to-violet-500/5', // Violet
  'from-blue-500/15 to-blue-500/5', // Blue
  'from-lime-500/15 to-lime-500/5'  // Lime
];

/**
 * Scenes 组件 (重构为 3D 轮播展示)
 * 数据来源: featuresData
 */
const Scenes = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 拖拽状态
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const initialScrollLeft = useRef(0);

  // 动画状态
  const animationFrameId = useRef<number | null>(null);
  const autoScrollFrameId = useRef<number | null>(null);
  const scrollAccumulator = useRef(0);
  const AUTO_SCROLL_SPEED = 0.5; // 像素/帧，参考 Vue 版本

  // 准备数据：映射产品数据并添加渐变色
  const originalCards = useMemo(() => {
    return featuresData.map((feature, index) => ({
      title: feature.title,
      subtitle: feature.subtitle,
      desc: feature.description,
      gradient: gradients[index % gradients.length]
    }));
  }, []);

  // 复制 5 份以实现无限滚动（参考 Vue 版本）
  const cards = useMemo(() => {
    return [
      ...originalCards,
      ...originalCards,
      ...originalCards,
      ...originalCards,
      ...originalCards
    ];
  }, [originalCards]);

  // 更新卡片 3D 变换效果（参考 Vue 版本优化）
  const updateTransforms = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const viewportCenter = window.innerWidth / 2;
    const isMobile = window.innerWidth < 768;
    const range = isMobile ? window.innerWidth * 0.8 : 1000;

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;

      // 计算距离中心的标准化距离
      let dist = (cardCenter - viewportCenter) / range;

      // 限制距离范围
      if (dist < -1) dist = -1;
      if (dist > 1) dist = 1;

      const absDist = Math.abs(dist);
      // 参考 Vue 版本的 3D 效果参数
      const rotation = dist * (isMobile ? 15 : 45);
      const translateZ = absDist * (isMobile ? -50 : -200);
      const scale = 1 - absDist * (isMobile ? 0.05 : 0.1);
      const opacity = 1 - absDist * (isMobile ? 0.1 : 0.3);

      // 直接设置 transform，性能更好
      card.style.transform = `perspective(1000px) rotateY(${rotation}deg) translateZ(${translateZ}px) scale(${scale})`;
      card.style.opacity = `${opacity}`;
    });
  }, []);

  // 检查无限滚动重置（参考 Vue 版本的 5 组逻辑）
  const checkInfiniteScroll = useCallback(() => {
    if (!scrollContainerRef.current || isDragging) return;

    const container = scrollContainerRef.current;
    const isMobile = window.innerWidth < 768;
    const gap = isMobile ? 16 : 32;
    const cardWidth = isMobile ? window.innerWidth * 0.85 : 360;
    const itemFullWidth = cardWidth + gap;
    const singleSetWidth = itemFullWidth * originalCards.length;

    const scrollLeft = container.scrollLeft;
    // 5 组卡片：索引 0, 1, 2, 3, 4
    // 滚动到第 4 组时（倒数第 2 组），跳转回第 2 组
    if (scrollLeft > singleSetWidth * 3.5) {
      container.scrollLeft -= singleSetWidth * 2;
    }
    // 滚动到第 0 组时（第 1 组），跳转回第 2 组
    else if (scrollLeft < singleSetWidth * 0.5) {
      container.scrollLeft += singleSetWidth * 2;
    }
  }, [isDragging, originalCards.length]);

  // 滚动处理（使用 RAF 避免重复调用）
  const handleScroll = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      updateTransforms();
      checkInfiniteScroll();
    });
  }, [updateTransforms, checkInfiniteScroll]);

  // 自动滚动逻辑
  const autoScrollLoop = useCallback(() => {
    if (scrollContainerRef.current && !isDragging) {
      scrollAccumulator.current += AUTO_SCROLL_SPEED;
      if (Math.abs(scrollAccumulator.current) >= 1) {
        const step = Math.trunc(scrollAccumulator.current);
        scrollContainerRef.current.scrollLeft += step;
        scrollAccumulator.current -= step;
      }
    }
    autoScrollFrameId.current = requestAnimationFrame(autoScrollLoop);
  }, [isDragging]);

  const stopAutoPlay = useCallback(() => {
    if (autoScrollFrameId.current) {
      cancelAnimationFrame(autoScrollFrameId.current);
      autoScrollFrameId.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay(); // 先停止已有的
    autoScrollLoop();
  }, [autoScrollLoop, stopAutoPlay]);

  // 拖拽事件处理
  const startDrag = (e: React.MouseEvent) => {
    setIsDragging(true);
    stopAutoPlay();
    if (scrollContainerRef.current) {
      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      initialScrollLeft.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const onDrag = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // 参考 Vue 版本的灵敏度
    scrollContainerRef.current.scrollLeft = initialScrollLeft.current - walk;
  };

  const stopDrag = () => {
    setIsDragging(false);
    startAutoPlay();
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    stopAutoPlay();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAutoPlay();
  };

  // 初始化与清理
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('resize', handleScroll);

    // 初始化位置（参考 Vue 版本定位到第 2 组）
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isMobile = window.innerWidth < 768;
      const gap = isMobile ? 16 : 32;
      const cardWidth = isMobile ? window.innerWidth * 0.85 : 360;
      const itemFullWidth = cardWidth + gap;

      const singleSetWidth = itemFullWidth * originalCards.length;
      // 初始化到第 2 组（索引 2，5 组中的中间位置）
      const initialSetOffset = singleSetWidth * 2;

      if (!isMobile) {
        container.scrollLeft = initialSetOffset - window.innerWidth / 2 + cardWidth / 2 + 32;
      } else {
        container.scrollLeft = initialSetOffset;
      }

      // 强制更新一次
      updateTransforms();
      startAutoPlay();
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleScroll);
      stopAutoPlay();
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleScroll, startAutoPlay, stopAutoPlay, updateTransforms, originalCards.length]);

  // 注入样式
  useEffect(() => {
    const styleId = 'scenes-3d-carousel-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .perspective-container {
          perspective: 1000px;
          perspective-origin: center center;
        }
        .perspective-item {
          transform-style: preserve-3d;
          transition: transform 0.1s linear, opacity 0.1s linear;
          will-change: transform;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden relative" id="scenes">
      {/* 背景设计 - 参考 Vue 版本简洁网格风格 */}
      <div className="absolute inset-x-0 top-0 h-[500px] pointer-events-none select-none overflow-hidden z-0">
        <div className="relative w-full h-full flex flex-col items-center pt-[27px] md:pt-[70px]">
          {/* 网格背景 */}
          <div className="absolute inset-0 opacity-70 dark:opacity-30" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(100 116 139 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(100 116 139 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, white, transparent)'
          }}></div>
          {/* 渐变背景覆盖 */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white/80 to-white dark:from-blue-950/30 dark:via-gray-900/80 dark:to-gray-900 -z-10"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6 tracking-tight">
          艺创AI -可以帮你解决什么
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-lg tracking-wide max-w-xl mx-auto">
          艺创AI 无限拓展应用场景
        </p>
      </div>

      {/* 3D 轮播容器 */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className={`flex gap-4 sm:gap-8 overflow-x-auto pb-12 pt-8 md:pb-20 md:pt-10 px-[7.5vw] sm:px-[50vw] perspective-container select-none scroll-auto scrollbar-hide touch-pan-x ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onScroll={handleScroll}
          onMouseDown={startDrag}
          onMouseMove={onDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="shrink-0 w-[85vw] sm:w-[360px] perspective-item will-change-transform"
            >
              <div
                className={`group relative h-auto min-h-[220px] sm:min-h-[260px] rounded-2xl overflow-hidden bg-gradient-to-br ${card.gradient} backdrop-blur-md md:border md:border-white/60 dark:md:border-gray-700/60 md:shadow-lg`}
              >
                {/* Content */}
                <div className="p-6 sm:p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-3 opacity-90">
                        {card.subtitle}
                      </p>
                    )}
                    <div className="w-12 h-1 bg-gray-900/10 dark:bg-gray-100/10 rounded-full mb-4"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>

                  {/* 装饰性数字 */}
                  <div className="absolute bottom-4 right-4 opacity-10 font-black text-6xl select-none pointer-events-none">
                    {index % originalCards.length + 1 < 10 ? `0${index % originalCards.length + 1}` : index % originalCards.length + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 淡入边缘 - 仅桌面端显示 */}
        <div className="hidden md:block absolute inset-y-0 left-0 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none z-10"></div>
        <div className="hidden md:block absolute inset-y-0 right-0 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Scenes;

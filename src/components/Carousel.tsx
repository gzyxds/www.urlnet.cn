'use client'

import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  CreditCard,
  Smartphone,
  QrCode,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

/**
 * 轮播每一项的数据结构
 */
export interface CarouselSlide {
  id: number
  order: number
  title: string
  subtitle?: string
  description: string
  imagePath: string
  imageAlt: string
  primaryButtonText: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

/**
 * 轮播组件属性
 */
export interface CarouselProps {
  autoPlay?: boolean
  interval?: number
  heightClass?: string
  slides?: CarouselSlide[]
  className?: string
}

/**
 * 默认轮播图数据
 */
const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    order: 1,
    title: '用AI为企业赋能',
    subtitle: '提供行业的AI解决方案',
    description: 'AI企业解决方案·引领企业实现数字化、智能化转型技术过硬、私有部署、个性化定制、稳定使用',
    imagePath: '/images/scenarios/carousel5.webp',
    imageAlt: '技术过硬、私有部署、个性化定制、稳定使用',
    primaryButtonText: '立即领取',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  },
  {
    id: 2,
    order: 2,
    title: '全能知识库',
    subtitle: '赋能企业知识管理与数字化转型',
    description: '基于先进的AI技术，提供高度拟真的数字人解决方案，赋能企业知识管理与数字化转型， 让智能服务触手可及',
    imagePath: '/images/scenarios/carousel2.webp',
    imageAlt: '抢先布局先入为主',
    primaryButtonText: '立即咨询',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  },
  {
    id: 3,
    order: 3,
    title: '数字分身',
    subtitle: '基于先进的AI技术，提供高度拟真的数字人解决方案',
    description: '专为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成知识付费、课程、带货、形象宣传、行业干货等口播视频。基于SaaS多开模式的架构设计，支持无限OEM贴牌开通站点',
    imagePath: '/images/scenarios/carousel3.webp',
    imageAlt: '聚合支付平台',
    primaryButtonText: '立即咨询',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  },
   {
    id: 4,
    order: 4,
    title: '聊天绘画',
    subtitle: '基于先进的AI技术，提供高度拟真的数字人解决方案',
    description: '专为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成知识付费、课程、带货、形象宣传、行业干货等口播视频。基于SaaS多开模式的架构设计，支持无限OEM贴牌开通站点',
    imagePath: '/images/scenarios/carousel3.webp',
    imageAlt: '聚合支付平台',
    primaryButtonText: '立即咨询',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  },
  {
    id: 5,
    order: 5,
    title: '论文创作',
    subtitle: '集成最新AI技术，为您提供全方位的智能化服务体验',
    description: '基于先进的AI技术，提供智能化论文写作解决方案，助力学术研究与知识创新',
    imagePath: '/images/scenarios/carousel4.webp',
    imageAlt: '支持自主进件',
    primaryButtonText: '立即领取',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  }
]

/**
 * 底部悬浮卡片数据 - 优化：使用静态数据避免重复创建
 */
const floatingCards = [
  {
    id: 1,
    type: 'feature' as const,
    title: 'AI企业赋能',
    description: '技术过硬、私有部署、个性化定制',
    icon: CreditCard,
    style: 'modern' as const
  },
  {
    id: 2,
    type: 'feature' as const,
    title: '全能知识库',
    description: '赋能数字化转型，让智能服务触手可及',
    icon: Smartphone,
    style: 'rounded' as const
  },
  {
    id: 3,
    type: 'feature' as const,
    title: '数字分身',
    description: '提供高度拟真的数字人解决方案',
    icon: QrCode,
    style: 'gradient' as const
  },
  {
    id: 4,
    type: 'special' as const,
    title: '论文创作',
    description: '基于先进AI技术，提供智能化论文写作解决方案',
    icon: Users,
    style: 'extended' as const
  }
]

/**
 * 优化的样式配置对象 - 使用useMemo缓存
 */
const useStyles = () => useMemo(() => ({
  section: 'relative w-full overflow-hidden touch-pan-y',
  imageContainer: 'absolute inset-0',
  image: 'object-cover will-change-transform',
  titleButton: 'group relative text-left transition-all duration-300 cursor-pointer bg-gradient-to-b from-white to-gray-50 p-2 sm:p-3 lg:p-4 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] hover:-translate-y-1 max-w-[180px] sm:max-w-[200px] lg:max-w-[250px]',
  titleButtonActive: 'bg-gradient-to-b from-white to-gray-50 border-white -translate-y-1 shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]',
  content: 'absolute inset-0 z-10 flex items-center'
}), [])

/**
 * 轮播图片组件 - 使用memo优化性能，添加图片预加载
 */
const CarouselImage = memo(({ slide, isActive, index, active }: {
  slide: CarouselSlide
  isActive: boolean
  index: number
  active: number
}) => {

  return (
    <div
      className={`absolute inset-0 ${isActive ? 'block' : 'hidden'}`}
      style={{ display: Math.abs(index - active) > 1 ? 'none' : isActive ? 'block' : 'none' }}
    >
      <img
        src={slide.imagePath}
        alt={slide.imageAlt}
        className="object-cover will-change-transform w-full h-full"
        loading={isActive ? 'eager' : 'lazy'}
      />
    </div>
  )
})

CarouselImage.displayName = 'CarouselImage'

/**
 * 标题按钮组件 - 优化：减少不必要的重渲染
 */
const TitleButton = memo(({ slide, isActive, onClick, progress, interval }: {
  slide: CarouselSlide
  isActive: boolean
  onClick: () => void
  progress: number
  interval: number
}) => {
  const styles = useStyles()

  return (
    <button
      onClick={onClick}
      className={cn(
        styles.titleButton,
        isActive && styles.titleButtonActive,
        'lg:hover:scale-105 lg:hover:shadow-2xl'
      )}
      aria-label={`切换到 ${slide.title}`}
    >
      {/* 主要内容区域 */}
      <div className="relative">
        {/* 标题行 - 数字序号与标题并排 */}
        <div className="flex items-start space-x-3 mb-1">
          {/* 数字序号 */}
          <span className={cn(
            "text-xs font-medium mt-0.5 flex-shrink-0 transition-colors duration-300",
            isActive
              ? "text-blue-600"
              : "text-gray-400"
          )}>
            {String(slide.order).padStart(2, '0')}
          </span>

          {/* 标题 */}
          <h3 className={cn(
            "text-xs sm:text-sm lg:text-base font-bold leading-tight transition-colors duration-300 line-clamp-2 flex-1 min-w-0",
            isActive ? "text-gray-900" : "text-gray-800 group-hover:text-gray-900"
          )}>
            {slide.title}
          </h3>
        </div>

        {/* 描述行 - 靠左对齐 */}
        {slide.subtitle && (
          <p className={cn(
            "text-xs leading-relaxed line-clamp-1 transition-colors duration-300 truncate",
            isActive ? "text-gray-600" : "text-gray-500 group-hover:text-gray-600"
          )}>
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* 进度条 */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0">
          <div
            key={progress}
            className="h-px bg-blue-500"
            style={{
              width: '0%',
              animation: progress > 0 ? `progressBar ${interval}ms linear forwards` : 'none'
            }}
          />
        </div>
      )}

      {/* 右侧指示条 */}
      <div className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 transition-all duration-300",
        isActive ? "opacity-100" : "opacity-0"
      )} />
    </button>
  )
})

TitleButton.displayName = 'TitleButton'

/**
 * 悬浮卡片组件 - 优化：应用腾讯边框样式设计
 */
const FloatingCard = memo(({ card }: { card: typeof floatingCards[0] }) => {
  const Icon = card.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        // 腾讯样式：渐变背景 + 白色边框 + 特殊阴影 + 直角设计
        "relative overflow-hidden cursor-pointer",
        "bg-gradient-to-b from-[#f3f5f8] to-white",
        "border-2 border-white", // 移除圆角，使用直角设计
        "shadow-[0_6px_20px_0_#dce0e8]",
        "hover:shadow-[0_8px_25px_0_#dce0e8]",
        "transition-all duration-300",
        "w-full",
        // 移动端固定高度
        "h-20 sm:h-24",
        // 平板端固定高度
        "md:h-28",
        // PC端弹性布局，设置最小高度
        "lg:min-h-[120px] lg:flex-1",
        card.style === 'extended' && "lg:flex-[1.5]"
      )}
    >
      {/* 腾讯样式：左对齐布局，移动端优化内边距 */}
      <div className="h-full flex flex-col justify-center items-start pl-3 md:pl-6 pr-2 md:pr-3 py-2 md:py-3 space-y-1 md:space-y-2">
        <div className="flex items-center space-x-2 md:space-x-3 w-full">
          <div className={cn(
             "flex items-center justify-center w-6 h-6 md:w-8 md:h-8 sm:w-10 sm:h-10 rounded-md flex-shrink-0",
             card.type === 'special' ? 'bg-blue-600' : 'bg-blue-50'
           )}>
            <Icon className={cn(
              "w-3 h-3 md:w-4 md:h-4 sm:w-5 sm:h-5",
              card.type === 'special' ? 'text-white' : 'text-blue-600'
            )} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={cn(
              "font-semibold text-xs md:text-sm sm:text-base lg:text-lg truncate",
              card.type === 'special' ? 'text-blue-600' : 'text-gray-900'
            )}>
              {card.title}
            </h3>
          </div>
        </div>

        <p className={cn(
          "text-xs md:text-sm sm:text-base leading-relaxed",
          "line-clamp-2 sm:line-clamp-3",
          "w-full text-left",
          card.type === 'special' ? 'text-blue-500' : 'text-gray-600'
        )}>
          {card.description}
        </p>
      </div>
    </motion.div>
  )
})

FloatingCard.displayName = 'FloatingCard'

/**
 * 优化后的轮播组件 - 主要性能优化：
 * 1. 使用useMemo缓存计算结果
 * 2. 使用useCallback优化事件处理
 * 3. 减少不必要的DOM操作
 * 4. 优化图片加载策略
 * 5. 简化样式计算
 */
const Carousel = memo(function Carousel({
  autoPlay = true,
  interval = 10000,
  heightClass = 'h-[520px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px]',
  slides: propSlides,
  className
}: CarouselProps) {
  // 优化：只在首次渲染时添加样式，避免重复操作
  useEffect(() => {
    const styleId = 'carousel-progress-animation'
    if (document.getElementById(styleId)) return

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      @keyframes progressBar {
        from { width: 0%; }
        to { width: 100%; }
      }
    `
    document.head.appendChild(style)

    return () => {
      const existingStyle = document.getElementById(styleId)
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])

  // 优化：使用useMemo缓存slides排序结果
  const slides = useMemo(() =>
    (propSlides || defaultSlides).sort((a, b) => a.order - b.order),
    [propSlides]
  )

  const [active, setActive] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isUserInteracting = useRef(false)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const progressResetTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastInteractionTime = useRef<number>(0)

  // 触摸滑动状态
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // 优化：使用useMemo缓存当前slide
  const currentSlide = useMemo(() => slides[active], [slides, active])

  // 重置进度条的函数
  const resetProgress = useCallback(() => {
    setProgressKey(prev => prev + 1)
  }, [])

  // 统一的定时器控制函数
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || isUserInteracting.current) return

    // 清理现有定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // 重置进度条
    resetProgress()

    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length)
      setProgressKey(prev => prev + 1)
    }, interval)
  }, [autoPlay, interval, slides.length, resetProgress])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = null
    }
    if (progressResetTimeoutRef.current) {
      clearTimeout(progressResetTimeoutRef.current)
      progressResetTimeoutRef.current = null
    }
  }, [])

  const pauseAutoPlay = useCallback((resumeDelay = 0) => {
    stopAutoPlay()
    isUserInteracting.current = true

    // 立即重置进度条
    resetProgress()

    if (resumeDelay > 0 && autoPlay) {
      resumeTimeoutRef.current = setTimeout(() => {
        isUserInteracting.current = false
        startAutoPlay()
      }, resumeDelay)
    }
  }, [stopAutoPlay, startAutoPlay, autoPlay, resetProgress])

  const resumeAutoPlay = useCallback(() => {
    isUserInteracting.current = false
    if (autoPlay) {
      // 延迟一小段时间再开始，确保UI更新完成
      progressResetTimeoutRef.current = setTimeout(() => {
        startAutoPlay()
      }, 100)
    }
  }, [startAutoPlay, autoPlay])

  // 防抖的用户交互检测
  const handleUserInteraction = useCallback((resumeDelay = 2000) => {
    const now = Date.now()
    const timeSinceLastInteraction = now - lastInteractionTime.current
    lastInteractionTime.current = now

    // 防抖：如果在很短时间内有多次交互，延长恢复时间
    const adjustedDelay = timeSinceLastInteraction < 500 && timeSinceLastInteraction > 0
      ? resumeDelay + 1000
      : resumeDelay

    pauseAutoPlay(adjustedDelay)
  }, [pauseAutoPlay])

  // 优化：使用useCallback避免重复创建函数
  const navigate = useCallback((direction: 'next' | 'prev') => {
    setActive(prev => {
      if (direction === 'next') {
        return (prev + 1) % slides.length
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1
      }
    })

    // 使用防抖机制处理用户交互
    handleUserInteraction(2000)
  }, [slides.length, handleUserInteraction])

  const handleTitleClick = useCallback((index: number) => {
    setActive(index)

    // 使用防抖机制处理用户交互
    handleUserInteraction(3000)
  }, [handleUserInteraction])

  // 优化：自动播放逻辑，使用统一的控制函数
  useEffect(() => {
    if (autoPlay) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
  }, [autoPlay, startAutoPlay, stopAutoPlay])

  // 组件卸载时的清理
  useEffect(() => {
    return () => {
      stopAutoPlay()
    }
  }, [stopAutoPlay])

  // 键盘导航
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        navigate('prev')
        break
      case 'ArrowRight':
        e.preventDefault()
        navigate('next')
        break
      case 'Home':
        e.preventDefault()
        handleTitleClick(0)
        break
      case 'End':
        e.preventDefault()
        handleTitleClick(slides.length - 1)
        break
      case ' ':
      case 'Escape':
        e.preventDefault()
        // 暂停/恢复自动播放
        if (intervalRef.current) {
          pauseAutoPlay()
        } else if (autoPlay) {
          resumeAutoPlay()
        }
        break
    }
  }, [navigate, handleTitleClick, slides.length, pauseAutoPlay, resumeAutoPlay, autoPlay])

  // 键盘事件监听
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  // 优化：鼠标悬停处理
  const handleMouseEnter = useCallback(() => {
    pauseAutoPlay()
  }, [pauseAutoPlay])

  const handleMouseLeave = useCallback(() => {
    resumeAutoPlay()
  }, [resumeAutoPlay])

  // 触摸事件处理 - 移动端滑动支持
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)

    // 暂停自动播放
    pauseAutoPlay()
  }, [pauseAutoPlay])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart) return
    setTouchEnd(e.targetTouches[0].clientX)
  }, [touchStart])

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) {
      // 如果没有滑动，立即恢复自动播放
      resumeAutoPlay()
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      navigate('next')
    } else if (isRightSwipe) {
      navigate('prev')
    } else {
      // 如果滑动距离不够，立即恢复自动播放
      resumeAutoPlay()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }, [touchStart, touchEnd, navigate, resumeAutoPlay])

  return (
    <div className="relative">
      <div
        className={cn(
          'relative overflow-hidden bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          heightClass,
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
        tabIndex={0}
        role="region"
        aria-label="轮播图片展示"
        aria-live="polite"
        aria-atomic="true"
      >
       {/* 背景图片 - 优化：只渲染当前和相邻图片 */}
       {slides.map((slide, index) => (
         <CarouselImage
           key={slide.id}
           slide={slide}
           isActive={index === active}
           index={index}
           active={active}
         />
       ))}

        {/* 轮播内容叠加层 */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row">

              {/* 左侧：标题列表 - 平板端显示简化版 */}
              <div className="hidden md:block w-48 md:w-56 lg:w-72 xl:w-80 flex-shrink-0">
                <div className="flex flex-col space-y-4">
                   {slides.map((slide, index) => (
                     <TitleButton
                       key={slide.id}
                       slide={slide}
                       isActive={index === active}
                       onClick={() => handleTitleClick(index)}
                       progress={index === active ? progressKey : 0}
                       interval={interval}
                     />
                   ))}
                 </div>
              </div>

              {/* 轮播内容 */}
              <div className="flex-1 max-w-3xl mt-6 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 px-2 sm:px-0">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-blue-600 leading-tight mb-4 sm:mb-5 md:mb-6 h-16 sm:h-auto flex items-center">
                  {currentSlide.title}
                </h1>

                {currentSlide.subtitle && (
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-black leading-relaxed mb-5 sm:mb-6 md:mb-7">
                    {currentSlide.subtitle}
                  </h2>
                )}

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-semibold leading-relaxed max-w-2xl mb-7 sm:mb-8 md:mb-10">
                  {currentSlide.description}
                </p>

                {/* 操作按钮组 */}
                <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-0">
                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5">
                    <span className="text-xs sm:text-sm lg:text-base">查看演示</span>
                  </button>
                  <button className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 lg:px-6 py-2 lg:py-3 bg-white text-gray-600 font-medium hover:bg-gray-50 transition-colors duration-300 shadow hover:shadow-md transform hover:-translate-y-0.5">
                    <span className="text-xs sm:text-sm lg:text-base">联系客服</span>
                  </button>
                </div>

                {/* 移动端导航指示器 */}
                <div className="md:hidden flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleTitleClick(index)}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300",
                        index === active
                          ? "bg-blue-600 scale-125"
                          : "bg-white/50 hover:bg-white/70"
                      )}
                      aria-label={`切换到第 ${index + 1} 张图片`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 桌面端导航箭头 */}
            <div className="hidden lg:block">
              {/* 左箭头 */}
              <button
                onClick={() => navigate('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                aria-label="上一张图片"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* 右箭头 */}
              <button
                onClick={() => navigate('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                aria-label="下一张图片"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* 桌面端进度指示器 */}
              <div className="absolute bottom-4 right-4 z-30">
                <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-2">
                  <span className="text-white text-sm font-medium">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-0.5 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-300 ease-out"
                      style={{ width: `${((active + 1) / slides.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-white/70 text-sm">
                    {String(slides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* 底部悬浮卡片 - 多端适配优化 */}
    <div className="absolute bottom-0 left-0 right-0 z-50 transform translate-y-1/2">
      {/* PC端：水平排列的4个卡片 */}
      <div className="hidden lg:flex justify-center items-stretch gap-4 px-4 container mx-auto">
        {floatingCards.map((card) => (
          <FloatingCard key={card.id} card={card} />
        ))}
      </div>

      {/* 平板端：2x2网格布局 */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-3 px-4 container mx-auto max-w-2xl">
        {floatingCards.map((card) => (
          <FloatingCard key={card.id} card={card} />
        ))}
      </div>

      {/* 移动端：2x2网格布局 */}
      <div className="md:hidden px-3">
        <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
          {floatingCards.map((card) => (
            <FloatingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;

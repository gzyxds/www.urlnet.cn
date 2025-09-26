"use client";

import React, { useState, useCallback, useRef, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  ShoppingCart,
  Users,
  Building,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  MessageSquare,
  Clock,
  Target,
  Lightbulb,
  Settings,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

// 类型定义
type ScenarioType = 'ecommerce' | 'enterprise' | 'education' | 'government' | 'finance' | 'healthcare';

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ScenarioConfig {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: React.ComponentType<{ className?: string }>;
  features: Feature[];
}

// 场景配置数据 - 使用useMemo优化
const createScenarioConfig = (): Record<ScenarioType, ScenarioConfig> => ({
  ecommerce: {
    title: '电商零售解决方案',
    subtitle: '智能电商',
    description: '为电商平台提供智能客服、商品推荐、订单管理等全方位AI解决方案，提升用户体验和转化率。',
    image: '/images/scenarios/ecommerce.png',
    imageAlt: '电商零售解决方案展示图',
    icon: ShoppingCart,
    features: [
      { title: '智能客服', description: '24/7自动回复，提升服务效率', icon: MessageSquare },
      { title: '商品推荐', description: '个性化推荐算法，提高转化率', icon: Target },
      { title: '订单管理', description: '自动化订单处理，减少人工成本', icon: BarChart3 },
      { title: '库存优化', description: '智能库存预测，降低库存成本', icon: Database }
    ]
  },
  enterprise: {
    title: '企业级智能办公',
    subtitle: '企业办公',
    description: '为企业提供智能文档处理、会议助手、项目管理等办公自动化解决方案，提升工作效率。',
    image: '/images/scenarios/finance.png',
    imageAlt: '企业级智能办公展示图',
    icon: Building,
    features: [
      { title: '文档智能', description: '自动生成和处理各类文档', icon: Lightbulb },
      { title: '会议助手', description: '智能会议记录和任务分配', icon: Users },
      { title: '项目管理', description: 'AI驱动的项目进度跟踪', icon: Settings },
      { title: '数据分析', description: '智能业务数据分析报告', icon: BarChart3 }
    ]
  },
  education: {
    title: '智慧教育平台',
    subtitle: '教育培训',
    description: '为教育机构提供个性化学习、智能评测、课程推荐等教育科技解决方案。',
    image: '/images/scenarios/education.png',
    imageAlt: '智慧教育平台展示图',
    icon: GraduationCap,
    features: [
      { title: '个性化学习', description: '根据学习进度定制课程', icon: Target },
      { title: '智能评测', description: '自动批改和学习分析', icon: BarChart3 },
      { title: '课程推荐', description: 'AI推荐最适合的学习路径', icon: Lightbulb },
      { title: '学习跟踪', description: '实时监控学习效果', icon: Clock }
    ]
  },
  government: {
    title: '政务服务数字化',
    subtitle: '政务服务',
    description: '为政府部门提供智能政务、公共服务、数据治理等数字化转型解决方案。',
    image: '/images/scenarios/gaming.png',
    imageAlt: '政务服务数字化展示图',
    icon: Globe,
    features: [
      { title: '智能政务', description: '自动化政务流程处理', icon: Settings },
      { title: '公共服务', description: '24/7在线政务服务', icon: Users },
      { title: '数据治理', description: '政务数据统一管理', icon: Database },
      { title: '安全保障', description: '政务信息安全防护', icon: Shield }
    ]
  },
  finance: {
    title: '金融科技创新',
    subtitle: '金融服务',
    description: '为金融机构提供风险控制、智能投顾、客户服务等金融科技解决方案。',
    image: '/images/scenarios/finance.png',
    imageAlt: '金融科技创新展示图',
    icon: Briefcase,
    features: [
      { title: '风险控制', description: 'AI驱动的风险评估模型', icon: Shield },
      { title: '智能投顾', description: '个性化投资建议服务', icon: Target },
      { title: '客户服务', description: '智能金融客服系统', icon: MessageSquare },
      { title: '合规监管', description: '自动化合规检查', icon: Lock }
    ]
  },
  healthcare: {
    title: '智慧医疗健康',
    subtitle: '医疗健康',
    description: '为医疗机构提供智能诊断、健康管理、医疗数据分析等医疗科技解决方案。',
    image: '/images/scenarios/media.png',
    imageAlt: '智慧医疗健康展示图',
    icon: Users,
    features: [
      { title: '智能诊断', description: 'AI辅助医疗诊断系统', icon: Zap },
      { title: '健康管理', description: '个人健康数据跟踪', icon: Clock },
      { title: '数据分析', description: '医疗大数据智能分析', icon: BarChart3 },
      { title: '远程医疗', description: '在线医疗咨询服务', icon: Cloud }
    ]
  }
});

// 优化的动画配置
const ANIMATION_CONFIG = {
  container: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  },
  card: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  },
  feature: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  }
} as const;

/**
 * HotProducts组件 - 热门产品展示
 * 功能：展示不同场景的AI解决方案，支持标签切换和响应式设计
 * 优化：减少重渲染，优化动画性能，精简代码结构
 */
const HotProducts: React.FC = memo(() => {
  // 状态管理
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('ecommerce');
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Refs
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 使用useMemo优化配置数据
  const scenarioConfig = useMemo(() => createScenarioConfig(), []);
  const scenarioKeys = useMemo(() => Object.keys(scenarioConfig) as ScenarioType[], [scenarioConfig]);
  const currentScenario = useMemo(() => scenarioConfig[activeScenario], [scenarioConfig, activeScenario]);
  const IconComponent = useMemo(() => currentScenario.icon, [currentScenario.icon]);

  /**
   * 处理场景切换
   */
  const handleScenarioChange = useCallback((scenario: ScenarioType) => {
    if (scenario === activeScenario) return;
    setActiveScenario(scenario);
    setImageLoading(true);
    setImageError(false);
  }, [activeScenario]);

  /**
   * 处理图片加载完成
   */
  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  /**
   * 处理图片加载错误
   */
  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  /**
   * 滚动到指定方向
   */
  const scrollTo = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200;
    const newScrollLeft = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  }, []);

  /**
   * 更新滚动箭头显示状态
   */
  const updateScrollArrows = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  /**
   * 事件追踪
   */
  const trackEvent = useCallback((action: string, label: string) => {
    console.log(`Event tracked: ${action} - ${label}`);
  }, []);

  // 监听滚动和窗口大小变化
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => updateScrollArrows();
    const handleResize = () => updateScrollArrows();

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // 初始化箭头状态
    updateScrollArrows();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateScrollArrows]);

  // 场景切换时重置图片状态
  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [activeScenario]);

  /**
   * 渲染标签项组件 - 优化版本
   */
  const renderTabItem = useCallback((scenario: ScenarioType, layoutId: string, className: string) => {
    const TabIcon = scenarioConfig[scenario].icon;
    const isActive = activeScenario === scenario;

    return (
      <motion.div
        key={scenario}
        className={`${className} ${isActive ? 'text-[#0055ff]' : 'text-gray-600 hover:text-gray-900'}`}
        onClick={() => handleScenarioChange(scenario)}
        aria-label={`切换到${scenarioConfig[scenario].title}场景`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        data-monitor-click-id={`tab-${scenario}`}
      >
        <TabIcon className={`h-4 w-4 md:h-5 md:w-5 transition-colors duration-300 ${
          isActive ? 'text-[#0055ff]' : 'text-gray-500'
        }`} />
        <span>{scenarioConfig[scenario].title}</span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055ff] rounded-full"
            layoutId={layoutId}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    );
  }, [activeScenario, handleScenarioChange, scenarioConfig]);

  /**
   * 渲染滚动箭头 - 优化版本
   */
  const renderScrollArrow = useCallback((direction: 'left' | 'right', show: boolean) => {
    if (!show) return null;

    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    const position = direction === 'left' ? 'left-0' : 'right-0';

    return (
      <div
        onClick={() => scrollTo(direction)}
        className={`absolute ${position} top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 md:p-3 text-gray-400 hover:text-[#0055ff] transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95`}
        aria-label={`向${direction === 'left' ? '左' : '右'}滚动`}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      </div>
    );
  }, [scrollTo]);

  return (
    <motion.section
      {...ANIMATION_CONFIG.container}
      className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
      data-monitor-comp-id="c854860"
    >
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* 页面标题区域 */}
        <div className="text-center mt-28 sm:mt-32 md:mt-36 lg:mt-32 xl:mt-36 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 tracking-tight text-gray-900">
            场景和解决方案
          </h2>
          <div className="w-12 sm:w-14 md:w-16 h-0.5 sm:h-0.5 md:h-1 bg-[#0055ff] mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 text-gray-600">
            丰富的应用场景和解决方案，满足多种业务需求
          </p>
        </div>

        {/* 移动端标签导航区域 */}
        <div className="block md:hidden mb-4 sm:mb-6 md:mb-8 px-1 sm:px-2 md:px-4">
          <div className="relative">
            {renderScrollArrow('left', showLeftArrow)}
            {renderScrollArrow('right', showRightArrow)}

            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-3 sm:px-4 py-2 sm:py-3"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {scenarioKeys.map((scenario) => {
                const TabIcon = scenarioConfig[scenario].icon;
                const isActive = activeScenario === scenario;

                return (
                  <motion.div
                    key={scenario}
                    className={`flex-shrink-0 px-2 py-2 sm:px-3 sm:py-3 cursor-pointer transition-all duration-300 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap relative flex items-center space-x-1.5 ${
                      isActive ? 'text-[#0055ff]' : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => handleScenarioChange(scenario)}
                    aria-label={`切换到${scenarioConfig[scenario].title}场景`}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    data-monitor-click-id={`mobile-tab-${scenario}`}
                  >
                    <TabIcon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors duration-300 ${
                      isActive ? 'text-[#0055ff]' : 'text-gray-500'
                    }`} />
                    <span>{scenarioConfig[scenario].title}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055ff] rounded-full"
                        layoutId="activeMobileTab"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* PC端全屏标签导航区域 */}
      <div className="hidden md:block relative z-10 mb-4 sm:mb-6 md:mb-8">
        <div className="w-full bg-gradient-to-r from-gray-50/50 via-white to-gray-50/50 py-4 md:py-6 lg:py-8"
             style={{
               marginLeft: 'calc(-50vw + 50%)',
               marginRight: 'calc(-50vw + 50%)',
               width: '100vw'
             }}>
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex justify-center space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
              {scenarioKeys.map((scenario) =>
                renderTabItem(
                  scenario,
                  "activeTab",
                  "px-2 py-3 md:px-3 md:py-3 lg:px-3 lg:py-4 xl:px-3 xl:py-4 cursor-pointer transition-all duration-300 text-sm md:text-sm lg:text-base xl:text-base font-medium tracking-wide relative flex items-center space-x-2"
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* 产品详情卡片 */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScenario}
              {...ANIMATION_CONFIG.card}
              className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none flex flex-col lg:flex-row"
            >
              {/* 左侧内容区域 */}
              <div className="w-full lg:w-1/2 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[350px]">
                {/* 产品标题区域 */}
                <div className="mb-4 sm:mb-6">
                  <motion.span
                    className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-blue-100 shadow-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-blue-600" />
                    {currentScenario.subtitle}
                  </motion.span>

                  <motion.h3
                    className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {currentScenario.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {currentScenario.description}
                  </motion.p>
                </div>

                {/* 功能特性列表 */}
                <div className="mb-4 sm:mb-5">
                  <motion.h4
                    className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div className="w-1 h-4 sm:h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-2 sm:mr-3"></div>
                    核心功能特性
                  </motion.h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {currentScenario.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-2 sm:space-x-2.5 p-2 sm:p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 group border border-transparent hover:border-blue-100"
                          {...ANIMATION_CONFIG.feature}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors duration-300">
                              <FeatureIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs sm:text-xs font-semibold text-gray-900 mb-0.5 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                              {feature.title}
                            </h5>
                            <p className="text-xs text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* 操作按钮区域 */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-2 sm:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <motion.button
                    className="flex-1 sm:flex-none bg-blue-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group shadow-sm"
                    onClick={() => trackEvent('PrimaryAction', currentScenario.title)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center">
                      立即咨询
                      <ArrowRight className="ml-1 sm:ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </span>
                  </motion.button>

                  <motion.button
                    className="flex-1 sm:flex-none bg-white border border-blue-600 text-blue-600 px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center group shadow-sm"
                    onClick={() => trackEvent('SecondaryAction', currentScenario.title)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center">
                      查看详情
                      <ChevronRight className="ml-1 sm:ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </span>
                  </motion.button>
                </motion.div>
              </div>

              {/* 右侧媒体展示区域 */}
              <div className="w-full lg:w-1/2 relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden flex items-center justify-center">
                {imageLoading && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-100/80 animate-pulse flex items-center justify-center backdrop-blur-sm">
                    <div className="text-blue-600 text-xs sm:text-sm font-medium">加载中...</div>
                  </div>
                )}

                {imageError ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 mx-auto mb-2 opacity-60" />
                      <div className="text-xs sm:text-sm font-medium">图片加载失败</div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
                    <img
                      src={currentScenario.image}
                      alt={currentScenario.imageAlt}
                      className="w-full h-auto object-contain drop-shadow-lg max-w-full max-h-full"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      loading="lazy"
                      style={{
                        filter: 'drop-shadow(0 4px 15px rgba(59, 130, 246, 0.1)) drop-shadow(0 10px 25px rgba(59, 130, 246, 0.15))'
                      }}
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20 pointer-events-none"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full opacity-40"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 产品特色说明 */}
        <div className="text-center mt-4 sm:mt-6 md:mt-8">
          <div className="inline-flex items-center px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-white rounded-full text-xs sm:text-sm text-gray-600 shadow-sm border border-gray-200">
            <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 mr-1 sm:mr-1.5 md:mr-2 text-[#0055ff]" />
            <span className="whitespace-nowrap">专业的AI解决方案，助力企业数字化转型</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

HotProducts.displayName = 'HotProducts';

export default HotProducts;

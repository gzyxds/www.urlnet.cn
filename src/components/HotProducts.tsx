"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  Users, 
  Bot, 
  PenTool, 
  Tv, 
  ChevronLeft, 
  ChevronRight as ChevronRightIcon, 
  Star, 
  TrendingUp, 
  Clock, 
  Shield 
} from "lucide-react";

/**
 * 场景类型定义
 */
type ScenarioType = 'virtualIP' | 'digitalEmployee' | 'contentCreation' | 'virtualLive';

/**
 * 场景配置接口定义
 */
interface ScenarioConfig {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  features: Array<{
    title: string;
    description: string;
    icon: React.ComponentType<any>;
  }>;
  image: string;
  imageAlt: string;
}

/**
 * 场景配置数据 - 包含所有产品场景的详细信息
 */
const scenarioConfig: Record<ScenarioType, ScenarioConfig> = {
  virtualIP: {
    title: '数字分身',
    subtitle: '虚拟IP解决方案',
    description: '面向文化传播、影视内容等多个行业，帮助打造虚拟IP，赋能品牌营销，提升品牌心智。',
    icon: Users,
    features: [
      { title: '品牌代言', description: '创建专属品牌虚拟形象，提升品牌辨识度和亲和力', icon: Star },
      { title: '内容创作', description: '为影视、游戏、动漫等行业提供高质量虚拟角色', icon: PenTool },
      { title: '社交互动', description: '打造虚拟社交形象，增强用户互动体验', icon: Users },
      { title: '实时渲染', description: '高质量实时3D渲染技术，呈现逼真虚拟形象', icon: TrendingUp }
    ],
    image: '/product/saas.svg',
    imageAlt: '虚拟IP应用场景'
  },
  digitalEmployee: {
    title: '全能知识库',
    subtitle: '数字员工解决方案',
    description: '为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。',
    icon: Bot,
    features: [
      { title: '智能客服', description: '7×24小时在线服务，快速响应客户需求', icon: Clock },
      { title: '销售助手', description: '智能推荐产品，提高转化率和客户满意度', icon: TrendingUp },
      { title: '培训讲师', description: '提供标准化培训内容，确保培训质量一致性', icon: Users },
      { title: '数据分析', description: '智能数据分析与报告生成，辅助决策制定', icon: Bot }
    ],
    image: '/product/work.svg',
    imageAlt: '数字员工应用场景'
  },
  contentCreation: {
    title: '聊天绘画',
    subtitle: '内容创作解决方案',
    description: '为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。',
    icon: PenTool,
    features: [
      { title: '视频脚本', description: '快速生成专业视频脚本，提高内容创作效率', icon: Tv },
      { title: '营销文案', description: '生成吸引人的营销文案，提高转化率', icon: TrendingUp },
      { title: '多语言翻译', description: '支持多语言内容创作和翻译，拓展全球市场', icon: Users },
      { title: 'AI绘画', description: '智能图像生成与编辑，创造独特视觉内容', icon: PenTool }
    ],
    image: '/product/ai.svg',
    imageAlt: '内容创作应用场景'
  },
  virtualLive: {
    title: '论文创作',
    subtitle: '虚拟直播解决方案',
    description: '为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。',
    icon: Tv,
    features: [
      { title: '电商直播', description: '24小时不间断直播，提高商品曝光和销售', icon: Clock },
      { title: '新闻播报', description: '实时生成新闻内容，提供专业播报服务', icon: Shield },
      { title: '活动主持', description: '为线上活动提供专业主持服务，增强互动体验', icon: Users },
      { title: '多平台同步', description: '支持多个直播平台同时推流，扩大覆盖面', icon: TrendingUp }
    ],
    image: '/product/lw.svg',
    imageAlt: '虚拟直播应用场景'
  }
};

/**
 * 热门产品组件 - 展示不同场景的产品解决方案
 * 支持多端响应式设计，包含标签导航和产品详情展示
 */
const HotProducts = React.memo(() => {
  // 状态管理
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('virtualIP');
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  
  // 引用管理
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 当前场景数据
  const currentScenario = scenarioConfig[activeScenario];
  const IconComponent = currentScenario.icon;
  const scenarioKeys = Object.keys(scenarioConfig) as ScenarioType[];

  /**
   * 图片加载成功处理
   */
  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
    setImageError(false);
  }, []);

  /**
   * 图片加载失败处理
   */
  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  /**
   * 场景切换处理
   */
  const handleScenarioChange = useCallback((scenario: ScenarioType) => {
    setActiveScenario(scenario);
  }, []);

  /**
   * 检查滚动位置并更新箭头显示状态
   */
  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  /**
   * 滚动控制函数
   */
  const scrollTo = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 200;
    const scrollLeft = direction === 'left' ? -scrollAmount : scrollAmount;
    container.scrollBy({ left: scrollLeft, behavior: 'smooth' });
  }, []);

  /**
   * 事件追踪函数
   */
  const trackEvent = useCallback((action: string, label: string) => {
    if (typeof window !== 'undefined' && window._hmt) {
      window._hmt.push(['_trackEvent', 'HotProducts', action, label]);
    }
  }, []);

  // 监听滚动事件
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    checkScrollPosition();
    container.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, [checkScrollPosition]);

  // 场景切换时重置图片状态
  useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [activeScenario]);

  /**
   * 渲染标签项组件
   */
  const renderTabItem = useCallback((scenario: ScenarioType, layoutId: string, className: string) => {
    const TabIcon = scenarioConfig[scenario].icon;
    const isActive = activeScenario === scenario;
    
    return (
      <motion.div
        key={scenario}
        className={`${className} ${
          isActive ? 'text-[#0055ff]' : 'text-gray-600 hover:text-gray-900'
        }`}
        onClick={() => handleScenarioChange(scenario)}
        aria-label={`切换到${scenarioConfig[scenario].title}场景`}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        data-monitor-click-id={`tab-${scenario}`}
      >
        <TabIcon className={`transition-colors duration-300 ${
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
  }, [activeScenario, handleScenarioChange]);

  /**
   * 渲染滚动箭头
   */
  const renderScrollArrow = useCallback((direction: 'left' | 'right', show: boolean) => {
    if (!show) return null;
    
    const Icon = direction === 'left' ? ChevronLeft : ChevronRightIcon;
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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
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
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 tracking-tight text-gray-900">
            热门产品
          </h2>
          <div className="w-12 sm:w-14 md:w-16 h-0.5 sm:h-0.5 md:h-1 bg-[#0055ff] mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 text-gray-600">
            丰富的应用场景和解决方案，满足多种业务需求
          </p>
        </div>

        {/* 场景标签导航区域 */}
        <div className="mb-4 sm:mb-6 md:mb-8 px-1 sm:px-2 md:px-4">
          {/* 桌面端标签 */}
          <div className="hidden lg:flex justify-center space-x-8 xl:space-x-12 relative">
            {scenarioKeys.map((scenario) => 
              renderTabItem(
                scenario, 
                "activeTab", 
                "px-2 py-3 xl:px-3 xl:py-4 cursor-pointer transition-all duration-300 text-sm xl:text-base font-medium tracking-wide relative flex items-center space-x-2"
              )
            )}
          </div>

          {/* 移动端标签 */}
          <div className="block md:hidden relative">
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

          {/* 平板端标签 */}
          <div className="hidden md:block lg:hidden">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {scenarioKeys.map((scenario) => 
                renderTabItem(
                  scenario, 
                  "activeTabletTab", 
                  "px-3 py-3 md:px-4 md:py-4 cursor-pointer transition-all duration-300 text-sm md:text-base font-medium tracking-wide relative flex items-center space-x-2"
                )
              )}
            </div>
          </div>
        </div>

        {/* 产品详情卡片 */}
        <div className="w-full">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row"
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
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
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

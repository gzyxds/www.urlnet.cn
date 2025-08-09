"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Users, Bot, PenTool, Tv, ChevronLeft, ChevronRight as ChevronRightIcon, Star, TrendingUp, Clock, Shield } from "lucide-react";

// 定义场景类型
type ScenarioType = 'virtualIP' | 'digitalEmployee' | 'contentCreation' | 'virtualLive';

// 场景配置数据 - 优化后的配置，包含更丰富的功能卡片信息
const scenarioConfig = {
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
    video: 'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4',
    imageAlt: '虚拟IP应用场景',
    cardTitle: '虚拟IP解决方案',
    cardSubtitle: '打造专属品牌虚拟形象',
    stats: { users: '1,234', conversion: '24.5%', satisfaction: '98%', growth: '+156%' }
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
    imageAlt: '数字员工应用场景',
    cardTitle: '数字员工解决方案',
    cardSubtitle: '智能高效的业务助手',
    stats: { efficiency: '85%', cost: '62.3%', response: '< 1s', uptime: '99.9%' }
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
    imageAlt: '内容创作应用场景',
    cardTitle: '内容创作解决方案',
    cardSubtitle: '高效智能的内容生产',
    stats: { speed: '10倍', quality: '75%', languages: '50+', accuracy: '95%' }
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
    imageAlt: '虚拟直播应用场景',
    cardTitle: '虚拟直播解决方案',
    cardSubtitle: '智能高效的直播助手',
    stats: { viewers: '5.2万', engagement: '32.7%', uptime: '24/7', platforms: '8+' }
  }
};

const HotProducts = React.memo(() => {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>('virtualIP');
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [, setIsMobile] = useState<boolean>(false);

  const currentScenario = scenarioConfig[activeScenario];
  const IconComponent = currentScenario.icon;

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 处理图片加载状态
  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  // 处理场景切换
  const handleScenarioChange = useCallback((scenario: ScenarioType) => {
    setActiveScenario(scenario);
  }, []);

  // 检查滚动位置并更新箭头显示状态
  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  // 滚动到指定位置
  const scrollTo = useCallback((direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = 200; // 滚动距离
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

  // 重置图片状态当场景改变时
  React.useEffect(() => {
    setImageLoading(true);
    setImageError(false);
  }, [activeScenario]);

  // 场景标签数据
  const scenarioKeys = Object.keys(scenarioConfig) as ScenarioType[];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden"
      data-monitor-comp-id="c854860"
    >
      {/* 背景装饰 - 响应式大小 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* 标题区域 - 优化字体层次 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
            热门产品
          </h2>
          <div className="w-16 h-1 bg-[#0055ff] mx-auto mb-4"></div>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 text-gray-600">
            丰富的应用场景和解决方案，满足多种业务需求
          </p>
        </div>

        {/* 场景标签导航 - 多端响应式适配 */}
        <div className="mb-6 px-2 sm:px-4">
          {/* 桌面端标签 */}
          <div className="hidden md:flex justify-center space-x-8 lg:space-x-12 relative">
            {scenarioKeys.map((scenario) => (
              <motion.div
                key={scenario}
                className={`px-3 py-2 lg:px-4 lg:py-2 cursor-pointer transition-all duration-300 text-sm lg:text-base font-medium tracking-wide relative ${
                  activeScenario === scenario 
                    ? 'text-[#0055ff]' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => handleScenarioChange(scenario)}
                aria-label={`切换到${scenarioConfig[scenario].title}场景`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-monitor-click-id={`tab-${scenario}`}
              >
                {scenarioConfig[scenario].title}
                {/* 活跃状态下的底部指示线 - 添加动画 */}
                {activeScenario === scenario && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055ff] rounded-full"
                    layoutId="activeTab"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* 移动端标签 */}
          <div className="md:hidden relative">
            {/* 左侧箭头 */}
            {showLeftArrow && (
              <div
                onClick={() => scrollTo('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-[#0055ff] transition-colors duration-300 cursor-pointer"
                aria-label="向左滚动"
              >
                <ChevronLeft className="h-5 w-5" />
              </div>
            )}

            {/* 右侧箭头 */}
            {showRightArrow && (
              <div
                onClick={() => scrollTo('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-[#0055ff] transition-colors duration-300 cursor-pointer"
                aria-label="向右滚动"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            )}

            {/* 滚动容器 */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-4 py-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {scenarioKeys.map((scenario) => (
                <motion.div
                  key={scenario}
                  className={`flex-shrink-0 px-3 py-1.5 cursor-pointer transition-all duration-300 text-sm font-medium tracking-wide whitespace-nowrap relative ${
                    activeScenario === scenario 
                      ? 'text-[#0055ff]' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => handleScenarioChange(scenario)}
                  aria-label={`切换到${scenarioConfig[scenario].title}场景`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-monitor-click-id={`mobile-tab-${scenario}`}
                >
                  {scenarioConfig[scenario].title}
                  {/* 活跃状态下的底部指示线 - 添加动画 */}
                  {activeScenario === scenario && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055ff] rounded-full"
                      layoutId="activeMobileTab"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 平板端标签 */}
          <div className="hidden sm:block md:hidden">
            <div className="flex flex-wrap justify-center gap-10">
              {scenarioKeys.map((scenario) => (
                <motion.div
                  key={scenario}
                  className={`px-5 py-3 cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide relative ${
                    activeScenario === scenario 
                      ? 'text-[#0055ff]' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => handleScenarioChange(scenario)}
                  aria-label={`切换到${scenarioConfig[scenario].title}场景`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-monitor-click-id={`tablet-tab-${scenario}`}
                >
                  {scenarioConfig[scenario].title}
                  {/* 活跃状态下的底部指示线 - 添加动画 */}
                  {activeScenario === scenario && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0055ff] rounded-full"
                      layoutId="activeTabletTab"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 简洁的产品卡片 - 多端适配优化 */}
        <div className="w-full">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row"
          >
            {/* 左侧内容 - 多端响应式优化 */}
            <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
              {/* 标题区域 - 多端字体适配 */}
              <div className="mb-4 sm:mb-6">
                {/* 产品标签 - 响应式设计 */}
                <motion.span 
                  className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-blue-100 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-blue-600" />
                  {currentScenario.subtitle}
                </motion.span>
                
                {/* 主标题 - 响应式字体大小 */}
                <motion.h3 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {currentScenario.title}
                </motion.h3>
                
                {/* 描述文字 - 响应式字体和行高 */}
                <motion.p 
                  className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {currentScenario.description}
                </motion.p>
              </div>

              {/* 功能特性列表 - 响应式网格布局 */}
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
                 {/* 响应式网格布局：移动端1列，平板端2列，桌面端2列 */}
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

              {/* 操作按钮 - 响应式布局 */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                {/* 主要按钮 - 响应式内边距 */}
                <motion.button
                  className="flex-1 sm:flex-none bg-blue-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group shadow-sm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window._hmt) {
                      window._hmt.push(['_trackEvent', 'HotProducts', 'PrimaryAction', currentScenario.title]);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    立即咨询
                    <ArrowRight className="ml-1 sm:ml-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </motion.button>
                
                {/* 次要按钮 - 响应式内边距 */}
                <motion.button
                  className="flex-1 sm:flex-none bg-white border border-blue-600 text-blue-600 px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center group shadow-sm"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window._hmt) {
                      window._hmt.push(['_trackEvent', 'HotProducts', 'SecondaryAction', currentScenario.title]);
                    }
                  }}
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

            {/* 右侧媒体区 - 响应式尺寸适配 */}
            <div 
              className="w-full lg:w-1/2 relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 overflow-hidden"
              style={{ 
                minHeight: '280px',
                height: 'auto'
              }}
            >
              {imageLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-100/80 animate-pulse flex items-center justify-center backdrop-blur-sm">
                  <div className="text-blue-600 text-sm font-medium">加载中...</div>
                </div>
              )}
              {imageError ? (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <IconComponent className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2 opacity-60" />
                    <div className="text-xs sm:text-sm font-medium">图片加载失败</div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]">
                  <img
                    src={currentScenario.image}
                    alt={currentScenario.imageAlt}
                    className="max-w-full max-h-full object-contain drop-shadow-lg"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                    style={{
                      filter: 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.15))'
                    }}
                  />
                </div>
              )}
              
              {/* 装饰性渐变覆盖层 */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20 pointer-events-none"></div>
              
              {/* 右下角装饰点 - 响应式大小 */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-1 h-1 bg-purple-400 rounded-full opacity-40"></div>
            </div>
          </motion.div>
        </div>
        
        {/* 产品特色说明 - 多端响应式适配 */}
        <div className="text-center mt-6 sm:mt-8">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white rounded-full text-xs sm:text-sm text-gray-600"
               style={{ border: '1px solid rgba(221, 226, 233, 1)' }}>
            <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-[#0055ff]" />
            专业的AI解决方案，助力企业数字化转型
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default HotProducts;

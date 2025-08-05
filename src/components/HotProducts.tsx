"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Users, Bot, PenTool, Tv, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";

// 定义场景类型
type ScenarioType = 'virtualIP' | 'digitalEmployee' | 'contentCreation' | 'virtualLive';

// 场景配置数据
const scenarioConfig = {
  virtualIP: {
    title: '数字分身',
    subtitle: '虚拟IP解决方案',
    description: '面向文化传播、影视内容等多个行业，帮助打造虚拟IP，赋能品牌营销，提升品牌心智。',
    icon: Users,
    features: [
      { title: '品牌代言', description: '创建专属品牌虚拟形象，提升品牌辨识度和亲和力' },
      { title: '内容创作', description: '为影视、游戏、动漫等行业提供高质量虚拟角色' },
      { title: '社交互动', description: '打造虚拟社交形象，增强用户互动体验' }
    ],
    image: 'https://artaigc.cn/assets/img/human1.png',
    imageAlt: '虚拟IP应用场景',
    cardTitle: '虚拟IP解决方案',
    cardSubtitle: '打造专属品牌虚拟形象'
  },
  digitalEmployee: {
    title: '全能知识库',
    subtitle: '数字员工解决方案',
    description: '为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。',
    icon: Bot,
    features: [
      { title: '智能客服', description: '7×24小时在线服务，快速响应客户需求' },
      { title: '销售助手', description: '智能推荐产品，提高转化率和客户满意度' },
      { title: '培训讲师', description: '提供标准化培训内容，确保培训质量一致性' }
    ],
    image: 'https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/uploads/images/20250207/20250207190337cdb078503.png',
    imageAlt: '数字员工应用场景',
    cardTitle: '数字员工解决方案',
    cardSubtitle: '智能高效的业务助手'
  },
  contentCreation: {
    title: '聊天绘画',
    subtitle: '内容创作解决方案',
    description: '为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。',
    icon: PenTool,
    features: [
      { title: '视频脚本', description: '快速生成专业视频脚本，提高内容创作效率' },
      { title: '营销文案', description: '生成吸引人的营销文案，提高转化率' },
      { title: '多语言翻译', description: '支持多语言内容创作和翻译，拓展全球市场' }
    ],
    image: 'https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/resource/image/decorate/home_fun_003.png',
    imageAlt: '内容创作应用场景',
    cardTitle: '内容创作解决方案',
    cardSubtitle: '高效智能的内容生产'
  },
  virtualLive: {
    title: '论文创作',
    subtitle: '虚拟直播解决方案',
    description: '为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。',
    icon: Tv,
    features: [
      { title: '电商直播', description: '24小时不间断直播，提高商品曝光和销售' },
      { title: '新闻播报', description: '实时生成新闻内容，提供专业播报服务' },
      { title: '活动主持', description: '为线上活动提供专业主持服务，增强互动体验' }
    ],
    image: 'https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/uploads/images/20250207/20250207190545b278d4242.png',
    imageAlt: '虚拟直播应用场景',
    cardTitle: '虚拟直播解决方案',
    cardSubtitle: '智能高效的直播助手'
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
      className="py-8 sm:py-12 lg:py-16"
    >
      <div className="container mx-auto px-4 max-w-8xl">
        {/* 标题区域 */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            热门产品
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            丰富的应用场景和解决方案，满足多种业务需求
          </p>
        </div>

        {/* 场景标签导航 - 简洁纯文本设计 */}
        <div className="mb-6 sm:mb-8 px-4">
          {/* 桌面端：简洁文本标签，无分隔线和按钮样式 */}
          <div className="hidden md:flex justify-center space-x-16">
            {scenarioKeys.map((scenario) => (
              <div
                key={scenario}
                className={`px-6 py-3 cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide relative ${
                  activeScenario === scenario 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => handleScenarioChange(scenario)}
                aria-label={`切换到${scenarioConfig[scenario].title}场景`}
              >
                {scenarioConfig[scenario].title}
                {/* 活跃状态下的底部指示线 */}
                {activeScenario === scenario && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* 移动端：简洁文本标签，无分隔线和按钮样式 */}
          <div className="md:hidden relative">
            {/* 左侧箭头 - 简化样式 */}
            {showLeftArrow && (
              <div
                onClick={() => scrollTo('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                aria-label="向左滚动"
              >
                <ChevronLeft className="h-5 w-5" />
              </div>
            )}

            {/* 右侧箭头 - 简化样式 */}
            {showRightArrow && (
              <div
                onClick={() => scrollTo('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                aria-label="向右滚动"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </div>
            )}

            {/* 滚动容器 - 去掉分隔线 */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-10 overflow-x-auto scrollbar-hide px-6 py-3"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {scenarioKeys.map((scenario) => (
                <div
                  key={scenario}
                  className={`flex-shrink-0 px-5 py-3 cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide whitespace-nowrap relative ${
                    activeScenario === scenario 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => handleScenarioChange(scenario)}
                  aria-label={`切换到${scenarioConfig[scenario].title}场景`}
                >
                  {scenarioConfig[scenario].title}
                  {/* 活跃状态下的底部指示线 */}
                  {activeScenario === scenario && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 平板端：简洁文本标签，无分隔线和按钮样式 */}
          <div className="hidden sm:block md:hidden">
            <div className="flex flex-wrap justify-center gap-10">
              {scenarioKeys.map((scenario) => (
                <div
                  key={scenario}
                  className={`px-5 py-3 cursor-pointer transition-all duration-300 text-lg font-medium tracking-wide relative ${
                    activeScenario === scenario 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => handleScenarioChange(scenario)}
                  aria-label={`切换到${scenarioConfig[scenario].title}场景`}
                >
                  {scenarioConfig[scenario].title}
                  {/* 活跃状态下的底部指示线 */}
                  {activeScenario === scenario && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="bg-white shadow-md border border-gray-100 overflow-hidden">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row"
          >
            {/* 左侧内容区域 */}
            <div className="w-full lg:w-1/2 p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 text-xs font-medium mb-4 sm:mb-6">
                  <IconComponent className="h-3 w-3 mr-2" />
                  {currentScenario.subtitle}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  {currentScenario.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                  {currentScenario.description}
                </p>
              </div>
              
              {/* 功能列表 */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {currentScenario.features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 操作按钮 */}
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 w-fit touch-manipulation active:scale-95 rounded-none"
                aria-label={`查看${currentScenario.title}的详细信息`}
                onClick={() => {
                  // 根据当前场景类型跳转到对应的产品页面
                  const productLinks = {
                    virtualIP: '/products/human',
                    digitalEmployee: '/products/ai',
                    contentCreation: '/products/chat',
                    virtualLive: '/products/paper'
                  };
                  window.location.href = productLinks[activeScenario];
                }}
              >
                查看详情
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
            
            {/* 右侧图片区域 */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-2 sm:p-3 lg:p-4 flex items-center justify-center">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 transform rotate-3"></div>
                <div className="relative overflow-hidden shadow-sm">
                  <img 
                    src={currentScenario.image}
                    alt={currentScenario.imageAlt}
                    className="w-full h-auto"
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  )}
                  {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-600">
                      <p>图片加载失败</p>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white flex items-center justify-center mr-3 sm:mr-4 shadow-sm">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-base sm:text-lg">{currentScenario.cardTitle}</p>
                        <p className="text-white/90 text-xs sm:text-sm">{currentScenario.cardSubtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
});

export default HotProducts;
"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Menu, X, ChevronDown, Github, Bell,
  Moon, Sun, User, Settings, HelpCircle,
  BookOpen, Code, Zap, Layers, ExternalLink, Cloud, Gift, Sparkles,
  FileText, Archive, Newspaper
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup
} from "@radix-ui/react-dropdown-menu";

// 类型定义
interface NavSubItem {
  name: string;
  path: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  external?: boolean;
  url?: string;
}

interface NavItem {
  name: string;
  path?: string;
  dropdown?: boolean;
  items?: NavSubItem[];
}

// 常量定义
const SCROLL_THRESHOLD = 20;
const MOBILE_BREAKPOINT = 768;

// 优化后的动画配置 - 减少动画复杂度
const MOBILE_MENU_VARIANTS = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 }
};

const DROPDOWN_VARIANTS = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 5 }
};

/**
 * 网站头部导航组件
 * 功能：响应式导航、下拉菜单、暗黑模式切换、用户菜单、滚动监听
 */
const Header: React.FC = () => {
  // 状态管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 导航菜单配置
  const navItems: NavItem[] = useMemo(() => [
    {
      name: "产品与服务",
      dropdown: true,
      items: [
        { name: "产品中心", path: "/products", icon: <Layers className="h-5 w-5" />, color: "indigo", description: "艺创AI产品中心" },
        { name: "数字分身", path: "/products/human", icon: <User className="h-5 w-5" />, color: "indigo", description: "创建您的AI数字分身" },
        { name: "全能创作", path: "/products/ai", icon: <BookOpen className="h-5 w-5" />, color: "indigo", description: "企业级全能AI知识库" },
        { name: "聊天绘画", path: "/products/chat", icon: <Gift className="h-5 w-5" />, color: "purple", description: "AI辅助创意设计" },
        { name: "论文创作", path: "/products/paper", icon: <FileText className="h-5 w-5" />, color: "amber", description: "智能学术写作助手" },
        { name: "源码下载", path: "/code", icon: <Archive className="h-5 w-5" />, color: "teal", description: "获取开源代码" }
      ]
    },
    { name: "产品演示", path: "/demo" },
    { name: "产品文档", path: "/docs" },
    { name: "新闻资讯", path: "/new" },
    {
      name: "支持与服务",
      dropdown: true,
      items: [
        { name: "服务支持", path: "/service", icon: <HelpCircle className="h-5 w-5" />, color: "indigo", description: "获取专业技术支持" },
        { name: "AI提示词", path: "/tips", icon: <Sparkles className="h-5 w-5" />, color: "purple", description: "精选AI提示词模板库" },
        { name: "代理合作", path: "/agency", icon: <Zap className="h-5 w-5" />, color: "cyan", description: "成为合作伙伴" },
        { name: "必定AI", path: "https://www.buidai.com", icon: <ExternalLink className="h-5 w-5" />, color: "rose", description: "企业级智能体平台" },
        { name: "APP下载", path: "/download", icon: <Cloud className="h-5 w-5" />, color: "emerald", description: "移动端应用下载" },
        { name: "集成与API", path: "/api", icon: <Code className="h-5 w-5" />, color: "indigo", description: "系统集成开发文档" },
      ]
    },
    {
      name: "产品体验",
      dropdown: true,
      items: [
        { name: "艺创知识库", path: "https://www.cnai.art", icon: <BookOpen className="h-5 w-5" />, color: "amber", description: "智能知识库体验", external: true, url: "https://www.cnai.art" },
        { name: "艺创数字人", path: "https://v.cnai.ar", icon: <User className="h-5 w-5" />, color: "amber", description: "数字人互动体验", external: true, url: "https://v.cnai.art" },
        { name: "聊天绘画", path: "https://cnai.ar", icon: <Layers className="h-5 w-5" />, color: "purple", description: "AI绘画创作体验", external: true, url: "https://cnai.art" },
        { name: "论文创作", path: "https://paper.gmlart.cn", icon: <BookOpen className="h-5 w-5" />, color: "amber", description: "智能写作体验", external: true, url: "https://paper.gmlart.cn" },
        { name: "云计算", path: "https://www.cloudcvm.com", icon: <Cloud className="h-5 w-5" />, color: "sky", description: "云端计算服务", external: true, url: "https://www.cloudcvm.com" },
        { name: "免费领卡", path: "https://h5.lot-ml.com/ProductEn/Index/1a654e0b341cadd2", icon: <Gift className="h-5 w-5" />, color: "pink", description: "免费体验卡领取", external: true, url: "https://h5.lot-ml.com/ProductEn/Index/1a654e0b341cadd2" }
      ]
    },
    { name: "关于我们", path: "/about" }
  ], []);

  // 事件处理函数
  const handleNavigation = useCallback(() => {
    setMobileMenuOpen(false);
    // 确保页面滚动到顶部
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, []);

  // 处理外部链接在新窗口打开
  const openExternalLink = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      const action = newMode ? 'add' : 'remove';
      document.documentElement.classList[action]('dark');
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
      }
      return newMode;
    });
  }, []);

  const toggleMobileDropdown = useCallback((name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  }, []);

  // 鼠标悬停菜单处理函数
  const handleMenuMouseEnter = useCallback((menuName: string) => {
    // 清除之前的延迟关闭定时器
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    // 立即显示菜单
    setHoveredMenu(menuName);
  }, []);

  const handleMenuMouseLeave = useCallback(() => {
    // 设置延迟关闭，给用户时间移动到子菜单
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 150); // 150ms延迟，提供良好的用户体验
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    // 鼠标进入下拉菜单时，清除关闭定时器
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    // 鼠标离开下拉菜单时，立即关闭
    setHoveredMenu(null);
  }, []);



  // 初始化暗黑模式
  useEffect(() => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 窗口大小变化监听
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // 点击外部区域关闭菜单
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // 清理悬停定时器
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);



  // 渲染特殊菜单项名称（带动画点）
  const renderMenuItemName = (itemName: string) => {
    if (itemName === "产品体验") {
      return (
        <span className="relative flex items-center">
          <span>产品体</span>
          <span className="relative inline-block">
            <span>验</span>
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          </span>
        </span>
      );
    }
    if (itemName === "产品与服务") {
      return (
        <span className="relative flex items-center">
          <span>产品与服</span>
          <span className="relative inline-block">
            <span>务</span>
            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </span>
        </span>
      );
    }
    return <span>{itemName}</span>;
  };



  // 优化：提取为独立组件，避免每次渲染重新创建
  const MobileMenuItem = memo(({ subItem }: { subItem: NavSubItem }) => {
    // 移动端极简设计：移除边框、阴影等装饰效果
    const baseClass = "flex flex-col items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30";
    const iconWrapperClass = "w-9 h-9 rounded-lg flex items-center justify-center mb-1.5";
    
    const content = (
      <>
        <div className={iconWrapperClass}>
          {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">{subItem.name}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{subItem.description}</span>
        </div>
      </>
    );

    return (
      <div>
        {subItem.external ? (
          <div
            className={`${baseClass} cursor-pointer relative`}
            onClick={() => openExternalLink(subItem.url!)}
          >
            {content}
            <ExternalLink className="h-3 w-3 text-gray-400 absolute top-2 right-2 dark:text-gray-500" />
          </div>
        ) : (
          <Link to={subItem.path} className={baseClass} onClick={handleNavigation}>
            {content}
          </Link>
        )}
      </div>
    );
  });

  // 优化：使用CSS Grid两行两列布局
  const renderMobileCategorizedMenu = useCallback((items: NavSubItem[]) => {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((item, index) => <MobileMenuItem key={index} subItem={item} />)}
      </div>
    );
  }, [handleNavigation, openExternalLink]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2 dark:bg-gray-900/95"
          : "bg-white border-b border-gray-100 py-3 dark:bg-gray-900 dark:border-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
            {/* Logo区域 */}
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center group" onClick={handleNavigation}>
                <div className="flex items-center transition-transform hover:scale-105">
                  <img src="/images/scenarios/logo.svg" alt="艺创AI企业网站" className="h-10 w-auto" />
                  <span className="ml-1.5 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-medium dark:bg-blue-900 dark:text-blue-300">艺创AI</span>
                </div>
              </Link>

            {/* 桌面端导航 */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleMenuMouseEnter(item.name)}
                    onMouseLeave={handleMenuMouseLeave}
                  >
                    <Button
                      variant="ghost"
                      className={`group flex items-center text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                        hoveredMenu === item.name
                          ? "text-[#015bfe] bg-blue-50/70 dark:text-blue-400 dark:bg-blue-950/50"
                          : "text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                      }`}
                    >
                      {renderMenuItemName(item.name)}
                      <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                        hoveredMenu === item.name ? "rotate-180" : ""
                      }`} />
                    </Button>

                    {/* 悬停展开的下拉菜单 */}
                    <AnimatePresence>
                      {hoveredMenu === item.name && (
                        <motion.div
                          variants={DROPDOWN_VARIANTS}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 right-0 mx-auto top-full mt-3 w-[480px] bg-white dark:bg-gray-900 shadow-xl border border-gray-200/60 dark:border-gray-700/60 rounded-lg backdrop-blur-sm z-50"
                          style={{ marginLeft: '-210px' }}
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          {/* 箭头指示器 */}
                          <div className="absolute -top-2 left-0 right-0 mx-auto" style={{ width: 'fit-content' }}>
                            <div className="w-4 h-4 bg-white dark:bg-gray-900 border-l border-t border-gray-200/60 dark:border-gray-700/60 transform rotate-45"></div>
                          </div>
                          {/* 菜单标题区域 */}
                          <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wide">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {item.name === "产品与服务" ? "探索我们的AI产品解决方案" :
                               item.name === "支持与服务" ? "获取专业支持和服务" : "在线体验我们的产品"}
                            </p>
                          </div>
                          {/* 菜单项网格 */}
                          <div className="p-4">
                            <div className="grid grid-cols-2 gap-2">
                              {item.items?.map((subItem, subIndex) => (
                                <div key={subIndex}>
                                  {subItem.external ? (
                                    <div
                                      className="enterprise-menu-item group/item cursor-pointer"
                                      onClick={() => openExternalLink(subItem.url!)}
                                    >
                                      <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                                        {/* 简约图标区域 */}
                                        <div className="flex-shrink-0 mt-0.5">
                                          <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-900/30 transition-colors duration-200">
                                            {React.cloneElement(subItem.icon, { className: "w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200" })}
                                          </div>
                                        </div>
                                        {/* 文本内容区域 */}
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200 leading-tight">
                                            {subItem.name}
                                          </div>
                                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed line-clamp-2">
                                            {subItem.description}
                                          </div>
                                        </div>
                                        {/* 简约箭头指示器 */}
                                        <div className="flex-shrink-0 mt-1">
                                          <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover/item:opacity-100 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-all duration-200" />
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      to={subItem.path}
                                      className="enterprise-menu-item group/item"
                                      onClick={handleNavigation}
                                    >
                                      <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
                                        {/* 简约图标区域 */}
                                        <div className="flex-shrink-0 mt-0.5">
                                          <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-900/30 transition-colors duration-200">
                                            {React.cloneElement(subItem.icon, { className: "w-4 h-4 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200" })}
                                          </div>
                                        </div>
                                        {/* 文本内容区域 */}
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-200 leading-tight">
                                            {subItem.name}
                                          </div>
                                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed line-clamp-2">
                                            {subItem.description}
                                          </div>
                                        </div>
                                        {/* 简约箭头指示器 */}
                                        <div className="flex-shrink-0 mt-1">
                                          <ChevronDown className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 opacity-0 group-hover/item:opacity-100 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-all duration-200 rotate-[-90deg]" />
                                        </div>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 底部灰色装饰线 */}
                          <div className="px-4 pb-3">
                            <div className="h-px bg-gray-200 dark:bg-gray-700 opacity-60"></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={index} to={item.path || "/"} onClick={handleNavigation}>
                    <Button variant="ghost" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50">
                      {item.name}
                    </Button>
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* 操作按钮区域 */}
          <div className="flex items-center space-x-1">
            {/* 暗黑模式切换按钮（桌面端） */}
            <div className="hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-8 w-8 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50 transition-all"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "切换到亮色模式" : "切换到暗黑模式"}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* 通知和GitHub（桌面端） */}
            <div className="hidden md:flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-8 w-8 relative dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-2 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 dark:border-gray-700 animate-in fade-in-50 zoom-in-95 duration-150">
                  <DropdownMenuLabel className="font-medium text-sm px-2 flex justify-between items-center">
                    <span className="dark:text-gray-200">通知</span>
                    <Button variant="ghost" size="sm" className="text-xs text-blue-600 hover:text-blue-700 h-auto py-1 dark:text-blue-400 dark:hover:text-blue-300">
                      全部标为已读
                    </Button>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1 dark:bg-gray-700" />
                  <div className="max-h-[280px] overflow-y-auto py-1">
                    <div className="px-2 py-2 hover:bg-blue-50 rounded-lg cursor-pointer dark:hover:bg-blue-950/50">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600 flex-shrink-0 dark:bg-blue-900/50 dark:text-blue-400">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">系统更新</p>
                          <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">艺创AI平台已更新至最新版本，新增多项功能</p>
                          <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">10分钟前</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-2 hover:bg-blue-50 rounded-lg cursor-pointer dark:hover:bg-blue-950/50">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 flex-shrink-0 dark:bg-green-900/50 dark:text-green-400">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">艺创AI</p>
                          <p className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">技术过硬、私有部署、代码开源</p>
                          <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">2小时前</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="my-1 dark:bg-gray-700" />
                  <Button variant="ghost" className="w-full justify-center text-sm text-gray-600 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50">
                    查看全部通知
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-8 w-8 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50">
                <Github className="h-4 w-4" />
              </Button>
            </div>

            {/* 用户菜单（桌面端） */}
            {/* 用户菜单（桌面端） */}
            <div className="hidden md:flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="group flex items-center gap-2 px-2 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-900/20"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-100 text-gray-500 group-hover:text-blue-600 transition-colors duration-300 dark:bg-gray-800 dark:group-hover:bg-blue-900 dark:text-gray-400">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="hidden lg:inline-block">账户</span>
                    <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="w-60 p-2 rounded-2xl border border-gray-100/50 shadow-2xl bg-white/80 backdrop-blur-xl dark:bg-gray-900/80 dark:border-gray-800 animate-in fade-in-50 zoom-in-95 duration-200"
                >
                  <DropdownMenuLabel className="px-3 py-2">
                    <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">我的账户</div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1 bg-gray-100 dark:bg-gray-800" />
                  <DropdownMenuGroup className="space-y-1">
                    <DropdownMenuItem asChild className="group rounded-xl px-3 py-2.5 cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/20">
                      <a href="https://console.cloudcvm.com" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                        <div className="mr-3 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-blue-100/50 text-gray-500 group-hover:text-blue-600 transition-colors dark:bg-gray-800 dark:group-hover:bg-blue-900/30 dark:text-gray-400">
                          <User className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-400">授权中心</span>
                          <span className="text-[10px] text-gray-400 group-hover:text-blue-400/80">管理您的账户信息</span>
                        </div>
                      </a>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="group rounded-xl px-3 py-2.5 cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/20">
                      <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                        <div className="mr-3 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-blue-100/50 text-gray-500 group-hover:text-blue-600 transition-colors dark:bg-gray-800 dark:group-hover:bg-blue-900/30 dark:text-gray-400">
                          <Settings className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-400">账户设置</span>
                          <span className="text-[10px] text-gray-400 group-hover:text-blue-400/80">安全与偏好设置</span>
                        </div>
                      </a>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="group rounded-xl px-3 py-2.5 cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/20">
                      <Link to="/docs" className="flex items-center w-full" onClick={handleNavigation}>
                        <div className="mr-3 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-blue-100/50 text-gray-500 group-hover:text-blue-600 transition-colors dark:bg-gray-800 dark:group-hover:bg-blue-900/30 dark:text-gray-400">
                          <HelpCircle className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-400">文档中心</span>
                          <span className="text-[10px] text-gray-400 group-hover:text-blue-400/80">查看使用指南</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem asChild className="group rounded-xl px-3 py-2.5 cursor-pointer focus:bg-blue-50 dark:focus:bg-blue-900/20">
                      <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20" target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                        <div className="mr-3 flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-blue-100/50 text-gray-500 group-hover:text-blue-600 transition-colors dark:bg-gray-800 dark:group-hover:bg-blue-900/30 dark:text-gray-400">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-400">认证中心</span>
                          <span className="text-[10px] text-gray-400 group-hover:text-blue-400/80">实名与资质认证</span>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-medium px-5 py-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                  免费注册
                </Button>
              </a>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 hover:text-[#015bfe] hover:bg-blue-50/70 hover:border-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50 dark:hover:border-blue-700 transition-all duration-200 flex items-center justify-center min-w-[40px] w-10 h-10 shadow-sm active:scale-95"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-sm shadow-xl border-t border-gray-100 overflow-hidden dark:bg-gray-900/95 dark:border-gray-800"
            variants={MOBILE_MENU_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-6 max-h-[80vh] overflow-y-auto">
              {/* 移动端工具栏 */}
              <div className="mb-6 flex justify-between items-center p-3 bg-gray-50/50 rounded-xl dark:bg-gray-800/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/50">
                    <Settings className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">工具栏</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-lg h-8 w-8 p-0 relative dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-lg h-8 w-8 p-0 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-lg h-8 w-8 p-0 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50 transition-all"
                    onClick={toggleDarkMode}
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <nav className="flex flex-col space-y-2">
                {/* 产品与服务菜单 */}
                <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-gray-800/50">
                  <button
                    onClick={() => toggleMobileDropdown('products')}
                    className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-200 dark:hover:bg-blue-950/50"
                  >
                    <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3 dark:bg-indigo-900/50">
                        <Layers className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex flex-col items-start">
                        {renderMenuItemName("产品与服务")}
                        <span className="text-xs text-gray-500 dark:text-gray-400">产品中心与核心服务</span>
                      </div>
                    </div>
                    <div
                      className="transition-transform duration-200"
                      style={{ transform: activeDropdown === 'products' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div
                        variants={MOBILE_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden mt-4"
                      >
                        <div className="p-3 bg-white/90 rounded-lg dark:bg-gray-900/90">
                          {renderMobileCategorizedMenu(navItems.find(item => item.name === "产品与服务")?.items || [])}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 快速导航网格 */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/demo"
                    className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30"
                    onClick={handleNavigation}
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-100 flex items-center justify-center mr-2.5 dark:bg-cyan-900/50">
                      <Zap className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">产品演示</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">在线体验</span>
                    </div>
                  </Link>

                  <Link
                    to="/docs"
                    className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30"
                    onClick={handleNavigation}
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center mr-2.5 dark:bg-indigo-900/50">
                      <BookOpen className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">产品文档</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">使用指南</span>
                    </div>
                  </Link>

                  <Link
                    to="/new"
                    className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30"
                    onClick={handleNavigation}
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center mr-2.5 dark:bg-blue-900/50">
                      <Newspaper className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">新闻资讯</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">最新动态</span>
                    </div>
                  </Link>

                  <Link
                    to="/about"
                    className="flex items-center p-3 rounded-lg bg-slate-50 hover:bg-blue-50/80 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-900/30"
                    onClick={handleNavigation}
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center mr-2.5 dark:bg-emerald-900/50">
                      <User className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">关于我们</span>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">了解团队</span>
                    </div>
                  </Link>
                </div>

                {/* 支持与服务菜单 */}
                <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-gray-800/50">
                  <button
                    onClick={() => toggleMobileDropdown('agency')}
                    className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-200 dark:hover:bg-blue-950/50"
                  >
                    <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center mr-3 dark:bg-rose-900/50">
                        <HelpCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span>支持与服务</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">技术支持与合作服务</span>
                      </div>
                    </div>
                    <div
                      className="transition-transform duration-200"
                      style={{ transform: activeDropdown === 'agency' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'agency' && (
                      <motion.div
                        variants={MOBILE_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden mt-4"
                      >
                        <div className="p-3 bg-white/90 rounded-lg dark:bg-gray-900/90">
                          {renderMobileCategorizedMenu(navItems.find(item => item.name === "支持与服务")?.items || [])}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 产品体验菜单 */}
                <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-gray-800/50">
                  <button
                    onClick={() => toggleMobileDropdown('experience')}
                    className="flex items-center justify-between w-full py-3 px-3 rounded-lg hover:bg-blue-50/70 transition-colors duration-200 dark:hover:bg-blue-950/50"
                  >
                    <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mr-3 dark:bg-orange-900/50">
                        <Sparkles className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="flex flex-col items-start">
                        {renderMenuItemName("产品体验")}
                        <span className="text-xs text-gray-500 dark:text-gray-400">在线体验产品功能</span>
                      </div>
                    </div>
                    <div
                      className="transition-transform duration-200"
                      style={{ transform: activeDropdown === 'experience' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'experience' && (
                      <motion.div
                        variants={MOBILE_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden mt-4"
                      >
                        <div className="p-3 bg-white/90 rounded-lg dark:bg-gray-900/90">
                          {renderMobileCategorizedMenu(navItems.find(item => item.name === "产品体验")?.items || [])}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 登录和注册按钮 */}
                <div className="pt-4 space-y-2.5">
                  <div className="p-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg dark:from-blue-950/50 dark:to-indigo-950/50">
                    <div className="flex items-center mb-2.5">
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900/50">
                        <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">账户中心</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white w-full font-medium rounded-lg transition-all duration-200 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 text-sm py-2.5"
                        >
                          <User className="h-4 w-4 mr-1.5" />
                          登录
                        </Button>
                      </a>
                      <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-[#015bfe] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white w-full font-medium rounded-lg transition-all duration-200 text-sm py-2.5">
                          <Sparkles className="h-4 w-4 mr-1.5" />
                          注册
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

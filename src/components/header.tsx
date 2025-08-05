"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ChevronDown, Github, Bell, 
  Moon, Sun, User, Settings, HelpCircle, 
  BookOpen, Code, Zap, Layers, ExternalLink, Cloud, Gift, Sparkles,
  FileText, Archive
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

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

// 动画配置
const MENU_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" as const }
  })
};

const MOBILE_MENU_VARIANTS = {
  hidden: { height: 0, opacity: 0, y: -10 },
  visible: { height: "auto", opacity: 1, y: 0 },
  exit: { height: 0, opacity: 0, y: -10 }
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
  const headerRef = useRef<HTMLElement>(null);

  // 导航菜单配置
  const navItems: NavItem[] = useMemo(() => [
    {
      name: "产品与服务",
      dropdown: true,
      items: [
        { name: "产品中心", path: "/products", icon: <Layers className="h-5 w-5" />, color: "indigo", description: "艺创AI产品中心" },
        { name: "数字分身", path: "/products/human", icon: <User className="h-5 w-5" />, color: "indigo", description: "创建您的AI数字分身" },
        { name: "企业知识库", path: "/products/ai", icon: <BookOpen className="h-5 w-5" />, color: "indigo", description: "构建企业专属知识库" },
        { name: "聊天绘画", path: "/products/chat", icon: <Gift className="h-5 w-5" />, color: "purple", description: "AI辅助创意设计" },
        { name: "论文创作", path: "/products/paper", icon: <FileText className="h-5 w-5" />, color: "amber", description: "智能学术写作助手" },
        { name: "源码下载", path: "/code", icon: <Archive className="h-5 w-5" />, color: "teal", description: "获取开源代码" }
      ]
    },
    { name: "产品演示", path: "/demo" },
    { name: "产品文档", path: "/docs" },
    { name: "新闻资讯", path: "/news" },
    {
      name: "支持与服务",
      dropdown: true,
      items: [
        { name: "服务支持", path: "/service", icon: <HelpCircle className="h-5 w-5" />, color: "indigo", description: "获取专业技术支持" },
        { name: "AI提示词", path: "/tips", icon: <Sparkles className="h-5 w-5" />, color: "purple", description: "精选AI提示词模板库" },
        { name: "代理合作", path: "/agency", icon: <Zap className="h-5 w-5" />, color: "cyan", description: "成为合作伙伴" },
        { name: "渠道合作", path: "/api", icon: <ExternalLink className="h-5 w-5" />, color: "rose", description: "成为我们的合作伙伴" },
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
        { name: "论文创作", path: "https://www.cnai.ar", icon: <BookOpen className="h-5 w-5" />, color: "amber", description: "智能写作体验", external: true, url: "https://www.cnai.art" },
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
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  }, []);

  const toggleMobileDropdown = useCallback((name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  }, []);



  // 初始化暗黑模式
  useEffect(() => {
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

  // 渲染下拉菜单项
  const renderDropdownItem = (subItem: NavSubItem, subIndex: number) => (
    <DropdownMenuItem 
      key={subIndex} 
      asChild 
      className="rounded-lg bg-gray-50 hover:bg-blue-50/70 focus:bg-blue-50/70 py-3 px-3 cursor-pointer dark:bg-gray-800 dark:hover:bg-blue-950/30 dark:focus:bg-blue-950/30 transition-all duration-200"
    >
      {subItem.external ? (
        <div 
          className="w-full flex items-center cursor-pointer" 
          onClick={() => openExternalLink(subItem.url!)}
        >
          <div className={`w-10 h-10 rounded-lg bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-500 dark:bg-${subItem.color}-900/30 dark:text-${subItem.color}-400`}>
            {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-800 dark:text-gray-200">{subItem.name}</span>
            <span className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">{subItem.description}</span>
          </div>
          <ExternalLink className="h-3 w-3 text-gray-400 ml-auto dark:text-gray-500" />
        </div>
      ) : (
        <Link to={subItem.path} className="w-full flex items-center" onClick={handleNavigation}>
          <div className={`w-10 h-10 rounded-lg bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-500 dark:bg-${subItem.color}-900/30 dark:text-${subItem.color}-400`}>
            {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-gray-800 dark:text-gray-200">{subItem.name}</span>
            <span className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">{subItem.description}</span>
          </div>
        </Link>
      )}
    </DropdownMenuItem>
  );

  // 渲染移动端菜单项
  const renderMobileMenuItem = (subItem: NavSubItem, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.2 }}
    >
      {subItem.external ? (
        <div 
          className="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-blue-50/70 transition-all duration-200 cursor-pointer border border-gray-100 hover:border-blue-200 dark:bg-gray-700/50 dark:hover:bg-blue-950/30 dark:border-gray-600 dark:hover:border-blue-700 relative" 
          onClick={() => openExternalLink(subItem.url!)}
        >
          <div className={`w-10 h-10 rounded-lg bg-${subItem.color}-100 flex items-center justify-center mb-2 text-${subItem.color}-600 dark:bg-${subItem.color}-900/50 dark:text-${subItem.color}-400`}>
            {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">{subItem.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{subItem.description}</span>
          </div>
          <ExternalLink className="h-3 w-3 text-gray-400 absolute top-2 right-2 dark:text-gray-500" />
        </div>
      ) : (
                        <Link 
                          to={subItem.path} 
                          className="flex flex-col items-center p-3 rounded-xl bg-gray-50 hover:bg-blue-50/70 transition-all duration-200 border border-gray-100 hover:border-blue-200 dark:bg-gray-700/50 dark:hover:bg-blue-950/30 dark:border-gray-600 dark:hover:border-blue-700" 
                          onClick={handleNavigation}
        >
          <div className={`w-10 h-10 rounded-lg bg-${subItem.color}-100 flex items-center justify-center mb-2 text-${subItem.color}-600 dark:bg-${subItem.color}-900/50 dark:text-${subItem.color}-400`}>
            {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">{subItem.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{subItem.description}</span>
          </div>
        </Link>
      )}
    </motion.div>
  );

  // 渲染移动端分类菜单项
  const renderMobileCategorizedMenu = (items: NavSubItem[], menuName: string) => {
    // 根据菜单类型分组项目
    const getLeftItems = () => {
      if (menuName === "产品与服务") {
        // 行业相关：前3个项目
        return items.slice(0, 3);
      } else if (menuName === "支持与服务") {
        // 服务相关：前3个项目
        return items.slice(0, 3);
      } else if (menuName === "产品体验") {
        // 体验相关：前3个项目
        return items.slice(0, 3);
      }
      return items.slice(0, Math.ceil(items.length / 2));
    };

    const getRightItems = () => {
      if (menuName === "产品与服务") {
        // 使用场景：后3个项目
        return items.slice(3);
      } else if (menuName === "支持与服务") {
        // 支持相关：后3个项目
        return items.slice(3);
      } else if (menuName === "产品体验") {
        // 更多：后3个项目
        return items.slice(3);
      }
      return items.slice(Math.ceil(items.length / 2));
    };

    const leftItems = getLeftItems();
    const rightItems = getRightItems();

    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          {leftItems.map((item, index) => renderMobileMenuItem(item, index))}
        </div>
        <div className="space-y-3">
          {rightItems.map((item, index) => renderMobileMenuItem(item, index + leftItems.length))}
        </div>
      </div>
    );
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img src="/images/scenarios/logo.svg" alt="艺创AI企业网站" className="h-10 w-auto" />
                <span className="ml-1.5 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-medium dark:bg-blue-900 dark:text-blue-300">艺创AI</span>
              </motion.div>
            </Link>

            {/* 桌面端导航 */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="group flex items-center text-sm font-medium px-3 py-2 text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50 relative">
                        {renderMenuItemName(item.name)}
                        <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-[520px] p-5 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 dark:border-gray-700 animate-in fade-in-50 zoom-in-95 duration-150">
                      <div className="flex justify-between mb-3">
                        <div className="px-2">
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                            {item.name === "产品与服务" ? "行业" : item.name === "支持与服务" ? "服务" : "体验"}
                          </h4>
                        </div>
                        <div className="px-2">
                          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                            {item.name === "产品与服务" ? "使用场景" : item.name === "支持与服务" ? "支持" : "更多"}
                          </h4>
                        </div>
                      </div>
                      <div className="h-px bg-gray-100 dark:bg-gray-700 mb-3"></div>
                      <div className="grid grid-cols-2 gap-3">
                        {item.items?.map(renderDropdownItem)}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-8 w-8 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50" 
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "切换到亮色模式" : "切换到暗黑模式"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDarkMode ? "dark" : "light"}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>

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
            <div className="hidden md:flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <a href="https://auth.cnai.art/" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      className="text-sm font-medium text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg px-2 py-1.5 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                    >
                      登录
                    </Button>
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 dark:border-gray-700 animate-in fade-in-50 zoom-in-95 duration-150">
                  <DropdownMenuLabel className="font-normal text-xs text-gray-500 px-2 dark:text-gray-400">账户</DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1 dark:bg-gray-700" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50">
                      <a href="https://auth.cnai.art" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span className="dark:text-gray-200">个人中心</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50">
                      <a href="https://auth.cnai.art/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span className="dark:text-gray-200">账户设置</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50">
                        <Link to="/docs" className="flex items-center" onClick={handleNavigation}>
                        <HelpCircle className="mr-2 h-4 w-4" />
                        <span className="dark:text-gray-200">文档中心</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50">
                      <a href="https://auth.cnai.art/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <span className="dark:text-gray-200">认证中心</span>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <a href="https://auth.cnai.art/" target="_blank" rel="noopener noreferrer">
                <Button className="text-sm font-medium bg-[#015bfe] hover:bg-blue-700 text-white rounded-lg shadow-sm shadow-blue-200 dark:shadow-blue-900/20 px-3 py-1.5">
                  注册
                </Button>
              </a>
            </div>

            {/* 移动端菜单按钮 */}
            <motion.button 
              className="md:hidden p-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 hover:text-[#015bfe] hover:bg-blue-50/70 hover:border-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50 dark:hover:border-blue-700 transition-all duration-200 flex items-center justify-center min-w-[40px] w-10 h-10 shadow-sm"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
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
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
                    className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-lg h-8 w-8 p-0 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50" 
                    onClick={toggleDarkMode}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={isDarkMode ? "dark" : "light"}
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 180, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      </motion.div>
                    </AnimatePresence>
                  </Button>
                </div>
              </div>
              
              <nav className="flex flex-col space-y-2">
                {/* 产品与服务菜单 */}
                <motion.div className="rounded-xl bg-gray-50/50 p-3 dark:bg-gray-800/50" initial="hidden" animate="visible" custom={0} variants={MENU_ITEM_VARIANTS}>
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
                    <motion.div
                      animate={{ rotate: activeDropdown === 'products' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div 
                        variants={MOBILE_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeOut" }} 
                        className="overflow-hidden mt-4"
                      >
                        <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg dark:bg-gray-800/80 dark:border-gray-700">
                          <div className="flex justify-between mb-3">
                            <div className="px-1">
                              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">行业</h4>
                            </div>
                            <div className="px-1">
                              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">使用场景</h4>
                            </div>
                          </div>
                          <div className="h-px bg-gray-200 dark:bg-gray-700 mb-3"></div>
                          {renderMobileCategorizedMenu(navItems.find(item => item.name === "产品与服务")?.items || [], "产品与服务")}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* 产品演示 */}
                <motion.div initial="hidden" animate="visible" custom={1} variants={MENU_ITEM_VARIANTS}>
                  <Link 
                    to="/demo" 
                    className="flex items-center p-4 rounded-xl bg-gray-50/50 hover:bg-blue-50/70 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-950/50" 
                    onClick={handleNavigation}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center mr-3 dark:bg-cyan-900/50">
                      <Zap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200">产品演示</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">在线体验产品功能</span>
                    </div>
                  </Link>
                </motion.div>
                
                {/* 产品文档 */}
                <motion.div initial="hidden" animate="visible" custom={2} variants={MENU_ITEM_VARIANTS}>
                  <Link 
                    to="/docs" 
                    className="flex items-center p-4 rounded-xl bg-gray-50/50 hover:bg-blue-50/70 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-950/50" 
                    onClick={handleNavigation}
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3 dark:bg-indigo-900/50">
                      <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200">产品文档</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">详细的使用指南</span>
                    </div>
                  </Link>
                </motion.div>
                
                {/* 新闻资讯 */}
                <motion.div initial="hidden" animate="visible" custom={3} variants={MENU_ITEM_VARIANTS}>
                  <Link 
                    to="/news" 
                    className="flex items-center p-4 rounded-xl bg-gray-50/50 hover:bg-blue-50/70 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-950/50" 
                    onClick={handleNavigation}
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mr-3 dark:bg-amber-900/50">
                      <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200">新闻资讯</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">最新动态与资讯</span>
                    </div>
                  </Link>
                </motion.div>
                
                {/* 支持与服务菜单 */}
                <motion.div className="rounded-xl bg-gray-50/50 p-3 dark:bg-gray-800/50" initial="hidden" animate="visible" custom={4} variants={MENU_ITEM_VARIANTS}>
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
                    <motion.div
                      animate={{ rotate: activeDropdown === 'agency' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'agency' && (
                      <motion.div 
                        variants={MOBILE_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeOut" }} 
                        className="overflow-hidden mt-4"
                      >
                        <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg dark:bg-gray-800/80 dark:border-gray-700">
                          <div className="flex justify-between mb-3">
                            <div className="px-1">
                              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">服务</h4>
                            </div>
                            <div className="px-1">
                              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">支持</h4>
                            </div>
                          </div>
                          <div className="h-px bg-gray-200 dark:bg-gray-700 mb-3"></div>
                          {renderMobileCategorizedMenu(navItems.find(item => item.name === "支持与服务")?.items || [], "支持与服务")}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* 产品体验菜单 */}
                <motion.div className="rounded-xl bg-gray-50/50 p-3 dark:bg-gray-800/50" initial="hidden" animate="visible" custom={5} variants={MENU_ITEM_VARIANTS}>
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
                    <motion.div
                      animate={{ rotate: activeDropdown === 'experience' ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'experience' && (
                      <motion.div 
                        variants={MOBILE_MENU_VARIANTS}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3, ease: "easeOut" }} 
                        className="overflow-hidden mt-4"
                      >
                        <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-lg dark:bg-gray-800/80 dark:border-gray-700">
                          <div className="flex justify-between mb-3">
                            <div className="px-1">
                              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">体验</h4>
                            </div>
                            <div className="px-1">
                              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">更多</h4>
                            </div>
                          </div>
                          <div className="h-px bg-gray-200 dark:bg-gray-700 mb-3"></div>
                          {renderMobileCategorizedMenu(navItems.find(item => item.name === "产品体验")?.items || [], "产品体验")}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* 关于我们 */}
                <motion.div initial="hidden" animate="visible" custom={6} variants={MENU_ITEM_VARIANTS}>
                  <Link 
                    to="/about" 
                    className="flex items-center p-4 rounded-xl bg-gray-50/50 hover:bg-blue-50/70 transition-colors duration-200 dark:bg-gray-800/50 dark:hover:bg-blue-950/50" 
                    onClick={handleNavigation}
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mr-3 dark:bg-emerald-900/50">
                      <User className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-gray-200">关于我们</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">了解艺创AI团队</span>
                    </div>
                  </Link>
                </motion.div>
                
                {/* 登录和注册按钮 */}
                <motion.div className="pt-6 space-y-3" initial="hidden" animate="visible" custom={7} variants={MENU_ITEM_VARIANTS}>
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 dark:from-blue-950/50 dark:to-indigo-950/50 dark:border-blue-800">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 dark:bg-blue-900/50">
                        <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">账户中心</span>
                    </div>
                    <div className="space-y-2">
                      <motion.div whileTap={{ scale: 0.98 }}>
                        <a href="https://auth.cnai.art/" target="_blank" rel="noopener noreferrer">
                          <Button 
                            variant="outline" 
                            className="border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white w-full font-medium rounded-lg transition-all duration-200 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                          >
                            <User className="h-4 w-4 mr-2" />
                            登录账户
                          </Button>
                        </a>
                      </motion.div>
                      <motion.div whileTap={{ scale: 0.98 }}>
                        <a href="https://auth.cnai.art/" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-gradient-to-r from-[#015bfe] to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white w-full font-medium rounded-lg shadow-lg shadow-blue-200/50 transition-all duration-200 dark:shadow-blue-900/20">
                            <Sparkles className="h-4 w-4 mr-2" />
                            免费注册
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

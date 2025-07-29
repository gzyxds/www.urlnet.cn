"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ChevronDown, ChevronUp, Github, Bell, 
  Moon, Sun, User, Settings, LogOut, HelpCircle, 
  BookOpen, Code, Zap, Layers, ExternalLink, Cloud, Gift
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

/**
 * 网站头部导航组件
 * 功能：响应式导航、下拉菜单、暗黑模式切换、用户菜单、滚动监听
 */
const Header = () => {
  // 状态管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /**
   * 导航点击处理：关闭菜单并滚动到顶部
   */
  const handleNavigation = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * 切换菜单状态
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /**
   * 切换暗黑模式
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // 切换document的class来应用暗黑模式
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // 初始化暗黑模式状态
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 窗口大小变化监听
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // 点击外部区域关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  // 导航菜单项类型定义
  interface NavItem {
    name: string;
    path?: string;
    dropdown?: boolean;
    items?: Array<{
      name: string;
      path: string;
      icon: React.ReactElement;
      color: string;
      description: string;
      external?: boolean;
      url?: string;
    }>;
  }

  // 导航菜单配置
  const navItems: NavItem[] = [
    {
      name: "产品与服务",
      dropdown: true,
      items: [
        { name: "产品中心", path: "/products", icon: <Layers className="h-5 w-5" />, color: "blue", description: "艺创AI产品中心" },
        { name: "数字分身", path: "/products/human", icon: <User className="h-5 w-5" />, color: "indigo", description: "创建您的AI数字分身" },
        { name: "企业知识库", path: "/products/ai", icon: <BookOpen className="h-5 w-5" />, color: "green", description: "构建企业专属知识库" },
        { name: "聊天绘画", path: "/products/chat", icon: <Gift className="h-5 w-5" />, color: "purple", description: "AI辅助创意设计" },
        { name: "论文创作", path: "/products/paper", icon: <Code className="h-5 w-5" />, color: "amber", description: "智能学术写作助手" }
      ]
    },
    { name: "产品演示", path: "/demo" },
    { name: "产品文档", path: "/docs" },
    {
      name: "支持与服务",
      dropdown: true,
      items: [
        { name: "服务支持", path: "/service", icon: <HelpCircle className="h-5 w-5" />, color: "blue", description: "获取专业技术支持" },
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
        { name: "艺创知识库", path: "/products/ai", icon: <BookOpen className="h-5 w-5" />, color: "green", description: "智能知识库体验", external: true, url: "https://www.cnai.art" },
        { name: "艺创数字人", path: "/products/human", icon: <User className="h-5 w-5" />, color: "blue", description: "数字人互动体验", external: true, url: "https://www.cnai.art" },
        { name: "聊天绘画", path: "/products/chat", icon: <Layers className="h-5 w-5" />, color: "purple", description: "AI绘画创作体验", external: true, url: "https://www.cnai.art" },
        { name: "论文创作", path: "/products/paper", icon: <BookOpen className="h-5 w-5" />, color: "amber", description: "智能写作体验", external: true, url: "https://www.cnai.art" },
        { name: "云计算", path: "/demo", icon: <Cloud className="h-5 w-5" />, color: "sky", description: "云端计算服务", external: true, url: "https://www.cnai.art" },
        { name: "免费领卡", path: "/demo", icon: <Gift className="h-5 w-5" />, color: "pink", description: "免费体验卡领取", external: true, url: "https://www.cnai.art" }
      ]
    },
    { name: "关于我们", path: "/about" }
  ];

  // 动画配置
  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" as const }
    })
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
                        {item.name === "产品体验" ? (
                          <span className="relative flex items-center">
                            <span>产品体</span>
                            <span className="relative inline-block">
                              <span>验</span>
                              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            </span>
                          </span>
                        ) : item.name === "产品与服务" ? (
                          <span className="relative flex items-center">
                            <span>产品与服</span>
                            <span className="relative inline-block">
                              <span>务</span>
                              <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            </span>
                          </span>
                        ) : (
                          <span>{item.name}</span>
                        )}
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
                        {item.items?.map((subItem, subIndex) => (
                          <DropdownMenuItem key={subIndex} asChild className="rounded-lg bg-gray-50 hover:bg-blue-50/70 focus:bg-blue-50/70 py-3 px-3 cursor-pointer dark:bg-gray-800 dark:hover:bg-blue-950/30 dark:focus:bg-blue-950/30 transition-all duration-200">
                            {subItem.external ? (
                              <div 
                                className="w-full flex items-center cursor-pointer" 
                                onClick={() => {
                                  window.open(subItem.url, '_blank');
                                  handleNavigation();
                                }}
                              >
                                <div className={`w-10 h-10 rounded-lg bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-500 dark:bg-${subItem.color}-900/30 dark:text-${subItem.color}-400`}>
                                  {React.cloneElement(subItem.icon, { className: "h-5 w-5" })}
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-medium text-gray-800 dark:text-gray-200">{subItem.name}</span>
                                  <span className="text-xs text-gray-500 mt-0.5 dark:text-gray-400">{subItem.description}</span>
                                </div>
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
                        ))}
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
          <div className="flex items-center space-x-2">
            {/* 暗黑模式切换按钮（桌面端） */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-9 w-9 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50" 
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
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-9 w-9 relative dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50">
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
              
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-9 w-9 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50">
                <Github className="h-4 w-4" />
              </Button>
            </div>
            
            {/* 用户菜单（桌面端） */}
            <div className="hidden md:flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-sm font-medium text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50"
                    onClick={() => window.open('https://auth.cnai.art', '_blank')}
                  >
                    登录
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border border-gray-100 shadow-lg bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 dark:border-gray-700 animate-in fade-in-50 zoom-in-95 duration-150">
                  <DropdownMenuLabel className="font-normal text-xs text-gray-500 px-2 dark:text-gray-400">账户</DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1 dark:bg-gray-700" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem 
                      className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50"
                      onClick={() => window.open('https://auth.cnai.art', '_blank')}
                    >
                      <User className="mr-2 h-4 w-4" />
                      <span className="dark:text-gray-200">个人中心</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50"
                      onClick={() => window.open('https://auth.cnai.art', '_blank')}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span className="dark:text-gray-200">账户设置</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50"
                      onClick={() => window.open('https://auth.cnai.art', '_blank')}
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span className="dark:text-gray-200">帮助中心</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="my-1 dark:bg-gray-700" />
                  {/* 注释掉退出登录菜单项 */}
                  {/* <DropdownMenuItem className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer dark:hover:bg-blue-950/50 dark:focus:bg-blue-950/50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span className="dark:text-gray-200">退出登录</span>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                className="text-sm font-medium bg-[#015bfe] hover:bg-blue-700 text-white rounded-lg shadow-sm shadow-blue-200 dark:shadow-blue-900/20"
                onClick={() => window.open('https://auth.cnai.art', '_blank')}
              >
                注册
              </Button>
            </div>

            {/* 移动端菜单按钮 */}
            <motion.button 
              className="md:hidden p-1.5 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-gray-700 dark:text-gray-300" /> : <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg overflow-hidden dark:bg-gray-900"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="container mx-auto px-4 py-4">
              {/* 移动端暗黑模式切换 */}
              <div className="mb-4 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">主题设置</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-lg dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-950/50" 
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      亮色模式
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      暗黑模式
                    </>
                  )}
                </Button>
              </div>
              
              <nav className="flex flex-col space-y-4">
                {/* 产品菜单 */}
                <motion.div className="border-b pb-3 dark:border-gray-700" initial="hidden" animate="visible" custom={0} variants={menuItemVariants}>
                  <button onClick={() => toggleMobileDropdown('products')} className="flex items-center justify-between w-full py-2.5 rounded-lg hover:bg-blue-50/70 px-2 dark:hover:bg-blue-950/50">
                    <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 dark:bg-blue-900/50">
                        <span className="text-blue-600 text-xs dark:text-blue-400">产</span>
                      </div>
                      <span className="relative flex items-center">
                        <span>产品与服</span>
                        <span className="relative inline-block">
                          <span>务</span>
                          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        </span>
                      </span>
                    </div>
                    {activeDropdown === 'products' ? <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }} 
                        className="overflow-hidden">
                        <div className="pl-12 flex flex-col space-y-3 py-2">
                          {navItems[0].items?.map((subItem, index) => (
                            <Link key={index} to={subItem.path} className="text-gray-600 hover:text-[#015bfe] flex items-center dark:text-gray-400 dark:hover:text-blue-400" onClick={handleNavigation}>
                              <div className={`w-7 h-7 rounded-full bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-600 dark:bg-${subItem.color}-900/50 dark:text-${subItem.color}-400`}>
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span>{subItem.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-500">{subItem.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* 产品演示 */}
                <motion.div initial="hidden" animate="visible" custom={1} variants={menuItemVariants}>
                  <Link to="/demo" className="text-gray-700 hover:text-[#015bfe] py-2.5 flex items-center rounded-lg hover:bg-blue-50/70 px-2 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50" onClick={handleNavigation}>
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mr-3 dark:bg-cyan-900/50">
                      <span className="text-cyan-600 text-xs dark:text-cyan-400">演</span>
                    </div>
                    <span>产品演示</span>
                  </Link>
                </motion.div>
                
                {/* 产品文档 */}
                <motion.div initial="hidden" animate="visible" custom={2} variants={menuItemVariants}>
                  <Link to="/docs" className="text-gray-700 hover:text-[#015bfe] py-2.5 flex items-center rounded-lg hover:bg-blue-50/70 px-2 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50" onClick={handleNavigation}>
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3 dark:bg-indigo-900/50">
                      <span className="text-indigo-600 text-xs dark:text-indigo-400">文</span>
                    </div>
                    <span>产品文档</span>
                  </Link>
                </motion.div>
                
                {/* 支持与服务菜单 */}
                <motion.div className="border-b pb-3 dark:border-gray-700" initial="hidden" animate="visible" custom={3} variants={menuItemVariants}>
                  <button onClick={() => toggleMobileDropdown('agency')} className="flex items-center justify-between w-full py-2.5 rounded-lg hover:bg-blue-50/70 px-2 dark:hover:bg-blue-950/50">
                    <div className="font-medium text-gray-800 flex items-center dark:text-gray-200">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 dark:bg-rose-900/50">
                        <span className="text-rose-600 text-xs dark:text-rose-400">支</span>
                      </div>
                      支持与服务
                    </div>
                    {activeDropdown === 'agency' ? <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'agency' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }} 
                        className="overflow-hidden">
                        <div className="pl-12 flex flex-col space-y-3 py-2">
                          {navItems[3].items?.map((subItem, index) => (
                            <Link key={index} to={subItem.path} className="text-gray-600 hover:text-[#015bfe] flex items-center dark:text-gray-400 dark:hover:text-blue-400" onClick={handleNavigation}>
                              <div className={`w-7 h-7 rounded-full bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-600 dark:bg-${subItem.color}-900/50 dark:text-${subItem.color}-400`}>
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span>{subItem.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-500">{subItem.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* 产品体验菜单 */}
                <motion.div className="border-b pb-3 dark:border-gray-700" initial="hidden" animate="visible" custom={4} variants={menuItemVariants}>
                  <button onClick={() => toggleMobileDropdown('experience')} className="flex items-center justify-between w-full py-2.5 rounded-lg hover:bg-blue-50/70 px-2 dark:hover:bg-blue-950/50 relative">
                    <div className="font-medium text-gray-800 flex items-center dark:text-gray-200 relative">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3 dark:bg-orange-900/50 relative">
                        <span className="text-orange-600 text-xs dark:text-orange-400">体</span>
                      </div>
                      <span className="relative flex items-center">
                        <span>产品体</span>
                        <span className="relative inline-block">
                          <span>验</span>
                          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        </span>
                      </span>
                    </div>
                    {activeDropdown === 'experience' ? <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'experience' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }} 
                        className="overflow-hidden">
                        <div className="pl-12 flex flex-col space-y-3 py-2">
                          {navItems[4].items?.map((subItem, index) => (
                            subItem.external ? (
                              <div 
                                key={index} 
                                className="text-gray-600 hover:text-[#015bfe] flex items-center cursor-pointer dark:text-gray-400 dark:hover:text-blue-400" 
                                onClick={() => {
                                  window.open(subItem.url, '_blank');
                                  handleNavigation();
                                }}
                              >
                                <div className={`w-7 h-7 rounded-full bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-600 dark:bg-${subItem.color}-900/50 dark:text-${subItem.color}-400`}>
                                  {subItem.icon}
                                </div>
                                <div className="flex flex-col">
                                  <span>{subItem.name}</span>
                                  <span className="text-xs text-gray-500 dark:text-gray-500">{subItem.description}</span>
                                </div>
                              </div>
                            ) : (
                              <Link key={index} to={subItem.path} className="text-gray-600 hover:text-[#015bfe] flex items-center dark:text-gray-400 dark:hover:text-blue-400" onClick={handleNavigation}>
                                <div className={`w-7 h-7 rounded-full bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-600 dark:bg-${subItem.color}-900/50 dark:text-${subItem.color}-400`}>
                                  {subItem.icon}
                                </div>
                                <div className="flex flex-col">
                                  <span>{subItem.name}</span>
                                  <span className="text-xs text-gray-500 dark:text-gray-500">{subItem.description}</span>
                                </div>
                              </Link>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* 关于我们 */}
                <motion.div initial="hidden" animate="visible" custom={5} variants={menuItemVariants}>
                  <Link to="/about" className="text-gray-700 hover:text-[#015bfe] py-2.5 flex items-center rounded-lg hover:bg-blue-50/70 px-2 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50" onClick={handleNavigation}>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3 dark:bg-emerald-900/50">
                      <span className="text-emerald-600 text-xs dark:text-emerald-400">关</span>
                    </div>
                    <span>关于我们</span>
                  </Link>
                </motion.div>
                
                {/* 登录和试用按钮 */}
                <motion.div className="pt-3 flex flex-col space-y-3" initial="hidden" animate="visible" custom={6} variants={menuItemVariants}>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white w-full font-medium rounded-lg dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                      onClick={() => window.open('https://auth.cnai.art', '_blank')}
                    >
                      登录
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button className="bg-[#015bfe] hover:bg-blue-700 text-white w-full font-medium rounded-lg shadow-sm shadow-blue-200 dark:shadow-blue-900/20">
                      免费试用
                    </Button>
                  </motion.div>
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

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ChevronDown, ChevronUp, Github, Bell, 
  Search, User, Settings, LogOut, HelpCircle, 
  BookOpen, Code, Zap, Layers, ExternalLink
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
import { useMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 网站头部导航组件
 * 包含桌面和移动端两种布局
 * 实现了响应式设计、下拉菜单和动画效果
 * 增加了滚动监听、搜索框和用户菜单
 * 优化了视觉设计和交互体验
 */
const Header = () => {
  // 状态管理
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useMobile();

  /**
   * 页面导航处理函数
   * 实现点击链接时滚动到页面顶部并关闭菜单
   * @param event 点击事件
   */
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // 关闭移动菜单
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // 关闭搜索框
    if (searchOpen) {
      setSearchOpen(false);
    }
    
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 监听页面滚动，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 窗口大小变化时关闭移动菜单
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // 点击页面其他区域时关闭移动菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // 搜索框自动聚焦
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  /**
   * 切换移动端菜单显示状态
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) {
      setSearchOpen(false);
    }
  };

  /**
   * 切换搜索框显示状态
   */
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  /**
   * 切换移动端下拉菜单显示状态
   * @param name 下拉菜单名称
   */
  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // 导航菜单项数据
  const navItems = [
    {
      name: "产品",
      dropdown: true,
      items: [
        { 
          name: "数字分身", 
          path: "/products/digital-twin", 
          icon: <User className="h-4 w-4" />, 
          color: "blue",
          description: "创建您的AI数字分身"
        },
        { 
          name: "企业知识库", 
          path: "/products/knowledge-base", 
          icon: <BookOpen className="h-4 w-4" />, 
          color: "green",
          description: "构建企业专属知识库"
        },
        { 
          name: "聊天绘画", 
          path: "/products/chat-drawing", 
          icon: <Layers className="h-4 w-4" />, 
          color: "purple",
          description: "AI辅助创意设计"
        },
        { 
          name: "论文创作", 
          path: "/products/paper-writing", 
          icon: <Code className="h-4 w-4" />, 
          color: "amber",
          description: "智能学术写作助手"
        }
      ]
    },
    { name: "产品演示", path: "/demo", icon: <Zap className="h-4 w-4" /> },
    { name: "产品文档", path: "/docs", icon: <BookOpen className="h-4 w-4" /> },
    {
      name: "支持与服务",
      dropdown: true,
      items: [
        { 
          name: "服务支持", 
          path: "/service", 
          icon: <HelpCircle className="h-4 w-4" />, 
          color: "blue",
          description: "获取专业技术支持"
        },
        { 
          name: "更新日志", 
          path: "/support#updates", 
          icon: <Zap className="h-4 w-4" />, 
          color: "cyan",
          description: "了解最新功能更新"
        },
        { 
          name: "集成与API", 
          path: "/support#integrations", 
          icon: <Code className="h-4 w-4" />, 
          color: "indigo",
          description: "系统集成开发文档"
        },
        { 
          name: "渠道合作", 
          path: "/support#partnerships", 
          icon: <ExternalLink className="h-4 w-4" />, 
          color: "rose",
          description: "成为我们的合作伙伴"
        },
        { 
          name: "APP下载", 
          path: "/support#downloads", 
          icon: <Settings className="h-4 w-4" />, 
          color: "emerald",
          description: "移动端应用下载"
        }
      ]
    },
    { name: "关于我们", path: "/about", icon: <User className="h-4 w-4" /> }
  ];

  // 动画变体
  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <header 
      id="main-header"
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-white border-b border-gray-100 py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center group" onClick={handleNavigation}>
              <motion.div 
                className="text-xl font-bold text-[#015bfe] transition-colors relative flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 5L21 9L12 13L3 9Z" stroke="#015bfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9V15L12 19L21 15V9" stroke="#015bfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="9" r="2" fill="#015bfe" />
                </svg>
                <span className="font-bold tracking-tight">艺创AI</span>
                <span className="ml-1.5 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full font-medium">AI</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="flex items-center text-sm font-medium px-3 py-2 text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="center" 
                      className="w-60 p-2 rounded-xl border border-gray-100 shadow-lg animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-2"
                    >
                      {item.items?.map((subItem, subIndex) => (
                        <DropdownMenuItem 
                          key={subIndex} 
                          asChild 
                          className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2.5 px-2 my-0.5 cursor-pointer"
                        >
                          <Link to={subItem.path} className="w-full flex items-center" onClick={handleNavigation}>
                            <div className={`w-9 h-9 rounded-lg bg-${subItem.color}-100 flex items-center justify-center mr-3 text-${subItem.color}-600`}>
                              {subItem.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-800">{subItem.name}</span>
                              <span className="text-xs text-gray-500 mt-0.5">
                                {subItem.description}
                              </span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={index} to={item.path} onClick={handleNavigation}>
                    <Button 
                      variant="ghost" 
                      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg"
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Search Bar (Desktop) */}
            <AnimatePresence>
              {searchOpen ? (
                <motion.div 
                  className="hidden md:flex items-center bg-gray-100 rounded-full overflow-hidden pr-2"
                  initial={{ width: 40, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 40, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="搜索产品、文档..."
                    className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-500 hover:text-[#015bfe] rounded-full h-7 w-7"
                    onClick={toggleSearch}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden md:block"
                >
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-9 w-9"
                    onClick={toggleSearch}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification & Github (Desktop) */}
            <div className="hidden md:flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-9 w-9 relative"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 p-2 rounded-xl border border-gray-100 shadow-lg">
                  <DropdownMenuLabel className="font-medium text-sm px-2 flex justify-between items-center">
                    <span>通知</span>
                    <Button variant="ghost" size="sm" className="text-xs text-blue-600 hover:text-blue-700 h-auto py-1">
                      全部标为已读
                    </Button>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1" />
                  <div className="max-h-[280px] overflow-y-auto py-1">
                    <div className="px-2 py-2 hover:bg-blue-50 rounded-lg cursor-pointer">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600 flex-shrink-0">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">系统更新</p>
                          <p className="text-xs text-gray-500 mt-0.5">艺创AI平台已更新至最新版本，新增多项功能</p>
                          <p className="text-xs text-gray-400 mt-1">10分钟前</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 py-2 hover:bg-blue-50 rounded-lg cursor-pointer">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 flex-shrink-0">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">账户提醒</p>
                          <p className="text-xs text-gray-500 mt-0.5">您的试用期还剩7天，请考虑升级到专业版</p>
                          <p className="text-xs text-gray-400 mt-1">2小时前</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="my-1" />
                  <Button variant="ghost" className="w-full justify-center text-sm text-gray-600 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg">
                    查看全部通知
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-9 w-9"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
            
            {/* User Menu (Desktop) */}
            <div className="hidden md:flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-sm font-medium text-gray-700 hover:text-[#015bfe] hover:bg-blue-50/70 rounded-lg"
                  >
                    登录
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-2 rounded-xl border border-gray-100 shadow-lg">
                  <DropdownMenuLabel className="font-normal text-xs text-gray-500 px-2">账户</DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1" />
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>个人中心</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>账户设置</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>帮助中心</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="my-1" />
                  <DropdownMenuItem className="rounded-lg hover:bg-blue-50 focus:bg-blue-50 py-2 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>退出登录</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                className="text-sm font-medium bg-[#015bfe] hover:bg-blue-700 text-white rounded-lg shadow-sm shadow-blue-200"
              >
                免费试用
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-1.5 rounded-lg border border-gray-200 bg-white shadow-sm"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 1 }}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    placeholder="搜索产品、文档..."
                    className="bg-transparent border-none outline-none px-4 py-2.5 text-sm w-full"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-gray-500 hover:text-[#015bfe] rounded-lg h-9 w-9 mr-1"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <nav className="flex flex-col space-y-4">
                <motion.div 
                  className="border-b pb-3"
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={menuItemVariants}
                >
                  <button 
                    onClick={() => toggleMobileDropdown('products')}
                    className="flex items-center justify-between w-full py-2.5 rounded-lg hover:bg-blue-50/70 px-2"
                  >
                    <div className="font-medium text-gray-800 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 text-xs">产</span>
                      </div>
                      产品
                    </div>
                    {activeDropdown === 'products' ? 
                      <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    }
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'products' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 flex flex-col space-y-3 py-2">
                          {navItems[0].items?.map((subItem, index) => (
                            <Link 
                              key={index}
                              to={subItem.path} 
                              className="text-gray-600 hover:text-[#015bfe] flex items-center" 
                              onClick={handleNavigation}
                            >
                              <div className={`w-7 h-7 rounded-full bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-600`}>
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span>{subItem.name}</span>
                                <span className="text-xs text-gray-500">{subItem.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={menuItemVariants}
                >
                  <Link to="/demo" className="text-gray-700 hover:text-[#015bfe] py-2.5 flex items-center rounded-lg hover:bg-blue-50/70 px-2" onClick={handleNavigation}>
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                      <span className="text-cyan-600 text-xs">演</span>
                    </div>
                    <span>产品演示</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  variants={menuItemVariants}
                >
                  <Link to="/docs" className="text-gray-700 hover:text-[#015bfe] py-2.5 flex items-center rounded-lg hover:bg-blue-50/70 px-2" onClick={handleNavigation}>
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <span className="text-indigo-600 text-xs">文</span>
                    </div>
                    <span>产品文档</span>
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="border-b pb-3"
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  variants={menuItemVariants}
                >
                  <button 
                    onClick={() => toggleMobileDropdown('support')}
                    className="flex items-center justify-between w-full py-2.5 rounded-lg hover:bg-blue-50/70 px-2"
                  >
                    <div className="font-medium text-gray-800 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                        <span className="text-rose-600 text-xs">支</span>
                      </div>
                      支持与服务
                    </div>
                    {activeDropdown === 'support' ? 
                      <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    }
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === 'support' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 flex flex-col space-y-3 py-2">
                          {navItems[3].items?.map((subItem, index) => (
                            <Link 
                              key={index}
                              to={subItem.path} 
                              className="text-gray-600 hover:text-[#015bfe] flex items-center" 
                              onClick={handleNavigation}
                            >
                              <div className={`w-7 h-7 rounded-full bg-${subItem.color}-50 flex items-center justify-center mr-3 text-${subItem.color}-600`}>
                                {subItem.icon}
                              </div>
                              <div className="flex flex-col">
                                <span>{subItem.name}</span>
                                <span className="text-xs text-gray-500">{subItem.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  variants={menuItemVariants}
                >
                  <Link to="/about" className="text-gray-700 hover:text-[#015bfe] py-2.5 flex items-center rounded-lg hover:bg-blue-50/70 px-2" onClick={handleNavigation}>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <span className="text-emerald-600 text-xs">关</span>
                    </div>
                    <span>关于我们</span>
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="pt-3 flex flex-col space-y-3"
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  variants={menuItemVariants}
                >
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white w-full font-medium rounded-lg"
                    >
                      登录
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="bg-[#015bfe] hover:bg-blue-700 text-white w-full font-medium rounded-lg shadow-sm shadow-blue-200"
                    >
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

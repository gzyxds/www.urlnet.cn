"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp, Github, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 网站头部导航组件
 * 包含桌面和移动端两种布局
 * 实现了响应式设计、下拉菜单和动画效果
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useMobile();

  /**
   * 页面导航处理函数
   * 实现点击链接时滚动到页面顶部
   * @param event 点击事件
   */
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // 关闭移动菜单
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
      const header = document.getElementById('main-header');
      if (mobileMenuOpen && header && !header.contains(event.target as Node)) {
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

  /**
   * 切换移动端菜单显示状态
   */
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  /**
   * 切换移动端下拉菜单显示状态
   * @param name 下拉菜单名称
   */
  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header 
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 py-2"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center group" onClick={handleNavigation}>
              <motion.span 
                className="text-xl font-bold text-[#015bfe] transition-colors relative flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 5L21 9L12 13L3 9Z" stroke="#015bfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9V15L12 19L21 15V9" stroke="#015bfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                艺创AI
                <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">AI</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center text-sm font-medium px-2 text-gray-600 hover:text-[#015bfe]"
                  >
                    <span>产品</span>
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 p-2 rounded-md border border-gray-100 shadow-md">
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2">
              <Link to="/products/digital-twin" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-xs">数字</span>
                      </div>
                      <span>数字分身</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2 mt-1">
              <Link to="/products/knowledge-base" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-600 text-xs">知识</span>
                      </div>
                      <span>企业知识库</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2 mt-1">
              <Link to="/products/chat-drawing" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-purple-100 flex items-center justify-center mr-2">
                        <span className="text-purple-600 text-xs">绘画</span>
                      </div>
                      <span>聊天绘画</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2 mt-1">
              <Link to="/products/paper-writing" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-amber-100 flex items-center justify-center mr-2">
                        <span className="text-amber-600 text-xs">论文</span>
                      </div>
                      <span>论文创作</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/demo" onClick={handleNavigation}>
                <Button 
                  variant="ghost" 
                  className="px-2 text-sm font-medium text-gray-600 hover:text-[#015bfe]"
                >
                  产品演示
                </Button>
              </Link>

              <Link to="/docs" onClick={handleNavigation}>
                <Button 
                  variant="ghost" 
                  className="px-2 text-sm font-medium text-gray-600 hover:text-[#015bfe]"
                >
                  产品文档
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="flex items-center text-sm font-medium px-2 text-gray-600 hover:text-[#015bfe]"
                  >
                    <span>支持与服务</span>
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 p-2 rounded-md border border-gray-100 shadow-md">
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2">
              <Link to="/service" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-xs">服务</span>
                      </div>
                      <span>服务支持</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2 mt-1">
              <Link to="/support#updates" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-cyan-100 flex items-center justify-center mr-2">
                        <span className="text-cyan-600 text-xs">更新</span>
                      </div>
                      <span>更新日志</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2 mt-1">
              <Link to="/support#integrations" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-indigo-100 flex items-center justify-center mr-2">
                        <span className="text-indigo-600 text-xs">API</span>
                      </div>
                      <span>集成与API</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2 mt-1">
              <Link to="/support#partnerships" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-rose-100 flex items-center justify-center mr-2">
                        <span className="text-rose-600 text-xs">合作</span>
                      </div>
                      <span>渠道合作</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="rounded-md hover:bg-blue-50 focus:bg-blue-50 py-2 mt-1">
              <Link to="/support#downloads" className="w-full flex items-center" onClick={handleNavigation}>
                      <div className="w-7 h-7 rounded-md bg-emerald-100 flex items-center justify-center mr-2">
                        <span className="text-emerald-600 text-xs">APP</span>
                      </div>
                      <span>APP下载</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/about" onClick={handleNavigation}>
                <Button 
                  variant="ghost" 
                  className="px-2 text-sm font-medium text-gray-600 hover:text-[#015bfe]"
                >
                  关于我们
                </Button>
              </Link>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 mr-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-8 w-8"
              >
                <Bell className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-600 hover:text-[#015bfe] hover:bg-blue-50 rounded-full h-8 w-8"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              <Button 
                variant="ghost" 
                className="text-sm font-medium text-gray-600 hover:text-[#015bfe] hover:bg-blue-50"
              >
                登录
              </Button>
              <Button 
                className="text-sm font-medium bg-[#015bfe] hover:bg-blue-700 text-white"
              >
                免费试用
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-1 rounded-md border border-gray-200"
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
            className="md:hidden bg-white shadow-md overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <div className="border-b pb-3">
                  <button 
                    onClick={() => toggleMobileDropdown('products')}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <div className="font-medium text-gray-800 flex items-center">
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center mr-2">
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
                        <div className="pl-9 flex flex-col space-y-3 py-2">
                          <Link to="/products/digital-twin" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                              <span className="text-blue-600 text-xs">数</span>
                            </div>
                            数字分身
                          </Link>
                          <Link to="/products/knowledge-base" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mr-2">
                              <span className="text-green-600 text-xs">知</span>
                            </div>
                            企业知识库
                          </Link>
                          <Link to="/products/chat-drawing" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mr-2">
                              <span className="text-purple-600 text-xs">绘</span>
                            </div>
                            聊天绘画
                          </Link>
                          <Link to="/products/paper-writing" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center mr-2">
                              <span className="text-amber-600 text-xs">论</span>
                            </div>
                            论文创作
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/demo" className="text-gray-700 hover:text-[#015bfe] py-2 flex items-center" onClick={handleNavigation}>
                  <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center mr-2">
                    <span className="text-cyan-600 text-xs">演</span>
                  </div>
                  产品演示
                </Link>
                
                <Link to="/docs" className="text-gray-700 hover:text-[#015bfe] py-2 flex items-center" onClick={handleNavigation}>
                  <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                    <span className="text-indigo-600 text-xs">文</span>
                  </div>
                  产品文档
                </Link>
                
                <div className="border-b pb-3">
                  <button 
                    onClick={() => toggleMobileDropdown('support')}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <div className="font-medium text-gray-800 flex items-center">
                      <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center mr-2">
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
                        <div className="pl-9 flex flex-col space-y-3 py-2">
                          <Link to="/service" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                              <span className="text-blue-600 text-xs">服</span>
                            </div>
                            服务支持
                          </Link>
                          <Link to="/support#updates" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center mr-2">
                              <span className="text-cyan-600 text-xs">更</span>
                            </div>
                            更新日志
                          </Link>
                          <Link to="/support#integrations" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center mr-2">
                              <span className="text-indigo-600 text-xs">集</span>
                            </div>
                            集成与API
                          </Link>
                          <Link to="/support#partnerships" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center mr-2">
                              <span className="text-rose-600 text-xs">渠</span>
                            </div>
                            渠道合作
                          </Link>
                          <Link to="/support#downloads" className="text-gray-600 hover:text-[#015bfe] flex items-center" onClick={handleNavigation}>
                            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center mr-2">
                              <span className="text-emerald-600 text-xs">A</span>
                            </div>
                            APP下载
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/about" className="text-gray-700 hover:text-[#015bfe] py-2 flex items-center" onClick={handleNavigation}>
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center mr-2">
                    <span className="text-emerald-600 text-xs">关</span>
                  </div>
                  关于我们
                </Link>
                
                <div className="pt-3 flex flex-col space-y-3">
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white w-full font-medium"
                    >
                      登录
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="bg-[#015bfe] hover:bg-blue-700 text-white w-full font-medium"
                    >
                      免费试用
                    </Button>
                  </motion.div>
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
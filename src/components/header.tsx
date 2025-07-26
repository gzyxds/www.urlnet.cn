"use client";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-2xl font-bold transition-colors",
              isScrolled ? "text-[#015bfe]" : "text-white"
            )}>
              AI科技
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "flex items-center",
                    isScrolled ? "text-gray-700 hover:text-[#015bfe]" : "text-white hover:text-white/80"
                  )}
                >
                  产品
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/products/digital-twin" className="w-full">数字分身</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/knowledge-base" className="w-full">企业知识库</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/chat-drawing" className="w-full">聊天绘画</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/products/paper-writing" className="w-full">论文创作</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/demo">
              <Button 
                variant="ghost" 
                className={cn(
                  isScrolled ? "text-gray-700 hover:text-[#015bfe]" : "text-white hover:text-white/80"
                )}
              >
                产品演示
              </Button>
            </Link>

            <Link to="/docs">
              <Button 
                variant="ghost" 
                className={cn(
                  isScrolled ? "text-gray-700 hover:text-[#015bfe]" : "text-white hover:text-white/80"
                )}
              >
                产品文档
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "flex items-center",
                    isScrolled ? "text-gray-700 hover:text-[#015bfe]" : "text-white hover:text-white/80"
                  )}
                >
                  支持与服务
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/support#updates" className="w-full">更新日志</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/support#integrations" className="w-full">集成与API</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/support#partnerships" className="w-full">聚道合作</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/support#downloads" className="w-full">APP下载</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about">
              <Button 
                variant="ghost" 
                className={cn(
                  isScrolled ? "text-gray-700 hover:text-[#015bfe]" : "text-white hover:text-white/80"
                )}
              >
                关于我们
              </Button>
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant={isScrolled ? "outline" : "ghost"} 
              className={cn(
                isScrolled 
                  ? "border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white" 
                  : "border-white text-white hover:bg-white/20"
              )}
            >
              登录
            </Button>
            <Button 
              className={cn(
                isScrolled 
                  ? "bg-[#015bfe] hover:bg-blue-700 text-white" 
                  : "bg-white text-[#015bfe] hover:bg-white/90"
              )}
            >
              免费试用
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-gray-700" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="border-b pb-2">
                <div className="font-medium mb-2">产品</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/products/digital-twin" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    数字分身
                  </Link>
                  <Link to="/products/knowledge-base" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    企业知识库
                  </Link>
                  <Link to="/products/chat-drawing" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    聊天绘画
                  </Link>
                  <Link to="/products/paper-writing" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    论文创作
                  </Link>
                </div>
              </div>
              
              <Link to="/demo" className="text-gray-700 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                产品演示
              </Link>
              
              <Link to="/docs" className="text-gray-700 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                产品文档
              </Link>
              
              <div className="border-b pb-2">
                <div className="font-medium mb-2">支持与服务</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/support#updates" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    更新日志
                  </Link>
                  <Link to="/support#integrations" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    集成与API
                  </Link>
                  <Link to="/support#partnerships" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    聚道合作
                  </Link>
                  <Link to="/support#downloads" className="text-gray-600 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                    APP下载
                  </Link>
                </div>
              </div>
              
              <Link to="/about" className="text-gray-700 hover:text-[#015bfe]" onClick={toggleMobileMenu}>
                关于我们
              </Link>
              
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" className="border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe] hover:text-white w-full">
                  登录
                </Button>
                <Button className="bg-[#015bfe] hover:bg-blue-700 text-white w-full">
                  免费试用
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
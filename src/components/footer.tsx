import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">AI科技</h3>
            <p className="text-gray-300 mb-4">
              我们致力于为企业和个人提供先进的人工智能解决方案，
              帮助客户实现数字化转型和智能化升级。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  产品服务
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-white">
                  产品演示
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-300 hover:text-white">
                  产品文档
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white">
                  支持与服务
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span className="text-gray-300">北京市海淀区中关村科技园区</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span className="text-gray-300">400-888-8888</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span className="text-gray-300">contact@aitech.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⏰</span>
                <span className="text-gray-300">周一至周五 9:00-18:00</span>
              </li>
            </ul>
          </div>

          {/* 订阅通讯 */}
          <div>
            <h3 className="text-xl font-bold mb-4">订阅通讯</h3>
            <p className="text-gray-300 mb-4">
              订阅我们的通讯，获取最新的产品更新和行业资讯。
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="bg-[#2d4a77] border-[#2d4a77] text-white placeholder:text-gray-400 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-[#015bfe] hover:bg-blue-700 rounded-l-none">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AI科技. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                隐私政策
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                服务条款
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#f8f9fa] to-[#f0f2f5] text-gray-700 py-16">
      <div className="container mx-auto px-4">
        {/* 顶部区域 - 下载客户端 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 mb-16 relative overflow-hidden group">
          {/* 背景装饰 */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-indigo-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="flex flex-col md:flex-row items-center mb-8 md:mb-0">
              {/* 左侧LOGO和文字 */}
              <div className="relative mb-6 md:mb-0 md:mr-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
                <div className="relative bg-white p-4 rounded-2xl transform group-hover:rotate-3 transition-transform duration-500">
                  <img 
                    src="https://artaigc.cn/_astro/logo.gF7LHtOp.svg" 
                    alt="艺创AI" 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="inline-flex items-center px-3 py-1 mb-3 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  全新上线
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-2">艺创AI客户端</h3>
                <p className="text-gray-600 max-w-md">一键安装，畅享AI创作的无限可能，随时随地激发创意灵感</p>
              </div>
            </div>
            
            {/* 右侧按钮和平台图标 */}
            <div className="flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-base rounded-xl transition-all">
                  免费使用
                </Button>
                <Button variant="outline" className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-base rounded-xl group-hover:border-indigo-300 transition-colors">
                  <span className="mr-2">客户端下载</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </Button>
              </div>
              
              {/* 平台图标 */}
              <div className="flex justify-center space-x-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8z"/>
                    <circle cx="12" cy="17" r="1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* 产品功能 - 占4列 */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-blue-500 rounded-full mr-3"></span>
              产品功能
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <Link to="/ai-painting" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                AI绘画
              </Link>
              <Link to="/image-tools" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                图片工具
              </Link>
              <Link to="/text-generation" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                文生图
              </Link>
              <Link to="/image-enhancement" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                老照片修复
              </Link>
              <Link to="/image-generation" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                图生图
              </Link>
              <Link to="/text-removal" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                文字擦除
              </Link>
              <Link to="/ai-writing" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                AI写画图
              </Link>
              <Link to="/art-creation" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                艺术一键创
              </Link>
              <Link to="/ai-music" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                AI音乐
              </Link>
              <Link to="/image-video" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                图片视频
              </Link>
              <Link to="/ai-video" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                AI视频
              </Link>
              <Link to="/text-video" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                文字视频
              </Link>
              <Link to="/card-id" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                卡通头像
              </Link>
              <Link to="/ai-products" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                AI绘制作品
              </Link>
            </div>
          </div>
          
          {/* 服务与支持 - 占3列 */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-green-500 rounded-full mr-3"></span>
              服务与支持
            </h4>
            <div className="grid grid-cols-1 gap-y-3">
              <Link to="/help-center" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                帮助中心
              </Link>
              <Link to="/agent-cooperation" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                招募计划
              </Link>
              <Link to="/new-guide" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                新手密函
              </Link>
              <Link to="/third-party" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                投诉通道
              </Link>
              <Link to="/free-trial" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                免费声明
              </Link>
            </div>
          </div>
          
          {/* 关于 - 占2列 */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-purple-500 rounded-full mr-3"></span>
              关于
            </h4>
            <div className="grid grid-cols-1 gap-y-3">
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                隐私政策
              </Link>
              <Link to="/user-agreement" className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center">
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                用户协议
              </Link>
            </div>
          </div>
          
          {/* 二维码 - 占3列 */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-gray-900 text-lg mb-6 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 rounded-full mr-3"></span>
              关注我们
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center group">
                <div className="bg-white p-2 rounded-xl shadow-md mb-3 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <img 
                    src="/images/qrcode.png" 
                    alt="扫码加入社群" 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300">扫码加入社群</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white p-2 rounded-xl shadow-md mb-3 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <img 
                    src="/images/qrcode.png" 
                    alt="关注微信公众号" 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300">关注微信公众号</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white p-2 rounded-xl shadow-md mb-3 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <img 
                    src="/images/qrcode.png" 
                    alt="关注微信小程序" 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300">关注微信小程序</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部版权信息 */}
        <div className="mt-16">
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-500">
            <div className="mb-3 md:mb-0">
              <p>© COPYRIGHT 2023-{new Date().getFullYear()} 艺创AI All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4">
              <p>粤ICP备20230103583-1</p>
              <p>艺创AI</p>
              <p>粤公网安备：44010402704093号</p>
              <p>粤ICP备：44010450049601Z4001号</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
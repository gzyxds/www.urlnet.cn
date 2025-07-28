import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const demoItems = [
  {
    title: "AI数字人SaaS系统2.0",
    subtitle: "演示中心",
    description: "通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。",
    accounts: [
      {
        name: "PC端后台",
        url: "https://ai.xxx.com/admin/login",
        username: "admin",
        password: "123456"
      },
      {
        name: "代理商后台",
        url: "https://ai.xxx.com/agent/login",
        username: "admin",
        password: "123456"
      },
      {
        name: "前端演示",
        url: "https://ai.xxx.com/index",
        username: "admin",
        password: "123456"
      }
    ],
    mainImage: "https://server.mddai.cn/uploads/images/20241128195611806125108.png",
    qrImage: "https://server.mddai.cn/uploads/images/20250718115939d37a60656.jpg"
  },
  {
    title: "艺创-全能AI知识库系统",
    subtitle: "企业级智能知识管理平台",
    description: "基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心，提升信息检索效率。",
    accounts: [
      {
        name: "管理后台",
        url: "https://ai.xxx.com/admin/login",
        username: "admin",
        password: "123456"
      },
      {
        name: "前端演示",
        url: "https://ai.xxx.com/index",
        username: "demo",
        password: "demo123"
      }
    ],
    mainImage: "https://artaigc.cn/assets/saas.svg",
    qrImage: "https://server.mddai.cn/uploads/images/20250718115939d37a60656.jpg"
  },
  {
    title: "艺创-智能聊天绘画系统",
    subtitle: "AI创作与对话平台",
    description: "集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AI进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型，适用于创意设计、内容生成等领域。",
    accounts: [
      {
        name: "创作平台",
        url: "https://ai.xxx.com/create",
        username: "artist",
        password: "create123"
      },
      {
        name: "聊天演示",
        url: "https://ai.xxx.com/chat",
        username: "chat",
        password: "chat123"
      }
    ],
    mainImage: "https://artaigc.cn/assets/ai.svg",
    qrImage: "https://server.mddai.cn/uploads/images/20250718115939d37a60656.jpg"
  },
  {
    title: "艺创-长文写作系统",
    subtitle: "智能学术写作助手",
    description: "专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。",
    accounts: [
      {
        name: "写作平台",
        url: "https://ai.xxx.com/write",
        username: "writer",
        password: "write123"
      },
      {
        name: "文献检索",
        url: "https://ai.xxx.com/research",
        username: "research",
        password: "research123"
      }
    ],
    mainImage: "https://artaigc.cn/assets/lw.svg",
    qrImage: "https://server.mddai.cn/uploads/images/20250718115939d37a60656.jpg"
  }
];

// 渐变背景色数组
const sectionBg = [
  "bg-gradient-to-br from-blue-100/80 via-blue-50/80 to-indigo-100/70",
  "bg-gradient-to-br from-cyan-100/80 via-blue-50/80 to-blue-100/70",
  "bg-gradient-to-br from-indigo-100/80 via-purple-50/80 to-blue-100/70",
  "bg-gradient-to-br from-blue-100/80 via-pink-100/80 to-purple-100/70"
];

const DemoShowcase = () => {
  // 新增状态管理
  const [showDemoQRCode, setShowDemoQRCode] = useState(false);
  const [showServiceQRCode, setShowServiceQRCode] = useState(false);

  // 处理二维码弹窗
  const handleShowDemoQRCode = () => {
    setShowDemoQRCode(true);
  };

  const handleCloseDemoQRCode = () => {
    setShowDemoQRCode(false);
  };

  const handleShowServiceQRCode = () => {
    setShowServiceQRCode(true);
  };

  const handleCloseServiceQRCode = () => {
    setShowServiceQRCode(false);
  };

  return (
    <div>
      {demoItems.map((demoItem, idx) => {
        // 偶数：左文右图，奇数：左图右文
        const isEven = idx % 2 === 0;
        const bgClass = sectionBg[idx % sectionBg.length];
        return (
          <section key={demoItem.title} className={`py-16 sm:py-20 relative overflow-hidden ${bgClass}`}>
            {/* 背景装饰元素 - 优化移动端显示 */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-30 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-100 blur-2xl sm:blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-indigo-100 blur-2xl sm:blur-3xl"></div>
            </div>
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10`}>
              <div className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* 左侧内容 - 优化移动端布局 */}
                <div className={`w-full lg:w-1/2 order-2 lg:order-1`}>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                    在线演示
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                    {demoItem.title}<br className="hidden sm:block" />{demoItem.subtitle}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-500 mb-6 sm:mb-8 leading-relaxed">
                    {demoItem.description}
                  </p>
                  <div className="bg-white/90 rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-md">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                        <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      </div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900">演示账号信息</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      {demoItem.accounts.map((acc) => (
                        <div key={acc.name} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50/80 rounded-lg">
                          <div className="mb-2 sm:mb-0">
                            <p className="text-xs sm:text-sm font-medium text-gray-900">{acc.name}</p>
                            <p className="text-xs text-gray-500 break-all sm:break-normal">{acc.url}</p>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 mr-1 sm:mr-2">账号:</span>
                              <span className="text-xs font-medium">{acc.username}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 mr-1 sm:mr-2">密码:</span>
                              <span className="text-xs font-medium">{acc.password}</span>
                            </div>
                            <Button variant="outline" size="sm" className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0" asChild>
                              <a href={acc.url} target="_blank" rel="noopener noreferrer">访问</a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]"
                      onClick={handleShowDemoQRCode}
                    >
                      申请专属演示
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-900 hover:bg-gray-50/20 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]"
                      onClick={handleShowServiceQRCode}
                    >
                      联系客服
                    </Button>
                  </div>
                </div>
                {/* 右侧内容 - 优化移动端显示 */}
                <div className={`w-full lg:w-1/2 flex justify-center order-1 lg:order-2`}>
                  <div className="relative w-full max-w-md lg:max-w-none">
                    {/* 主要演示图 */}
                    <div className="bg-white/90 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-md">
                      <img 
                        src={demoItem.mainImage} 
                        alt={demoItem.title + '演示界面'} 
                        className="w-full rounded-lg"
                        loading="lazy"
                      />
                      <div className="mt-3 sm:mt-4 flex items-center justify-between">
                        <div>
                          <h4 className="text-xs sm:text-sm font-medium text-gray-900">数字人管理平台</h4>
                          <p className="text-xs text-gray-500">一站式管理您的所有数字人资产</p>
                        </div>
                        <div className="flex space-x-1 sm:space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>
                    </div>
                    {/* 二维码 - 优化移动端位置 */}
                    <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white/90 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md">
                      <img 
                        src={demoItem.qrImage} 
                        alt="演示二维码" 
                        className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-md"
                        loading="lazy"
                      />
                      <p className="text-xs text-center mt-1 sm:mt-2 text-gray-600">扫码体验移动端</p>
                    </div>
                    {/* 装饰元素 - 优化移动端显示 */}
                    <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-blue-600 rounded-xl p-3 sm:p-4 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-white">在线演示</p>
                          <p className="text-xs text-blue-100">实时体验</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* 申请专属演示二维码模态框 */}
      <AnimatePresence>
        {showDemoQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            onClick={handleCloseDemoQRCode}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseDemoQRCode}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="关闭"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              
              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">申请专属演示</h3>
                <p className="text-sm text-gray-600 mb-6">扫描二维码联系专属顾问</p>
                
                {/* 二维码 */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img 
                      src="/images/qrcode.png" 
                      alt="专属演示二维码" 
                      className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
                    />
                  </div>
                </div>
                
                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 联系客服二维码模态框 */}
      <AnimatePresence>
        {showServiceQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            onClick={handleCloseServiceQRCode}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseServiceQRCode}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="关闭"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              
              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">联系客服</h3>
                <p className="text-sm text-gray-600 mb-6">扫描二维码添加客服微信</p>
                
                {/* 二维码 */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img 
                      src="/images/qrcode.png" 
                      alt="客服二维码" 
                      className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
                    />
                  </div>
                </div>
                
                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DemoShowcase;

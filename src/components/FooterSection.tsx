import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMobile } from "@/hooks/use-mobile";

/**
 * Footer组件 - 网站底部区域
 * 包含客户端下载区域、产品功能菜单、服务支持、关于我们和二维码等内容
 * 在移动端使用手风琴模式展示菜单，桌面端使用网格布局
 */
const Footer = () => {
  const isMobile = useMobile();

  /**
   * 渲染菜单内容 - 根据设备类型选择不同的布局方式
   * @returns JSX.Element 菜单内容
   */
  const renderMenuContent = () => {
    const menuData = [
      {
        id: "ai-creation",
        title: "AI创作工具",
        items: [
          { to: "https://www.cnai.art/draw/doubao", label: "AI绘画" },
          { to: "https://www.cnai.art/draw/doubao", label: "文生图" },
          { to: "https://www.cnai.art/draw/doubao", label: "图生图" },
          { to: "https://www.cnai.art/draw/doubao", label: "AI画图" },
          { to: "https://www.cnai.art/draw/doubao", label: "AI音乐" },
          { to: "https://www.cnai.art/draw/doubao", label: "卡通头像" }
        ]
      },
      {
        id: "media-tools",
        title: "媒体处理",
        items: [
          { to: "https://www.cnai.art/draw/doubao", label: "图片工具" },
          { to: "https://www.cnai.art/draw/doubao", label: "老照片修复" },
          { to: "https://www.cnai.art/draw/doubao", label: "文字擦除" },
          { to: "https://www.cnai.art/video", label: "图片视频" },
          { to: "https://www.cnai.art/draw/doubao", label: "AI视频" },
          { to: "https://www.cnai.art/draw/doubao", label: "文字视频" }
        ]
      },
      {
        id: "services",
        title: "服务与支持",
        items: [
          { to: "/help-center", label: "帮助中心" },
          { to: "/agent-cooperation", label: "招募计划" },
          { to: "/new-guide", label: "新手密函" },
          { to: "/third-party", label: "投诉通道" },
          { to: "/free-trial", label: "免费声明" }
        ]
      },
      {
        id: "about",
        title: "关于",
        items: [
          { to: "/privacy", label: "隐私政策" },
          { to: "/user-agreement", label: "用户协议" },
          { to: "/contact", label: "联系我们" },
          { to: "/about-us", label: "关于我们" }
        ]
      }
    ];

    if (isMobile) {
      // 移动端使用手风琴模式
      return (
        <div className="space-y-4">
          <Accordion type="multiple" className="w-full">
            {menuData.map((section) => (
              <AccordionItem key={section.id} value={section.id} className="border-gray-200">
                <AccordionTrigger className="text-left font-medium text-gray-900 text-base hover:text-blue-600 transition-colors duration-200">
                  <div className="flex items-center">
                    <span className="w-1 h-4 bg-blue-500 rounded-full mr-3"></span>
                    {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className={`grid gap-y-2 ${
                    section.id === 'products' ? 'grid-cols-2 gap-x-4' : 'grid-cols-1'
                  }`}>
                    {section.items.map((item) => (
                      <Link
                        key={`${section.id}-${item.label}`}
                        to={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center"
                      >
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="truncate">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* 移动端二维码区域 */}
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 text-base mb-4 flex items-center">
              <span className="w-1 h-4 bg-blue-500 rounded-full mr-3"></span>
              关注我们
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center group">
                <div className="bg-white p-1.5 rounded-lg shadow-md mb-2 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <img
                    src="/images/qrcode.png"
                    alt="扫码加入社群"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">扫码加入社群</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white p-1.5 rounded-lg shadow-md mb-2 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <img
                    src="/images/qrcode.png"
                    alt="关注微信公众号"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">关注微信公众号</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="bg-white p-1.5 rounded-lg shadow-md mb-2 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <img
                    src="/images/qrcode.png"
                    alt="关注微信小程序"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">关注微信小程序</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // 桌面端使用原有的网格布局
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
        {/* AI创作工具 - 占2列 */}
        <div className="lg:col-span-2">
          <h4 className="font-medium text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 flex items-center">
            <span className="w-1 h-4 sm:h-6 bg-blue-500 rounded-full mr-3"></span>
            AI创作工具
          </h4>
          <div className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
            {menuData[0].items.map((item) => (
              <Link
                key={`ai-creation-${item.label}`}
                to={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center"
              >
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 媒体处理 - 占2列 */}
        <div className="lg:col-span-2">
          <h4 className="font-medium text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 flex items-center">
            <span className="w-1 h-4 sm:h-6 bg-blue-500 rounded-full mr-3"></span>
            媒体处理
          </h4>
          <div className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
            {menuData[1].items.map((item) => (
              <Link
                key={`media-tools-${item.label}`}
                to={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center"
              >
                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 服务与支持和关于 - 并排显示 */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-5">
          {/* 服务与支持 */}
          <div>
            <h4 className="font-medium text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 flex items-center">
              <span className="w-1 h-4 sm:h-6 bg-blue-500 rounded-full mr-3"></span>
              服务与支持
            </h4>
            <div className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
              {menuData[2].items.map((item) => (
                <Link
                  key={`services-${item.label}`}
                  to={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 关于 */}
          <div>
            <h4 className="font-medium text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 flex items-center">
              <span className="w-1 h-4 sm:h-6 bg-blue-500 rounded-full mr-3"></span>
              关于
            </h4>
            <div className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
              {menuData[3].items.map((item) => (
                <Link
                  key={`about-${item.label}`}
                  to={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm py-1 hover:translate-x-1 transition-transform duration-200 flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 二维码 - 占3列 */}
        <div className="lg:col-span-3">
          <h4 className="font-medium text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 flex items-center">
           <span className="w-1 h-4 sm:h-6 bg-blue-500 rounded-full mr-3"></span>
            关注我们
          </h4>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className="flex flex-col items-center group">
              <div className="bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-md mb-2 sm:mb-3 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                <img
                  src="/images/qrcode.png"
                  alt="扫码加入社群"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-md sm:rounded-lg"
                />
              </div>
              <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">扫码加入社群</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-md mb-2 sm:mb-3 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                <img
                  src="/images/qrcode.png"
                  alt="关注微信公众号"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-md sm:rounded-lg"
                />
              </div>
              <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">关注微信公众号</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-md mb-2 sm:mb-3 group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                <img
                  src="/images/qrcode.png"
                  alt="关注微信小程序"
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-md sm:rounded-lg"
                />
              </div>
              <p className="text-xs text-gray-500 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">关注微信小程序</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-gradient-to-b from-[#f8f9fa] to-[#f0f2f5] text-gray-700 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 顶部区域 - 下载客户端 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16 relative overflow-hidden group">
          {/* 背景装饰 - 移动端缩小 */}
          <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 w-32 sm:w-64 h-32 sm:h-64 bg-blue-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute -left-8 sm:-left-16 -bottom-8 sm:-bottom-16 w-24 sm:w-48 h-24 sm:h-48 bg-indigo-100 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-700"></div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="flex flex-col md:flex-row items-center mb-6 sm:mb-8 md:mb-0 w-full md:w-auto">
              {/* 左侧LOGO和文字 */}
              <div className="relative mb-4 sm:mb-6 md:mb-0 md:mr-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl"></div>
                <div className="relative bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl transform group-hover:rotate-3 transition-transform duration-500">
                  <img
                    src="/product/logo.svg"
                    alt="艺创AI"
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="inline-flex items-center px-3 py-1 mb-2 sm:mb-3 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  全新上线
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent mb-2">艺创AI客户端</h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-md px-2 sm:px-0">一键安装，畅享AI创作的无限可能，随时随地激发创意灵感</p>
              </div>
            </div>

            {/* 右侧按钮和平台图标 */}
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 w-full sm:w-auto">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-xl transition-all w-full sm:w-auto"
                  onClick={() => window.open('https://auth.cnai.art/', '_blank')}
                >
                  免费使用
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-xl group-hover:border-indigo-300 transition-colors w-full sm:w-auto"
                  onClick={() => window.open('/download', '_blank')}
                >
                  <span className="mr-2">客户端下载</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </Button>
              </div>

              {/* 平台图标 */}
              <div className="flex justify-center space-x-3 sm:space-x-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4">
                    <path d="M18 8a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8z"/>
                    <circle cx="12" cy="17" r="1"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域 - 响应式菜单 */}
        {renderMenuContent()}



        {/* 底部版权信息 */}
        <div className="mt-12 sm:mt-16">
          <Separator className="mb-4 sm:mb-6" />
          <div className="flex flex-col sm:flex-row sm:justify-between items-center text-xs text-gray-500 gap-3 sm:gap-0">
            <div className="text-center sm:text-left">
              <p>© COPYRIGHT 2023-{new Date().getFullYear()} 艺创AI All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">赣ICP备2023002309号-8</a>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <p>艺创AI</p>
            </div>
          </div>
        </div>
      </div>
  </footer>
  );
};

export default Footer;


import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Apple, Terminal, Sparkles, Download } from "lucide-react";

/**
 * Footer组件 - 网站底部区域
 * 包含客户端下载区域、产品功能菜单、服务支持、关于我们和二维码等内容
 */
const Footer = () => {
  const isMobile = useMobile();

  // 友情链接数据
  const friendLinks = [
    { text: "艺创AI", href: "https://www.cnai.art" },
    { text: "必定AI", href: "https://buidai.com" },
    { text: "企业知识库", href: "https://www.cnai.art" },
    { text: "优刻云", href: "https://www.cloudcvm.com" },
    { text: "AI数字人", href: "https://pro.cnai.art" },
    { text: "AI绘画", href: "https://cnai.art" },
    { text: "论文创作", href: "https://www.cnai.art" },
    { text: "PaYphp", href: "https://www.payphp.cn" },
    { text: "172号卡", href: "https://www.urlka.cn" },
  ];

  // Footer 链接数据
  const footerLinks = [
    {
      title: '产品中心',
      links: [
        { text: '功能特性', href: '#' },
        { text: '解决方案', href: '#' },
        { text: '价格方案', href: '#' },
        { text: '更新日志', href: '#' }
      ]
    },
    {
      title: '应用市场',
      links: [
        { text: '独立应用', href: '#' },
        { text: '扩展应用', href: '#' },
        { text: '图像视频', href: '#' },
        { text: '智能写作', href: '#' }
      ]
    },
    {
      title: '资源中心',
      links: [
        { text: '文档中心', href: '/docs' },
        { text: 'API 参考', href: '#' },
        { text: 'APP下载', href: '/download' },
        { text: '博客文章', href: '/blog' }
      ]
    },
    {
      title: '公司介绍',
      links: [
        { text: '关于我们', to: '/about' },
        { text: '加入我们', href: '#' },
        { text: '联系方式', href: '/contact' },
        { text: '隐私政策', href: '#' }
      ]
    },
    {
      title: '关注我们',
      customContent: true,
      links: [
        { type: 'qq', text: '236749035' },
        { type: 'social', text: 'userhlc' }
      ]
    }
  ];

  const renderSocialIcons = () => (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <span className="sr-only">Twitter</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
      </a>
      <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <span className="sr-only">GitHub</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
      </a>
    </div>
  );

  const renderGroupContent = (group: any) => {
    if (group.customContent) {
      return (
        <div className="space-y-3">
          {group.links.map((link: any, idx: number) => {
            if (link.type === 'qq') {
              return (
                <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">QQ:</span>
                  <span>{link.text}</span>
                </div>
              );
            }
            if (link.type === 'social') {
              return (
                <div key={idx} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">微信:</span>
                    <span>{link.text}</span>
                  </div>
                  <div className="flex flex-row flex-nowrap space-x-2 pt-2 overflow-x-auto">
                    <div className="flex flex-col items-center space-y-1 shrink-0 group cursor-pointer">
                      <div className="bg-gray-50 dark:bg-gray-800 p-1 rounded border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-600 transition-colors">
                        <img src="/images/qrcode.png" alt="QQ QR Code" className="w-20 h-20 object-contain" />
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">在线咨询</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1 shrink-0 group cursor-pointer">
                      <div className="bg-gray-50 dark:bg-gray-800 p-1 rounded border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-600 transition-colors">
                        <img src="/images/wechat.png" alt="WeChat QR Code" className="w-20 h-20 object-contain" />
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">关注我们</span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    }

    return (
      <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
        {group.links.map((link: any, idx: number) => (
          <li key={idx}>
            {link.to ? (
              <Link to={link.to} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                {link.text}
              </Link>
            ) : (
              <a href={link.href || '#'} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors block">
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderMobileMenu = () => (
    <div className="col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-5">
      <Accordion type="multiple" className="w-full space-y-2" defaultValue={['关注我们']}>
        {footerLinks.map((group, index) => (
          <AccordionItem key={index} value={group.title} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
            <AccordionTrigger className="text-gray-900 dark:text-gray-100 font-bold hover:no-underline py-4">
              {group.title}
            </AccordionTrigger>
            <AccordionContent>
              {renderGroupContent(group)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  const renderDesktopMenu = () => (
    <div className="col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8 items-start">
      {footerLinks.map((group, index) => (
        <div key={index} className={group.customContent ? 'col-span-2 md:col-span-1' : ''}>
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4">{group.title}</h4>
          {renderGroupContent(group)}
        </div>
      ))}
    </div>
  );

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* 顶部下载区域 - 保留现有设计 */}
      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 md:p-12 mb-16 shadow-2xl shadow-blue-900/5 dark:shadow-gray-900/50"
        >
          {/* 动态背景光效 */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100/50 dark:bg-blue-900/30 rounded-full blur-[80px] opacity-60 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-purple-100/50 dark:bg-purple-900/30 rounded-full blur-[80px] opacity-60 animate-pulse delay-1000"></div>

          {/* 网格纹理 (CSS模拟) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* 左侧内容 */}
            <div className="flex flex-col md:flex-row items-center lg:items-start text-center md:text-left gap-6 md:gap-8 max-w-3xl">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-2xl blur-xl opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                  <img
                    src="/product/logo.svg"
                    alt="艺创AI"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-xs font-medium">
                  <Sparkles className="w-3 h-3 mr-1.5 text-blue-500 dark:text-blue-400" />
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-400"></span>
                  </span>
                  全新客户端上线
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                    释放 AI 创作的<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">无限潜能</span>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
                    一键安装，畅享原生级 AI 创作体验。更稳定的连接，更流畅的交互，随时随地激发创意灵感。
                  </p>
                </div>
              </div>
            </div>

            {/* 右侧操作区 */}
            <div className="flex flex-col items-center gap-6 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  className="h-12 px-8 bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-700 hover:scale-105 transition-all duration-300 rounded-xl font-semibold text-base shadow-lg shadow-blue-600/20 dark:shadow-blue-600/30"
                  onClick={() => window.open('https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20', '_blank')}
                >
                  免费使用
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-xl text-base transition-all duration-300"
                  onClick={() => window.open('/download', '_blank')}
                >
                  <Download className="mr-2 w-4 h-4" />
                  客户端下载
                </Button>
              </div>

              {/* 平台支持 */}
              <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500 text-sm">
                <span>支持平台:</span>
                <div className="flex gap-3">
                  <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-400" title="Windows">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-400" title="macOS">
                    <Apple className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-400" title="Linux">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 分隔线 */}


        {/* 核心链接区域 - 参考 Vue 设计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-8 mb-12">
          {/* 左侧品牌区 */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src="/product/logo.svg" alt="艺创AI" className="h-8 w-auto" />
              <span className="font-bold text-xl text-gray-900 dark:text-gray-100">艺创AI</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              艺创AI 致力于降低企业 AI 应用开发门槛，赋能每一个团队构建智能未来。
            </p>
            {renderSocialIcons()}
          </div>

          {/* 右侧链接列表区 */}
          {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        </div>

        {/* 友情链接 */}
        <div className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 dark:text-gray-500">
          <span className="text-gray-300 dark:text-gray-600 select-none">友情链接:</span>
          {friendLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {link.text}
            </a>
          ))}
        </div>

        {/* 底部版权 */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} 艺创AI BuidAI. All rights reserved.
            </p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              赣ICP备2023002309号-8
            </a>
          </div>

          <div className="hidden md:flex space-x-6 text-sm text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">服务条款</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

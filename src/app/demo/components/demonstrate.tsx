import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Monitor, Globe, Palette, FileText, ShoppingCart, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * 产品演示数据
 * 包含各个产品的基本信息、描述和演示站点信息
 */
const demoProducts = [
  {
    id: "digital-human",
    name: "AI数字人",
    version: "PHP",
    versionColor: "bg-blue-100 text-blue-600",
    description: "通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。",
    icon: Monitor,
    color: "bg-blue-500",
    demos: [
      {
        title: "PC演示前台",
        url: "https://v.cnai.art/",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "站点管理端",
        url: "https://demo.cnai.art/admin/",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "demo",
          password: "demo"
        }
      },
      {
        title: "WAP演示",
        url: "https://v.cnai.art/mobile",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      }
    ]
  },
  {
    id: "knowledge-base",
    name: "全能知识库",
    version: "PHP",
    versionColor: "bg-blue-100 text-blue-600",
    description: "基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心。",
    icon: Globe,
    color: "bg-indigo-500",
    demos: [
      {
        title: "演示前台",
        url: "https://www.cnai.art",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "后台演示",
        url: "https://ai-demo.chatmoney.cn/admin",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "ai-chat-drawing",
    name: "聊天绘画",
    version: "PHP",
    versionColor: "bg-blue-100 text-blue-600",
    description: "集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AI进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型。",
    icon: Palette,
    color: "bg-purple-500",
    demos: [
      {
        title: "创作平台",
        url: "https://cnai.art",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "管理后台",
        url: "https://chat-demo.chatmoney.cn/admin",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "long-writing",
    name: "论文写作",
    version: "PHP",
    versionColor: "bg-blue-100 text-blue-600",
    description: "专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。",
    icon: FileText,
    color: "bg-emerald-500",
    demos: [
      {
        title: "写作平台",
        url: "https://paper.gmlart.cn/",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "体验后台",
        url: "https://cp-demo.chatmoney.cn/admin",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "digital-human-java",
    name: "AI数字人",
    version: "PHP",
    versionColor: "bg-amber-100 text-amber-600",
    description: "2.0版数字人SaaS系统，融合了最新的AI技术和数字人交互体验。通过我们的在线演示系统，您可以亲身体验升级版AI数字人的强大功能和直观界面，无需安装，即刻体验。",
    icon: Monitor,
    color: "bg-cyan-500",
    demos: [
      {
        title: "PC端",
        url: "https://pro.cnai.art",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "移动小程序端",
        url: "https://pro.cnai.art/mobile",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "管理后台",
        url: "https://digital.cnai.art/admin/",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "demo",
          password: "demo"
        }
      }
    ]
  },
  {
    id: "knowledge-base-java",
    name: "全能知识库",
    version: "Java",
    versionColor: "bg-orange-100 text-orange-600",
    description: "Java版全能AI知识库系统，基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心，集成AVA智能助手功能。",
    icon: Globe,
    color: "bg-teal-500",
    demos: [
      {
        title: "Java版知识库前台",
        url: "联系客服获取",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "Java版知识库后台",
        url: "联系客服获取",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "java_kb_admin",
          password: "java_kb123"
        }
      }
    ]
  },
  {
    id: "ai-chat-drawing-java",
    name: "聊天绘画",
    version: "Java",
    versionColor: "bg-orange-100 text-orange-600",
    description: "Java版智能聊天绘画系统，集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AVA进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型，提供更智能的创作体验。",
    icon: Palette,
    color: "bg-pink-500",
    demos: [
      {
        title: "聊天绘画Java",
        url: "联系客服获取",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "绘画管理后台Java",
        url: "联系客服获取",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "BuidAI",
    name: "必创AI",
    version: "BuidAI",
    versionColor: "bg-lime-100 text-lime-600",
    description: "必创AI, BuidAI, AI创意生产力平台, 智能体,香蕉绘画Nanobanana, AI绘画, AI视频, AI对话, Sora2, 知识库, 内容总结, PDF解析工具, 文档问答, 爆款文章生成。",
    icon: FileText,
    color: "bg-lime-500",
    demos: [
      {
        title: "必定AI(BuidAI)",
        url: "https://cloud.buidai.com/",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "必定AI(BuidAI)后台",
        url: "https://cloud.buidai.com/",
        qrcode: "/images/wechat.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      }
    ]
  }
];

/**
 * 产品演示组件
 *
 * 功能：
 * 1. 提供标签式切换不同产品演示的功能
 * 2. 展示产品演示站点信息，包括网址、账号和密码
 * 3. 提供二维码弹窗功能，用于申请专属演示或联系客服
 *
 * 设计特点：
 * - 采用现代化简约风格，以白、黑、蓝色调为主
 * - 采用左右布局设计，左侧导航，右侧内容
 * - 优化数据展示区域的排版，提升视觉层次感
 * - 使用较小的圆角，保持简洁现代感
 * - 确保响应式设计，适配不同设备
 */
const Demonstrate: React.FC = () => {
  // 状态管理
  const [activeTab, setActiveTab] = useState(demoProducts[0].id); // 当前激活的产品标签

  /**
   * 显示二维码弹窗 - 触发全局事件
   */
  const handleShowQRCode = () => {
    window.dispatchEvent(new CustomEvent('showQRCodeModal'));
  };

  // 获取当前激活的产品数据
  const activeProduct = demoProducts.find(product => product.id === activeTab);

  return (
    <div className="flex flex-col lg:flex-row min-h-[600px] bg-white lg:bg-slate-50">
      {/* 移动端顶部产品选择器 - 极简标签风格 */}
      <div className="lg:hidden sticky top-0 z-10 bg-white">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex px-4 py-3 gap-2 min-w-max">
            {demoProducts.map((product) => {
              const IconComponent = product.icon;
              const isActive = activeTab === product.id;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  )}
                >
                  <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate max-w-[80px]">{product.name}</span>
                  <span className={cn(
                    "px-1.5 py-0.5 text-[10px] font-medium rounded",
                    isActive ? "bg-white/20 text-white" : product.versionColor
                  )}>
                    {product.version}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 左侧产品导航菜单 - 桌面端 */}
      <aside className="hidden lg:flex lg:flex-col w-80 bg-white border-r border-slate-200 flex-shrink-0">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">产品演示</h2>
          <p className="text-sm text-slate-500">选择系统查看详细演示</p>
        </div>
        <nav className="flex-1 p-3 overflow-y-auto custom-scrollbar">
          <ul className="space-y-1">
            {demoProducts.map((product) => {
              const IconComponent = product.icon;
              const isActive = activeTab === product.id;
              return (
                <li key={product.id}>
                  <button
                    onClick={() => setActiveTab(product.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 group",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-lg transition-colors flex-shrink-0",
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    )}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate">{product.name}</span>
                        <span className={cn(
                          "px-1.5 py-0.5 text-[10px] font-medium rounded flex-shrink-0",
                          isActive ? "bg-white/20 text-white" : product.versionColor
                        )}>
                          {product.version}
                        </span>
                      </div>
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* 右侧产品详情内容区域 */}
      <section className="flex-1 relative overflow-y-auto">
        {/* 渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-white to-indigo-100/50 pointer-events-none z-0" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <AnimatePresence mode="wait">
          {activeProduct && (
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-5 lg:space-y-8"
            >
              {/* 产品标题和描述 - 移动端极简 */}
              <header className="lg:mb-8">
                <div className="flex items-start gap-3 lg:gap-4 mb-2 lg:mb-4">
                  <div className={cn(
                    "hidden lg:flex p-3 rounded-xl text-white flex-shrink-0",
                    activeProduct.color
                  )}>
                    <activeProduct.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg lg:text-3xl font-bold text-slate-900 mb-1 lg:mb-2 flex items-center gap-2 flex-wrap">
                      {activeProduct.name}
                      <span className={cn(
                        "px-2 py-0.5 text-xs font-medium rounded",
                        activeProduct.versionColor
                      )}>
                        {activeProduct.version}
                      </span>
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-slate-500 lg:hidden">
                      <span>{activeProduct.demos.length} 个演示站点</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-3 text-sm text-slate-500">
                      <span>在线演示</span>
                      <span>·</span>
                      <span>{activeProduct.demos.length} 个站点</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs lg:text-base text-slate-600 leading-relaxed">
                  {activeProduct.description}
                </p>
              </header>

              {/* 演示站点卡片列表 */}
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-2 xl:grid-cols-3 lg:gap-6">
                {activeProduct.demos.map((demo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-slate-50 lg:bg-white rounded-lg overflow-hidden flex flex-col lg:border lg:border-slate-100"
                  >
                    {/* 移动端极简卡片 */}
                    <div className="lg:hidden p-3">
                      {/* 标题 */}
                      <h3 className="font-semibold text-slate-900 text-xs mb-3 truncate">{demo.title}</h3>

                      {/* 账号密码 */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-slate-500">账号</span>
                          <span className="text-[11px] font-medium text-slate-900 truncate ml-2">{demo.credentials.username}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-slate-500">密码</span>
                          <span className="text-[11px] font-medium text-slate-900 truncate ml-2">{demo.credentials.password}</span>
                        </div>
                      </div>

                      {/* 操作按钮 */}
                      <button
                        className="w-full bg-blue-600 text-white text-xs h-8 rounded-md font-medium"
                        onClick={() => window.open(demo.url, '_blank')}
                      >
                        访问演示
                      </button>
                    </div>

                    {/* 桌面端完整卡片 */}
                    <div className="hidden lg:flex lg:flex-col lg:h-full">
                      {/* 标题栏 */}
                      <div className="px-5 py-4 border-b border-slate-100 bg-slate-50">
                        <h3 className="font-semibold text-slate-900 text-sm">{demo.title}</h3>
                      </div>

                      <div className="p-5 flex-1 flex flex-col gap-4 bg-white">
                        {/* 二维码展示区 - 仅桌面端 */}
                        <div className="flex justify-center py-2">
                          <div
                            className="p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors"
                            onClick={() => handleShowQRCode()}
                          >
                            <img
                              src={demo.qrcode}
                              alt={`${demo.title}二维码`}
                              className="w-36 h-36 object-contain"
                            />
                          </div>
                        </div>

                        {/* 站点信息 */}
                        <div className="space-y-3 text-sm flex-1">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-slate-500 text-xs flex-shrink-0">访问地址</span>
                              <a href={demo.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate flex-1 text-right text-xs font-medium">{demo.url}</a>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-slate-50 rounded-lg">
                              <div className="text-xs text-slate-500 mb-1">账号</div>
                              <div className="font-medium text-slate-900 text-sm truncate">{demo.credentials.username}</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg">
                              <div className="text-xs text-slate-500 mb-1">密码</div>
                              <div className="font-medium text-slate-900 text-sm truncate">{demo.credentials.password}</div>
                            </div>
                          </div>
                        </div>

                        {/* 操作按钮 */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <Button
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm h-10"
                            onClick={() => window.open(demo.url, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-1.5" />
                            立即访问
                          </Button>
                          <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm h-10"
                            onClick={() => window.open('https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20', '_blank')}
                          >
                            <ShoppingCart className="w-4 h-4 mr-1.5" />
                            立即购买
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 底部操作 - 移动端极简 */}
              <div className="pt-5 lg:mt-10 lg:pt-8">
                <div className="bg-slate-50 p-4 lg:rounded-lg lg:p-6">
                  <h3 className="text-sm lg:text-lg font-semibold text-slate-900 mb-1 lg:mb-2">需要帮助？</h3>
                  <p className="text-xs lg:text-sm text-slate-600 mb-3 lg:mb-5">专业团队为您提供一对一技术支持和演示服务</p>
                  <div className="flex gap-2 lg:gap-3">
                    <Button
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs lg:text-sm h-9 lg:h-10"
                      onClick={() => handleShowQRCode()}
                    >
                     获取产品优惠码
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs lg:text-sm h-9 lg:h-10"
                      onClick={() => handleShowQRCode()}
                    >
                      联系顾问
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Demonstrate;

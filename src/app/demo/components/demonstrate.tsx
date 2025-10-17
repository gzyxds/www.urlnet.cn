import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Smartphone, Monitor, Globe, Palette, FileText } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

/**
 * 产品演示数据
 * 包含各个产品的基本信息、描述和演示站点信息
 */
const demoProducts = [
  {
    id: "digital-human",
    name: "数字人SaaS系统PHP版",
    description: "通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。",
    icon: Monitor,
    color: "from-blue-500 to-blue-600",
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
        qrcode: "/images/qrcode.png",
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
    name: "全能AI知识库PHP版",
    description: "基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心。",
    icon: Globe,
    color: "from-indigo-500 to-indigo-600",
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
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "ai-chat-drawing",
    name: "聊天绘画PHP版",
    description: "集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AI进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型。",
    icon: Palette,
    color: "from-purple-500 to-purple-600",
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
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "long-writing",
    name: "论文写作PHP版",
    description: "专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。",
    icon: FileText,
    color: "from-emerald-500 to-emerald-600",
    demos: [
      {
        title: "写作平台",
        url: "https://cp.chatmoney.cn/generate/1",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "体验后台",
        url: "https://cp-demo.chatmoney.cn/admin",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "digital-human-java",
    name: "数字人SaaS系统2.0版  ",
    description: "2.0版数字人SaaS系统，融合了最新的AI技术和数字人交互体验。通过我们的在线演示系统，您可以亲身体验升级版AI数字人的强大功能和直观界面，无需安装，即刻体验。",
    icon: Monitor,
    color: "from-cyan-500 to-cyan-600",
    demos: [
      {
        title: "2.0管理后台",
        url: "https://java-demo.cnai.art/admin/",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "ava_demo",
          password: "ava123"
        }
      },
      {
        title: "移动端",
        url: "https://java.cnai.art/mobile",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      }
    ]
  },
  {
    id: "knowledge-base-java",
    name: "全能AI知识库Java版",
    description: "Java版全能AI知识库系统，基于大型语言模型的企业级知识库解决方案。支持多种文档格式，实现智能问答和语义搜索，帮助企业构建专属的知识中心，集成AVA智能助手功能。",
    icon: Globe,
    color: "from-teal-500 to-teal-600",
    demos: [
      {
        title: "Java版知识库前台",
        url: "https://java-kb.cnai.art",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "Java版知识库后台",
        url: "https://java-kb-demo.chatmoney.cn/admin",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "java_kb_admin",
          password: "java_kb123"
        }
      }
    ]
  },
  {
    id: "ai-chat-drawing-java",
    name: "聊天绘画Java版",
    description: "Java版智能聊天绘画系统，集成了先进的AI绘画和聊天功能。用户可以通过自然语言与AVA进行对话，并生成高质量的艺术作品。支持多种绘画风格和模型，提供更智能的创作体验。",
    icon: Palette,
    color: "from-pink-500 to-pink-600",
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
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "admin",
          password: "123456"
        }
      }
    ]
  },
  {
    id: "long-writing-java",
    name: "论文写作Java版",
    description: "Java版论文写作系统，专为学术研究者和学生设计的AI写作助手。能够根据主题快速生成论文大纲和初稿，提供海量文献参考，显著提高论文写作效率和质量。集成AVA智能助手，提供更专业的写作指导。",
    icon: FileText,
    color: "from-lime-500 to-lime-600",
    demos: [
      {
        title: "论文写作Java",
        url: "联系客服获取",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "论文写作后台",
        url: "联系客服获取",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "admin",
          password: "123456"
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
  const [showQRModal, setShowQRModal] = useState(false); // 控制二维码弹窗显示
  const [modalType, setModalType] = useState<'demo' | 'service'>('demo'); // 弹窗类型：演示或客服

  /**
   * 显示二维码弹窗
   * @param type - 弹窗类型：'demo'(演示)或'service'(客服)
   */
  const handleShowQRCode = (type: 'demo' | 'service') => {
    setModalType(type);
    setShowQRModal(true);
  };

  /**
   * 关闭二维码弹窗
   */
  const handleCloseQRModal = () => {
    setShowQRModal(false);
  };

  // 获取当前激活的产品数据
  const activeProduct = demoProducts.find(product => product.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* 页面标题区域 - 简约设计，增加留白 */}
      <header className="pt-16 pb-8 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              系统演示站点
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              选择产品类型体验我们系统 【注】PHP和Java功能略有不同
            </p>
          </motion.div>
        </div>
      </header>

      {/* 主要内容区域 - 左右布局设计 */}
      <main className="container mx-auto px-4 pb-20">
        <div className="max-w-8xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
            <div className="flex flex-col lg:flex-row">
              {/* 左侧产品导航菜单 */}
              <aside className="w-full lg:w-80 bg-slate-50 border-r border-slate-200">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-lg font-semibold text-black">艺创AI-产品演示</h2>
                  <p className="text-sm text-gray-600 mt-1">选择要查看的产品演示</p>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    {demoProducts.map((product) => {
                      const IconComponent = product.icon;
                      return (
                        <li key={product.id}>
                          <button
                            onClick={() => setActiveTab(product.id)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                              activeTab === product.id 
                                ? "bg-white text-blue-600 shadow-md border border-blue-200" 
                                : "text-gray-700 hover:bg-white/70 hover:text-gray-900"
                            }`}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${product.color} ${
                              activeTab === product.id ? 'opacity-100' : 'opacity-70'
                            }`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">{product.name}</div>
                              <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                {product.description.substring(0, 50)}...
                              </div>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </aside>

              {/* 右侧产品详情内容区域 */}
              <section className="flex-1 p-6 lg:p-8">
                <AnimatePresence mode="wait">
                  {activeProduct && (
                    <motion.div
                      key={activeProduct.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      {/* 产品标题和描述 - 增强视觉层次 */}
                      <header className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${activeProduct.color} shadow-lg`}>
                            <activeProduct.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-black">
                              艺创AI - {activeProduct.name}
                            </h2>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 mt-2"></div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {activeProduct.description}
                        </p>
                      </header>

                      {/* 演示站点卡片列表 - 现代化卡片设计 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {activeProduct.demos.map((demo, index) => (
                          <motion.article 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden"
                          >
                            {/* 演示站点标题栏 - 简约现代设计 */}
                            <header className="bg-gradient-to-r from-slate-50 to-slate-100 px-4 py-3 border-b border-slate-200">
                              <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-black">{demo.title}</h3>
                                {/* 简约装饰元素 */}
                                <div className="flex space-x-1">
                                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                                </div>
                              </div>
                            </header>

                            {/* 演示站点内容区域 - 优化间距和布局 */}
                            <div className="p-4 space-y-4">
                              {/* 二维码展示区 - 现代化设计 */}
                              <figure className="flex justify-center">
                                <div className="relative group">
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                  <div className="relative bg-white p-3 rounded-lg border-2 border-slate-200">
                                    <img 
                                      src={demo.qrcode} 
                                      alt={`${demo.title}二维码`} 
                                      className="w-28 h-28 object-cover rounded-md"
                                    />
                                    {/* 移动设备标识图标 - 现代化设计 */}
                                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-1.5 shadow-lg">
                                      <Smartphone className="w-3 h-3 text-white" />
                                    </div>
                                  </div>
                                </div>
                              </figure>

                              {/* 站点访问信息列表 - 现代化信息展示 */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-md">
                                  <span className="text-xs font-medium text-gray-600">网址</span>
                                  <a 
                                    href={demo.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 font-medium text-xs truncate max-w-32 transition-colors"
                                  >
                                    {demo.url}
                                  </a>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="p-2.5 bg-slate-50 rounded-md">
                                    <div className="text-xs text-gray-500 mb-0.5">账号</div>
                                    <div className="font-medium text-black text-xs">{demo.credentials.username}</div>
                                  </div>
                                  <div className="p-2.5 bg-slate-50 rounded-md">
                                    <div className="text-xs text-gray-500 mb-0.5">密码</div>
                                    <div className="font-medium text-black text-xs">{demo.credentials.password}</div>
                                  </div>
                                </div>
                              </div>

                              {/* 站点访问按钮 - 现代化按钮设计 */}
                              <Button 
                                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                                size="sm"
                                asChild
                              >
                                <a 
                                  href={demo.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="flex items-center justify-center gap-2"
                                  aria-label={`访问${demo.title}`}
                                >
                                  <ExternalLink className="w-3.5 h-3.5" />
                                  访问站点
                                </a>
                              </Button>
                            </div>
                          </motion.article>
                        ))}
                      </div>

                      {/* 底部操作按钮区域 - 现代化按钮组设计 */}
                      <footer className="mt-8 flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-slate-200">
                        <Button 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => handleShowQRCode('demo')}
                          aria-label="申请专属演示"
                        >
                          申请专属演示
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-2 border-slate-300 text-black hover:bg-slate-50 px-8 py-3 rounded-md font-medium transition-all duration-300"
                          onClick={() => handleShowQRCode('service')}
                          aria-label="联系客服"
                        >
                          联系客服
                        </Button>
                      </footer>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* 二维码弹窗组件 - 现代化模态框设计 */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={handleCloseQRModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
          >
            {/* 背景遮罩层 - 现代化毛玻璃效果 */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            
            {/* 模态框容器 - 现代化设计 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-lg shadow-2xl max-w-sm w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 - 现代化设计 */}
              <button
                onClick={handleCloseQRModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
                aria-label="关闭弹窗"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              
              {/* 弹窗内容区域 - 优化布局和间距 */}
              <div className="p-8 text-center space-y-6">
                <div className="space-y-2">
                  <h3 id="qr-modal-title" className="text-xl font-bold text-black">
                    {modalType === 'demo' ? '申请专属演示' : '联系客服'}
                  </h3>
                  <p className="text-gray-600">
                    {modalType === 'demo' ? '扫描二维码联系专属顾问' : '扫描二维码添加客服微信'}
                  </p>
                </div>
                
                {/* 二维码图片容器 - 现代化展示 */}
                <figure className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-20"></div>
                    <div className="relative bg-white p-6 rounded-lg border-2 border-slate-200 shadow-lg">
                      <img 
                        src="/images/qrcode.png" 
                        alt={modalType === 'demo' ? '专属演示二维码' : '客服二维码'} 
                        className="w-48 h-48 object-contain rounded-md"
                      />
                    </div>
                  </div>
                </figure>
                
                {/* 操作提示文字 - 简约设计 */}
                <p className="text-sm text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Demonstrate;
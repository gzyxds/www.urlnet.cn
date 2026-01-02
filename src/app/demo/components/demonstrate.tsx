import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Monitor, Globe, Palette, FileText } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * 产品演示数据
 * 包含各个产品的基本信息、描述和演示站点信息
 */
const demoProducts = [
  {
    id: "digital-human",
    name: "数字分身PHP版",
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
    name: "全能知识库PHP版",
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
    name: "聊天绘画PHP版",
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
    name: "论文写作PHP版",
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
    name: "数字人系统2.0版  ",
    description: "2.0版数字人SaaS系统，融合了最新的AI技术和数字人交互体验。通过我们的在线演示系统，您可以亲身体验升级版AI数字人的强大功能和直观界面，无需安装，即刻体验。",
    icon: Monitor,
    color: "bg-cyan-500",
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
        qrcode: "/images/wechat.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      }
    ]
  },
  {
    id: "knowledge-base-java",
    name: "全能知识库Java版",
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
    name: "聊天绘画Java版",
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
    name: "必定AI(BuidAI)",
    description: "必定AI, BuidAI, AI创意生产力平台, 智能体,香蕉绘画Nanobanana, AI绘画, AI视频, AI对话, Sora2, 知识库, 内容总结, PDF解析工具, 文档问答, 爆款文章生成。",
    icon: FileText,
    color: "bg-lime-500",
    demos: [
      {
        title: "必定AI(BuidAI)",
        url: "联系客服获取",
        qrcode: "/images/qrcode.png",
        credentials: {
          username: "自行注册",
          password: "自行注册"
        }
      },
      {
        title: "必定AI(BuidAI)后台",
        url: "联系客服获取",
        qrcode: "/images/wechat.png",
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
  const [modalType, setModalType] = useState<'demo' | 'service' | 'preview'>('demo'); // 弹窗类型：演示或客服或预览
  const [previewQRCode, setPreviewQRCode] = useState<string>(''); // 预览的二维码图片地址

  /**
   * 显示二维码弹窗
   * @param type - 弹窗类型：'demo'(演示)或'service'(客服)或'preview'(预览)
   * @param qrcodeUrl - 预览时显示的二维码图片地址
   */
  const handleShowQRCode = (type: 'demo' | 'service' | 'preview', qrcodeUrl?: string) => {
    setModalType(type);
    if (qrcodeUrl) {
      setPreviewQRCode(qrcodeUrl);
    }
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
    <div className="flex flex-col lg:flex-row min-h-[600px]">
      {/* 左侧产品导航菜单 */}
      <aside className="w-full lg:w-80 bg-slate-50/50 border-r border-slate-100 flex-shrink-0">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">产品列表</h2>
          <p className="text-xs text-slate-500 mt-1">选择要查看的系统演示</p>
        </div>
        <nav className="p-3 h-[calc(100%-88px)] overflow-y-auto custom-scrollbar">
          <ul className="space-y-1">
            {demoProducts.map((product) => {
              const IconComponent = product.icon;
              const isActive = activeTab === product.id;
              return (
                <li key={product.id}>
                  <button
                    onClick={() => setActiveTab(product.id)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center gap-3 group relative overflow-hidden",
                      isActive
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"
                        : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-lg transition-all duration-200",
                      isActive ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                    )}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{product.name}</div>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="w-1 h-4 bg-blue-600 rounded-full"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* 右侧产品详情内容区域 */}
      <section className="flex-1 p-6 lg:p-10 bg-white">
        <AnimatePresence mode="wait">
          {activeProduct && (
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* 产品标题和描述 */}
              <header className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className={cn("p-3 rounded-2xl shadow-sm text-white", activeProduct.color)}>
                    <activeProduct.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {activeProduct.name}
                    </h2>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {activeProduct.description}
                </p>
              </header>

              {/* 演示站点卡片列表 */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {activeProduct.demos.map((demo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    {/* 演示站点标题栏 */}
                    <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
                      <h3 className="font-bold text-slate-900 text-sm">{demo.title}</h3>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-400 transition-colors"></span>
                        <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors"></span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col gap-5">
                      {/* 二维码展示区 */}
                      <div className="flex justify-center py-2">
                        <div
                          className="relative group/qr p-2 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
                          onClick={() => handleShowQRCode('preview', demo.qrcode)}
                        >
                          <img
                            src={demo.qrcode}
                            alt={`${demo.title}二维码`}
                            className="w-32 h-32 object-contain rounded-lg"
                          />
                        </div>
                      </div>

                      {/* 站点信息 */}
                      <div className="space-y-3 text-sm flex-1">
                        <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                           <span className="text-slate-500 text-xs">地址</span>
                           <a href={demo.url} target="_blank" className="text-blue-600 hover:underline truncate max-w-[120px] font-medium">{demo.url}</a>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2 bg-slate-50 rounded-lg">
                            <div className="text-xs text-slate-400 mb-0.5">账号</div>
                            <div className="font-medium text-slate-700">{demo.credentials.username}</div>
                          </div>
                          <div className="p-2 bg-slate-50 rounded-lg">
                            <div className="text-xs text-slate-400 mb-0.5">密码</div>
                            <div className="font-medium text-slate-700">{demo.credentials.password}</div>
                          </div>
                        </div>
                      </div>

                      {/* 访问按钮 */}
                      <Button
                        className="w-full bg-slate-900 hover:bg-blue-600 text-white shadow-sm transition-all rounded-xl"
                        size="sm"
                        onClick={() => window.open(demo.url, '_blank')}
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-2" />
                        立即访问
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 底部操作 */}
              <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg shadow-blue-600/20"
                  onClick={() => handleShowQRCode('demo')}
                >
                  申请专属演示环境
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-200 hover:bg-slate-50 rounded-xl"
                  onClick={() => handleShowQRCode('service')}
                >
                  联系技术顾问
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={handleCloseQRModal}
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden p-8 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseQRModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {modalType === 'demo' ? '申请专属演示' : modalType === 'service' ? '联系客服' : '扫码体验'}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                {modalType === 'demo' ? '扫描二维码联系专属顾问开通' : modalType === 'service' ? '扫描二维码添加客服微信咨询' : '请使用微信扫一扫体验'}
              </p>

              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm inline-block mb-4">
                <img
                  src={modalType === 'preview' ? previewQRCode : "/images/qrcode.png"}
                  alt="二维码"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </div>

              <p className="text-xs text-slate-400">
                截屏或长按保存二维码
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Demonstrate;

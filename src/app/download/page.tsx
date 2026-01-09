"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Download,
  Smartphone,
  Monitor,
  Laptop,
  QrCode,
  Copy,
  CheckCircle,
  FileText,
  Package,
  Globe,
  Zap,
  Users,
  Brain,
  Palette,
  Music,
  Video,
  MessageSquare,
  Database,
  Bot,
  BookOpen
} from "lucide-react";
import { usePageMetadata } from '@/hooks/use-page-metadata';
import { toast } from '@/hooks/use-toast';
import Carousel from "@/components/Carousel";

/**
 * 下载页面组件
 * 展示不同平台的客户端下载资源，包括 Windows, macOS, Linux, iOS 和 Android
 * 提供平台分类、详细版本列表、功能特性介绍以及行动呼吁区域
 *
 * @returns {JSX.Element} 下载页面组件
 */
export default function DownloadPage(): JSX.Element {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // 设置下载页面元数据
  usePageMetadata({
    title: 'APP下载 - 艺创AI全能AIGC创作平台 | 企业级智能解决方案',
    description: '艺创AI致力于打造企业级全能AIGC创作平台，提供智能客服、文档管理、专家顾问、机器人管理、知识库训练等核心功能。支持AI数字人、智能问答、智能创作、AI绘画、AI视频、AI音乐及AIPPT等创新技术。',
    keywords: 'APP下载,艺创AI,AIGC创作平台,企业级AI,智能客服,AI数字人,AI绘画,AI视频,AI音乐'
  });

  const features = [
    {
      title: "企业智能客服",
      description: "24/7智能客服系统，提供专业、高效的服务支持",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: "智能文档管理",
      description: "AI驱动的文档处理和管理，提升工作效率",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "专家顾问助理",
      description: "专业AI顾问，为企业提供智能化决策支持",
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "机器人管理",
      description: "智能机器人管理系统，自动化业务流程",
      icon: <Bot className="h-5 w-5" />
    },
    {
      title: "知识库数据训练",
      description: "企业专属知识库构建和训练服务",
      icon: <Database className="h-5 w-5" />
    },
    {
      title: "AI数字人",
      description: "逼真的AI数字人技术，打造沉浸式体验",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "智能问答",
      description: "基于知识库的智能问答系统",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "智能创作",
      description: "AI驱动的智能创作工具，激发无限创意",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "AI绘画",
      description: "专业级AI绘画工具，将创意转化为艺术作品",
      icon: <Palette className="h-5 w-5" />
    },
    {
      title: "AI视频",
      description: "AI视频生成和编辑，打造专业级内容",
      icon: <Video className="h-5 w-5" />
    },
    {
      title: "AI音乐",
      description: "AI音乐创作和编曲，释放音乐创作潜能",
      icon: <Music className="h-5 w-5" />
    },
    {
      title: "AIPPT",
      description: "智能PPT生成工具，快速创建专业演示文稿",
      icon: <Package className="h-5 w-5" />
    }
  ];

  const downloadResources = [
    {
      name: "cnaiart-0.0.1-1.x86_64.rpm",
      type: "Linux x64",
      size: "4.07 MB",
      date: "2025/6/15 15:33:06",
      platform: "linux",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_aarch64.dmg",
      type: "macOS arm",
      size: "3.35 MB",
      date: "2025/6/15 15:30:04",
      platform: "macos",
      icon: <Laptop className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_amd64.AppImage",
      type: "Linux amd64",
      size: "84.76 MB",
      date: "2025/6/15 15:33:09",
      platform: "linux",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_amd64.deb",
      type: "Linux amd64",
      size: "4.07 MB",
      date: "2025/6/15 15:33:05",
      platform: "linux",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_arm64-setup.exe",
      type: "Windows arm",
      size: "1.76 MB",
      date: "2025/6/15 15:33:21",
      platform: "windows",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_arm64_en-US.msi",
      type: "Windows arm",
      size: "2.90 MB",
      date: "2025/6/15 15:33:21",
      platform: "windows",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_x64-setup.exe",
      type: "Windows x64",
      size: "1.97 MB",
      date: "2025/6/15 15:33:57",
      platform: "windows",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_x64.dmg",
      type: "macOS x64",
      size: "3.46 MB",
      date: "2025/6/15 15:29:55",
      platform: "macos",
      icon: <Laptop className="h-5 w-5" />
    },
    {
      name: "cnaiart_0.0.1_x64_en-US.msi",
      type: "Windows x64",
      size: "3.06 MB",
      date: "2025/6/15 15:33:56",
      platform: "windows",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      name: "cnaiart_aarch64.app.tar.gz",
      type: "压缩包",
      size: "3.11 MB",
      date: "2025/6/15 15:30:05",
      platform: "archive",
      icon: <Package className="h-5 w-5" />
    },
    {
      name: "cnaiart_x64.app.tar.gz",
      type: "压缩包",
      size: "3.22 MB",
      date: "2025/6/15 15:29:56",
      platform: "archive",
      icon: <Package className="h-5 w-5" />
    },
    {
      name: "artaigc-0.0.1.ipa",
      type: "iOS 15.6+",
      size: "0.89 MB",
      date: "2025/6/16 00:50:29",
      platform: "ios",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      name: "artaigc-v0.0.1.apk",
      type: "Android 7.0+",
      size: "5.90 MB",
      date: "2025/6/16 00:49:43",
      platform: "android",
      icon: <Smartphone className="h-5 w-5" />
    }
  ];

  /**
   * 根据平台名称获取对应的样式颜色类名
   *
   * @param {string} platform - 平台标识符 (如 'windows', 'macos', 'linux' 等)
   * @returns {string} 返回 Tailwind CSS 颜色类名字符串
   */
  const getPlatformColor = (platform: string): string => {
    switch (platform) {
      case 'windows': return 'bg-blue-100 text-blue-800';
      case 'macos': return 'bg-gray-100 text-gray-800';
      case 'linux': return 'bg-orange-100 text-orange-800';
      case 'ios': return 'bg-black text-white';
      case 'android': return 'bg-green-100 text-green-800';
      case 'archive': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  /**
   * 复制指定文件的下载链接到剪贴板
   *
   * @param {string} fileName - 要复制链接的文件名
   * @returns {Promise<void>} 异步操作
   */
  const copyDownloadLink = async (fileName: string): Promise<void> => {
    const downloadUrl = `https://download.cnaiart.com/${fileName}`;
    try {
      await navigator.clipboard.writeText(downloadUrl);
      setCopiedLink(fileName);
      toast({
        title: "链接已复制",
        description: "下载链接已复制到剪贴板",
      });
      setTimeout(() => setCopiedLink(null), 2000);
    } catch (err) {
      toast({
        title: "复制失败",
        description: "请手动复制下载链接",
        variant: "destructive",
      });
    }
  };

  /**
   * 在新窗口中打开指定文件的下载链接
   *
   * @param {string} fileName - 要下载的文件名
   * @returns {void}
   */
  const downloadFile = (fileName: string): void => {
    const downloadUrl = `https://download.cnaiart.com/${fileName}`;
    window.open(downloadUrl, '_blank');
  };

  // 平台分类定义
  const platformGroups = [
    {
      id: 'windows',
      name: 'Windows',
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      description: '支持 Windows 10 及以上系统，提供 exe 安装包和 msi 安装包。',
      color: 'blue',
      gradient: 'from-blue-50/50 via-white to-white',
      hoverGradient: 'hover:from-blue-100/40 hover:via-blue-50/20 hover:to-white',
      files: downloadResources.filter(r => r.platform === 'windows')
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: <Laptop className="h-8 w-8 text-gray-800" />,
      description: '支持 Intel 和 Apple Silicon (M1/M2/M3) 芯片。',
      color: 'gray',
      gradient: 'from-gray-50/50 via-white to-white',
      hoverGradient: 'hover:from-gray-100/40 hover:via-gray-50/20 hover:to-white',
      files: downloadResources.filter(r => r.platform === 'macos')
    },
    {
      id: 'mobile',
      name: '移动端',
      icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
      description: '支持 Android 7.0+ 和 iOS 15.6+，随时随地开启创作。',
      color: 'indigo',
      gradient: 'from-indigo-50/50 via-white to-white',
      hoverGradient: 'hover:from-indigo-100/40 hover:via-indigo-50/20 hover:to-white',
      files: downloadResources.filter(r => ['android', 'ios'].includes(r.platform))
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: <Monitor className="h-8 w-8 text-orange-600" />,
      description: '提供 rpm, deb 和 AppImage 多种格式支持。',
      color: 'orange',
      gradient: 'from-orange-50/50 via-white to-white',
      hoverGradient: 'hover:from-orange-100/40 hover:via-orange-50/20 hover:to-white',
      files: downloadResources.filter(r => r.platform === 'linux')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Carousel />

      {/* 2. 平台下载区域 */}
      <section id="download-list" className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">选择您的平台</h2>
            <p className="text-gray-500 text-xl font-light">支持多种操作系统，为您提供最流畅的使用体验</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
            {platformGroups.map((group) => (
              <motion.div
                key={group.id}
                whileHover={{ y: -10 }}
                className={cn(
                  "bg-gradient-to-br rounded-xl p-8 border border-gray-100 shadow-sm transition-all duration-500 flex flex-col h-full",
                  group.gradient,
                  group.hoverGradient
                )}
              >
                <div className={`w-16 h-16 rounded-lg mb-8 flex items-center justify-center bg-${group.color}-50`}>
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{group.name}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">{group.description}</p>

                <div className="space-y-3">
                  {group.files.slice(0, 3).map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-md bg-gray-50 group hover:bg-blue-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <Package className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                        <span className="text-xs font-medium text-gray-700 truncate max-w-[120px]">{file.name}</span>
                      </div>
                      <button
                        onClick={() => downloadFile(file.name)}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {group.files.length > 3 && (
                    <div className="text-center">
                      <span className="text-xs text-gray-400">及更多版本...</span>
                    </div>
                  )}
                </div>

                <Button
                  className="mt-8 w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg h-12"
                  onClick={() => {
                    const el = document.getElementById(`files-${group.id}`);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  查看全部版本
                </Button>
              </motion.div>
            ))}
          </div>

          {/* 详细文件列表 */}
          <div className="space-y-16">
            {platformGroups.map((group) => (
              <div key={group.id} id={`files-${group.id}`} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="px-10 py-8 bg-gray-50/50 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${group.color}-100`}>
                      {group.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{group.name} 版本详情</h4>
                      <p className="text-sm text-gray-500">共 {group.files.length} 个可用资源</p>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-gray-200">
                        <th className="px-10 py-6 font-semibold">软件包名称</th>
                        <th className="px-6 py-6 font-semibold">类型</th>
                        <th className="px-6 py-6 font-semibold">大小</th>
                        <th className="px-6 py-6 font-semibold">更新日期</th>
                        <th className="px-10 py-6 font-semibold text-right">操作</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {group.files.map((file, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                          <td className="px-10 py-5">
                            <div className="flex items-center gap-3">
                              {file.icon}
                              <span className="text-sm font-medium text-gray-900">{file.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <Badge variant="outline" className="rounded-md font-normal bg-gray-50">{file.type}</Badge>
                          </td>
                          <td className="px-6 py-5 text-sm text-gray-500">{file.size}</td>
                          <td className="px-6 py-5 text-sm text-gray-500">{file.date}</td>
                          <td className="px-10 py-5 text-right">
                            <div className="flex items-center justify-end gap-3">
                              <button
                                onClick={() => copyDownloadLink(file.name)}
                                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all"
                                title="复制链接"
                              >
                                {copiedLink === file.name ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                              </button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => downloadFile(file.name)}
                                className="h-9 px-4 rounded-lg border-gray-200 hover:border-blue-500 hover:text-blue-600 group-hover:bg-blue-50 transition-all"
                              >
                                <Download className="w-3.5 h-3.5 mr-2" />
                                下载
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 核心特性 - Bento Grid 风格 */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">全能 AIGC 创作平台</h2>
            <p className="text-gray-500 text-xl font-light">一套系统，满足企业智能化转型的全场景需求</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={cn(
                  "p-8 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/50 transition-all duration-500 group",
                  index === 0 || index === 3 ? "md:col-span-2" : ""
                )}
              >
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                  <div className="text-gray-600 group-hover:text-white transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA 区域 */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#929cfb] to-[#ec8bf9]">
            {/* 网格背景纹理 */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

            {/* 径向光晕装饰 - 已移除 */}

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20 lg:py-24">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">准备好开启智能创作之旅了吗？</h2>
              <p className="text-blue-50 text-lg lg:text-xl mb-12 font-light max-w-2xl mx-auto opacity-90">
                现在下载艺创AI 客户端，体验极速、安全、高效的 AIGC 创作能力。
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  size="lg"
                  className="bg-white text-[#2f3659] hover:bg-gray-50 h-14 px-10 rounded-full text-lg font-semibold transition-all hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  下载桌面版
                </Button>
                <Button
                  size="lg"
                  className="bg-[#1d2447] text-white hover:bg-[#2f3659] h-14 px-10 rounded-full text-lg font-semibold transition-all hover:scale-105 border-transparent"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  使用 Web 版
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Smartphone, 
  Monitor, 
  Laptop, 
  Tablet, 
  QrCode,
  Copy,
  CheckCircle,
  ExternalLink,
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
import Header from '@/components/header';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { toast } from '@/hooks/use-toast';

const DownloadPage = () => {
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
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />
    },
    {
      title: "智能文档管理",
      description: "AI驱动的文档处理和管理，提升工作效率",
      icon: <FileText className="h-6 w-6 text-green-600" />
    },
    {
      title: "专家顾问助理",
      description: "专业AI顾问，为企业提供智能化决策支持",
      icon: <Brain className="h-6 w-6 text-purple-600" />
    },
    {
      title: "机器人管理",
      description: "智能机器人管理系统，自动化业务流程",
      icon: <Bot className="h-6 w-6 text-orange-600" />
    },
    {
      title: "知识库数据训练",
      description: "企业专属知识库构建和训练服务",
      icon: <Database className="h-6 w-6 text-red-600" />
    },
    {
      title: "AI数字人",
      description: "逼真的AI数字人技术，打造沉浸式体验",
      icon: <Users className="h-6 w-6 text-pink-600" />
    },
    {
      title: "智能问答",
      description: "基于知识库的智能问答系统",
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />
    },
    {
      title: "智能创作",
      description: "AI驱动的智能创作工具，激发无限创意",
      icon: <Zap className="h-6 w-6 text-yellow-600" />
    },
    {
      title: "AI绘画",
      description: "专业级AI绘画工具，将创意转化为艺术作品",
      icon: <Palette className="h-6 w-6 text-rose-600" />
    },
    {
      title: "AI视频",
      description: "AI视频生成和编辑，打造专业级内容",
      icon: <Video className="h-6 w-6 text-cyan-600" />
    },
    {
      title: "AI音乐",
      description: "AI音乐创作和编曲，释放音乐创作潜能",
      icon: <Music className="h-6 w-6 text-emerald-600" />
    },
    {
      title: "AIPPT",
      description: "智能PPT生成工具，快速创建专业演示文稿",
      icon: <Package className="h-6 w-6 text-violet-600" />
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

  const getPlatformColor = (platform: string) => {
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

  const copyDownloadLink = async (fileName: string) => {
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

  const downloadFile = (fileName: string) => {
    const downloadUrl = `https://download.cnaiart.com/${fileName}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* 顶部横幅 */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
          {/* 装饰背景 */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-8xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Download className="h-10 w-10 text-white" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                艺创AI APP下载
              </motion.h1>
              
              <motion.div 
                className="w-20 h-0.5 bg-blue-600 mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 max-w-8xl mx-auto leading-relaxed font-light mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                艺创AI致力于打造企业级全能AIGC创作平台，提供全方位智能解决方案。涵盖企业智能客服、智能文档管理、专家顾问助理、机器人管理、知识库数据训练等核心功能。通过AI数字人、智能问答、智能创作、数据训练、AI绘画、AI视频、AI音乐及AIPPT等创新技术，助力企业实现智能化转型，提升运营效率与创造力，开启智能未来。
              </motion.p>
            </div>
          </div>
        </section>

        {/* 核心功能展示 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                核心功能
              </h2>
              <p className="text-xl text-gray-600 max-w-6xl mx-auto font-light">
                全方位智能解决方案，助力企业数字化转型
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 下载资源列表 */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                下载资源
              </h2>
              <p className="text-xl text-gray-600 max-w-6xl mx-auto font-light">
                选择适合您系统的版本进行下载
              </p>
            </div>

            <div className="max-w-8xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* 桌面端表格 */}
                <div className="hidden lg:block">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                      <div className="col-span-3">软件包名称</div>
                      <div className="col-span-2">系统平台</div>
                      <div className="col-span-2">文件大小</div>
                      <div className="col-span-2">更新日期</div>
                      <div className="col-span-3 text-center">下载操作</div>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {downloadResources.map((resource, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3">
                            <div className="flex items-center space-x-3">
                              <div className="text-gray-400">
                                {resource.icon}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">
                                  {resource.name}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className={`${getPlatformColor(resource.platform)}`}>
                              {resource.type}
                            </Badge>
                          </div>
                          <div className="col-span-2 text-sm text-gray-600">
                            {resource.size}
                          </div>
                          <div className="col-span-2 text-sm text-gray-600">
                            {resource.date}
                          </div>
                          <div className="col-span-3 flex space-x-2 justify-center">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyDownloadLink(resource.name)}
                              className="h-8 px-3"
                            >
                              {copiedLink === resource.name ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                              <span className="ml-1 text-xs">
                                {copiedLink === resource.name ? "已复制" : "复制链接"}
                              </span>
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => downloadFile(resource.name)}
                              className="h-8 px-3 bg-blue-600 hover:bg-blue-700"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              立即下载
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 移动端卡片布局 */}
                <div className="lg:hidden">
                  {downloadResources.map((resource, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="p-4 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-gray-400">
                            {resource.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {resource.name}
                            </div>
                            <Badge className={`mt-1 ${getPlatformColor(resource.platform)}`}>
                              {resource.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                        <span>文件大小: {resource.size}</span>
                        <span>更新日期: {resource.date}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyDownloadLink(resource.name)}
                          className="flex-1 h-8"
                        >
                          {copiedLink === resource.name ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                          <span className="ml-1 text-xs">
                            {copiedLink === resource.name ? "已复制" : "复制链接"}
                          </span>
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => downloadFile(resource.name)}
                          className="flex-1 h-8 bg-blue-600 hover:bg-blue-700"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          立即下载
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 二维码下载 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                  扫码下载
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-6xl mx-auto font-light">
                  使用手机扫描二维码，快速下载移动端应用
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  <Card className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Smartphone className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Android版本</h3>
                    <div className="w-32 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <img 
                        src="/images/qrcode.png" 
                        alt="Android下载二维码" 
                        className="w-28 h-28"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <QrCode className="h-24 w-24 text-gray-400 hidden" />
                    </div>
                    <p className="text-sm text-gray-600">Android 7.0+</p>
                  </Card>
                  
                  <Card className="p-8 text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">iOS版本</h3>
                    <div className="w-32 h-32 bg-white border border-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <img 
                        src="/images/qrcode.png" 
                        alt="iOS下载二维码" 
                        className="w-28 h-28"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <QrCode className="h-24 w-24 text-gray-400 hidden" />
                    </div>
                    <p className="text-sm text-gray-600">iOS 15.6+</p>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 使用说明 */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight text-center">
                  使用说明
                </h2>
                
                <Card className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">文件格式说明</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          dmg结尾的是macOS版本，deb结尾的是Linux版本，exe和msi结尾的是Windows版本，apk结尾的是Android版本，ipa结尾的是iOS版本。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">下载方式</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          点击资源名称可以复制下载链接，点击下载会使用浏览器下载软件包。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">使用限制</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          打包仅限个人使用，请勿传播或商业用途，否则后果自负。
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DownloadPage; 
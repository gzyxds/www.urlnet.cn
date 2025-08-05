"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { 
  Code, 
  Database, 
  Zap,
  Copy,
  CheckCircle,
  ExternalLink,
  FileText,
  Package,
  Users,
  Brain,
  Palette,
  Music,
  Video,
  MessageSquare,
  Bot,
  BookOpen,
  Shield,
  Activity,
  Clock,
  Check,
  Download
} from "lucide-react";
import Header from '@/components/HeaderSection';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import { toast } from '@/hooks/use-toast';

const ApiPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("chat");

  // 设置API页面元数据
  usePageMetadata({
    title: 'API接口文档 - 艺创AI全能AIGC创作平台 | 企业级智能解决方案',
    description: '艺创AI提供完整的API接口文档，支持智能客服、文档管理、专家顾问、机器人管理、知识库训练等核心功能的API调用。包含详细的接口说明、参数配置、使用示例和SDK下载。',
    keywords: 'API接口,艺创AI,智能客服API,AI绘画API,AI视频API,AI音乐API,企业级API'
  });

  const apiCategories = [
    {
      id: "chat",
      title: "智能对话",
      description: "智能客服和问答系统API",
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      color: "blue"
    },
    {
      id: "document",
      title: "文档管理",
      description: "智能文档处理和管理API",
      icon: <FileText className="h-6 w-6 text-green-600" />,
      color: "green"
    },
    {
      id: "advisor",
      title: "专家顾问",
      description: "AI专家顾问和决策支持API",
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      color: "purple"
    },
    {
      id: "robot",
      title: "机器人管理",
      description: "智能机器人管理系统API",
      icon: <Bot className="h-6 w-6 text-orange-600" />,
      color: "orange"
    },
    {
      id: "knowledge",
      title: "知识库",
      description: "知识库构建和训练API",
      icon: <Database className="h-6 w-6 text-red-600" />,
      color: "red"
    },
    {
      id: "avatar",
      title: "AI数字人",
      description: "AI数字人技术API",
      icon: <Users className="h-6 w-6 text-pink-600" />,
      color: "pink"
    },
    {
      id: "qa",
      title: "智能问答",
      description: "基于知识库的智能问答API",
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      color: "indigo"
    },
    {
      id: "creation",
      title: "智能创作",
      description: "AI驱动的智能创作API",
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      color: "yellow"
    },
    {
      id: "painting",
      title: "AI绘画",
      description: "专业级AI绘画API",
      icon: <Palette className="h-6 w-6 text-rose-600" />,
      color: "rose"
    },
    {
      id: "video",
      title: "AI视频",
      description: "AI视频生成和编辑API",
      icon: <Video className="h-6 w-6 text-cyan-600" />,
      color: "cyan"
    },
    {
      id: "music",
      title: "AI音乐",
      description: "AI音乐创作和编曲API",
      icon: <Music className="h-6 w-6 text-emerald-600" />,
      color: "emerald"
    },
    {
      id: "ppt",
      title: "AIPPT",
      description: "智能PPT生成API",
      icon: <Package className="h-6 w-6 text-violet-600" />,
      color: "violet"
    }
  ];

  const apiEndpoints = [
    {
      method: "POST",
      path: "/api/v1/chat/completions",
      title: "智能对话",
      description: "发送消息并获取AI回复",
      category: "chat",
      status: "active"
    },
    {
      method: "POST",
      path: "/api/v1/documents/process",
      title: "文档处理",
      description: "上传并处理文档内容",
      category: "document",
      status: "active"
    },
    {
      method: "GET",
      path: "/api/v1/knowledge/search",
      title: "知识库搜索",
      description: "在知识库中搜索相关信息",
      category: "knowledge",
      status: "active"
    },
    {
      method: "POST",
      path: "/api/v1/avatar/generate",
      title: "数字人生成",
      description: "生成AI数字人形象",
      category: "avatar",
      status: "active"
    },
    {
      method: "POST",
      path: "/api/v1/art/paint",
      title: "AI绘画",
      description: "根据文本描述生成图像",
      category: "painting",
      status: "active"
    },
    {
      method: "POST",
      path: "/api/v1/video/create",
      title: "AI视频生成",
      description: "根据脚本生成视频内容",
      category: "video",
      status: "active"
    },
    {
      method: "POST",
      path: "/api/v1/music/compose",
      title: "AI音乐创作",
      description: "生成音乐旋律和编曲",
      category: "music",
      status: "active"
    },
    {
      method: "POST",
      path: "/api/v1/ppt/generate",
      title: "PPT生成",
      description: "根据主题生成演示文稿",
      category: "ppt",
      status: "active"
    }
  ];

  const sdkDownloads = [
    {
      name: "cnaiart-python-sdk-1.0.0.tar.gz",
      type: "Python SDK",
      size: "2.1 MB",
      version: "1.0.0",
      platform: "python",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "cnaiart-nodejs-sdk-1.0.0.tgz",
      type: "Node.js SDK",
      size: "1.8 MB",
      version: "1.0.0",
      platform: "nodejs",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "cnaiart-java-sdk-1.0.0.jar",
      type: "Java SDK",
      size: "3.2 MB",
      version: "1.0.0",
      platform: "java",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "cnaiart-csharp-sdk-1.0.0.nupkg",
      type: "C# SDK",
      size: "2.5 MB",
      version: "1.0.0",
      platform: "csharp",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "cnaiart-php-sdk-1.0.0.zip",
      type: "PHP SDK",
      size: "1.9 MB",
      version: "1.0.0",
      platform: "php",
      icon: <Code className="h-5 w-5" />
    },
    {
      name: "cnaiart-go-sdk-1.0.0.tar.gz",
      type: "Go SDK",
      size: "2.3 MB",
      version: "1.0.0",
      platform: "go",
      icon: <Code className="h-5 w-5" />
    }
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-yellow-100 text-yellow-800';
      case 'deprecated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      toast({
        title: "代码已复制",
        description: "代码已复制到剪贴板",
      });
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast({
        title: "复制失败",
        description: "请手动复制代码",
        variant: "destructive",
      });
    }
  };

  const downloadSdk = (fileName: string) => {
    const downloadUrl = `https://download.cnaiart.com/sdk/${fileName}`;
    window.open(downloadUrl, '_blank');
  };

  const codeExamples = {
    chat: `curl -X POST "https://api.cnaiart.com/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "你好，请介绍一下艺创AI"}
    ],
    "max_tokens": 1000
  }'`,
    painting: `curl -X POST "https://api.cnaiart.com/v1/art/paint" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "一只可爱的小猫在花园里玩耍",
    "style": "realistic",
    "size": "1024x1024"
  }'`,
    video: `curl -X POST "https://api.cnaiart.com/v1/video/create" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "script": "一个关于AI技术的介绍视频",
    "duration": 30,
    "style": "professional"
  }'`
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
                <Code className="h-10 w-10 text-white" />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                API接口文档
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
                艺创AI提供完整的API接口文档，支持智能客服、文档管理、专家顾问、机器人管理、知识库训练等核心功能的API调用。通过RESTful API，您可以轻松集成艺创AI的智能服务到您的应用中，实现智能化升级。
              </motion.p>
            </div>
          </div>
        </section>

        {/* API概览 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  API概览
                </h2>
                <p className="text-xl text-gray-600 max-w-6xl mx-auto font-light">
                  完整的API接口体系，支持多种智能服务
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {apiCategories.map((category, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* API接口列表 */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  API接口列表
                </h2>
                <p className="text-xl text-gray-600 max-w-6xl mx-auto font-light">
                  详细的接口说明和使用指南
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* 桌面端表格 */}
                <div className="hidden lg:block">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                      <div className="col-span-2">请求方法</div>
                      <div className="col-span-4">接口路径</div>
                      <div className="col-span-3">接口名称</div>
                      <div className="col-span-2">状态</div>
                      <div className="col-span-1 text-center">操作</div>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {apiEndpoints.map((endpoint, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-2">
                            <Badge className={`${getMethodColor(endpoint.method)}`}>
                              {endpoint.method}
                            </Badge>
                          </div>
                          <div className="col-span-4">
                            <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                              {endpoint.path}
                            </code>
                          </div>
                          <div className="col-span-3">
                            <div>
                              <div className="font-medium text-gray-900 text-sm">
                                {endpoint.title}
                              </div>
                              <div className="text-gray-600 text-xs mt-1">
                                {endpoint.description}
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className={`${getStatusColor(endpoint.status)}`}>
                              {endpoint.status === 'active' ? '可用' : endpoint.status}
                            </Badge>
                          </div>
                          <div className="col-span-1 text-center">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 px-3"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 移动端卡片布局 */}
                <div className="lg:hidden">
                  {apiEndpoints.map((endpoint, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="p-4 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge className={`${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </Badge>
                          <Badge className={`${getStatusColor(endpoint.status)}`}>
                            {endpoint.status === 'active' ? '可用' : endpoint.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="font-medium text-gray-900 text-sm mb-1">
                          {endpoint.title}
                        </div>
                        <code className="text-xs font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded block">
                          {endpoint.path}
                        </code>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">{endpoint.description}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 px-3"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 使用示例 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  使用示例
                </h2>
                <p className="text-xl text-gray-600 max-w-6xl mx-auto font-light">
                  详细的代码示例和调用说明
                </p>
              </div>

              <div className="w-full">
                <div className="grid w-full grid-cols-3 mb-8">
                  <div className={`cursor-pointer p-2 text-center ${activeTab === 'chat' ? 'bg-blue-500 text-white' : ''}`} onClick={() => setActiveTab('chat')}>智能对话</div>
                  <div className={`cursor-pointer p-2 text-center ${activeTab === 'painting' ? 'bg-blue-500 text-white' : ''}`} onClick={() => setActiveTab('painting')}>AI绘画</div>
                  <div className={`cursor-pointer p-2 text-center ${activeTab === 'video' ? 'bg-blue-500 text-white' : ''}`} onClick={() => setActiveTab('video')}>AI视频</div>
                </div>
                
                <div className={`space-y-6 ${activeTab === 'chat' ? 'block' : 'hidden'}`}>
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">智能对话API示例</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyCode(codeExamples.chat)}
                        className="h-8 px-3"
                      >
                        {copiedCode === codeExamples.chat ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        <span className="ml-1 text-xs">
                          {copiedCode === codeExamples.chat ? "已复制" : "复制代码"}
                        </span>
                      </Button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{codeExamples.chat}</code>
                    </pre>
                  </Card>
                </div>
                
                <div className={`space-y-6 ${activeTab === 'painting' ? 'block' : 'hidden'}`}>
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">AI绘画API示例</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyCode(codeExamples.painting)}
                        className="h-8 px-3"
                      >
                        {copiedCode === codeExamples.painting ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        <span className="ml-1 text-xs">
                          {copiedCode === codeExamples.painting ? "已复制" : "复制代码"}
                        </span>
                      </Button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{codeExamples.painting}</code>
                    </pre>
                  </Card>
                </div>
                
                <div className={`space-y-6 ${activeTab === 'video' ? 'block' : 'hidden'}`}>
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">AI视频API示例</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyCode(codeExamples.video)}
                        className="h-8 px-3"
                      >
                        {copiedCode === codeExamples.video ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        <span className="ml-1 text-xs">
                          {copiedCode === codeExamples.video ? "已复制" : "复制代码"}
                        </span>
                      </Button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{codeExamples.video}</code>
                    </pre>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SDK下载 */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  SDK下载
                </h2>
                <p className="text-xl text-gray-600 max-w-6xl mx-auto font-light">
                  支持多种编程语言的SDK，简化API集成
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* 桌面端表格 */}
                <div className="hidden lg:block">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                      <div className="col-span-3">SDK名称</div>
                      <div className="col-span-2">编程语言</div>
                      <div className="col-span-2">版本</div>
                      <div className="col-span-2">文件大小</div>
                      <div className="col-span-3 text-center">下载操作</div>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {sdkDownloads.map((sdk, index) => (
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
                                {sdk.icon}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm">
                                  {sdk.name}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <Badge className="bg-blue-100 text-blue-800">
                              {sdk.type}
                            </Badge>
                          </div>
                          <div className="col-span-2 text-sm text-gray-600">
                            {sdk.version}
                          </div>
                          <div className="col-span-2 text-sm text-gray-600">
                            {sdk.size}
                          </div>
                          <div className="col-span-3 flex space-x-2 justify-center">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyCode(`npm install ${sdk.name}`)}
                              className="h-8 px-3"
                            >
                              <Copy className="h-4 w-4 mr-1" />
                              复制命令
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => downloadSdk(sdk.name)}
                              className="h-8 px-3 bg-blue-600 hover:bg-blue-700"
                            >
                              <Download className="h-4 w-4 mr-1" />
                              下载SDK
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 移动端卡片布局 */}
                <div className="lg:hidden">
                  {sdkDownloads.map((sdk, index) => (
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
                            {sdk.icon}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {sdk.name}
                            </div>
                            <Badge className="mt-1 bg-blue-100 text-blue-800">
                              {sdk.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                        <span>版本: {sdk.version}</span>
                        <span>大小: {sdk.size}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyCode(`npm install ${sdk.name}`)}
                          className="flex-1 h-8"
                        >
                          <Copy className="h-4 w-4 mr-1" />
                          复制命令
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => downloadSdk(sdk.name)}
                          className="flex-1 h-8 bg-blue-600 hover:bg-blue-700"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          下载SDK
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API状态 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight text-center">
                  API状态
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">服务状态</h3>
                    <p className="text-green-600 font-semibold">正常运行</p>
                    <p className="text-sm text-gray-600 mt-2">99.9% 可用性</p>
                  </Card>
                  
                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">响应时间</h3>
                    <p className="text-blue-600 font-semibold">平均 120ms</p>
                    <p className="text-sm text-gray-600 mt-2">全球CDN加速</p>
                  </Card>
                  
                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">安全认证</h3>
                    <p className="text-purple-600 font-semibold">SSL/TLS加密</p>
                    <p className="text-sm text-gray-600 mt-2">企业级安全</p>
                  </Card>
                  
                  <Card className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">更新频率</h3>
                    <p className="text-orange-600 font-semibold">每周更新</p>
                    <p className="text-sm text-gray-600 mt-2">持续优化</p>
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
                        <h3 className="font-bold text-gray-900 mb-2">获取API密钥</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          注册艺创AI账号后，在控制台获取您的API密钥，用于身份验证和访问控制。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">选择SDK</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          根据您的开发语言选择合适的SDK，简化API调用过程，提高开发效率。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">调用API</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          参考API文档和示例代码，按照规范调用相应的接口，实现智能功能集成。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">监控使用</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          在控制台监控API调用情况，包括使用量、错误率、响应时间等关键指标。
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

export default ApiPage;

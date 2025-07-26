"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Database, MessageSquare, FileText, Send } from "lucide-react";
import Header from '@/components/header';
import Footer from '@/components/footer';

const DemoPage = () => {
  const [activeDemo, setActiveDemo] = useState("digital-twin");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // 数字分身演示
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([
    {role: "assistant", content: "您好！我是AI科技的数字分身助手，有什么可以帮您解答的问题吗？"}
  ]);

  // 企业知识库演示
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // 聊天绘画演示
  const [imagePrompt, setImagePrompt] = useState("");
  const [imageStyle, setImageStyle] = useState("realistic");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  // 论文创作演示
  const [paperTopic, setPaperTopic] = useState("");
  const [paperType, setPaperType] = useState("research");
  const [paperOutline, setPaperOutline] = useState<string | null>(null);

  const handleDigitalTwinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    // 添加用户问题到聊天历史
    setChatHistory([...chatHistory, {role: "user", content: question}]);
    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      // 根据问题生成回答
      let response = "";
      if (question.includes("产品") || question.includes("服务")) {
        response = "我们提供多种AI产品和服务，包括数字分身、企业知识库、聊天绘画和论文创作等。您对哪个产品感兴趣，需要了解更多信息吗？";
      } else if (question.includes("价格") || question.includes("费用")) {
        response = "我们的产品价格根据具体需求和规模有所不同，提供基础版、专业版和企业版三种套餐。您可以联系我们的销售团队获取详细报价，或者预约产品演示。";
      } else if (question.includes("联系") || question.includes("咨询")) {
        response = "您可以通过以下方式联系我们：电话：400-888-8888，邮箱：contact@aitech.com，或者填写网站上的联系表单，我们的客服团队会尽快与您联系。";
      } else {
        response = "感谢您的咨询。您的问题很有价值，我们的专业团队会进一步为您提供详细解答。您可以留下联系方式，我们会尽快与您联系。";
      }
      
      setChatHistory([...chatHistory, {role: "user", content: question}, {role: "assistant", content: response}]);
      setQuestion("");
      setLoading(false);
    }, 1000);
  };

  const handleKnowledgeBaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      // 模拟搜索结果
      const mockResults = [
        {
          title: "AI技术在企业中的应用白皮书",
          excerpt: "...本文探讨了人工智能技术在现代企业中的多种应用场景，包括客户服务、数据分析和自动化流程...",
          relevance: 95,
          type: "PDF文档",
          date: "2023-05-15"
        },
        {
          title: "数字化转型最佳实践指南",
          excerpt: "...企业数字化转型需要综合考虑技术、人才和流程三个方面，本指南提供了详细的实施步骤和案例分析...",
          relevance: 87,
          type: "Word文档",
          date: "2023-03-22"
        },
        {
          title: "2023年AI市场趋势报告",
          excerpt: "...报告显示，大语言模型和生成式AI将成为2023年AI领域的主要发展方向，预计市场规模将增长35%...",
          relevance: 82,
          type: "PPT演示文稿",
          date: "2023-01-10"
        }
      ];
      
      setSearchResults(mockResults);
      setLoading(false);
    }, 1000);
  };

  const handleChatDrawingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imagePrompt.trim()) return;
    
    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      // 根据风格选择不同的示例图片
      let imageUrl = "";
      if (imageStyle === "realistic") {
        imageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80";
      } else if (imageStyle === "artistic") {
        imageUrl = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2045&q=80";
      } else {
        imageUrl = "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80";
      }
      
      setGeneratedImage(imageUrl);
      setLoading(false);
    }, 1500);
  };

  const handlePaperWritingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paperTopic.trim()) return;
    
    setLoading(true);
    
    // 模拟API调用
    setTimeout(() => {
      // 生成论文大纲
      let outline = `# ${paperTopic}\n\n## 摘要\n本研究探讨了${paperTopic}的关键方面和最新发展...\n\n## 1. 引言\n- 研究背景和意义\n- 研究目的和问题\n- 研究方法概述\n\n## 2. 文献综述\n- 相关理论基础\n- 国内外研究现状\n- 研究差距和机会\n\n## 3. 研究方法\n- 研究设计\n- 数据收集方法\n- 分析框架\n\n## 4. 结果分析\n- 主要发现\n- 数据解释\n- 模型验证\n\n## 5. 讨论\n- 研究结果的意义\n- 理论和实践贡献\n- 研究局限性\n\n## 6. 结论与展望\n- 主要结论\n- 未来研究方向\n- 实践建议\n\n## 参考文献`;
      
      setPaperOutline(outline);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f9f0] pt-20">
        <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">产品演示</h1>
              <p className="text-xl max-w-3xl mx-auto">
                体验AI科技的前沿产品，感受人工智能如何改变工作和生活方式。
                以下演示展示了我们产品的部分功能，完整体验请联系我们预约专业演示。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="digital-twin" className="w-full" onValueChange={setActiveDemo}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="digital-twin" className="flex items-center">
                  <Brain className="mr-2 h-4 w-4" />
                  <span>数字分身</span>
                </TabsTrigger>
                <TabsTrigger value="knowledge-base" className="flex items-center">
                  <Database className="mr-2 h-4 w-4" />
                  <span>企业知识库</span>
                </TabsTrigger>
                <TabsTrigger value="chat-drawing" className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>聊天绘画</span>
                </TabsTrigger>
                <TabsTrigger value="paper-writing" className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>论文创作</span>
                </TabsTrigger>
              </TabsList>

              {/* 数字分身演示 */}
              <TabsContent value="digital-twin">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">数字分身演示</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">功能介绍</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>智能对话：自然流畅的多轮对话，理解上下文语境</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>情感识别：根据用户情绪提供适当回应</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>个性化定制：根据企业特点定制专属数字分身</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>多渠道部署：支持网站、APP、小程序等多种渠道</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500">
                            * 本演示为功能简化版，完整版本请联系我们预约专业演示
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-md h-[500px] flex flex-col">
                          <div className="bg-[#015bfe] text-white p-4 rounded-t-lg">
                            <h3 className="font-semibold">AI科技数字助手</h3>
                          </div>
                          <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {chatHistory.map((msg, index) => (
                              <div 
                                key={index} 
                                className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                              >
                                <div 
                                  className={`max-w-[80%] rounded-lg p-3 ${
                                    msg.role === 'assistant' 
                                      ? 'bg-gray-100 text-gray-800' 
                                      : 'bg-[#015bfe] text-white'
                                  }`}
                                >
                                  {msg.content}
                                </div>
                              </div>
                            ))}
                            {loading && (
                              <div className="flex justify-start">
                                <div className="max-w-[80%] rounded-lg p-3 bg-gray-100">
                                  <div className="flex space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="p-4 border-t">
                            <form onSubmit={handleDigitalTwinSubmit} className="flex gap-2">
                              <Input 
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="输入您的问题..."
                                disabled={loading}
                                className="flex-1"
                              />
                              <Button type="submit" disabled={loading || !question.trim()}>
                                <Send className="h-4 w-4" />
                              </Button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 企业知识库演示 */}
              <TabsContent value="knowledge-base">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">企业知识库演示</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">功能介绍</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>智能检索：基于语义理解的搜索引擎，支持自然语言提问</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>自动分类：利用机器学习算法，自动对企业文档进行分类整理</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>知识图谱：构建企业知识关联网络，展示知识点之间的联系</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>多格式支持：支持Word、PDF、PPT等多种文件格式</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500">
                            * 本演示为功能简化版，完整版本请联系我们预约专业演示
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-md h-[500px] flex flex-col">
                          <div className="bg-[#015bfe] text-white p-4 rounded-t-lg">
                            <h3 className="font-semibold">企业知识库搜索</h3>
                          </div>
                          <div className="p-4">
                            <form onSubmit={handleKnowledgeBaseSubmit} className="flex gap-2 mb-6">
                              <Input 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="输入搜索关键词或问题..."
                                disabled={loading}
                                className="flex-1"
                              />
                              <Button type="submit" disabled={loading || !searchQuery.trim()}>
                                搜索
                              </Button>
                            </form>
                            
                            <div className="overflow-y-auto max-h-[380px]">
                              {loading ? (
                                <div className="flex justify-center items-center h-40">
                                  <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 border-4 border-[#015bfe] border-t-transparent rounded-full animate-spin"></div>
                                    <p className="mt-4 text-gray-500">正在搜索相关文档...</p>
                                  </div>
                                </div>
                              ) : searchResults.length > 0 ? (
                                <div className="space-y-6">
                                  {searchResults.map((result, index) => (
                                    <div key={index} className="border rounded-lg p-4 hover:border-[#015bfe] transition-colors">
                                      <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-[#015bfe]">{result.title}</h4>
                                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                                          相关度: {result.relevance}%
                                        </span>
                                      </div>
                                      <p className="text-gray-600 mb-3">{result.excerpt}</p>
                                      <div className="flex justify-between items-center text-sm text-gray-500">
                                        <span>{result.type}</span>
                                        <span>{result.date}</span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : searchQuery ? (
                                <div className="text-center text-gray-500 py-10">
                                  没有找到相关结果，请尝试其他关键词
                                </div>
                              ) : (
                                <div className="text-center text-gray-500 py-10">
                                  输入关键词或问题，搜索企业知识库
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 聊天绘画演示 */}
              <TabsContent value="chat-drawing">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">聊天绘画演示</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">功能介绍</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>文本生成图像：通过自然语言描述生成高质量图像</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>多风格支持：写实、卡通、油画、水彩等多种艺术风格</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>高清导出：支持多种分辨率和格式导出</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>图像编辑：支持对生成图像进行二次编辑和修改</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500">
                            * 本演示为功能简化版，完整版本请联系我们预约专业演示
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-md h-[500px] flex flex-col">
                          <div className="bg-[#015bfe] text-white p-4 rounded-t-lg">
                            <h3 className="font-semibold">AI绘画生成器</h3>
                          </div>
                          <div className="p-4 flex-1 overflow-y-auto">
                            <form onSubmit={handleChatDrawingSubmit} className="mb-6">
                              <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  图像描述
                                </label>
                                <Textarea 
                                  value={imagePrompt}
                                  onChange={(e) => setImagePrompt(e.target.value)}
                                  placeholder="描述您想要生成的图像，例如：'一只在月光下奔跑的狼，背景是雪山'"
                                  disabled={loading}
                                  className="min-h-[100px]"
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  艺术风格
                                </label>
                                <Select 
                                  value={imageStyle} 
                                  onValueChange={setImageStyle}
                                  disabled={loading}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="选择艺术风格" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="realistic">写实风格</SelectItem>
                                    <SelectItem value="artistic">艺术风格</SelectItem>
                                    <SelectItem value="commercial">商业风格</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button 
                                type="submit" 
                                className="w-full" 
                                disabled={loading || !imagePrompt.trim()}
                              >
                                {loading ? "生成中..." : "生成图像"}
                              </Button>
                            </form>
                            
                            {loading ? (
                              <div className="flex justify-center items-center h-40">
                                <div className="flex flex-col items-center">
                                  <div className="w-10 h-10 border-4 border-[#015bfe] border-t-transparent rounded-full animate-spin"></div>
                                  <p className="mt-4 text-gray-500">AI正在创作中，请稍候...</p>
                                </div>
                              </div>
                            ) : generatedImage ? (
                              <div className="border rounded-lg p-2">
                                <img 
                                  src={generatedImage} 
                                  alt="AI生成图像" 
                                  className="w-full h-auto rounded"
                                />
                                <div className="mt-2 text-center">
                                  <p className="text-sm text-gray-500">
                                    根据您的描述生成的图像
                                  </p>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 论文创作演示 */}
              <TabsContent value="paper-writing">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">论文创作演示</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">功能介绍</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>文献分析：智能分析海量学术文献，提取关键信息</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>智能写作：生成结构化的论文初稿，提高写作效率</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>格式规范：支持多种学术格式，自动调整排版和引用</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                            <span>查重检测：内置查重功能，确保论文原创性</span>
                          </li>
                        </ul>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500">
                            * 本演示为功能简化版，完整版本请联系我们预约专业演示
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="bg-white rounded-lg shadow-md h-[500px] flex flex-col">
                          <div className="bg-[#015bfe] text-white p-4 rounded-t-lg">
                            <h3 className="font-semibold">论文创作助手</h3>
                          </div>
                          <div className="p-4 flex-1 overflow-y-auto">
                            <form onSubmit={handlePaperWritingSubmit} className="mb-6">
                              <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  论文主题
                                </label>
                                <Input 
                                  value={paperTopic}
                                  onChange={(e) => setPaperTopic(e.target.value)}
                                  placeholder="输入您的论文主题，例如：'人工智能在医疗诊断中的应用'"
                                  disabled={loading}
                                />
                              </div>
                              <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  论文类型
                                </label>
                                <Select 
                                  value={paperType} 
                                  onValueChange={setPaperType}
                                  disabled={loading}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="选择论文类型" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="research">研究论文</SelectItem>
                                    <SelectItem value="review">综述论文</SelectItem>
                                    <SelectItem value="thesis">学位论文</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button 
                                type="submit" 
                                className="w-full" 
                                disabled={loading || !paperTopic.trim()}
                              >
                                {loading ? "生成中..." : "生成论文大纲"}
                              </Button>
                            </form>
                            
                            {loading ? (
                              <div className="flex justify-center items-center h-40">
                                <div className="flex flex-col items-center">
                                  <div className="w-10 h-10 border-4 border-[#015bfe] border-t-transparent rounded-full animate-spin"></div>
                                  <p className="mt-4 text-gray-500">正在分析研究主题，生成论文大纲...</p>
                                </div>
                              </div>
                            ) : paperOutline ? (
                              <div className="border rounded-lg p-4 bg-gray-50">
                                <h4 className="text-lg font-semibold mb-4">论文大纲</h4>
                                <pre className="whitespace-pre-wrap text-sm font-mono">{paperOutline}</pre>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">预约完整演示</h2>
              <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                想要体验我们产品的全部功能？请填写以下表单预约专业演示，我们的团队将尽快与您联系。
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          姓名
                        </label>
                        <Input placeholder="请输入您的姓名" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          公司/组织
                        </label>
                        <Input placeholder="请输入您的公司或组织名称" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          电子邮箱
                        </label>
                        <Input type="email" placeholder="请输入您的电子邮箱" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          电话
                        </label>
                        <Input placeholder="请输入您的联系电话" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        感兴趣的产品
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="选择您感兴趣的产品" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital-twin">数字分身</SelectItem>
                          <SelectItem value="knowledge-base">企业知识库</SelectItem>
                          <SelectItem value="chat-drawing">聊天绘画</SelectItem>
                          <SelectItem value="paper-writing">论文创作</SelectItem>
                          <SelectItem value="all">所有产品</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        其他需求或问题
                      </label>
                      <Textarea placeholder="请描述您的具体需求或问题" />
                    </div>
                    <Button className="w-full bg-[#015bfe] hover:bg-blue-700">
                      提交预约
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DemoPage;

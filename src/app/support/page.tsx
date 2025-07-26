"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Clock, Users, Zap, Download, FileText, Code } from "lucide-react";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Link } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const SupportPage = () => {
  // 设置支持页面元数据
  usePageMetadata({
    title: '支持与服务 - 技术支持与合作伙伴 | 艺创AI',
    description: '艺创AI支持中心，提供产品更新日志、API集成文档、合作伙伴计划、APP下载和全方位技术支持服务。帮助您充分利用AI产品和解决方案。',
    keywords: '技术支持,产品更新,API集成,合作伙伴,APP下载,在线客服,知识库,艺创AI'
  });
  const [activeTab, setActiveTab] = useState("updates");

  const updates = [
    {
      version: "v3.2.0",
      date: "2023-06-15",
      title: "数字分身增强更新",
      description: "此版本主要增强了数字分身的情感识别能力，新增多语言支持，优化了对话流畅度。",
      details: [
        "新增情感识别模块，支持识别用户7种基本情绪",
        "新增日语、韩语、法语、德语等多语言支持",
        "优化对话上下文理解，提升多轮对话流畅度",
        "修复了若干已知问题"
      ]
    },
    {
      version: "v3.1.5",
      date: "2023-05-20",
      title: "企业知识库功能更新",
      description: "此版本主要优化了企业知识库的搜索性能和文档处理能力，提升了用户体验。",
      details: [
        "优化搜索算法，提升搜索速度和准确性",
        "新增PDF表格识别和结构化提取功能",
        "增强知识图谱可视化展示",
        "新增批量导入导出功能"
      ]
    },
    {
      version: "v3.1.0",
      date: "2023-04-10",
      title: "聊天绘画重大更新",
      description: "此版本对聊天绘画进行了全面升级，引入新的图像生成模型，提供更多创作选项。",
      details: [
        "引入全新图像生成模型，提升图像质量和细节表现",
        "新增10种艺术风格预设",
        "支持局部重绘和图像编辑功能",
        "优化提示词解析，提升文本到图像的转换准确性"
      ]
    }
  ];

  const integrations = [
    {
      title: "REST API",
      description: "通过标准REST API集成我们的AI能力到您的应用中，支持所有主流编程语言。",
      icon: <Code className="h-10 w-10 text-[#015bfe]" />,
      link: "/docs/api-overview"
    },
    {
      title: "SDK集成",
      description: "使用我们的SDK快速集成AI功能，支持Python、Java、JavaScript、C#等多种语言。",
      icon: <Code className="h-10 w-10 text-[#015bfe]" />,
      link: "/docs/sdk-download"
    },
    {
      title: "网页插件",
      description: "通过简单的JavaScript代码片段，在您的网站上集成AI聊天助手和图像生成功能。",
      icon: <Code className="h-10 w-10 text-[#015bfe]" />,
      link: "/docs/web-plugins"
    },
    {
      title: "移动应用集成",
      description: "将我们的AI能力集成到iOS和Android应用中，提供原生体验。",
      icon: <Code className="h-10 w-10 text-[#015bfe]" />,
      link: "/docs/mobile-integration"
    },
    {
      title: "第三方平台集成",
      description: "与Slack、Microsoft Teams、Salesforce等第三方平台无缝集成。",
      icon: <Code className="h-10 w-10 text-[#015bfe]" />,
      link: "/docs/third-party-integration"
    },
    {
      title: "企业定制集成",
      description: "根据企业特定需求，提供定制化集成方案和技术支持。",
      icon: <Code className="h-10 w-10 text-[#015bfe]" />,
      link: "/contact"
    }
  ];

  const partnerships = [
    {
      title: "技术合作伙伴",
      description: "与我们共同开发创新AI解决方案，获取技术支持和资源共享。",
      benefits: [
        "优先获取最新技术和API",
        "联合开发和技术支持",
        "市场推广合作机会",
        "专属合作伙伴经理"
      ],
      icon: <Zap className="h-10 w-10 text-[#015bfe]" />
    },
    {
      title: "解决方案合作伙伴",
      description: "将我们的AI产品集成到您的解决方案中，为客户提供更高价值的服务。",
      benefits: [
        "产品集成技术支持",
        "联合解决方案认证",
        "销售和营销资源",
        "合作伙伴培训计划"
      ],
      icon: <Users className="h-10 w-10 text-[#015bfe]" />
    },
    {
      title: "渠道合作伙伴",
      description: "成为我们的授权经销商，销售AI科技产品并获取可观的佣金收入。",
      benefits: [
        "有竞争力的佣金结构",
        "销售和技术培训",
        "营销资料和支持",
        "专属渠道经理"
      ],
      icon: <Users className="h-10 w-10 text-[#015bfe]" />
    }
  ];

  const downloads = [
    {
      title: "AI科技桌面客户端",
      description: "Windows和macOS桌面应用，提供所有AI产品的完整功能。",
      platforms: ["Windows", "macOS"],
      version: "v3.2.0",
      size: "125MB",
      icon: <Download className="h-10 w-10 text-[#015bfe]" />
    },
    {
      title: "AI科技移动应用",
      description: "iOS和Android移动应用，随时随地使用AI功能。",
      platforms: ["iOS", "Android"],
      version: "v3.1.8",
      size: "85MB",
      icon: <Download className="h-10 w-10 text-[#015bfe]" />
    },
    {
      title: "企业管理控制台",
      description: "企业版专用管理控制台，管理用户、权限和使用情况。",
      platforms: ["Windows", "macOS", "Linux"],
      version: "v2.5.0",
      size: "95MB",
      icon: <Download className="h-10 w-10 text-[#015bfe]" />
    },
    {
      title: "开发者工具包",
      description: "包含SDK、示例代码和开发文档的完整开发者工具包。",
      platforms: ["跨平台"],
      version: "v3.2.0",
      size: "210MB",
      icon: <Download className="h-10 w-10 text-[#015bfe]" />
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f7f9f0] pt-20">
        <section className="py-16 bg-gradient-to-r from-[#015bfe] to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">支持与服务</h1>
              <p className="text-xl max-w-3xl mx-auto">
                我们提供全方位的支持和服务，帮助您充分利用AI科技的产品和解决方案。
                从技术支持到合作伙伴计划，我们致力于您的成功。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="updates" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="updates" className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>更新日志</span>
                </TabsTrigger>
                <TabsTrigger value="integrations" className="flex items-center">
                  <Code className="mr-2 h-4 w-4" />
                  <span>集成与API</span>
                </TabsTrigger>
                <TabsTrigger value="partnerships" className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>合作伙伴</span>
                </TabsTrigger>
                <TabsTrigger value="downloads" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  <span>APP下载</span>
                </TabsTrigger>
              </TabsList>

              {/* 更新日志 */}
              <TabsContent value="updates">
                <div className="space-y-8 max-w-4xl mx-auto">
                  {updates.map((update, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center mb-2">
                            <span className="bg-[#015bfe] text-white text-sm px-3 py-1 rounded-full">
                              {update.version}
                            </span>
                            <span className="text-sm text-gray-500">{update.date}</span>
                          </div>
                          <CardTitle>{update.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{update.description}</p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">更新内容：</h4>
                            <ul className="space-y-1">
                              {update.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                  <div className="text-center">
                    <Button variant="outline" className="border-[#015bfe] text-[#015bfe]">
                      查看所有更新日志
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* 集成与API */}
              <TabsContent value="integrations">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {integrations.map((integration, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:border-[#015bfe] hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <div className="mb-4">{integration.icon}</div>
                          <h3 className="text-xl font-bold mb-2">{integration.title}</h3>
                          <p className="text-gray-600 mb-6">{integration.description}</p>
                          <Button 
                            variant="outline" 
                            className="text-[#015bfe] border-[#015bfe] hover:bg-[#015bfe] hover:text-white"
                            asChild
                          >
                            <Link to={integration.link}>
                              了解更多
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <Card className="bg-[#015bfe] text-white p-8 max-w-3xl mx-auto">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold mb-4">需要定制集成方案？</h3>
                      <p className="mb-6">
                        我们的专业团队可以根据您的特定需求，提供定制化的集成方案和技术支持。
                        无论是复杂的系统集成，还是特殊的业务场景，我们都能为您提供最佳解决方案。
                      </p>
                      <Button className="bg-white text-[#015bfe] hover:bg-gray-100">
                        联系我们的集成专家
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 合作伙伴 */}
              <TabsContent value="partnerships">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {partnerships.map((partnership, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:border-[#015bfe] hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <div className="mb-4">{partnership.icon}</div>
                          <h3 className="text-xl font-bold mb-2">{partnership.title}</h3>
                          <p className="text-gray-600 mb-4">{partnership.description}</p>
                          <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h4 className="font-medium mb-2">合作优势：</h4>
                            <ul className="space-y-1">
                              {partnership.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 rounded-full bg-[#015bfe] mr-2 mt-2"></div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button className="w-full bg-[#015bfe] hover:bg-blue-700">
                            申请成为合作伙伴
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">合作伙伴计划</h3>
                      <p className="text-gray-600 mb-6">
                        加入AI科技合作伙伴计划，共同开拓AI市场，创造更大商业价值。
                        我们提供全面的支持和资源，帮助您成功开展业务。
                      </p>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              公司名称
                            </label>
                            <Input placeholder="请输入公司名称" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              联系人
                            </label>
                            <Input placeholder="请输入联系人姓名" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              电子邮箱
                            </label>
                            <Input type="email" placeholder="请输入电子邮箱" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              电话
                            </label>
                            <Input placeholder="请输入联系电话" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            合作类型
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="请选择合作类型" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tech">技术合作伙伴</SelectItem>
                              <SelectItem value="solution">解决方案合作伙伴</SelectItem>
                              <SelectItem value="channel">渠道合作伙伴</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            合作意向描述
                          </label>
                          <Textarea placeholder="请简要描述您的合作意向和需求" />
                        </div>
                        <Button className="w-full bg-[#015bfe] hover:bg-blue-700">
                          提交申请
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* APP下载 */}
              <TabsContent value="downloads">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {downloads.map((download, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:border-[#015bfe] hover:shadow-md transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-start">
                            <div className="mr-4">{download.icon}</div>
                            <div>
                              <h3 className="text-xl font-bold mb-1">{download.title}</h3>
                              <p className="text-gray-600 mb-4">{download.description}</p>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {download.platforms.map((platform, idx) => (
                                  <span 
                                    key={idx} 
                                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                  >
                                    {platform}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mb-6">
                                <span className="mr-4">版本: {download.version}</span>
                                <span>大小: {download.size}</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {download.platforms.includes("Windows") && (
                                  <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                                    Windows版下载
                                  </Button>
                                )}
                                {download.platforms.includes("macOS") && (
                                  <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                                    macOS版下载
                                  </Button>
                                )}
                                {download.platforms.includes("Linux") && (
                                  <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                                    Linux版下载
                                  </Button>
                                )}
                                {download.platforms.includes("iOS") && (
                                  <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                                    App Store下载
                                  </Button>
                                )}
                                {download.platforms.includes("Android") && (
                                  <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                                    Google Play下载
                                  </Button>
                                )}
                                {download.platforms.includes("跨平台") && (
                                  <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                                    下载开发者工具包
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <Card className="bg-gray-50 p-8 max-w-3xl mx-auto">
                    <CardContent className="p-0">
                      <FileText className="h-12 w-12 text-[#015bfe] mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">安装指南和系统要求</h3>
                      <p className="text-gray-600 mb-6">
                        查看详细的安装指南和系统要求，确保软件能够在您的设备上正常运行。
                        如果您在安装或使用过程中遇到任何问题，请参阅我们的故障排除指南或联系技术支持。
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                          查看安装指南
                        </Button>
                        <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                          系统要求
                        </Button>
                        <Button variant="outline" className="text-[#015bfe] border-[#015bfe]">
                          故障排除
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">技术支持</h2>
              <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                我们提供多种技术支持选项，帮助您解决在使用过程中遇到的问题。
                从自助服务到专属技术支持，我们致力于提供最佳的用户体验。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-[#015bfe]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">知识库</h3>
                  <p className="text-gray-600 mb-4">
                    浏览我们的知识库，查找常见问题的解答、教程和最佳实践。
                  </p>
                  <Button className="bg-[#015bfe] hover:bg-blue-700">
                    访问知识库
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#015bfe]">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">在线客服</h3>
                  <p className="text-gray-600 mb-4">
                    通过在线聊天获取即时帮助，工作时间：周一至周五 9:00-18:00
                  </p>
                  <Button className="bg-[#015bfe] hover:bg-blue-700">
                    开始聊天
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#015bfe]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">专属支持</h3>
                  <p className="text-gray-600 mb-4">
                    企业版客户享有专属技术支持经理，提供一对一的技术咨询和问题解决。
                  </p>
                  <Button className="bg-[#015bfe] hover:bg-blue-700">
                    联系专属支持
                  </Button>
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

export default SupportPage;
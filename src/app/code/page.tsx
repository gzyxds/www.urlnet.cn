"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Code, 
  Star, 
  GitBranch, 
  Calendar, 
  Shield, 
  Zap,
  Users,
  ArrowRight,
  Github,
  Search,
  Filter,
  Eye,
  CheckCircle,
  X,
  QrCode
} from "lucide-react";
import Header from '@/components/HeaderSection';
import Contact from '@/components/ContactSection';
import { usePageMetadata } from '@/hooks/usePageMetadata';

/**
 * 项目数据接口定义
 */
interface Project {
  id: number;
  name: string;
  version: string;
  language: string;
  framework: string;
  description: string;
  features: string[];
  releaseDate: string;
  downloads: number;
  stars: number;
  price: string;
  category: string;
  tags: string[];
  status: 'latest' | 'stable' | 'beta';
  demoUrl: string;
  downloadUrl: string;
  githubUrl: string;
}

/**
 * 分类选项接口定义
 */
interface Category {
  id: string;
  name: string;
  count: number;
}

/**
 * AI系统源代码下载页面组件
 * 提供开源AI项目的展示、搜索、筛选和下载功能
 */
const CodeDownloadPage: React.FC = () => {
  // 设置页面SEO元数据
  usePageMetadata({
    title: 'AI系统源代码下载 - 开源AI解决方案 | 艺创AI',
    description: '下载艺创AI开源系统源代码，包括ChatMoney全能AI知识库系统、ChatAI聊天绘画系统、ChatPaper论文写作系统等多个AI产品的完整源码。',
    keywords: '源码下载,开源AI,ChatMoney,ChatAI,ChatPaper,AI系统源码,PHP源码,Java源码,Python源码'
  });

  // 状态管理
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showQRModal, setShowQRModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /**
   * 源码项目数据配置
   * 包含所有可下载的开源项目信息
   */
  const sourceProjects: Project[] = [
    {
      id: 1,
      name: "艺创AI-全能AI知识库系统「Python源码版」",
      version: "v1.2.2",
      language: "Python",
      framework: "Python",
      description: "全能AI知识库系统，支持多种AI模型集成，提供完整的SaaS解决方案。系统采用模块化设计，支持快速部署和定制开发。",
      features: ["首次发布"],
      releaseDate: "2025-03-11",
      downloads: 1250,
      stars: 89,
      price: "最新",
      category: "python",
      tags: ["艺创AI", "AI", "知识库", "Python"],
      status: "stable",
      demoUrl: "https://demo.example.com",
      downloadUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      name: "艺创AI-AI数字人SaaS系统2.0「PHP源码版」",
      version: "v2.0.1", 
      language: "PHP",
      framework: "ThinkPHP",
      description: "企业级AI数字人解决方案，支持多渠道部署和个性化配置。提供完整的API接口和管理后台。",
      features: [
        "🐞 修复授权验证错误问题",
        "优化前端交互体验",
        "增加多语言支持", 
        "完善API文档"
      ],
      releaseDate: "2025-07-04 11:45",
      downloads: 980,
      stars: 76,
      price: "最新",
      category: "php",
      tags: ["数字人", "企业级", "多渠道"],
      status: "stable",
      demoUrl: "https://demo.example.com",
      downloadUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      name: "艺创AI-超级IP数字人SaaS系统",
      version: "v1.2.2",
      language: "PHP", 
      framework: "ThinkPHP",
      description: "最新版本的AI数字人系统，增加了更多智能功能和优化。采用最新技术栈，性能提升显著。",
      features: [
        "🐞 修复小程序端AI文案功能后台控制问题",
        "租户后台AI文案配置增加豆包推理接入点设置",
        "新增多语言支持",
        "增强安全防护机制"
      ],
      releaseDate: "2025-03-11 18:21",
      downloads: 2100,
      stars: 156,
      price: "最新",
      category: "php", 
      tags: ["最新版", "性能优化", "多语言"],
      status: "latest",
      demoUrl: "https://demo.example.com",
      downloadUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      name: "艺创AI-全能AI知识库系统PHP版",
      version: "v2.1.0",
      language: "PHP",
      framework: "ThinkPHP",
      description: "基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PostgreSQL、pgvector技术栈开发，包含PC端、H5端",
      features: [
        "✅ 知识库检索重排模型",
        "⚡ 向量模型错误提示优化",
        "🐞 知识库数据更新异常修复"
      ],
      releaseDate: "2025-07-11",
      downloads: 856,
      stars: 92,
      price: "最新",
      category: "php",
      tags: ["知识库", "AI模型", "数据分析"],
      status: "stable",
      demoUrl: "https://demo.example.com",
      downloadUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      name: "艺创AI-全能AI知识库系统「Java源码版」",
      version: "v1.8.5",
      language: "Java",
      framework: "Spring Boot",
      description: "Java版本的AI知识库系统，提供完整的企业级解决方案。支持高并发访问和大数据处理。",
      features: [
        "⚡ 适配deepseekR1逻辑模型",
        "✅ 支持多租户架构和权限管理",
        "🔄 优化接口幂等性和并发处理",
        "🔒 增强安全防护机制",
        "🐞 修复会话管理和数据查询问题",
        "📝 完整的API文档和使用说明"
      ],
      releaseDate: "2025-04-07",
      downloads: 1456,
      stars: 128,
      price: "免费",
      category: "java",
      tags: ["企业级", "多租户", "高并发"],
      status: "stable",
      demoUrl: "https://demo.example.com", 
      downloadUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      name: "艺创AI-聊天绘画系统PHP版本",
      version: "v4.5.3",
      language: "PHP",
      framework: "ThinkPHP",
      description: "基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发，包含PC端、H5端、小程序端、APP端。",
      features: [
        "⚡ 安装sql优化",
        "🐞 修复签到赠送错误问题",
        "🐞 修复讯飞语音合成失败问题"
      ],
      releaseDate: "2025-05-15",
      downloads: 743,
      stars: 67,
      price: "最新",
      category: "php",
      tags: ["绘画AI", "聊天", "PHP"],
      status: "stable",
      demoUrl: "https://demo.example.com",
      downloadUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      name: "艺创AI-论文写作系统",
      version: "v1.5.4",
      language: "PHP",
      framework: "ThinkPHP",
      description: "专业的AI论文写作辅助系统，支持多种学术写作场景。集成先进的NLP技术和学术数据库。",
      features: [
        "⚡ 新增deepseek模型支持",
        "⚡ 优化文献数据处理",
        "⚡ 优化程序安装兼容性",
        "智能文献检索",
        "论文结构生成",
        "引用格式规范",
        "多语言学术写作"
      ],
      releaseDate: "2025-02-28",
      downloads: 634,
      stars: 45,
      price: "免费",
      category: "php",
      tags: ["论文写作", "学术", "文献检索"],
      status: "stable",
      demoUrl: "https://demo.example.com",
      downloadUrl: "#",
      githubUrl: "#"
    }
  ];

  /**
   * 生成分类选项数据
   * 根据项目数据动态计算各分类的项目数量
   */
  const categories: Category[] = [
    { id: "all", name: "全部", count: sourceProjects.length },
    { id: "php", name: "PHP", count: sourceProjects.filter(p => p.category === "php").length },
    { id: "python", name: "Python", count: sourceProjects.filter(p => p.category === "python").length },
    { id: "java", name: "Java", count: sourceProjects.filter(p => p.category === "java").length }
  ];

  /**
   * 项目筛选逻辑
   * 根据选中的分类和搜索关键词过滤项目列表
   */
  const filteredProjects = sourceProjects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  /**
   * 获取编程语言对应的样式类名
   * @param language 编程语言名称
   * @returns 对应的CSS类名字符串
   */
  const getLanguageColor = (language: string): string => {
    const colorMap: Record<string, string> = {
      PHP: "bg-blue-50 text-blue-700 border-blue-200",
      Python: "bg-green-50 text-green-700 border-green-200", 
      Java: "bg-orange-50 text-orange-700 border-orange-200",
      JavaScript: "bg-yellow-50 text-yellow-700 border-yellow-200"
    };
    return colorMap[language] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  /**
   * 获取项目状态对应的样式类名
   * @param status 项目状态
   * @returns 对应的CSS类名字符串
   */
  const getStatusColor = (status: string): string => {
    const colorMap: Record<string, string> = {
      latest: "bg-blue-50 text-blue-700 border-blue-200",
      stable: "bg-green-50 text-green-700 border-green-200",
      beta: "bg-yellow-50 text-yellow-700 border-yellow-200"
    };
    return colorMap[status] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  /**
   * 获取状态显示文本
   * @param status 项目状态
   * @returns 对应的中文显示文本
   */
  const getStatusText = (status: string): string => {
    const textMap: Record<string, string> = {
      latest: '最新',
      stable: '稳定',
      beta: 'Beta'
    };
    return textMap[status] || status;
  };

  /**
   * 处理外部链接点击事件
   * @param url 目标URL
   */
  const handleExternalLink = (url: string): void => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  /**
   * 处理下载源码按钮点击事件
   * 显示二维码弹窗
   * @param project 项目信息
   */
  const handleDownloadClick = (project: Project): void => {
    setSelectedProject(project);
    setShowQRModal(true);
  };

  /**
   * 关闭二维码弹窗
   */
  const handleCloseQRModal = (): void => {
    setShowQRModal(false);
    setSelectedProject(null);
  };

  /**
   * 重置筛选条件
   */
  const resetFilters = (): void => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  /**
   * 渲染页面头部区域
   */
  const renderHeader = () => (
    <section className="py-12 lg:py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge className="bg-blue-50 text-blue-600 border-blue-200 mb-4">
              <Code className="w-3 h-3 mr-1" />
              开源项目
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AI系统源代码下载
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            系统持续更新中，联系客服获取AI系统源代码下载权限
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">7+</div>
              <div className="text-sm text-gray-500">开源项目</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">8K+</div>
              <div className="text-sm text-gray-500">总下载量</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">653</div>
              <div className="text-sm text-gray-500">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-500">免费开源</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  /**
   * 渲染搜索框组件
   */
  const renderSearchBox = () => (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
          <Search className="h-5 w-5 mr-2 text-blue-600" />
          搜索项目
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="搜索项目名称或描述..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </CardContent>
    </Card>
  );

  /**
   * 渲染分类筛选组件
   */
  const renderCategoryFilter = () => (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2 text-blue-600" />
          编程语言
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between ${
                selectedCategory === category.id
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "hover:bg-gray-50 text-gray-700 border border-transparent"
              }`}
            >
              <span className="font-medium">{category.name}</span>
              <Badge 
                variant="secondary" 
                className={`${
                  selectedCategory === category.id 
                    ? "bg-blue-100 text-blue-700" 
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {category.count}
              </Badge>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  /**
   * 渲染项目特色组件
   */
  const renderProjectFeatures = () => (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">项目特色</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">安全可靠</h4>
              <p className="text-sm text-gray-600">企业级安全标准</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">快速部署</h4>
              <p className="text-sm text-gray-600">一键安装配置</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">社区支持</h4>
              <p className="text-sm text-gray-600">活跃开发者社区</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  /**
   * 渲染项目卡片组件
   */
  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                      {project.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getLanguageColor(project.language)}>
                        {project.language}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusText(project.status)}
                      </Badge>
                      <span className="text-sm text-gray-500">{project.framework}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  {project.price}
                </Badge>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <GitBranch className="h-4 w-4 mr-1" />
                  {project.version}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.releaseDate}
                </div>
                <div className="flex items-center">
                  <Download className="h-4 w-4 mr-1 text-green-500" />
                  {project.downloads.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-500" />
                  {project.stars}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                  更新内容
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="lg:w-48 flex-shrink-0">
              <div className="space-y-3">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleDownloadClick(project)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  下载源码
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-gray-50"
                  onClick={() => handleExternalLink(project.demoUrl)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  在线演示
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-gray-50"
                  onClick={() => handleExternalLink(project.githubUrl)}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  /**
   * 渲染空状态组件
   */
  const renderEmptyState = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">未找到匹配的项目</h3>
      <p className="text-gray-500 mb-4">请尝试调整搜索条件或筛选选项</p>
      <Button variant="outline" onClick={resetFilters}>
        清除筛选条件
      </Button>
    </div>
  );

  /**
   * 渲染二维码弹窗组件
   */
  const renderQRModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-center justify-center"
      onClick={handleCloseQRModal}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleCloseQRModal}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
          aria-label="关闭"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>
        
        <div className="p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <QrCode className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">获取源码</h3>
          </div>
          
          {selectedProject && (
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">{selectedProject.name}</h4>
              <p className="text-sm text-gray-600">版本: {selectedProject.version}</p>
            </div>
          )}
          
          <p className="text-sm text-gray-600 mb-6">扫描二维码联系客服获取源码下载权限</p>
          
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img 
                src="/images/qrcode.png" 
                alt="客服二维码" 
                className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
              />
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-blue-800 font-medium mb-2 text-left">📱 获取步骤：</p>
            <div className="text-xs text-blue-700 space-y-1 text-left">
              <p>1. 联系客服获取AI系统源代码下载权限</p>
              <p>2. 商业授权可享受官方更多技术支持</p>
              <p>3. 拒绝盗版，尊重知识产权，从你我做起。</p>
              <p>4. 一次购买永久免费更新，代码全开源</p>
            </div>
          </div>
          
          <p className="text-xs text-gray-500">长按二维码保存到相册 • 工作时间：9:00-18:00</p>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="h-12 sm:h-16 lg:h-20"></div>
        
        {renderHeader()}

        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              
              <div className="lg:w-80 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                  {renderSearchBox()}
                  {renderCategoryFilter()}
                  {renderProjectFeatures()}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    找到 {filteredProjects.length} 个项目
                  </h2>
                  <div className="text-sm text-gray-500">
                    按更新时间排序
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredProjects.map((project, index) => renderProjectCard(project, index))}
                </div>

                {filteredProjects.length > 0 && (
                  <div className="text-center mt-12">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                    >
                      加载更多项目
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {filteredProjects.length === 0 && renderEmptyState()}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
      
      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQRModal && renderQRModal()}
      </AnimatePresence>
    </>
  );
};

export default CodeDownloadPage;
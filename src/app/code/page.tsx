"use client";

// -----------------------------------------------------------------------------
// 1. 依赖导入 (External -> Internal -> Styles)
// -----------------------------------------------------------------------------
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Code,
  Star,
  GitBranch,
  Shield,
  Search,
  Eye,
  X,
  QrCode,
  Sparkles,
  Terminal,
  Layers,
  Database,
  Bot,
  PenTool,
  FileText,
  Zap,
  Code2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Contact from '@/components/ContactSection';

import { usePageMetadata } from '@/hooks/use-page-metadata';
import { cn } from "@/lib/utils";
import { sourceProjects, type Project } from '@/data/code-projects';

// -----------------------------------------------------------------------------
// 2. 类型定义
// -----------------------------------------------------------------------------
/**
 * 分类选项接口定义
 * 用于筛选栏的分类配置
 */
interface Category {
  id: string;
  name: string;
  count: number;
  icon?: React.ElementType;
}

// -----------------------------------------------------------------------------
// 3. 常量与辅助配置
// -----------------------------------------------------------------------------
/**
 * 判断项目是否属于指定分类
 * 基于项目名称、描述、标签和语言进行多维度匹配
 */
const matchCategory = (project: Project, categoryId: string): boolean => {
  const content = (project.name + project.description + project.tags.join('')).toLowerCase();

  switch (categoryId) {
    case 'all':
      return true;
    case 'knowledge':
      return /知识库/.test(content);
    case 'digital-human':
      return /数字分身|数字人/.test(content);
    case 'chat-draw':
      return /聊天绘画|ai绘画|聊天/.test(content);
    case 'paper':
      return /论文|写作/.test(content);
    case 'php':
      return project.language.toLowerCase() === 'php' || /php/.test(content);
    case 'java':
      return project.language.toLowerCase() === 'java' || /java/.test(content);
    case 'python':
      return project.language.toLowerCase() === 'python' || /python/.test(content);
    default:
      return false;
  }
};

/**
 * 静态分类数据配置
 * 基于 sourceProjects 数据动态计算各分类下的项目数量
 */
const CATEGORIES: Category[] = [
  { id: 'all', name: '全部项目', count: 0, icon: Zap },
  { id: 'knowledge', name: '知识库', count: 0, icon: Database },
  { id: 'digital-human', name: 'AI数字人', count: 0, icon: Bot },
  { id: 'chat-draw', name: '聊天绘画', count: 0, icon: PenTool },
  { id: 'paper', name: '论文写作', count: 0, icon: FileText },
  { id: 'php', name: 'PHP源码', count: 0, icon: Code2 },
  { id: 'java', name: 'Java源码', count: 0, icon: Code2 },
  { id: 'python', name: 'Python源码', count: 0, icon: Code2 },
].map(cat => ({
  ...cat,
  count: sourceProjects.filter(p => matchCategory(p, cat.id)).length
}));

// -----------------------------------------------------------------------------
// 4. 主页面组件
// -----------------------------------------------------------------------------
/**
 * AI系统源代码下载页面组件
 *
 * 功能模块说明：
 * 1. 页面头部 (Header): 展示页面标题、核心价值主张和关键统计数据
 * 2. 筛选工具栏 (FilterBar): 提供多维度的项目筛选（分类）和实时搜索功能
 * 3. 项目展示区 (ProjectGrid): 以 Bento Grid 风格网格展示项目卡片，支持响应式布局
 * 4. 下载弹窗 (QRModal): 提供获取源码的二维码引导和正版授权说明
 */
const CodeDownloadPage: React.FC = () => {
  // 4.1 状态管理与 Hooks
  usePageMetadata({
    title: 'AI系统源代码下载 - 开源AI解决方案 | 艺创AI',
    description: '下载艺创AI开源系统源代码，包括ChatMoney全能AI知识库系统、ChatAI聊天绘画系统、ChatPaper论文写作系统等多个AI产品的完整源码。',
    keywords: '源码下载,开源AI,ChatMoney,ChatAI,ChatPaper,AI系统源码,PHP源码,Java源码,Python源码'
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showQRModal, setShowQRModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 4.2 衍生状态 (Derived State)
  /**
   * 项目列表过滤逻辑
   * 根据当前选中的分类和搜索关键词，实时过滤显示的项目列表
   * 使用 useMemo 缓存计算结果，避免不必要的重计算
   */
  const filteredProjects = useMemo(() => {
    return sourceProjects.filter(project => {
      const matchesCategory = matchCategory(project, selectedCategory);
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // 4.3 事件处理 (Event Handlers)
  /**
   * 处理外部链接跳转
   * 包含简单的链接有效性检查
   */
  const handleExternalLink = (url: string): void => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  /**
   * 触发下载操作
   * 打开二维码弹窗并设置当前选中的项目上下文
   */
  const handleDownloadClick = (project: Project): void => {
    setSelectedProject(project);
    setShowQRModal(true);
  };

  /**
   * 关闭下载弹窗
   * 清除选中状态并关闭模态框
   */
  const handleCloseQRModal = (): void => {
    setShowQRModal(false);
    setSelectedProject(null);
  };

  // 4.4 渲染辅助函数 (Render Functions)
  /**
   * 渲染页面头部区域
   * 包含背景光效、标题动画和统计数据展示
   */
  const renderHeader = () => (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] mix-blend-multiply opacity-60" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-[100px] mix-blend-multiply opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100/50">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              开源 · 免费 · 企业级
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI系统<span className="text-blue-600">源代码下载</span>
          </motion.h1>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            汇聚优质开源AI项目，支持多语言版本。<br className="hidden sm:block" />
            一站式获取企业级 AI 解决方案源码。
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { label: "开源项目", value: "10+", icon: Terminal },
              { label: "累计下载", value: "8K+", icon: Download },
              { label: "GitHub Stars", value: "2.5K", icon: Star },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 flex items-center gap-1.5">
                  <stat.icon className="w-3.5 h-3.5" />
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

  /**
   * 渲染筛选工具栏
   * 吸顶显示，支持横向滚动分类和右侧搜索框
   */
  const renderFilterBar = () => (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 gap-4">
          <div className="w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
            <div className="flex items-center gap-1 w-max mx-auto md:mx-0">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2",
                    selectedCategory === category.id
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  {category.name}
                  <span className={cn(
                    "ml-1 text-xs opacity-80",
                    selectedCategory === category.id ? "text-white/80" : "text-slate-400"
                  )}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-64 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="搜索项目..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 bg-slate-50 border-transparent focus:bg-white focus:border-blue-200 focus:ring-2 focus:ring-blue-50 transition-all rounded-full text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );

  /**
   * 渲染单个项目卡片
   * 包含项目的基本信息、技术标签、数据指标和操作按钮
   */
  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col group bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 rounded-2xl overflow-hidden">
        <CardHeader className="p-6 pb-4">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1.5" title={project.name}>
                  {project.name.replace("艺创AI-", "")}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-medium px-2 py-0.5 bg-slate-50 rounded text-slate-600 border border-slate-100">
                    {project.language}
                  </span>
                  <span>{project.framework}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 px-6 py-2">
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4 h-10">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5" />
                {project.version}
              </span>
              <span className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5" />
                {project.downloads}
              </span>
            </div>
            <span className={cn(
              "font-medium",
              project.price === "免费" ? "text-green-600" : "text-blue-600"
            )}>
              {project.price}
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-2 gap-3 grid grid-cols-2">
          <Button
            variant="ghost"
            className="w-full bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 text-slate-600 hover:text-slate-900 transition-all rounded-xl h-10"
            onClick={() => handleExternalLink(project.demoUrl)}
          >
            <Eye className="h-4 w-4 mr-2" />
            演示
          </Button>
          <Button
            className="w-full bg-slate-900 hover:bg-blue-600 text-white shadow-none hover:shadow-lg hover:shadow-blue-500/20 transition-all rounded-xl h-10"
            onClick={() => handleDownloadClick(project)}
          >
            <Download className="h-4 w-4 mr-2" />
            获取源码
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  /**
   * 渲染获取源码二维码弹窗
   * 展示二维码、项目信息和正版保障说明
   */
  const renderQRModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-0"
      onClick={handleCloseQRModal}
    >
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleCloseQRModal}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors z-10 text-slate-400 hover:text-slate-600"
          aria-label="关闭"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8 text-center">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <QrCode className="w-7 h-7 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">获取源码授权</h3>
          <p className="text-slate-500 mb-8 text-sm">扫码联系技术顾问，获取完整源码包</p>

          {selectedProject && (
            <div className="mb-8 bg-slate-50 rounded-2xl p-4 flex items-center gap-4 text-left">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-100 flex-shrink-0">
                  <Code className="w-5 h-5 text-blue-600" />
               </div>
               <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-800 line-clamp-1 mb-1">{selectedProject.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="bg-white px-1.5 py-0.5 rounded border border-slate-200">{selectedProject.language}</span>
                    <span>{selectedProject.version}</span>
                  </div>
               </div>
            </div>
          )}

          <div className="flex justify-center mb-8">
            <div className="p-2 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <img
                src="/images/qrcode.png"
                alt="客服二维码"
                className="w-44 h-44 object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-2xl p-4 text-left border border-blue-100/50">
            <p className="text-xs font-bold text-blue-900 mb-2 flex items-center">
              <Shield className="w-3.5 h-3.5 mr-2 text-blue-600" />
              正版授权保障
            </p>
            <ul className="text-xs text-blue-700/70 space-y-1.5 list-none pl-1">
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>获取完整无加密源代码，支持二次开发</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                <span>享受官方技术支持与定期更新服务</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // 4.5 主渲染入口 (Main Render)
  return (
    <>
      <main className="min-h-screen bg-slate-50/30">
        <div className="h-16 lg:h-20 bg-white"></div>

        {renderHeader()}
        {renderFilterBar()}

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  精选项目
                  <span className="text-sm font-normal text-slate-500 ml-1">({filteredProjects.length})</span>
               </h2>
               <div className="text-sm text-slate-500">
                  按热度排序
               </div>
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="popLayout">
                {filteredProjects.length > 0 ? (
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8"
                  >
                    {filteredProjects.map((project, index) => renderProjectCard(project, index))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200"
                  >
                    <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                      <Search className="h-10 w-10 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">暂无匹配项目</h3>
                    <p className="text-slate-500 mb-6">
                      未找到与 "{searchQuery}" 相关的项目，<br/>请尝试更换关键词或筛选条件
                    </p>
                    <Button
                      onClick={() => {setSearchQuery(""); setSelectedCategory("all");}}
                      className="bg-slate-900 text-white hover:bg-blue-700 rounded-xl"
                    >
                      清除筛选条件
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Contact />

      <AnimatePresence>
        {showQRModal && renderQRModal()}
      </AnimatePresence>
    </>
  );
};

export default CodeDownloadPage;

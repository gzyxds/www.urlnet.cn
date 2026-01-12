"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Globe,
  ShoppingCart,
  Users,
  Building,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Shield,
  BarChart3,
  MessageSquare,
  Clock,
  Database,
  Cloud,
  Lock,
  Server,
  Sparkles,
  ClipboardList,
  Package,
  UserCheck,
  Megaphone,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Mic,
  Kanban,
  GitMerge,
  BookOpen,
  UserPlus,
  Receipt,
  BookOpenCheck,
  PenTool,
  Route,
  MonitorPlay,
  Ear,
  FileQuestion,
  Calendar,
  Activity,
  Stethoscope,
  HeartPulse,
  Microscope,
  FileSearch,
  ImagePlus,
  Phone,
  Layout,
  PieChart,
  Scale,
  FileCheck,
  AlertTriangle,
  FileBarChart,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- 类型定义 ---
type TabType = 'visual' | 'agent' | 'knowledge' | 'model' | 'marketing';

interface Feature {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TabConfig {
  name: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  features: Feature[];
}

// --- 数据源配置 ---
const TABS_CONFIG: Record<TabType, TabConfig> = {
  visual: {
    name: 'AI 视觉创作',
    title: 'AI 视觉与创意生成解决方案',
    icon: ImagePlus,
    features: [
      { icon: Video, title: 'Sora2视频', desc: '新一代视频生成模型，支持长视频创作' },
      { icon: ImagePlus, title: '香蕉绘画Nanobanana', desc: '专业级AI绘画工具，精准控制画面细节' },
      { icon: Sparkles, title: 'AI视频 & AI绘画', desc: '一站式智能视频与图像生成平台' },
      { icon: Layout, title: '艺术二维码', desc: '融合品牌元素的个性化艺术二维码生成' },
      { icon: ImagePlus, title: '豆包文生图', desc: '基于字节跳动豆包模型的图像生成能力' },
      { icon: GitMerge, title: 'AI改图', desc: '智能图像编辑，支持局部重绘与风格迁移' },
      { icon: Mic, title: 'AI配音工具', desc: '逼真的语音合成，支持多种情感与音色' }
    ]
  },
  agent: {
    name: '智能对话 Agent',
    title: '智能体与对话交互系统',
    icon: MessageSquare,
    features: [
      { icon: Server, title: '智能体', desc: '自定义专属AI智能体，满足个性化需求' },
      { icon: MessageSquare, title: 'AI对话', desc: '基于大语言模型的流畅自然交互体验' },
      { icon: Layout, title: '对话html预览', desc: '实时预览对话中生成的HTML代码效果' },
      { icon: Cloud, title: '对话上传文件', desc: '支持在对话中直接上传并解析文件内容' },
      { icon: Server, title: '智能体DSL', desc: '通过DSL灵活编排智能体工作流' },
      { icon: Sparkles, title: '对话文案AI补全', desc: '智能预测并补全用户输入内容' },
      { icon: Mic, title: '语音播报', desc: '将对话回复自动转换为语音播报' },
      { icon: Users, title: '分享对话', desc: '一键生成链接，便捷分享精彩对话' }
    ]
  },
  knowledge: {
    name: '知识库与文档',
    title: '企业级知识库与文档处理',
    icon: FileText,
    features: [
      { icon: FileText, title: '知识库', desc: '构建企业私有知识库，数据安全可控' },
      { icon: Cloud, title: '文件导入导出', desc: '支持多种格式文档的批量导入与导出' },
      { icon: GitMerge, title: '问答对导入', desc: '快速导入QA问答对，优化模型回复' },
      { icon: BarChart3, title: '拆分问答对', desc: '智能拆分长文档为独立的问答对片段' },
      { icon: FileText, title: '文档问答', desc: '基于文档内容的精准问答与检索' },
      { icon: FileText, title: 'PDF解析工具', desc: '高效提取PDF文档中的文本与表格' },
      { icon: FileText, title: '文件生成', desc: '自动生成报告、合同等标准化文档' }
    ]
  },
  model: {
    name: '模型与数据能力',
    title: '多模型管理与数据解析',
    icon: Server,
    features: [
      { icon: Server, title: 'MCP', desc: '支持模型上下文协议，增强模型能力' },
      { icon: Server, title: '模型管理', desc: '统一管理与调度各类大语言模型' },
      { icon: ImagePlus, title: '大模型视觉识别', desc: '赋予模型强大的图像理解与分析能力' },
      { icon: Globe, title: '网页解析', desc: '智能提取网页正文与关键信息' },
      { icon: ImagePlus, title: '图文解析', desc: '多模态内容深度理解与结构化提取' },
      { icon: FileText, title: '内容总结', desc: '快速提炼长文核心观点与摘要' },
      { icon: BarChart3, title: '图表生成', desc: '根据数据自动生成可视化图表' }
    ]
  },
  marketing: {
    name: '营销与应用集成',
    title: '全渠道营销与应用生态集成',
    icon: Megaphone,
    features: [
      { icon: MessageSquare, title: '发布至微信公众号', desc: '一键推送文章至微信公众号平台' },
      { icon: ImagePlus, title: '发布至朋友圈海报', desc: '自动生成适合朋友圈传播的营销海报' },
      { icon: MessageSquare, title: '发布至企业微信', desc: '无缝打通企业微信，赋能内部办公' },
      { icon: Server, title: '发布至影刀RPA', desc: '集成RPA能力，实现业务流程自动化' },
      { icon: Layout, title: '思维导图', desc: '一键生成结构清晰的思维导图' },
      { icon: BarChart3, title: 'GEO排名', desc: '基于地理位置的搜索排名优化工具' },
      { icon: Layout, title: 'AI PPT', desc: '输入主题即可自动生成精美PPT' },
      { icon: Sparkles, title: '爆款文章生成', desc: '辅助创作高流量、高转化的爆款文章' }
    ]
  }
};

// 功能卡片组件
const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <div className="group flex flex-col gap-3 p-3 lg:flex-row lg:gap-4 lg:p-4 rounded-none lg:rounded-2xl lg:-ml-4 hover:bg-muted/50 transition-colors duration-300 border-0 lg:border lg:border-border/50 lg:hover:border-border">
    <div className="shrink-0">
      <div className="w-10 h-10 rounded-lg lg:rounded-xl bg-muted flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
        <feature.icon className="h-5 w-5" />
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-bold text-sm lg:text-lg mb-1 text-foreground group-hover:text-primary transition-colors truncate">
        {feature.title}
      </h4>
      <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {feature.desc}
      </p>
    </div>
    <div className="shrink-0 hidden lg:block">
      <a
        href="https://www.cnai.art/dialogue/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 text-xs font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full transition-all shadow-none"
      >
        立即创作
      </a>
    </div>
  </div>
);

const HotProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('visual');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentConfig = useMemo(() => TABS_CONFIG[activeTab], [activeTab]);

  const handleMouseEnter = (key: TabType) => {
    setActiveTab(key);
  };

  return (
    <section className="w-full py-12 sm:py-24 font-sans bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/80" id="hot-products">
      <div className="container mx-auto px-4">

        {/* 顶部标题 */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            全场景 <span className="text-blue-500">AI 解决方案</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            赋能企业与个人的超级智能体平台，助力业务数智化升级
          </p>
        </div>

        {/* 主体卡片容器 */}
        <div className="relative rounded-none lg:rounded-3xl overflow-hidden border-0 lg:border lg:border-border/50 shadow-none lg:shadow-sm min-h-[600px] flex flex-col lg:flex-row transition-all duration-500 backdrop-blur-xl bg-card/80">
          {/* 背景装饰 - 简化 */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-muted/20 via-background/40 to-muted/20"></div>

          {/* 导航区域 */}
          <aside className="relative z-10 w-full lg:w-1/4 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border/40 backdrop-blur-md flex flex-col">
            {/* 移动端横向滚动/桌面端垂直列表 */}
            <div className="flex-1 overflow-x-auto lg:overflow-y-auto scrollbar-hide">
              <div className="flex lg:flex-col p-2 lg:p-4 gap-2">
                {(Object.keys(TABS_CONFIG) as TabType[]).map((key) => {
                  const config = TABS_CONFIG[key];
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      onMouseEnter={() => handleMouseEnter(key)}
                      className={cn(
                        "group relative flex items-center px-4 py-3 lg:py-4 rounded-lg lg:rounded-xl transition-all duration-300 min-w-[140px] lg:min-w-0 text-left outline-none",
                        isActive
                          ? "bg-card text-primary shadow-none lg:shadow-sm lg:ring-1 lg:ring-border"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {/* 激活指示条 */}
                      <div
                        className={cn(
                          "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full transition-all duration-300",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      ></div>

                      <config.icon
                        className={cn(
                          "h-5 w-5 mr-3 transition-colors shrink-0",
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                        )}
                      />
                      <span className="text-sm font-medium truncate">{config.name}</span>

                      {/* 箭头 */}
                      <ChevronRight
                        className={cn(
                          "ml-auto h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 hidden lg:block",
                          isActive ? "opacity-100 translate-x-0 text-muted-foreground" : ""
                        )}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* 内容面板 */}
          <section className="relative z-10 flex-1 p-6 sm:p-8 lg:p-12 flex flex-col">
            {/* 头部信息 */}
            <div className="mb-8 animate-slide-up">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                {currentConfig?.title}
              </h3>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            {/* 功能网格 */}
            <div className="flex-1 grid grid-cols-2 gap-3 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 content-start mb-8">
              {currentConfig.features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>

            {/* 底部操作栏 */}
            <div className="mt-auto pt-6 border-t border-border flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full transition-all shadow-sm hover:-translate-y-0.5">
                了解方案详情
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>

              <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground bg-card hover:bg-muted border border-border rounded-full transition-all hover:border-primary/30 hover:-translate-y-0.5 shadow-sm">
                联系售前咨询
                <MessageSquare className="ml-2 h-4 w-4" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;

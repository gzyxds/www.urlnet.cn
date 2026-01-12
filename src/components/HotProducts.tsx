"use client";

import React, { useState, useMemo, useRef, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FileBarChart
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- 类型定义 ---
type ScenarioType = 'ecommerce' | 'enterprise' | 'education' | 'government' | 'finance' | 'healthcare';

interface SubProduct {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  isHot?: boolean;
  isNew?: boolean;
  link?: string;
}

interface ScenarioConfig {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  products: SubProduct[];
}

// --- 场景配置数据 ---
const SCENARIO_CONFIG: Record<ScenarioType, ScenarioConfig> = {
  ecommerce: {
    title: '电商零售解决方案',
    icon: ShoppingCart,
    products: [
      { title: '智能客服', description: '24/7自动回复，提升服务效率', icon: MessageSquare, isHot: true },
      { title: '商品推荐', description: '个性化推荐算法，提高转化率', icon: Sparkles, isHot: true },
      { title: '订单管理', description: '自动化订单处理，减少人工成本', icon: ClipboardList, isHot: true },
      { title: '库存优化', description: '智能库存预测，降低库存成本', icon: Package },
      { title: '用户画像', description: '深度分析用户行为，精准营销', icon: UserCheck },
      { title: '营销自动化', description: '智能生成营销活动方案', icon: Megaphone },
      { title: '价格监控', description: '实时监控竞品价格动态', icon: TrendingUp },
      { title: '评论分析', description: 'NLP分析用户评价情感', icon: MessageCircle },
      { title: '直播带货', description: 'AI虚拟主播全天候带货', icon: Video }
    ]
  },
  enterprise: {
    title: '企业级智能办公',
    icon: Building,
    products: [
      { title: '文档智能', description: '自动生成和处理各类文档', icon: FileText, isHot: true },
      { title: '会议助手', description: '智能会议记录和任务分配', icon: Mic, isHot: true },
      { title: '项目管理', description: 'AI驱动的项目进度跟踪', icon: Kanban, isNew: true },
      { title: '数据分析', description: '智能业务数据分析报告', icon: BarChart3 },
      { title: '流程自动化', description: 'RPA机器人处理重复工作', icon: GitMerge },
      { title: '知识库管理', description: '企业知识沉淀与智能检索', icon: BookOpen },
      { title: '招聘助手', description: '简历自动筛选与人岗匹配', icon: UserPlus },
      { title: '财务报销', description: '智能票据识别与审核', icon: Receipt },
      { title: '考勤管理', description: '智能排班与考勤统计', icon: Clock }
    ]
  },
  education: {
    title: '智慧教育平台',
    icon: GraduationCap,
    products: [
      { title: '个性化学习', description: '根据学习进度定制课程', icon: BookOpenCheck, isHot: true },
      { title: '智能评测', description: '自动批改和学习分析', icon: PenTool, isHot: true },
      { title: '课程推荐', description: 'AI推荐最适合的学习路径', icon: Route, isNew: true },
      { title: '学习跟踪', description: '实时监控学习效果', icon: Activity },
      { title: '虚拟导师', description: 'AI助教随时答疑解惑', icon: MonitorPlay },
      { title: '口语陪练', description: '智能语音识别纠正发音', icon: Ear },
      { title: '题库生成', description: '根据知识点自动生成试题', icon: FileQuestion },
      { title: '教务管理', description: '智能排课与资源调度', icon: Calendar },
      { title: '家校互动', description: '自动化生成学生成长报告', icon: Users }
    ]
  },
  government: {
    title: '政务服务数字化',
    icon: Globe,
    products: [
      { title: '智能政务', description: '自动化政务流程处理', icon: Server, isHot: true },
      { title: '公共服务', description: '24/7在线政务服务', icon: Cloud, isHot: true },
      { title: '数据治理', description: '政务数据统一管理', icon: Database, isNew: true },
      { title: '安全保障', description: '政务信息安全防护', icon: Shield },
      { title: '舆情监测', description: '全网舆情实时分析预警', icon: Activity },
      { title: '政策解读', description: 'AI智能问答解读政策法规', icon: FileSearch },
      { title: '智慧社区', description: '社区网格化智能管理', icon: Layout },
      { title: '应急指挥', description: '突发事件智能调度决策', icon: AlertTriangle },
      { title: '便民热线', description: '智能语音识别分流热线', icon: Phone }
    ]
  },
  finance: {
    title: '金融科技创新',
    icon: Briefcase,
    products: [
      { title: '风险控制', description: 'AI驱动的风险评估模型', icon: Shield, isHot: true },
      { title: '智能投顾', description: '个性化投资建议服务', icon: PieChart, isHot: true },
      { title: '客户服务', description: '智能金融客服系统', icon: MessageSquare, isNew: true },
      { title: '合规监管', description: '自动化合规检查', icon: Scale },
      { title: '反欺诈', description: '实时交易欺诈检测拦截', icon: Lock },
      { title: '信贷审批', description: '智能信贷资质审核', icon: FileCheck },
      { title: '市场预测', description: 'AI量化分析市场趋势', icon: TrendingUp },
      { title: '保险理赔', description: '智能定损与理赔自动化', icon: FileBarChart },
      { title: '研报分析', description: '自动提取研报核心观点', icon: FileText }
    ]
  },
  healthcare: {
    title: '智慧医疗健康',
    icon: Users,
    products: [
      { title: '智能诊断', description: 'AI辅助医疗诊断系统', icon: Stethoscope, isHot: true },
      { title: '健康管理', description: '个人健康数据跟踪', icon: HeartPulse, isHot: true },
      { title: '数据分析', description: '医疗大数据智能分析', icon: Activity, isNew: true },
      { title: '远程医疗', description: '在线医疗咨询服务', icon: Video },
      { title: '药物研发', description: 'AI加速新药筛选流程', icon: Microscope },
      { title: '病历结构化', description: '自动提取电子病历信息', icon: FileText },
      { title: '影像分析', description: 'CT/MRI影像智能阅片', icon: ImagePlus },
      { title: '随访管理', description: '智能语音机器人自动随访', icon: Phone },
      { title: '导诊分诊', description: '根据症状智能推荐科室', icon: Layout }
    ]
  }
};

// 优化：提取产品卡片为独立组件，使用memo避免重复渲染
const ProductCard = memo(({ product, index }: { product: SubProduct; index: number }) => (
  <div
    className="group p-3 lg:p-3.5 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-50/80 dark:hover:bg-gray-700/80 transition-colors duration-200 flex flex-col gap-2 cursor-pointer active:scale-[0.98] h-full border border-gray-200/60 dark:border-gray-700/40"
  >
    {/* 图标和标题行 */}
    <div className="flex items-start gap-2.5 w-full">
      {/* 左侧图标 */}
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-100/80 dark:bg-blue-950/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors duration-200">
        <product.icon className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-200" />
      </div>

      {/* 标题和标签 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-sm lg:text-base font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
            {product.title}
          </h3>
          {product.isHot && (
            <span className="flex-shrink-0 px-1.5 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded">
              HOT
            </span>
          )}
          {product.isNew && (
            <span className="flex-shrink-0 px-1.5 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded">
              NEW
            </span>
          )}
        </div>
      </div>
    </div>

    {/* 描述 */}
    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
      {product.description}
    </p>

    {/* 底部操作提示 */}
    <div className="hidden lg:flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
      <span>立即使用</span>
      <ArrowRight className="w-3 h-3" />
    </div>
  </div>
));

ProductCard.displayName = 'ProductCard';

const HotProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScenarioType>('ecommerce');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentConfig = useMemo(() => SCENARIO_CONFIG[activeTab], [activeTab]);

  // 自动滚动选中的 Tab 到视图中间 (针对移动端)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
      if (activeBtn) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const scrollLeft = btnLeft - containerWidth / 2 + btnWidth / 2;

        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeTab]);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/30 dark:from-gray-900 dark:to-gray-950" id="hot-products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
            热门产品与服务
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            为您提供全方位的技术解决方案,助力业务快速增长
          </p>
        </div>
  
        <div className="flex flex-col lg:flex-row lg:bg-gray-50/80 dark:lg:bg-gray-900/80 lg:backdrop-blur-md lg:rounded-xl lg:shadow-lg lg:shadow-gray-200/50 dark:lg:shadow-black/30 lg:overflow-hidden lg:border lg:border-gray-200/60 dark:lg:border-gray-800/60">
          {/* 移动端顶部导航 - 极简设计 */}
          <div
            ref={scrollContainerRef}
            className="lg:hidden overflow-x-auto scrollbar-hide sticky top-0 z-20 -mx-4 sm:-mx-6 px-4 sm:px-6 pb-3 pt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
          >
            <div className="flex gap-2 min-w-max">
              {(Object.keys(SCENARIO_CONFIG) as ScenarioType[]).map((key) => {
                const config = SCENARIO_CONFIG[key];
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    data-tab={key}
                    onClick={() => setActiveTab(key)}
                    className={cn(
                      "flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap active:scale-95",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-slate-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                    )}
                  >
                    <config.icon className={cn("w-3.5 h-3.5", isActive ? "text-white" : "text-gray-400 dark:text-gray-500")} />
                    <span>{config.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 桌面端左侧导航 */}
          <div className="hidden lg:flex lg:flex-col lg:w-1/4 xl:w-1/5 bg-gray-50/60 dark:bg-gray-800/60 backdrop-blur-md flex-shrink-0 py-5 relative">
            <div className="flex flex-col justify-between h-full px-4 xl:px-5 relative z-10">
              {(Object.keys(SCENARIO_CONFIG) as ScenarioType[]).map((key) => {
                const config = SCENARIO_CONFIG[key];
                const Icon = config.icon;
                const isActive = activeTab === key;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors duration-200 w-full text-left relative backdrop-blur-sm",
                      isActive
                        ? "bg-white/90 dark:bg-gray-700/90 text-blue-600 dark:text-blue-400 shadow-sm"
                        : "text-gray-700 dark:text-gray-400 hover:bg-white/60 dark:hover:bg-gray-750/60 hover:text-gray-900 dark:hover:text-gray-200"
                    )}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-blue-600 dark:bg-blue-500 rounded-r-full" />
                    )}
                    <Icon className={cn("w-4 h-4", isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-500")} />
                    <span className="relative z-10">{config.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="flex-1 p-4 sm:p-5 lg:p-5 lg:bg-white/70 dark:lg:bg-gray-900/70 lg:backdrop-blur-md lg:border-l lg:border-gray-200/60 dark:lg:border-gray-800/60">
            <div
              key={activeTab}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {currentConfig.products.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;

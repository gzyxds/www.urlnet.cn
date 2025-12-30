"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
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
    <section className="py-12 lg:py-20 bg-gray-50/50" id="hot-products">
      <div className="container mx-auto px-4 sm:px-6">
        {/* 标题区域 */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            热门产品与服务
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            为您提供全方位的技术解决方案，助力业务快速增长
          </p>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[480px] lg:bg-white lg:rounded-2xl lg:shadow-xl lg:shadow-gray-100/50 lg:border lg:border-gray-100 lg:overflow-hidden">
          {/* 移动端/平板端顶部导航 - 优化触控体验 */}
          <div
            ref={scrollContainerRef}
            className="lg:hidden overflow-x-auto scrollbar-hide sticky top-0 z-20 -mx-4 px-4 pb-4 pt-2 bg-gray-50/95 backdrop-blur-sm"
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
                      "flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 border whitespace-nowrap active:scale-95",
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                        : "bg-white text-gray-600 border-gray-200 shadow-sm"
                    )}
                  >
                    <config.icon className={cn("w-3.5 h-3.5", isActive ? "text-white" : "text-gray-400")} />
                    <span>{config.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 桌面端左侧侧边栏导航 */}
          <div className="hidden lg:block lg:w-1/4 xl:w-1/5 bg-gray-50/30 flex-shrink-0 border-r border-gray-100 py-8 relative">
            <div className="flex flex-col gap-2 px-4 xl:px-6 relative z-10">
              {(Object.keys(SCENARIO_CONFIG) as ScenarioType[]).map((key) => {
                const config = SCENARIO_CONFIG[key];
                const Icon = config.icon;
                const isActive = activeTab === key;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={cn(
                      "flex items-center gap-4 px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 w-full text-left relative overflow-hidden group",
                      isActive
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-black/5"
                        : "text-gray-600 hover:bg-white/60 hover:text-gray-900"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon className={cn("w-5 h-5", isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600")} />
                    <span className="relative z-10">{config.title}</span>
                  </button>
                );
              })}
            </div>

            {/* 装饰性背景图 */}
            <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 opacity-40 pointer-events-none z-0">
              <img src="/images/scenarios/sidebar-bg.svg" alt="" className="w-full" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="flex-1 lg:p-8 lg:bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6"
              >
                {currentConfig.products.map((product, index) => (
                  <div
                    key={index}
                    className="group p-3 lg:p-4 rounded-xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-3 h-full cursor-pointer active:scale-[0.98]"
                  >
                    {/* 左侧图标区域 */}
                    <div className="flex-shrink-0 w-10 h-10 lg:w-10 lg:h-10 rounded-lg bg-blue-50/50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 sm:mt-0.5">
                      <product.icon className="w-5 h-5 lg:w-5 lg:h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* 右侧内容区域 */}
                    <div className="flex-1 min-w-0 text-center sm:text-left w-full">
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1.5 sm:mb-1">
                        <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate max-w-[80%] sm:max-w-none">
                          {product.title}
                        </h3>
                        {product.isHot && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded flex items-center justify-center shadow-sm scale-90 sm:scale-100">
                            HOT
                          </span>
                        )}
                        {product.isNew && (
                          <span className="flex-shrink-0 px-1.5 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded flex items-center justify-center shadow-sm scale-90 sm:scale-100">
                            NEW
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 sm:line-clamp-2 mb-0 lg:mb-2 h-auto lg:h-8">
                        {product.description}
                      </p>

                      <div className="hidden lg:flex items-center gap-1 text-[11px] font-medium text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <span>立即使用</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;

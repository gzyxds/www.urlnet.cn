"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Palette,
  User,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Zap,
  Share2,
  Database,
  MessageSquare,
  Layers,
  Copyright,
  Globe,
  FileCheck,
  LucideIcon
} from "lucide-react";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

// --- Types ---

interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
  badge?: string;
}

interface ScenarioData {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
  description: string;
  gradient: string;
  features: Feature[];
}

// --- Data ---

const SCENARIOS: ScenarioData[] = [
  {
    id: "ecommerce",
    title: "企业知识库",
    icon: BookOpen,
    image: "/product/work.svg",
    description: "深度理解和运用企业数据资产。主动处理分析和执行数据任务，转化为可行动的洞见。",
    gradient: "from-blue-50/80 to-indigo-50/80",
    features: [
      {
        title: "智能问答助手",
        desc: "基于大模型构建下一代搜索问答系统，具备语义理解、多模态检索能力。",
        badge: "NEW",
        icon: MessageSquare
      },
      {
        title: "知识推荐引擎",
        desc: "基于工作场景和用户画像，主动推送相关文档和经验案例，实现知识找人。",
        icon: Zap
      },
      {
        title: "协作共享平台",
        desc: "支持团队多人实时协作编辑，沉淀项目经验，促进企业内部知识流动。",
        icon: Share2
      },
      {
        title: "企业级安全",
        desc: "提供私有化部署方案，细粒度的权限控制，确保企业核心数据资产安全。",
        icon: ShieldCheck
      }
    ]
  },
  {
    id: "media",
    title: "聊天绘画",
    icon: Palette,
    image: "/product/ai.svg",
    description: "AI驱动的智能对话与艺术创作平台，激发无限创意，大幅提升设计与内容生产效率。",
    gradient: "from-purple-50/80 to-pink-50/80",
    features: [
      {
        title: "自然语言创作",
        desc: "无需专业指令，通过日常对话即可生成高质量的艺术作品和设计素材。",
        badge: "HOT",
        icon: Sparkles
      },
      {
        title: "多风格模型",
        desc: "内置二次元、写实、油画等多种风格模型，满足不同场景的创作需求。",
        icon: Layers
      },
      {
        title: "实时交互调整",
        desc: "支持对生成结果进行局部重绘、扩图和细节调整，实现精准的创意把控。",
        icon: Palette
      },
      {
        title: "版权保护机制",
        desc: "生成内容确权存证，提供商业使用授权，保护创作者的知识产权。",
        icon: Copyright
      }
    ]
  },
  {
    id: "education",
    title: "数字分身",
    icon: User,
    image: "/product/saas.svg",
    description: "创建高度逼真的AI数字化身，打破时空限制，提供7x24小时的智能化交互服务。",
    gradient: "from-emerald-50/80 to-teal-50/80",
    features: [
      {
        title: "高保真克隆",
        desc: "1:1 还原真人外貌、表情和动作习惯，达到肉眼难辨的逼真效果。",
        badge: "NEW",
        icon: User
      },
      {
        title: "声音复刻",
        desc: "只需少量音频样本，即可克隆目标声音，支持多语种跨语言合成。",
        icon: Database
      },
      {
        title: "智能交互大脑",
        desc: "接入大语言模型，赋予数字人逻辑思维和情感表达能力，实现自然对话。",
        icon: MessageSquare
      },
      {
        title: "多平台分发",
        desc: "支持一键发布至抖音、快手、B站等主流媒体平台，覆盖全网受众。",
        icon: Globe
      }
    ]
  },
  {
    id: "translation",
    title: "论文创作",
    icon: Lightbulb,
    image: "/product/lw.svg",
    description: "全流程AI写作辅助工具，从选题策划到内容润色，让学术创作更高效、更规范。",
    gradient: "from-orange-50/80 to-amber-50/80",
    features: [
      {
        title: "智能大纲生成",
        desc: "根据研究主题自动生成逻辑严密的论文大纲，提供清晰的写作思路。",
        icon: Layers
      },
      {
        title: "多领域适配",
        desc: "覆盖理工、社科、经管等多个学科领域，针对性优化专业术语和格式。",
        icon: Database
      },
      {
        title: "深度润色优化",
        desc: "提供学术化的语言润色、句式重组和逻辑优化建议，提升文章质量。",
        icon: Sparkles
      },
      {
        title: "查重降重辅助",
        desc: "集成的查重预检功能，智能识别重复内容并提供改写建议，降低重复率。",
        badge: "HOT",
        icon: FileCheck
      }
    ]
  }
];

// --- Sub-components ---

/**
 * 顶部导航标签组件
 */
const TabNavigation = ({
  scenarios,
  activeId,
  onSelect
}: {
  scenarios: ScenarioData[];
  activeId: string;
  onSelect: (id: string) => void;
}) => (
  <div className="flex justify-center mb-8 lg:mb-12">
    <div className="inline-flex items-center p-1 bg-white rounded-full border border-gray-100 shadow-sm gap-1.5 overflow-x-auto max-w-full scrollbar-hide">
      {scenarios.map((scenario) => {
        const IconComponent = scenario.icon;
        const isActive = activeId === scenario.id;
        return (
          <button
            key={scenario.id}
            onClick={() => onSelect(scenario.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
            aria-selected={isActive}
            role="tab"
          >
            <IconComponent className={cn("w-3.5 h-3.5", isActive ? "text-white" : "text-gray-500")} />
            {scenario.title}
          </button>
        );
      })}
    </div>
  </div>
);

/**
 * 左侧主展示卡片组件
 * 包含：标题、描述、主图、CTA按钮
 */
const HeroCard = ({ scenario }: { scenario: ScenarioData }) => (
  <div className="lg:col-span-4 h-full">
    <div className={cn(
      "relative h-full min-h-[420px] lg:min-h-[500px] rounded-2xl overflow-hidden p-6 lg:p-8 border border-gray-200/60 shadow-xl shadow-gray-100/50 bg-gradient-to-br transition-colors duration-500",
      scenario.gradient
    )}>
      {/* 文本内容区域 */}
      <div className="relative z-20">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          {scenario.title}
        </h3>
        <div className="w-10 h-1 bg-blue-600 mb-4 rounded-full" />
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 line-clamp-4">
          {scenario.description}
        </p>
      </div>

      {/* 图片区域 - 增加高度占比以减少间距 */}
      <div className="absolute bottom-0 right-0 w-full h-[60%] pointer-events-none z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent z-20" />
          <img
            src={scenario.image}
            alt={scenario.title}
            className="w-full h-full object-contain object-bottom transform translate-y-4 hover:translate-y-2 transition-transform duration-700 ease-out"
          />
      </div>
    </div>
  </div>
);

/**
 * 右侧功能网格项组件
 */
const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index + 0.2 }} // 错峰动画
    className="group relative bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300 flex flex-col justify-between h-auto min-h-[220px]"
  >
    <div>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
          <feature.icon className="w-5 h-5" />
        </div>
        {feature.badge && (
          <span className={cn(
            "px-2 py-0.5 text-[10px] font-bold rounded-full text-white shadow-sm tracking-wide",
            feature.badge === "NEW" ? "bg-gradient-to-r from-red-500 to-pink-500" : "bg-gradient-to-r from-orange-500 to-amber-500"
          )}>
            {feature.badge}
          </span>
        )}
      </div>

      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {feature.title}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
        {feature.desc}
      </p>
    </div>

    <div className="mt-4 flex items-center">
      <Link
        to="/products"
        className="inline-flex items-center text-sm font-medium text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      >
        了解详情
        <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </Link>
    </div>
  </motion.div>
);

// --- Main Component ---

/**
 * 应用场景组件 (Scenario Section)
 *
 * 设计规范遵循：
 * 1. 视觉协调：统一使用 Tailwind 间距 (p-6, p-8, gap-6) 和圆角 (rounded-2xl)
 * 2. 响应式：Mobile (stack) -> Tablet (2 cols grid) -> Desktop (Hero + Grid)
 * 3. 交互：Framer Motion 动画，Hover 状态反馈
 * 4. 代码：分离数据与组件，类型安全
 */
const Scenario = () => {
  const [activeScenarioId, setActiveScenarioId] = useState("ecommerce");
  const currentScenario = SCENARIOS.find(s => s.id === activeScenarioId) || SCENARIOS[0];

  return (
    <section className="py-16 lg:py-24 bg-gray-50/30 relative overflow-hidden" id="scenarios">
      {/* 装饰性背景光晕 - 优化了位置和模糊度 */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <TabNavigation
          scenarios={SCENARIOS}
          activeId={activeScenarioId}
          onSelect={setActiveScenarioId}
        />

        {/* 主体内容区域：Bento Grid 布局 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenarioId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch"
          >
            {/* 左侧 Hero Card */}
            <HeroCard scenario={currentScenario} />

            {/* 右侧 Feature Grid */}
            <div className="lg:col-span-8 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                {currentScenario.features.map((feature, index) => (
                  <FeatureCard key={index} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Scenario;

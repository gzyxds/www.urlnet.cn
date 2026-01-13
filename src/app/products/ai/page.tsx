"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Users,
  Bot,
  Play,
  Video,
  PenTool,
  Shield,
  Zap,
  Tv,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageMetadata } from "@/hooks/use-page-metadata";
import { cn } from "@/lib/utils";
import ContactSection from "@/components/ContactSection";
import OpenScenarioSection from "@/components/OpenScenarioSection";

// ==========================================
// 类型定义 (Type Definitions)
// ==========================================

interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface ScenarioItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface DemoAccount {
  name: string;
  url: string;
  account: string;
  password: string;
}

interface CoreFeatureGridItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

// ==========================================
// 常量数据配置 (Constant Data Configuration)
// ==========================================

/** 页面元数据配置 */
const PAGE_METADATA = {
  title: "艺创AI_全能AI知识库系统_全能AI知识库系统源码_AIGC系统",
  description:
    "艺创AI全能AI知识库系统是一款基于PHP和Java双语言开发的AI知识库系统,支持私有化部署,提供知识库训练、智能问答、数字人等多种功能,是企业打造数字化转型的理想选择",
  keywords:
    "全能AI知识库系统,全能AI知识库系统源码,全能AI知识库系统源码,AI知识库系统,AI知识库系统源码",
};

/** 统计数据 */
const STATS_DATA: StatItem[] = [
  { value: "99%", label: "准确率", icon: Zap },
  { value: "24/7", label: "全天候服务", icon: Bot },
  { value: "10x", label: "效率提升", icon: Shield },
];

/** 产品优势数据 */
const ADVANTAGES_DATA: FeatureItem[] = [
  {
    icon: Users,
    title: "企业智能客服",
    subtitle: "快速部署",
    description:
      "企业可以上传产品资料、FAQ手册等信息，完成训练后，对外发布智能客服聊天窗口。",
    features: ["快速训练专属客服", "灵活集成部署", "24小时在线服务"],
  },
  {
    icon: Bot,
    title: "企业知识库",
    subtitle: "专属AI训练",
    description:
      "企业可以上传产品文档、合同内容等信息，完成训练后，仅限内部员工访问使用。",
    features: ["多类型文档支持", "内部安全访问", "高效信息检索"],
  },
  {
    icon: PenTool,
    title: "专家顾问助理",
    subtitle: "MOS4.0",
    description:
      "基于先进AI模型，提供专业的顾问咨询服务，快速响应各类专业咨询需求。",
    features: ["领先研究模型", "98.5%准确率", "500ms响应时间"],
  },
  {
    icon: Tv,
    title: "数据训练",
    subtitle: "灵活配置",
    description:
      "支持多种类型知识库训练，可灵活配置访问权限，实现知识共享与管理。",
    features: ["多类型知识库", "灵活权限配置", "自动优化内容"],
  },
];

/** 演示账号信息 */
const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    name: "演示前台",
    url: "https://www.cnai.art",
    account: "自行注册",
    password: "自行注册",
  },
  {
    name: "体验后台",
    url: "https://www.cnai.art/admin",
    account: "联系客服",
    password: "联系客服",
  },
  {
    name: "移动端",
    url: "https://www.cnai.art/mobile",
    account: "自行注册",
    password: "自行注册",
  },
];

/** 应用场景数据 */
const SCENARIOS_DATA: ScenarioItem[] = [
  {
    icon: Users,
    title: "数据训练",
    description:
      "面向文化传播、影视内容等多个行业，帮助打造数据训练，赋能品牌营销",
    features: ["品牌代言形象", "虚拟角色创作", "社交互动体验"],
  },
  {
    icon: Bot,
    title: "知识库应用",
    description: "为企业提供智能知识库应用解决方案，提高工作效率，降低人力成本",
    features: ["智能客服系统", "销售助手工具", "培训讲师服务"],
  },
  {
    icon: PenTool,
    title: "内容创作",
    description: "为媒体、自媒体、营销团队提供智能内容创作解决方案",
    features: ["视频脚本生成", "营销文案创作", "多语言翻译"],
  },
  {
    icon: Tv,
    title: "虚拟直播",
    description: "为直播行业提供虚拟主播解决方案，降低直播成本，提高效率",
    features: ["电商直播带货", "新闻播报服务", "活动主持互动"],
  },
];

// ==========================================
// 子组件 (Sub-components)
// ==========================================

/**
 * 统计卡片组件
 * 用于展示关键数据指标
 */
function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="text-left group cursor-default">
      <div className="flex items-center justify-start gap-2 mb-2 text-gray-400 group-hover:text-indigo-600 transition-colors">
        <stat.icon className="w-4 h-4" />
        <span className="text-xs font-semibold tracking-wide uppercase">
          {stat.label}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900 tracking-tight">
        {stat.value}
      </div>
    </div>
  );
}

/**
 * 优势卡片组件
 * 展示产品的核心优势点
 */
function AdvantageCard({
  item,
  index,
  className,
  variant = "default",
}: {
  item: FeatureItem;
  index: number;
  className?: string;
  variant?: "default" | "wide";
}) {
  const isWide = variant === "wide";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-200 hover:border-blue-500/20 flex flex-col justify-between h-full",
        className
      )}
    >
      {/* 悬停时的光晕背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

      <div
        className={cn(
          "relative z-10",
          isWide && "md:flex md:items-center md:gap-12 md:justify-between h-full"
        )}
      >
        {/* 左侧内容区域 */}
        <div className={cn(isWide && "md:flex-1")}>
          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <item.icon className="w-7 h-7" />
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <span className="inline-block mt-1 text-xs font-medium text-blue-600/80 bg-blue-50 px-2 py-0.5 rounded-full">
              {item.subtitle}
            </span>
          </div>

          <p
            className={cn(
              "text-gray-500 text-sm leading-relaxed line-clamp-3",
              !isWide && "mb-6 min-h-[3rem]"
            )}
          >
            {item.description}
          </p>
        </div>

        {/* 分割线 (仅 Wide 模式) */}
        {isWide && (
          <div className="hidden md:block w-px h-32 bg-gray-200 mx-auto" />
        )}

        {/* 右侧特性列表 */}
        <ul
          className={cn(
            "space-y-3",
            !isWide && "mt-auto",
            isWide &&
              "mt-6 md:mt-0 md:w-auto md:shrink-0 md:min-w-[200px] grid grid-cols-1 gap-y-3"
          )}
        >
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600">
              <div className="mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/**
 * 演示账号行组件
 * 展示单个演示账号的信息和访问按钮
 */
function DemoAccountRow({ account }: { account: DemoAccount }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50/80 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-300">
      <div className="mb-2 sm:mb-0">
        <p className="text-sm font-semibold text-gray-900">{account.name}</p>
        <p className="text-xs text-blue-600 font-medium">{account.url}</p>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">账号</span>
          <span className="text-xs font-semibold text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200">
            {account.account}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">密码</span>
          <span className="text-xs font-semibold text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200">
            {account.password}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 rounded-md font-medium"
          onClick={() => window.open(account.url, "_blank")}
        >
          访问
        </Button>
      </div>
    </div>
  );
}

/**
 * 场景卡片组件
 * 展示应用场景及其特性
 */
function ScenarioCard({ item }: { item: ScenarioItem }) {
  return (
    <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-slate-200/50 transition-all duration-500 group hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden">
      {/* 悬停渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-indigo-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:via-white/50 group-hover:to-indigo-50/50 transition-all duration-500" />

      <div className="relative z-10">
        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
          <item.icon className="h-6 w-6 text-slate-800 group-hover:text-white transition-colors duration-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {item.description}
        </p>
        <div className="space-y-3 mb-6">
          {item.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-slate-700">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
              {feature}
            </div>
          ))}
        </div>
        <Button className="w-full bg-white text-gray-900 border border-gray-200 rounded-xl py-2.5 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
          了解更多
        </Button>
      </div>
    </div>
  );
}

/**
 * 功能特性网格项组件
 * 用于核心功能区域的小特性展示
 */
function FeatureGridItem({ item }: { item: CoreFeatureGridItem }) {
  return (
    <div className="py-2 group/item transition-all duration-300">
      <div className="flex items-center mb-1.5">
        <div className="w-5 h-5 flex items-center justify-center mr-2.5">
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
        </div>
        <span className="font-semibold text-gray-900 text-sm tracking-tight">
          {item.title}
        </span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed pl-7">
        {item.description}
      </p>
    </div>
  );
}

/**
 * 核心功能区块组件
 * 包含左右布局的图文展示
 */
interface FeatureSectionProps {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "right"; // left: 图片在左，文字在右; right: 图片在右，文字在左
  children: React.ReactNode; // 特性列表或网格
  media: React.ReactNode; // 视频或图片
}

function FeatureSection({
  badge,
  title,
  description,
  align = "right",
  children,
  media,
}: FeatureSectionProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0">
      {/* 文本区域 */}
      <div className={cn("space-y-8", align === "left" ? "lg:order-2" : "")}>
        <div>
          <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 text-xs font-medium">{badge}</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        </div>

        {/* 特性内容（列表或网格） */}
        {children}

        {/* 按钮组 */}
        <div className="flex space-x-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-medium rounded-lg shadow-lg flex items-center"
            onClick={() => (window.location.href = "/demo")}
          >
            <Play className="w-4 h-4 mr-2" />
            立即体验
          </Button>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 h-auto text-base font-medium rounded-lg flex items-center"
            onClick={() =>
              window.open(
                "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20",
                "_blank"
              )
            }
          >
            <Check className="w-4 h-4 mr-2" />
            购买授权
          </Button>
        </div>
      </div>

      {/* 媒体区域 */}
      <div className={cn("relative", align === "left" ? "lg:order-1" : "")}>
        {media}
      </div>
    </div>
  );
};

// ==========================================
// 主页面组件 (Main Component)
// ==========================================

/**
 * 接入流程步骤配置
 */
const PROCESS_STEPS = [
  {
    id: "01",
    title: "需求沟通",
    desc: "专业顾问一对一沟通，深度解析业务痛点，量身定制AI解决方案。",
  },
  {
    id: "02",
    title: "方案部署",
    desc: "支持私有化/SaaS多种部署方式，自动化脚本一键安装，最快1小时交付。",
  },
  {
    id: "03",
    title: "配置站点",
    desc: "参考文档设置站点信息对接好数据接口。",
  },
  {
    id: "04",
    title: "上线运营",
    desc: "全渠道接入上线，提供7×24小时技术保障与运营指导服务。",
  },
];

function AiPage() {
  // 设置页面元数据
  usePageMetadata(PAGE_METADATA);

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅区域 */}
      <div className="relative isolate overflow-hidden bg-white">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[linear-gradient(to_bottom,white,transparent)] stroke-gray-200/30"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={32}
              height={32}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 32V.5H32" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40">
          <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset">
                  最新发布
                </span>
                <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                  <span>🔥增加Sora视频生成应用</span>
                  <ChevronRight className="size-5 text-gray-400" />
                </span>
              </div>
            </div>

            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
              重塑企业级全能AI
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              融合 LLM
              大语言模型与数字人技术，为企业打造 24/7
              在线的超级智能员工，让服务更高效，让知识更有价值。
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <Button
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 h-auto"
                onClick={() => (window.location.href = "/demo")}
              >
                免费体验 Demo
              </Button>
              <Button
                variant="outline"
                className="rounded-xl border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 h-auto"
                onClick={() => {
                  const event = new CustomEvent("showQRCodeModal");
                  window.dispatchEvent(event);
                }}
              >
                联系技术顾问 <span aria-hidden="true">→</span>
              </Button>
            </div>

            {/* 数据指标 */}
            <div className="mt-10 pt-10 border-t border-gray-200 grid grid-cols-3 gap-8 w-full">
              {STATS_DATA.map((stat, i) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="/images/scenarios/aizsk.png"
                  alt="AI知识库系统界面"
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 产品优势展示区域 */}
      <section className="py-24 bg-gray-50/50 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              产品优势
            </h2>
            <div className="w-20 h-1.5 bg-gradient mx-auto rounded-full mb-6 opacity-80"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              多维度产品优势，助力企业数字化升级
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVANTAGES_DATA.map((item, index) => {
              const isWide = index === 0 || index === 3;
              return (
                <AdvantageCard
                  key={index}
                  item={item}
                  index={index}
                  variant={isWide ? "wide" : "default"}
                  className={isWide ? "md:col-span-2" : "md:col-span-1"}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 演示中心区域 */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-100 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 演示信息左侧内容 */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 bg-blue-600 mr-2"></span>
                在线演示
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                艺创AI-全能知识库PHP&Java
                <br />
                演示中心
              </h2>

              <p className="text-gray-600 mb-8 text-lg">
                通过我们的在线演示系统，您可以亲身体验艺创AI-全能知识库PHP&Java的强大功能和直观界面，无需安装，即刻体验。
              </p>

              <div className="bg-white shadow-lg shadow-gray-200/50 p-6 mb-8 rounded-2xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    演示账号信息
                  </h3>
                </div>

                <div className="space-y-3">
                  {DEMO_ACCOUNTS.map((account, index) => (
                    <DemoAccountRow key={index} account={account} />
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 shadow-lg shadow-blue-600/20">
                  申请专属演示
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg px-6"
                >
                  联系客服
                </Button>
              </div>
            </div>

            {/* 演示界面右侧展示 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* 演示界面主图 */}
                <div className="bg-white p-6 shadow-2xl shadow-gray-200/50 rounded-2xl border border-gray-100/50">
                  <img
                    src="/product/work.svg"
                    alt="AI数字人演示界面"
                    className="w-full rounded-lg"
                  />

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        艺创AI-全能知识库PHP&Java
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        一站式管理您的所有知识库资产
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                  </div>
                </div>

                {/* 移动端二维码 */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-xl shadow-gray-200/50 rounded-2xl border border-gray-100">
                  <img
                    src="/images/qrcode.png"
                    alt="演示二维码"
                    className="w-24 h-24 bg-gray-50 rounded-xl"
                  />
                  <p className="text-xs text-center mt-3 font-medium text-gray-600">
                    扫码体验移动端
                  </p>
                </div>

                {/* 在线演示装饰元素 */}
                <div className="absolute -top-6 -left-6 bg-blue-600 p-4 shadow-xl shadow-blue-600/20 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-xl backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">在线演示</p>
                      <p className="text-xs text-blue-100">实时体验</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景展示区域 */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200/50 text-slate-700 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              应用场景
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
              多元化应用场景
            </h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
              覆盖多个行业领域，提供专业的AI解决方案，助力企业数字化转型升级
            </p>
          </div>

          {/* 场景卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {SCENARIOS_DATA.map((item, index) => (
              <ScenarioCard key={index} item={item} />
            ))}
          </div>

          {/* 全场景覆盖展示区域 */}
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl shadow-blue-900/5 border border-white/50 rounded-[2rem] relative overflow-hidden">
            {/* 内部装饰背景 */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-50/50 to-transparent rounded-full blur-3xl -z-10 opacity-60" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* 左侧内容 */}
              <div>
                <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 border border-blue-100">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                  全场景覆盖
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                  一站式AI解决方案
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    赋能业务增长
                  </span>
                </h3>
                <p className="text-slate-600 text-base mb-6 leading-relaxed max-w-lg">
                  从数据训练到内容创作，从智能客服到虚拟直播，我们提供完整的AI产品矩阵，
                  帮助企业在数字化转型中抢占先机，实现业务的快速增长和效率提升。
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      500<span className="text-blue-600 text-xl">+</span>
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      企业客户信赖
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      99.9<span className="text-blue-600 text-xl">%</span>
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      服务可用性
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02]">
                    立即体验
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-200 hover:border-blue-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300"
                  >
                    查看案例
                  </Button>
                </div>
              </div>

              {/* 右侧图片展示 */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200 border border-gray-100">
                  <img
                    src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/industry-application.be882574.png"
                    alt="AI应用场景展示"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>
                {/* 浮动装饰元素 */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100/50 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100/50 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能特色 - Bento Grid 布局 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              核心能力
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              全维度AI解决方案
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              提供从底层模型到上层应用的完整AI技术栈，满足企业智能化转型的所有需求。
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            {/* Item 1: AI大语言模型 (Span 3) */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white border border-gray-200 transition-shadow duration-300 group-hover:shadow-lg" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
                {/* 演示区域 */}
                <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
                  <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-gray-100 flex-1">
                        <p className="text-sm text-gray-800">
                          已接入GPT-4、Claude 3等多个大模型，请问需要什么帮助？
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-xs text-blue-600 font-medium">
                        Processing...
                      </span>
                    </div>
                  </div>
                </div>
                {/* 文本区域 */}
                <div className="p-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    AI大语言模型矩阵
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    支持GPT-4、ChatGLM、文心一言等主流大模型灵活切换。通过聚合接口，让企业以最低成本获得最强AI能力。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">
                      多模型聚合
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">
                      私有化部署
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2: AI数字人 (Span 3) */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white border border-gray-200 transition-shadow duration-300 group-hover:shadow-lg" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
                {/* 演示区域 */}
                <div className="h-80 bg-gradient-to-br from-purple-50 to-pink-50 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full p-1 shadow-xl mb-4">
                      <div className="w-full h-full bg-white rounded-full overflow-hidden flex items-center justify-center">
                        <Users className="w-12 h-12 text-purple-600" />
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-sm font-medium text-gray-900">
                        实时语音驱动中
                      </span>
                    </div>
                  </div>
                </div>
                {/* 文本区域 */}
                <div className="p-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    多模态AI数字人
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    融合语音合成(TTS)、语音识别(ASR)与唇形驱动技术，打造能够实时交互的虚拟数字员工，适用于客服、直播等场景。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md font-medium">
                      形象定制
                    </span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md font-medium">
                      实时交互
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3: 机器人管理 (Span 2) */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white border border-gray-200 transition-shadow duration-300 group-hover:shadow-lg" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="h-60 bg-gray-50 p-6 flex items-center justify-center">
                  {/* 模拟管理界面 */}
                  <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 space-y-2">
                    <div className="flex items-center gap-2 border-b border-gray-50 pb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-100 rounded w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pt-5 pb-3">
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    机器人管理
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    可视化的机器人配置后台，支持私有知识库绑定、角色设定及多维度数据分析。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                      可视化配置
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                      数据分析
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 4: 知识库训练 (Span 2) */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white border border-gray-200 transition-shadow duration-300 group-hover:shadow-lg" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="h-60 bg-blue-50 p-6 flex items-center justify-center">
                  <div className="w-full max-w-[200px] space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white p-2.5 rounded-lg shadow-sm border border-blue-100/50"
                      >
                        <div className="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <PenTool className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-1.5 bg-gray-200 rounded w-2/3"></div>
                          <div className="h-1.5 bg-gray-100 rounded w-1/3"></div>
                        </div>
                        {i === 1 && (
                          <div className="w-4 h-4 text-green-500">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pt-5 pb-3">
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    知识库训练
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    支持Word/PDF/Excel多格式文档导入，自动分段清洗，构建企业专属的"大脑"。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">
                      多格式支持
                    </span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium">
                      自动清洗
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 5: 全渠道集成 (Span 2) */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white border border-gray-200 transition-shadow duration-300 group-hover:shadow-lg" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="h-60 bg-indigo-50 p-6 flex items-center justify-center">
                  <div className="relative w-full max-w-[180px] h-[120px]">
                    {/* 中心节点 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg z-10">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    {/* 卫星节点 */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                      Web
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                      API
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                      WeChat
                    </div>
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                      App
                    </div>

                    {/* 连接线 */}
                    <div className="absolute inset-0 border-2 border-dashed border-indigo-200 rounded-full scale-75 opacity-50"></div>
                  </div>
                </div>
                <div className="px-6 pt-5 pb-3">
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    全渠道集成
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    提供标准API接口、网页JS嵌入代码及微信公众号授权，实现一次配置，全网分发。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md font-medium">
                      标准API
                    </span>
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs rounded-md font-medium">
                      快速接入
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品核心功能 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-700 text-sm font-medium">
                核心功能
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              产品核心功能
            </h2>
            <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              强大的AI技术能力，为您提供全方位的数字人解决方案
            </p>
          </div>

          {/* 1. AIGC专区 */}
          <FeatureSection
            badge="全部商品"
            title="AIGC专区"
            description="数字人、生图、写作、视频，AI助力企业提效。"
            align="right"
            media={
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                  <video
                    src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-writing.37942fd6.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                  >
                    <img
                      src="https://res.qiyukf.net/operation/0a99dec9aafbb4c7c36749bc9bad3400"
                      alt="数字人形象"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </video>
                </div>
                {/* 悬浮标签 */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">AIGC专区</p>
                      <p className="text-sm text-gray-500">
                        数字人、生图、写作、视频
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <ul className="list-disc pl-5 text-gray-600 text-base leading-relaxed space-y-1 mt-4">
              <li>
                <span className="font-medium text-gray-900">
                  海量数字人形象：
                </span>
                覆盖电商、直播、广告等领域，助力企业视频内容生产
              </li>
              <li>
                <span className="font-medium text-gray-900">极速定制：</span>
                短期极速定制虚拟人形象，企业级形象快速创建，帮助企业品牌快速传播
              </li>
            </ul>
          </FeatureSection>

          {/* 2. 营销获客 */}
          <FeatureSection
            badge="核心功能"
            title="营销获客"
            description="为短视频创作者及抖音经营者提供智能灵感挖掘、智能剧本创作、智能视频生成、智能客服回复等AI工具，增强曝光及品牌影响力，全面提升获客转化率。精准挖掘潜在客户，提供创意文案生成，提升营销效果。"
            align="left"
            media={
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/market-interaction.20054d0c.png"
                  alt="营销获客界面"
                  className="w-full rounded-2xl shadow-lg"
                />
                {/* 悬浮标签 */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">营销获客</p>
                      <p className="text-sm text-gray-500">提升营销获客效果</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "智能创作",
                  description: "灵感挖掘与剧本创作",
                  icon: Video,
                },
                {
                  title: "创意文案",
                  description: "智能生成营销文案",
                  icon: Video,
                },
                {
                  title: "获客转化",
                  description: "提升营销获客效果",
                  icon: Video,
                },
              ].map((item, idx) => (
                <FeatureGridItem key={idx} item={item} />
              ))}
            </div>
          </FeatureSection>

          {/* 3. 智能文案创作 */}
          <FeatureSection
            badge="爆款文案生成"
            title="智能文案创作"
            description="为内容创作者提供全网灵感洞察、智能文案生成服务，结合AI大语言模型和创意写作能力，一键生成爆款短视频剧本、直播话术和图文内容，让创作更轻松、更高效，助力打造爆款内容。"
            align="right"
            media={
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                  <video
                    src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-writing.37942fd6.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                  >
                    <img
                      src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/industry-application.be882574.png"
                      alt="AI数字人界面"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </video>
                </div>
                {/* 悬浮标签 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        爆款文案生成
                      </p>
                      <p className="text-sm text-gray-500">智能文案创作</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "短视频剧本",
                  description: "智能生成爆款视频文案和直播话术",
                  icon: Video,
                },
                {
                  title: "平台适配",
                  description: "小红书/抖音等平台风格文案生成",
                  icon: Video,
                },
                {
                  title: "灵感洞察",
                  description: "全网热点分析，智能创意推荐",
                  icon: Video,
                },
              ].map((item, idx) => (
                <FeatureGridItem key={idx} item={item} />
              ))}
            </div>
          </FeatureSection>

          {/* 4. 视频生成 */}
          <FeatureSection
            badge="视频生成"
            title="AI一键自动生成视频"
            description="从容应对内容创作和营销需求，助力商家和创作者提升视频生成的效率，更好的在公私域做好内容营销，助力GMV提升。"
            align="left"
            media={
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                  <video
                    src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-2xl shadow-lg"
                  >
                    <img
                      src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/industry-application.be882574.png"
                      alt="AI视频生成界面"
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </video>
                </div>
                {/* 悬浮标签 */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                      <Video className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">AI视频</p>
                      <p className="text-sm text-gray-500">
                        一键生成营销视频
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "一键生成",
                  description: "快速生成营销视频",
                  icon: Video,
                },
                {
                  title: "多场景适配",
                  description: "公私域内容营销场景",
                  icon: Play,
                },
                {
                  title: "效率提升",
                  description: "显著提升内容创作效率",
                  icon: PenTool,
                },
              ].map((item, idx) => (
                <FeatureGridItem key={idx} item={item} />
              ))}
            </div>
          </FeatureSection>



          {/* 接入流程 */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              {/* 标题区域 */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                  <span className="text-blue-600 text-xs font-medium">
                    快速部署
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  接入流程
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                  标准化服务流程，助您快速完成系统部署
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  onClick={() => window.open("https://v.cnai.art", "_blank")}
                >
                  立即接入
                </Button>
              </div>

              {/* 流程步骤 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {PROCESS_STEPS.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                  >
                    {/* 序号水印 */}
                    <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-100/50 select-none pointer-events-none font-mono">
                      {step.id}
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <span className="text-blue-600 font-bold text-lg group-hover:text-white transition-colors duration-300">
                          {step.id}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <div className="w-8 h-1 bg-gray-100 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors duration-300"></div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 准备好开启您的AI之旅了吗？ */}
          <div className="mt-24 py-8 container mx-auto px-4">
            <div className="bg-white rounded-3xl overflow-hidden relative border border-gray-200">
              {/* 装饰元素 */}
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="black"
                    fillOpacity="0.02"
                  />
                  <circle
                    cx="300"
                    cy="300"
                    r="150"
                    fill="black"
                    fillOpacity="0.02"
                  />
                  <circle
                    cx="250"
                    cy="150"
                    r="50"
                    fill="black"
                    fillOpacity="0.02"
                  />
                  <circle
                    cx="150"
                    cy="250"
                    r="30"
                    fill="black"
                    fillOpacity="0.02"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* 左侧内容 */}
                <div className="md:col-span-3 p-8 md:p-12 relative z-10">
                  <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      准备好开启您的
                      <span className="text-blue-600">AI产品</span>了吗？
                    </h3>
                    <p className="text-gray-600 mb-6 text-base">
                      基于Vue3和ThinkPHP技术栈开发,支持PC端和H5端。系统支持多种文档格式导入,完成AI训练后可进行智能问答。
                      提供网页窗口、API等多种接入方式,可快速对接第三方系统。适用于企业智能客服、智能文档、顾问助理等多种商用场景。
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">
                            高清还原
                          </h4>
                          <p className="text-gray-500 text-sm">
                            100%真实感官体验
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">
                            专业服务
                          </h4>
                          <p className="text-gray-500 text-sm">
                            7×24小时技术支持
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">
                            数据安全
                          </h4>
                          <p className="text-gray-500 text-sm">
                            企业级安全保障
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-medium">
                            持续更新
                          </h4>
                          <p className="text-gray-500 text-sm">
                            定期功能迭代升级
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
                        立即体验
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-transform hover:scale-105"
                      >
                        咨询价格
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 右侧功能卡片 */}
                <div className="md:col-span-2 relative hidden md:block">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full p-6 flex items-center">
                      <div className="bg-gray-50 w-full h-full p-4 shadow-lg">
                        <div className="grid grid-cols-2 gap-4 h-full">
                          {/* AI数字人 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">
                              AI知识库
                            </h4>
                            <p className="text-gray-500 text-sm text-center mt-1">
                              PHP/Java双版本支持
                            </p>
                          </div>

                          {/* 私有部署 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">
                              私有部署
                            </h4>
                            <p className="text-gray-500 text-sm text-center mt-1">
                              安全可控的私有化部署
                            </p>
                          </div>

                          {/* 专业团队 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">
                              专业团队
                            </h4>
                            <p className="text-gray-500 text-sm text-center mt-1">
                              一对一技术支持
                            </p>
                          </div>

                          {/* 开源方案 */}
                          <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-gray-900 font-medium text-lg">
                              开源方案
                            </h4>
                            <p className="text-gray-500 text-sm text-center mt-1">
                              灵活定制，售后无忧
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 开源场景 */}
      <OpenScenarioSection />

      <ContactSection />
    </div>
  );
};

export default AiPage;

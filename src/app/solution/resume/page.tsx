"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePageMetadata } from "@/hooks/use-page-metadata";
import { motion } from "framer-motion";
import {
  MessageCircle,
  FileStack,
  Pencil,
  Layers,
  Sparkles,
  Settings,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { UserReviews } from "@/components/UserReviews";
import FunctionBlueprint from "@/components/FunctionSection";


// --- 功能网格数据 ---
const features = [
  {
    title: '智能问答',
    desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。',
    icon: MessageCircle,
  },
  {
    title: '简历模板',
    desc: '提供数十款专业简历模板，涵盖不同行业和职位，满足多样化需求。',
    icon: FileStack,
  },
  {
    title: '在线编辑',
    desc: '支持简历在线编辑与下载，实时预览效果，随时调整优化内容。',
    icon: Pencil,
  },
  {
    title: '模块管理',
    desc: '自由添加与删除简历模块，灵活调整简历结构，突出个人亮点。',
    icon: Layers,
  },
  {
    title: 'AI分析',
    desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。',
    icon: Sparkles,
  },
  {
    title: '自定义配置',
    desc: '支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。',
    icon: Settings,
  },
];

// --- 功能详情数据结构 ---
interface DetailPoint {
  title: string;
  desc: string;
}

interface FeatureDetail {
  title: string;
  desc: string;
  image: string;
  points: DetailPoint[];
}

const featureDetailsData: FeatureDetail[] = [
  {
    title: '智能问答，快速生成',
    desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。基于AI研发的智能文案生成平台，帮助您节省时间的同时，显著提升简历质量与影响力。',
    image: '/solution/resume-1.png',
    points: [
      {
        title: '智能问答',
        desc: '用户基本信息智能问答，通过简单对话快速收集个人信息，生成完整简历。'
      },
      {
        title: '快速生成',
        desc: '通过简单的基本信息输入，即可快速生成结构完整的个人简历，大幅提升制作效率。'
      },
      {
        title: '内容优化',
        desc: '基于AI算法，自动优化简历内容，确保语言表达专业、逻辑清晰。'
      },
      {
        title: '多格式导出',
        desc: '支持多种格式导出，如 PDF、Word 等，满足不同投递需求。'
      }
    ]
  },
  {
    title: '简历模板，专业设计',
    desc: '提供数十款专业简历模板，涵盖不同行业和职位。支持在线编辑与下载，实时预览效果，随时调整优化内容。',
    image: '/solution/resume-2.png',
    points: [
      {
        title: '丰富模板库',
        desc: '提供数十款专业简历模板，涵盖不同行业和职位，满足多样化需求。'
      },
      {
        title: '在线编辑',
        desc: '支持简历在线编辑与下载，实时预览效果，随时调整优化内容。'
      },
      {
        title: '模块管理',
        desc: '自由添加与删除简历模块，灵活调整简历结构，突出个人亮点。'
      },
      {
        title: '自定义样式',
        desc: '支持自定义简历样式，包括字体、颜色、布局等，打造个性化简历。'
      }
    ]
  },
  {
    title: 'AI分析，深度优化',
    desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。',
    image: '/solution/resume-3.png',
    points: [
      {
        title: 'AI分析',
        desc: '简历内容AI分析，深度解析简历亮点，提供专业优化建议。'
      },
      {
        title: '优化建议',
        desc: '基于AI算法，提供针对性的优化建议，帮助提升简历质量和竞争力。'
      },
      {
        title: '自定义配置',
        desc: '支持自定义积分消耗和基础问题配置，灵活适配不同业务场景。'
      },
      {
        title: '数据统计',
        desc: '后台可查看生成记录和积分消耗情况，全面掌握使用情况。'
      }
    ]
  },
];

// --- 功能详情组件 ---
const FeatureDetailSection = ({ detail, index }: { detail: FeatureDetail; index: number }) => {
  const [activePoint, setActivePoint] = useState(0);

  return (
    <div className="group">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className={cn("flex flex-col gap-4", index % 2 === 1 ? "lg:order-last" : "")}>
          {/* 标签 */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5 fill-primary/20" />
            核心功能
          </div>

          {/* 标题 */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight mb-3">
            {detail.title}
          </h2>

          {/* 功能折叠列表 */}
          <div className="flex flex-col gap-1">
            {detail.points.map((point, pIndex) => (
              <div
                key={pIndex}
                className="rounded-xl flex gap-3 w-full group/item transition-all duration-300 pr-3 cursor-pointer"
                style={{
                  background: activePoint === pIndex
                    ? 'linear-gradient(to right, color-mix(in srgb, var(--primary), transparent 90%), transparent)'
                    : undefined
                }}
                onMouseEnter={() => setActivePoint(pIndex)}
              >
                <div className="flex flex-col pl-3 py-3 items-center gap-[2px]">
                  {/* Icon */}
                  <div className="relative w-4 h-4 mt-1 shrink-0 flex items-center justify-center text-primary">
                    {/* Active Icon */}
                    <div className={cn("absolute inset-0 transition-opacity duration-300", activePoint === pIndex ? "opacity-100" : "opacity-0")}>
                       <CheckCircle2 className="w-4 h-4 fill-primary/20" />
                    </div>
                    {/* Inactive Icon */}
                    <div className={cn("absolute inset-0 transition-opacity duration-300", activePoint !== pIndex ? "opacity-30 group-hover/item:opacity-50" : "opacity-0")}>
                       <div className="w-3 h-3 rounded-full border-2 border-current" />
                    </div>
                  </div>

                  {/* 连接线 */}
                  {pIndex < detail.points.length - 1 && (
                    <div className="w-[2px] grow bg-gray-100 dark:bg-gray-800 rounded-full relative overflow-hidden min-h-[16px]">
                      {/* 活动进度条 */}
                      <div
                        className={cn(
                          "absolute top-0 left-0 w-full bg-primary rounded-full transition-all duration-500 ease-out",
                          activePoint > pIndex ? "opacity-0" : ""
                        )}
                        style={{ height: activePoint === pIndex ? '100%' : '0%' }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className="grow cursor-default">
                  <div className="relative transition-all duration-300 ease-out">
                    <h3
                      className={cn(
                        "flex items-center gap-3 font-medium leading-normal p-3 pl-0 transition-colors duration-300 text-base",
                        activePoint === pIndex ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                      )}
                    >
                      {point.title}
                    </h3>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        activePoint === pIndex ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={cn(
                            "text-sm text-gray-500 dark:text-gray-400 leading-relaxed pt-0 pb-3 transition-all duration-300 delay-75",
                            activePoint === pIndex ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                          )}
                        >
                          {point.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 调用操作按钮 */}
          <div className="mt-2">
            <Button size="lg">
              立即体验
            </Button>
          </div>
        </div>

        {/* 右侧图片 */}
        <div className={cn("relative", index % 2 === 1 ? "lg:order-first" : "")}>
             <div className="relative p-2 rounded-3xl bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 max-w-xl mx-auto lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm bg-white/60 dark:bg-gray-800/60 aspect-[4/3] flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
                    <img
                        src={detail.image}
                        alt={detail.title}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            {/* 装饰背景 */}
            <div className={cn(
                "absolute -z-10 w-3/4 h-3/4 blur-[100px] opacity-30 rounded-full",
                index % 2 === 0 ? "top-0 right-0 bg-blue-400/30" : "bottom-0 left-0 bg-purple-400/30"
            )} />
        </div>
      </div>
    </div>
  );
};

export default function ResumePage() {
  usePageMetadata({
    title: 'AI简历 - 开源免费的智能简历生成与分析系统 | 必定AI-BuidAI',
    description: '必定AI-BuidAI AI简历致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。是基于AI研发的智能文案生成平台。通过简单的基本信息输入，即可快速生成结构完整的个人简历。并可基于已有内容进行深度解析，评估亮点并提供优化建议。基于开源技术构建，提供完整源码与私有化部署支持。',
    keywords: 'AI简历,智能简历,简历生成,简历分析,简历优化,简历模板,必定AI,BuidAI,简历制作工具,开源AI系统,私有化部署,简历源码'
  });

  const toDemo = () => {
    document.getElementById('__demo_container__')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-full font-sans text-gray-900 bg-white dark:bg-gray-900 dark:text-white overflow-hidden">

      {/* 首屏区域 */}
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* 背景特效 */}
        <div className="absolute inset-0 overflow-visible pointer-events-none select-none">
          {/* 顶部聚焦光束 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-normal dark:bg-primary/10"></div>
          {/* 科技网格背景 */}
          <div
            className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          ></div>
          {/* 抽象几何点缀 */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-2xl hidden md:block"
          />
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-tr from-purple-400/30 to-transparent rounded-full blur-xl hidden md:block"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-4"
            >
              <span className="px-1.5 py-0.5 rounded bg-primary text-[11px] font-bold text-white tracking-wider">NEW</span>
              <span className="text-xs text-gray-600 dark:text-gray-300">AI简历 2.0 发布</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              一键生成 <span className="text-primary">智能分析</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              致力于高效生成与深度优化您的个人简历，帮助您节省时间的同时，显著提升简历质量与影响力。<br className="hidden sm:block" />通过简单的基本信息输入，即可快速生成结构完整的个人简历。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.dispatchEvent(new CustomEvent('showQRCodeModal'))}
              >
                开始制作
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={toDemo}
              >
                查看示例
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 图片展示区域 */}
      <div id="__demo_container__" className="container mx-auto px-4 py-12 md:py-20">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-2 rounded-3xl bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-sm bg-white/60 dark:bg-gray-800/60 aspect-video flex items-center justify-center">
            <img
              src="/solution/resume.png"
              alt="AI简历展示"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* 功能网格 */}
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              全能型 AI 简历制作平台
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              集智能问答、简历模板、在线编辑、模块管理、AI分析于一体，为您提供一站式简历制作解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 功能详情 */}
      <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col gap-16 md:gap-24">
        {featureDetailsData.map((detail, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <FeatureDetailSection detail={detail} index={index} />
            </motion.div>
        ))}
      </div>

      {/* 用户评价 */}
      <UserReviews />

      {/* 功能详情 */}
      <FunctionBlueprint />

      {/* 行动号召区域 */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/30 relative overflow-hidden">
        {/* 背景图形 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-purple-400/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            准备好开始创作了吗？
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            立即加入 必定IA-BuidAI，体验前沿 AI 技术带来的无限可能。无需复杂的配置，快速构建您的AI应用。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="px-10 py-6 rounded-full text-lg"
              onClick={() => window.dispatchEvent(new CustomEvent('showQRCodeModal'))}
            >
              免费试用
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 rounded-full text-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => window.dispatchEvent(new CustomEvent('showQRCodeModal'))}
            >
              联系商务
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

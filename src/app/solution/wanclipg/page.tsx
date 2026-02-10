"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePageMetadata } from "@/hooks/use-page-metadata";
import { motion } from "framer-motion";
import {
  FileText,
  Image as ImageIcon,
  Sparkles,
  User,
  PenTool,
  Box,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { UserReviews } from "@/components/UserReviews";
import FunctionBlueprint from "@/components/FunctionSection";


// --- 功能网格数据 ---
const features = [
  {
    title: "角色模板视频生成",
    desc: "上传真人或虚拟角色作为模板，沉淀角色库，快速生成以该角色为主角的叙事视频。",
    icon: User,
  },
  {
    title: "首尾帧动画生成",
    desc: "设定起始与结束画面，系统自动补全过渡镜头，生成流畅连贯的动态视频。",
    icon: ImageIcon,
  },
  {
    title: "多镜头叙事编排",
    desc: "支持镜头切换与节奏控制，轻松实现角色驱动的多镜头故事表达。",
    icon: Sparkles,
  },
  {
    title: "分辨率与时长自定义",
    desc: "多种分辨率与时长可选，适配抖音、B站、小红书等多平台发布需求。",
    icon: Box,
  },
  {
    title: "专业运镜与光影模板",
    desc: "内置运镜轨迹、景别切换与光影效果，一键提升电影感与表现力。",
    icon: PenTool,
  },
  {
    title: "智能提示词优化扩写",
    desc: "自动优化输入描述，补全细节与风格关键词，提升生成质量与一致性。",
    icon: FileText,
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
    title: "角色主演：专属角色库快速开拍",
    desc: "上传真人或虚拟形象作为模板，沉淀到个人角色库，快速生成以该角色为核心的多镜头叙事视频。",
    image: "/solution/wanclipg-1.png",
    points: [
      {
        title: "角色模板一键复用",
        desc: "角色模板可长期保留并反复调用，持续产出统一风格的系列内容。",
      },
      {
        title: "角色一致性保障",
        desc: "自动保持角色特征与风格一致，减少返工与手动调整成本。",
      },
      {
        title: "多镜头叙事编排",
        desc: "支持镜头节奏与景别切换，让故事表达更具层次与电影感。",
      },
      {
        title: "创作者友好流程",
        desc: "无需专业门槛即可完成角色化叙事，让创作更轻量高效。",
      },
    ],
  },
  {
    title: "首尾帧生成：自动补全流畅过渡",
    desc: "设定起始与结束画面，系统自动生成过渡镜头与动作衔接，让故事呈现更自然。",
    image: "/solution/wanclipg-2.png",
    points: [
      {
        title: "起止画面驱动",
        desc: "用关键帧定义故事走向，轻松控制叙事节奏与情绪变化。",
      },
      {
        title: "过渡镜头自动补全",
        desc: "自动生成中间镜头，解决跳切问题，保证画面连贯性。",
      },
      {
        title: "运镜与光影模板",
        desc: "内置多种运镜轨迹与光影效果，一键提升画面质感。",
      },
      {
        title: "多场景适配",
        desc: "适用于角色故事、动漫片段、视觉概念短片等多类场景。",
      },
    ],
  },
  {
    title: "交付与管理：高效产出可用成片",
    desc: "提供分辨率、时长与风格控制，配合提示词优化，让输出更稳定、更可控。",
    image: "/solution/wanclipg-3.png",
    points: [
      {
        title: "分辨率与时长可选",
        desc: "多种输出规格可选，适配不同平台发布与传播需求。",
      },
      {
        title: "智能提示词优化",
        desc: "自动扩写与优化描述，补齐细节与风格指令，提升画面质量。",
      },
      {
        title: "稳定的成片一致性",
        desc: "减少风格漂移，保证系列视频在视觉与叙事上的连续性。",
      },
      {
        title: "面向企业的可复制流程",
        desc: "标准化创作流程，适用于团队协作与批量内容生产。",
      },
    ],
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

export default function BananaPage() {
  usePageMetadata({
    title: "AI漫剧 | 角色模板与多镜头叙事的 AI 视频生成系统",
    description:
      "AI漫剧是一款智能 AI 视频生成工具，面向创作者与动画爱好者，提供角色主演与首尾帧生成两大模式，实现角色化叙事与多镜头自动过渡。支持分辨率与时长自定义、运镜光影模板与提示词优化，适配企业级 AI 系统与 AI 源码场景。",
    keywords:
      "AI漫剧,漫剧,AI系统,AI源码,开源代码,AI视频生成,角色主演,首尾帧生成,多镜头叙事,运镜光影模板,提示词优化",
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
              <span className="text-xs text-gray-600 dark:text-gray-300">智言AI 漫剧 2.0 发布</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              打造您的 <span className="text-primary">专属 AI 漫剧</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              基于通义万相的wan2.6-r2v模型新一代 AI 视频生成平台,一键生成高质量视频。<br className="hidden sm:block" />预置模板开箱即用,保持角色一致性,开启智能视频创作新时代。
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
                开始构建
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={toDemo}
              >
                查看案例
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
              src="/solution/wanclipg.png"
              alt="漫剧功能展示"
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
              漫剧角色叙事与多镜头生成
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              以角色模板与首尾帧驱动的创作方式，快速产出可发布的动态叙事内容
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

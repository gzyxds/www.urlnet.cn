"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePageMetadata } from "@/hooks/use-page-metadata";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  ArrowLeftRight,
  Sparkles,
  ClipboardList,
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
    title: '无限量剧本创作',
    desc: '支持创建无限量剧本和小说,满足自媒体创作者、编剧、网络作家的多样化创作需求。',
    icon: FileText,
  },
  {
    title: '角色设定管理',
    desc: '完善的角色卡和故事设定功能,帮助用户构建丰富的人物形象和世界观。',
    icon: Users,
  },
  {
    title: '章节可视化拖拽',
    desc: '章节顺序可视化拖拽,灵活调整剧情结构,让创作流程更加直观高效。',
    icon: ArrowLeftRight,
  },
  {
    title: 'AI 扩写润色',
    desc: '正文支持选中文本进行扩写、润色、改写、续写,提升内容质量和创作效率。',
    icon: Sparkles,
  },
  {
    title: '大纲细纲记录',
    desc: '完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容。',
    icon: ClipboardList,
  },
  {
    title: '多种风格配置',
    desc: '后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。',
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
    title: '无限量剧本创作,构建完整故事世界',
    desc: '支持创建无限量剧本和小说,提供丰富的剧情模板、角色设定和冲突框架。帮助自媒体创作者、编剧、网络作家快速构思情节、对话和分镜,让短剧创作更高效、更系统。',
    image: '/solution/drama-3.png',
    points: [
      {
        title: '丰富剧情模板',
        desc: '内置多种剧情模板,涵盖搞笑段子、情感剧场、品牌微剧等类型,快速上手创作。'
      },
      {
        title: '角色设定管理',
        desc: '完善的角色卡功能,记录人物性格、外貌、背景等设定,保持角色一致性。'
      },
      {
        title: '冲突框架构建',
        desc: '提供专业的冲突框架模板,帮助用户构建引人入胜的故事冲突和情节转折。'
      },
      {
        title: '无限量创作空间',
        desc: '支持创建无限量剧本和小说,满足自媒体创作者、编剧、网络作家的多样化创作需求。'
      }
    ]
  },
  {
    title: '章节可视化拖拽与大纲管理,系统化创作流程',
    desc: '章节顺序可视化拖拽,灵活调整剧情结构。完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容,让创作流程更加直观高效。',
    image: '/solution/drama-3.png',
    points: [
      {
        title: '章节可视化拖拽',
        desc: '支持章节顺序可视化拖拽,灵活调整剧情结构,让创作流程更加直观高效。'
      },
      {
        title: '大纲细纲记录',
        desc: '完善的大纲和细纲记录功能,帮助用户系统化规划故事情节和章节内容。'
      },
      {
        title: '故事设定管理',
        desc: '支持世界观、背景设定等故事元素管理,构建完整的故事世界。'
      },
      {
        title: '灵活调整结构',
        desc: '随时调整章节顺序和内容结构,支持草稿编辑与复用,方便内容迭代与优化。'
      }
    ]
  },
  {
    title: 'AI 智能辅助写作,提升创作效率与质量',
    desc: '正文支持选中文本进行扩写、润色、改写、续写。后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。正文一键排版、复制全文,可调节字号大小。',
    image: '/solution/drama-3.png',
    points: [
      {
        title: 'AI 扩写续写',
        desc: '选中文本即可进行扩写和续写,AI 根据上下文智能生成连贯内容,提升创作效率。'
      },
      {
        title: 'AI 润色改写',
        desc: '支持对文本进行润色和改写,优化语言表达,提升内容质量和可读性。'
      },
      {
        title: '多种风格配置',
        desc: '后台可配置多种写作提示词风格,支持插入变量,每种风格可配置不同大模型。'
      },
      {
        title: '便捷编辑工具',
        desc: '正文一键排版、复制全文,可调节字号大小,提供舒适的写作和阅读体验。'
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

export default function DramaPage() {
  usePageMetadata({
    title: 'AI短剧小说创作 - 开源免费的网文短剧写作系统 | 必定AI-BuidAI',
    description: '必定AI-BuidAI 网文短剧写作是一款专注于短剧本和网络小说创作的辅助工具,适合自媒体创作者、编剧、网络作家及内容团队使用。提供丰富的剧情模板、角色设定和冲突框架,支持创建无限量剧本、章节可视化拖拽、AI 扩写润色改写续写。',
    keywords: 'AI短剧创作,网文写作,短剧本创作,网络小说,AI写作工具,必定AI,BuidAI,小说创作,剧本生成,AI扩写,AI润色'
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
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 mb-4"
            >
              <span className="px-1.5 py-0.5 rounded bg-primary text-[11px] font-bold text-white tracking-wider">NEW</span>
              <span className="text-xs text-gray-600 dark:text-gray-300">AI 短剧小说创作 2.0 发布</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              打造您的 <span className="text-primary">专属爆款短剧</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              专为自媒体创作者、编剧、网络作家打造的 AI 写作工具,支持无限量剧本创作。<br className="hidden sm:block" />AI 扩写润色改写续写,章节可视化拖拽,开启智能创作新时代。
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
              src="/solution/drama-3.png"
              alt="AI短剧小说创作"
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
              全能型 AI 短剧小说创作平台
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              集剧本创作、角色设定、AI 辅助写作于一体,为您提供一站式解决方案
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
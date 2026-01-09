"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Tv, PenTool, X } from "lucide-react";
import { usePageMetadata } from '@/hooks/use-page-metadata';
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "@/components/ContactSection";
/**
 * 英雄区域关键指标数据
 */
const HERO_METRICS = [
  { value: '98.5', unit: '万+', label: '日活用户' },
  { value: '500', unit: 'ms', label: '响应速度' },
  { value: '5', unit: 'min起', label: '训练时长' }
];

/**
 * 场景标签页配置
 */
const SCENARIO_TABS = [
  { id: 'virtualIP', icon: Video, label: '带货视频' },
  { id: 'digitalEmployee', icon: Users, label: '数字员工' },
  { id: 'contentCreation', icon: PenTool, label: '内容创作' },
  { id: 'virtualLive', icon: Tv, label: '虚拟直播' }
];

/**
 * 场景详情内容配置
 */
const SCENARIO_CONTENTS = {
  virtualIP: {
    title: '带货视频',
    description: '面向文化传播、影视内容等多个行业，帮助打造带货视频，赋能品牌营销，提升品牌心智。',
    items: [
      { title: '品牌代言', desc: '提升品牌辨识度' },
      { title: '内容创作', desc: '高质量虚拟角色' },
      { title: '社交互动', desc: '增强用户体验' }
    ],
    image: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d7597b2e51444a40_1697534317820.mp4',
    isVideo: true,
    imageAlt: '带货视频场景',
    link: '/demo'
  },
  digitalEmployee: {
    title: '数字员工',
    description: '为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。',
    items: [
      { title: '智能客服', desc: '7×24小时在线服务' },
      { title: '销售助手', desc: '提高转化率' },
      { title: '培训讲师', desc: '标准化培训内容' }
    ],
    image: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58de8e04fa71151b_1697611541810.mp4',
    isVideo: true,
    imageAlt: '数字员工场景',
    link: '/demo'
  },
  contentCreation: {
    title: '内容创作',
    description: '为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。',
    items: [
      { title: '视频脚本', desc: '专业视频脚本' },
      { title: '营销文案', desc: '提高转化率' },
      { title: '多语言翻译', desc: '拓展全球市场' }
    ],
    image: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/77eb68b8aabcb8aa_1697534305029.mp4',
    isVideo: true,
    imageAlt: '内容创作场景',
    link: '/demo'
  },
  virtualLive: {
    title: '虚拟直播',
    description: '为直播行业提供虚拟主播解决方案，降低直播成本，提高直播效率和质量。',
    items: [
      { title: '电商直播', desc: '24小时不间断直播' },
      { title: '新闻播报', desc: '专业播报服务' },
      { title: '活动主持', desc: '增强互动体验' }
    ],
    image: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/84136783a28cddee_1697534229451.mp4',
    isVideo: true,
    imageAlt: '虚拟直播场景',
    link: '/demo'
  }
};

/**
 * 产品优势数据配置
 */
const PRODUCT_ADVANTAGES = [
  {
    title: '数字分身训练数据',
    mainValue: '5',
    unit: 'min',
    gradient: 'from-blue-600 to-blue-700',
    dotColor: 'bg-blue-600',
    featureTitle: '形象自然丰富',
    items: [
      '超短时间即可生成分身',
      '口型自然，表情丰富，30+表情',
      '量产功能，批量生成和转换'
    ]
  },
  {
    title: '声音复刻训练数据',
    mainValue: '10',
    unit: 'min',
    gradient: 'from-blue-500 to-blue-600',
    dotColor: 'bg-blue-500',
    featureTitle: '多元高质生成能力',
    items: [
      '超短时高质量声音复刻',
      '情绪转换和语音表达，保留个性',
      '提供语音合成，多20+种语言'
    ]
  },
  {
    title: '数字人整体效果达',
    mainValue: 'MOS',
    subValue: '4.0',
    gradient: 'from-blue-400 to-blue-500',
    dotColor: 'bg-blue-400',
    featureTitle: '强大AI技术能力',
    items: [
      '行业领先的研究模型支持技术',
      '感知准确率达98.5%',
      '数字人响应时间仅需500ms'
    ]
  },
  {
    title: '集成和接入方式',
    mainValue: '灵活',
    isTextValue: true,
    gradient: 'from-blue-700 to-blue-800',
    dotColor: 'bg-blue-700',
    featureTitle: '快速接入',
    items: [
      'API、SDK多种接入方式',
      'APP/Web/小程序全端支持',
      '公有云、私有化部署选择'
    ]
  }
];

/**
 * 演示账号信息配置
 */
const DEMO_ACCOUNTS = [
  { title: 'PC端后台', url: 'https://v.cnai.art', account: '自行注册', password: '自行注册' },
  { title: '代理商后台', url: 'https://demo.cnai.art/admin', account: 'demo', password: 'demo' },
  { title: 'SaaS平台端', url: 'https://saas.cnai.art/platform', account: '占不提供', password: '占不提供' }
];

/**
 * 核心功能模块数据
 */
const CORE_FEATURES_DATA = [
  {
    id: 'digital_avatar',
    badgeText: '核心功能',
    title: '数字分身',
    description: '轻松创建你的AI虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！',
    items: [
      { title: '高清还原', desc: '100%真实感官体验' },
      { title: '形象生成', desc: '100%快速生成' },
      { title: '定制形象', desc: '个性化定制服务' }
    ],
    image: '/product/human1.png',
    layout: 'left-text', // 文字在左，图在右
    imageLabel: '数字分身',
    imageSubLabel: '高清形象生成'
  },
  {
    id: 'voice_cloning',
    badgeText: '热门功能',
    title: '声音克隆',
    description: '有声胜过一个性格说，仅需1句话，快速克隆你的声色，配合文案即可生成专属声音口播内容！',
    items: [
      { title: '声音还原', desc: '100%真实还原' },
      { title: '语音转换', desc: '100%智能转换' },
      { title: '超逼真', desc: '100%自然效果' }
    ],
    image: 'https://lf3-starry.byteimg.com/obj/starry/image/r6j8q8i2q1_%E9%AB%98%E8%87%AA%E7%84%B6%E5%BA%A6.webp',
    layout: 'right-text', // 文字在右，图在左
    imageLabel: '声音克隆',
    imageSubLabel: '已完成'
  },
  {
    id: 'user_management',
    badgeText: '实用功能',
    title: '用户管理',
    description: '基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。',
    items: [
      { title: '多级分站', desc: '灵活的分站管理' },
      { title: '账户管理', desc: '完善的账户体系' },
      { title: '权限管理', desc: '精细的权限控制' }
    ],
    image: '', // 使用自定义组件
    isCustomRightContent: true,
    layout: 'left-text',
    imageLabel: '用户管理',
    imageSubLabel: '多级权限控制'
  },
  {
    id: 'video_generation',
    badgeText: 'AI视频',
    title: 'AI一键自动生成视频',
    description: '从容应对内容创作和营销需求，助力商家和创作者提升视频生成的效率，更好的在公私域做好内容营销，助力GMV提升。',
    items: [
      { title: '一键生成', desc: '智能快速生成视频' },
      { title: '场景丰富', desc: '多样化视频模板' },
      { title: '高效营销', desc: '提升内容转化率' }
    ],
    image: 'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4',
    isVideo: true,
    layout: 'right-text',
    imageLabel: '视频生成',
    imageSubLabel: 'AI智能创作'
  }
];

/**
 * 接入流程步骤配置
 */
const PROCESS_STEPS = [
  { id: '01', title: '需求沟通', desc: '提供产品信息，沟通数字人类型、使用场景和交付形式' },
  { id: '02', title: '确认合作', desc: '通过控制台直接下单，或线下沟通商务合作' },
  { id: '03', title: '资产制作', desc: '采集数据，制作数字人形象和声音资产' },
  { id: '04', title: '正式上线', desc: '数字人上线，调用接口驱动或通过平台直接使用' }
];

/**
 * 底部CTA特性列表
 */
const CTA_FEATURES = [
  { title: '高清还原', desc: '100%真实感官体验' },
  { title: '专业服务', desc: '7×24小时技术支持' },
  { title: '数据安全', desc: '企业级安全保障' },
  { title: '持续更新', desc: '定期功能迭代升级' }
];

/**
 * 底部CTA右侧卡片配置
 */
const CTA_RIGHT_CARDS = [
  {
    title: 'AI数字人',
    desc: 'PHP/Java双版本支持',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    title: '私有部署',
    desc: '安全可控的私有化部署',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    title: '专业团队',
    desc: '一对一技术支持',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: '开源方案',
    desc: '灵活定制，售后无忧',
    iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
  }
];

/**
 * AI数字人系统页面组件
 *
 * 包含产品展示、核心功能、应用场景、演示中心等模块
 */
const HumanPage = () => {
  // 场景标签页状态
  const [activeScenario, setActiveScenario] = useState<keyof typeof SCENARIO_CONTENTS>('virtualIP');

  // 二维码弹窗状态
  const [showQRCode, setShowQRCode] = useState(false);

  // 应用场景区域的手风琴状态 (独立控制每个场景)
  const [activeScenarioAccordions, setActiveScenarioAccordions] = useState<Record<string, number>>({
    virtualIP: 0,
    digitalEmployee: 0,
    contentCreation: 0,
    virtualLive: 0
  });

  // 核心功能区域的手风琴状态 (独立控制每个功能)
  const [activeCoreFeatures, setActiveCoreFeatures] = useState<Record<string, number>>({
    digital_avatar: 0,
    voice_cloning: 0,
    user_management: 0,
    video_generation: 0
  });

  /**
   * 切换应用场景区域的手风琴项
   * @param scenario 场景ID
   * @param index 索引
   */
  const toggleScenarioAccordion = (scenario: string, index: number) => {
    setActiveScenarioAccordions(prev => ({
      ...prev,
      [scenario]: index
    }));
  };

  /**
   * 切换核心功能区域的手风琴项
   * @param featureId 功能ID
   * @param index 索引
   */
  const toggleCoreFeatureAccordion = (featureId: string, index: number) => {
    setActiveCoreFeatures(prev => ({
      ...prev,
      [featureId]: index
    }));
  };

  usePageMetadata({
    title: '艺创AI_AI数字人系统源码_AI开源saas数字人系统_艺创AI数字人系统',
    description: 'AIGC系统源码,是专注提供AI系统源代码解决方案的技术团队，目前已开源「AI数字人SaaS系统」「超级全能AI变现系统」「企业AI知识库」「AI聊天绘画系统」「论文写作系统」拥有PHP和JAVA两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
    keywords: 'AI数字人系统,数字人源码,数字人saas系统,开源数字人系统,AI数字人平台,虚拟数字人系统'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* 头部横幅 - 参考样式重构 */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-full h-[800px] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent blur-3xl opacity-60"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-50/50 to-transparent blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs text-blue-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>虚拟数字人</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
            数字分身 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 block sm:inline">AI数字人系统</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-gray-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2 leading-relaxed">
            基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0 mb-12">
            <Button
              className="w-full sm:w-auto px-8 py-6 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
              onClick={() => window.location.href = '/demo'}
            >
              <Play className="w-5 h-5 mr-2" />
              立即试用
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 rounded-md border-gray-200 text-gray-700 hover:bg-gray-50 text-base font-semibold transition-all duration-300 active:scale-95"
              onClick={() => setShowQRCode(true)}
            >
              <Users className="w-5 h-5 mr-2" />
              购买授权
            </Button>
          </div>

          {/* Metrics - 迁移至居中展示 */}
          <div className="grid grid-cols-3 gap-4 sm:gap-12 max-w-2xl mx-auto border-t border-gray-100 pt-8 sm:pt-10 mb-16">
            {HERO_METRICS.map((metric, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {metric.value}
                  <span className="text-sm sm:text-base font-normal text-gray-500 ml-1">{metric.unit}</span>
                </span>
                <span className="text-xs sm:text-sm text-gray-500">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Image - 迁移至底部居中展示 */}
          <div className="relative mx-auto max-w-4xl lg:max-w-5xl px-2 sm:px-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <div className="w-full bg-gray-50">
                <img
                  src="/images/scenarios/human.png"
                  alt="数字人系统界面演示"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* 底部光晕 */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-blue-600/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 产品优势 - 优化响应式布局 */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">产品优势</h2>
            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">多维度产品优势，助力企业数字化升级</p>
          </div>

          {/* 企业智能客服卡片网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
            {PRODUCT_ADVANTAGES.map((advantage, index) => (
              <div key={index} className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 rounded-lg">
                {/* 数据展示区域 */}
                <div className={`bg-gradient-to-br ${advantage.gradient} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 opacity-90">{advantage.title}</h3>
                    <div className={advantage.isTextValue ? "text-2xl sm:text-4xl font-bold" : "flex items-baseline"}>
                      {advantage.isTextValue ? (
                        advantage.mainValue
                      ) : (
                        <>
                          <span className="text-3xl sm:text-5xl font-bold">{advantage.mainValue}</span>
                          <span className={`text-lg sm:text-xl font-medium ml-2 ${advantage.subValue ? 'font-bold' : ''}`}>
                            {advantage.subValue || advantage.unit}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* 内容区域 */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-4 sm:mb-6">{advantage.featureTitle}</h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {advantage.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 ${advantage.dotColor} mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}></div>
                        <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 演示中心 - 优化响应式布局 */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰元素 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-100 blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 bg-indigo-100 blur-2xl sm:blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* 左侧内容 */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 bg-blue-600 mr-2"></span>
                在线演示
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                AI数字人SaaS系统2.0<br className="hidden sm:block" />演示中心
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
              </p>

              <div className="bg-white shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 rounded-xl">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 flex items-center justify-center mr-2 sm:mr-3 rounded-lg">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium">演示账号信息</h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {DEMO_ACCOUNTS.map((account, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="mb-2 sm:mb-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{account.title}</p>
                        <p className="text-xs text-blue-600 break-all sm:break-normal">{account.url}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-1 sm:mr-2">账号:</span>
                          <span className="text-xs font-medium">{account.account}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-1 sm:mr-2">密码:</span>
                          <span className="text-xs font-medium">{account.password}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0 rounded-lg"
                          onClick={() => window.open(account.url, '_blank')}
                        >
                          访问
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]"
                  onClick={() => setShowQRCode(true)}
                >
                  申请专属演示
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]"
                  onClick={() => setShowQRCode(true)}
                >
                  联系客服
                </Button>
              </div>
            </div>

            {/* 二维码弹窗 */}
            <AnimatePresence>
              {showQRCode && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center"
                  onClick={() => setShowQRCode(false)}
                >
                  {/* 背景遮罩 */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                  {/* 模态框内容 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* 关闭按钮 */}
                    <button
                      onClick={() => setShowQRCode(false)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                      aria-label="关闭"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* 内容区域 */}
                    <div className="p-8 text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">联系客服</h3>
                      <p className="text-sm text-gray-600 mb-6">扫描二维码添加客服微信</p>

                      {/* 二维码 */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <img
                            src="/images/qrcode.png"
                            alt="客服二维码"
                            className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
                          />
                        </div>
                      </div>

                      {/* 提示文字 */}
                      <p className="text-xs text-gray-500">长按二维码保存到相册</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 右侧内容 */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* 主要演示视频 */}
                <div className="bg-white p-4 sm:p-6 shadow-lg rounded-xl">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4"
                  className="w-full h-auto rounded-lg"
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />

                  <div className="mt-3 sm:mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900">数字人管理平台</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有数字人资产</p>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* 二维码 */}
                <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-white p-3 sm:p-4 shadow-lg rounded-xl">
                  <img
                    src="/images/wechat.png"
                    alt="演示二维码"
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white"
                    loading="lazy"
                  />
                  <p className="text-xs text-center mt-1 sm:mt-2 text-gray-600">扫码体验移动端</p>
                </div>

                {/* 装饰元素 */}
                <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-gradient-to-br from-blue-600 to-blue-700 p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 flex items-center justify-center backdrop-blur-sm rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 text-white"
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
                    <div className="flex flex-col">
                      <p className="text-sm sm:text-base font-medium text-white tracking-wide">在线演示</p>
                      <p className="text-xs sm:text-sm text-blue-100/90">实时体验</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 - 现代化简约风格 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-medium mb-4">
              <span>场景应用</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              应用场景
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              丰富的应用场景和解决方案，满足多种业务需求
            </p>
          </div>

          {/* 场景标签导航 */}
          <div className="flex justify-center mb-10 md:mb-16">
            <div className="w-full md:w-auto overflow-x-auto scrollbar-hide py-2">
              <div className="flex md:inline-flex items-center gap-3 md:gap-1.5 px-4 md:p-1.5 md:bg-gray-100 md:rounded-full md:border md:border-gray-200 min-w-max md:min-w-0 mx-auto">
                {SCENARIO_TABS.map(tab => (
                  <button
                    key={tab.id}
                    className={`
                      whitespace-nowrap flex-shrink-0
                      px-6 py-2.5
                      rounded-full
                      text-sm font-medium transition-all duration-300
                      flex items-center justify-center gap-2
                      ${activeScenario === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white md:bg-transparent text-gray-600 hover:text-gray-900 md:hover:bg-white border border-gray-100 md:border-none'
                      }
                    `}
                    onClick={() => setActiveScenario(tab.id as keyof typeof SCENARIO_CONTENTS)}
                  >
                    <tab.icon className={`w-4 h-4 ${activeScenario === tab.id ? 'text-white' : 'text-gray-500'}`} />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 场景内容展示 - 动态渲染 */}
          {(() => {
            const content = SCENARIO_CONTENTS[activeScenario];
            return (
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1 pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{content.title}</h3>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    {content.description}
                  </p>

                  <div className="flex flex-col gap-4">
                    {content.items.map((item, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => toggleScenarioAccordion(activeScenario, index)}
                        className={`rounded-xl transition-all duration-300 cursor-default ${
                          activeScenarioAccordions[activeScenario] === index
                            ? 'bg-gradient-to-br from-blue-50 to-white p-4'
                            : 'bg-transparent p-4 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                            activeScenarioAccordions[activeScenario] === index
                              ? 'bg-blue-600 text-white'
                              : 'border border-blue-200 text-blue-600 bg-white'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>

                          <div className="flex-1">
                            <h4 className={`text-lg font-medium transition-colors ${
                              activeScenarioAccordions[activeScenario] === index ? 'text-blue-900 font-bold' : 'text-gray-600'
                            }`}>
                              {item.title}
                            </h4>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              activeScenarioAccordions[activeScenario] === index ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                            }`}>
                              <p className="text-gray-600 text-sm leading-relaxed border-l-2 border-blue-200 pl-4">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-md transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                      onClick={() => window.location.href = content.link}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      立即试用
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-md min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                      onClick={() => setShowQRCode(true)}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      购买授权
                    </Button>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
                    <div className="h-6 bg-gray-50 rounded-t-lg flex items-center px-4 space-x-1.5 border-b border-gray-100 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                    </div>
                    {content.isVideo ? (
                        <video
                            src={content.image}
                            className="w-full rounded-b-lg bg-gray-50"
                            preload="metadata"
                            playsInline
                            controls
                            autoPlay
                            muted
                            loop
                        >
                             您的浏览器不支持 video 标签。
                        </video>
                    ) : (
                        <img
                        src={content.image}
                        alt={content.imageAlt}
                        className="w-full rounded-b-lg bg-gray-50"
                        />
                    )}

                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 产品核心功能 */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题区域 */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-700 text-xs sm:text-sm font-medium">核心功能</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">产品核心功能</h2>
            <div className="w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">强大的AI技术能力，为您提供全方位的数字人解决方案</p>
          </div>

          {CORE_FEATURES_DATA.map((feature) => (
            <div key={feature.id} className="mb-24 last:mb-0">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* 文本区域 */}
                <div className={`${feature.layout === 'right-text' ? 'order-2 lg:order-2 lg:pl-8' : 'order-2 lg:order-1'}`}>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-3 sm:mb-4">
                    <span className="text-blue-600 text-xs font-medium">{feature.badgeText}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex flex-col gap-3 sm:gap-4 mb-8">
                    {feature.items.map((item, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => toggleCoreFeatureAccordion(feature.id, idx)}
                        className={`rounded-xl transition-all duration-300 cursor-default ${
                          activeCoreFeatures[feature.id] === idx
                            ? 'bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm'
                            : 'bg-transparent p-4 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                            activeCoreFeatures[feature.id] === idx
                              ? 'bg-blue-600 text-white'
                              : 'border border-blue-200 text-blue-600 bg-white'
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1">
                            <h4 className={`text-lg font-medium transition-colors ${
                              activeCoreFeatures[feature.id] === idx ? 'text-blue-900 font-bold' : 'text-gray-600'
                            }`}>
                              {item.title}
                            </h4>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              activeCoreFeatures[feature.id] === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}>
                              <p className="text-gray-600 text-sm leading-relaxed pl-1">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 按钮组 */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-md min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                      onClick={() => window.open('https://v.cnai.art', '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      立即体验
                    </Button>

                    <Button variant="outline"
                      className="border-blue-500 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-md min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                      onClick={() => window.open('https://auth.cnai.art', '_blank')}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      购买授权
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-md min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                      onClick={() => window.location.href = '/demo'}
                    >
                      <Bot className="w-4 h-4 mr-2" />
                      体验Demo
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-md min-h-[44px] flex-1 sm:flex-none flex items-center justify-center"
                      onClick={() => setShowQRCode(true)}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      联系客服
                    </Button>
                  </div>
                </div>

                {/* 展示区域 */}
                <div className={`${feature.layout === 'right-text' ? 'order-1 lg:order-1' : 'order-1 lg:order-2'} relative mt-8 lg:mt-0`}>
                  {feature.isCustomRightContent ? (
                    // 用户管理 - 自定义浏览器界面
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
                      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                        {/* 浏览器标题栏 */}
                        <div className="bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 flex items-center space-x-1 sm:space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400"></div>
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-yellow-400"></div>
                            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="bg-white rounded-md py-0.5 px-2 text-xs sm:text-sm text-gray-600 max-w-xs mx-auto truncate">
                              艺创AI数字人管理系统
                            </div>
                          </div>
                        </div>

                        {/* 模拟界面内容 */}
                        <div className="p-3 sm:p-4">
                          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <div className="bg-blue-50 rounded-lg p-2 sm:p-3">
                              <h3 className="text-xs font-medium text-gray-700">总用户数</h3>
                              <p className="text-lg sm:text-xl font-bold text-blue-600 mt-1">12,458</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-2 sm:p-3">
                              <h3 className="text-xs font-medium text-gray-700">今日活跃</h3>
                              <p className="text-lg sm:text-xl font-bold text-purple-600 mt-1">2,845</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-2 sm:p-3">
                              <h3 className="text-xs font-medium text-gray-700">转化率</h3>
                              <p className="text-lg sm:text-xl font-bold text-green-600 mt-1">32.6%</p>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                            <div className="flex justify-between items-center mb-2 sm:mb-3">
                              <h3 className="font-medium text-gray-700 text-xs sm:text-sm">最近访问</h3>
                              <button className="text-xs text-blue-600">查看全部</button>
                            </div>
                            <div className="space-y-1 sm:space-y-2">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center bg-white p-1.5 sm:p-2 rounded-md">
                                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-gray-200 rounded-full flex-shrink-0"></div>
                                  <div className="ml-2 min-w-0 flex-1">
                                    <p className="text-xs font-medium text-gray-800 truncate">用户_{i}</p>
                                    <p className="text-xs text-gray-500 truncate">最近访问时间: 2024-01-{i}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // 默认图片或视频展示
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                      {feature.isVideo ? (
                         <video
                           src={feature.image}
                           autoPlay
                           preload="metadata"
                           playsInline
                           loop
                           muted
                           className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                         >
                           <source type="video/mp4" />
                           您的浏览器不支持视频播放
                         </video>
                      ) : (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                        />
                      )}
                    </div>
                  )}

                  {/* 悬浮标签 */}
                  <div className={`absolute -bottom-2 sm:-bottom-4 ${feature.layout === 'right-text' ? '-left-2 sm:-left-4' : '-right-2 sm:-right-4'} bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-4 border border-gray-100 max-w-[140px] sm:max-w-none`}>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                        {feature.id === 'video_generation' ? (
                            <Video className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{feature.imageLabel}</p>
                        <p className="text-xs text-gray-500 truncate">{feature.imageSubLabel}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 接入流程 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
              <span className="text-blue-600 text-xs font-medium">快速部署</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">接入流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">标准化服务流程，助您快速完成数字人系统部署</p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              onClick={() => window.open('https://v.cnai.art', '_blank')}
            >
              立即接入
            </Button>
          </div>

          {/* 流程步骤 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                {/* 序号水印 */}
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-gray-100/50 select-none pointer-events-none font-mono">
                  {step.id}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="text-blue-600 font-bold text-lg group-hover:text-white transition-colors duration-300">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <div className="w-8 h-1 bg-gray-100 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors duration-300"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 准备好开启您的AI数字人之旅了吗？ */}
      <div className="mt-24 py-8 container mx-auto px-4">
        <div className="bg-white overflow-hidden relative border border-gray-200 rounded-3xl">
          {/* 装饰元素 */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
              <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
              <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
              <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {/* 左侧内容 */}
            <div className="md:col-span-3 p-8 md:p-12 relative z-10">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  准备好开启您的<span className="text-blue-600">AI数字人之旅</span>了吗？
                </h3>
                <p className="text-gray-600 mb-6 text-base">
                 专为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成知识付费、课程、带货、形象宣传、行业干货等口播视频。基于SaaS多开模式的架构设计，支持无限OEM贴牌开通站点。版本免费迭代升级+售后技术支撑，让你无后顾之忧！
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {CTA_FEATURES.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium">{feature.title}</h4>
                        <p className="text-gray-500 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-transform hover:scale-105">
                    立即体验
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-transform hover:scale-105">
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
                      {CTA_RIGHT_CARDS.map((card, index) => (
                        <div key={index} className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                          <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-lg">{card.title}</h4>
                          <p className="text-gray-500 text-sm text-center mt-1">{card.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <ContactSection />
    </div>
  );
};

export default HumanPage;

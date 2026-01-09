"use client";

import { Button } from "@/components/ui/button";
import { Check, Users, Bot, Play, Video, Mic, Tv, PenTool, MessageCircle, Palette, Lightbulb, Zap, X, Crown } from "lucide-react";
import { usePageMetadata } from '@/hooks/use-page-metadata';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";

// 自定义CSS动画样式
const customStyles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }
`;

const DEMO_ACCOUNTS = [
  {
    title: "PC端后台",
    url: "https://cnai.art",
    account: "自行注册",
    password: "自行注册",
  },
  {
    title: "移动端",
    url: "https://cnai.art/mobile",
    account: "自行注册",
    password: "自行注册",
  },
  {
    title: "前端演示",
    url: "https://ai.xxx.com/index",
    account: "admin",
    password: "123456",
  },
];

/**
 * 场景标签页配置
 */
const CHAT_SCENARIO_TABS = [
  { id: 'virtualIP', icon: MessageCircle, label: 'AI对话' },
  { id: 'digitalEmployee', icon: PenTool, label: '智能创作' },
  { id: 'contentCreation', icon: Palette, label: 'AI绘画' },
  { id: 'virtualLive', icon: Zap, label: 'AI技能' }
];

/**
 * 场景详情内容配置
 */
const CHAT_SCENARIO_CONTENTS = {
  virtualIP: {
    title: '文案AI对话',
    description: '对接GPT接口，AI秒级回复，让您在工作中得心应手，提供更加精准的回答和服务，助力高效办公与内容创作。',
    items: [
      { title: 'AI秒级回复', desc: '对接GPT接口，快速响应您的每一个问题' },
      { title: '精准内容生成', desc: '智能理解需求，生成高质量文案和专业解答' },
      { title: '高效办公助手', desc: '提升工作效率，助力内容创作与日常沟通' }
    ],
    image: 'https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png',
    imageAlt: '文案AI对话应用场景',
    link: '/demo'
  },
  digitalEmployee: {
    title: 'AI智能创作',
    description: '根据不同模型进行提问，AI会针对输入的问题进行深度创作，显著提升内容创作能力，满足多样化创作需求。',
    items: [
      { title: '多模型支持', desc: '支持多种AI模型，满足不同场景创作需求' },
      { title: '深度内容生成', desc: '根据输入问题，AI进行深度理解与创作' },
      { title: '提升创作能力', desc: '高效生成高质量内容，助力创意表达' }
    ],
    image: 'https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/create.png',
    imageAlt: 'AI智能创作应用场景',
    link: '/demo'
  },
  contentCreation: {
    title: 'AI绘画',
    description: '只需一句话，让文字秒变精美画作。',
    items: [
      { title: '文生图', desc: '输入描述，AI自动生成精美图片' },
      { title: '多风格支持', desc: '支持多种绘画风格，满足不同创作需求' },
      { title: '高效生成', desc: '一键生成，快速获得高质量画作' }
    ],
    image: 'https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png',
    imageAlt: 'AI绘画应用场景',
    link: '/demo'
  },
  virtualLive: {
    title: 'AI技能',
    description: '可自定义不同的技能模型，用户可根据具体技能进行提问。技能分类越细致，AI的回答就越精准，满足多样化业务场景需求。',
    items: [
      { title: '技能自定义', desc: '支持自定义各类AI技能模型，灵活适配不同场景' },
      { title: '细分技能分类', desc: '技能分类越细，AI回答越精准，提升专业度' },
      { title: '多场景适用', desc: '适用于客服、教育、医疗等多行业智能问答' }
    ],
    image: 'https://java-chat-front.chatmoney.cn/api/uploads/image/20240612/04197fe3-1ad8-40b0-8b79-a63249d1bc83.png',
    imageAlt: 'AI技能应用场景',
    link: '/demo'
  }
};

/**
 * 核心功能模块数据
 */
const CORE_FEATURES_DATA = [
  {
    id: 'chat_dialogue',
    badgeText: '核心功能',
    title: 'AI智能对话',
    description: '智能聊天对话，AI秒回答。对接ChatAI接口，可以对自然语言进行深度理解，识别出用户的意图和需求，从而提供更加精准的回答和服务。',
    items: [
      { title: '智能对话', desc: 'AI秒级响应' },
      { title: '意图识别', desc: '精准理解需求' },
      { title: '多场景适用', desc: '灵活对接业务' }
    ],
    image: 'https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/dialogue.png',
    layout: 'left-text',
    imageLabel: 'AI智能对话',
    imageSubLabel: '智能聊天秒响应'
  },
  {
    id: 'ai_creation',
    badgeText: '热门功能',
    title: 'AI智能创作',
    description: '适用多场景，不同类型场景，满足您的不同需求，快速为您创作新的灵感。',
    items: [
      { title: '多场景创作', desc: '可自定义多种创作场景，有效提高效率' },
      { title: '精准调教', desc: '自定义调教指令，表单联动，创作更精准' },
      { title: 'GPT4.0支持', desc: '已支持GPT4.0超强模型，满足聊天不同需求' }
    ],
    image: 'https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/create.png',
    layout: 'right-text',
    imageLabel: 'AI智能创作',
    imageSubLabel: '多场景支持'
  },
  {
    id: 'ai_art',
    badgeText: 'AI绘画',
    title: '生成AI大师级作品',
    description: '已对接MJ、SD绘图、DALLE-3等众多绘画模型，作图更强大。适用于各类图像创作需求，包括图片创作、风景生成等场景。支持文生图、图生图等功能，满足绘画一系列需求。提供多种绘画风格和绘画类型，生成图片更生动。',
    items: [
      { title: '多模型接入', desc: 'MJ、SD、DALLE-3等主流AI绘画模型' },
      { title: '多场景适用', desc: '图片创作、风景生成等多种应用场景' },
      { title: '多样化风格', desc: '多种绘画风格与类型，图片更生动' }
    ],
    image: 'https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/img/art.png',
    layout: 'left-text',
    imageLabel: 'AI绘画',
    imageSubLabel: '大师级作品生成'
  }
];

/**
 * 接入流程数据
 */
const PROCESS_STEPS = [
  { id: '01', title: '需求沟通', desc: '提供产品信息，沟通AI对话使用场景和交付形式' },
  { id: '02', title: '确认合作', desc: '通过控制台直接下单，或线下沟通商务合作' },
  { id: '03', title: '系统对接', desc: '通过API或SDK快速接入，对接企业业务系统' },
  { id: '04', title: '正式上线', desc: '系统部署完成，通过分配的账号密码登录即可使用' }
];

/**
 * CTA 特性数据
 */
const CTA_FEATURES = [
  { title: '极速响应', desc: '毫秒级语义理解与反馈' },
  { title: '专业服务', desc: '7×24小时技术支持' },
  { title: '数据安全', desc: '企业级私有化部署方案' },
  { title: '持续进化', desc: '模型定期迭代，能力持续增强' }
];

/**
 * CTA 右侧卡片数据
 */
const CTA_RIGHT_CARDS = [
  {
    title: 'AI智能对话',
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

const ChatPage = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  // 场景标签页状态
  const [activeScenario, setActiveScenario] = useState<keyof typeof CHAT_SCENARIO_CONTENTS>('virtualIP');

  // 应用场景区域的手风琴状态 (独立控制每个场景)
  const [activeScenarioAccordions, setActiveScenarioAccordions] = useState<Record<string, number>>({
    virtualIP: 0,
    digitalEmployee: 0,
    contentCreation: 0,
    virtualLive: 0
  });

  // 核心功能区域的手风琴状态 (独立控制每个功能)
  const [activeCoreFeatures, setActiveCoreFeatures] = useState<Record<string, number>>({
    chat_dialogue: 0,
    ai_creation: 0,
    ai_art: 0
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
    title: '艺创AI_AI系统源码_AI智能聊天系统_AI绘画系统',
    description: '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
    keywords: 'AI系统源码,AI智能聊天系统,AI绘画系统,艺创AI'
  });

  // 常用样式常量 - 优化移动端适配
  const sectionPadding = "py-12 sm:py-16 md:py-20 lg:py-24";
  const containerBase = "container mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <div className="min-h-screen bg-white pb-10 overflow-x-hidden">
      {/* 自定义样式 */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      {/* 头部横幅 - 全面优化移动端响应式设计 */}
      <section className="relative min-h-[100vh] sm:min-h-[90vh] md:min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden">
        {/* 动态渐变背景 - 响应式优化 */}
        <div className="absolute inset-0 bg-white">
          {/* 动态光效 - 适配不同屏幕尺寸，防止溢出 */}
          <div className="absolute inset-0 opacity-15 sm:opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>

          {/* 网格背景 - 响应式网格大小 */}
          <div className="absolute inset-0 opacity-5 sm:opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse" className="sm:w-8 sm:h-8 md:w-10 md:h-10">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2563eb" strokeWidth="0.5" className="sm:stroke-1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* 响应式容器 - 优化不同设备的内边距和最大宽度，使用适中的宽屏设计 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 顶部状态标签 - 响应式设计 */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/90 backdrop-blur-md border border-blue-200 text-black shadow-lg">
              <div className="flex items-center mr-2 sm:mr-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-pulse mr-1 sm:mr-2"></div>
                <span className="text-xs sm:text-sm font-medium">系统在线</span>
              </div>
              <div className="h-3 sm:h-4 w-px bg-blue-600 mx-2 sm:mx-3"></div>
              <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent font-bold">
                V3.0 全新发布
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* 左侧内容区 - 响应式优化 */}
            <div className="text-center lg:text-left">
              {/* 主标题 - 响应式字体大小 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black mb-6 sm:mb-8 leading-tight">
                <div className="pt-6"> {/* 为艺创AI span增加顶部间距 */}
                  <span className="block">
                    <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
                      艺创AI
                    </span>
                  </span>
                </div>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-4">
                  智能聊天绘画系统
                </span>
              </h1>

              {/* 副标题 - 响应式字体和间距 */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                集成最新GPT-4、DALL-E 3、Midjourney等顶级AI模型，
                <span className="text-blue-600 font-semibold">一站式AI创作平台</span>，
                让创意无限可能
              </p>

              {/* 核心特性标签 - 响应式布局 */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 backdrop-blur-sm rounded-full text-blue-600 text-xs sm:text-sm border border-blue-200">
                  🤖 智能对话
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 backdrop-blur-sm rounded-full text-blue-600 text-xs sm:text-sm border border-blue-300">
                  🎨 AI绘画
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white backdrop-blur-sm rounded-full text-black text-xs sm:text-sm border border-gray-300">
                  ✍️ 智能创作
                </span>
                <span className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 backdrop-blur-sm rounded-full text-gray-800 text-xs sm:text-sm border border-gray-300">
                  💰 营销变现
                </span>
              </div>

              {/* 行动按钮组 - 响应式按钮布局 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12 px-4 sm:px-0">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-600 hover:to-blue-600 text-white px-6 py-2 h-auto text-sm sm:text-base font-bold rounded-md shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  立即体验
                </Button>
                <Button variant="outline" className="border-2 border-black text-black hover:bg-gray-100 backdrop-blur-sm px-6 py-2 h-auto text-sm sm:text-base font-medium rounded-md">
                  观看演示
                </Button>
              </div>

              {/* 实时数据展示 - 响应式网格 */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">1000+</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">企业用户</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">50万+</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">AI创作</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">99.9%</span>
                  </div>
                  <div className="text-gray-700 text-xs sm:text-sm">系统稳定</div>
                </div>
              </div>
            </div>

            {/* 右侧展示区 - 响应式优化 */}
            <div className="relative mt-8 lg:mt-0 mx-4 sm:mx-0">
              {/* 主展示容器 - 响应式尺寸 */}
              <div className="relative">
                {/* 展示卡片 - 优化移动端高度 */}
                  {/* 展示卡片 - 优化移动端高度，增加平板断点 */}
<div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 border border-gray-100 transition-all duration-300 min-h-[380px] sm:min-h-[460px] md:min-h-[500px]">
                  {/* 顶部状态栏 - 响应式布局 */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 bg-blue-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">艺创AI助手</h3>
                        <p className="text-xs sm:text-sm text-gray-500">智能对话 | 图像生成</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">在线服务中</span>
                      <span className="text-xs text-gray-600 sm:hidden">在线</span>
                    </div>
                  </div>

                  {/* 对话展示区 - 优化响应式设计 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 mb-4 sm:mb-6 min-h-[170px] sm:min-h-[220px] md:min-h-[250px] transition-all duration-300 hover:shadow-md">
                    <div className="space-y-3 sm:space-y-5">
                      {/* AI消息 */}
                      <div className="flex gap-2 sm:gap-3 items-start animate-fade-in">
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                          <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
                          <span className="sr-only">AI助手</span>
                        </div>
<div className="bg-white rounded-xl sm:rounded-2xl rounded-tl-none p-2.5 sm:p-3.5 max-w-[calc(100%-3rem)] sm:max-w-xs">
                          <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">您好！我可以帮您进行AI创作、图片生成等服务</p>
                        </div>
                      </div>

                      {/* 用户消息 */}
                      <div className="flex gap-2 sm:gap-3 justify-end items-start animate-fade-in animation-delay-300">
<div className="bg-blue-600 rounded-xl sm:rounded-2xl rounded-tr-none p-2.5 sm:p-3.5 max-w-[calc(100%-3rem)] sm:max-w-xs">
                          <p className="text-white text-xs sm:text-sm leading-relaxed">请帮我生成一张未来科技城市的图片</p>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center shadow-sm">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" />
                          <span className="sr-only">用户</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 功能展示区 - 响应式网格 */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    {/* AI创作功能卡片 */}
<div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 text-white transition-all duration-300 group">
                      <PenTool className="w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <h4 className="font-medium mb-0.5 sm:mb-1.5 text-xs sm:text-sm">AI创作</h4>
                      <p className="text-xs text-blue-100 hidden sm:block opacity-80">智能文案生成</p>
                    </div>

                    {/* AI绘画功能卡片 */}
<div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 text-white transition-all duration-300 group">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <h4 className="font-medium mb-0.5 sm:mb-1.5 text-xs sm:text-sm">AI绘画</h4>
                      <p className="text-xs text-indigo-100 hidden sm:block opacity-80">图像智能生成</p>
                    </div>

                    {/* 语音助手功能卡片 */}
<div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg sm:rounded-xl p-2.5 sm:p-3.5 text-white transition-all duration-300 group">
                      <Mic className="w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                      <h4 className="font-medium mb-0.5 sm:mb-1.5 text-xs sm:text-sm">语音助手</h4>
                      <p className="text-xs text-purple-100 hidden sm:block opacity-80">智能语音交互</p>
                    </div>
                  </div>
                </div>
                {/* 装饰浮动元素 - 响应式位置和大小，增加平板断点 */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg animate-float transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <Video className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      聊天对话
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg animate-float animation-delay-2000 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <Tv className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                    <span className="text-[10px] xs:text-xs sm:text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                     智能绘画
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 探索更多功能提示 */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
          <span className="text-sm">探索更多功能</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>

        {/* 自定义CSS动画样式 */}
         <style dangerouslySetInnerHTML={{
           __html: `
             @keyframes float {
               0%, 100% { transform: translateY(0px); }
               50% { transform: translateY(-10px); }
             }
             .animate-float {
               animation: float 3s ease-in-out infinite;
             }
             .animation-delay-2000 {
               animation-delay: 2s;
             }
             .animation-delay-4000 {
               animation-delay: 4s;
             }
             .animation-delay-300 {
               animation-delay: 0.3s;
             }
             .rotate-3d {
               transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
             }
             @keyframes fadeIn {
               from { opacity: 0; transform: translateY(10px); }
               to { opacity: 1; transform: translateY(0); }
             }
             .animate-fade-in {
               animation: fadeIn 0.5s ease-out forwards;
             }
           `
         }} />
      </section>

      {/* 底部滚动提示 - 优化移动端显示 */}
                  <div className="relative flex justify-center py-2 sm:py-4 pb-8 sm:pb-10 bg-white">
        <div className="flex flex-col items-center text-gray-600">
          <span className="text-xs mb-2">探索更多功能</span>
          <div className="w-5 h-8 border border-blue-400 rounded-full flex justify-center items-start pt-1.5">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>


      {/* 功能特色 - Bento Grid 布局 */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6 border border-gray-200">
              <Zap className="w-4 h-4 mr-2" />
              核心功能特色
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              四大核心功能
              <span className="block text-gray-900 mt-2">一站式AI解决方案</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              集成最新AI技术，为您提供全方位的智能化服务体验，助力企业降本增效
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:grid-rows-2">

            {/* Item 1: AI对话 (Span 4) */}
            <div className="lg:col-span-4 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-full p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
                 {/* 背景装饰 */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-blue-100/50 transition-colors duration-500"></div>

                 <div className="relative z-10">
                   <div className="flex items-start justify-between mb-6">
                     <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <MessageCircle className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                     </div>
                     <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                        核心能力
                     </span>
                   </div>

                   <h3 className="text-2xl font-bold text-gray-900 mb-2">AI智能对话</h3>
                   <p className="text-blue-600 font-medium mb-4">秒级响应 · 精准理解</p>
                   <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl">
                      基于最新GPT模型，提供自然流畅的对话体验。支持多轮对话、上下文理解，让AI成为您最贴心的智能助手。无论是日常问答、专业咨询还是创意激发，都能提供高质量的反馈。
                   </p>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { text: '秒级响应速度', desc: '低延迟高性能架构' },
                        { text: '多模型切换', desc: '集成 GPT-4 / Claude' },
                        { text: '上下文记忆', desc: '支持超长对话上下文' },
                        { text: '多模态交互', desc: '支持图片/语音输入' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start p-3 rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-blue-50/50 group-hover:border-blue-100 transition-colors duration-300">
                          <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{item.text}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                   </div>
                 </div>
              </div>
            </div>

            {/* Item 2: 智能创作 (Span 2) */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="p-8 h-full flex flex-col justify-between relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none"></div>

                 <div className="relative z-10">
                   <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                      <PenTool className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                   </div>

                   <h3 className="text-xl font-bold text-gray-900 mb-2">智能创作</h3>
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      文章、方案、代码一键生成，从构思到成稿，效率提升10倍以上。支持多种文体和场景。
                   </p>

                   <div className="space-y-3">
                      {['营销文案生成', '公文写作辅助', '代码自动生成'].map((item, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                           <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></div>
                           {item}
                        </div>
                      ))}
                   </div>
                 </div>
              </div>
            </div>

            {/* Item 3: AI智能绘画 (Span 2) */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group flex flex-col">
               <div className="p-8 h-full flex flex-col justify-between relative">
                 <div>
                   <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                      <Palette className="w-6 h-6 text-gray-900 transition-colors duration-300" />
                   </div>

                   <h3 className="text-xl font-bold text-gray-900 mb-2">AI智能绘画</h3>
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      集成顶级绘图模型，一句话生成精美图像，人人都是艺术家。支持文生图、图生图。
                   </p>
                 </div>

                 <div className="space-y-3 pt-4 border-t border-gray-50">
                    {['MJ/DALL-E 3模型', '高清图像生成', '多种艺术风格'].map((item, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2.5"></div>
                         {item}
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Item 4: AI技能 (Span 4) */}
            <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group">
              <div className="h-full p-8 flex flex-col justify-between relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                    <Lightbulb className="w-6 h-6 text-gray-900 transition-colors duration-300" />
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                    专业助手
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI专业技能</h3>
                  <p className="text-gray-500 font-medium mb-4 text-sm">专业领域 · 精准服务</p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm max-w-2xl">
                    预设编程、设计、营销、法律等多种专业技能模板，让AI化身各领域专家。您可以自定义技能角色，或使用我们精心调教的预设角色，为您提供专业级建议和方案。
                  </p>

                  <div className="flex flex-wrap gap-2">
                     {[
                       { name: '代码助手', icon: '💻' },
                       { name: 'UI设计顾问', icon: '🎨' },
                       { name: '营销策划', icon: '📈' },
                       { name: '法律咨询', icon: '⚖️' },
                       { name: '医学科普', icon: '🩺' },
                       { name: '语言翻译', icon: '🌍' }
                     ].map((skill, i) => (
                         <div key={i} className="flex items-center px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md group-hover:border-gray-300 transition-all duration-300">
                             <span className="mr-2 text-sm">{skill.icon}</span>
                             <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                         </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 产品优势 - 简约风格 */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[80px] opacity-60" />
          <div className="absolute top-[30%] -left-[10%] w-[30%] h-[30%] bg-indigo-50/50 rounded-full blur-[80px] opacity-60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AI智能产品优势</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              多维度产品优势，助力企业智能化升级，为您打造专属的 AI 生产力引擎
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "AI对话",
                subtitle: "智能对话",
                desc: "对接ChatAI接口，AI秒回复，让您在工作中得心应手",
                icon: MessageCircle,
                items: ["AI秒级回复", "提供精准回答和服务", "工作助手，得心应手"]
              },
              {
                title: "AI创作",
                subtitle: "智能创作",
                desc: "根据不同模型进行提问，AI会针对输入的问题进行深度创作",
                icon: PenTool,
                items: ["多模型支持", "深度创作能力", "提高创作效率"]
              },
              {
                title: "AI技能",
                subtitle: "技能模型",
                desc: "可定义不同的技能模型，技能分类得越细，AI回答得越准确",
                icon: Lightbulb,
                items: ["自定义技能模型", "精准问答匹配", "细分领域专精"]
              },
              {
                title: "VIP会员",
                subtitle: "无限使用",
                desc: "会员期间不消耗次数，可无限使用，实现运营收益",
                icon: Crown,
                items: ["无限次数使用", "会员专属权益", "转化效果好"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <div className="text-blue-600 font-medium text-sm mt-0.5">{item.subtitle}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[60px]">
                  {item.desc}
                </p>

                <ul className="space-y-3">
                  {item.items.map((subItem, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors duration-300">
                        {subItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
                艺创AI-聊天绘画系统
                <br className="hidden sm:block" />
                演示中心
              </h2>

              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                通过我们的在线演示系统，您可以亲身体验AI聊天绘画系统的强大功能和直观界面，无需安装，即刻体验。
              </p>

              <div className="bg-white shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 rounded-xl">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 flex items-center justify-center mr-2 sm:mr-3 rounded-lg">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium">
                    演示账号信息
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {DEMO_ACCOUNTS.map((account, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="mb-2 sm:mb-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">
                          {account.title}
                        </p>
                        <p className="text-xs text-blue-600 break-all sm:break-normal">
                          {account.url}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-1 sm:mr-2">
                            账号:
                          </span>
                          <span className="text-xs font-medium">
                            {account.account}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-1 sm:mr-2">
                            密码:
                          </span>
                          <span className="text-xs font-medium">
                            {account.password}
                          </span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0 rounded-lg"
                          onClick={() => window.open(account.url, "_blank")}
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
                  联系客服
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-lg min-h-[44px] sm:min-h-[48px]"
                  onClick={() => setShowQRCode(true)}
                >
                  购买授权
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
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        联系客服
                      </h3>
                      <p className="text-sm text-gray-600 mb-6">
                        扫描二维码添加客服微信
                      </p>

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
                      <p className="text-xs text-gray-500">
                        长按二维码保存到相册
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 右侧内容 */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-md lg:max-w-none">
                {/* 主要演示图 */}
                <div className="bg-white p-4 sm:p-6 shadow-lg rounded-xl">
                  <img
                    src="/product/ai.svg"
                    alt="AI聊天绘画系统演示界面"
                    className="w-full h-auto rounded-lg object-contain"
                    loading="lazy"
                  />

                  <div className="mt-3 sm:mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900">
                        聊天绘画系统管理平台
                      </h4>
                      <p className="text-xs text-gray-500">
                        一站式管理您的所有聊天绘画系统资产
                      </p>
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
                    src="/images/qrcode.png"
                    alt="演示二维码"
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded"
                  />
                  <p className="text-xs text-center mt-1 sm:mt-2 text-gray-600">
                    扫码体验移动端
                  </p>
                </div>

                {/* 装饰元素 */}
                <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-blue-600 rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
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
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-white">
                        在线演示
                      </p>
                      <p className="text-xs text-blue-100">实时体验</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* 功能特色区域左右布局 - 全面优化移动端响应式布局 */}
      <section className={`${sectionPadding} bg-white`}>
        <div className={containerBase}>
          {/* 标题区域 - 响应式优化 */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              功能特色
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
              丰富的功能特色，满足多种业务需求
            </p>
          </div>

          {/* 场景标签导航 */}
          <div className="flex justify-center mb-10 md:mb-16">
            <div className="w-full md:w-auto overflow-x-auto scrollbar-hide py-2">
              <div className="flex md:inline-flex items-center gap-3 md:gap-1.5 px-4 md:p-1.5 md:bg-gray-100 md:rounded-full md:border md:border-gray-200 min-w-max md:min-w-0 mx-auto">
                {CHAT_SCENARIO_TABS.map(tab => (
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
                    onClick={() => setActiveScenario(tab.id as keyof typeof CHAT_SCENARIO_CONTENTS)}
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
            const content = CHAT_SCENARIO_CONTENTS[activeScenario];
            return (
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100 shadow-sm animate-in fade-in-50 duration-500">
                <div className="flex flex-col xl:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
                  {/* 左侧内容区域 */}
                  <div className="w-full xl:w-1/2 space-y-4 sm:space-y-6 order-2 xl:order-1">
                    <div className="space-y-3 sm:space-y-4">
                      <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100">
                        <Users className="w-3 h-3 mr-1.5" />
                        {content.title}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {content.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {content.description}
                      </p>
                    </div>

                    {/* 功能特点列表 - 手风琴效果 */}
                    <div className="space-y-3 sm:space-y-4">
                      {content.items.map((item, index) => (
                        <div
                          key={index}
                          onMouseEnter={() => toggleScenarioAccordion(activeScenario, index)}
                          className={`rounded-xl transition-all duration-300 cursor-default ${
                            activeScenarioAccordions[activeScenario] === index
                              ? 'bg-gradient-to-br from-blue-50 to-white p-4 shadow-sm'
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
                              <h4 className={`text-sm sm:text-base font-medium transition-colors ${
                                activeScenarioAccordions[activeScenario] === index ? 'text-blue-900 font-bold' : 'text-gray-900'
                              }`}>
                                {item.title}
                              </h4>
                              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                activeScenarioAccordions[activeScenario] === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                              }`}>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed border-l-2 border-blue-200 pl-3">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 操作按钮 */}
                    <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:scale-105 w-full sm:w-auto min-h-[48px]">
                        立即体验
                      </Button>
                      <Button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 rounded-md font-medium shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:scale-105 w-full sm:w-auto min-h-[48px]">
                        下载源码
                      </Button>
                    </div>
                  </div>

                  {/* 右侧图片区域 */}
                  <div className="w-full xl:w-1/2 order-1 xl:order-2">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-200/50">
                      <img
                        src={content.image}
                        alt={content.imageAlt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                          <div className="flex items-center">
                            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                              {/* 动态图标 */}
                              {(() => {
                                const Icon = CHAT_SCENARIO_TABS.find(t => t.id === activeScenario)?.icon || Users;
                                return <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />;
                              })()}
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold text-sm sm:text-base">{content.title}解决方案</p>
                              <p className="text-gray-600 text-xs sm:text-sm">{content.description.substring(0, 15)}...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>
      {/* 功能特色区域左右布局 - 全面优化移动端响应式布局 */}


      {/* 功能特色 - Bento Grid 布局 - 现代化 UI 设计 */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-gray-900">功能特色</h2>
              <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                提供智能助手、内容创作、虚拟直播、AI对话等多维度的功能，满足不同行业的业务需求。
              </p>
            </motion.div>
          </header>

          {/* Bento Grid 容器 */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-6 lg:gap-8 auto-rows-[minmax(300px,auto)]">

            {/* AI智能对话 - 大横向卡片 (2x1) */}
            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 md:row-span-1 group relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 shadow-sm transition-all duration-500"
            >
              <div className="w-full md:w-1/2 h-48 md:h-auto bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-[280px] space-y-3 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-blue-200">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none p-3 text-xs shadow-sm border border-gray-50">
                      您好！我是AI助手，有什么可以帮您？
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-3 text-xs shadow-md">
                      帮我写一份年度总结大纲
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                      <Users className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 md:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium mb-4 w-fit">
                  核心推荐
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">AI智能对话</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  智能聊天对话，AI秒回答。对接最新ChatAI接口，深度理解用户意图，提供精准回答和服务。
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm group/btn cursor-pointer">
                  <span>立即体验</span>
                  <Check className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>

            {/* AI模型创作 - 竖向长卡片 (1x2) */}
            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 shadow-sm transition-all duration-500"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <PenTool className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI模型创作</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  根据不同模型进行提问，AI会针对输入的问题进行深度创作。可自定义技能模型，分类越细，回答越精准。
                </p>

                <div className="mt-auto space-y-4">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs font-medium text-gray-700">写歌词模型</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-3/4"></div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs font-medium text-gray-700">编程助手模型</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-1/2"></div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-8 bg-gray-900 hover:bg-black text-white rounded-2xl py-6">
                  探索模型
                </Button>
              </div>
            </motion.article>

            {/* AI绘画 - 小方卡片 (1x1) */}
            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 group bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-100 shadow-sm transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Palette className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI绘画</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  只需一句话，生成精美画作。支持 Midjourney、SD 等多种顶尖模型。
                </p>
              </div>
              <div className="flex -space-x-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                    <div className={`w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 animate-pulse delay-${i*200}`}></div>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* 营销功能 - 小方卡片 (1x1) */}
            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-1 md:row-span-1 group bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">营销闭环</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  VIP会员、优惠券挽留、多种营销工具助您提升转化与复购。
                </p>
                <div className="mt-auto bg-white/10 rounded-2xl p-3 border border-white/10 text-center text-xs font-medium">
                  查看营销工具集
                </div>
              </div>
            </motion.article>

          </div>
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
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                        />
                      </div>

                      {/* 悬浮标签 */}
                      <div className={`absolute -bottom-2 sm:-bottom-4 ${feature.layout === 'right-text' ? '-left-2 sm:-left-4' : '-right-2 sm:-right-4'} bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-4 border border-gray-100 max-w-[140px] sm:max-w-none`}>
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-8 sm:w-12 h-8 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center">
                            {feature.id === 'ai_art' ? (
                                <Palette className="h-4 sm:h-6 w-4 sm:w-6 text-blue-600" />
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
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">标准化服务流程，助您快速完成AI智能对话系统部署</p>
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

      {/* 准备好开启您的AI智能对话之旅了吗？ */}
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
                  准备好开启您的<span className="text-blue-600">AI智能对话之旅</span>了吗？
                </h3>
                <p className="text-gray-600 mb-6 text-base">
                 专为企业主、创作者打造的AI智能对话源码系统，支持多种主流模型接入，提供毫秒级响应和精准的语义理解。基于SaaS多开模式的架构设计，支持无限OEM贴牌开通站点。版本免费迭代升级+售后技术支撑，让你无后顾之忧！
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

export default ChatPage;

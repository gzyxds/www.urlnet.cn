"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Users, Bot, Play, PenTool, BarChart3, Bell, FileText } from "lucide-react";
import { usePageMetadata } from '@/hooks/use-page-metadata';
import ContactSection from "@/components/ContactSection";

// -----------------------------------------------------------------------------
// 数据常量定义
// -----------------------------------------------------------------------------

/**
 * 产品优势数据
 * 用于"产品优势"部分展示四个主要维度的优势
 */
const ADVANTAGES_DATA = [
  {
    id: 'paper',
    title: '期刊论文',
    subtitle: '高效写作',
    description: '为研究人员提供智能论文写作辅助工具',
    icon: PenTool,
    items: [
      '快速生成论文初稿和补充材料',
      '智能推荐相关研究文献',
      '自动格式化和参考文献引用'
    ]
  },
  {
    id: 'popular',
    title: '科普文章',
    subtitle: '通俗易懂',
    description: '帮助科普作家创作易于理解的科学文章',
    icon: Users,
    items: [
      '复杂概念简单化表达',
      '生动有趣的类比和示例',
      '多媒体内容智能配图'
    ]
  },
  {
    id: 'homework',
    title: '学生作业',
    subtitle: '辅助学习',
    description: '为学生提供写作指导和学习建议',
    icon: Bot,
    items: [
      '智能写作建议和指导',
      '相关参考资料推荐',
      '写作能力逐步提升'
    ]
  },
  {
    id: 'business',
    title: '商业报告',
    subtitle: '专业分析',
    description: '为企业提供专业的商业文档写作服务',
    icon: BarChart3, // 替换原有的 SVG 为 Lucide 图标，保持风格统一
    items: [
      '市场调研报告生成',
      '竞争分析报告撰写',
      '数据可视化和图表生成'
    ]
  }
];

/**
 * 场景标签页配置
 */
const SCENARIO_TABS = [
  { id: 'paper', icon: PenTool, label: '期刊论文' },
  { id: 'popular', icon: Users, label: '科普文章' },
  { id: 'homework', icon: Bot, label: '学生作业' },
  { id: 'business', icon: Play, label: '商业报告' }
];

/**
 * 场景详情内容配置
 * 包含每个场景的标题、描述、折叠面板项和图片等信息
 */
const SCENARIO_CONTENTS = {
  paper: {
    title: '期刊论文',
    description: '研究人员可以使用AI写作系统来生成论文的初稿或补充材料，显著提升研究效率，加速学术成果产出。',
    items: [
      { title: '快速生成', desc: '智能生成论文初稿和补充材料，大幅缩短写作时间' },
      { title: '文献推荐', desc: '智能推荐相关研究文献，构建完整的理论基础' },
      { title: '格式规范', desc: '自动格式化和参考文献引用，符合学术标准' }
    ],
    image: 'https://server.mddai.cn/uploads/images/20231227143956b2d246138.png',
    imageAlt: '期刊论文应用场景',
    link: 'http://paper.gmlart.cn'
  },
  popular: {
    title: '科普文章',
    description: '科普作家可以使用AI写作系统来生成易于理解的科学文章，让复杂的科学知识变得通俗易懂。',
    items: [
      { title: '简化表达', desc: '将复杂概念转化为简单易懂的表达方式' },
      { title: '生动示例', desc: '提供生动有趣的类比和实例说明' },
      { title: '智能配图', desc: '多媒体内容智能配图，增强理解效果' }
    ],
    image: 'https://server.mddai.cn/uploads/images/202312271439564e0a00449.png',
    imageAlt: '科普文章应用场景',
    link: 'http://paper.gmlart.cn'
  },
  homework: {
    title: '学生作业',
    description: '学生可以利用AI写作系统获得写作指导和参考建议，逐步提升写作能力和学术水平。',
    items: [
      { title: '写作指导', desc: '提供智能写作建议和个性化指导' },
      { title: '参考推荐', desc: '智能推荐相关参考资料和文献' },
      { title: '能力提升', desc: '循序渐进提升写作能力和学术素养' }
    ],
    image: '/images/scenarios/paper-demo.png',
    imageAlt: '学生作业应用场景',
    link: 'http://paper.gmlart.cn'
  },
  business: {
    title: '商业报告',
    description: '企业可以利用AI写作系统撰写专业的商业文档，提供精准的决策支持和深度业务洞察。',
    items: [
      { title: '市场调研', desc: '生成专业的市场调研报告和分析' },
      { title: '竞争分析', desc: '深度竞争分析报告和策略建议' },
      { title: '数据可视', desc: '智能数据可视化和图表生成' }
    ],
    image: '/images/scenarios/paper-demo.png',
    imageAlt: '商业报告应用场景',
    link: 'http://paper.gmlart.cn'
  }
};

/**
 * 核心功能模块数据
 * 对应页面下方的"智能大纲"、"一键生成"、"实时通知"三个板块
 */
const CORE_FEATURES_DATA = [
  {
    id: 'outline',
    badgeIcon: PenTool,
    badgeText: '智能大纲',
    title: '智能生成论文大纲',
    description: 'AI智能助手一键生成论文大纲！你只需要输入论文关键词，AI即可快速为您生成论文大纲，结构清晰，逻辑严密。',
    items: [
      { title: '智能生成', desc: '深度分析关键词，一键生成结构完整的论文大纲，精准把握研究主题与方向，省去繁琐构思过程。' },
      { title: '快速高效', desc: '秒级响应，实时生成，让创作不再等待。' },
      { title: '灵活修改', desc: '支持在线编辑调整，随心所欲定制您的专属大纲。' }
    ],
    image: 'https://server.mddai.cn/uploads/images/20231227143956c871a0387.png',
    imageAlt: '论文大纲生成演示',
    link: 'http://paper.gmlart.cn',
    layout: 'left-text' // 文字在左，图片在右
  },
  {
    id: 'generate',
    badgeIcon: Bot,
    badgeText: '核心能力',
    title: '一键生成万字长文',
    description: '只需几分钟，AI即可为您生成2万字长文。比传统写作更快捷高效，内容逻辑严密，引用规范，让论文写作不再困难！',
    items: [
      { title: '快速生成', desc: '依托强大的AI模型，5分钟即可生成一篇高质量的长篇论文，大幅提升写作效率。' },
      { title: '智能创作', desc: '自动匹配学术语料，确保内容的专业性与严谨性。' },
      { title: '高质内容', desc: '逻辑通顺，观点鲜明，符合学术写作规范。' }
    ],
    image: 'https://server.mddai.cn/uploads/images/20231227143956b2d246138.png',
    imageAlt: '论文生成界面',
    link: 'http://paper.gmlart.cn',
    layout: 'right-text' // 文字在右，图片在左
  },
  {
    id: 'notify',
    badgeIcon: Bell, // 使用 Bell 图标替换 SVG
    badgeText: '实时动态',
    title: '实时通知中心',
    description: '重要信息实时推送，系统更新、活动预告、成功案例及时通知，让您不错过任何重要消息。',
    items: [
      { title: '系统更新', desc: 'V2.0版本已发布，新增多项功能。实时掌握系统最新动态，享受最新技术成果。' },
      { title: '成功案例', desc: '查看最新的优秀论文案例，获取创作灵感。' },
      { title: '活动预告', desc: '第一时间获取平台优惠活动与学术讲座信息。' }
    ],
    // 注意：通知中心的右侧不是图片，而是自定义的 UI 组件，这里特殊处理
    isCustomRightContent: true,
    link: 'http://paper.gmlart.cn',
    layout: 'left-text'
  }
];

// -----------------------------------------------------------------------------
// 组件定义
// -----------------------------------------------------------------------------

/**
 * 论文写作产品页面组件
 * 展示AI论文写作系统的核心功能、应用场景和优势
 */
const PaperPage = () => {
  // ---------------------------------------------------------------------------
  // 状态管理
  // ---------------------------------------------------------------------------

  // 当前选中的应用场景 Tab
  const [activeScenario, setActiveScenario] = useState<keyof typeof SCENARIO_CONTENTS>('paper');

  // 核心功能区域的手风琴状态 (独立控制每个板块)
  const [activeCoreFeatures, setActiveCoreFeatures] = useState<Record<string, number>>({
    outline: 0,
    generate: 0,
    notify: 0
  });

  // 应用场景区域的手风琴状态 (独立控制每个场景)
  const [activeScenarioAccordions, setActiveScenarioAccordions] = useState<Record<string, number>>({
    paper: 0,
    popular: 0,
    homework: 0,
    business: 0
  });

  // ---------------------------------------------------------------------------
  // 事件处理函数
  // ---------------------------------------------------------------------------

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
   * @param section 板块ID
   * @param index 索引
   */
  const toggleCoreFeatureAccordion = (section: string, index: number) => {
    setActiveCoreFeatures(prev => ({
      ...prev,
      [section]: index
    }));
  };

  // ---------------------------------------------------------------------------
  // SEO 元数据配置
  // ---------------------------------------------------------------------------
  usePageMetadata({
    title: '艺创AI_AI论文写作系统_AI论文生成器',
    description: '艺创AI论文写作系统是一款基于人工智能的论文创作工具,支持期刊论文、科普文章、学生作业等多种写作场景,提供智能写作、参考文献引用、格式排版等功能,是学术写作的得力助手',
    keywords: 'AI论文写作系统,AI论文生成器,论文写作工具,智能写作系统,AI写作助手'
  });

  // ---------------------------------------------------------------------------
  // 渲染逻辑
  // ---------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-white">
      {/* 1. 头部横幅 (Hero Section) - 现代化大气风格重构 */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* 背景光晕效果 - 增强氛围感 */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#015bfe] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="container mx-auto px-6 pt-24 pb-24 lg:px-8 lg:pt-32 lg:pb-32">
          <div className="mx-auto lg:flex">
            {/* 左侧文字内容 - 保持原有宽度容器 */}
            <div className="max-w-2xl lg:mx-0 lg:flex-auto lg:pt-8 text-center lg:text-left relative z-10">
              {/* 徽章 */}
              <div className="mb-8 flex justify-center lg:justify-start animate-fade-in-up">
                <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-blue-600/20 bg-white/60 backdrop-blur-sm transition-all duration-300">
                  <span className="font-semibold text-blue-600 mr-2">New</span>
                  <span className="inline-block">AI 辅助论文写作系统全新上线</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.15]">
                <span className="block text-blue-600 mb-2">艺创AI</span>
                智能论文写作系统
              </h1>

              <p className="text-lg leading-8 text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
                基于先进的AI技术，提供智能化论文写作解决方案。从大纲生成到全文撰写，助力学术研究与知识创新，让写作更简单、更高效。
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-x-6">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-6 text-base shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-blue-600/40"
                  onClick={() => window.open('https://paper.gmlart.cn/', '_blank')}
                >
                  立即开始写作
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-gray-900 font-semibold gap-x-2 rounded-md px-6 py-6 text-base hover:bg-gray-50"
                  onClick={() => {
                     const demoSection = document.getElementById('demo-center'); // 假设演示中心有这个ID，后续可以加上
                     if(demoSection) demoSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Play className="w-4 h-4 text-blue-600" />
                  观看演示
                </Button>
              </div>

              {/* 数据指标 - 增加信任感 */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-x-8 border-t border-gray-100 pt-8">
                 <div>
                    <div className="text-2xl font-bold text-gray-900">10w+</div>
                    <div className="text-xs text-gray-500 mt-1">用户选择</div>
                 </div>
                 <div className="w-px h-8 bg-gray-200"></div>
                 <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-500 mt-1">好评率</div>
                 </div>
                 <div className="w-px h-8 bg-gray-200"></div>
                 <div>
                    <div className="text-2xl font-bold text-gray-900">24h</div>
                    <div className="text-xs text-gray-500 mt-1">实时服务</div>
                 </div>
              </div>
            </div>

            {/* 右侧展示图 - 参考设计：使用 Flex 布局 + 大宽度实现溢出效果 */}
            {/* 这里的图片在 lg 屏幕下会溢出 container，但由于 container 居中，它可能不会贴到屏幕最右边 */}
            {/* 如果用户希望它绝对贴到屏幕右边，我们需要把它移出 container 或者使用 absolute + right-0 (相对于 section) */}
          </div>
        </div>

        {/* 右侧展示图 - 绝对定位方案，确保贴合屏幕右边缘且完整显示 */}
        <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2 pointer-events-none z-0">
             {/* 去掉 overflow-hidden，改为 right-0 定位，确保右侧完整 */}
             {/* pr-6 留出一点空隙以显示右侧阴影和边框 */}
             <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[60rem] xl:w-[80rem] max-w-none pr-6">
                  <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 bg-white/40 backdrop-blur-sm">
                    <img
                      alt="艺创AI智能论文写作系统界面演示"
                      src="/images/scenarios/paper.png"
                      width={2432}
                      height={1442}
                      className="w-full rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
                    />
                  </div>
             </div>
        </div>

        {/* 移动端显示的图片 - 放在 container 内部或下方 */}
        <div className="lg:hidden container mx-auto px-6 pb-24">
             <div className="-m-2 rounded-xl bg-white/40 p-2 ring-1 ring-inset ring-gray-900/10 backdrop-blur-sm">
                <img
                  alt="艺创AI智能论文写作系统界面演示"
                  src="/images/scenarios/paper.png"
                  width={2432}
                  height={1442}
                  className="w-full rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
                />
             </div>
        </div>

        {/* 底部渐变遮罩 */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </section>

      {/* 2. 产品优势 (Product Advantages) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">产品优势</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">多维度产品优势，助力企业数字化升级</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {ADVANTAGES_DATA.map((item, index) => {
              // 布局策略：
              // 第一行：[大卡片(4列)] [小卡片(2列)]
              // 第二行：[小卡片(2列)] [大卡片(4列)]
              // 形成交错的视觉节奏
              const isLarge = index === 0 || index === 3;
              const colSpan = isLarge ? "md:col-span-4" : "md:col-span-2";

              return (
                <div
                  key={item.id}
                  className={cn(
                    "bg-white rounded-2xl p-6 transition-all duration-300 border border-gray-200 hover:border-blue-200 group relative overflow-hidden hover:bg-gradient-to-br hover:from-white hover:to-blue-50/80 hover:shadow-xl hover:shadow-blue-500/5",
                    colSpan
                  )}
                >
                  {/* 背景装饰圆 */}
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"></div>

                  <div className={cn("h-full relative z-10", isLarge && "lg:flex lg:gap-8 lg:items-center")}>
                    {/* 左侧/顶部：图标与标题描述 */}
                    <div className={cn("flex-1", isLarge && "lg:max-w-xs")}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
                          <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                           <div className="text-blue-600 font-semibold text-sm mt-1 bg-blue-50 inline-block px-2 py-0.5 rounded-full">{item.subtitle}</div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-base leading-relaxed line-clamp-2">{item.description}</p>
                    </div>

                    {/* 右侧/底部：特性列表 */}
                    <ul className={cn(
                      "space-y-2",
                      isLarge ? "flex-1 mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-200/50 lg:pl-8" : "mt-4 pt-4 border-t border-gray-100"
                    )}>
                      {item.items.map((subItem, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                            <Check className="h-2.5 w-2.5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium">{subItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 演示中心 (Demo Center) */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-100 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* 左侧信息 */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                在线演示
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">艺创AI论文创作系统<br />演示中心</h2>

              <p className="text-gray-600 mb-8 text-lg">
                通过我们的在线演示系统，您可以亲身体验AI论文创作系统的强大的功能和直观的界面，无需安装，即刻体验。
              </p>

              <div className="bg-white rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Play className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium">演示账号信息</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'PC前端', url: 'https://paper.gmlart.cn', user: '自行注册', pass: '自行注册' },
                    { label: '移动端', url: 'https://paper.gmlart.cn/mobile', user: '自行注册', pass: '123456' },
                    { label: '前端演示', url: 'https://paper.gmlart.cn', user: '自行注册', pass: '自行注册' }
                  ].map((demo, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="mb-2 sm:mb-0">
                        <p className="text-sm font-medium text-gray-900">{demo.label}</p>
                        <p className="text-xs text-gray-500">{demo.url}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-2">账号:</span>
                          <span className="text-xs font-medium">{demo.user}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-500 mr-2">密码:</span>
                          <span className="text-xs font-medium">{demo.pass}</span>
                        </div>
                        <Button variant="outline" size="sm" className="h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50">
                          访问
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  申请专属演示
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  联系客服
                </Button>
              </div>
            </div>

            {/* 右侧演示图 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-white p-6 rounded-xl">
                  <img
                    src="/images/scenarios/paper-demo.png"
                    alt="AI论文创作系统演示界面"
                    className="w-full rounded-lg"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">AI论文创作系统</h4>
                      <p className="text-xs text-gray-500">一站式管理您的所有论文创作任务</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl">
                  <img
                    src="/images/qrcode.png"
                    alt="演示二维码"
                    className="w-24 h-24 bg-white rounded-md"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">扫码体验移动端</p>
                </div>

                <div className="absolute -top-6 -left-6 bg-blue-600 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
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

      {/* 4. 应用场景 (Application Scenarios) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-medium mb-4">
              <span>多场景覆盖</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              应用场景
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              丰富的应用场景和解决方案，满足多种业务需求，让AI写作助手成为您的得力伙伴
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

                  <div className="mt-8">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all shadow-sm hover:shadow-md h-auto text-base"
                      onClick={() => window.open(content.link, '_blank')}
                    >
                      查看详情
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Button>
                    <Button
                      variant="outline"
                      className="ml-4 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition-all shadow-sm h-auto text-base"
                      onClick={() => window.open(content.link, '_blank')}
                    >
                      立即体验
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
                    <img
                      src={content.image}
                      alt={content.imageAlt}
                      className="w-full rounded-b-lg bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 5. 功能特色 (Feature Highlights) - Bento Grid 布局 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">功能特色</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              提供智能助手、学生作业、商业报告、期刊论文等多维度的功能，满足不同行业的业务需求。
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* 卡片1: 期刊论文 (左侧高卡片) */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-xl bg-white lg:rounded-l-2xl lg:rounded-r-none" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.75rem+1px)] lg:rounded-l-[calc(1rem+1px)] lg:rounded-r-none">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">期刊论文</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    面向文化传播、影视内容等多个行业，帮助打造期刊论文，赋能品牌营销，提升品牌心智。
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      '创建专属品牌虚拟形象',
                      '提供高质量虚拟角色',
                      '打造虚拟社交形象'
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <Check className="h-2.5 w-2.5 text-blue-600" />
                        </div>
                        <p className="text-xs text-gray-600">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative min-h-[16rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-8 bottom-0 top-10 overflow-hidden rounded-t-xl border-x border-t border-gray-200 bg-gray-50 shadow-sm">
                    {/* 模拟UI内容 */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                       <div className="bg-white rounded-lg shadow-sm p-3 h-full">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 rounded-full bg-red-400"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="w-20 h-2 bg-gray-100 rounded-full"></div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-100 rounded w-full"></div>
                            <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                            <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                            <div className="mt-4 h-24 bg-blue-50/50 rounded border border-dashed border-blue-200 flex items-center justify-center text-xs text-blue-400">
                               论文内容预览区
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-xl shadow-sm ring-1 ring-black/5 lg:rounded-l-2xl lg:rounded-r-none" />
            </div>

            {/* 卡片2: 科普文章 (中间上部) */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-xl bg-white max-lg:rounded-t-2xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.75rem+1px)] max-lg:rounded-t-[calc(1rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">科普文章</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    智能科普文章解决方案，提高工作效率，实现业务流程自动化。
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 py-6">
                  {/* 模拟UI */}
                  <div className="w-full max-w-[200px] aspect-[4/3] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100 p-3 shadow-sm rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="flex space-x-2 mb-2">
                        <div className="w-6 h-2 bg-white rounded"></div>
                        <div className="w-4 h-2 bg-white/50 rounded"></div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-1.5 bg-blue-200/50 rounded w-full"></div>
                        <div className="h-1.5 bg-blue-200/50 rounded w-5/6"></div>
                        <div className="h-1.5 bg-blue-200/50 rounded w-4/6"></div>
                      </div>
                      <div className="mt-3 flex justify-between items-end">
                         <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <Users className="w-4 h-4 text-blue-500" />
                         </div>
                         <div className="w-12 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-xl shadow-sm ring-1 ring-black/5 max-lg:rounded-t-2xl" />
            </div>

            {/* 卡片3: 学生作业 (中间下部) */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-xl bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.75rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">学生作业</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    提供智能写作指导，生成视频脚本与营销文案，提升创作质量。
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 py-6">
                   {/* 模拟UI */}
                   <div className="flex gap-4">
                      <div className="w-16 h-20 bg-blue-50 rounded-lg border border-blue-100 flex flex-col items-center justify-center shadow-sm -rotate-6 hover:rotate-0 transition-transform duration-300">
                         <div className="w-8 h-8 bg-blue-100 rounded mb-2"></div>
                         <div className="w-8 h-1 bg-blue-200 rounded"></div>
                      </div>
                      <div className="w-16 h-20 bg-purple-50 rounded-lg border border-purple-100 flex flex-col items-center justify-center shadow-sm rotate-6 hover:rotate-0 transition-transform duration-300">
                         <div className="w-8 h-8 bg-purple-100 rounded mb-2"></div>
                         <div className="w-8 h-1 bg-purple-200 rounded"></div>
                      </div>
                   </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-xl shadow-sm ring-1 ring-black/5" />
            </div>

            {/* 卡片4: 商业报告 (右侧高卡片) */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-xl bg-white lg:rounded-r-2xl lg:rounded-l-none max-lg:rounded-b-2xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(0.75rem+1px)] lg:rounded-r-[calc(1rem+1px)] lg:rounded-l-none max-lg:rounded-b-[calc(1rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">商业报告</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    提供虚拟主播解决方案，降低直播成本，提高效率。实时生成新闻内容，提供专业播报。
                  </p>
                  <ul className="mt-4 space-y-2">
                    {[
                      '24小时不间断直播',
                      '实时生成新闻内容',
                      '专业主持服务'
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <Check className="h-2.5 w-2.5 text-blue-600" />
                        </div>
                        <p className="text-xs text-gray-600">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative min-h-[16rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-8 overflow-hidden rounded-tl-xl border-t border-l border-gray-200 bg-gray-50 shadow-sm">
                    {/* 模拟UI */}
                     <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 p-5">
                        <div className="bg-white rounded-xl shadow-sm p-4 relative h-full">
                           <div className="flex justify-between items-start mb-4">
                              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                                 <BarChart3 className="w-5 h-5 text-indigo-600" />
                              </div>
                              <div className="text-xs text-gray-400">Report</div>
                           </div>
                           <div className="space-y-3">
                              <div className="flex items-end space-x-2 h-20">
                                 <div className="w-1/4 h-full bg-indigo-50 rounded-t relative group">
                                    <div className="absolute bottom-0 w-full h-[40%] bg-indigo-300 rounded-t transition-all duration-500 group-hover:h-[60%]"></div>
                                 </div>
                                 <div className="w-1/4 h-full bg-indigo-50 rounded-t relative group">
                                    <div className="absolute bottom-0 w-full h-[70%] bg-indigo-400 rounded-t transition-all duration-500 group-hover:h-[80%]"></div>
                                 </div>
                                 <div className="w-1/4 h-full bg-indigo-50 rounded-t relative group">
                                    <div className="absolute bottom-0 w-full h-[50%] bg-indigo-500 rounded-t transition-all duration-500 group-hover:h-[60%]"></div>
                                 </div>
                                 <div className="w-1/4 h-full bg-indigo-50 rounded-t relative group">
                                    <div className="absolute bottom-0 w-full h-[85%] bg-indigo-600 rounded-t transition-all duration-500 group-hover:h-[95%]"></div>
                                 </div>
                              </div>
                              <div className="h-px bg-gray-100"></div>
                              <div className="flex justify-between text-xs text-gray-500">
                                 <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-xl shadow-sm ring-1 ring-black/5 lg:rounded-r-2xl lg:rounded-l-none max-lg:rounded-b-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 产品核心功能 (Core Features) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-medium mb-4">
              <span>论文创作核心功能</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              产品核心功能
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              强大的AI技术能力，为您提供论文创作的全流程解决方案
            </p>
          </div>

          {CORE_FEATURES_DATA.map((feature) => (
            <div key={feature.id} className="mb-32 last:mb-0">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* 文本区域 */}
                <div className={`${feature.layout === 'right-text' ? 'order-2 lg:order-2 lg:pl-8' : 'order-2 lg:order-1 pt-4'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-medium mb-6">
                    <feature.badgeIcon className="w-3 h-3" />
                    <span>{feature.badgeText}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex flex-col gap-4">
                    {feature.items.map((item, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => toggleCoreFeatureAccordion(feature.id, idx)}
                        className={`rounded-xl transition-all duration-300 cursor-default ${
                          activeCoreFeatures[feature.id] === idx
                            ? 'bg-gradient-to-br from-blue-50 to-white p-4'
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
                              activeCoreFeatures[feature.id] === idx ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
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

                  <div className="mt-8">
                    <Button
                      className={`${feature.id === 'notify' ? 'hidden' : 'bg-blue-600 hover:bg-blue-700 text-white'} px-6 py-2 rounded-md transition-all shadow-sm hover:shadow-md h-auto text-base`}
                      variant={feature.id === 'notify' ? 'outline' : 'default'}
                      onClick={() => window.open(feature.link, '_blank')}
                    >
                      {feature.id === 'outline' && '立即体验'}
                      {feature.id === 'generate' && '开始智能写作'}
                      {(feature.id !== 'notify') && (
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      )}
                    </Button>

                    {feature.id === 'notify' && (
                      <Button
                        variant="outline"
                        className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md transition-all shadow-sm h-auto text-base"
                        onClick={() => window.open(feature.link, '_blank')}
                      >
                        订阅更新通知
                      </Button>
                    )}
                  </div>
                </div>

                {/* 展示区域 (图片或自定义内容) */}
                <div className={`${feature.layout === 'right-text' ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                  {feature.isCustomRightContent ? (
                    // 自定义右侧内容 (如通知中心)
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 min-h-[400px]">
                      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                        <h4 className="font-bold text-xl text-gray-900">通知中心</h4>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <Bell className="w-4 h-4 text-gray-500" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 transition-all hover:bg-blue-50">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm mb-1">系统更新通知 V2.0</p>
                              <p className="text-xs text-gray-500 leading-relaxed">由于系统升级，我们将在今晚进行维护...</p>
                              <p className="text-[10px] text-gray-400 mt-2">10分钟前</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-gray-100 transition-all hover:bg-gray-50 hover:border-gray-200">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <Check className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm mb-1">论文生成成功</p>
                              <p className="text-xs text-gray-500 leading-relaxed">您的论文《人工智能在...》已生成完成。</p>
                              <p className="text-[10px] text-gray-400 mt-2">1小时前</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-gray-100 transition-all hover:bg-gray-50 hover:border-gray-200 opacity-60">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <Bell className="w-4 h-4 text-gray-500" />
                            </div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm mb-1">会员到期提醒</p>
                              <p className="text-xs text-gray-500 leading-relaxed">您的会员服务即将到期，请及时续费。</p>
                              <p className="text-[10px] text-gray-400 mt-2">1天前</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // 默认图片展示
                    <div className="relative bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
                      <div className="h-6 bg-gray-50 rounded-t-lg flex items-center px-4 space-x-1.5 border-b border-gray-100 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                      </div>
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full rounded-b-lg bg-gray-50"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. 底部 CTA (Call to Action) */}
      <div className="mt-24 container mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden relative border border-gray-200">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
              <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
              <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
              <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            <div className="md:col-span-3 p-8 md:p-12 relative z-10">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  准备好开启您的<span className="text-blue-600">AI论文创作服务</span>了吗？
                </h3>
                <p className="text-gray-600 mb-6 text-base">
                  这是一款智能写作辅助系统，只需输入关键词即可快速生成文章大纲和内容。系统操作简单，
                  能够在短时间内生成高质量的文章。适用于论文写作、科普创作、学生作业等多种场景，
                  帮助您节省写作时间，提高创作效率。
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { title: '高清还原', desc: '100%真实感官体验' },
                    { title: '专业服务', desc: '7×24小时技术支持' },
                    { title: '数据安全', desc: '企业级安全保障' },
                    { title: '持续更新', desc: '定期功能迭代升级' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-2">
                        <Check className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-medium">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-lg">
                    立即体验
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-lg">
                    咨询价格
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 relative hidden md:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-6 flex items-center">
                  <div className="bg-gray-50 rounded-2xl w-full h-full p-4">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {[
                        { icon: FileText, title: '论文创作', desc: '专业的论文创作服务' },
                        { icon: Bot, title: '私有部署', desc: '安全可控的私有化部署' },
                        { icon: Users, title: '专业团队', desc: '一对一技术支持' },
                        { icon: Play, title: '开源方案', desc: '灵活定制，售后无忧' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-3 flex flex-col items-center justify-center">
                          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                            <item.icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <h4 className="text-gray-900 font-medium text-lg">{item.title}</h4>
                          <p className="text-gray-500 text-sm text-center mt-1">{item.desc}</p>
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

export default PaperPage;

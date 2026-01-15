"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Code, Handshake, Target, CheckCircle, Phone, MessageCircle, FileText, Settings, Check } from "lucide-react";
import { Link } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/use-page-metadata';
import ContactSection from "@/components/ContactSection";

/**
 * 合作类型配置
 */
const COOPERATION_TYPES = [
  {
    title: "渠道合作",
    subtitle: "携手共创AI未来",
    description: "成为艺创AI的合作伙伴，共享数字化转型红利",
    icon: <Handshake className="h-8 w-8" />,
    features: [
      "享受超低折扣",
      "享受艺创AI全系列AI产品折扣优惠",
      "AI创业项目好帮手"
    ],
    link: "/cooperation/channel",
    className: "lg:col-span-1"
  },
  {
    title: "外包合作",
    subtitle: "专业定制开发",
    description: "艺创AI外包定制开发合作，你有AI技术我们分配开发新项目",
    icon: <Code className="h-8 w-8" />,
    features: [
      "定制化开发方案",
      "专业技术团队支持",
      "项目质量保证"
    ],
    link: "/cooperation/outsource",
    className: "lg:col-span-1"
  },
  {
    title: "产品共创",
    subtitle: "共创AI产品",
    description: "AI时代机会多，共创更符合市场的AI产品",
    icon: <Target className="h-8 w-8" />,
    features: [
      "市场导向的产品设计",
      "技术资源共享",
      "收益分成模式"
    ],
    link: "/cooperation/product",
    className: "lg:col-span-1"
  },
  {
    title: "专业服务",
    subtitle: "完善服务支持",
    description: "提供完善的服务支持，助力合作伙伴快速成长",
    icon: <Settings className="h-8 w-8" />,
    features: [
      "一对一专属服务",
      "技术培训支持",
      "营销推广协助"
    ],
    link: "/cooperation/service",
    className: "lg:col-span-1"
  }
];

/**
 * 合作优势配置
 */
const ADVANTAGES = [
  {
    title: "合作共赢",
    description: "成为合作伙伴的优势",
    content: "加入艺创AI合作伙伴计划，共享AI时代发展红利，携手开创数字化未来",
    icon: <Users className="h-6 w-6 text-blue-600" />
  },
  {
    title: "技术领先",
    description: "前沿AI技术",
    content: "拥有业界领先的AI技术栈，为合作伙伴提供强大的技术支撑",
    icon: <Code className="h-6 w-6 text-blue-600" />
  },
  {
    title: "市场广阔",
    description: "巨大市场潜力",
    content: "AI市场前景广阔，合作伙伴可享受巨大的市场发展空间",
    icon: <Target className="h-6 w-6 text-blue-600" />
  },
  {
    title: "收益丰厚",
    description: "可观收益回报",
    content: "提供有竞争力的佣金结构和收益分成模式，确保合作伙伴获得丰厚回报",
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />
  }
];

/**
 * 合作流程步骤配置
 */
const PROCESS_STEPS = [
  { id: '01', title: '初步咨询', desc: '通过电话或微信联系我们，了解合作方式和详情' },
  { id: '02', title: '需求对接', desc: '我们的专业团队将与您深入沟通，了解您的具体需求' },
  { id: '03', title: '方案制定', desc: '根据您的需求，我们提供定制化的合作方案' },
  { id: '04', title: '正式合作', desc: '签订合作协议，开启共赢合作之旅' }
];

/**
 * CTA 特性列表
 */
const CTA_FEATURES = [
  { title: '品牌背书', desc: '艺创AI品牌深度赋能' },
  { title: '技术扶持', desc: '全方位的AI技术输出' },
  { title: '营销支持', desc: '成熟的营销物料与方案' },
  { title: '售后保障', desc: '专业售后团队全程护航' }
];

/**
 * CTA 右侧卡片配置
 */
const CTA_RIGHT_CARDS = [
  {
    title: '渠道合作',
    desc: '超低折扣，创业好帮手',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: '私有化部署',
    desc: '安全可控的专属方案',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    title: '专业团队',
    desc: '一对一技术支撑',
    iconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    title: '共创模式',
    desc: '资源共享，利益分成',
    iconPath: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
  }
];

const AgencyPage = () => {
  // 设置代理页面元数据
  usePageMetadata({
    title: '代理合作 - 合作伙伴与渠道代理 | 艺创AI',
    description: '艺创AI代理合作中心，提供渠道合作、外包合作、产品共创等全方位合作服务。携手共创AI未来，共享数字化转型红利。',
    keywords: '代理合作,渠道合作,外包合作,产品共创,合作伙伴,AI技术,数字化转型'
  });

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* 顶部横幅 */}
        <section className="relative py-16 md:py-32 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100 overflow-hidden">
          {/* 装饰背景 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px] animate-blob" />
            <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-600/5 rounded-full blur-[100px] animate-blob animation-delay-2000" />
            <div className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-blue-400/5 rounded-full blur-[110px] animate-blob animation-delay-4000" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight text-primary">
                  代理合作
                </h1>
                <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4 md:px-0">
                  携手共创AI未来，成为艺创AI的合作伙伴，共享数字化转型红利。提供渠道合作、外包合作、产品共创等全方位合作模式。
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
                  <Button size="lg" className="rounded-xl px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    立即咨询
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-xl px-8 w-full sm:w-auto">
                    查看合作方案
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 合作优势 - Bento Grid 风格 */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">合作共赢</h2>
              <p className="text-base md:text-lg text-muted-foreground">加入艺创AI合作伙伴计划，共享AI时代发展红利</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {ADVANTAGES.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-full p-6 md:p-8 rounded-xl border border-border/50 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {advantage.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{advantage.title}</h3>
                    <p className="text-xs md:text-sm text-primary font-medium mb-2 md:mb-3">{advantage.description}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 合作类型 */}
        <section className="py-16 md:py-24 bg-slate-50/50">
          <div className="container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">合作类型</h2>
              <p className="text-base md:text-lg text-muted-foreground">选择最适合您的合作方式，开启AI业务之旅</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {COOPERATION_TYPES.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <div className="flex flex-col gap-4 md:gap-6 mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900">{type.title}</h3>
                          <p className="text-primary text-xs md:text-sm font-medium">{type.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                        {type.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-4 h-4 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="h-2.5 w-2.5 text-green-600" />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full h-11 md:h-12 text-sm font-medium rounded-lg group/btn mt-auto"
                        variant="outline"
                        asChild
                      >
                        <Link to={type.link}>
                          了解详情
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 合作流程 */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="container relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">合作流程</h2>
              <p className="text-base md:text-lg text-muted-foreground">简单四步，快速开启合作之旅</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {/* 连接线 - 仅在桌面端显示 */}
              <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-gray-100 -translate-y-[60px]" />

              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <div className="text-center group">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 relative group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-500">
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 md:w-6 md:h-6 bg-primary text-white text-[9px] md:text-[10px] font-bold rounded-full flex items-center justify-center">
                        {step.id}
                      </span>
                      {index === 0 && <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                      {index === 1 && <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                      {index === 2 && <FileText className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                      {index === 3 && <Handshake className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 现代化 CTA 区块 */}
        <section className="py-16 md:py-24 bg-slate-50/50 overflow-hidden">
          <div className="container">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xl shadow-gray-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 md:p-16 lg:p-20 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                        准备好开启
                        <span className="text-primary">合作共赢</span>之旅了吗？
                      </h2>
                      <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-10 leading-relaxed">
                        加入艺创AI合作伙伴计划，我们将为您提供全方位的技术支撑、品牌赋能和市场支持，助您在AI时代抢占先机。
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-10">
                        {CTA_FEATURES.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 flex items-center justify-center rounded-lg mr-3 flex-shrink-0">
                              <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="text-gray-900 font-bold text-xs md:text-sm">{feature.title}</h4>
                              <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">{feature.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="rounded-lg px-8 h-12 md:h-14 text-sm md:text-base font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 group w-full sm:w-auto">
                          立即申请合作
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-lg px-8 h-12 md:h-14 text-sm md:text-base font-bold border-2 hover:bg-gray-50 w-full sm:w-auto">
                          获取方案文档
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  <div className="bg-slate-50 p-6 md:p-16 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                    <div className="grid grid-cols-2 gap-3 md:gap-4 w-full relative z-10">
                      {CTA_RIGHT_CARDS.map((card, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-bold text-xs md:text-sm mb-1">{card.title}</h4>
                          <p className="text-gray-500 text-[9px] md:text-[10px] leading-tight">{card.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ContactSection />
      </main>
    </>
  );
};

export default AgencyPage;

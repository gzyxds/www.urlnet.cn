"use client";

import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Phone, Mail, ShieldCheck, Headphones, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePageMetadata } from '@/hooks/use-page-metadata';
import ContactSection from "@/components/ContactSection";

const ServicePage = () => {
  usePageMetadata({
    title: '支持与服务 - AI系统源码 | 艺创AI',
    description: '艺创AI提供专业的售前及售后服务，助力您轻松开启上云之旅。提供24/7技术支持、在线客服、电话支持等多种服务方式。',
    keywords: '支持与服务,AI系统源码,云服务,技术支持,在线客服,售前咨询,售后服务'
  });

  return (
    <div className="min-h-screen bg-white">

      {/* 支持与服务横幅 - 现代化简约设计 */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-slate-50/50">
        {/* 背景装饰 - 结合网格与光晕 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--primary)/0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

          {/* 动态漂浮元素 */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-[80px]"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-[5%] w-48 h-48 bg-blue-400/10 rounded-full blur-[60px]"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
            {/* 左侧内容区域 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col justify-center space-y-8 text-center lg:text-left"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm mx-auto lg:mx-0"
                >
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                  <span className="text-sm font-medium text-primary">专业服务支持体系</span>
                </motion.div>

                <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                  全方位助力<br />
                  <span className="text-primary">开启 AI 创新之旅</span>
                </h1>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  艺创提供专业的售前咨询及售后技术保障，为您提供 7×24 小时的管家式服务，确保您的业务平稳高效运行。
                </p>
              </div>

              {/* 服务特色列表 */}
              <div className="space-y-4 pt-2">
                {[
                  "专业的售前及售后服务团队",
                  "专业技术团队提供全方位支持",
                  "7×24小时全天候技术保障"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 justify-center lg:justify-start"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  立即咨询专家
                </Button>
                <Button variant="outline" className="px-8 py-6 text-base font-semibold rounded-xl border-slate-200 hover:bg-slate-50 transition-all">
                  查看服务文档
                </Button>
              </div>
            </motion.div>

            {/* 右侧卡片组 */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "在线客服",
                    subtitle: "24/7全天候在线",
                    icon: MessageSquare,
                    metric: "98%",
                    label: "响应速度",
                    progress: 98,
                    color: "primary"
                  },
                  {
                    title: "技术支持",
                    subtitle: "专业技术团队",
                    icon: ShieldCheck,
                    metric: "99%",
                    label: "满意度",
                    progress: 99,
                    color: "blue"
                  },
                  {
                    title: "电话支持",
                    subtitle: "即时响应服务",
                    icon: Phone,
                    metric: "30s",
                    label: "平均响应",
                    progress: 85,
                    color: "indigo"
                  },
                  {
                    title: "邮件支持",
                    subtitle: "详细问题解答",
                    icon: Mail,
                    metric: "2h",
                    label: "响应时间",
                    progress: 90,
                    color: "slate"
                  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-slate-200/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <card.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{card.title}</h3>
                        <p className="text-xs text-primary font-medium">{card.subtitle}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-sm text-slate-500 font-medium">{card.label}</span>
                        <span className="text-2xl font-bold text-slate-900">{card.metric}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${card.progress}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 装饰性背景光晕 */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 售前咨询 - 现代化简约设计 */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        {/* 背景装饰 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_0%_50%,hsl(var(--primary)/0.03),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">售前咨询</h2>
              <p className="text-lg text-slate-600">多种咨询方式，专业团队为您提供全方位的产品咨询与技术建议。</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                title: "在线咨询",
                desc: "获取产品 Advisor 的专业帮助，快速解答您的产品疑惑。我们的在线客服团队经过专业培训，能够针对您的业务场景提供最精准的建议。",
                tag: "即时响应",
                metric: "<30s",
                metricLabel: "响应时间",
                icon: MessageSquare,
                progress: 95,
                className: "md:col-span-2"
              },
              {
                id: "02",
                title: "售前电话",
                desc: "专业顾问一对一服务，深度解答产品疑问。",
                tag: "7×24小时",
                metric: "400-850-0030",
                metricLabel: "服务热线",
                icon: Phone,
                progress: 100,
                className: "md:col-span-1"
              },
              {
                id: "03",
                title: "咨询工单",
                desc: "提交详细问题描述，专业技术团队提供完整解决方案。",
                tag: "全程跟踪",
                metric: "24h内",
                metricLabel: "处理时效",
                icon: FileText,
                progress: 92,
                className: "md:col-span-1"
              },
              {
                id: "04",
                title: "建议与投诉",
                desc: "聆听您对艺创产品与服务的建议和投诉。您的每一条反馈都是我们进步的动力，我们承诺对所有有效投诉在 24 小时内给出初步处理方案。",
                tag: "持续改进",
                metric: "多渠道",
                metricLabel: "反馈渠道",
                icon: Headphones,
                progress: 100,
                className: "md:col-span-2"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "group p-8 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500",
                  item.className
                )}
              >
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-4xl font-black text-slate-200/50 group-hover:text-primary/10 transition-colors">{item.id}</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">{item.tag}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-6 mt-auto border-t border-slate-200/50 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">{item.metricLabel}</span>
                      <span className="text-base font-bold text-slate-900">{item.metric}</span>
                    </div>
                    <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 底部行动条 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
            <div className="relative z-10 space-y-2 text-center md:text-left">
              <h4 className="text-2xl font-bold">需要更深入的咨询？</h4>
              <p className="text-slate-400">我们的专家团队随时待命，为您提供 1 对 1 的深度技术支持。</p>
            </div>
            <Button className="relative z-10 bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105">
              立即预约专家
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 售后服务 - 现代化简约设计 */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,hsl(var(--primary)/0.05),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">售后服务</h2>
              <p className="text-lg text-slate-600">极速响应，专业保障。我们为您提供多维度的售后技术支持。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                <span className="text-sm font-medium text-slate-700">技术团队 7×24h 在线</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                title: "在线客服",
                desc: "秒级解答，为您匹配合适的人工服务，提供最佳解决方案。我们的智能调度系统能根据问题类型自动分配最擅长该领域的工程师。",
                tag: "秒级响应",
                metric: "<30s",
                metricLabel: "平均响应",
                image: "https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/7ca0080e43fbff5b_1637162855791.png",
                progress: 95,
                className: "md:col-span-2"
              },
              {
                id: "02",
                title: "售后工单",
                desc: "提交技术难题，专业工程师全程跟踪直至问题解决。",
                tag: "全程跟踪",
                metric: "1h内",
                metricLabel: "受理时间",
                image: "https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/16109cf69762df98_1637162865915.png",
                progress: 98,
                className: "md:col-span-1"
              },
              {
                id: "03",
                title: "技术支持",
                desc: "深度技术指导，协助您完成复杂的系统配置与优化。",
                tag: "专家指导",
                metric: "99.9%",
                metricLabel: "解决率",
                image: "https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/8d460c0a2c958d4c_1637162882349.png",
                progress: 100,
                className: "md:col-span-1"
              },
              {
                id: "04",
                title: "专家坐席",
                desc: "为尊贵客户提供专属技术专家，优先处理各类咨询。专属专家将深度参与您的业务架构规划，提供从开发到上线的全流程技术保驾护航。",
                tag: "专属服务",
                metric: "1对1",
                metricLabel: "服务模式",
                image: "https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/e6b94abc619cbc69_1637162873769.png",
                progress: 100,
                className: "md:col-span-2"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500",
                  item.className
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-slate-900 shadow-lg">
                    {item.id}
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <span className="text-[10px] font-bold text-primary px-2 py-1 bg-primary/5 rounded-lg border border-primary/10 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-medium">{item.metricLabel}</span>
                      <span className="text-base font-bold text-slate-900">{item.metric}</span>
                    </div>
                    <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ServicePage;

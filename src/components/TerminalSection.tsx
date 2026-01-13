'use client';

import { motion } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Command,
  Zap,
  ShieldCheck,
  Rocket,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Terminal Section (Bento Grid 风格重构 - 现代抽象版)
 *
 * @description
 * 展示产品覆盖的终端矩阵。
 * 采用 Bento Grid 布局，参考 AdvantagesSection 的设计语言。
 * 使用抽象图标、渐变背景和语义化色彩，避免模拟具体界面。
 */
const Terminal = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden" id="terminal">
      {/* 极光背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 头部区域 */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            全端覆盖
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            一次开发，<span className="text-primary mx-2 relative inline-block">
              <span className="relative z-10">多端同步</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -rotate-1 z-0" />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            全面覆盖主流终端平台，为用户提供一致的优质体验，数据实时互通
          </motion.p>
        </div>

        {/* Bento Grid 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* 1. 微信生态 (大卡片) - 占据 2 列 */}
          <motion.div
            className="md:col-span-2 relative group rounded-3xl bg-gradient-to-br from-green-500/5 to-card border border-border/80 p-8 lg:p-10 overflow-hidden hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/10 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">微信生态</h3>
              <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
                无缝对接公众号、小程序及企业微信，利用社交裂变快速获客，触达 10 亿+ 用户。
              </p>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: MessageCircle, label: '公众号', color: 'text-green-500' },
                  { icon: Command, label: '小程序', color: 'text-green-600' },
                  { icon: Zap, label: '企微', color: 'text-green-400' }
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 border border-border/50">
                    <item.icon className={cn('w-8 h-8', item.color)} />
                    <span className="text-sm font-medium text-foreground/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. PC/Web 端 (中卡片) */}
          <motion.div
            className="md:col-span-1 relative group rounded-3xl bg-card border border-border/80 p-8 hover:border-blue-500/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:rotate-12 transition-transform duration-500">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">桌面端</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              专业级桌面应用体验，配合响应式设计，支持 PC & Web 双端访问。
            </p>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
              <Globe className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">跨平台兼容</span>
            </div>
          </motion.div>

          {/* 3. 管理后台 (中卡片) */}
          <motion.div
            className="md:col-span-1 relative group rounded-3xl bg-card border border-border/80 p-8 hover:border-purple-500/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform duration-500">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">智能管理</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              可视化数据大屏，精细化权限控制，支持多维度数据分析。
            </p>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
              <ShieldCheck className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">企业级安全</span>
            </div>
          </motion.div>

          {/* 4. 原生 APP (大卡片) - 占据 2 列 */}
          <motion.div
            className="md:col-span-2 relative group rounded-3xl bg-gradient-to-br from-orange-500/5 to-card border border-border/80 p-8 lg:p-10 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-500">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">原生 APP</h3>
              <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
                iOS 与 Android 双端原生应用即将发布，提供流畅的原生体验和离线能力。
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border/50">
                  <Rocket className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-foreground/80">Coming Soon</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 border border-border/50">
                  <Layers className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-foreground/80">跨平台框架</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;

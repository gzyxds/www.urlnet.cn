"use client";


import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Globe,
  LayoutDashboard,
  MessageCircle,
  Command
} from "lucide-react";
import { cn } from "@/lib/utils";

const Terminal = () => {
  const platforms = [
    {
      icon: MessageCircle,
      title: "微信公众号",
      desc: "无缝对接微信生态，触达海量用户"
    },
    {
      icon: Globe,
      title: "H5浏览器",
      desc: "跨平台Web体验，随时随地访问"
    },
    {
      icon: Command,
      title: "微信小程序",
      desc: "即用即走，原生级的流畅体验"
    },
    {
      icon: Monitor,
      title: "PC端",
      desc: "专业桌面应用，极致生产力工具"
    },
    {
      icon: LayoutDashboard,
      title: "管理平台",
      desc: "全功能后台管理，数据一目了然"
    },
    {
      icon: Smartphone,
      title: "APP（即将发布）",
      desc: "原生移动应用，极致性能体验"
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-background overflow-hidden" id="terminal">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              全端覆盖
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">
              艺创AI产品终端矩阵
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              一次开发，多端同步。全面覆盖主流终端平台，
              为用户提供一致的优质体验，数据实时互通。
            </p>
          </motion.div>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <div className="h-full bg-card border border-border/50 hover:border-primary/20 rounded-2xl p-4 lg:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                  <platform.icon className="w-6 h-6 lg:w-7 lg:h-7 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-sm lg:text-lg font-bold text-foreground mb-1 lg:mb-2 group-hover:text-primary transition-colors">
                    {platform.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {platform.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terminal;

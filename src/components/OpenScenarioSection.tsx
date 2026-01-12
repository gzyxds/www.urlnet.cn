'use client';

import React from 'react';
import { Code, Cpu, Building2, MessageCircle, BarChart3 } from 'lucide-react';

interface ScenarioItem {
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  colSpan: string;
  gradientClass: string;
}

const scenarios: ScenarioItem[] = [
  {
    title: 'Admin 后台管理系统',
    subtitle: '开源',
    desc: '完整开源的企业级后台管理系统，支持权限管理、数据统计、系统配置等功能。代码结构清晰，二次开发便捷，助力快速搭建管理平台。',
    icon: <Building2 className="h-6 w-6 text-primary" />,
    colSpan: 'lg:col-span-3',
    gradientClass: 'bg-gradient-to-br from-primary/5 via-primary/3 to-background border-primary/20 dark:border-primary/10'
  },
  {
    title: 'PC Web 端应用',
    subtitle: '开源',
    desc: '基于现代前端技术栈的 PC Web 端应用，响应式设计适配各种屏幕。完整的组件库和工具函数，开箱即用，快速构建企业级应用。',
    icon: <Code className="h-6 w-6 text-primary" />,
    colSpan: 'lg:col-span-3',
    gradientClass: 'bg-gradient-to-br from-primary/5 via-primary/3 to-background border-primary/20 dark:border-primary/10'
  },
  {
    title: 'Server 服务端',
    subtitle: '开源',
    desc: '高性能 API 服务端，提供完整的接口文档和数据库设计。支持 RESTful API，易于扩展和维护，满足企业级应用需求。',
    icon: <Cpu className="h-6 w-6 text-primary" />,
    colSpan: 'lg:col-span-2',
    gradientClass: 'bg-gradient-to-br from-primary/5 via-primary/3 to-background border-primary/20 dark:border-primary/10'
  },
  {
    title: 'UniApp 移动端',
    subtitle: '开源',
    desc: '基于 UniApp 开发的跨平台移动应用，一套代码多端运行。支持 iOS、Android、H5，完整的 UI 组件和业务逻辑，快速发布移动应用。',
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    colSpan: 'lg:col-span-2',
    gradientClass: 'bg-gradient-to-br from-primary/5 via-primary/3 to-background border-primary/20 dark:border-primary/10'
  },
  {
    title: '全栈开源生态',
    subtitle: '开源',
    desc: '涵盖前端、后端、移动端的完整开源解决方案。代码完全公开，支持私有化部署，可自由定制和商用，打造专属的 AI 智能化平台。',
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    colSpan: 'lg:col-span-2',
    gradientClass: 'bg-gradient-to-br from-primary/5 via-primary/3 to-background border-primary/20 dark:border-primary/10'
  }
];

const OpenScenarioSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/80 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-500/8 dark:to-purple-500/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-to-br from-cyan-200/30 to-emerald-200/30 dark:from-cyan-500/8 dark:to-emerald-500/8 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold text-primary leading-7">完整开源生态</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            全栈开源 AI 智能化解决方案
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Admin + PC + Server + UniApp 四大核心模块，代码完全开放，支持私有化部署与二次开发
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
          {scenarios.map((item, index) => (
            <div
              key={index}
              className={`${item.colSpan} relative group transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* 卡片背景与边框 (渐变 + 毛玻璃) */}
              <div className={`absolute inset-0 rounded-2xl border backdrop-blur-xl shadow-sm transition-all duration-300 opacity-80 group-hover:opacity-100 ${item.gradientClass}`}></div>

              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-8">
                {/* 头部：图标与标签 */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 bg-card shadow-sm group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    {item.subtitle}
                  </span>
                </div>

                {/* 内容区域 */}
                <div className="flex flex-col grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenScenarioSection;

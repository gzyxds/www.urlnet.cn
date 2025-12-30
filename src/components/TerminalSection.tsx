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
  Rocket
} from 'lucide-react';

/**
 * Terminal Section (Bento Grid 风格重构 - 清新配色版)
 *
 * @description
 * 展示产品覆盖的终端矩阵。
 * 采用 Bento Grid 布局，配色调整为简洁清新的 Blue/Slate/Gray 色系。
 * 保持视觉的一致性和专业感，去除过于鲜艳的色彩。
 */
const Terminal = () => {
  return (
    <div className="bg-white py-24 sm:py-32" id="terminal">
      <div className="container mx-auto px-6 lg:px-8">

        {/* 头部区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            全端覆盖
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            一次开发，多端同步
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            全面覆盖主流终端平台，为用户提供一致的优质体验，数据实时互通。
          </p>
        </div>

        {/* Bento Grid 布局 */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">

          {/* 1. 微信生态 (大卡片) - col-span-4 */}
          <div className="flex p-px lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-900/5 lg:rounded-tl-[2rem]"
            >
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-white to-slate-100 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]"></div>
                 <div className="relative flex gap-8 items-end">
                    <div className="w-32 h-48 bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex flex-col items-center justify-center transform -rotate-6 translate-y-4">
                        <MessageCircle className="w-12 h-12 text-blue-500 mb-2" />
                        <span className="text-sm font-medium text-slate-600">公众号</span>
                    </div>
                    <div className="w-32 h-56 bg-white rounded-xl shadow-xl border border-slate-100 p-4 flex flex-col items-center justify-center transform rotate-3 z-10">
                        <Command className="w-12 h-12 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-slate-600">小程序</span>
                    </div>
                    <div className="w-32 h-40 bg-white rounded-xl shadow-md border border-slate-100 p-4 flex flex-col items-center justify-center transform rotate-12 translate-y-8">
                        <Zap className="w-10 h-10 text-blue-400 mb-2" />
                        <span className="text-sm font-medium text-slate-600">企业微信</span>
                    </div>
                 </div>
              </div>
              <div className="p-10">
                <h3 className="text-sm font-semibold leading-6 text-blue-600">微信生态全覆盖</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-900">触达 10 亿+ 活跃用户</p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                  无缝对接公众号、小程序及企业微信，利用社交裂变快速获客，提供原生级的流畅体验。
                </p>
              </div>
            </motion.div>
          </div>

          {/* 2. PC/Web 端 (中卡片) - col-span-2 */}
          <div className="flex p-px lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-900/5 lg:rounded-tr-[2rem]"
            >
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-blue-50/50 to-slate-100 relative">
                  <Monitor className="w-32 h-32 text-slate-400/80 drop-shadow-xl" />
                  <div className="absolute bottom-10 right-10 bg-white p-3 rounded-lg shadow-md ring-1 ring-slate-900/5">
                      <Globe className="w-8 h-8 text-blue-500" />
                  </div>
              </div>
              <div className="p-10">
                <h3 className="text-sm font-semibold leading-6 text-blue-600">桌面生产力</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-900">PC & Web 双端</p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                  专业级桌面应用体验，配合响应式 Web 设计，随时随地高效办公。
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3. 管理后台 (中卡片) - col-span-2 */}
          <div className="flex p-px lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-900/5 lg:rounded-bl-[2rem]"
            >
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-slate-100 to-gray-50">
                  <div className="grid grid-cols-2 gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center"><LayoutDashboard className="w-6 h-6 text-slate-600"/></div>
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center"><ShieldCheck className="w-6 h-6 text-blue-600"/></div>
                      <div className="col-span-2 h-2 bg-slate-100 rounded-full mt-2 w-full">
                          <div className="h-full w-2/3 bg-slate-400 rounded-full"></div>
                      </div>
                      <div className="col-span-2 h-2 bg-slate-100 rounded-full w-full">
                           <div className="h-full w-1/2 bg-blue-400 rounded-full"></div>
                      </div>
                  </div>
              </div>
              <div className="p-10">
                <h3 className="text-sm font-semibold leading-6 text-blue-600">智能管理</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-900">全功能管理后台</p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                  可视化数据大屏，精细化权限控制，运营数据一目了然。
                </p>
              </div>
            </motion.div>
          </div>

          {/* 4. 原生 APP (大卡片) - col-span-4 */}
          <div className="flex p-px lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-900/5 lg:rounded-br-[2rem]"
            >
              <div className="flex h-80 items-center justify-center bg-gradient-to-br from-white to-slate-100 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                 <div className="relative">
                    <Smartphone className="w-40 h-40 text-slate-400 stroke-[1.2]" />
                    <div className="absolute -right-8 -bottom-4 bg-white px-4 py-2 rounded-full shadow-lg ring-1 ring-slate-900/5 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-bold text-slate-700">Coming Soon</span>
                    </div>
                 </div>
              </div>
              <div className="p-10">
                <h3 className="text-sm font-semibold leading-6 text-blue-600">移动优先</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-slate-900">原生 APP 体验</p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                  iOS 与 Android 双端原生应用即将发布，带来极致的性能表现和系统级交互体验。
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terminal;

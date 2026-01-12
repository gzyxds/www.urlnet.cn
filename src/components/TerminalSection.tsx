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
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32" id="terminal">
      <div className="container mx-auto px-6 lg:px-8">

        {/* 头部区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            全端覆盖
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-100 sm:text-4xl">
            一次开发，多端同步
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-gray-400">
            全面覆盖主流终端平台，为用户提供一致的优质体验，数据实时互通。
          </p>
        </div>

        {/* Bento Grid 布局 */}
        <div className="mt-10 grid grid-cols-6 gap-3 sm:gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">

          {/* 1. 微信生态 (大卡片) - col-span-4 */}
          <div className="flex p-px col-span-4 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-slate-50 dark:bg-gray-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-gray-700/50 lg:rounded-tl-[2rem]"
            >
              <div className="flex h-40 sm:h-60 lg:h-80 items-center justify-center bg-gradient-to-br from-white to-slate-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]"></div>
                 <div className="relative flex gap-2 lg:gap-8 items-end scale-75 lg:scale-100 origin-bottom">
                    <div className="w-20 h-32 lg:w-32 lg:h-48 bg-white dark:bg-gray-700 rounded-lg lg:rounded-xl shadow-lg border border-slate-100 dark:border-gray-600 p-2 lg:p-4 flex flex-col items-center justify-center transform -rotate-6 translate-y-2 lg:translate-y-4">
                        <MessageCircle className="w-6 h-6 lg:w-12 lg:h-12 text-blue-500 dark:text-blue-400 mb-1 lg:mb-2" />
                        <span className="text-[10px] lg:text-sm font-medium text-slate-600 dark:text-gray-300">公众号</span>
                    </div>
                    <div className="w-20 h-36 lg:w-32 lg:h-56 bg-white dark:bg-gray-700 rounded-lg lg:rounded-xl shadow-xl border border-slate-100 dark:border-gray-600 p-2 lg:p-4 flex flex-col items-center justify-center transform rotate-3 z-10">
                        <Command className="w-6 h-6 lg:w-12 lg:h-12 text-blue-600 dark:text-blue-400 mb-1 lg:mb-2" />
                        <span className="text-[10px] lg:text-sm font-medium text-slate-600 dark:text-gray-300">小程序</span>
                    </div>
                    <div className="w-20 h-28 lg:w-32 lg:h-40 bg-white dark:bg-gray-700 rounded-lg lg:rounded-xl shadow-md border border-slate-100 dark:border-gray-600 p-2 lg:p-4 flex flex-col items-center justify-center transform rotate-12 translate-y-4 lg:translate-y-8">
                        <Zap className="w-5 h-5 lg:w-10 lg:h-10 text-blue-400 dark:text-blue-300 mb-1 lg:mb-2" />
                        <span className="text-[10px] lg:text-sm font-medium text-slate-600 dark:text-gray-300">企微</span>
                    </div>
                 </div>
              </div>
              <div className="p-4 lg:p-10">
                <h3 className="text-xs lg:text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">微信生态</h3>
                <p className="mt-1 lg:mt-2 text-sm lg:text-lg font-medium tracking-tight text-slate-900 dark:text-gray-100">触达 10 亿+ 用户</p>
                <p className="mt-1 lg:mt-2 max-w-lg text-xs lg:text-sm leading-5 lg:leading-6 text-slate-600 dark:text-gray-400 line-clamp-2 lg:line-clamp-none">
                  无缝对接公众号、小程序及企业微信，利用社交裂变快速获客。
                </p>
              </div>
            </motion.div>
          </div>

          {/* 2. PC/Web 端 (中卡片) - col-span-2 */}
          <div className="flex p-px col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-slate-50 dark:bg-gray-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-gray-700/50 lg:rounded-tr-[2rem]"
            >
              <div className="flex h-40 sm:h-60 lg:h-80 items-center justify-center bg-gradient-to-br from-blue-50/50 to-slate-100 dark:from-gray-800 dark:to-gray-900 relative">
                  <Monitor className="w-16 h-16 lg:w-32 lg:h-32 text-slate-400 dark:text-gray-500 drop-shadow-xl" />
                  <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 bg-white dark:bg-gray-700 p-1.5 lg:p-3 rounded-lg shadow-md ring-1 ring-slate-900/5 dark:ring-gray-600/50">
                      <Globe className="w-4 h-4 lg:w-8 lg:h-8 text-blue-500 dark:text-blue-400" />
                  </div>
              </div>
              <div className="p-4 lg:p-10">
                <h3 className="text-xs lg:text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">桌面端</h3>
                <p className="mt-1 lg:mt-2 text-sm lg:text-lg font-medium tracking-tight text-slate-900 dark:text-gray-100">PC & Web</p>
                <p className="mt-1 lg:mt-2 max-w-lg text-xs lg:text-sm leading-5 lg:leading-6 text-slate-600 dark:text-gray-400 line-clamp-2 lg:line-clamp-none">
                  专业级桌面应用体验，配合响应式设计。
                </p>
              </div>
            </motion.div>
          </div>

          {/* 3. 管理后台 (中卡片) - col-span-2 */}
          <div className="flex p-px col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-slate-50 dark:bg-gray-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-gray-700/50 lg:rounded-bl-[2rem]"
            >
              <div className="flex h-40 sm:h-60 lg:h-80 items-center justify-center bg-gradient-to-br from-slate-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <div className="grid grid-cols-2 gap-1.5 lg:gap-3 p-3 lg:p-6 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/60 dark:border-gray-600/60 shadow-sm scale-90 lg:scale-100">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-slate-100 dark:bg-gray-600 rounded-md lg:rounded-lg flex items-center justify-center"><LayoutDashboard className="w-4 h-4 lg:w-6 lg:h-6 text-slate-600 dark:text-gray-300"/></div>
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-blue-50 dark:bg-blue-900/50 rounded-md lg:rounded-lg flex items-center justify-center"><ShieldCheck className="w-4 h-4 lg:w-6 lg:h-6 text-blue-600 dark:text-blue-400"/></div>
                      <div className="col-span-2 h-1.5 lg:h-2 bg-slate-100 dark:bg-gray-600 rounded-full mt-1 lg:mt-2 w-full">
                          <div className="h-full w-2/3 bg-slate-400 dark:bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="col-span-2 h-1.5 lg:h-2 bg-slate-100 dark:bg-gray-600 rounded-full w-full">
                           <div className="h-full w-1/2 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
                      </div>
                  </div>
              </div>
              <div className="p-4 lg:p-10">
                <h3 className="text-xs lg:text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">智能管理</h3>
                <p className="mt-1 lg:mt-2 text-sm lg:text-lg font-medium tracking-tight text-slate-900 dark:text-gray-100">管理后台</p>
                <p className="mt-1 lg:mt-2 max-w-lg text-xs lg:text-sm leading-5 lg:leading-6 text-slate-600 dark:text-gray-400 line-clamp-2 lg:line-clamp-none">
                  可视化数据大屏，精细化权限控制。
                </p>
              </div>
            </motion.div>
          </div>

          {/* 4. 原生 APP (大卡片) - col-span-4 */}
          <div className="flex p-px col-span-4 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-slate-50 dark:bg-gray-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-gray-700/50 lg:rounded-br-[2rem]"
            >
              <div className="flex h-40 sm:h-60 lg:h-80 items-center justify-center bg-gradient-to-br from-white to-slate-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:12px_12px] lg:bg-[size:24px_24px]"></div>
                 <div className="relative">
                    <Smartphone className="w-20 h-20 lg:w-40 lg:h-40 text-slate-400 dark:text-gray-500 stroke-[1.2]" />
                    <div className="absolute -right-4 -bottom-2 lg:-right-8 lg:-bottom-4 bg-white dark:bg-gray-700 px-2 py-1 lg:px-4 lg:py-2 rounded-full shadow-lg ring-1 ring-slate-900/5 dark:ring-gray-600/50 flex items-center gap-1 lg:gap-2">
                        <Rocket className="w-3 h-3 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-[10px] lg:text-sm font-bold text-slate-700 dark:text-gray-200 whitespace-nowrap">Coming Soon</span>
                    </div>
                 </div>
              </div>
              <div className="p-4 lg:p-10">
                <h3 className="text-xs lg:text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400">移动优先</h3>
                <p className="mt-1 lg:mt-2 text-sm lg:text-lg font-medium tracking-tight text-slate-900 dark:text-gray-100">原生 APP</p>
                <p className="mt-1 lg:mt-2 max-w-lg text-xs lg:text-sm leading-5 lg:leading-6 text-slate-600 dark:text-gray-400 line-clamp-2 lg:line-clamp-none">
                  iOS 与 Android 双端原生应用即将发布。
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

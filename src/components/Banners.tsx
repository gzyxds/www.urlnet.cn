'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * 顶部通告栏组件 (Banners)
 *
 * @description
 * 这是一个全局通告栏组件，用于显示重要的通知、活动或更新信息。
 *
 * 功能特点：
 * 1. 支持手动关闭，点击右侧关闭按钮隐藏。
 * 2. 使用 Framer Motion 实现平滑的进出场动画。
 * 3. 响应式设计，适配移动端和桌面端。
 * 4. 使用项目主色 (primary) 作为背景色。
 *
 * @returns {JSX.Element | null} 返回 Banner 组件的 JSX，如果被关闭则返回 null
 */
export default function Banners() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      <AnimatePresence>
        {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative isolate flex items-center gap-x-6 overflow-hidden bg-primary px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
        >
          {/* 背景装饰效果 (可选，此处保留纯色以匹配参考设计) */}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-white">
              <button onClick={() => window.dispatchEvent(new CustomEvent('showQRCodeModal'))} className="flex items-center gap-x-1 hover:text-white/90 transition-colors text-left">
                <strong className="font-semibold">NEW 2026</strong>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                BuidAI企业级开源智能体平台，官人认证的技术专家，部署搭建服务，活动价仅需500￥点击立即咨询。
                <span aria-hidden="true">&nbsp;&rarr;</span>
              </button>
            </p>
          </div>

          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px] hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsVisible(false)}
            >
              <span className="sr-only">关闭通知</span>
              <X className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}

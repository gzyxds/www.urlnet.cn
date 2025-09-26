'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  CreditCardIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

/**
 * 自定义CSS样式，用于隐藏滚动条和优化移动端体验
 */
const customStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .text-ellipsis-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

/**
 * POS机功能标签页数据
 * 包含六个核心功能分类：聚合收款|数字经营|营销功能|POS机收银|收银硬件|支付通道|
 */
const posFeatures = {
  aggregatePayment: {
    id: 'aggregatePayment',
    name: '聚合收款',
    icon: QrCodeIcon,
    title: '聚合收款解决方案',
    description: '整合多种支付方式，为商户提供一站式收款服务',
    features: [
      { name: '多渠道收款', desc: '支持微信、支付宝、银联云闪付等主流支付方式' },
      { name: '聚合码牌', desc: '一码收全款，支持所有主流扫码支付' },
      { name: '实时到账', desc: '7×24小时实时到账，资金周转更灵活' },
    ],
    model: '聚合收款系统',
    image: '/images/screenshots/Accordion.svg',
  },
  digitalBusiness: {
    id: 'digitalBusiness',
    name: '数字经营',
    icon: ChartBarIcon,
    title: '数字化经营管理',
    description: '通过数据分析和智能工具，助力商户数字化转型升级',
    features: [
      { name: '经营分析', desc: '深度分析交易数据，提供经营洞察和建议' },
      { name: '客户管理', desc: '智能客户画像，精准营销和客户维护' },
      { name: '库存管理', desc: '实时库存监控，智能补货提醒' },
    ],
    model: '数字经营平台',
    image: '/images/screenshots/internet.svg',
  },
  marketing: {
    id: 'marketing',
    name: '营销功能',
    icon: UserGroupIcon,
    title: '智能营销工具',
    description: '丰富的营销工具和活动模板，助力商户提升销售业绩',
    features: [
      { name: '优惠券营销', desc: '多样化优惠券模板，灵活设置营销活动' },
      { name: '会员积分', desc: '完善的会员体系，积分兑换增强客户粘性' },
      { name: '拼团秒杀', desc: '社交电商功能，拼团秒杀提升销量' },
    ],
    model: '营销管理系统',
    image: '/images/screenshots/Accordion1.svg',
  },
  posCashier: {
    id: 'posCashier',
    name: 'POS机收银',
    icon: CreditCardIcon,
    title: 'POS机收银系统',
    description: '专业的POS收银解决方案，支持多种支付方式和业务场景',
    features: [
      { name: '刷卡收款', desc: '支持银联卡、信用卡、借记卡等传统刷卡支付' },
      { name: '电签功能', desc: '电子签名确认，无纸化交易更环保' },
      { name: '小票打印', desc: '自动打印交易小票，完整交易记录' },
    ],
    model: 'POS收银终端',
    image: '/images/screenshots/Accordion2.svg',
  },
  cashierHardware: {
    id: 'cashierHardware',
    name: '收银硬件',
    icon: DevicePhoneMobileIcon,
    title: '收银硬件设备',
    description: '提供全套收银硬件设备，满足不同规模商户的收银需求',
    features: [
      { name: '智能POS机', desc: 'Android系统智能POS，支持多种应用扩展' },
      { name: '扫码枪', desc: '高精度扫码设备，快速识别商品条码' },
      { name: '钱箱打印机', desc: '收银钱箱和热敏打印机，完整收银配套' },
    ],
    model: '收银硬件套装',
    image: '/images/screenshots/Accordion3.svg',
  },
  paymentChannel: {
    id: 'paymentChannel',
    name: '支付通道',
    icon: ShieldCheckIcon,
    title: '支付通道服务',
    description: '稳定可靠的支付通道，确保交易安全和资金安全',
    features: [
      { name: '一清机保障', desc: '央行牌照一清机，资金安全有保障' },
      { name: '多通道备份', desc: '多个支付通道备份，确保交易成功率' },
      { name: '风控系统', desc: '智能风控系统，实时监控异常交易' },
    ],
    model: '支付通道平台',
    image: '/images/screenshots/Accordion.svg',
  },
}

/**
 * POS机功能展示标签页组件
 * 采用标签页布局展示POS机功能
 * 支持响应式设计和交互动画效果
 * @returns POS机功能标签页组件
 */
export function PosFeatureTabs() {
  const [activeTab, setActiveTab] = useState('aggregatePayment')
  const currentFeature = posFeatures[activeTab as keyof typeof posFeatures]

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#F7F9FC' }}
    >
      <style jsx>{customStyles}</style>
      <div className="mx-auto max-w-[1800px] px-3 lg:px-4">
        {/* 标题区域 */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16 lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 sm:mb-6 sm:px-4 md:mb-8">
            <span className="h-2 w-2 rounded-full bg-[#0052D9]"></span>
            <span className="text-xs font-semibold tracking-wide text-[#0052D9] sm:text-sm">
              智能收银解决方案
            </span>
          </div>
          <div className="space-y-4">
            <h2 className="relative mx-auto max-w-4xl px-2 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-[#05f]">
                全方位智能收银系统
              </span>
              <span>助力商户</span>
              <span>
                业务增长
              </span>
              <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-100 blur-xl opacity-60 sm:-left-4 sm:h-6 sm:w-6 md:h-8 md:w-8"></div>
              <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-orange-100 blur-xl opacity-60 sm:-right-4 sm:h-6 sm:w-6 md:h-8 md:w-8"></div>
            </h2>
            <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              从收银、支付到经营分析，打造一站式数字化经营平台，让每一笔交易都创造更大价值
            </p>
          </div>
        </div>

        {/* 标签导航栏 - 多端适配设计 */}
        <div className="mb-4 md:mb-6">
          {/* 移动端：水平滚动布局 */}
          <div className="overflow-x-auto scrollbar-hide md:hidden">
            <div className="flex gap-2 pb-2" style={{ minWidth: 'max-content' }}>
              {Object.values(posFeatures).map((feature) => {
                const IconComponent = feature.icon
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveTab(feature.id)
                    }}
                    className={`flex-shrink-0 rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 sm:px-4 sm:text-sm ${
                        activeTab === feature.id
                          ? 'bg-[#0052D9] text-white'
                          : 'bg-[#f3f5f8] text-gray-700 hover:bg-[#e8ecf0]'
                      }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      userSelect: 'none',
                      minWidth: 'fit-content',
                      background: activeTab === feature.id ? '#0052D9' : 'linear-gradient(180deg,#f3f5f8,#fff)'
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-2">
                      <IconComponent className="h-4 w-4 sm:h-4 sm:w-4" />
                      <span className="whitespace-nowrap">{feature.name}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 平板端及以上：水平布局 */}
          <div className="hidden w-full gap-2 md:flex lg:gap-3">
            {Object.values(posFeatures).map((feature) => {
              const IconComponent = feature.icon
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex-1 rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 md:px-6 md:py-4 flex items-center justify-center gap-2 md:gap-3 ${
                      activeTab === feature.id
                        ? 'bg-[#0052D9] text-white'
                        : 'bg-[#f3f5f8] text-gray-700 hover:bg-[#e8ecf0]'
                    }`}
                  style={{
                    background: activeTab === feature.id ? '#0052D9' : 'linear-gradient(180deg,#f3f5f8,#fff)'
                  }}
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0 md:h-5 md:w-5" />
                  <span className="whitespace-nowrap">{feature.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 标签内容区域 */}
        <div className="grid grid-cols-1 gap-4">
          <div className="transition-all duration-300 ease-out">
            <div
              className="group flex min-h-[200px] transform flex-col items-center gap-4 overflow-hidden rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] transition-all duration-300 hover:-translate-y-1 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 p-3 sm:min-h-[250px] sm:p-4 md:min-h-[300px] md:gap-4 md:p-4 lg:min-h-[350px] lg:flex-row lg:gap-6 lg:p-6 xl:gap-10"
              style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)'}}
            >
              {/* 左侧文字内容 */}
              <div className="order-2 flex w-full flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 lg:order-1 lg:w-2/5">
                {/* 主标题 */}
                <div className="space-y-1 sm:space-y-2">
                  <h3
                    className="text-lg leading-tight font-bold tracking-tight sm:text-xl md:text-2xl lg:text-3xl text-blue-600"
                    style={{ lineHeight: '1.2' }}
                  >
                    {currentFeature.title}
                  </h3>
                  <p
                    className="max-w-lg text-sm leading-relaxed sm:text-base md:text-lg"
                    style={{ color: 'rgba(12,13,14,0.65)', lineHeight: '1.6' }}
                  >
                    {currentFeature.description}
                  </p>
                </div>

                {/* 功能特性列表 */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {currentFeature.features.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-2 sm:gap-3"
                    >
                      <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#0052D9] transition-transform duration-200 group-hover:scale-110 sm:mt-2 sm:h-2.5 sm:w-2.5"></div>
                      <div className="flex-1 space-y-1">
                        <div
                          className="text-sm font-semibold sm:text-base md:text-lg"
                          style={{
                            color: 'rgba(12,13,14,0.9)',
                            lineHeight: '1.4',
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          className="text-xs leading-relaxed sm:text-sm md:text-base"
                          style={{
                            color: 'rgba(12,13,14,0.6)',
                            lineHeight: '1.5',
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 相关服务标签 */}
                <div className="inline-flex w-fit items-center rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] px-2 py-1"
            style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)'}}>
                  <span
                    className="text-xs font-medium"
                    style={{ color: 'rgba(12,13,14,0.7)' }}
                  >
                    相关服务：{currentFeature.model}
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] px-2 py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:-translate-y-1 sm:px-4 sm:py-2 md:text-sm"
                    style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)'}}
                  >
                    <span className="truncate">查看详情</span>
                    <svg
                      className="ml-1 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] px-2 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 sm:px-4 sm:py-2 md:text-sm"
                    style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)', color: '#0052D9'}}
                  >
                    <span className="truncate">立即申请</span>
                    <svg
                      className="ml-1 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* 右侧模拟界面展示 */}
              <div className="order-1 mt-6 hidden w-full items-center justify-center px-2 sm:px-4 lg:order-2 lg:mt-0 lg:flex lg:w-3/5 lg:justify-end lg:px-0">
                <div className="group flex h-48 w-full max-w-xs transform flex-col overflow-hidden rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 p-2 sm:h-56 sm:max-w-sm sm:p-3 md:h-72 md:max-w-md md:p-4 lg:h-96 lg:max-w-lg lg:p-6 xl:h-[420px] xl:max-w-xl xl:p-8"
                  style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)'}}>
                  {/* 模拟界面头部 */}
                  <div className="mb-1 flex items-center justify-between sm:mb-2 md:mb-3 lg:mb-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                    </div>
                    <div className="ml-2 truncate font-mono text-xs text-gray-500 sm:text-sm">
                      {currentFeature.model}
                    </div>
                  </div>

                  {/* 模拟界面内容 */}
                  <div className="flex flex-col min-h-0 space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4">
                    {/* 标题栏 */}
                    <div className="mb-1 flex items-center gap-1 sm:mb-2 sm:gap-2 md:mb-3 md:gap-3">
                      <currentFeature.icon className="h-4 w-4 flex-shrink-0 text-[#0052D9] sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                      <div className="truncate text-xs font-bold text-gray-800 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        {currentFeature.name}控制台
                      </div>
                    </div>

                    {/* 功能模块卡片 */}
                    <div className="flex-1 min-h-0 grid grid-cols-1 gap-1 overflow-y-auto sm:gap-1 md:gap-2 max-h-[180px] sm:max-h-[220px] md:max-h-[280px] lg:max-h-[340px] xl:max-h-[380px]">
                      {currentFeature.features
                        .slice(0, 4)
                        .map((item, index) => (
                          <div
                    key={index}
                    className="group transform overflow-hidden rounded-none border-2 border-white shadow-[0_1px_4px_#dce0e8] transition-all duration-300 hover:-translate-y-1 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 p-1 sm:p-2 md:p-3"
                    style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)'}}>
                            <div className="flex items-center justify-between">
                              <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-2">
                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0052D9] transition-transform duration-200 group-hover:scale-110 sm:h-2 sm:w-2"></div>
                                <span className="truncate text-xs font-medium text-gray-700 sm:text-sm">
                                  {item.name}
                                </span>
                              </div>
                              <div className="ml-1 flex flex-shrink-0 items-center gap-1 sm:ml-2">
                                <div className="h-1 w-1 animate-pulse rounded-full bg-green-400 sm:h-1.5 sm:w-1.5"></div>
                                <span className="hidden text-xs font-medium text-green-600 md:inline lg:hidden xl:inline">
                                  运行中
                                </span>
                              </div>
                            </div>
                            <div className="mt-1 text-xs text-gray-500 sm:mt-2 line-clamp-3">
                              {item.desc}
                            </div>
                            {/* 模拟进度条 */}
                            <div className="mt-1 sm:mt-2">
                              <div className="h-0.5 w-full bg-gray-200 sm:h-1">
                                <div
                                  className="h-0.5 bg-[#0052D9] transition-all duration-1000 ease-out sm:h-1"
                                  style={{ width: `${75 + index * 8}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* 底部状态栏 */}
                    <div className="flex-shrink-0 mt-1 border-t border-gray-200 pt-1 sm:mt-2 sm:pt-2 md:mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                          <span className="text-gray-600">系统正常</span>
                        </div>
                        <div className="ml-1 flex-shrink-0 text-xs text-gray-500 sm:ml-2">
                          <span className="hidden lg:inline xl:hidden">
                            交易: 45笔
                          </span>
                          <span className="hidden xl:inline">
                            交易: 45笔 | 金额: 6.2万 |{' '}
                          </span>
                          <span>状态: 正常</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * POS机功能展示组件 - 主导出组件
 * 展示POS机产品的功能特性，采用标签页交互设计
 * 提供现代化的用户体验
 * @returns POS机功能展示区块
 */
export function Accordion() {
  return (
    <section id="pos-features" aria-label="POS机功能特性展示">
      <PosFeatureTabs />
    </section>
  )
}

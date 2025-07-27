import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/back-to-top'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI企业网站',
  description: '专业的AI技术服务平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
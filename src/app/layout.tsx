import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI企业网站',
  description: '专业的AI技术服务平台',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
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
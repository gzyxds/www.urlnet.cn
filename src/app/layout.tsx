import './globals.css'
import BackToTop from '@/components/BackToTop'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        {children}
        <BackToTop />
      </body>
    </html>
  )
}

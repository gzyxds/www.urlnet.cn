"use client";
import {
  Mail,
  MessageCircle,
  Phone,
  ArrowRight,
  QrCode,
  Clock,
  Copy,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@aitech.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden" id="contact">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              联系我们
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">
              随时为您提供帮助
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              无论是业务咨询、技术支持还是合作洽谈，我们都期待与您的交流。
            </p>
          </motion.div>
        </div>

        {/* Bento Grid 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 1. 核心联系 (大卡片) - 微信/公众号 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 bg-card border border-border/50 rounded-xl p-8 relative overflow-hidden group hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />

            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">扫码快速联系</h3>
                  <p className="text-sm text-muted-foreground">微信扫一扫，直连人工客服</p>
                </div>
              </div>

              <div className="flex-1 flex flex-row items-center justify-center gap-4 md:gap-8 py-4 md:py-8">
                {/* 微信客服二维码 */}
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white p-2 md:p-3 rounded-2xl shadow-sm border border-border/50 group-hover:scale-105 transition-transform duration-500">
                    <img src="/images/qrcode.png" alt="微信客服" className="w-full h-full object-contain rounded-xl" />
                    {/* 扫描线动画 */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-scan" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-foreground text-sm md:text-base">客服微信</p>
                    <p className="text-xs text-muted-foreground mt-0.5 md:mt-1">USERHLIC</p>
                  </div>
                </div>

                {/* 公众号二维码 */}
                <div className="flex flex-col items-center gap-2 md:gap-4">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white p-2 md:p-3 rounded-2xl shadow-sm border border-border/50 group-hover:scale-105 transition-transform duration-500 delay-75">
                    <img src="/product/wchatpay.png" alt="公众号" className="w-full h-full object-contain rounded-xl" />
                    {/* 扫描线动画 */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                      <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] animate-scan animation-delay-2000" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-foreground text-sm md:text-base">公众号</p>
                    <p className="text-xs text-muted-foreground mt-0.5 md:mt-1">最新资讯获取</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. 在线咨询 (高亮 CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-primary to-blue-600 rounded-xl p-8 relative overflow-hidden group text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2 text-blue-100">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">在线客服</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">有疑问需要解答？</h3>
                <p className="text-blue-100 max-w-sm">我们的专业团队在线为您提供即时帮助，解决您的任何技术或业务问题。</p>
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 border-0 shadow-lg shadow-black/10 shrink-0 rounded-xl group-hover:scale-105 transition-transform">
                立即咨询
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* 3. 电话咨询 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">电话咨询</h3>
            <p className="text-2xl font-bold text-foreground mb-2 tracking-tight">400-123-4567</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>周一至周五 9:00-18:00</span>
            </div>
          </motion.div>

          {/* 4. 邮件沟通 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer"
            onClick={copyEmail}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold text-foreground">商务合作</h3>
              {copied ? (
                <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> 已复制
                </span>
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3 break-all">contact@aitech.com</p>
            <p className="text-xs text-muted-foreground">通常在 24 小时内回复</p>
          </motion.div>



        </div>
      </div>
    </section>
  );
};

export default Contact;

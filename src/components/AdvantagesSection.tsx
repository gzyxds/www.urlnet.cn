"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users, Check, ArrowRight } from "lucide-react";

const Advantages = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden" id="advantages">
      {/* 极光背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 头部区域 */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            核心优势
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            全方位<span className="text-primary mx-2 relative inline-block">
              <span className="relative z-10">智能赋能</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -rotate-1 z-0" />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            融合前沿算法与工程化实践，打造企业级 AI 基础设施
          </motion.p>
        </div>

        {/* Bento Grid 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mb-24">
          {/* 主要特性卡片 - 占据较大空间 */}
          <motion.div
            className="md:col-span-2 relative group rounded-3xl bg-card border border-border/50 p-8 lg:p-10 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">丰富模型矩阵</h3>
              <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
                集成 DeepSeek-R1、Qwen3、ERNIE4.5 等主流大模型，支持文本生成、多模态理解及视频创作，为不同业务场景提供最佳模型选型。
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['DeepSeek', 'Qwen-Max', 'Flux.1', 'Claude 3.5', 'GPT-4o', 'Midjourney'].map((tag) => (
                  <div key={tag} className="px-4 py-2 rounded-lg bg-muted/50 text-sm font-medium text-foreground/80 border border-border/50 text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 右侧垂直卡片 */}
          <motion.div
            className="md:col-span-1 md:row-span-2 relative group rounded-3xl bg-gradient-to-b from-primary/5 to-card border border-border/50 p-8 flex flex-col hover:shadow-xl transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:rotate-12 transition-transform duration-500">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">企业级安全部署</h3>
            <p className="text-muted-foreground mb-8 flex-grow">
              提供私有化部署方案，确保数据主权。支持数据加密、访问控制及合规审计，满足金融级安全标准。
            </p>
            <div className="relative h-40 mt-auto rounded-xl bg-background/50 border border-border/50 overflow-hidden">
              <div className="absolute inset-x-4 top-4 bottom-0 space-y-3 opacity-50">
                <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
                <div className="h-2 w-1/2 bg-primary/20 rounded-full" />
                <div className="h-2 w-full bg-primary/20 rounded-full" />
                <div className="h-2 w-2/3 bg-primary/20 rounded-full" />
              </div>
              {/* 扫描动画效果 */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-full w-full animate-scan" />
            </div>
          </motion.div>

          {/* 下方两个小卡片 */}
          <motion.div
            className="md:col-span-1 relative group rounded-3xl bg-card border border-border/50 p-8 hover:border-primary/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">极速响应</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              全球边缘节点加速，Token 生成速度提升 300%，首字延迟低于 200ms。
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-1 relative group rounded-3xl bg-card border border-border/50 p-8 hover:border-primary/30 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">弹性成本</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              按需付费与预留实例结合，通过错峰调度引擎降低 40% 推理成本。
            </p>
          </motion.div>
        </div>

        {/* 底部 CTA 区域 */}
        <motion.div
          className="relative rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground shadow-2xl shadow-primary/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-2 gap-12 p-10 md:p-16 relative z-10 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Why Choose Us
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                不仅是技术提供商<br/>更是您的<span className="text-white/80">增长合作伙伴</span>
              </h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {["5年+ 行业积淀", "99.9% SLA", "7x24h 专家支持"].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="group inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                立即咨询
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="hidden lg:block relative">
              <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-6 relative overflow-hidden">
                {/* 模拟代码界面 */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="space-y-3 font-mono text-sm opacity-80">
                  <div className="flex gap-4">
                    <span className="text-blue-300">import</span>
                    <span className="text-white">AI_SDK</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-purple-300">const</span>
                    <span className="text-white">client = new AI_SDK.Client();</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-purple-300">await</span>
                    <span className="text-white">client.generate({`{`}</span>
                  </div>
                  <div className="pl-8 text-green-300">model: "deepseek-r1",</div>
                  <div className="pl-8 text-green-300">prompt: "Analyze Q3 data..."</div>
                  <div className="text-white">{`});`}</div>
                </div>

                {/* 浮动卡片装饰 */}
                <div className="absolute -bottom-4 -right-4 bg-white text-primary p-4 rounded-xl shadow-lg animate-bounce-slow">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">Efficiency</div>
                  <div className="text-2xl font-bold">+185%</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;

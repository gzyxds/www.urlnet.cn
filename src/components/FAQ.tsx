"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Laptop, GraduationCap, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const faqs = [
    {
      icon: Laptop,
      question: "你们开发AI系统的周期是多久?",
      answer: "开发周期主要取决于项目规模和复杂度。标准版系统通常可在 3-7 个工作日内完成部署和配置；定制化开发项目通常需要 2-4 周。我们会提供详细的项目排期表，确保按时交付。",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Shield,
      question: "你们的AI模型对接的哪些模型?",
      answer: "我们支持多模型混合调度，包括 OpenAI (GPT-4/3.5)、Claude、文心一言、通义千问等主流大模型。系统会自动根据任务类型选择最合适的模型，既保证效果又优化成本。",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Zap,
      question: "你们的AI系统可以接入哪些平台?",
      answer: "我们提供全渠道接入方案，支持微信公众号、小程序、企业微信、钉钉、飞书等主流平台。同时提供标准 RESTful API 和 SDK，可快速集成到您现有的网站或 APP 中。",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: GraduationCap,
      question: "你们训练AI模型的时间需要多久?",
      answer: "模型训练时间取决于数据量。一般来说，企业知识库的微调训练可在数小时内完成。对于特定领域的深度定制模型，我们采用增量训练技术，通常在 1-3 天内即可完成迭代。",
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden" id="faq">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              常见疑问
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">
              解答您的疑惑
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              我们整理了客户最关心的问题，希望能帮助您更好地了解我们的服务。
              如果这里没有您想要的答案，欢迎随时联系我们。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-card border border-border/50 hover:border-primary/20 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110", faq.bg)}>
                    <faq.icon className={cn("w-6 h-6", faq.color)} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground pt-2 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-16">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-3xl p-8 md:p-12 border border-blue-100 dark:border-blue-900 text-center relative overflow-hidden">
            {/* 装饰光效 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-foreground">还有其他问题?</h3>
              <p className="text-muted-foreground mb-8 mx-auto">
                如果您有任何其他问题或需要更详细的信息，我们的专业团队随时为您提供帮助。
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 rounded-xl"
                  onClick={() => window.location.href = "mailto:contact@aitech.com"}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  发送邮件咨询
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background hover:bg-accent border-primary/20 text-primary hover:text-primary rounded-xl"
                  onClick={() => window.location.href = "tel:+8610012345678"}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  电话联系我们
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

'use client';

import { motion } from 'framer-motion';

/**
 * FAQ 组件
 *
 * @description
 * 采用左右布局的常见问题解答组件。
 * 左侧展示标题和描述，右侧展示问题列表。
 * 参考了现代极简设计风格，使用 Grid 布局实现响应式适配。
 */
const FAQ = () => {
  const faqs = [
    {
      question: "你们开发AI系统的周期是多久?",
      answer: "开发周期主要取决于项目规模和复杂度。标准版系统通常可在 3-7 个工作日内完成部署和配置；定制化开发项目通常需要 2-4 周。我们会提供详细的项目排期表，确保按时交付。"
    },
    {
      question: "你们的AI模型对接的哪些模型?",
      answer: "我们支持多模型混合调度，包括 OpenAI (GPT-4/3.5)、Claude、文心一言、通义千问等主流大模型。系统会自动根据任务类型选择最合适的模型，既保证效果又优化成本。"
    },
    {
      question: "你们的AI系统可以接入哪些平台?",
      answer: "我们提供全渠道接入方案，支持微信公众号、小程序、企业微信、钉钉、飞书等主流平台。同时提供标准 RESTful API 和 SDK，可快速集成到您现有的网站或 APP 中。"
    },
    {
      question: "你们训练AI模型的时间需要多久?",
      answer: "模型训练时间取决于数据量。一般来说，企业知识库的微调训练可在数小时内完成。对于特定领域的深度定制模型，我们采用增量训练技术，通常在 1-3 天内即可完成迭代。"
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32" id="faq">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">

          {/* 左侧：标题与描述 */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                常见问题解答
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                找不到您想要的答案？请联系我们的{' '}
                <a href="#" className="font-semibold text-primary hover:text-primary/80">
                  客户支持
                </a>{' '}
                团队。
              </p>
            </motion.div>
          </div>

          {/* 右侧：问题列表 */}
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

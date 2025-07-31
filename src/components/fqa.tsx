"use client";

import React from 'react';
import { motion } from "framer-motion";
import { CircleHelp, CircleCheck, Zap, Shield, Laptop, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      icon: <Laptop className="h-5 w-5 text-[#015bfe]" />,
      question: "你们开发AI系统的周期是多久?",
      answer: "一般根据你的项目大小和难易程度决定，一般都在个人工作日内可以完成很多工作，当然这里不包括定制开发。"
    },
    {
      icon: <Shield className="h-5 w-5 text-[#015bfe]" />,
      question: "你们的AI模型对接的哪些模型?",
      answer: "我们接入OpenAI官方最新接口，访问速度非常快，支持GPT4.0和GPT3.5，国内大语言模型如ChatGLM我们也是支持的。"
    },
    {
      icon: <Zap className="h-5 w-5 text-[#015bfe]" />,
      question: "你们的AI系统可以接入哪些平台?",
      answer: "主流的软件我们基本都能接入，比如企业微信、钉钉、飞书、微信公众号等或者你自己的App也可以。"
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-[#015bfe]" />,
      question: "你们训练AI模型的时间需要多久?",
      answer: "这个需要根据您提供的训练资料决定，根据你提供的训练资料才可以决定你的训练时间和学习过程。"
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <CircleHelp className="h-10 w-10 text-[#015bfe]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
            <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              以下是我们客户经常问的一些问题，如果您有其他疑问，请随时联系我们
            </p>
          </motion.div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-[#015bfe]/10 flex items-center justify-center mr-3">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <p className="text-gray-600 pl-11">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 p-8 shadow-sm"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">还有其他问题?</h3>
              <p className="text-gray-600">
                如果您有任何其他问题或需要更详细的信息，请随时联系我们的客户服务团队
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:contact@aitech.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#015bfe] text-white hover:bg-blue-700 transition-colors"
              >
                发送邮件咨询
              </a>
              <a 
                href="tel:+8610012345678" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#015bfe] text-[#015bfe] hover:bg-[#015bfe]/5 transition-colors"
              >
                电话联系我们
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
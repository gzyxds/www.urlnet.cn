"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Users, 
  MonitorSmartphone, 
  FileText, 
  Mail, 
  MessageCircle, 
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">与我们取得联系</h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            无论您有任何问题、建议或合作意向，我们都期待听到您的声音
          </p>
        </motion.div>

        {/* 二维码联系方式 - 极简设计 */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 bg-gray-50 p-10 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <MessageSquare className="h-8 w-8 text-gray-800 mb-6" />
              <h3 className="text-xl font-medium mb-8">微信客服</h3>
              <div className="w-40 h-40 bg-white p-2 rounded-lg mb-6 shadow-sm">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="微信客服二维码" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-1">微信号：USERHLIC</p>
              <p className="text-gray-500 text-sm">扫码添加微信客服</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 bg-gray-50 p-10 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-gray-800 mb-6" />
              <h3 className="text-xl font-medium mb-8">关注我们</h3>
              <div className="w-40 h-40 bg-white p-2 rounded-lg mb-6 shadow-sm">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="公众号二维码" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-1">官方公众号</p>
              <p className="text-gray-500 text-sm">扫码关注我们</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 bg-gray-50 p-10 rounded-lg"
          >
            <div className="flex flex-col items-center">
              <MonitorSmartphone className="h-8 w-8 text-gray-800 mb-6" />
              <h3 className="text-xl font-medium mb-8">获取演示</h3>
              <div className="w-40 h-40 bg-white p-2 rounded-lg mb-6 shadow-sm">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="演示二维码" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-1">QQ：2366749035</p>
              <p className="text-gray-500 text-sm">扫码获取演示</p>
            </div>
          </motion.div>
        </div>

        {/* 其他联系方式 - 极简设计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-start p-6 border-b border-gray-200"
          >
            <div className="bg-gray-100 p-3 rounded-full mr-5">
              <FileText className="h-6 w-6 text-gray-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">提交工单</h3>
              <p className="text-gray-600 mb-4">
                若您有技术问题或需求，可通过工单系统与我们联系，我们将尽快处理
              </p>
              <Button 
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 hover:text-gray-900"
              >
                提交工单
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-start p-6 border-b border-gray-200"
          >
            <div className="bg-gray-100 p-3 rounded-full mr-5">
              <Mail className="h-6 w-6 text-gray-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">电子邮件</h3>
              <p className="text-gray-600 mb-4">
                发送邮件至我们的客服邮箱，我们会在工作时间尽快回复您的问题
              </p>
              <Button 
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 hover:text-gray-900"
              >
                发送邮件
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-start p-6 border-b border-gray-200"
          >
            <div className="bg-gray-100 p-3 rounded-full mr-5">
              <MessageCircle className="h-6 w-6 text-gray-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">在线客服</h3>
              <p className="text-gray-600 mb-4">
                我们的在线客服团队随时为您提供帮助，快速解答您的各类问题
              </p>
              <Button 
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 hover:text-gray-900"
              >
                在线咨询
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex items-start p-6 border-b border-gray-200"
          >
            <div className="bg-gray-100 p-3 rounded-full mr-5">
              <Phone className="h-6 w-6 text-gray-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">电话咨询</h3>
              <p className="text-gray-600 mb-4">
                工作时间内，您可以直接拨打我们的客服热线获取即时支持
              </p>
              <Button 
                variant="outline"
                className="border-gray-300 hover:bg-gray-100 hover:text-gray-900"
              >
                拨打电话
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

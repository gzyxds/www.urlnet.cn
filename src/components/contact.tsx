"use client";
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
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-6 max-w-8xl">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mr-3">
              <MessageSquare className="h-5 w-5 text-gray-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              与我们取得联系
            </h2>
          </div>
          <div className="w-16 h-1 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            无论您有任何问题、建议或合作意向，我们都期待听到您的声音
          </p>
        </motion.div>

        {/* 二维码联系方式 - 简约卡片设计 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mr-2 group-hover:bg-gray-100 transition-colors duration-300">
                  <MessageSquare className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">微信客服</h3>
              </div>
              <div className="w-36 h-36 bg-gray-50 p-2 rounded-lg mb-4 border border-gray-100">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="微信客服二维码" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-900 font-medium mb-1">微信号：USERHLIC</p>
              <p className="text-gray-500 text-xs">扫码添加微信客服</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mr-2 group-hover:bg-gray-100 transition-colors duration-300">
                  <Users className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">关注我们</h3>
              </div>
              <div className="w-36 h-36 bg-gray-50 p-2 rounded-lg mb-4 border border-gray-100">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="公众号二维码" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-900 font-medium mb-1">官方公众号</p>
              <p className="text-gray-500 text-xs">扫码关注我们</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mr-2 group-hover:bg-gray-100 transition-colors duration-300">
                  <MonitorSmartphone className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">获取演示</h3>
              </div>
              <div className="w-36 h-36 bg-gray-50 p-2 rounded-lg mb-4 border border-gray-100">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="演示二维码" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-900 font-medium mb-1">QQ：2366749035</p>
              <p className="text-gray-500 text-xs">扫码获取演示</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center mr-2 group-hover:bg-gray-100 transition-colors duration-300">
                  <MessageCircle className="h-4 w-4 text-gray-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">QQ客服</h3>
              </div>
              <div className="w-36 h-36 bg-gray-50 p-2 rounded-lg mb-4 border border-gray-100">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="QQ客服二维码" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-900 font-medium mb-1">QQ：2366749035</p>
              <p className="text-gray-500 text-xs">扫码添加QQ客服</p>
            </div>
          </motion.div>
        </div>

        {/* 其他联系方式 - 简约列表设计 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FileText className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">提交工单</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  若您有技术问题或需求，可通过工单系统与我们联系，我们将尽快处理
                </p>
                <Button 
                  variant="outline"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
                >
                  提交工单
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-100 transition-colors duration-300">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">电子邮件</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  发送邮件至我们的客服邮箱，我们会在工作时间尽快回复您的问题
                </p>
                <Button 
                  variant="outline"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
                >
                  发送邮件
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-100 transition-colors duration-300">
                <MessageCircle className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">在线客服</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  我们的在线客服团队随时为您提供帮助，快速解答您的各类问题
                </p>
                <Button 
                  variant="outline"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
                >
                  在线咨询
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:border-blue-200"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-gray-100 transition-colors duration-300">
                <Phone className="h-5 w-5 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">电话咨询</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  工作时间内，您可以直接拨打我们的客服热线获取即时支持
                </p>
                <Button 
                  variant="outline"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300"
                >
                  拨打电话
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

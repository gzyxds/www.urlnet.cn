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
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        {/* 标题区域 - 现代化简约设计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
              联系我们
            </h2>
          </div>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            无论您有任何问题、建议或合作意向，我们都期待与您建立联系
          </p>
        </motion.div>

        {/* 二维码联系方式 - 现代化卡片设计 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gray-50 p-2 sm:p-3 mb-3 sm:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="微信客服二维码" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black font-semibold mb-1 sm:mb-2 text-sm sm:text-base">微信号：USERHLIC</p>
              <p className="text-gray-500 text-xs sm:text-sm font-light">扫码添加微信客服</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gray-50 p-2 sm:p-3 mb-3 sm:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="公众号二维码" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black font-semibold mb-1 sm:mb-2 text-sm sm:text-base">官方公众号</p>
              <p className="text-gray-500 text-xs sm:text-sm font-light">扫码关注我们</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gray-50 p-2 sm:p-3 mb-3 sm:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="演示二维码" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black font-semibold mb-1 sm:mb-2 text-sm sm:text-base">QQ：236749035</p>
              <p className="text-gray-500 text-xs sm:text-sm font-light">扫码获取演示</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gray-50 p-2 sm:p-3 mb-3 sm:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="QQ客服二维码" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black font-semibold mb-1 sm:mb-2 text-sm sm:text-base">QQ：236749035</p>
              <p className="text-gray-500 text-xs sm:text-sm font-light">扫码添加QQ客服</p>
            </div>
          </motion.div>
        </div>

        {/* 其他联系方式 - 现代化网格设计 */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight">提交工单</h3>
                <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-sm sm:text-base">
                  若您有技术问题或需求，可通过工单系统与我们联系，我们将尽快处理
                </p>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 font-medium text-sm sm:text-base"
                >
                  提交工单
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight">电子邮件</h3>
                <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-sm sm:text-base">
                  发送邮件至我们的客服邮箱，我们会在工作时间尽快回复您的问题
                </p>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 font-medium text-sm sm:text-base"
                >
                  发送邮件
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight">在线客服</h3>
                <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-sm sm:text-base">
                  我们的在线客服团队随时为您提供帮助，快速解答您的各类问题
                </p>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 font-medium text-sm sm:text-base"
                >
                  在线咨询
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1"
          >
            <div className="flex flex-col sm:flex-row items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight">电话咨询</h3>
                <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-sm sm:text-base">
                  工作时间内，您可以直接拨打我们的客服热线获取即时支持
                </p>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 font-medium text-sm sm:text-base"
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

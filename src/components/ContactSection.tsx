"use client";
import { motion } from "framer-motion";
import { 
  FileText, 
  Mail, 
  MessageCircle, 
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        {/* 标题区域 - 现代化简约设计，优化移动端间距 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight px-2 break-words">
              联系我们
            </h2>
          </div>
          <div className="w-12 xs:w-16 sm:w-20 h-0.5 bg-blue-600 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-2 xs:px-4 break-words">
            无论您有任何问题、建议或合作意向，我们都期待与您建立联系
          </p>
        </motion.div>

        {/* 二维码联系方式 - 现代化卡片设计，移动端2行2列布局 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 min-h-[180px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300 flex-shrink-0">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="微信客服二维码" 
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                <p className="text-black font-semibold mb-0.5 xs:mb-1 sm:mb-2 text-xs xs:text-sm sm:text-base break-words text-center leading-tight">
                  微信号：USERHLIC
                </p>
                <p className="text-gray-500 text-xs xs:text-xs sm:text-sm font-light leading-tight break-words text-center">
                  扫码添加微信客服
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 min-h-[180px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300 flex-shrink-0">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="公众号二维码" 
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                <p className="text-black font-semibold mb-0.5 xs:mb-1 sm:mb-2 text-xs xs:text-sm sm:text-base break-words text-center leading-tight">
                  官方公众号
                </p>
                <p className="text-gray-500 text-xs xs:text-xs sm:text-sm font-light leading-tight break-words text-center">
                  扫码关注我们
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 min-h-[180px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300 flex-shrink-0">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="演示二维码" 
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                <p className="text-black font-semibold mb-0.5 xs:mb-1 sm:mb-2 text-xs xs:text-sm sm:text-base break-words text-center leading-tight">
                  QQ：236749035
                </p>
                <p className="text-gray-500 text-xs xs:text-xs sm:text-sm font-light leading-tight break-words text-center">
                  扫码获取演示
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 min-h-[180px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 md:p-3 mb-1.5 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-6 border border-gray-100 group-hover:border-blue-100 transition-colors duration-300 flex-shrink-0">
                <img 
                  src="https://artaigc.cn/assets/wchatpay.png" 
                  alt="QQ客服二维码" 
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                <p className="text-black font-semibold mb-0.5 xs:mb-1 sm:mb-2 text-xs xs:text-sm sm:text-base break-words text-center leading-tight">
                  QQ：236749035
                </p>
                <p className="text-gray-500 text-xs xs:text-xs sm:text-sm font-light leading-tight break-words text-center">
                  扫码添加QQ客服
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 其他联系方式 - 现代化网格设计，优化移动端布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 rounded-lg p-3 xs:p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1 w-full"
          >
            <div className="flex flex-col xs:flex-row items-start">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-3 xs:mb-0 xs:mr-3 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <FileText className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight break-words">
                  提交工单
                </h3>
                <p className="text-gray-600 mb-3 xs:mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words">
                  若您有技术问题或需求，可通过工单系统与我们联系，我们将尽快处理
                </p>
                <Button 
                  variant="outline"
                  className="w-full xs:w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-3 xs:px-4 sm:px-5 lg:px-6 py-2.5 xs:py-3 sm:py-2.5 lg:py-3 font-medium text-xs xs:text-sm sm:text-base min-h-[40px] xs:min-h-[44px] touch-manipulation"
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
            className="group bg-white border border-gray-100 rounded-lg p-3 xs:p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1 w-full"
          >
            <div className="flex flex-col xs:flex-row items-start">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-3 xs:mb-0 xs:mr-3 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <Mail className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight break-words">
                  电子邮件
                </h3>
                <p className="text-gray-600 mb-3 xs:mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words">
                  发送邮件至我们的客服邮箱，我们会在工作时间尽快回复您的问题
                </p>
                <Button 
                  variant="outline"
                  className="w-full xs:w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-3 xs:px-4 sm:px-5 lg:px-6 py-2.5 xs:py-3 sm:py-2.5 lg:py-3 font-medium text-xs xs:text-sm sm:text-base min-h-[40px] xs:min-h-[44px] touch-manipulation"
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
            className="group bg-white border border-gray-100 rounded-lg p-3 xs:p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1 w-full"
          >
            <div className="flex flex-col xs:flex-row items-start">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-3 xs:mb-0 xs:mr-3 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <MessageCircle className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight break-words">
                  在线客服
                </h3>
                <p className="text-gray-600 mb-3 xs:mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words">
                  我们的在线客服团队随时为您提供帮助，快速解答您的各类问题
                </p>
                <Button 
                  variant="outline"
                  className="w-full xs:w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-3 xs:px-4 sm:px-5 lg:px-6 py-2.5 xs:py-3 sm:py-2.5 lg:py-3 font-medium text-xs xs:text-sm sm:text-base min-h-[40px] xs:min-h-[44px] touch-manipulation"
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
            className="group bg-white border border-gray-100 rounded-lg p-3 xs:p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-50 transition-all duration-500 hover:border-blue-200 hover:-translate-y-1 w-full"
          >
            <div className="flex flex-col xs:flex-row items-start">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-3 xs:mb-0 xs:mr-3 sm:mr-4 lg:mr-6 group-hover:bg-blue-100 transition-all duration-300 border border-blue-100 flex-shrink-0">
                <Phone className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 text-black tracking-tight break-words">
                  电话咨询
                </h3>
                <p className="text-gray-600 mb-3 xs:mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words">
                  工作时间内，您可以直接拨打我们的客服热线获取即时支持
                </p>
                <Button 
                  variant="outline"
                  className="w-full xs:w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-3 xs:px-4 sm:px-5 lg:px-6 py-2.5 xs:py-3 sm:py-2.5 lg:py-3 font-medium text-xs xs:text-sm sm:text-base min-h-[40px] xs:min-h-[44px] touch-manipulation"
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

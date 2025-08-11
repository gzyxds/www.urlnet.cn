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

        {/* 联系方式 - 左右布局，左侧二维码联系方式，右侧其他联系方式 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* 左侧：二维码联系方式 - 4列4排布局 */}
          <div className="w-full">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center lg:text-left"
            >
              二维码联系方式
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col items-center text-center">
                  {/* 增大二维码尺寸，优化多端适配 */}
                  <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 mb-2 xs:mb-3 sm:mb-4 border border-gray-100 group-hover:border-gray-200 transition-colors duration-300 flex-shrink-0">
                    <img 
                      src="/product/wchatpay.png" 
                      alt="微信客服二维码" 
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                    <p className="text-black font-semibold mb-0.5 xs:mb-1 text-xs xs:text-sm break-words text-center leading-tight">
                      微信号：USERHLIC
                    </p>
                    <p className="text-gray-500 text-xs font-light leading-tight break-words text-center">
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
                className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col items-center text-center">
                  {/* 增大二维码尺寸，优化多端适配 */}
                  <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 mb-2 xs:mb-3 sm:mb-4 border border-gray-100 group-hover:border-gray-200 transition-colors duration-300 flex-shrink-0">
                    <img 
                      src="/product/wchatpay.png" 
                      alt="公众号二维码" 
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                    <p className="text-black font-semibold mb-0.5 xs:mb-1 text-xs xs:text-sm break-words text-center leading-tight">
                      官方公众号
                    </p>
                    <p className="text-gray-500 text-xs font-light leading-tight break-words text-center">
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
                className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col items-center text-center">
                  {/* 增大二维码尺寸，优化多端适配 */}
                  <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 mb-2 xs:mb-3 sm:mb-4 border border-gray-100 group-hover:border-gray-200 transition-colors duration-300 flex-shrink-0">
                    <img 
                      src="/product/wchatpay.png" 
                      alt="演示二维码" 
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                    <p className="text-black font-semibold mb-0.5 xs:mb-1 text-xs xs:text-sm break-words text-center leading-tight">
                      QQ：236749035
                    </p>
                    <p className="text-gray-500 text-xs font-light leading-tight break-words text-center">
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
                className="group relative bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col items-center text-center">
                  {/* 增大二维码尺寸，优化多端适配 */}
                  <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gray-50 rounded-lg p-1 xs:p-1.5 sm:p-2 mb-2 xs:mb-3 sm:mb-4 border border-gray-100 group-hover:border-gray-200 transition-colors duration-300 flex-shrink-0">
                    <img 
                      src="/product/wchatpay.png" 
                      alt="QQ客服二维码" 
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-0.5 xs:px-1">
                    <p className="text-black font-semibold mb-0.5 xs:mb-1 text-xs xs:text-sm break-words text-center leading-tight">
                      QQ：236749035
                    </p>
                    <p className="text-gray-500 text-xs font-light leading-tight break-words text-center">
                      扫码添加QQ客服
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 右侧：其他联系方式 - 4列4排布局 */}
          <div className="w-full">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 text-center lg:text-left"
            >
              其他联系方式
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 w-full">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <FileText className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-black tracking-tight break-words">
                      提交工单
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words flex-1">
                    若您有技术问题或需求，可通过工单系统与我们联系，我们将尽快处理
                  </p>
                  <Button 
                    variant="outline"
                    className="w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 font-medium text-xs xs:text-sm min-h-[32px] xs:min-h-[36px] touch-manipulation self-start"
                  >
                    提交工单
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Mail className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-black tracking-tight break-words">
                      电子邮件
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words flex-1">
                    发送邮件至我们的客服邮箱，我们会在工作时间尽快回复您的问题
                  </p>
                  <Button 
                    variant="outline"
                    className="w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 font-medium text-xs xs:text-sm min-h-[32px] xs:min-h-[36px] touch-manipulation self-start"
                  >
                    发送邮件
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <MessageCircle className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-black tracking-tight break-words">
                      在线客服
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words flex-1">
                    我们的在线客服团队随时为您提供帮助，快速解答您的各类问题
                  </p>
                  <Button 
                    variant="outline"
                    className="w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 font-medium text-xs xs:text-sm min-h-[32px] xs:min-h-[36px] touch-manipulation self-start"
                  >
                    在线咨询
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-lg p-2 xs:p-3 sm:p-4 hover:shadow-xl hover:shadow-gray-50 transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 min-h-[160px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center w-full"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Phone className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-black tracking-tight break-words">
                      电话咨询
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 leading-relaxed font-light text-xs xs:text-sm sm:text-base break-words flex-1">
                    工作时间内，您可以直接拨打我们的客服热线获取即时支持
                  </p>
                  <Button 
                    variant="outline"
                    className="w-auto border-2 border-gray-200 text-black hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 font-medium text-xs xs:text-sm min-h-[32px] xs:min-h-[36px] touch-manipulation self-start"
                  >
                    拨打电话
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

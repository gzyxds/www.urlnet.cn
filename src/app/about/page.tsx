import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 顶部横幅 */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 bg-opacity-80">
          {/* 这里可以放置一张背景图 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500 opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            关于我们
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            用人工智能技术创造更美好的未来
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 md:px-6">
        {/* 公司简介 */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-700 mb-6 inline-block border-b-4 border-blue-500 pb-2">公司简介</h2>
              <p className="text-gray-700 mb-4 text-lg">
                AI科技是一家专注于人工智能技术研发与应用的高新技术企业，成立于2018年，总部位于北京，在上海、深圳、杭州设有分支机构。
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                我们致力于将前沿AI技术转化为实用的产品和解决方案，帮助企业提升效率、降低成本、创造价值。公司拥有一支由AI领域顶尖专家组成的研发团队，多人拥有国内外知名高校博士学位和世界500强企业工作经验。
              </p>
              <p className="text-gray-700 text-lg">
                经过多年发展，AI科技已成为国内领先的AI技术提供商，产品和服务覆盖金融、教育、医疗、制造等多个行业，服务客户超过500家，包括多家世界500强企业和政府机构。
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9 w-full h-80 relative">
                {/* 这里可以放置公司图片 */}
                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 核心数据 */}
        <motion.section 
          className="mb-20 py-12 bg-blue-50 rounded-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">我们的成就</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">年行业经验</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">企业客户</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">AI专家</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">AI产品</div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 发展历程 */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">发展历程</h2>
          <div className="relative">
            {/* 时间轴 - 桌面版 */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-500 transform -translate-x-1/2"></div>
            
            {/* 时间节点 */}
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-16">
              {/* 2018年 */}
              <motion.div 
                className="md:text-right md:pr-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block absolute right-0 top-3 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow z-10 transform translate-x-1/2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2018年</h3>
                  <p className="text-gray-700">公司成立，获得天使轮融资1000万元</p>
                </div>
              </motion.div>
              <div className="md:col-start-2 invisible md:visible"></div>
              
              {/* 2019年 */}
              <div className="md:col-start-1 invisible md:visible"></div>
              <motion.div 
                className="md:pl-12 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="hidden md:block absolute left-0 top-3 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow z-10 transform -translate-x-1/2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2019年</h3>
                  <p className="text-gray-700">推出首款AI产品"智能知识库"，获得A轮融资5000万元</p>
                </div>
              </motion.div>
              
              {/* 2020年 */}
              <motion.div 
                className="md:text-right md:pr-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="hidden md:block absolute right-0 top-3 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow z-10 transform translate-x-1/2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2020年</h3>
                  <p className="text-gray-700">推出"数字分身"产品，客户数量突破100家</p>
                </div>
              </motion.div>
              <div className="md:col-start-2 invisible md:visible"></div>
              
              {/* 2021年 */}
              <div className="md:col-start-1 invisible md:visible"></div>
              <motion.div 
                className="md:pl-12 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="hidden md:block absolute left-0 top-3 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow z-10 transform -translate-x-1/2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2021年</h3>
                  <p className="text-gray-700">获得B轮融资2亿元，成立上海和深圳分公司</p>
                </div>
              </motion.div>
              
              {/* 2022年 */}
              <motion.div 
                className="md:text-right md:pr-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="hidden md:block absolute right-0 top-3 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow z-10 transform translate-x-1/2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2022年</h3>
                  <p className="text-gray-700">推出"聊天绘画"和"论文创作"产品，客户数量突破300家</p>
                </div>
              </motion.div>
              <div className="md:col-start-2 invisible md:visible"></div>
              
              {/* 2023年 */}
              <div className="md:col-start-1 invisible md:visible"></div>
              <motion.div 
                className="md:pl-12 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="hidden md:block absolute left-0 top-3 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow z-10 transform -translate-x-1/2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">2023年至今</h3>
                  <p className="text-gray-700">获得C轮融资5亿元，客户数量突破500家，成立杭州研发中心</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* 团队介绍 */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-72 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                {/* 这里可以放团队成员照片 */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">张明</h3>
                <p className="text-blue-600 font-semibold mb-3">创始人 & CEO</p>
                <p className="text-gray-700">
                  前Google AI研究员，斯坦福大学计算机博士，在AI领域拥有15年研究和产品开发经验。
                </p>
              </div>
            </motion.div>
            
            {/* CTO */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-72 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">李华</h3>
                <p className="text-blue-600 font-semibold mb-3">联合创始人 & CTO</p>
                <p className="text-gray-700">
                  前微软研究院首席科学家，麻省理工学院计算机博士，专注于自然语言处理和机器学习。
                </p>
              </div>
            </motion.div>
            
            {/* COO */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-72 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">王芳</h3>
                <p className="text-blue-600 font-semibold mb-3">联合创始人 & COO</p>
                <p className="text-gray-700">
                  前阿里巴巴高级产品总监，哈佛商学院MBA，拥有丰富的互联网产品和运营经验。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* 企业文化 */}
        <motion.section 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">企业文化</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">使命</h3>
              <p className="text-gray-700 text-lg">
                让AI技术惠及每一个企业和个人，创造更美好的未来。
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">愿景</h3>
              <p className="text-gray-700 text-lg">
                成为全球领先的AI技术提供商，引领人工智能技术发展和应用。
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">价值观</h3>
              <ul className="text-gray-700 space-y-2 text-lg">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> 创新：拥抱变化，勇于探索
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> 专业：精益求精，追求卓越
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> 协作：开放共赢，团队至上
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> 诚信：言出必行，诚实守信
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">工作环境</h3>
              <p className="text-gray-700 text-lg">
                我们提供开放、平等、充满活力的工作环境，鼓励创新思考和跨团队协作。公司设有弹性工作制、持续学习计划和完善的晋升机制，让每位员工都能充分发挥潜力。
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* 联系我们 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-6">联系我们</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-200 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">总部地址</h3>
                      <p className="text-blue-100">北京市海淀区科技园区88号</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-200 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">联系电话</h3>
                      <p className="text-blue-100">010-88888888</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-200 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">电子邮箱</h3>
                      <p className="text-blue-100">contact@aitech.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center">
                    <span>联系我们</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-12">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">加入我们</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  我们始终欢迎优秀的人才加入，一起探索AI的无限可能。我们提供具有竞争力的薪资、完善的福利和广阔的发展空间。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">灵活的工作时间</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">持续学习与培训机会</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">股权激励计划</span>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center">
                    <span>查看招聘职位</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* 合作伙伴 */}
        <motion.section 
          className="mt-20 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">合作伙伴</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-24">
                <div className="text-gray-400 text-lg font-medium">合作伙伴 {i+1}</div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
      
      {/* 返回顶部按钮 */}
      <motion.button
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
};

export default AboutPage;

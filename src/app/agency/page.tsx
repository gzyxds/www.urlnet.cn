"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Code, Handshake, Target, CheckCircle, Phone, MessageCircle, FileText, Settings } from "lucide-react";
import { Link } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/use-page-metadata';

const AgencyPage = () => {
  // 设置代理页面元数据
  usePageMetadata({
    title: '代理合作 - 合作伙伴与渠道代理 | 艺创AI',
    description: '艺创AI代理合作中心，提供渠道合作、外包合作、产品共创等全方位合作服务。携手共创AI未来，共享数字化转型红利。',
    keywords: '代理合作,渠道合作,外包合作,产品共创,合作伙伴,AI技术,数字化转型'
  });

  const cooperationTypes = [
    {
      title: "渠道合作",
      subtitle: "携手共创AI未来",
      description: "成为艺创AI的合作伙伴，共享数字化转型红利",
      icon: <Handshake className="h-10 w-10 text-blue-600" />,
      features: [
        "享受超低折扣",
        "享受艺创AI全系列AI产品折扣优惠",
        "AI创业项目好帮手"
      ],
      link: "/cooperation/channel",
      color: "bg-white border border-gray-100"
    },
    {
      title: "外包合作",
      subtitle: "专业定制开发",
      description: "艺创AI外包定制开发合作，你有AI技术我们分配开发新项目",
      icon: <Code className="h-10 w-10 text-blue-600" />,
      features: [
        "定制化开发方案",
        "专业技术团队支持",
        "项目质量保证"
      ],
      link: "/cooperation/outsource",
      color: "bg-white border border-gray-100"
    },
    {
      title: "产品共创",
      subtitle: "共创AI产品",
      description: "AI时代机会多，共创更符合市场的AI产品",
      icon: <Target className="h-10 w-10 text-blue-600" />,
      features: [
        "市场导向的产品设计",
        "技术资源共享",
        "收益分成模式"
      ],
      link: "/cooperation/product",
      color: "bg-white border border-gray-100"
    },
    {
      title: "专业服务",
      subtitle: "完善服务支持",
      description: "提供完善的服务支持，助力合作伙伴快速成长",
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      features: [
        "一对一专属服务",
        "技术培训支持",
        "营销推广协助"
      ],
      link: "/cooperation/service",
      color: "bg-white border border-gray-100"
    }
  ];

  const advantages = [
    {
      title: "合作共赢",
      description: "成为合作伙伴的优势",
      content: "加入艺创AI合作伙伴计划，共享AI时代发展红利，携手开创数字化未来",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      title: "技术领先",
      description: "前沿AI技术",
      content: "拥有业界领先的AI技术栈，为合作伙伴提供强大的技术支撑",
      icon: <Code className="h-6 w-6 text-blue-600" />
    },
    {
      title: "市场广阔",
      description: "巨大市场潜力",
      content: "AI市场前景广阔，合作伙伴可享受巨大的市场发展空间",
      icon: <Target className="h-6 w-6 text-blue-600" />
    },
    {
      title: "收益丰厚",
      description: "可观收益回报",
      content: "提供有竞争力的佣金结构和收益分成模式，确保合作伙伴获得丰厚回报",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "初步咨询",
      description: "通过电话或微信联系我们，了解合作方式和详情",
      icon: <Phone className="h-5 w-5 text-blue-600" />
    },
    {
      step: "02",
      title: "需求对接",
      description: "我们的专业团队将与您深入沟通，了解您的具体需求",
      icon: <MessageCircle className="h-5 w-5 text-blue-600" />
    },
    {
      step: "03",
      title: "方案制定",
      description: "根据您的需求，我们提供定制化的合作方案",
      icon: <FileText className="h-5 w-5 text-blue-600" />
    },
    {
      step: "04",
      title: "正式合作",
      description: "签订合作协议，开启共赢合作之旅",
      icon: <Handshake className="h-5 w-5 text-blue-600" />
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* 顶部横幅 */}
        <section className="relative py-24 md:py-32 bg-[rgb(241,245,249)] overflow-hidden">
          {/* 装饰背景 */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
          </div>

          {/* 点状装饰 */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-200 rounded-full"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-purple-200 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-200 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-100 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-100 rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-[rgb(29,78,216)] mb-8 md:mb-10 tracking-tight mt-8 md:mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                代理合作
              </motion.h1>
              <motion.div
                className="w-20 h-0.5 bg-blue-600 mx-auto mb-8 md:mb-10"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                携手共创AI未来，成为艺创AI的合作伙伴，共享数字化转型红利
              </motion.p>
            </div>
          </div>
        </section>

        {/* 合作优势 */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                合作共赢
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                成为合作伙伴的优势
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                        {advantage.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mb-4">
                        {advantage.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {advantage.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 合作类型 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                合作类型
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                选择最适合您的合作方式，开启AI业务之旅
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-8xl mx-auto">
              {cooperationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group ${type.color}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start mb-8">
                        <div className="mr-6">
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {type.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium mb-4">
                            {type.subtitle}
                          </p>
                          <p className="text-gray-600 mb-8 leading-relaxed">
                            {type.description}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4 mb-8">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-4 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        className="w-full bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 h-12 text-base font-medium rounded-lg transition-all duration-300"
                        asChild
                      >
                        <Link to={type.link} className="flex items-center justify-center">
                          <span>了解更多</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 合作流程 */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                简单四步 合作流程
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                我们提供清晰简单的合作流程，让您轻松开启AI业务之旅
              </p>
            </div>

            <div className="max-w-8xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <Card className="h-full bg-white border border-gray-100 shadow-sm text-center group hover:shadow-md transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                          <span className="text-xl font-bold text-white">{step.step}</span>
                        </div>
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>

                    {/* 连接线 */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                  准备开始合作？
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
                  立即联系我们，开启您的AI业务之旅。我们的专业团队将为您提供详细的合作方案。
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium h-14">
                    <Phone className="mr-3 h-5 w-5" />
                    电话咨询
                  </Button>
                  <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg font-medium h-14">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    在线咨询
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
     </>
  );
};

export default AgencyPage;

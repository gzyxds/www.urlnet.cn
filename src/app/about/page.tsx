'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield, 
  Handshake,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Star,
  Zap,
  Globe,
  TrendingUp,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage: React.FC = () => {
  // 二维码模态框状态
  const [showQRCode, setShowQRCode] = useState(false);

  // 简化的动画变体
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // 滚动到顶部函数
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 处理二维码弹出
  const handleShowQRCode = () => {
    setShowQRCode(true);
  };

  // 关闭二维码模态框
  const handleCloseQRCode = () => {
    setShowQRCode(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 简约英雄区域 */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Star className="w-4 h-4" />
                领先的AI技术服务商
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                关于艺创AI
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                专注人工智能技术研发与应用，为企业提供智能化解决方案，推动数字化转型进程
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3"
              >
                了解更多
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3"
                onClick={handleShowQRCode}
              >
                联系我们
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* 核心数据展示 - 简约设计 */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "6+", label: "年行业经验", icon: Calendar },
              { value: "500+", label: "企业客户", icon: Building2 },
              { value: "100+", label: "AI专家", icon: Users },
              { value: "20+", label: "AI产品", icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 公司简介 - 简约布局 */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  公司简介
                </h2>
                <div className="w-12 h-1 bg-blue-600 mb-6"></div>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-black">艺创AI</strong> 成立于2018年，是一家专注于人工智能技术研发与应用的高新技术企业。我们总部位于北京，在上海、深圳、杭州设有分支机构。
                </p>
                <p>
                  公司致力于将前沿AI技术转化为实用的产品和解决方案，帮助企业实现智能化转型。我们的产品覆盖自然语言处理、计算机视觉、机器学习等多个AI领域。
                </p>
                <p>
                  经过多年发展，艺创AI已成为国内领先的AI技术服务商，累计服务超过500家企业客户，包括多家世界500强企业和政府机构。
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gray-50 rounded-2xl p-12 text-center">
                <Building2 className="w-24 h-24 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-black mb-2">技术驱动创新</h3>
                <p className="text-gray-600">持续投入研发，推动AI技术边界</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 发展历程 - 现代化简约设计 */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* 标题区域 - 增加留白和层次感 */}
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              发展历程
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              成长轨迹
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              从初创团队到行业领军企业的发展历程
            </p>
          </motion.div>

          {/* 时间线布局 - 现代化垂直设计 */}
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* 中央时间线 - 简约线条设计 */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 h-full"></div>
              
              <div className="space-y-24">
                {[
                  {
                    year: "2018",
                    title: "公司成立",
                    description: "艺创AI正式成立，获得天使轮融资1000万元。由一群充满激情的AI专家创立，致力于将前沿技术转化为实用产品。",
                    icon: Building2,
                    stats: "1000万元",
                    label: "天使轮融资",
                    color: "blue"
                  },
                  {
                    year: "2019", 
                    title: "产品突破",
                    description: "推出首款AI产品，获得A轮融资5000万元。产品在市场上获得积极反响，为后续发展奠定了坚实基础。",
                    icon: Zap,
                    stats: "5000万元",
                    label: "A轮融资",
                    color: "blue"
                  },
                  {
                    year: "2020",
                    title: "市场拓展", 
                    description: "客户数量突破100家，产品应用领域扩展。在疫情挑战下，我们的AI解决方案帮助企业实现数字化转型。",
                    icon: TrendingUp,
                    stats: "100+",
                    label: "企业客户",
                    color: "blue"
                  },
                  {
                    year: "2021",
                    title: "规模扩张",
                    description: "获得B轮融资2亿元，成立多个分公司。业务覆盖全国主要城市，团队规模快速增长。",
                    icon: Globe,
                    stats: "2亿元",
                    label: "B轮融资",
                    color: "blue"
                  },
                  {
                    year: "2022",
                    title: "产品丰富",
                    description: "推出多款AI产品，客户数量突破300家。产品线日趋完善，覆盖多个行业应用场景。",
                    icon: Award,
                    stats: "300+",
                    label: "企业客户",
                    color: "blue"
                  },
                  {
                    year: "2023-至今",
                    title: "行业领先",
                    description: "获得C轮融资5亿元，确立行业领先地位。持续创新，引领AI技术发展方向。",
                    icon: Star,
                    stats: "5亿元",
                    label: "C轮融资",
                    color: "blue"
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative"
                  >
                    {/* 时间节点圆圈 */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                      index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                    }`}>
                      {/* 内容卡片 */}
                      <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                          {/* 年份标签 - 简约设计 */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                <milestone.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-black">
                                  {milestone.year}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {milestone.label}
                                </div>
                              </div>
                            </div>
                            
                            {/* 数据展示 - 突出显示 */}
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600">
                                {milestone.stats}
                              </div>
                              <div className="text-xs text-gray-400 uppercase tracking-wide">
                                {milestone.label}
                              </div>
                            </div>
                          </div>

                          {/* 标题和描述 - 优化排版 */}
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-black leading-tight">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {milestone.description}
                            </p>
                          </div>

                          {/* 底部装饰线 */}
                          <div className="mt-6 pt-4 border-t border-gray-50">
                            <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* 数据可视化区域 - 简约几何设计 */}
                      <div className={`${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16 lg:col-start-1'}`}>
                        <div className="relative">
                          {/* 主要数据展示容器 */}
                          <div className="bg-gray-50 rounded-2xl p-12 text-center relative overflow-hidden">
                            {/* 背景几何装饰 - 简约线条 */}
                            <div className="absolute inset-0">
                              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-100 rounded-full"></div>
                              <div className="absolute bottom-4 left-4 w-8 h-8 bg-blue-100 rounded-full"></div>
                              <div className="absolute top-1/2 left-4 w-px h-12 bg-blue-200"></div>
                              <div className="absolute top-4 right-1/2 w-12 h-px bg-blue-200"></div>
                            </div>
                            
                            {/* 年份大字 - 简约展示 */}
                            <div className="relative z-10">
                              <div className="text-5xl md:text-6xl font-bold text-black/5 mb-6 select-none">
                                {milestone.year.split('-')[0]}
                              </div>
                              
                              {/* 核心数据 - 突出显示 */}
                              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                  {milestone.stats}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                  {milestone.label}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 底部总结 - 简约设计 */}
          <motion.div 
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <div className="container mx-auto px-4 bg-white border border-gray-100 rounded-2xl p-12 shadow-sm">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-3">6+</div>
                  <div className="text-base text-gray-600">年发展历程</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-3">7.6亿</div>
                  <div className="text-base text-gray-600">累计融资金额</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-3">500+</div>
                  <div className="text-base text-gray-600">服务企业客户</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 核心团队 - 简约卡片 */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">核心团队</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              汇聚全球顶尖AI专家，共同推动技术创新
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "胡龙春",
                title: "创始人 & CEO",
                bio: "拥有10年以上软件开发经验，独立开发者，相信编程创造价值且热爱创业。试图转型为产品营销专家，业余时间学习如何带娃和游泳。喜欢玩LOL但不喜欢加班。",
                expertise: ["机器学习", "深度学习", "产品战略"]
              },
              {
                name: "赵六", 
                title: "高级前端工程师",
                bio: "前端技术专家，精通React和Vue框架，擅长构建高性能、易维护的企业级应用，曾主导多个大型项目的前端架构设计与优化",
                expertise: ["自然语言处理", "机器学习", "技术架构"]
              },
              {
                name: "王五",
                title: "产品总监", 
                bio: "拥有丰富的产品设计和用户体验经验，曾在多家知名科技公司担任产品负责人。王五专注于打造直观易用的AI产品",
                expertise: ["产品管理", "运营策略", "商业发展"]
              }
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white border border-gray-200 hover:border-blue-200 transition-colors duration-300">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium text-sm">{member.title}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 企业价值观 - 简约网格布局 */}
        <motion.section 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">企业文化</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              以创新为驱动，以客户为中心的企业价值观
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 使命愿景 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border border-gray-200 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">使命与愿景</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">我们的使命</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        让AI技术惠及每一个企业和个人，通过智能化解决方案提升工作效率，创造更美好的数字化未来。
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-black mb-2">我们的愿景</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        成为全球领先的AI技术服务商，引领人工智能技术的发展与应用。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 核心价值观 */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white border border-gray-200 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-black">核心价值观</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Lightbulb, title: "创新驱动", desc: "拥抱变化，勇于探索前沿技术" },
                      { icon: Award, title: "追求卓越", desc: "精益求精，持续提升产品品质" },
                      { icon: Handshake, title: "合作共赢", desc: "开放协作，与客户伙伴共同成长" },
                      { icon: Shield, title: "诚信负责", desc: "言出必行，承担社会责任" }
                    ].map((value, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <value.icon className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <h5 className="font-medium text-black mb-1 text-sm">{value.title}</h5>
                          <p className="text-gray-600 text-xs">{value.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* 联系我们 CTA - 简约设计 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <Card className="bg-blue-600 border-0 text-white">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  准备开始您的AI之旅？
                </h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  联系我们的专家团队，获取个性化的AI解决方案咨询
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-50 font-medium px-8"
                  >
                    立即联系我们
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 font-medium px-8 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    预约咨询
                  </Button>
                </div>

                {/* 联系信息 */}
                <div className="grid md:grid-cols-3 gap-6 text-blue-100 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>北京 · 上海 · 深圳 · 杭州</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>400-888-8888</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@yichuang-ai.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* 合作伙伴 - 简约展示 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl font-bold text-black mb-4">合作伙伴</h2>
            <p className="text-gray-600">
              与知名企业建立深度合作关系
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {[
                "腾讯云", "阿里云", "华为云", "百度云", "京东云", "字节跳动"
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-16 hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="text-gray-600 font-medium text-sm text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>



      {/* 二维码模态框 */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center"
            onClick={handleCloseQRCode}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            
            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseQRCode}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
                aria-label="关闭"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              
              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">联系客服</h3>
                <p className="text-sm text-gray-600 mb-6">扫描二维码添加客服微信</p>
                
                {/* 二维码 */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img 
                      src="/images/qrcode.png" 
                      alt="客服二维码" 
                      className="w-48 h-48 object-contain rounded-lg border border-gray-200 shadow-lg"
                    />
                  </div>
                </div>
                
                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import Hero from '@/components/hero';
import HotProducts from '@/components/hot-products';
import About from '@/components/about';
import Products from '@/components/products';
import Advantages from '@/components/advantages';
import Terminal from '@/components/terminal';
import Cases from '@/components/cases';
import Scenario from '@/components/scenario';
import Contact from '@/components/contact';
import FAQ from '@/components/fqa';
import FunctionBlueprint from '@/components/function';
import BackToTop from '@/components/back-to-top';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const Home = () => {
  // 设置首页元数据
  usePageMetadata({
    title: '艺创AI - AI系统源码_AI数字人系统_聊天绘画系统_ai平台源码',
    description: '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
    keywords: 'AI系统源码,AI数字人系统,聊天绘画系统,ai平台源码,ai创作系统源码,ai官网源码,艺创AI'
  });

  return (
    <>
      <BackToTop />
      <Hero />
      <HotProducts />
      <About />
      <Products />
      <FunctionBlueprint />
      <Terminal />
      <Advantages />
      <Cases />
      <Scenario />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
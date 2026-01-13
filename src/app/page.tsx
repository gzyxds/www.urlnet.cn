import Carousel from '@/components/Carousel';
import HotProducts from '@/components/HotProducts';
import Scenes from '@/components/Scenes';
import Products from '@/components/ProductsSection';
import Advantages from '@/components/AdvantagesSection';
import Terminal from '@/components/TerminalSection';
import Cases from '@/components/CasesSection';
import Scenario from '@/components/ScenarioSection';
import Contact from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import FunctionBlueprint from '@/components/FunctionSection';
import NewsSection from '@/components/NewsSection';
import { usePageMetadata } from '@/hooks/use-page-metadata';
import ClientLogoWall from '@/components/clients/ClientLogoWall';
import clients from '@/components/clients/clients';
import OpenScenarioSection from '@/components/OpenScenarioSection';


const Home = () => {
  // 设置首页元数据
  usePageMetadata({
    title: '艺创AI_AI系统程序源码_AI数字人SaaS系统_AI企业知识库_企业级AI平台系统',
    description: '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
    keywords: 'AI系统源码,AI数字人系统,聊天绘画系统,ai平台源码,ai创作系统源码,ai官网源码,艺创AI'
  });

  return (
    <>
      <Carousel />
      <OpenScenarioSection />
      <HotProducts />
      <Scenes />
      <Products />
      <Terminal />
      <ClientLogoWall clients={clients} marquee />
      <FunctionBlueprint />      
      <Advantages />
      <NewsSection />
      <Cases />
      <Scenario />
      <FAQ />
      <Contact />
      </>
  );
};

export default Home;

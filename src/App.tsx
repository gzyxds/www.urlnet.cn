import { Routes, Route } from 'react-router-dom';

// 全局样式导入
import './app/globals.css';

// 布局组件导入
import Header from './components/HeaderSection';
import Footer from './components/FooterSection';
import BackToTop from './components/BackToTop';

// 页面组件导入 - 按功能模块分组
// 主页
import Home from './app/page';

// 产品相关页面
import ProductsPage from './app/products/page';
import DigitalTwinPage from './app/products/human/page';
import AiPage from './app/products/ai/page';
import ChatPage from './app/products/chat/page';
import PaperWritingPage from './app/products/paper/page';

// 功能页面
import DemoPage from './app/demo/page';
import DocsPage from './app/docs/page';
import CodeDownloadPage from './app/code/page';
import ServicePage from './app/service/page';
import AgencyPage from './app/agency/page';
import AboutPage from './app/about/page';
import ApiPage from './app/api/page';
import DownloadPage from './app/download/page';
import TipsPage from './app/tips/page';

// 新闻相关页面
import NewsListPage from './app/new/page';
import NewsDetailPage from './app/new/[id]/page';

import ClientLogoWallExample from './components/clients/ClientLogoWallExample';

/**
 * 应用程序主组件
 * 
 * 功能说明：
 * - 提供应用的整体布局结构
 * - 配置路由系统，管理页面导航
 * - 集成全局组件（Header、Footer、BackToTop）
 * - 确保响应式设计和用户体验一致性
 */
function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* 页面头部导航 */}
      <Header />
      
      {/* 主要内容区域 - 路由渲染区 */}
      <main>
        <Routes>
          {/* 首页路由 */}
          <Route path="/" element={<Home />} />
          
          {/* 产品展示相关路由 */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/human" element={<DigitalTwinPage />} />
          <Route path="/products/ai" element={<AiPage />} />
          <Route path="/products/chat" element={<ChatPage />} />
          <Route path="/products/paper" element={<PaperWritingPage />} />
          
          {/* 功能页面路由 */}
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/code" element={<CodeDownloadPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/agency" element={<AgencyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/tips" element={<TipsPage />} />

          {/* 新闻资讯路由 */}
          <Route path="/new" element={<NewsListPage />} />
          <Route path="/new/:id" element={<NewsDetailPage />} />

          <Route path="/test-client-logo" element={<ClientLogoWallExample />} />
        </Routes>
      </main>
      
      {/* 页面底部信息 */}
      <Footer />
      
      {/* 返回顶部功能组件 */}
      <BackToTop />
    </div>
  );
}

export default App;
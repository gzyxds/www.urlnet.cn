import './app/globals.css';

// 布局组件导入
import Header from './components/HeaderSection';
import Banners from '@/components/Banners';
import Footer from './components/FooterSection';
import BackToTop from './components/BackToTop';
import MobileBottomConsult from './components/MobileBottomConsult';

import AppRoutes from './components/AppRoutes';

/**
 * 应用程序主组件
 *
 * 功能说明：
 * - 提供应用的整体布局结构
 * - 集成自动路由系统 (AppRoutes)
 * - 集成全局组件（Header、Footer、BackToTop）
 * - 确保响应式设计和用户体验一致性
 */
function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <Banners />
      {/* 页面头部导航 */}
      <Header />

      {/* 主要内容区域 - 路由渲染区 */}
      <main>
        <AppRoutes />
      </main>

      {/* 页面底部信息 */}
      <Footer />

      {/* 返回顶部功能组件 */}
      <BackToTop />

      {/* 移动端底部业务咨询组件 */}
      <MobileBottomConsult />
    </div>
  );
}

export default App;

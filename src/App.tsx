import React from 'react';
import './app/globals.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './app/page';
import ProductsPage from './app/products/page';
import DigitalTwinPage from './app/products/digital-twin/page';
import KnowledgeBasePage from './app/products/knowledge-base/page';
import ChatDrawingPage from './app/products/chat-drawing/page';
import PaperWritingPage from './app/products/paper-writing/page';
import DemoPage from './app/demo/page';
import DocsPage from './app/docs/page';
import SupportPage from './app/support/page';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/digital-twin" element={<DigitalTwinPage />} />
          <Route path="/products/knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="/products/chat-drawing" element={<ChatDrawingPage />} />
          <Route path="/products/paper-writing" element={<PaperWritingPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
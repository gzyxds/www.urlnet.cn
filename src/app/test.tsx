import React from 'react';
import { usePageMetadata } from '@/hooks/usePageMetadata';

const TestPage = () => {
  // 设置测试页面元数据
  usePageMetadata({
    title: '测试页面 | 艺创AI',
    description: '艺创AI测试页面，用于验证系统功能和页面渲染。',
    keywords: '测试页面,系统测试,艺创AI'
  });
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600">测试页面</h1>
      <p className="mt-4">如果您能看到这段文字，说明页面渲染正常。</p>
    </div>
  );
};

export default TestPage;
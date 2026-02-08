import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { usePageMetadata } from '@/hooks/use-page-metadata';

export default function NotFound() {
  usePageMetadata({
    title: '404 - 页面未找到 | 艺创AI',
    description: '抱歉，您访问的页面不存在。',
    keywords: '404, 页面未找到'
  });

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8 relative">
        <h1 className="text-9xl font-bold text-gray-100 dark:text-gray-800">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">页面未找到</span>
        </div>
      </div>

      <p className="text-gray-500 max-w-md mb-8">
        抱歉，您要查找的页面可能已被移动、删除或暂时不可用。
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default" className="gap-2">
          <Link to="/">
            <Home className="w-4 h-4" />
            返回首页
          </Link>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4" />
            返回上一页
          </button>
        </Button>
      </div>
    </div>
  );
}

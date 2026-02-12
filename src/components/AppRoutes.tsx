import { lazy, Suspense, ComponentType } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import ClientLogoWallExample from './clients/ClientLogoWallExample';
import NotFound from './NotFound';

// 动态导入所有页面组件（使用相对路径，Vite 7 兼容）
const pages = import.meta.glob('../app/**/page.tsx') as Record<string, () => Promise<{ default: ComponentType<unknown> }>>;

/**
 * 解析文件路径获取路由路径
 *
 * @param filePath - 页面文件的完整路径
 * @returns 解析后的路由路径字符串
 */
function getRoutePath(filePath: string): string {
  // 1. 统一处理：找到 /app/ 之后的部分
  // 使用 split 分割路径，取 app 之后的部分
  const parts = filePath.split('/app/');
  if (parts.length < 2) return '';

  const relativePath = parts[1]; // 例如 "solution/banana/page.tsx" 或 "page.tsx"

  // 2. 移除结尾的 /page.tsx
  if (relativePath === 'page.tsx') {
    return '/';
  }

  const path = relativePath.replace(/\/page\.tsx$/, '');

  // 3. 处理动态路由 [id] -> :id
  return `/${path.replace(/\[([^\]]+)\]/g, ':$1')}`;
}

// 生成路由配置列表
const autoRoutes = Object.keys(pages).map((filePath) => {
  const path = getRoutePath(filePath);
  // 使用 React.lazy 进行懒加载，并进行类型断言
  const Component = lazy(pages[filePath]);

  // 调试信息：打印生成的路由映射
  console.log(`[AppRoutes] Mapped: ${filePath} -> ${path}`);

  return {
    path,
    Component,
  };
});

/**
 * 自动路由组件
 *
 * 功能：
 * 1. 自动扫描 src/app 目录下的 page.tsx 文件并生成路由
 * 2. 支持 [id] 形式的动态路由
 * 3. 包含手动配置的特殊路由
 * 4. 实现路由懒加载 (Suspense)
 */
export default function AppRoutes(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm font-medium">加载资源中...</p>
        </div>
      }
    >
      <Routes>
        {/* 自动生成的路由 */}
        {autoRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        {/* 手动配置的额外路由 */}
        <Route path="/test-client-logo" element={<ClientLogoWallExample />} />

        {/* 404 页面 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

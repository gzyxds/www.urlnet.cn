import { ReactNode } from "react";

/**
 * 这是一个极简的 Tabs 组件实现，用于替代已删除的 shadcn/ui Tabs，
 * 仅保证编译通过，不提供复杂交互。
 * 如需完整功能，可自行引入第三方组件库或完善此实现。
 */

// 容器组件
interface TabsProps {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
}
export function Tabs({ children, className }: TabsProps) {
  return <div className={className}>{children}</div>;
}

// 列表组件
interface TabsListProps {
  children: ReactNode;
  className?: string;
}
export function TabsList({ children, className }: TabsListProps) {
  return <div className={className}>{children}</div>;
}

// 触发组件
interface TabsTriggerProps {
  children: ReactNode;
  className?: string;
  value?: string;
  onClick?: () => void;
}
export function TabsTrigger({ children, className, onClick }: TabsTriggerProps) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// 内容组件
interface TabsContentProps {
  children: ReactNode;
  className?: string;
  value?: string;
}
export function TabsContent({ children, className }: TabsContentProps) {
  return <div className={className}>{children}</div>;
}

// 默认导出保持与旧用法兼容
export default Tabs;
import { createContext, useContext, useState, ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";

// 创建 Context 用于共享状态
interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}
const TabsContext = createContext<TabsContextValue | undefined>(undefined);

// 容器组件
interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({ children, className, defaultValue, value: controlledValue, onValueChange, ...props }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue || "");

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// 列表组件
interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export function TabsList({ children, className, ...props }: TabsListProps) {
  return <div className={className} {...props}>{children}</div>;
}

// 触发组件
interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  value: string;
}
export function TabsTrigger({ children, className, value, onClick, ...props }: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const isActive = context.value === value;

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        context.onValueChange(value);
        onClick?.(e);
      }}
      data-state={isActive ? "active" : "inactive"}
      {...props}
    >
      {children}
    </button>
  );
}

// 内容组件
interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  value: string;
}
export function TabsContent({ children, className, value, ...props }: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  if (context.value !== value) return null;

  return (
    <div className={className} data-state="active" {...props}>
      {children}
    </div>
  );
}

export default Tabs;

// 通用类型定义
export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// 产品相关类型
export interface Product extends BaseEntity {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  originalPrice: string;
  currentPrice: string;
  sourceCodeLink: string;
  badge?: string;
  icon?: React.ReactNode;
  iconColor: string;
  tags: string[];
  image?: string;
  rating?: number;
  sales?: number;
  buyLink?: string;
}

// 用户相关类型
export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'editor';
}

// API响应类型
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 页面元数据类型
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// 组件Props类型
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// 表单相关类型
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// 文档相关类型
export interface DocItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  category: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  link: string;
  category: string;
  tags: string[];
}

export interface NavigationItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  link?: string;
}

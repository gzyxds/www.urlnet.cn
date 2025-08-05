// 网站基本信息
export const SITE_CONFIG = {
  name: 'AI企业网站',
  description: '专业的AI技术服务平台',
  url: 'https://urlnet.cn',
  author: '艺创科技',
  keywords: ['AI', '人工智能', '企业服务', '数字化转型'],
} as const;

// 导航菜单
export const NAVIGATION_ITEMS = [
  { name: '首页', href: '/', icon: 'Home' },
  { name: '产品', href: '/products', icon: 'Package' },
  { name: '演示', href: '/demo', icon: 'Play' },
  { name: '文档', href: '/docs', icon: 'Book' },
  { name: '代码', href: '/code', icon: 'Code' },
  { name: '服务', href: '/service', icon: 'Settings' },
  { name: '代理', href: '/agency', icon: 'Users' },
  { name: '关于', href: '/about', icon: 'Info' },
  { name: 'API', href: '/api', icon: 'Terminal' },
  { name: '下载', href: '/download', icon: 'Download' },
  { name: '技巧', href: '/tips', icon: 'Lightbulb' },
  { name: '新闻', href: '/news', icon: 'Newspaper' },
] as const;

// 产品分类
export const PRODUCT_CATEGORIES = [
  { id: 'php', name: 'PHP版本', color: 'blue' },
  { id: 'java', name: 'Java版本', color: 'orange' },
  { id: 'python', name: 'Python版本', color: 'green' },
  { id: 'typescript', name: 'TypeScript版本', color: 'purple' },
] as const;

// 技术标签
export const TECH_TAGS = [
  'PHP', 'Java', 'Python', 'TypeScript', 'React', 'Vue', 'Node.js',
  'Spring Boot', 'Laravel', 'Django', 'NestJS', 'Nuxt', 'Next.js'
] as const;

// API端点
export const API_ENDPOINTS = {
  products: '/api/products',
  news: '/api/news',
  contact: '/api/contact',
  download: '/api/download',
} as const;

// 本地存储键名
export const STORAGE_KEYS = {
  theme: 'theme',
  language: 'language',
  userPreferences: 'userPreferences',
} as const;

// 动画配置
export const ANIMATION_CONFIG = {
  duration: 0.6,
  ease: 'easeInOut',
  stagger: 0.1,
} as const;

// 响应式断点
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// 颜色主题
export const COLORS = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    500: '#6b7280',
    900: '#111827',
  },
} as const;
import React, { useMemo, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, CheckCircle as CheckBadgeIcon, Inbox, Star, ShoppingCart, Play, Sparkles, Zap, PenTool, Database, Video, Briefcase, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import { productsData, type ProductItem } from "@/data/products";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

type Category = { id: string; name: string; icon?: React.ElementType };
type AppData = {
  id: number;
  name: string;
  image: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  date: string;
  rating?: number;
  sales?: number;
  link?: string;
  features?: string[];
  subtitle?: string;
  buyLink?: string;
  isPlugin?: boolean;
};

const mainCategories: Category[] = [
  { id: 'all', name: '全部应用', icon: Zap },
  { id: 'independent', name: '独立系统', icon: Database },
];

const pluginCategories: Category[] = [
  { id: 'video', name: '图像视频', icon: Video },
  { id: 'writing', name: '智能写作', icon: PenTool },
  { id: 'enterprise', name: '企业工具', icon: Briefcase },
  { id: 'efficiency', name: '效率工具', icon: LayoutGrid },
];

/**
 * 将产品数据转换为应用展示使用的数据结构
 * @param products 产品数据源
 * @returns 转换后的应用数据数组
 */
function convertProductsToApps(products: ProductItem[]): AppData[] {
  return products.map((p, idx) => ({
    id: idx + 1,
    name: p.title,
    image: p.image,
    description: p.description,
    originalPrice: p.originalPrice,
    discountPrice: p.price,
    date: '上新',
    rating: p.rating,
    sales: p.sales,
    link: p.link,
    features: p.features,
    subtitle: p.subtitle,
    buyLink: p.buyLink,
    isPlugin: p.isPlugin
  }));
}

/**
 * 根据搜索词与分类筛选应用列表
 * 功能：支持按关键词（名称/描述/副标题/功能标签）与语义化分类过滤
 * 参数：
 * - query: 搜索关键词（string）
 * - category: 当前分类ID（string）
 * - source: 原始应用列表（AppData[]）
 * 返回：过滤后的应用列表（AppData[]）
 */
function filterApps(query: string, category: string, source: AppData[]): AppData[] {
  const q = query.trim().toLowerCase();
  const bySearch = (app: AppData) => {
    const haystack = [
      app.name,
      app.description,
      app.subtitle ?? '',
      ...(app.features ?? []),
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  };
  const byCategory = (app: AppData) => {
    if (category === 'all') return true;

    const sub = app.subtitle || '';

    if (category === 'independent') {
      return /独立系统|PHP源码版|Java源码版|Python源码版|全新升级/.test(sub);
    }
    if (category === 'video') return /图像视频/.test(sub);
    if (category === 'writing') return /智能写作/.test(sub);
    if (category === 'enterprise') return /企业工具/.test(sub);
    if (category === 'efficiency') return /效率工具/.test(sub);

    return true;
  };
  return source.filter(app => bySearch(app) && byCategory(app));
}

/**
 * 应用市场展示组件
 * 采用 Bento Grid 布局与 Glassmorphism 设计语言
 * 优化点：
 * 1. 使用 rounded-3xl 和 backdrop-blur 增强现代感
 * 2. 增强卡片交互 (hover scale/shadow)
 * 3. 优化侧边栏导航样式
 * 4. 增强 Banner 视觉冲击力
 */
const ProductShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const apps = useMemo<AppData[]>(() => convertProductsToApps(productsData), []);
  const filteredApps = useMemo(() => filterApps(searchQuery, activeCategory, apps), [searchQuery, activeCategory, apps]);

  const renderCategoryList = (list: Category[]) => (
    <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
      {list.map((category) => {
        const isActive = activeCategory === category.id;
        const Icon = category.icon || Zap;
        return (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "relative shrink-0 w-auto lg:w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group overflow-hidden border",
              isActive
                ? "border-blue-500/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
                : "border-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-blue-100/50 dark:bg-blue-900/20"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-3">
              <Icon className={cn("w-4 h-4", isActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300")} />
              {category.name}
            </span>
          </button>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900 pt-24 pb-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent dark:from-blue-950/20 dark:to-transparent pointer-events-none" />
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[200px] -left-[200px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* 左侧边栏 */}
          <aside className="w-full lg:w-72 shrink-0 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* 搜索框 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-blue-500/30">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder="搜索应用..."
                    className="w-full pl-11 pr-4 py-3.5 bg-transparent outline-none text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                  />
                  <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
              </div>

              {/* 分类导航 */}
              <div className="space-y-3">
               <h3 className="px-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">分类导航</h3>
                {renderCategoryList(mainCategories)}
              </div>

              {/* 插件应用 */}
              <div className="space-y-3 pt-2">
               <h3 className="px-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">插件应用</h3>
                {renderCategoryList(pluginCategories)}
              </div>
            </div>
          </aside>

          {/* 右侧主内容 */}
          <main className="flex-1 min-w-0">
            {/* 促销 Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-blue-50/50 dark:bg-blue-950/10 border border-blue-100 dark:border-blue-900/20 p-5 mb-8">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-medium bg-blue-100/50 dark:bg-blue-900/20 px-2.5 py-0.5 rounded-full w-fit mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>限时特惠活动</span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    解锁 AI 生产力工具
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    联系客服领取限时 <span className="text-blue-600 dark:text-blue-400 font-bold">5折优惠码</span>，
                    助力您的业务快速腾飞。
                  </p>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-300 rounded-full font-semibold px-6 h-9 text-sm"
                  onClick={() => window.dispatchEvent(new CustomEvent('showQRCodeModal'))}
                >
                  获取优惠码
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>

            {/* 应用列表头 */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                全部应用
               <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">({filteredApps.length})</span>
              </h2>
            </div>

            {/* 应用卡片网格 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps.map((app) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <img
                          src={app.image}
                          alt={app.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1">{app.name}</h3>
                            {app.subtitle && (
                                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
                                {app.subtitle.replace(/\[|\]/g, '')}
                                </span>
                            )}
                            {/* 应用插件标签 */}
                            {app.isPlugin && (
                               <span className="text-xs font-medium text-[#FFD700] bg-gray-900 dark:bg-black border border-gray-800 px-2 py-0.5 rounded shadow-sm">
                                 应用插件
                               </span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {app.features?.slice(0, 3).map((feature, i) => (
                              <span key={i} className="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
                        {app.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm text-gray-400 line-through">¥{app.originalPrice.toFixed(2)}</span>
                          <span className="px-2.5 py-0.5 bg-gray-900 dark:bg-black text-[#FFD700] text-sm font-medium rounded-full border border-gray-800 shadow-sm flex items-center gap-1">
                             <span className="text-xs font-normal text-gray-300">折后</span>
                             ¥{app.discountPrice.toFixed(2)}
                          </span>
                          {app.originalPrice > app.discountPrice && (
                             <span className="text-xs text-red-500 dark:text-red-400 font-medium ml-auto">
                              省¥{Math.round(app.originalPrice - app.discountPrice)}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <CheckBadgeIcon className="w-3.5 h-3.5" />
                              <span>官方认证</span>
                            </div>
                            {typeof app.rating === 'number' && (
                              <div className="flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 text-yellow-400" />
                                <span>{app.rating}</span>
                              </div>
                            )}
                          </div>
                          {typeof app.sales === 'number' ? (
                            <span>已售 {app.sales}</span>
                          ) : (
                            <span>{app.date}</span>
                          )}
                        </div>
                        {(app.buyLink || app.link) && (
                          <div className="flex gap-2 pt-3">
                            {app.buyLink && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1 h-8 px-2 text-xs text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                                onClick={() => window.open(app.buyLink as string, '_blank')}
                              >
                                <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                                购买
                              </Button>
                            )}
                            {app.link && (
                              <Button
                                variant="default"
                                size="sm"
                                className="flex-1 h-8 px-2 text-xs bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
                                asChild
                              >
                                <Link to={app.link as string} className="flex items-center justify-center">
                                  <Play className="h-3.5 w-3.5 mr-1.5" />
                                  演示
                                </Link>
                              </Button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 空状态 */}
            {filteredApps.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800/50 rounded-full flex items-center justify-center mb-6">
                  <Inbox className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">未找到相关应用</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                  试试更换搜索关键词，或者切换分类看看吧
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  重置筛选条件
                </Button>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

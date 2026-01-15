import React, { useMemo, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, CheckCircle as CheckBadgeIcon, Inbox, Star, ShoppingCart, Play, Sparkles, Zap, PenTool, Database, Video, Briefcase, LayoutGrid, Music, Coffee, Clock } from 'lucide-react';
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
  { id: 'audio', name: 'AI音频', icon: Music },
  { id: 'enterprise', name: '企业工具', icon: Briefcase },
  { id: 'efficiency', name: '效率工具', icon: LayoutGrid },
  { id: 'lifestyle', name: '生活娱乐', icon: Coffee },
  { id: 'coming', name: '即将上架', icon: Clock },
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

    // 新增分类筛选逻辑
    if (category === 'audio') {
      return /音乐|音频|声音|配音|歌曲|说话/.test(app.name + (app.features?.join('') || ''));
    }
    if (category === 'lifestyle') {
      return /小说|短剧|娱乐|生活|游戏|复刻/.test(app.name + (app.features?.join('') || ''));
    }
    if (category === 'coming') {
      return /即将上架/.test(sub);
    }

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

  const renderCategoryList = (list: Category[], title: string) => (
    <div className="py-2">
      <h3 className="px-4 mb-3 text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center gap-2">
        {title}
      </h3>
      <nav className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
        {list.map((category) => {
          const isActive = activeCategory === category.id;
          const Icon = category.icon || Zap;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "relative shrink-0 w-auto lg:w-full text-left px-4 py-3 rounded-xl text-base transition-all duration-200 group flex items-center justify-between overflow-hidden",
                isActive
                  ? "text-white font-medium shadow-md shadow-blue-500/20"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-gray-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-blue-600 dark:bg-blue-600 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <div className="flex items-center gap-3.5 relative z-10">
                <Icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-white" : "text-gray-400 group-hover:text-gray-500"
                )} />
                <span>{category.name}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900 pt-24 pb-20 relative">
      {/* 背景装饰容器 - 独立出来以避免 overflow-hidden 影响 sticky 定位 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent dark:from-blue-950/20 dark:to-transparent" />
        <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[200px] -left-[200px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

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

              {/* 导航菜单组 */}
              <div className="lg:bg-white/50 lg:dark:bg-gray-800/40 lg:backdrop-blur-md lg:rounded-2xl lg:border lg:border-gray-200/50 lg:dark:border-gray-700/50 lg:p-3 lg:shadow-sm space-y-2">
                {renderCategoryList(mainCategories, '发现')}
                <div className="h-px bg-gray-100 dark:bg-gray-800 mx-2 hidden lg:block" />
                {renderCategoryList(pluginCategories, '分类')}
              </div>
            </div>
          </aside>

          {/* 右侧主内容 */}
          <main className="flex-1 min-w-0">
            {/* 促销 Banner */}
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 dark:border-blue-400/20 p-6 mb-8 group">
              {/* 渐变背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950" />

              {/* 网格背景装饰 */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

              {/* 动态光效 */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-lg">
                  <div className="flex items-center gap-2 text-blue-50 text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full w-fit">
                    <Sparkles className="w-3.5 h-3.5 text-blue-200" />
                    <span>限时特惠活动</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white">
                    解锁 <span className="text-blue-100">AI 生产力工具</span>
                  </h2>
                  <p className="text-blue-100/90 text-sm leading-relaxed">
                    联系客服领取限时 <span className="text-blue-700 font-bold bg-white px-1 rounded shadow-sm">5折优惠码</span>，
                    助力您的业务快速腾飞。
                  </p>
                </div>
                <Button
                  className="bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 shadow-lg shadow-black/10 hover:shadow-black/20 transition-all duration-300 rounded-full font-semibold px-8 h-11 text-sm shrink-0 border border-transparent"
                  onClick={() => window.dispatchEvent(new CustomEvent('showQRCodeModal'))}
                >
                  获取优惠码
                  <ArrowRight className="w-4 h-4 ml-2" />
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

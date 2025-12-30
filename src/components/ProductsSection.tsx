"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Play, Star, Sparkles, CheckCircle as CheckBadgeIcon } from "lucide-react";
import { Link } from 'react-router-dom';
import { productsData } from '@/data/products';

/**
 * 产品展示区块组件
 * 展示产品网格列表，支持评分、销量、价格与操作按钮
 * @returns React 组件
 */
const Products = () => {
  const products = productsData;

  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden" id="products">
      {/* 装饰背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            className="inline-flex items-center px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            产品矩阵
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            全场景 <span className="text-primary">AI 解决方案</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            从企业级知识库到数字人创作，探索我们的创新产品系列，为您的业务增长注入智能动力
          </motion.p>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col relative bg-gradient-to-b from-blue-50/50 to-card border border-border/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
            >
              {/* 产品图片区域 */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"></div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-primary/20">
                    热销
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* 产品内容区域 */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white line-clamp-1">{product.title}</h3>
                      {product.subtitle && (
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
                          {product.subtitle.replace(/[\[\]]/g, '')}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.features?.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-[10px] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 flex-1">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-400 line-through">¥{product.originalPrice.toFixed(2)}</span>
                    <span className="px-2.5 py-0.5 bg-gray-900 dark:bg-black text-[#FFD700] text-sm font-medium rounded-full border border-gray-800 shadow-sm flex items-center gap-1">
                       <span className="text-xs font-normal text-gray-300">折后</span>
                       ¥{product.price.toFixed(2)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-xs text-red-500 font-medium ml-auto">
                        省¥{Math.round(product.originalPrice - product.price)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <CheckBadgeIcon className="w-3.5 h-3.5" />
                        <span>官方认证</span>
                      </div>
                      {typeof product.rating === 'number' && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                      )}
                    </div>
                    {typeof product.sales === 'number' ? (
                      <span>已售 {product.sales}</span>
                    ) : (
                      <span>上新</span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full h-8 px-2 text-xs text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                      onClick={() => window.open(product.buyLink, '_blank')}
                    >
                      <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
                      购买
                    </Button>

                    <Button
                      variant="default"
                      size="sm"
                      className="w-full h-8 px-2 text-xs bg-blue-600 hover:bg-blue-700 transition-colors"
                      asChild
                    >
                      <Link to={product.link} className="flex items-center justify-center">
                        <Play className="h-3.5 w-3.5 mr-1.5" />
                        演示
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

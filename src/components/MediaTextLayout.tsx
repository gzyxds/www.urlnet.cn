import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * MediaTextLayout 组件的属性接口
 * @interface MediaTextLayoutProps
 * @property {string} title - 标题文本
 * @property {string} description - 描述文本
 * @property {string} mediaUrl - 媒体文件URL
 * @property {boolean} reverse - 是否反向布局
 * @property {string} className - 自定义样式类名
 */
interface MediaTextLayoutProps {
  title: string;
  description: string;
  mediaUrl: string;
  reverse?: boolean;
  className?: string;
}

/**
 * 动画变体定义
 * 修复了 ease 属性的类型问题，使用 as const 确保类型安全
 */
const animationVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  item: {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const  // 使用 as const 确保类型安全
      }
    }
  },
  media: {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const  // 使用 as const 确保类型安全
      }
    }
  }
};

/**
 * MediaTextLayout 组件
 * 提供媒体和文本的响应式布局组件，支持正向和反向布局
 * 
 * @param {MediaTextLayoutProps} props - 组件属性
 * @returns {React.FC} React 函数组件
 */
const MediaTextLayout: React.FC<MediaTextLayoutProps> = ({
  title,
  description,
  mediaUrl,
  reverse = false,
  className
}) => {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={animationVariants.container}
    >
      {/* 文本内容区域 */}
      <motion.div
        className={cn(
          "space-y-6",
          reverse ? "lg:order-2" : "lg:order-1"
        )}
        variants={animationVariants.item}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          variants={animationVariants.item}
        >
          {title}
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          variants={animationVariants.item}
        >
          {description}
        </motion.p>
        
        <motion.div
          className="flex flex-wrap gap-4"
          variants={animationVariants.item}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            了解更多
          </button>
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            查看案例
          </button>
        </motion.div>
      </motion.div>

      {/* 媒体内容区域 */}
      <motion.div
        className={cn(
          "relative",
          reverse ? "lg:order-1" : "lg:order-2"
        )}
        variants={animationVariants.item}
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-xl"
          variants={animationVariants.media}
        >
          <img
            src={mediaUrl}
            alt={title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          
          {/* 装饰性渐变覆盖层 */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none" />
        </motion.div>
        
        {/* 装饰性背景元素 */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 -z-10" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-20 -z-10" />
      </motion.div>
    </motion.div>
  );
};

export default MediaTextLayout;
export type { MediaTextLayoutProps };
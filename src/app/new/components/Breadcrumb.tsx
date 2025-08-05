import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * 面包屑导航组件
 * 用于显示当前页面在网站层级中的位置
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className={`flex ${className}`} aria-label="面包屑导航">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {/* 分隔符 */}
            {index > 0 && (
              <svg
                className="w-4 h-4 text-gray-400 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            {/* 面包屑项 */}
            {item.current || !item.href ? (
              <span
                className={`text-sm font-medium ${
                  item.current
                    ? 'text-gray-500 cursor-default'
                    : 'text-gray-700'
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

/**
 * 生成新闻相关的面包屑导航
 */
export const generateNewsBreadcrumb = (
  newsTitle?: string,
  category?: string
): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [
    {
      label: '首页',
      href: '/'
    },
    {
      label: '新闻资讯',
      href: '/new'
    }
  ];

  // 如果有分类，添加分类面包屑
  if (category) {
    items.push({
      label: category,
      href: `/new?category=${encodeURIComponent(category)}`
    });
  }

  // 如果有新闻标题，添加当前新闻面包屑
  if (newsTitle) {
    items.push({
      label: newsTitle.length > 30 ? `${newsTitle.substring(0, 30)}...` : newsTitle,
      current: true
    });
  }

  return items;
};

/**
 * 新闻面包屑组件的便捷封装
 */
export const NewsBreadcrumb: React.FC<{
  newsTitle?: string;
  category?: string;
  className?: string;
}> = ({ newsTitle, category, className }) => {
  const items = generateNewsBreadcrumb(newsTitle, category);
  return <Breadcrumb items={items} className={className} />;
};

export default Breadcrumb;
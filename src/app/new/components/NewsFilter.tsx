import React, { useState, useEffect, useRef } from 'react';
import { NewsCategory, NewsCategoryLabels, SortBy, SortOrder } from '../types';

interface NewsFilterProps {
  category?: NewsCategory;
  onCategoryChange: (category?: NewsCategory) => void;
  showSortDropdown?: boolean;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
  onSortChange?: (sortBy: SortBy, sortOrder: SortOrder) => void;
}

/**
 * 新闻筛选组件 - 简化版本
 * 提供新闻分类筛选和排序功能
 */
const NewsFilter: React.FC<NewsFilterProps> = ({
  category,
  onCategoryChange,
  showSortDropdown = true,
  sortBy = 'publishDate',
  sortOrder = 'desc',
  onSortChange
}) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 排序选项配置
  const sortOptions = [
    { key: 'publishDate', label: '最新发布', sortBy: 'publishDate' as SortBy, sortOrder: 'desc' as SortOrder },
    { key: 'viewCount', label: '最多浏览', sortBy: 'viewCount' as SortBy, sortOrder: 'desc' as SortOrder },
    { key: 'publishDateAsc', label: '最早发布', sortBy: 'publishDate' as SortBy, sortOrder: 'asc' as SortOrder },
  ];

  // 获取当前排序选项的显示文本
  const getCurrentSortLabel = () => {
    const currentOption = sortOptions.find(
      option => option.sortBy === sortBy && option.sortOrder === sortOrder
    );
    return currentOption?.label || '最新发布';
  };

  // 处理排序选项点击
  const handleSortOptionClick = (option: typeof sortOptions[0]) => {
    if (onSortChange) {
      onSortChange(option.sortBy, option.sortOrder);
    }
    setSortDropdownOpen(false);
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    };

    if (sortDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sortDropdownOpen]);

  return (
    <div className="bg-white">
      {/* 新闻分类筛选区域 */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 space-y-4 lg:space-y-0">
        {/* 分类标签区域 */}
        <div className="flex-1 min-w-0">
          {/* 移动端：可滚动的水平布局 */}
          <div className="flex lg:hidden overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            <div className="flex items-center space-x-2 min-w-max">
              {/* 全部按钮 */}
              <button
                onClick={() => onCategoryChange()}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  !category
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                全部
              </button>
              
              {/* 分类按钮 */}
              {Object.entries(NewsCategoryLabels).map(([cat, label]) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat as NewsCategory)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                    category === cat
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 桌面端：正常的水平布局 */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* 全部按钮 */}
            <button
              onClick={() => onCategoryChange()}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                !category
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              全部
            </button>
            
            {/* 分类按钮 */}
            {Object.entries(NewsCategoryLabels).map(([cat, label]) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat as NewsCategory)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
                  category === cat
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* 右侧排序下拉菜单 */}
        {showSortDropdown && (
          <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              className={`flex items-center justify-between w-full lg:w-auto space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 border border-gray-200 lg:border-0 ${
                sortDropdownOpen 
                  ? 'bg-blue-50 text-blue-700 border-blue-200 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              <span>{getCurrentSortLabel()}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${sortDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* 下拉菜单 */}
            {sortDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option.key}
                      onClick={() => handleSortOptionClick(option)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-150 ${
                        sortBy === option.sortBy && sortOrder === option.sortOrder
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsFilter;
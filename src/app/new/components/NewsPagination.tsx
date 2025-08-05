import React from 'react';

interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  showPageSizeSelector?: boolean;
}

/**
 * 新闻分页组件
 * 提供页码导航、页面大小选择等功能
 */
const NewsPagination: React.FC<NewsPaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onPageSizeChange,
  showPageSizeSelector = true
}) => {
  /**
   * 生成页码数组
   * 智能显示页码，避免页码过多
   */
  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 7; // 最多显示7个页码

    if (totalPages <= maxVisiblePages) {
      // 如果总页数不超过最大显示数，显示所有页码
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // 复杂的页码显示逻辑
      if (currentPage <= 4) {
        // 当前页在前面
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // 当前页在后面
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // 当前页在中间
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  /**
   * 处理页码点击
   */
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  /**
   * 处理页面大小变更
   */
  const handlePageSizeChange = (newPageSize: number) => {
    if (onPageSizeChange) {
      onPageSizeChange(newPageSize);
    }
  };

  /**
   * 获取当前页显示的数据范围
   */
  const getDataRange = () => {
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalItems);
    return { start, end };
  };

  // 如果没有数据或只有一页，不显示分页
  if (totalItems === 0 || totalPages <= 1) {
    return null;
  }

  const { start, end } = getDataRange();
  const pageNumbers = generatePageNumbers();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        {/* 数据统计信息 */}
        <div className="text-sm text-gray-600">
          显示第 <span className="font-medium text-gray-900">{start}</span> 到{' '}
          <span className="font-medium text-gray-900">{end}</span> 条，
          共 <span className="font-medium text-gray-900">{totalItems}</span> 条新闻
        </div>

        {/* 页码导航 */}
        <div className="flex items-center space-x-2">
          {/* 上一页按钮 */}
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 text-sm rounded-lg transition-colors ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 页码按钮 */}
          {pageNumbers.map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-sm text-gray-400">...</span>
              ) : (
                <button
                  onClick={() => handlePageClick(page as number)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}

          {/* 下一页按钮 */}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 text-sm rounded-lg transition-colors ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 页面大小选择器 */}
        {showPageSizeSelector && onPageSizeChange && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">每页显示:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => handlePageSizeChange(Number(e.target.value))}
              className="px-3 py-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={10}>10条</option>
              <option value={20}>20条</option>
              <option value={50}>50条</option>
              <option value={100}>100条</option>
            </select>
          </div>
        )}
      </div>

      {/* 快速跳转 */}
      {totalPages > 10 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-600">跳转到第</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              className="w-16 px-2 py-1 text-sm text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const page = parseInt((e.target as HTMLInputElement).value);
                  if (page >= 1 && page <= totalPages) {
                    handlePageClick(page);
                    (e.target as HTMLInputElement).value = '';
                  }
                }
              }}
            />
            <span className="text-sm text-gray-600">页</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPagination;
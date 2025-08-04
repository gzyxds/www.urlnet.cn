import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Eye, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  id: string | number;
  slug?: string;
  title: string;
  summary: string;
  category: string;
  publishDate: string;
  views: number;
  imageUrl?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  slug,
  title,
  summary,
  category,
  publishDate,
  views,
  imageUrl,
}) => {
  const linkPath = slug ? `/news/${slug}` : `/news/${id}`;

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-gray-200 overflow-hidden h-full flex flex-col group"
    >
      <Link to={linkPath} className="h-full flex flex-col">
        {/* 图片区域 */}
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-blue-600 text-white px-3 py-1 text-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {summary}
          </p>

          {/* 元信息和阅读更多 */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {publishDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  {views} 浏览
                </span>
            </div>
            <div className="flex items-center gap-1 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                阅读更多 <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;
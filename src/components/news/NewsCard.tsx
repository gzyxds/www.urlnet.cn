import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Eye, ArrowRight, Tag, Heart, Bookmark, Share2 } from 'lucide-react';

interface NewsCardProps {
  id: string | number;
  slug?: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  likes?: number;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
  variant?: 'default' | 'compact' | 'featured' | 'list';
  className?: string;
  onLike?: (id: string | number) => void;
  onBookmark?: (id: string | number) => void;
  onShare?: (id: string | number) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  slug,
  title,
  summary,
  category,
  author,
  publishDate,
  readTime,
  views,
  likes = 0,
  tags,
  featured = false,
  imageUrl,
  variant = 'default',
  className = '',
  onLike,
  onBookmark,
  onShare
}) => {
  const cardVariants = {
    default: 'bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group',
    compact: 'bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group',
    featured: 'bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group',
    list: 'bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group flex'
  };

  const imageVariants = {
    default: 'aspect-video',
    compact: 'aspect-square',
    featured: 'aspect-video',
    list: 'aspect-video w-48 flex-shrink-0'
  };

  const linkPath = slug ? `/news/${slug}` : `/news/${id}`;

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

  if (variant === 'list') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${cardVariants[variant]} ${className}`}
      >
        <Link to={linkPath} className="flex">
          {/* 图片区域 */}
          <div className={`${imageVariants[variant]} bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden`}>
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            )}
            <div className="absolute inset-0 bg-black/10"></div>
            {featured && (
              <div className="absolute top-2 left-2">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  精选
                </span>
              </div>
            )}
          </div>

          {/* 内容区域 */}
          <div className="flex-1 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-600 text-white px-3 py-1 text-xs font-medium">
                {category}
              </span>
              <span className="text-xs text-gray-500">{publishDate}</span>
            </div>

            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 text-lg">
              {title}
            </h3>

            <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
              {summary}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {author}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {views}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {readTime}
                </span>
              </div>

              {/* 操作按钮 */}
              <div className="flex items-center gap-1">
                {onLike && (
                  <button
                    onClick={(e) => handleActionClick(e, () => onLike(id))}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                )}
                {onBookmark && (
                  <button
                    onClick={(e) => handleActionClick(e, () => onBookmark(id))}
                    className="p-1 text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                )}
                {onShare && (
                  <button
                    onClick={(e) => handleActionClick(e, () => onShare(id))}
                    className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${cardVariants[variant]} ${className}`}
    >
      <Link to={linkPath} className="block">
        {/* 图片区域 */}
        <div className={`${imageVariants[variant]} bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden`}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
          )}
          <div className="absolute inset-0 bg-black/10"></div>
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium">
                精选
              </span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className="bg-white/90 text-gray-700 px-3 py-1 text-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* 内容区域 */}
        <div className={variant === 'featured' ? 'p-8' : 'p-6'}>
          {/* 元信息 */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {publishDate}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {views}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime}
            </span>
            {likes > 0 && (
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {likes}
              </span>
            )}
          </div>

          {/* 标题 */}
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 ${
            variant === 'featured' ? 'text-2xl' : variant === 'compact' ? 'text-lg' : 'text-xl'
          }`}>
            {title}
          </h3>

          {/* 摘要 */}
          <p className={`text-gray-600 mb-4 line-clamp-2 ${
            variant === 'featured' ? 'text-base' : 'text-sm'
          }`}>
            {summary}
          </p>

          {/* 标签 */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 text-xs hover:bg-blue-600 hover:text-white transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* 底部信息 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* 操作按钮 */}
              <div className="flex items-center gap-1">
                {onLike && (
                  <button
                    onClick={(e) => handleActionClick(e, () => onLike(id))}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                )}
                {onBookmark && (
                  <button
                    onClick={(e) => handleActionClick(e, () => onBookmark(id))}
                    className="p-1 text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                )}
                {onShare && (
                  <button
                    onClick={(e) => handleActionClick(e, () => onShare(id))}
                    className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <span className="text-sm">阅读更多</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;
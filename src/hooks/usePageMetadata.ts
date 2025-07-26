import { useEffect } from 'react';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
}

export const usePageMetadata = ({ title, description, keywords }: PageMetadata) => {
  useEffect(() => {
    // 设置页面标题
    document.title = title;
    
    // 设置meta描述
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
    
    // 设置meta关键词
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }
  }, [title, description, keywords]);
};
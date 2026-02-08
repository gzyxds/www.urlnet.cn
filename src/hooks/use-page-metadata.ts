import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

/**
 * 设置页面元数据的 Hook
 * 自动处理 Title, Meta Tags, Open Graph, Twitter Cards 和 Canonical URL
 */
export const usePageMetadata = ({
  title,
  description,
  keywords,
  image = 'https://www.urlnet.cn/logo.png',
  type = 'website',
  publishedTime,
  author = '艺创AI'
}: PageMetadata) => {
  const location = useLocation();
  const currentUrl = `https://www.urlnet.cn${location.pathname}`;

  useEffect(() => {
    // 1. 设置基础 SEO
    document.title = title;
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', author);

    // 2. 设置 Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:image', image.startsWith('http') ? image : `https://www.urlnet.cn${image}`, 'property');
    updateMeta('og:site_name', '艺创AI', 'property');
    updateMeta('og:locale', 'zh_CN', 'property');

    if (publishedTime) {
      updateMeta('article:published_time', publishedTime, 'property');
      updateMeta('article:author', author, 'property');
    }

    // 3. 设置 Twitter Card
    updateMeta('twitter:card', 'summary_large_image', 'name'); // Twitter 使用 name 属性
    updateMeta('twitter:title', title, 'name');
    updateMeta('twitter:description', description, 'name');
    updateMeta('twitter:image', image.startsWith('http') ? image : `https://www.urlnet.cn${image}`, 'name');

    // 4. 设置 Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', currentUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', currentUrl);
      document.head.appendChild(linkCanonical);
    }

  }, [title, description, keywords, image, type, publishedTime, author, currentUrl]);
};

/**
 * 辅助函数：更新或创建 meta 标签
 * @param name 标签名称或属性名称
 * @param content 标签内容
 * @param attributeKey 属性键名 ('name' 或 'property')
 */
function updateMeta(name: string, content: string, attributeKey: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attributeKey}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeKey, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

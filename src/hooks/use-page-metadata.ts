import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 页面元数据接口定义
 */
interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  author?: string;
  /** JSON-LD 结构化数据 */
  jsonLd?: Record<string, unknown>;
}

/**
 * 默认的组织结构化数据
 */
const DEFAULT_ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '艺创AI',
  url: 'https://www.urlnet.cn',
  logo: 'https://www.urlnet.cn/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service'
  }
};

/**
 * 设置页面元数据的 Hook
 * 自动处理 Title, Meta Tags, Open Graph, Twitter Cards, Canonical URL 和 JSON-LD 结构化数据
 * 
 * @param params - 页面元数据参数
 * @param params.title - 页面标题
 * @param params.description - 页面描述
 * @param params.keywords - 关键词
 * @param params.image - 分享图片URL
 * @param params.type - 页面类型
 * @param params.publishedTime - 发布时间（文章类型使用）
 * @param params.author - 作者名称
 * @param params.jsonLd - 自定义JSON-LD结构化数据
 */
export const usePageMetadata = ({
  title,
  description,
  keywords,
  image = 'https://www.urlnet.cn/logo.png',
  type = 'website',
  publishedTime,
  author = '艺创AI',
  jsonLd
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
    updateMeta('twitter:card', 'summary_large_image', 'name');
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

    // 5. 设置 JSON-LD 结构化数据
    updateJsonLd(jsonLd);

  }, [title, description, keywords, image, type, publishedTime, author, currentUrl, jsonLd]);
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

/**
 * 辅助函数：更新或创建 JSON-LD 结构化数据脚本标签
 * @param customJsonLd 自定义的JSON-LD数据（可选）
 */
function updateJsonLd(customJsonLd?: Record<string, unknown>) {
  // 构建结构化数据数组：始终包含默认的组织信息
  const schemaData = customJsonLd 
    ? [DEFAULT_ORGANIZATION_SCHEMA, customJsonLd] 
    : [DEFAULT_ORGANIZATION_SCHEMA];

  // 查找现有的 JSON-LD 脚本标签
  let scriptElement = document.querySelector('script[type="application/ld+json"]');

  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptElement);
  }

  scriptElement.textContent = JSON.stringify(schemaData);
}

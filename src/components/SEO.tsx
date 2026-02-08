import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  author?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonLd?: Record<string, any>; // 结构化数据
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = 'https://www.urlnet.cn/logo.png',
  type = 'website',
  publishedTime,
  author = '艺创AI',
  jsonLd
}) => {
  const location = useLocation();
  const currentUrl = `https://www.urlnet.cn${location.pathname}`;
  const finalImage = image.startsWith('http') ? image : `https://www.urlnet.cn${image}`;

  // 默认的结构化数据 (Organization)
  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '艺创AI',
    url: 'https://www.urlnet.cn',
    logo: 'https://www.urlnet.cn/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '', // 建议补充
      contactType: 'customer service'
    }
  };

  const schemaData = jsonLd ? [defaultJsonLd, jsonLd] : [defaultJsonLd];

  return (
    <Helmet>
      {/* 基础 Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="艺创AI" />
      <meta property="og:locale" content="zh_CN" />

      {/* Article Specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {publishedTime && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* JSON-LD 结构化数据 */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

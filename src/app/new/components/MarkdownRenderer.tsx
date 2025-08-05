import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Markdown 内容渲染器组件
 * 将 Markdown 文本转换为 HTML 并应用样式
 */
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = ''
}) => {
  /**
   * 简单的 Markdown 解析器
   * 支持常用的 Markdown 语法
   */
  const parseMarkdown = (text: string): string => {
    let html = text;

    // 代码块 (```)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre class="bg-gray-100 rounded-lg p-4 overflow-x-auto my-4"><code class="text-sm ${lang ? `language-${lang}` : ''}">${escapeHtml(code.trim())}</code></pre>`;
    });

    // 行内代码 (`)
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>');

    // 标题 (# ## ###)
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 mt-10 mb-6">$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>');

    // 粗体 (**)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');

    // 斜体 (*)
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');

    // 链接 [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>');

    // 图片 ![alt](src)
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full h-auto rounded-lg my-4 mx-auto block" loading="lazy" />');

    // 无序列表 (-)
    html = html.replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>');
    html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside space-y-2 my-4 ml-4">$1</ul>');

    // 有序列表 (1.)
    html = html.replace(/^\d+\. (.*$)/gm, '<li class="mb-2">$1</li>');
    html = html.replace(/(<li.*<\/li>)/s, '<ol class="list-decimal list-inside space-y-2 my-4 ml-4">$1</ol>');

    // 引用 (>)
    html = html.replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700">$1</blockquote>');

    // 水平分割线 (---)
    html = html.replace(/^---$/gm, '<hr class="border-t border-gray-300 my-8" />');

    // 段落 (双换行)
    html = html.replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed text-gray-700">');
    html = '<p class="mb-4 leading-relaxed text-gray-700">' + html + '</p>';

    // 单换行
    html = html.replace(/\n/g, '<br />');

    // 清理空段落
    html = html.replace(/<p class="[^"]*">\s*<\/p>/g, '');

    return html;
  };

  /**
   * HTML 转义函数
   */
  const escapeHtml = (text: string): string => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  /**
   * 处理代码高亮
   */
  const highlightCode = (html: string): string => {
    // 这里可以集成代码高亮库，如 Prism.js 或 highlight.js
    // 目前使用简单的样式
    return html.replace(
      /<code class="language-(\w+)">([\s\S]*?)<\/code>/g,
      (match, lang, code) => {
        const langClass = getLanguageClass(lang);
        return `<code class="language-${lang} ${langClass}">${code}</code>`;
      }
    );
  };

  /**
   * 根据语言获取样式类
   */
  const getLanguageClass = (lang: string): string => {
    const langStyles: Record<string, string> = {
      javascript: 'text-yellow-600',
      typescript: 'text-blue-600',
      python: 'text-green-600',
      java: 'text-red-600',
      css: 'text-purple-600',
      html: 'text-orange-600',
      json: 'text-gray-600',
      bash: 'text-gray-800',
      shell: 'text-gray-800'
    };
    return langStyles[lang] || 'text-gray-700';
  };

  // 解析 Markdown 内容
  const htmlContent = highlightCode(parseMarkdown(content));

  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{
        // 自定义样式覆盖
        lineHeight: '1.7',
      }}
    />
  );
};

export default MarkdownRenderer;
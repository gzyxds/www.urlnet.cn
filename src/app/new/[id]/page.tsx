import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { usePageMetadata } from '@/hooks/use-page-metadata';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getPostBySlug, getSurroundingPosts, Post, SurroundingPosts } from '../lib/posts';
import { ChevronRight, Calendar, Clock, User, ArrowLeft, ArrowRight, List, Check, Link as LinkIcon } from 'lucide-react';
import 'highlight.js/styles/github.css';

// 目录项类型
interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [surround, setSurround] = useState<SurroundingPosts | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // SEO Meta 配置
  usePageMetadata({
    title: post ? `${post.title} - 艺创AI技术博客` : '文章详情 - 艺创AI技术博客',
    description: post ? post.summary : '艺创AI技术博客文章详情页，分享人工智能前沿技术与实战经验。',
    keywords: post ? `${post.category}, ${post.title}, 艺创AI, 人工智能` : '艺创AI, 技术博客, 人工智能'
  });

  // 加载数据
  useEffect(() => {
    if (id) {
      setLoading(true);
      window.scrollTo(0, 0);

      Promise.all([
        getPostBySlug(id),
        getSurroundingPosts(id)
      ]).then(([postData, surroundData]) => {
        setPost(postData);
        setSurround(surroundData);

        // 生成目录
        if (postData) {
          const lines = postData.content.split('\n');
          const items: TocItem[] = [];
          lines.forEach((line) => {
            const match = line.match(/^(#{2,3})\s+(.+)$/);
            if (match) {
              const level = match[1].length;
              const text = match[2];
              const id = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-');
              items.push({ id, text, level });
            }
          });
          setToc(items);
        }

        setLoading(false);
      });
    }
  }, [id]);

  // 滚动监听 (进度条 & TOC高亮)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // TOC Active State
      const headings = document.querySelectorAll('h2, h3');
      let currentId = '';
      headings.forEach((heading) => {
        const top = heading.getBoundingClientRect().top;
        if (top < 100) {
          currentId = heading.id;
        }
      });
      if (currentId) setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 复制链接
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 自定义 Markdown 渲染组件以添加 ID 和优化样式
  const MarkdownComponents = {
    h2: ({ children }: any) => {
      const text = children[0];
      const id = typeof text === 'string' ? text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-') : '';
      return <h2 id={id} className="text-2xl font-bold mt-12 mb-6 scroll-mt-32 pb-2 border-b border-gray-100">{children}</h2>;
    },
    h3: ({ children }: any) => {
      const text = children[0];
      const id = typeof text === 'string' ? text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-') : '';
      return <h3 id={id} className="text-xl font-bold mt-8 mb-4 scroll-mt-32 text-gray-800">{children}</h3>;
    },
    p: ({ children }: any) => <p className="mb-6 leading-relaxed text-gray-600">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-600">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-600">{children}</ol>,
    li: ({ children }: any) => <li className="pl-1">{children}</li>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-8 bg-blue-50/50 rounded-r-lg text-gray-700 italic">
        {children}
      </blockquote>
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <code className={className} {...props}>
          {children}
        </code>
      ) : (
        <code className="bg-gray-100 text-[#d73a49] px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200" {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }: any) => (
      <div className="relative mb-8 rounded-xl overflow-hidden bg-gray-50 shadow-sm border border-gray-200 group my-6">
        <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-200">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
            <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
          </div>
          <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            Code
          </div>
        </div>
        <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-gray-800 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {children}
        </pre>
      </div>
    ),
    img: ({ src, alt }: any) => (
      <figure className="my-8">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          loading="lazy"
        />
        {alt && <figcaption className="text-center text-sm text-gray-400 mt-3">{alt}</figcaption>}
      </figure>
    ),
    a: ({ href, children }: any) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-800 underline-offset-2 transition-all"
      >
        {children}
      </a>
    ),
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: any) => <thead className="bg-gray-50">{children}</thead>,
    th: ({ children }: any) => <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>,
    tbody: ({ children }: any) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>,
    td: ({ children }: any) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{children}</td>,
    hr: () => <hr className="my-12 border-gray-100" />
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">加载中...</div>;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
        <button onClick={() => navigate('/new')} className="text-blue-600 hover:underline">返回列表</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 顶部进度条 */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* 左侧主要内容 */}
          <main className="lg:col-span-8">
            {/* 面包屑 */}
            <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-blue-600 transition-colors">首页</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
              <Link to="/new" className="hover:text-blue-600 transition-colors">技术博客</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-300" />
              <span className="text-gray-900 font-medium truncate max-w-[200px]">{post.title}</span>
            </nav>

            <article>
              {/* 文章头部 */}
              <header className="mb-10 border-b border-gray-100 pb-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100">
                    {post.category}
                  </span>
                  <time className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.publishDate.toLocaleDateString('zh-CN')}
                  </time>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime} 分钟阅读
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                  {post.title}
                </h1>

                {/* 作者信息 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 overflow-hidden">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{post.author.name}</div>
                    <div className="text-gray-500">@urlnet_official</div>
                  </div>
                </div>
              </header>

              {/* 特色图片 */}
              {post.coverImage && (
                <div className="mb-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-video relative">
                  <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* 文章正文 */}
              <div className="prose prose-lg prose-blue max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={MarkdownComponents}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* 底部操作栏 */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <Link
                  to="/new"
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回博客列表
                </Link>

                <button
                  onClick={copyLink}
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    copied ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <LinkIcon className="w-4 h-4 mr-2" />}
                  {copied ? '已复制链接' : '复制链接'}
                </button>
              </div>

              {/* 上一篇/下一篇导航 */}
              {surround && (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {surround.prev ? (
                    <Link
                      to={`/new/${surround.prev.slug}`}
                      className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500/30 hover:shadow-md transition-all text-left block"
                    >
                      <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        上一篇
                      </div>
                      <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {surround.prev.title}
                      </div>
                    </Link>
                  ) : (
                    <div className="hidden md:block"></div>
                  )}

                  {surround.next && (
                    <Link
                      to={`/new/${surround.next.slug}`}
                      className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500/30 hover:shadow-md transition-all text-right block"
                    >
                      <div className="text-xs text-gray-500 mb-2 flex items-center gap-1 justify-end">
                        下一篇
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {surround.next.title}
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </article>
          </main>

          {/* 右侧侧边栏 (TOC) */}
          <aside className="hidden lg:block lg:col-span-4 pl-8">
            <div className="sticky top-32">
              <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-gray-900 font-bold mb-6">
                  <List className="w-5 h-5 text-blue-600" />
                  目录导航
                </div>

                {toc.length > 0 ? (
                  <nav className="space-y-1 relative">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                          setActiveId(item.id);
                        }}
                        className={`block py-1.5 px-3 text-sm rounded-lg transition-colors duration-200 ${
                          activeId === item.id
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        } ${item.level === 3 ? 'ml-4' : ''}`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                ) : (
                  <div className="text-sm text-gray-400 italic">
                    暂无目录
                  </div>
                )}

                {/* 关注我们 */}
                <div className="mt-8 pt-6 border-t border-gray-200/60">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">关注我们</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden mb-2 p-1">
                        <img src="/images/wechat.png" alt="微信公众号" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs text-gray-500">微信公众号</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <div className="w-20 h-20 bg-white rounded-lg border border-gray-200 overflow-hidden mb-2 p-1">
                        <img src="/images/qrcode.png" alt="联系客服" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs text-gray-500">联系客服</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Eye, 
  Clock, 
  Tag, 
  Share2, 
  Bookmark, 
  Heart,
  Copy,
  Check,
  Loader2,
  MessageCircle,
  BookOpen,
  List,
  Menu,
  X
} from 'lucide-react'
import { MarkdownNewsManager as NewsAPI, NewsItem } from '@/lib/newsApi'
import { MarkdownLoader } from '@/lib/markdownLoader'
import { Link } from 'react-router-dom'

interface TOCItem {
  id: string
  text: string
  level: number
  children?: TOCItem[]
}

export default function NewsDetailPage() {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id as string
  const [news, setNews] = useState<NewsItem | null>(null)
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([])
  const [shareMenuOpen, setShareMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  const [toc, setToc] = useState<TOCItem[]>([])
  const [activeSection, setActiveSection] = useState<string>('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadNewsDetail = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        setError(null)
        
        // 获取新闻详情
        const newsDetail = await NewsAPI.getNewsBySlug(id as string)
        if (!newsDetail) {
          setError('新闻不存在')
          return
        }
        
        setNews(newsDetail)
        
        // 加载 Markdown 内容
        try {
          const content = await MarkdownLoader.loadMarkdownFile(newsDetail.slug)
          if (content) {
            setMarkdownContent(content.html)
            
            // 生成目录
            setToc(content.tableOfContents.map(item => ({
              id: item.id,
              text: item.title,
              level: item.level,
              children: item.children?.map(child => ({
                id: child.id,
                text: child.title,
                level: child.level
              }))
            })))
          } else {
            setMarkdownContent(newsDetail.content || '')
          }
        } catch (contentError) {
          console.warn('加载 Markdown 内容失败:', contentError)
          setMarkdownContent(newsDetail.content || '')
        }
        
        // 获取相关新闻
        const related = await NewsAPI.getRelatedNews(newsDetail.id, 3)
        setRelatedNews(related)
        
        // 增加浏览量
        NewsAPI.incrementViews(newsDetail.id)
        
        // 更新新闻数据中的浏览量
        setNews(prev => prev ? { ...prev, views: prev.views + 1 } : null)
        
      } catch (err) {
        console.error('加载新闻详情失败:', err)
        setError('加载失败，请稍后重试')
      } finally {
        setLoading(false)
      }
    }
    
    loadNewsDetail()
  }, [id])

  // 监听滚动，更新阅读进度和活跃章节
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))

      
      // 更新活跃章节
      if (toc.length > 0) {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        const scrollPosition = scrollTop + 100
        
        for (let i = headings.length - 1; i >= 0; i--) {
          const heading = headings[i] as HTMLElement
          if (heading.offsetTop <= scrollPosition) {
            setActiveSection(heading.id)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [toc])

  // 处理点赞
  const handleLike = async () => {
    if (!news) return
    
    try {
      await NewsAPI.toggleLike(news.id)
      setLiked(!liked)
      setNews(prev => prev ? { 
        ...prev, 
        likes: liked ? prev.likes - 1 : prev.likes + 1 
      } : null)
    } catch (error) {
      console.error('点赞失败:', error)
    }
  }

  // 处理收藏
  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  // 处理分享
  const handleShare = async (platform?: string) => {
    if (!news) return

    const url = window.location.href
    const title = news.title

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error('复制失败:', error)
      }
    } else {
      if (navigator.share) {
        try {
          await navigator.share({ title, url })
        } catch (error) {
          console.error('分享失败:', error)
        }
      } else {
        setShareMenuOpen(!shareMenuOpen)
      }
    }
  }

  // 滚动到指定章节
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setSidebarOpen(false)
    }
  }



  // 渲染目录项
  const renderTocItem = (item: TOCItem, depth = 0) => (
    <div key={item.id} className={`${depth > 0 ? 'ml-4' : ''}`}>
      <button
        onClick={() => scrollToSection(item.id)}
        className={`block w-full text-left py-2 px-3 text-sm transition-all duration-200 rounded-lg ${
          activeSection === item.id
            ? 'bg-black text-white font-medium'
            : 'text-gray-600 hover:bg-gray-100 hover:text-black'
        }`}
      >
        <span className="flex items-center">
          {depth > 0 && <span className="w-2 h-2 bg-gray-300 rounded-full mr-2 flex-shrink-0" />}
          {item.text}
        </span>
      </button>
      {item.children && item.children.map(child => renderTocItem(child, depth + 1))}
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Loader2 className="h-8 w-8 animate-spin text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">正在加载...</p>
        </motion.div>
      </div>
    )
  }

  if (error || !news) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <div className="text-6xl mb-6">😕</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error || '新闻不存在'}
          </h1>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回新闻列表
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 阅读进度条 */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-100 z-50">
        <motion.div
          className="h-full bg-black"
          style={{ width: `${readingProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* 顶部导航 */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/news')}
                className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">返回</span>
              </button>
              
              {/* 移动端目录按钮 */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleBookmark}
                className={`p-2 rounded-full transition-colors ${
                  bookmarked 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>
              
              <div className="relative">
                <button
                  onClick={() => handleShare()}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                
                {shareMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="absolute right-0 top-12 bg-white rounded-xl shadow-lg border border-gray-200 p-2 min-w-[160px]"
                  >
                    <button
                      onClick={() => handleShare('copy')}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      {copied ? '已复制' : '复制链接'}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 主要内容区域 - 左右布局 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* 左侧主内容 */}
          <div className="flex-1 min-w-0">
            <main ref={contentRef}>
              {/* 文章头部 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                 {/* 分类标签 */}
                 <div className="flex items-center gap-3 mb-6">
                   <span className="px-3 py-1 bg-black text-white text-sm rounded-full">
                     {news.category}
                   </span>
                   {news.featured && (
                     <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                       精选
                     </span>
                   )}
                 </div>

                 {/* 标题 */}
                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                   {news.title}
                 </h1>

                 {/* 摘要 */}
                 <p className="text-xl text-gray-600 leading-relaxed mb-8">
                   {news.summary}
                 </p>

                 {/* 元信息 */}
                 <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                   <div className="flex items-center gap-2">
                     <User className="w-4 h-4" />
                     <span>{news.author}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Calendar className="w-4 h-4" />
                     <span>{news.publishDate}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Clock className="w-4 h-4" />
                     <span>{news.readTime}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Eye className="w-4 h-4" />
                     <span>{news.views.toLocaleString()} 阅读</span>
                   </div>
                 </div>

                 {/* 封面图片 */}
                 {news.imageUrl && (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.2 }}
                     className="mb-12"
                   >
                     <img
                       src={news.imageUrl}
                       alt={news.title}
                       className="w-full h-[400px] object-cover rounded-2xl"
                     />
                   </motion.div>
                 )}
               </motion.div>

        {/* 文章内容 */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg prose-gray max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: markdownContent }}
        />

        {/* 标签 */}
        {news.tags && news.tags.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">标签</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* 互动区域 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between py-8 border-t border-gray-100 mb-16"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                liked 
                  ? 'bg-red-50 text-red-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span>{news.likes}</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>评论</span>
            </button>
          </div>

          <button
            onClick={() => handleShare()}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>分享</span>
          </button>
        </motion.div>

        {/* 相关文章 */}
        {relatedNews.length > 0 && (
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">相关文章</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.slug}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{item.publishDate}</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {item.views}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
            </main>
          </div>

          {/* 右侧边栏 */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* 目录 */}
              {toc.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <List className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">目录</h3>
                  </div>
                  <nav className="space-y-1">
                    {toc.map((item) => renderTocItem(item))}
                  </nav>
                </motion.div>
              )}

              {/* 文章信息 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">文章信息</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">作者</span>
                    <span className="text-gray-900">{news.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">发布时间</span>
                    <span className="text-gray-900">{news.publishDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">阅读时间</span>
                    <span className="text-gray-900">{news.readTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">阅读量</span>
                    <span className="text-gray-900">{news.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">点赞数</span>
                    <span className="text-gray-900">{news.likes}</span>
                  </div>
                </div>
              </motion.div>

              {/* 快速操作 */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-4">快速操作</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleLike}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      liked 
                        ? 'bg-red-100 text-red-700 border border-red-200' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
                    <span>{liked ? '已点赞' : '点赞'}</span>
                  </button>
                  
                  <button
                    onClick={handleBookmark}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      bookmarked 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                    <span>{bookmarked ? '已收藏' : '收藏'}</span>
                  </button>
                  
                  <button
                    onClick={() => handleShare()}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>分享</span>
                  </button>
                </div>
              </motion.div>

              {/* 相关文章预览 */}
              {relatedNews.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="font-semibold text-gray-900 mb-4">相关文章</h3>
                  <div className="space-y-4">
                    {relatedNews.slice(0, 3).map((item) => (
                      <Link
                        key={item.id}
                        to={`/news/${item.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{item.publishDate}</span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {item.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 移动端目录侧边栏 */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">目录</h3>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {toc.length > 0 ? (
                  <nav className="space-y-1">
                    {toc.map((item) => renderTocItem(item))}
                  </nav>
                ) : (
                  <p className="text-gray-500 text-sm">暂无目录</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </div>
  )
}
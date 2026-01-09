'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Copy, Star, Tag, Clock, User, ChevronRight, Sparkles } from 'lucide-react';

// AI 提示词数据接口定义
interface PromptData {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  rating: number;
  usageCount: number;
  createdAt: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// 模拟数据 - 实际项目中应该从API获取
const promptsData: PromptData[] = [
  {
    id: '1',
    title: '专业文案写作助手',
    description: '帮助您创作高质量的营销文案、产品描述和广告语',
    content: '你是一位专业的文案写作专家，擅长创作吸引人的营销文案。请根据以下要求为我写一份文案：\n\n产品/服务：[在此输入产品或服务名称]\n目标受众：[描述目标客户群体]\n核心卖点：[列出主要优势]\n文案类型：[广告语/产品描述/营销邮件等]\n\n要求：\n1. 语言简洁有力，突出核心价值\n2. 符合目标受众的语言习惯\n3. 包含明确的行动号召\n4. 字数控制在[具体字数]以内',
    category: '内容创作',
    tags: ['文案写作', '营销', '广告'],
    author: '艺创AI',
    rating: 4.8,
    usageCount: 1250,
    createdAt: '2024-01-15',
    difficulty: 'intermediate'
  },
  {
    id: '2',
    title: '代码审查专家',
    description: '专业的代码质量分析和优化建议',
    content: '你是一位资深的软件工程师和代码审查专家。请对以下代码进行全面的审查和分析：\n\n```\n[在此粘贴需要审查的代码]\n```\n\n请从以下几个方面进行分析：\n1. 代码质量和可读性\n2. 性能优化建议\n3. 安全性问题\n4. 最佳实践建议\n5. 潜在的bug或问题\n6. 重构建议\n\n请提供具体的改进方案和示例代码。',
    category: '编程开发',
    tags: ['代码审查', '优化', '编程'],
    author: '技术团队',
    rating: 4.9,
    usageCount: 890,
    createdAt: '2024-01-20',
    difficulty: 'advanced'
  },
  {
    id: '3',
    title: '学习计划制定师',
    description: '为您制定个性化的学习路径和计划',
    content: '你是一位专业的学习规划师，擅长为不同背景的学习者制定个性化学习计划。请根据以下信息为我制定学习计划：\n\n学习目标：[具体想要学习的技能或知识]\n当前水平：[初学者/有一定基础/进阶]\n可用时间：[每天/每周可投入的学习时间]\n学习偏好：[理论学习/实践操作/混合模式]\n截止时间：[希望达成目标的时间]\n\n请提供：\n1. 详细的学习路径规划\n2. 每个阶段的学习重点\n3. 推荐的学习资源\n4. 实践项目建议\n5. 进度检查节点',
    category: '教育学习',
    tags: ['学习计划', '教育', '规划'],
    author: '教育专家',
    rating: 4.7,
    usageCount: 2100,
    createdAt: '2024-01-10',
    difficulty: 'beginner'
  },
  {
    id: '4',
    title: '数据分析顾问',
    description: '专业的数据分析和可视化建议',
    content: '你是一位经验丰富的数据分析师，擅长从复杂数据中提取有价值的洞察。请帮我分析以下数据：\n\n数据描述：[描述数据的来源、类型和规模]\n分析目标：[希望从数据中获得什么洞察]\n业务背景：[相关的业务场景和背景]\n\n请提供：\n1. 数据预处理建议\n2. 适合的分析方法\n3. 关键指标识别\n4. 可视化方案\n5. 结论和建议\n6. 后续行动计划\n\n如果需要，请推荐合适的工具和技术栈。',
    category: '数据分析',
    tags: ['数据分析', '可视化', '商业智能'],
    author: '数据团队',
    rating: 4.6,
    usageCount: 750,
    createdAt: '2024-01-25',
    difficulty: 'advanced'
  },
  {
    id: '5',
    title: '创意设计顾问',
    description: '提供创新的设计思路和视觉方案',
    content: '你是一位富有创意的设计师，擅长将抽象概念转化为具体的视觉设计。请为我的项目提供设计建议：\n\n项目类型：[网站/APP/品牌/海报等]\n目标受众：[描述目标用户群体]\n设计风格：[现代简约/复古/科技感等]\n品牌调性：[专业/活泼/高端/亲民等]\n功能需求：[主要功能和使用场景]\n\n请提供：\n1. 整体设计理念\n2. 色彩搭配方案\n3. 字体选择建议\n4. 布局结构规划\n5. 视觉层次设计\n6. 用户体验优化建议\n\n请用专业的设计语言描述，并解释设计决策的理由。',
    category: '设计创意',
    tags: ['UI设计', '创意', '视觉设计'],
    author: '设计团队',
    rating: 4.8,
    usageCount: 1680,
    createdAt: '2024-01-18',
    difficulty: 'intermediate'
  },
  {
    id: '6',
    title: '商业策略分析师',
    description: '深度的商业模式分析和策略建议',
    content: '你是一位资深的商业策略顾问，拥有丰富的行业经验和敏锐的商业洞察力。请对以下商业场景进行分析：\n\n公司/项目：[公司名称或项目描述]\n行业背景：[所在行业和市场环境]\n当前挑战：[面临的主要问题或挑战]\n目标：[希望达成的商业目标]\n资源状况：[可用的资源和限制条件]\n\n请提供：\n1. 市场环境分析（SWOT分析）\n2. 竞争对手分析\n3. 商业模式优化建议\n4. 增长策略规划\n5. 风险评估和应对方案\n6. 实施路线图\n\n请用数据和案例支撑你的分析和建议。',
    category: '商业策略',
    tags: ['商业分析', '策略规划', '市场分析'],
    author: '商业顾问',
    rating: 4.9,
    usageCount: 920,
    createdAt: '2024-01-22',
    difficulty: 'advanced'
  }
];

// 分类数据
const categories = ['全部', '内容创作', '编程开发', '教育学习', '数据分析', '设计创意', '商业策略'];

// 难度级别映射
const difficultyMap = {
  beginner: { label: '初级', color: 'bg-green-100 text-green-800' },
  intermediate: { label: '中级', color: 'bg-yellow-100 text-yellow-800' },
  advanced: { label: '高级', color: 'bg-red-100 text-red-800' }
};

const TipsPage: React.FC = () => {
  // 状态管理
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedPrompt, setSelectedPrompt] = useState<PromptData | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 过滤和搜索逻辑
  const filteredPrompts = useMemo(() => {
    return promptsData.filter(prompt => {
      const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           prompt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === '全部' || prompt.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // 复制提示词内容
  const handleCopy = async (content: string, id: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  // 格式化日期
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 页面头部 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">AI 提示词库</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精选高质量的 AI 提示词模板，助力您的创作和工作效率提升
            </p>
            <div className="mt-10 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>{promptsData.length} 个精选提示词</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>专业团队精心制作</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>持续更新</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧：搜索和筛选 */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 space-y-6">
              {/* 搜索框 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="搜索提示词..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* 分类筛选 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center mb-3">
                  <Filter className="w-4 h-4 text-gray-600 mr-2" />
                  <h3 className="font-medium text-gray-900">分类筛选</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* 统计信息 */}
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h3 className="font-medium text-gray-900 mb-3">统计信息</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>总提示词数</span>
                    <span className="font-medium text-gray-900">{promptsData.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>当前显示</span>
                    <span className="font-medium text-gray-900">{filteredPrompts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>总使用次数</span>
                    <span className="font-medium text-gray-900">
                      {promptsData.reduce((sum, prompt) => sum + prompt.usageCount, 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：提示词列表 */}
          <div className="lg:w-3/4">
            {filteredPrompts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关提示词</h3>
                <p className="text-gray-500">请尝试调整搜索关键词或筛选条件</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredPrompts.map((prompt) => (
                  <div
                    key={prompt.id}
                    className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="p-6">
                      {/* 提示词头部信息 */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 mr-3">
                              {prompt.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-xl text-xs font-medium ${difficultyMap[prompt.difficulty].color}`}>
                              {difficultyMap[prompt.difficulty].label}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-3">{prompt.description}</p>

                          {/* 标签 */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {prompt.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded-xl bg-blue-50 text-blue-700 text-xs font-medium"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* 元数据 */}
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{prompt.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 mr-1 text-yellow-400" />
                              <span>{prompt.rating}</span>
                            </div>
                            <div className="flex items-center">
                              <span>{prompt.usageCount.toLocaleString()} 次使用</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{formatDate(prompt.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 操作按钮 */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button
                          onClick={() => setSelectedPrompt(selectedPrompt?.id === prompt.id ? null : prompt)}
                          className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        >
                          <span>查看详情</span>
                          <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${
                            selectedPrompt?.id === prompt.id ? 'rotate-90' : ''
                          }`} />
                        </button>

                        <button
                          onClick={() => handleCopy(prompt.content, prompt.id)}
                          className={`flex items-center px-4 py-2 rounded-xl font-medium transition-colors ${
                            copiedId === prompt.id
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          {copiedId === prompt.id ? '已复制' : '复制提示词'}
                        </button>
                      </div>

                      {/* 展开的详细内容 */}
                      {selectedPrompt?.id === prompt.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="font-medium text-gray-900 mb-3">提示词内容：</h4>
                          <div className="bg-gray-50 rounded-xl p-4">
                            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                              {prompt.content}
                            </pre>
                          </div>
                          <div className="mt-3 text-xs text-gray-500">
                            <p>💡 使用提示：将上述内容复制到您的 AI 对话中，根据实际需求填写方括号内的内容。</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 页面底部信息 */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">需要更多提示词？</h3>
            <p className="text-gray-600 mb-4">
              我们持续更新高质量的 AI 提示词模板，助力您的创作和工作
            </p>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              联系我们定制
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsPage;

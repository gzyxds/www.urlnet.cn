export interface Project {
  id: number;
  name: string;
  version: string;
  language: string;
  framework: string;
  description: string;
  features: string[];
  releaseDate: string;
  downloads: number;
  stars: number;
  price: string;
  category: string;
  tags: string[];
  status: 'latest' | 'stable' | 'beta';
  demoUrl: string;
  downloadUrl: string;
  githubUrl: string;
}

export const sourceProjects: Project[] = [
  {
    id: 1,
    name: "艺创AI-全能AI知识库系统「Python版」",
    version: "v1.2.2",
    language: "Python",
    framework: "FastAPI",
    description: "全能AI知识库系统，支持多种AI模型集成，提供完整的SaaS解决方案。系统采用模块化设计，支持快速部署和定制开发。",
    features: ["多模型集成", "SaaS架构", "模块化设计"],
    releaseDate: "2025-03-11",
    downloads: 1250,
    stars: 89,
    price: "最新",
    category: "python",
    tags: ["AI知识库", "SaaS", "Python"],
    status: "stable",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    name: "艺创AI-AI数字人SaaS系统2.0「PHP」",
    version: "v2.0.1",
    language: "PHP",
    framework: "ThinkPHP",
    description: "企业级AI数字人解决方案，支持多渠道部署和个性化配置。提供完整的API接口和管理后台，适合企业快速搭建数字人平台。",
    features: ["数字人定制", "多渠道分发", "API开放"],
    releaseDate: "2025-07-04",
    downloads: 980,
    stars: 76,
    price: "热门",
    category: "php",
    tags: ["数字人", "直播", "ThinkPHP"],
    status: "stable",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    name: "艺创AI-超级IP数字人SaaS系统",
    version: "v1.2.2",
    language: "PHP",
    framework: "ThinkPHP",
    description: "最新版本的AI数字人系统，增加了更多智能功能和优化。采用最新技术栈，性能提升显著，支持高并发场景。",
    features: ["高性能引擎", "智能交互", "IP孵化"],
    releaseDate: "2025-03-11",
    downloads: 2100,
    stars: 156,
    price: "推荐",
    category: "php",
    tags: ["IP打造", "高性能", "SaaS"],
    status: "latest",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    name: "艺创AI-全能AI知识库系统PHP版",
    version: "v2.1.0",
    language: "PHP",
    framework: "ThinkPHP",
    description: "基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PostgreSQL、pgvector技术栈开发，包含PC端、H5端。",
    features: ["RAG检索增强", "向量数据库", "全端覆盖"],
    releaseDate: "2025-07-11",
    downloads: 856,
    stars: 92,
    price: "最新",
    category: "php",
    tags: ["RAG", "知识库", "Vue3"],
    status: "stable",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    name: "艺创AI-全能AI知识库系统「Java源码版」",
    version: "v1.8.5",
    language: "Java",
    framework: "Spring Boot",
    description: "Java版本的AI知识库系统，提供完整的企业级解决方案。支持高并发访问和大数据处理，适合大型企业内部部署。",
    features: ["微服务架构", "高并发", "企业级安全"],
    releaseDate: "2025-04-07",
    downloads: 1456,
    stars: 128,
    price: "热门",
    category: "java",
    tags: ["Spring Boot", "微服务", "企业级"],
    status: "stable",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    name: "艺创AI-聊天绘画系统PHP版本",
    version: "v4.5.3",
    language: "PHP",
    framework: "ThinkPHP",
    description: "基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发，包含PC端、H5端、小程序端、APP端。",
    features: ["AI绘画", "多端互通", "会员系统"],
    releaseDate: "2025-05-15",
    downloads: 743,
    stars: 67,
    price: "最新",
    category: "php",
    tags: ["Midjourney", "Stable Diffusion", "多端"],
    status: "stable",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  },
  {
    id: 7,
    name: "艺创AI-论文写作系统",
    version: "v1.5.4",
    language: "PHP",
    framework: "ThinkPHP",
    description: "专业的AI论文写作辅助系统，支持多种学术写作场景。集成先进的NLP技术和学术数据库，辅助学术研究。",
    features: ["学术写作", "文献检索", "查重辅助"],
    releaseDate: "2025-02-28",
    downloads: 634,
    stars: 45,
    price: "热门",
    category: "php",
    tags: ["学术AI", "NLP", "论文"],
    status: "stable",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  },
  {
    id: 8,
    name: "企业级开源智能体",
    version: "v21.2.0",
    language: "PHP",
    framework: "ThinkPHP",
    description: "基于大语言模型构建的企业级智能体（Agent）开发平台，支持多模型接入、工作流编排和知识库集成。提供可视化的Agent构建工具，助力企业快速打造专属的AI智能助手。",
    features: ["智能体编排", "多模型支持", "可视化工作流"],
    releaseDate: "2025-08-15",
    downloads: 320,
    stars: 189,
    price: "热门",
    category: "php",
    tags: ["AI Agent", "智能体", "LLM"],
    status: "latest",
    demoUrl: "/demo",
    downloadUrl: "#",
    githubUrl: "#"
  }
];


export interface ProductItem {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price: number;
  originalPrice: number;
  link: string;
  rating: number;
  sales: number;
  buyLink: string;
}

export const productsData: ProductItem[] = [
    {
      image: "/product/saas.webp",
      title: "数字分身IP数字人SaaS系统",
      subtitle: "[PHP源码版]",
      description: "为企业主、个人博主打造短视频IP的数字人聊天系统，支持真人音+形象定制...",
      features: ["声音克隆", "形象定制", "视频生成", "AI交谈", "热点话题"],
      price: 4999,
      originalPrice: 6800,
      link: "/demo",
      rating: 4.8,
      sales: 2156,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/work.webp",
      title: "企业级全能AI知识库系统",
      subtitle: "[PHP源码版]",
      description: "全能AI知识库系统(PHP版，基于前后端分离架构)以及Vue3、uni-app...",
      features: ["多模式输入", "向量检索", "智能问答", "多端支持"],
      price: 6600,
      originalPrice: 9800,
      link: "/demo",
      rating: 4.9,
      sales: 5203,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/ai.webp",
      title: "艺创AI智能聊天绘画系统",
      subtitle: "[PHP源码版]",
      description: "基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发...",
      features: ["Python架构", "向量检索", "多源接入", "智能问答"],
      price: 2999,
      originalPrice: 3800.00,
      link: "/demo",
      rating: 4.9,
      sales: 3178,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/lw.svg",
      title: "论文创作写作系统",
      subtitle: "[全新升级]",
      description: "你只需要输入论文关键词，AI即可快速为您生成论文大纲...",
      features: ["期刊论文", "科普文章", "学生作业", "商业报告"],
      price: 3200,
      originalPrice: 4698,
      link: "/demo",
      rating: 4.8,
      sales: 3132,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "https://artaigc-1307986889.cos.ap-guangzhou.myqcloud.com/picture/Python.png",
      title: "全能AI知识库系统Python源码版",
      subtitle: "[Python源码版]",
      description: "基于Java开发的企业级AI知识库系统，高性能、高并发，支持大规模部署...",
      features: ["Java架构", "高并发", "企业级", "多端支持"],
      price: 6600,
      originalPrice: 9800,
      link: "/demo",
      rating: 4.9,
      sales: 1165,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/saas.svg",
      title: "艺创AI数字分身2.0",
      subtitle: "[PHP源码版]",
      description: "基于Java开发的AI聊天绘画系统，高性能架构，支持多种绘画模型和聊天场景...",
      features: ["Java架构", "多模型支持", "高性能", "场景定制"],
      price: 6600,
      originalPrice: 9800,
      link: "/demo",
      rating: 4.8,
      sales: 4108,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/ai.svg",
      title: "艺创AI聊天绘画系统Java",
      subtitle: "[Java源码版]",
      description: "实现了AI对话+AI绘画的融合使用，系统功能特色：AI画图对话、AI创作模型...",
      features: ["AI绘画", "智能聊天", "场景定制", "一键部署"],
      price: 2999,
      originalPrice: 3800,
      link: "/demo",
      rating: 4.7,
      sales: 2389,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    },
    {
      image: "/product/buidai.svg",
      title: "企业级开源智能体部署服务",
      subtitle: "[PHP源码版]",
      description: "零代码搭建具备智能体、MCP、RAG管道、知识库、大模型聚合、上下文工程等原生AI能力...",
      features: ["MCP", "知识库", "大模型聚合", "扣子"],
      price: 500,
      originalPrice: 1500,
      link: "/demo",
      rating: 4.6,
      sales: 3134,
      buyLink: "https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20"
    }
  ];

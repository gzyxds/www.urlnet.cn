import React from 'react';
import ClientLogoWall from './ClientLogoWall';
// import clients from './clients';

// 新客户数据
const clients = [
  {
    id: "deepseek",
    name: "DeepSeek",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/resource/image/models/deepseek.png",
    website: "#",
    industry: "DeepSeek"
  },
  {
    id: "doubao1",
    name: "豆包",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/uploads/images/20250211/20250211001118242b12518.png",
    website: "#",
    industry: "豆包"
  },
  {
    id: "qwen3",
    name: "Qwen3",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/resource/image/models/qwen.png",
    website: "#",
    industry: "Qwen3"
  },
  {
    id: "hunyuan",
    name: "Hunyuan",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/uploads/images/20250324/20250324213436b27188611.svg",
    website: "#",
    industry: "Hunyuan"
  },
  {
    id: "ernie",
    name: "ERNIE",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/resource/image/models/baidu.png",
    website: "#",
    industry: "ERNIE"
  },
  {
    id: "glm",
    name: "GLM",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/resource/image/models/zhipu.png",
    website: "#",
    industry: "GLM"
  },
  {
    id: "xunfei",
    name: "讯飞星火",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/resource/image/models/xunfei.png",
    website: "#",
    industry: "讯飞星火"
  },
  {
    id: "kimi",
    name: "Kimi",
    logo: "https://aigc-1307986889.cos.ap-guangzhou.myqcloud.com/resource/image/models/kimi.png",
    website: "#",
    industry: "Kimi"
  },
  {
    id: "yi",
    name: "零一万物",
    logo: "https://sf-maas-uat-prod.oss-cn-shanghai.aliyuncs.com/Model_LOGO/Yi.svg",
    website: "#",
    industry: "零一万物"
  },
  {
    id: "zhipuqing",
    name: "智谱清",
    logo: "https://sf-maas-uat-prod.oss-cn-shanghai.aliyuncs.com/Model_LOGO/Zhipu.svg",
    website: "#",
    industry: "智谱清"
  },
  {
    id: "doubao2",
    name: "Doubao",
    logo: "https://ark-auto-2100466578-cn-beijing-default.tos-cn-beijing.volces.com/model_cardkLzNWlDVlA.png",
    website: "#",
    industry: "Doubao"
  },
  {
    id: "moonshot",
    name: "Moonshot",
    logo: "https://ark-auto-created-required-2100620678-cn-beijing.tos-cn-beijing.volces.com/model_card/1715090507842ySbtQAb9bz.PNG",
    website: "#",
    industry: "Moonshot"
  }
];

// 精选客户示例数据
const featuredClients = [
  {
    id: 'featured-1',
    name: '腾讯',
    logo: '/images/scenarios/logo.svg',
    description: '为腾讯提供了全面的AI知识库解决方案，帮助其实现了客服效率提升40%，用户满意度提升25%。',
    industry: '互联网',
  },
  {
    id: 'featured-2',
    name: '华为',
    logo: '/images/scenarios/logo.svg',
    description: '为华为定制了企业级AI助手系统，整合了产品文档、技术支持和内部知识，大幅提升了技术支持效率。',
    industry: '通信技术',
  },
  {
    id: 'featured-3',
    name: '美团',
    logo: '/images/scenarios/logo.svg',
    description: '为美团开发了多终端AI客服系统，覆盖App、小程序和网页端，实现了7×24小时智能客服支持。',
    industry: '生活服务',
  },
];

// ClientLogoWall 多种用法演示
const ClientLogoWallExample: React.FC = () => {
  return (
    <div style={{background: '#f5f5f5', minHeight: 400, padding: 32}}>
      <h2 style={{fontSize: 24, fontWeight: 'bold', marginBottom: 24}}>ClientLogoWall 组件多种用法示例</h2>

      {/* 基础用法 */}
      <div style={{marginBottom: 40}}>
        <h3 style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>基础用法</h3>
        <ClientLogoWall clients={clients} />
      </div>

      {/* 跑马灯动画用法 */}
      <div style={{marginBottom: 40}}>
        <h3 style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>跑马灯动画用法</h3>
        <ClientLogoWall clients={clients} marquee />
      </div>

      {/* 完整参数配置用法 */}
      <div style={{marginBottom: 40}}>
        <h3 style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>完整参数配置用法</h3>
        <ClientLogoWall
          title="我们的合作伙伴"
          subtitle="携手共创未来"
          description="与行业领先企业深度合作，共同推动AI技术发展"
          clients={clients}
          className="mt-16"
        />
      </div>

      {/* 简化版用法 */}
      <div style={{marginBottom: 40}}>
        <h3 style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>简化版用法</h3>
        <ClientLogoWall title="合作伙伴" clients={clients} />
      </div>

      {/* 精选客户用法 */}
      <div style={{marginBottom: 40}}>
        <h3 style={{fontSize: 18, fontWeight: 'bold', marginBottom: 12}}>精选客户用法</h3>
        <ClientLogoWall
          title="精选客户案例"
          subtitle="成功案例展示"
          description="与知名企业深度合作，提供定制化AI解决方案"
          clients={featuredClients}
          marquee
        />
      </div>
    </div>
  );
};

export default ClientLogoWallExample;
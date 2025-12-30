"use client";
import { motion } from "framer-motion";
import {
  Bot, FileText, Download, Cpu, Database, BarChart3,
  MessageSquare, Users, Globe, Smartphone, Headphones,
  FileCode, Clock, Zap, Shield, Search, Mail, PenTool,
  Sparkles
} from "lucide-react";

const FunctionBlueprint = () => {
  // 功能列表数据
  const functions = [
    { icon: <Bot className="h-6 w-6" />, name: "AI助理", desc: "智能对话助手" },
    { icon: <Download className="h-6 w-6" />, name: "本地部署", desc: "私有化数据安全" },
    { icon: <MessageSquare className="h-6 w-6" />, name: "AI聊天", desc: "多模型聚合对话" },
    { icon: <Cpu className="h-6 w-6" />, name: "API集成", desc: "标准化接口调用" },
    { icon: <Database className="h-6 w-6" />, name: "数据处理", desc: "海量数据清洗" },
    { icon: <FileText className="h-6 w-6" />, name: "文档分析", desc: "智能提取摘要" },
    { icon: <Globe className="h-6 w-6" />, name: "多语言支持", desc: "全球化语言适配" },
    { icon: <Users className="h-6 w-6" />, name: "团队协作", desc: "多人协同办公" },
    { icon: <Smartphone className="h-6 w-6" />, name: "移动端支持", desc: "全平台兼容适配" },
    { icon: <Headphones className="h-6 w-6" />, name: "语音识别", desc: "高精度语音转写" },
    { icon: <FileCode className="h-6 w-6" />, name: "代码生成", desc: "辅助编程开发" },
    { icon: <Clock className="h-6 w-6" />, name: "定时任务", desc: "自动化任务调度" },
    { icon: <Zap className="h-6 w-6" />, name: "快速响应", desc: "毫秒级即时反馈" },
    { icon: <Shield className="h-6 w-6" />, name: "安全防护", desc: "企业级安全保障" },
    { icon: <Search className="h-6 w-6" />, name: "智能搜索", desc: "语义理解搜索" },
    { icon: <BarChart3 className="h-6 w-6" />, name: "数据分析", desc: "可视化数据报表" },
    { icon: <Mail className="h-6 w-6" />, name: "邮件处理", desc: "智能邮件分类" },
    { icon: <PenTool className="h-6 w-6" />, name: "内容创作", desc: "AI辅助文案生成" },
    { icon: <Bot className="h-6 w-6" />, name: "知识库", desc: "企业知识沉淀" },
    { icon: <MessageSquare className="h-6 w-6" />, name: "客服机器人", desc: "7x24小时服务" },
    { icon: <FileText className="h-6 w-6" />, name: "文档生成", desc: "自动生成报告" },
    { icon: <Cpu className="h-6 w-6" />, name: "流程自动化", desc: "业务流程编排" },
    { icon: <Database className="h-6 w-6" />, name: "数据标注", desc: "AI辅助标注" },
    { icon: <Globe className="h-6 w-6" />, name: "网页分析", desc: "网页内容解析" }
  ];

  // 每行显示的功能卡片数量
  const FUNCTIONS_PER_ROW = 8;

  // 将功能列表分组为多行
  const rows: typeof functions[] = [];
  for (let i = 0; i < functions.length; i += FUNCTIONS_PER_ROW) {
    rows.push(functions.slice(i, i + FUNCTIONS_PER_ROW));
  }

  // 跑马灯动画参数配置
  const getMarqueeVariants = (rowIdx: number, rowLen: number) => {
    const distance = rowLen * 220; // 每个功能卡片宽度约220px（含间距）
    const duration = 30 + rowLen * 2; // 动画持续时间，根据行长度调整
    return {
      animate: {
        // 奇数行从左到右，偶数行从右到左
        x: rowIdx % 2 === 0 ? [0, -distance] : [-distance, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop' as const,
            duration,
            ease: 'linear' as const,
          },
        },
      },
    };
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden" id="functions">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            功能全景
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Build AI Fast.
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-8 text-primary tracking-wide">
            In Minutes, Not Months. Really Fast!
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            这是最简单的 AI 集成方式之一。只需点击，几分钟配置，几行代码，
            我们就能帮助您快速构建企业级 AI 能力方案。
          </p>
        </motion.div>

        {/* 跑马灯功能展示区域 */}
        <div className="relative">
          {/* 渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex flex-col gap-6 overflow-hidden py-4">
            {rows.map((row, rowIdx) => {
              // 复制一份数据用于无缝循环
              const marqueeRow = [...row, ...row, ...row];
              return (
                <div key={rowIdx} className="overflow-hidden w-full select-none">
                  <motion.div
                    className="flex gap-5 items-center"
                    variants={getMarqueeVariants(rowIdx, row.length)}
                    animate="animate"
                  >
                    {marqueeRow.map((func, idx) => (
                      <motion.div
                        key={`${rowIdx}-${idx}`}
                        className="group flex-shrink-0"
                        style={{ width: '200px' }}
                      >
                        <div className="bg-card border border-border/50 rounded-2xl p-5 flex flex-col items-center justify-center h-40">
                          <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-4">
                            <div className="text-primary">
                              {func.icon}
                            </div>
                          </div>
                          <span className="text-base font-semibold text-foreground mb-1">{func.name}</span>
                          <span className="text-xs text-muted-foreground">{func.desc}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border/50">
            <Sparkles className="w-4 h-4 text-primary" />
            以上仅展示部分核心功能，更多能力持续更新中
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default FunctionBlueprint;

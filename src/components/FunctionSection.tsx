"use client";
import { motion } from "framer-motion";
import { 
  Bot, FileText, Download, Cpu, Database, BarChart3, 
  MessageSquare, Users, Globe, Smartphone, Headphones, 
  FileCode, Clock, Zap, Shield, Search, Mail, PenTool
} from "lucide-react";

const FunctionBlueprint = () => {
  // 功能列表数据
  const functions = [
    { icon: <Bot className="h-5 w-5" />, name: "AI助理" },
    { icon: <Download className="h-5 w-5" />, name: "本地部署" },
    { icon: <MessageSquare className="h-5 w-5" />, name: "AI聊天" },
    { icon: <Cpu className="h-5 w-5" />, name: "API集成" },
    { icon: <Database className="h-5 w-5" />, name: "数据处理" },
    { icon: <FileText className="h-5 w-5" />, name: "文档分析" },
    { icon: <Globe className="h-5 w-5" />, name: "多语言支持" },
    { icon: <Users className="h-5 w-5" />, name: "团队协作" },
    { icon: <Smartphone className="h-5 w-5" />, name: "移动端支持" },
    { icon: <Headphones className="h-5 w-5" />, name: "语音识别" },
    { icon: <FileCode className="h-5 w-5" />, name: "代码生成" },
    { icon: <Clock className="h-5 w-5" />, name: "定时任务" },
    { icon: <Zap className="h-5 w-5" />, name: "快速响应" },
    { icon: <Shield className="h-5 w-5" />, name: "安全防护" },
    { icon: <Search className="h-5 w-5" />, name: "智能搜索" },
    { icon: <BarChart3 className="h-5 w-5" />, name: "数据分析" },
    { icon: <Mail className="h-5 w-5" />, name: "邮件处理" },
    { icon: <PenTool className="h-5 w-5" />, name: "内容创作" },
    { icon: <Bot className="h-5 w-5" />, name: "知识库" },
    { icon: <MessageSquare className="h-5 w-5" />, name: "客服机器人" },
    { icon: <FileText className="h-5 w-5" />, name: "文档生成" },
    { icon: <Cpu className="h-5 w-5" />, name: "流程自动化" },
    { icon: <Database className="h-5 w-5" />, name: "数据标注" },
    { icon: <Globe className="h-5 w-5" />, name: "网页分析" }
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
    const distance = rowLen * 160; // 每个功能卡片宽度约160px（含间距）
    const duration = 25 + rowLen * 2; // 动画持续时间，根据行长度调整
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
    <section className="py-24 bg-white" id="functions">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
            Artai = Build AI Fast.
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-8 text-blue-600 tracking-wide">
            In Minutes, Not Months. Really Fast!
          </h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            这个是最简单的AI集成方式之一，只需点击，只需几分钟，只需几行代码，我们就可以帮助您实现AI能力方案。
          </p>
        </motion.div>

        {/* 跑马灯功能展示区域 */}
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 overflow-hidden">
            {rows.map((row, rowIdx) => {
              // 复制一份数据用于无缝循环
              const marqueeRow = [...row, ...row];
              return (
                <div key={rowIdx} className="overflow-hidden w-full">
                  <motion.div
                    className="flex gap-4 items-center"
                    variants={getMarqueeVariants(rowIdx, row.length)}
                    animate="animate"
                  >
                    {marqueeRow.map((func, idx) => (
                      <motion.div
                        key={`${rowIdx}-${idx}`}
                        whileHover={{ 
                          scale: 1.05,
                          y: -5,
                          transition: { 
                            duration: 0.3, 
                            ease: "easeOut"
                          }
                        }}
                        className="group flex-shrink-0"
                        style={{ width: '150px' }} // 固定宽度确保一致性
                      >
                        <div className="bg-white border border-gray-200 rounded p-4 flex flex-col items-center justify-center h-32 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                          <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                            <div className="text-black group-hover:text-gray-800 transition-colors">
                              {func.icon}
                            </div>
                          </div>
                          <span className="text-sm text-gray-700 text-center font-medium">{func.name}</span>
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
            className="text-center mt-8 text-sm text-gray-500"
          >
            + 以上为产品部分功能展示
          </motion.div>
      </div>
    </section>
  );
};

export default FunctionBlueprint;
"use client";
import { motion } from "framer-motion";
import { 
  Bot, FileText, Download, Cpu, Database, BarChart3, 
  MessageSquare, Users, Globe, Smartphone, Headphones, 
  FileCode, Clock, Zap, Shield, Search, Mail, PenTool
} from "lucide-react";

const FunctionBlueprint = () => {
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

        <div className="container mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 overflow-hidden">
            {functions.map((func, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  x: [-5, 5, -5],
                  transition: { 
                    duration: 0.6, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-gray-200 p-4 flex flex-col items-center justify-center h-32 hover:border-blue-300 hover:shadow-sm transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                    <div className="text-black group-hover:text-gray-800 transition-colors">
                      {func.icon}
                    </div>
                  </div>
                  <span className="text-sm text-gray-700 text-center">{func.name}</span>
                </div>
              </motion.div>
            ))}
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
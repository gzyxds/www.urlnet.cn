"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

export interface Client {
  id: string;
  name: string;
  logo: string;
  website?: string;
  industry: string;
  description?: string;
}

export interface ClientLogoWallProps {
  title?: string;
  subtitle?: string;
  description?: string;
  clients: Client[];
  className?: string;
  marquee?: boolean; // 跑马灯模式
}

const CLIENTS_PER_ROW = 6;

const ClientLogoWall: React.FC<ClientLogoWallProps> = ({
  title = "深受行业认可",
  subtitle = "值得信赖的伙伴",
  description = "我们与各行业领军企业建立长期合作，共同探索 AI 技术的创新应用",
  clients,
  className,
  marquee = false
}) => {
  // 分组
  const rows: Client[][] = [];
  for (let i = 0; i < clients.length; i += CLIENTS_PER_ROW) {
    rows.push(clients.slice(i, i + CLIENTS_PER_ROW));
  }

  // 跑马灯动画参数
  const getMarqueeVariants = (rowIdx: number, rowLen: number) => {
    const distance = rowLen * 200; // 每个logo宽度约200px（含间距）
    const duration = 20 + rowLen * 2;
    return {
      animate: {
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
    <section className={cn("relative py-24 bg-background overflow-hidden", className)}>
      {/* 装饰背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题区域 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            {subtitle}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* 客户logo展示区域 */}
        {marquee ? (
          <div className="relative">
            {/* 渐变遮罩 */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex flex-col gap-8">
              {rows.map((row, rowIdx) => {
                const marqueeRow = [...row, ...row, ...row]; // 增加重复次数以确保平滑
                return (
                  <div key={rowIdx} className="overflow-hidden w-full select-none">
                    <motion.div
                      className="flex gap-6 items-center"
                      variants={getMarqueeVariants(rowIdx, row.length)}
                      animate="animate"
                    >
                      {marqueeRow.map((client, idx) => (
                        <div
                          key={`${client.id}-${idx}`}
                          className="flex-shrink-0 w-48 p-6 bg-card border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
                        >
                          <div className="h-12 mb-4 flex items-center justify-center transition-all duration-500">
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="max-h-full max-w-full object-contain transition-opacity"
                            />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{client.name}</div>
                            <div className="text-xs text-muted-foreground line-clamp-1">{client.industry}</div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, idx) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center p-6 bg-card border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="h-12 mb-4 flex items-center justify-center w-full transition-all duration-500">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain transition-opacity"
                  />
                </div>
                <div className="text-center w-full">
                  <div className="font-semibold text-foreground text-sm mb-1 line-clamp-1">{client.name}</div>
                  <div className="text-xs text-muted-foreground line-clamp-1">{client.industry}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientLogoWall;

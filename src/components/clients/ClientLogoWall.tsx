"use client";

import React from 'react';
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
    <section style={{background: '#fff', color: '#000', padding: 40, textAlign: 'center'}} className={className}>
      {/* 客户logo展示区域 - 移到前面 */}
      {marquee ? (
        <div style={{display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32}}>
          {rows.map((row, rowIdx) => {
            const marqueeRow = [...row, ...row];
            return (
              <div key={rowIdx} style={{overflow: 'hidden', width: '100%'}}>
                <motion.div
                  style={{display: 'flex', gap: 32, alignItems: 'center'}}
                  variants={getMarqueeVariants(rowIdx, row.length)}
                  animate="animate"
                >
                  {marqueeRow.map((client, idx) => (
                    <div key={client.id + '-' + idx} style={{width: 180, padding: 16, border: '1px solid #eee', background: '#fafbfc', flex: '0 0 auto', borderRadius: 4}}>
                      <img src={client.logo} alt={client.name} style={{height: 48, margin: '0 auto 8px', display: 'block'}} />
                      <div style={{fontWeight: 'bold'}}>{client.name}</div>
                      <div style={{fontSize: 12, color: '#888'}}>{client.industry}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 32}}>
          {clients.map(client => (
            <div key={client.id} style={{width: 180, padding: 16, border: '1px solid #eee', background: '#fafbfc', borderRadius: 4}}>
              <img src={client.logo} alt={client.name} style={{height: 48, margin: '0 auto 8px', display: 'block'}} />
              <div style={{fontWeight: 'bold'}}>{client.name}</div>
              <div style={{fontSize: 12, color: '#888'}}>{client.industry}</div>
            </div>
          ))}
        </div>
      )}
      
      {/* 标题区域 - 移到后面 */}
      <div>
        <h2 style={{fontSize: 32, fontWeight: 'bold'}}>{title}</h2>
        <div style={{margin: '16px 0', fontSize: 20}}>{subtitle}</div>
        <div>{description}</div>
      </div>
    </section>
  );
};

export default ClientLogoWall;
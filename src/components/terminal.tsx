"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Terminal = () => {
  const platforms = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      title: "微信公众号"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM7 8h2v2H7V8zm0 4h2v2H7v-2z" />
        </svg>
      ),
      title: "H5浏览器"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
        </svg>
      ),
      title: "微信小程序"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
      title: "PC端"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
          <path d="M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z" />
        </svg>
      ),
      title: "管理平台"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
        </svg>
      ),
      title: "APP（即将发布）"
    }
  ];

  return (
    <section className="py-16 bg-white" id="terminal">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">艺创AI产品终端</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">全面兼容各种终端，数据同步</p>
          </motion.div>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border border-gray-100 bg-white hover:border-blue-200 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-base font-medium text-gray-800 text-center">{platform.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terminal;
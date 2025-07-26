"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里实际应用中会有API调用来提交表单
    console.log('表单提交:', formState);
    // 模拟提交成功
    setTimeout(() => {
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">联系我们</h2>
          <div className="w-24 h-1 bg-[#015bfe] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            无论您有任何问题、建议或合作意向，都欢迎与我们联系。
            我们的团队将竭诚为您提供专业的咨询和支持。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#f7f9f0] rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">联系信息</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-[#015bfe]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">公司地址</h4>
                    <p className="text-gray-600">北京市海淀区中关村科技园区</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-[#015bfe]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">联系电话</h4>
                    <p className="text-gray-600">400-888-8888</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-[#015bfe]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">电子邮箱</h4>
                    <p className="text-gray-600">contact@aitech.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#015bfe]/10 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-[#015bfe]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">工作时间</h4>
                    <p className="text-gray-600">周一至周五 9:00-18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-[#015bfe]/10 rounded-full flex items-center justify-center hover:bg-[#015bfe] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#015bfe]/10 rounded-full flex items-center justify-center hover:bg-[#015bfe] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#015bfe]/10 rounded-full flex items-center justify-center hover:bg-[#015bfe] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#015bfe]/10 rounded-full flex items-center justify-center hover:bg-[#015bfe] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">发送消息</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">消息已发送</h4>
                  <p className="text-gray-600 text-center mb-6">
                    感谢您的留言，我们将尽快与您联系。
                  </p>
                  <Button 
                    className="bg-[#015bfe] hover:bg-blue-700"
                    onClick={() => setSubmitted(false)}
                  >
                    发送新消息
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        电子邮箱
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="请输入您的电子邮箱"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        电话
                      </label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="请输入您的联系电话"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        主题
                      </label>
                      <Select 
                        value={formState.subject} 
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="请选择主题" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product">产品咨询</SelectItem>
                          <SelectItem value="service">服务支持</SelectItem>
                          <SelectItem value="partnership">合作洽谈</SelectItem>
                          <SelectItem value="other">其他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="请输入您的留言内容"
                      rows={5}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#015bfe] hover:bg-blue-700"
                  >
                    发送消息
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
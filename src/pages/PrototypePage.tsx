
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrototypePage: React.FC = () => {
  const [activePreview, setActivePreview] = useState<string | null>(null);
  
  const pages = [
    { path: "/welcome", name: "欢迎页面" },
    { path: "/login", name: "登录页面" },
    { path: "/swipe", name: "发现页面" },
    { path: "/matches", name: "喜欢页面" },
    { path: "/messages", name: "消息页面" },
    { path: "/chat/1", name: "聊天页面" },
    { path: "/profile", name: "我的页面" },
    { path: "/edit-profile", name: "编辑资料页面" },
    { path: "/settings", name: "设置页面" },
  ];

  const handlePreviewClick = (path: string) => {
    setActivePreview(activePreview === path ? null : path);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-5 w-5" />
              返回首页
            </Button>
          </Link>
          
          <h1 className="text-3xl font-bold text-center flex-1">恋遇 App 原型</h1>
        </div>

        <p className="text-app-subtle mb-8 text-center">
          以下是所有页面的原型预览，点击任意页面可放大查看，点击外部链接可全屏查看
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {pages.map((page) => (
            <div key={page.path} className="flex flex-col items-center w-full max-w-xs">
              <div 
                className="border-8 rounded-[40px] border-black overflow-hidden shadow-xl bg-gray-800 aspect-[9/19] relative cursor-pointer transition-transform hover:scale-105"
                onClick={() => handlePreviewClick(page.path)}
              >
                <iframe 
                  src={page.path} 
                  className="w-full h-full pointer-events-none"
                  title={page.name}
                />
                <Link 
                  to={page.path}
                  className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4 text-gray-800" />
                </Link>
              </div>
              <p className="mt-4 font-medium text-lg text-center">{page.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged preview modal */}
      {activePreview && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closePreview}
        >
          <div 
            className="relative max-w-sm w-full h-[80vh] bg-white rounded-[40px] border-8 border-black overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              src={activePreview} 
              className="w-full h-full"
              title="Enlarged Preview"
            />
            <button 
              className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-full hover:bg-black"
              onClick={closePreview}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrototypePage;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrototypePage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
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
          以下是所有页面的原型预览，点击任意页面可查看全屏效果
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {pages.map((page) => (
            <div key={page.path} className="flex flex-col items-center w-full max-w-xs">
              <Link 
                to={page.path} 
                className="block w-full transition-transform hover:scale-105"
              >
                <div className="border-8 rounded-[40px] border-black overflow-hidden shadow-xl bg-gray-800 aspect-[9/19] relative">
                  <iframe 
                    src={page.path} 
                    className="w-full h-full pointer-events-none"
                    title={page.name}
                  />
                </div>
              </Link>
              <p className="mt-4 font-medium text-lg text-center">{page.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrototypePage;

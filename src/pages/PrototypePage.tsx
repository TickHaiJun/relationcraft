
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/PhoneFrame';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Pages components
import Welcome from './Welcome';
import Login from './Login';
import SwipePage from './SwipePage';
import MatchesPage from './MatchesPage';
import MessagesPage from './MessagesPage';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';
import EditProfilePage from './EditProfilePage';
import SettingsPage from './SettingsPage';

const PrototypePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate('/')}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <h1 className="text-3xl font-bold">恋遇 App 原型</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">欢迎页</h2>
            <Welcome />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">登录页</h2>
            <Login />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">发现页</h2>
            <SwipePage />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">喜欢页</h2>
            <MatchesPage />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">消息列表页</h2>
            <MessagesPage />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">聊天详情页</h2>
            <ChatPage />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">个人资料页</h2>
            <ProfilePage />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">编辑资料页</h2>
            <EditProfilePage />
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">设置页</h2>
            <SettingsPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypePage;

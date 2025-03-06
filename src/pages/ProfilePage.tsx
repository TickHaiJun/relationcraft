
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/PhoneFrame';
import TabBar from '@/components/TabBar';
import { Settings, Edit, ChevronRight, Camera, Image as ImageIcon, Star, Shield, Bell, HelpCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PhoneFrame>
      <div className="h-full pb-20">
        <div className="sticky top-0 z-10 glass-effect border-b border-gray-100">
          <div className="p-4 flex items-center justify-between">
            <div className="w-10"></div>
            <h1 className="text-2xl font-bold">我的</h1>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/settings')}
              className="rounded-full hover:bg-gray-100"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="relative mb-8">
          <div className="h-40 bg-gradient-to-r from-app-primary to-app-secondary"></div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Button 
                variant="secondary" 
                size="icon" 
                className="absolute bottom-0 right-0 rounded-full bg-app-primary hover:bg-app-primary/90 text-white"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="px-4 mt-16 mb-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-bold">林小姐</h2>
              <span className="text-lg">26</span>
            </div>
            
            <div className="text-app-subtle mb-4">摄影师</div>
            
            <div className="flex gap-4 mb-6">
              <Button 
                variant="outline" 
                onClick={() => navigate('/edit-profile')}
                className="rounded-full px-5 flex items-center gap-2 border-app-primary text-app-primary"
              >
                <Edit className="h-4 w-4" />
                编辑资料
              </Button>
              
              <Button 
                className="rounded-full px-5 flex items-center gap-2 bg-app-primary hover:bg-app-primary/90"
              >
                <Star className="h-4 w-4" />
                开通会员
              </Button>
            </div>
            
            <div className="flex w-full justify-around mb-2">
              <div className="text-center">
                <div className="text-xl font-bold">128</div>
                <div className="text-app-subtle text-sm">喜欢</div>
              </div>
              
              <div className="text-center">
                <div className="text-xl font-bold">24</div>
                <div className="text-app-subtle text-sm">匹配</div>
              </div>
              
              <div className="text-center">
                <div className="text-xl font-bold">6</div>
                <div className="text-app-subtle text-sm">访客</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4 mb-8">
          <div className="bg-app-gray/50 rounded-xl p-5">
            <h3 className="font-semibold mb-4">相册</h3>
            
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${44 + index}.jpg`} 
                    alt={`Photo ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              <div className="aspect-square rounded-lg bg-app-gray flex items-center justify-center border border-dashed border-app-subtle">
                <div className="flex flex-col items-center gap-1">
                  <ImageIcon className="h-6 w-6 text-app-subtle" />
                  <span className="text-xs text-app-subtle">添加</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-4">
          <div className="bg-app-gray/50 rounded-xl overflow-hidden">
            <div className="divide-y divide-gray-100">
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-app-tertiary flex items-center justify-center">
                    <Shield className="h-4 w-4 text-app-primary" />
                  </div>
                  <span>隐私设置</span>
                </div>
                <ChevronRight className="h-5 w-5 text-app-subtle" />
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-app-tertiary flex items-center justify-center">
                    <Bell className="h-4 w-4 text-app-primary" />
                  </div>
                  <span>通知设置</span>
                </div>
                <ChevronRight className="h-5 w-5 text-app-subtle" />
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-app-tertiary flex items-center justify-center">
                    <HelpCircle className="h-4 w-4 text-app-primary" />
                  </div>
                  <span>帮助中心</span>
                </div>
                <ChevronRight className="h-5 w-5 text-app-subtle" />
              </div>
              
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-app-tertiary flex items-center justify-center">
                    <LogOut className="h-4 w-4 text-app-primary" />
                  </div>
                  <span>退出登录</span>
                </div>
                <ChevronRight className="h-5 w-5 text-app-subtle" />
              </div>
            </div>
          </div>
        </div>
        
        <TabBar />
      </div>
    </PhoneFrame>
  );
};

export default ProfilePage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/PhoneFrame';
import { ArrowLeft, ChevronRight, MapPin, Sliders, Users, Bell, Shield, HelpCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PhoneFrame>
      <div className="h-full overflow-y-auto pb-10">
        <div className="sticky top-0 z-10 glass-effect border-b border-gray-100">
          <div className="p-4 flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/profile')}
              className="rounded-full hover:bg-gray-100 mr-4"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <h1 className="text-xl font-bold">设置</h1>
          </div>
        </div>
        
        <div className="p-4 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">账号设置</h2>
            
            <div className="bg-app-gray/50 rounded-xl overflow-hidden">
              <div className="divide-y divide-gray-100">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-app-gray flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-app-primary" />
                    </div>
                    <span>位置</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-app-subtle">北京</span>
                    <ChevronRight className="h-5 w-5 text-app-subtle" />
                  </div>
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-app-gray flex items-center justify-center">
                      <Sliders className="h-4 w-4 text-app-primary" />
                    </div>
                    <span>匹配偏好</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-app-subtle" />
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-app-gray flex items-center justify-center">
                      <Users className="h-4 w-4 text-app-primary" />
                    </div>
                    <span>账号验证</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-app-subtle" />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">通知</h2>
            
            <div className="bg-app-gray/50 rounded-xl overflow-hidden">
              <div className="divide-y divide-gray-100">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-app-gray flex items-center justify-center">
                      <Bell className="h-4 w-4 text-app-primary" />
                    </div>
                    <span>推送通知</span>
                  </div>
                  <Switch />
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span>新消息</span>
                    <span className="text-sm text-app-subtle">当你收到新消息时通知你</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span>新匹配</span>
                    <span className="text-sm text-app-subtle">当你有新的匹配时通知你</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span>超级喜欢</span>
                    <span className="text-sm text-app-subtle">当有人对你发送超级喜欢时通知你</span>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">隐私与安全</h2>
            
            <div className="bg-app-gray/50 rounded-xl overflow-hidden">
              <div className="divide-y divide-gray-100">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-app-gray flex items-center justify-center">
                      <Shield className="h-4 w-4 text-app-primary" />
                    </div>
                    <span>隐私设置</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-app-subtle" />
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span>隐身模式</span>
                    <span className="text-sm text-app-subtle">暂时对其他用户隐藏你的个人资料</span>
                  </div>
                  <Switch />
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span>仅匹配人可见</span>
                    <span className="text-sm text-app-subtle">只有已匹配的人才能看到你的在线状态</span>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">关于</h2>
            
            <div className="bg-app-gray/50 rounded-xl overflow-hidden">
              <div className="divide-y divide-gray-100">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-app-gray flex items-center justify-center">
                      <HelpCircle className="h-4 w-4 text-app-primary" />
                    </div>
                    <span>帮助中心</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-app-subtle" />
                </div>
                
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-app-gray flex items-center justify-center">
                      <Info className="h-4 w-4 text-app-primary" />
                    </div>
                    <span>关于恋遇</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-app-subtle">v1.0.0</span>
                    <ChevronRight className="h-5 w-5 text-app-subtle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default SettingsPage;


import React from 'react';
import PhoneFrame from '@/components/PhoneFrame';
import TabBar from '@/components/TabBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const likedProfiles = [
  {
    id: 1,
    name: '李先生',
    age: 27,
    image: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1887&auto=format&fit=crop',
    matched: true,
    occupation: '软件工程师',
    lastActive: '刚刚在线'
  },
  {
    id: 2,
    name: '陈小姐',
    age: 24,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    matched: false,
    occupation: '市场经理',
    lastActive: '3分钟前'
  },
  {
    id: 3,
    name: '王先生',
    age: 29,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    matched: true,
    occupation: '医生',
    lastActive: '12分钟前'
  },
  {
    id: 4,
    name: '赵小姐',
    age: 25,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    matched: false,
    occupation: '老师',
    lastActive: '1小时前'
  }
];

const receivedLikes = [
  {
    id: 5,
    name: '李先生',
    age: 28,
    blurredImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&auto=compress&blur=15',
    type: 'normal'
  },
  {
    id: 6,
    name: '王小姐',
    age: 26,
    blurredImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&auto=compress&blur=15',
    type: 'super'
  },
  {
    id: 7,
    name: '张先生',
    age: 30,
    blurredImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&auto=compress&blur=15',
    type: 'normal'
  }
];

const MatchesPage: React.FC = () => {
  return (
    <PhoneFrame>
      <div className="h-full pb-20">
        <div className="sticky top-0 z-10 glass-effect border-b border-gray-100">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-center">喜欢</h1>
          </div>
          
          <Tabs defaultValue="matches" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-0 bg-transparent">
              <TabsTrigger 
                value="matches" 
                className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-app-primary data-[state=active]:shadow-none"
              >
                我的喜欢
              </TabsTrigger>
              
              <TabsTrigger 
                value="likes" 
                className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-app-primary data-[state=active]:shadow-none"
              >
                收到的喜欢
                <Badge className="ml-2 bg-app-primary">3</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="matches" className="mt-0 pt-4">
              <div className="px-4">
                <div className="grid grid-cols-2 gap-4">
                  {likedProfiles.map(profile => (
                    <div key={profile.id} className="relative group">
                      <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-sm">
                        <img 
                          src={profile.image} 
                          alt={profile.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-3 glass-effect rounded-b-2xl">
                        <div className="flex items-center gap-1">
                          <h3 className="font-semibold text-app-dark">{profile.name}</h3>
                          <span>{profile.age}</span>
                          
                          {profile.matched && (
                            <div className="bg-app-primary rounded-full h-2 w-2"></div>
                          )}
                        </div>
                        
                        <p className="text-xs text-app-subtle">{profile.occupation}</p>
                      </div>
                      
                      <div className="absolute top-0 right-0 m-2">
                        {profile.matched ? (
                          <Button size="icon" variant="ghost" className="rounded-full bg-black/30 hover:bg-black/40">
                            <MessageCircle className="h-5 w-5 text-white" />
                          </Button>
                        ) : (
                          <Badge className="bg-app-gray/80 text-app-subtle">
                            {profile.lastActive}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="likes" className="mt-0 pt-4">
              <div className="px-4 space-y-5">
                <div className="bg-app-gray rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold">谁喜欢了你</h2>
                    <Badge className="bg-app-primary">新</Badge>
                  </div>
                  
                  <p className="text-sm text-app-subtle mb-4">升级会员，查看谁对你感兴趣。</p>
                  
                  <Button className="w-full bg-app-primary hover:bg-app-primary/90 rounded-full">
                    升级会员
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {receivedLikes.map(profile => (
                    <div key={profile.id} className="relative">
                      <div className="rounded-2xl overflow-hidden aspect-[3/4] relative backdrop-blur-xl">
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl"></div>
                        <img 
                          src={profile.blurredImage} 
                          alt="Blurred profile" 
                          className="w-full h-full object-cover opacity-80"
                        />
                        
                        {profile.type === 'super' && (
                          <div className="absolute top-3 right-3">
                            <div className="bg-app-tertiary p-1 rounded-full">
                              <Star className="h-5 w-5 text-app-primary fill-app-primary" />
                            </div>
                          </div>
                        )}
                        
                        <div className="absolute bottom-0 left-0 right-0 p-3 glass-effect">
                          <div className="flex items-center gap-1">
                            <h3 className="font-semibold text-app-dark">{profile.name}</h3>
                            <span>{profile.age}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <TabBar />
      </div>
    </PhoneFrame>
  );
};

export default MatchesPage;

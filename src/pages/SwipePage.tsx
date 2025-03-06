
import React, { useState, useRef } from 'react';
import PhoneFrame from '@/components/PhoneFrame';
import TabBar from '@/components/TabBar';
import { Settings, MessageCircle, Heart, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { toast } from "@/hooks/use-toast";

const profiles = [
  {
    id: 1,
    name: '张小姐',
    age: 24,
    distance: 3.2,
    bio: '喜欢旅行、摄影和美食。在寻找能一起探索城市的人。',
    images: ['https://images.unsplash.com/photo-1614586125858-e695e9925ac7?q=80&w=1887&auto=format&fit=crop'],
    interests: ['旅行', '摄影', '美食', '阅读', '电影'],
    occupation: '摄影师'
  },
  {
    id: 2,
    name: '李先生',
    age: 27,
    distance: 1.8,
    bio: '热爱户外运动和阅读。希望能遇到志同道合的人一起分享生活。',
    images: ['https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1887&auto=format&fit=crop'],
    interests: ['健身', '徒步', '烹饪', '音乐'],
    occupation: '软件工程师'
  },
  {
    id: 3,
    name: '王小姐',
    age: 25,
    distance: 2.5,
    bio: '创意工作者，热爱艺术和设计。寻找能欣赏艺术的人一起度过美好时光。',
    images: ['https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop'],
    interests: ['艺术', '设计', '绘画', '咖啡'],
    occupation: 'UI设计师'
  }
];

const SwipePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMatch, setShowMatch] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const handleSwipe = (direction: 'left' | 'right') => {
    const card = cardRefs.current[currentIndex];
    if (card) {
      if (direction === 'right') {
        card.classList.add('animate-swipe-right');
        
        // Show match notification after swipe animation for the second profile
        if (currentIndex === 1) {
          setTimeout(() => {
            setShowMatch(true);
            
            setTimeout(() => {
              setShowMatch(false);
            }, 3000);
          }, 500);
        }
      } else {
        card.classList.add('animate-swipe-left');
      }
      
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % profiles.length);
      }, 500);
    }
  };
  
  const handleSuperLike = () => {
    toast({
      title: "超级喜欢",
      description: `你向${profiles[currentIndex].name}发送了超级喜欢`,
      variant: "default",
    });
    
    const card = cardRefs.current[currentIndex];
    if (card) {
      card.classList.add('animate-swipe-right');
      
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % profiles.length);
      }, 500);
    }
  };
  
  const profile = profiles[currentIndex];
  
  return (
    <PhoneFrame>
      <div className="relative h-full">
        <div className="sticky top-0 left-0 right-0 z-10 glass-effect">
          <div className="p-4 flex justify-between items-center">
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
              <Settings className="h-5 w-5 text-app-subtle" />
            </Button>
            
            <Tabs defaultValue="discover" className="w-64">
              <TabsList className="bg-app-gray rounded-full">
                <TabsTrigger value="discover" className="rounded-full px-5">发现</TabsTrigger>
                <TabsTrigger value="nearby" className="rounded-full px-5">附近</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 relative">
              <MessageCircle className="h-5 w-5 text-app-subtle" />
              <Badge className="absolute -top-1 -right-1 bg-app-primary h-5 w-5 flex items-center justify-center p-0">
                3
              </Badge>
            </Button>
          </div>
        </div>
        
        <div className="p-6 relative h-[calc(100vh-200px)]">
          {profiles.map((profile, index) => (
            index >= currentIndex && (
              <div 
                key={profile.id}
                ref={el => cardRefs.current[index] = el}
                className={`swipe-card ${index === currentIndex ? 'z-10' : 'z-0 opacity-80 scale-95'}`}
                style={{ 
                  zIndex: profiles.length - index,
                  transform: `scale(${1 - (index - currentIndex) * 0.05}) translateY(${(index - currentIndex) * 10}px)` 
                }}
              >
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${profile.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="swipe-card-info">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">{profile.name}</h2>
                    <span className="text-xl">{profile.age}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-app-subtle">{profile.occupation}</span>
                    <span className="text-app-subtle">•</span>
                    <span className="text-app-subtle">{profile.distance} km</span>
                  </div>
                  
                  <p className="text-app-text mb-4 line-clamp-2">{profile.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map(interest => (
                      <Badge key={interest} variant="secondary" className="rounded-full px-3 py-1 bg-app-gray text-app-text">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-5">
            <Button 
              onClick={() => handleSwipe('left')}
              className="swipe-button bg-white border border-gray-200 text-app-subtle hover:bg-gray-50"
            >
              <X className="h-8 w-8" />
            </Button>
            
            <Button 
              onClick={handleSuperLike}
              className="swipe-button bg-app-tertiary text-app-primary border border-app-primary"
            >
              <Star className="h-7 w-7 fill-app-primary" />
            </Button>
            
            <Button 
              onClick={() => handleSwipe('right')}
              className="swipe-button bg-app-primary text-white hover:bg-app-primary/90"
            >
              <Heart className="h-8 w-8" />
            </Button>
          </div>
        </div>
        
        <TabBar />
        
        {showMatch && (
          <div className="match-animation">
            <div className="flex flex-col items-center justify-center p-6 animate-scale-up">
              <div className="mb-4">
                <Heart className="h-20 w-20 text-app-primary animate-beat" fill="#FF3B5C" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">配对成功！</h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1887&auto=format&fit=crop" 
                    alt="李先生" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="你" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="rounded-full px-6 py-5 bg-transparent border border-white text-white hover:bg-white hover:text-app-primary">
                  继续浏览
                </Button>
                
                <Button className="rounded-full px-6 py-5 bg-white text-app-primary hover:bg-white/90">
                  立即聊天
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PhoneFrame>
  );
};

export default SwipePage;

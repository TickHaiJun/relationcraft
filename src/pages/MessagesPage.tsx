
import React from 'react';
import PhoneFrame from '@/components/PhoneFrame';
import TabBar from '@/components/TabBar';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const conversations = [
  {
    id: '1',
    name: '李先生',
    avatar: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1887&auto=format&fit=crop',
    lastMessage: '周末有空一起去看电影吗？',
    time: '刚刚',
    unread: 2,
    online: true
  },
  {
    id: '2',
    name: '王小姐',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop',
    lastMessage: '我很喜欢你分享的那本书！',
    time: '10分钟前',
    unread: 0,
    online: true
  },
  {
    id: '3',
    name: '张先生',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    lastMessage: '那家餐厅确实不错，下次可以一起去。',
    time: '昨天',
    unread: 0,
    online: false
  },
  {
    id: '4',
    name: '陈小姐',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    lastMessage: '你喜欢什么类型的音乐？',
    time: '2天前',
    unread: 0,
    online: false
  },
];

const MessagesPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PhoneFrame>
      <div className="h-full pb-20">
        <div className="sticky top-0 z-10 glass-effect border-b border-gray-100">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-center">消息</h1>
          </div>
          
          <div className="px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-app-subtle" />
              <Input
                placeholder="搜索消息"
                className="pl-10 bg-app-gray border-0 rounded-full"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <h2 className="font-semibold mb-3">新匹配</h2>
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {conversations.slice(0, 3).map(person => (
                <div key={`match-${person.id}`} className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-app-primary">
                      <img 
                        src={person.avatar} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {person.online && (
                      <div className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <span className="text-xs mt-1 whitespace-nowrap">{person.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <h2 className="font-semibold mb-3">消息</h2>
          <div className="space-y-1">
            {conversations.map(conversation => (
              <div 
                key={conversation.id} 
                className="flex items-center p-3 hover:bg-app-gray/50 rounded-xl cursor-pointer"
                onClick={() => navigate(`/chat/${conversation.id}`)}
              >
                <div className="relative mr-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img 
                      src={conversation.avatar} 
                      alt={conversation.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 bg-green-500 h-3 w-3 rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold">{conversation.name}</h3>
                    <span className="text-xs text-app-subtle">{conversation.time}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-app-subtle truncate mr-2">{conversation.lastMessage}</p>
                    {conversation.unread > 0 && (
                      <Badge className="bg-app-primary h-5 w-5 flex items-center justify-center p-0">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <ChevronRight className="h-5 w-5 text-app-subtle ml-2" />
              </div>
            ))}
          </div>
        </div>
        
        <TabBar />
      </div>
    </PhoneFrame>
  );
};

export default MessagesPage;

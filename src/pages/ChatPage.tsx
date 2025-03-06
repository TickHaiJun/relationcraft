
import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/PhoneFrame';
import { ArrowLeft, Phone, Video, Image, Smile, Mic, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ChatPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Person data based on the id param
  const person = {
    id: id || '1',
    name: id === '1' ? '李先生' : (id === '2' ? '王小姐' : (id === '3' ? '张先生' : '陈小姐')),
    avatar: id === '1' 
      ? 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1887&auto=format&fit=crop' 
      : (id === '2' 
          ? 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop'
          : (id === '3'
              ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
              : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop')),
    online: id === '1' || id === '2',
    typing: id === '1',
  };
  
  // Initial messages
  useEffect(() => {
    const initialMessages = [
      { id: 1, text: '你好！很高兴认识你 😊', sent: false, time: '10:30 AM' },
      { id: 2, text: '你好，我也很高兴认识你！', sent: true, time: '10:32 AM' },
      { id: 3, text: '我看你的个人资料很有趣，你喜欢摄影？', sent: false, time: '10:35 AM' },
      { id: 4, text: '是的，我非常喜欢！尤其是风景和城市摄影。你呢，有什么爱好？', sent: true, time: '10:38 AM' },
    ];
    
    if (id === '1') {
      initialMessages.push(
        { id: 5, text: '我喜欢音乐和电影，也喜欢尝试新的餐厅。', sent: false, time: '10:40 AM' },
        { id: 6, text: '周末有空一起去看电影吗？', sent: false, time: '10:42 AM' },
      );
    }
    
    setMessages(initialMessages);
  }, [id]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate received message
      setTimeout(() => {
        const responses = [
          '好的，听起来不错！',
          '我也有同感！',
          '有趣，想了解更多。',
          '😊 太棒了'
        ];
        
        const replyMessage = {
          id: messages.length + 2,
          text: responses[Math.floor(Math.random() * responses.length)],
          sent: false,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        setMessages(prev => [...prev, replyMessage]);
      }, 1500);
    }
  };
  
  return (
    <PhoneFrame>
      <div className="h-full flex flex-col">
        <div className="sticky top-0 z-10 glass-effect border-b border-gray-100">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigate('/messages')}
                className="rounded-full hover:bg-gray-100"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src={person.avatar} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {person.online && (
                    <div className="absolute bottom-0 right-0 bg-green-500 h-2.5 w-2.5 rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div>
                  <h2 className="font-semibold">{person.name}</h2>
                  <span className="text-xs text-app-subtle">
                    {person.typing ? '正在输入...' : (person.online ? '在线' : '离线')}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Phone className="h-5 w-5 text-app-primary" />
              </Button>
              
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Video className="h-5 w-5 text-app-primary" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto pb-20">
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <Badge className="bg-app-gray text-app-subtle">今天</Badge>
            </div>
            
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'} mb-4`}>
                {!msg.sent && (
                  <div className="h-8 w-8 rounded-full overflow-hidden mr-2 self-end">
                    <img src={person.avatar} alt={person.name} className="h-full w-full object-cover" />
                  </div>
                )}
                
                <div className={`flex flex-col ${msg.sent ? 'items-end' : 'items-start'}`}>
                  <div className={msg.sent ? 'chat-bubble-sent' : 'chat-bubble-received'}>
                    {msg.text}
                  </div>
                  <span className="text-xs text-app-subtle mt-1">{msg.time}</span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="sticky bottom-0 left-0 right-0 p-4 glass-effect border-t border-gray-100">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Button 
              type="button"
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100"
            >
              <Image className="h-5 w-5 text-app-primary" />
            </Button>
            
            <div className="relative flex-1">
              <Input
                placeholder="输入消息..."
                className="rounded-full pr-12 py-6"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full hover:bg-gray-100"
                >
                  <Smile className="h-5 w-5 text-app-primary" />
                </Button>
              </div>
            </div>
            
            <Button 
              type={message.trim() ? 'submit' : 'button'}
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100"
            >
              {message.trim() ? <Send className="h-5 w-5 text-app-primary" /> : <Mic className="h-5 w-5 text-app-primary" />}
            </Button>
          </form>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default ChatPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/PhoneFrame';
import { ArrowLeft, Image, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from "@/hooks/use-toast";

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('林小姐');
  const [age, setAge] = useState('26');
  const [occupation, setOccupation] = useState('摄影师');
  const [bio, setBio] = useState('热爱摄影和旅行，喜欢记录生活中的美好瞬间。希望能遇到志同道合的人一起探索世界。');
  
  const [interests, setInterests] = useState([
    '摄影', '旅行', '美食', '电影', '音乐'
  ]);
  const [newInterest, setNewInterest] = useState('');
  
  const handleSave = () => {
    toast({
      title: "资料已更新",
      description: "你的个人资料已成功保存",
      variant: "default",
    });
    
    navigate('/profile');
  };
  
  const addInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };
  
  const removeInterest = (interest: string) => {
    setInterests(interests.filter(i => i !== interest));
  };
  
  return (
    <PhoneFrame>
      <div className="h-full overflow-y-auto pb-20">
        <div className="sticky top-0 z-10 glass-effect border-b border-gray-100">
          <div className="p-4 flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate('/profile')}
              className="rounded-full hover:bg-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <h1 className="text-xl font-bold">编辑资料</h1>
            
            <Button 
              variant="ghost" 
              onClick={handleSave}
              className="text-app-primary hover:text-app-primary/90 hover:bg-transparent"
            >
              保存
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-8">
            <h2 className="font-semibold mb-4">个人照片</h2>
            
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden relative group">
                  <img 
                    src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${44 + index}.jpg`} 
                    alt={`Photo ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="opacity-0 group-hover:opacity-100 text-white hover:text-white hover:bg-transparent"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="aspect-square rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full bg-app-gray flex items-center justify-center">
                    <Plus className="h-5 w-5 text-app-primary" />
                  </div>
                  <span className="text-xs text-app-subtle">添加照片</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="font-semibold block mb-2">昵称</label>
              <Input 
                value={name} 
                onChange={e => setName(e.target.value)}
                className="rounded-xl"
              />
            </div>
            
            <div>
              <label className="font-semibold block mb-2">年龄</label>
              <Input 
                type="number" 
                value={age} 
                onChange={e => setAge(e.target.value)}
                className="rounded-xl"
              />
            </div>
            
            <div>
              <label className="font-semibold block mb-2">职业</label>
              <Input 
                value={occupation} 
                onChange={e => setOccupation(e.target.value)}
                className="rounded-xl"
              />
            </div>
            
            <div>
              <label className="font-semibold block mb-2">个人简介</label>
              <Textarea 
                value={bio} 
                onChange={e => setBio(e.target.value)}
                className="rounded-xl min-h-[100px]"
                placeholder="介绍一下自己..."
              />
              <div className="text-right mt-1">
                <span className="text-xs text-app-subtle">{bio.length}/200</span>
              </div>
            </div>
            
            <div>
              <label className="font-semibold block mb-2">兴趣爱好</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {interests.map(interest => (
                  <Badge 
                    key={interest} 
                    className="rounded-full px-3 py-1.5 bg-app-gray text-app-text flex items-center gap-1"
                  >
                    {interest}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeInterest(interest)}
                      className="h-4 w-4 rounded-full hover:bg-gray-300 p-0 ml-1"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Input 
                  value={newInterest} 
                  onChange={e => setNewInterest(e.target.value)}
                  placeholder="添加兴趣爱好"
                  className="rounded-xl"
                  onKeyDown={e => e.key === 'Enter' && addInterest()}
                />
                <Button 
                  onClick={addInterest}
                  className="rounded-xl bg-app-primary hover:bg-app-primary/90"
                >
                  添加
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default EditProfilePage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Mail, Lock, Phone, X } from 'lucide-react';
import PhoneFrame from '@/components/PhoneFrame';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/swipe');
  };
  
  return (
    <PhoneFrame>
      <div className="flex flex-col p-6 h-full">
        <div className="flex items-center justify-between mb-10">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate('/')}
            className="rounded-full w-10 h-10 hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <h1 className="text-xl font-semibold">登录</h1>
          
          <div className="w-10"></div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={loginMethod === 'phone' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${loginMethod === 'phone' ? 'bg-app-primary' : 'border-app-primary text-app-primary'}`}
            onClick={() => setLoginMethod('phone')}
          >
            手机号登录
          </Button>
          
          <Button
            variant={loginMethod === 'email' ? 'default' : 'outline'}
            className={`rounded-full px-6 ${loginMethod === 'email' ? 'bg-app-primary' : 'border-app-primary text-app-primary'}`}
            onClick={() => setLoginMethod('email')}
          >
            邮箱登录
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex-1">
          {loginMethod === 'phone' ? (
            <div className="relative mb-6">
              <Phone className="absolute left-3 top-3 h-5 w-5 text-app-subtle" />
              <Input
                type="tel"
                placeholder="请输入手机号"
                className="pl-10 h-12 rounded-xl"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {phoneNumber && (
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2 h-8 w-8 rounded-full hover:bg-gray-100"
                  onClick={() => setPhoneNumber('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ) : (
            <div className="relative mb-6">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-app-subtle" />
              <Input
                type="email"
                placeholder="请输入邮箱"
                className="pl-10 h-12 rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {email && (
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2 h-8 w-8 rounded-full hover:bg-gray-100"
                  onClick={() => setEmail('')}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
          
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-app-subtle" />
            <Input
              type="password"
              placeholder="请输入密码"
              className="pl-10 h-12 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-6 rounded-full bg-app-primary hover:bg-app-primary/90 mt-4"
          >
            登录
          </Button>
          
          <div className="mt-5 text-center">
            <Button variant="link" className="text-app-primary">忘记密码？</Button>
          </div>
          
          <div className="text-center mt-6">
            <span className="text-app-subtle">还没有帐号？</span>{' '}
            <Button variant="link" className="text-app-primary p-0">立即注册</Button>
          </div>
        </form>
      </div>
    </PhoneFrame>
  );
};

export default Login;

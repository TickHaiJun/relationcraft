
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PhoneFrame from '@/components/PhoneFrame';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto animation effect
    const timer = setTimeout(() => {
      document.getElementById('welcome-logo')?.classList.add('scale-100', 'opacity-100');
      document.getElementById('welcome-title')?.classList.add('translate-y-0', 'opacity-100');
      document.getElementById('welcome-subtitle')?.classList.add('translate-y-0', 'opacity-100');
      document.getElementById('welcome-buttons')?.classList.add('translate-y-0', 'opacity-100');
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <PhoneFrame showStatusBar={false}>
      <div className="flex flex-col items-center justify-center h-full px-8 bg-white">
        <div 
          id="welcome-logo"
          className="w-24 h-24 bg-app-primary rounded-full flex items-center justify-center mb-8 scale-50 opacity-0 transition-all duration-700"
        >
          <Heart className="w-12 h-12 text-white" />
        </div>
        
        <h1 
          id="welcome-title"
          className="text-4xl font-bold text-app-dark mb-3 -translate-y-10 opacity-0 transition-all duration-700 delay-300"
        >
          恋遇
        </h1>
        
        <p 
          id="welcome-subtitle"
          className="text-app-subtle text-center mb-12 -translate-y-10 opacity-0 transition-all duration-700 delay-500"
        >
          发现你周围的美好人际关系
        </p>
        
        <div 
          id="welcome-buttons"
          className="space-y-4 w-full -translate-y-10 opacity-0 transition-all duration-700 delay-700"
        >
          <Button 
            className="w-full bg-app-primary hover:bg-app-primary/90 text-white rounded-full py-6"
            onClick={() => navigate('/login')}
          >
            立即开始
          </Button>
          
          <Button 
            variant="outline"
            className="w-full border-app-primary text-app-primary hover:bg-app-primary/10 rounded-full py-6"
            onClick={() => navigate('/prototype')}
          >
            查看原型
          </Button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Welcome;

// Import at the top
import { Heart } from 'lucide-react';

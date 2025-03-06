
import React from 'react';
import { Heart, MessageCircle, User, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const TabBar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <div className="tab-bar">
      <Link to="/swipe" className={`tab-item ${pathname === '/swipe' ? 'active' : ''}`}>
        <Search className="h-6 w-6" />
        <span className="text-xs">发现</span>
      </Link>
      
      <Link to="/matches" className={`tab-item ${pathname === '/matches' ? 'active' : ''}`}>
        <Heart className="h-6 w-6" />
        <span className="text-xs">喜欢</span>
      </Link>
      
      <Link to="/messages" className={`tab-item ${pathname === '/messages' ? 'active' : ''}`}>
        <MessageCircle className="h-6 w-6" />
        <span className="text-xs">消息</span>
      </Link>
      
      <Link to="/profile" className={`tab-item ${pathname === '/profile' ? 'active' : ''}`}>
        <User className="h-6 w-6" />
        <span className="text-xs">我的</span>
      </Link>
    </div>
  );
};

export default TabBar;

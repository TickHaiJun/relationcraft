
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import PhoneFrame from "@/components/PhoneFrame";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PhoneFrame>
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="w-20 h-20 bg-app-gray rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl font-bold text-app-primary">404</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">页面不存在</h1>
        <p className="text-app-subtle mb-8">抱歉，您要找的页面不存在或已被移除。</p>
        
        <Button 
          onClick={() => navigate('/')}
          className="rounded-full px-6 py-5 bg-app-primary hover:bg-app-primary/90 flex items-center gap-2"
        >
          <Home className="h-5 w-5" />
          返回首页
        </Button>
      </div>
    </PhoneFrame>
  );
};

export default NotFound;

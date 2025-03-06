
import React from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  showStatusBar?: boolean;
  showHomeIndicator?: boolean;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ 
  children, 
  showStatusBar = true,
  showHomeIndicator = true 
}) => {
  // Get current time for status bar
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className="phone-frame">
      {showStatusBar && (
        <div className="ios-status-bar">
          <span>{currentTime}</span>
          <div className="flex items-center gap-1">
            <Signal className="h-3.5 w-3.5" />
            <Wifi className="h-3.5 w-3.5" />
            <Battery className="h-3.5 w-3.5" />
          </div>
        </div>
      )}
      
      <div className="content overflow-y-auto h-[calc(100%-85px-44px)]">
        {children}
      </div>
      
      {showHomeIndicator && (
        <div className="ios-home-indicator"></div>
      )}
    </div>
  );
};

export default PhoneFrame;

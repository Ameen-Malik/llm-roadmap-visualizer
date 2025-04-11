
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-brand-orange font-bold text-2xl md:text-3xl">100x</span>
      <span className="font-medium text-2xl md:text-3xl">Engineers</span>
    </div>
  );
};

export default Logo;

import React from 'react';
import { companyInfo } from '@/shared/config/company';

interface LogoProps {
  variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-800';
  
  return (
    <div className="flex items-center">
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Simple wheat/sunflower logo */}
        <path
          d="M12 2L14.5 9H9.5L12 2Z"
          fill="#FFD700"
          stroke="#0057B7"
          strokeWidth="1.5"
        />
        <path
          d="M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z"
          fill="#0057B7"
          stroke="#FFD700"
          strokeWidth="1.5"
        />
        <path
          d="M12 22V17"
          stroke="#FFD700"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-bold text-sm md:text-base xl:text-lg 2xl:text-xl ${textColor}`}>{companyInfo.name}</span>
    </div>
  );
};

export default Logo; 
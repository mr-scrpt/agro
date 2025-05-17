import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] ${className}`}>
      {children}
    </div>
  );
} 
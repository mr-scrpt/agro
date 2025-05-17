import React from 'react';
import { Navigation } from '@/entities/Navigation';
import { navItems } from '@/shared/config/navigation';

interface MainMenuProps {
  variant?: 'header' | 'footer';
  className?: string;
  onItemClick?: () => void;
}

export function MainMenu({ variant = 'header', className = '', onItemClick }: MainMenuProps) {
  const navClassName = variant === 'footer' ? 'flex flex-col sm:flex-row' : 'flex md:flex-row flex-col';
  
  return (
    <div className={className}>
      <Navigation 
        items={navItems} 
        variant={variant} 
        onItemClick={onItemClick}
        className={navClassName}
      />
    </div>
  );
}

export default MainMenu; 
import React from 'react';
import { Navigation } from '@/entities/Navigation';
import { navItems } from '@/shared/config/navigation';

interface MainMenuProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export function MainMenu({ variant = 'header', className = '' }: MainMenuProps) {
  return (
    <div className={className}>
      <Navigation items={navItems} variant={variant} />
    </div>
  );
}

export default MainMenu; 
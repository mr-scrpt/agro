import React from 'react';
import { NavItem } from '@/shared/config/navigation';

interface NavigationProps {
  items: NavItem[];
  variant?: 'header' | 'footer';
  onItemClick?: () => void;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  variant = 'header',
  onItemClick,
  className = ''
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Высота хедера
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Execute callback if provided
      if (onItemClick) {
        onItemClick();
      }
    }
  };

  const baseStyles = 'transition-colors duration-200';
  const variantStyles = {
    header: 'text-gray-700 hover:text-ukraine-blue',
    footer: 'text-gray-300 hover:text-ukraine-yellow'
  };
  
  return (
    <nav className={`${className}`}>
      {items.map((item) => (
        <a 
          key={item.href}
          href={`#${item.href}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.href);
          }}
          className={`${baseStyles} ${variantStyles[variant]} py-2 block ${variant === 'header' ? 'text-center mx-0 md:mx-4 text-xl mb-4 md:mb-0 md:text-base md:inline-block' : 'mx-2'}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation; 
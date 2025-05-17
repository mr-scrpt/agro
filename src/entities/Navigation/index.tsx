import React from 'react';
import { NavItem } from '@/shared/config/navigation';

interface NavigationProps {
  items: NavItem[];
  variant?: 'header' | 'footer';
}

export const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  variant = 'header' 
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
    }
  };

  const baseStyles = 'transition-colors duration-200';
  const variantStyles = {
    header: 'text-gray-700 hover:text-ukraine-blue mx-4',
    footer: 'text-gray-300 hover:text-ukraine-yellow mx-2'
  };
  
  return (
    <nav className={`flex ${variant === 'header' ? 'flex-row' : 'flex-col sm:flex-row'}`}>
      {items.map((item) => (
        <a 
          key={item.href}
          href={`#${item.href}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(item.href);
          }}
          className={`${baseStyles} ${variantStyles[variant]} py-2`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation; 
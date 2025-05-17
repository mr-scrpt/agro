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

  // Common hover effect styles for both variants
  const commonStyles = "relative transition-all duration-300";
  const hoverUnderlineEffect = "after:absolute after:content-[''] after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300";
  
  // Header-specific styles
  const headerStyles = "text-gray-700 hover:text-[#0057B7] text-center mx-0 md:mx-4 text-xl mb-4 md:mb-0 md:text-base md:inline-block py-2 block font-medium";
  const headerUnderlineColor = "after:bg-[#0057B7]";
  
  // Footer-specific styles with yellow color using direct hex value
  const footerStyles = "text-gray-300 hover:text-[#FFD700] mx-2 py-2 block";
  const footerUnderlineColor = "after:bg-[#FFD700]";
  
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
          className={`${commonStyles} ${hoverUnderlineEffect} ${
            variant === 'header' 
              ? `${headerStyles} ${headerUnderlineColor}` 
              : `${footerStyles} ${footerUnderlineColor}`
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation; 
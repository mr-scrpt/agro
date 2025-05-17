'use client';
import React, { useState, useEffect } from 'react';
import { Logo } from '@/entities/Logo';
import { Navigation } from '@/entities/Navigation';
import Container from '@/shared/ui/Container';

const navItems = [
  { label: 'Про компанію', href: 'about' },
  { label: 'Продукція', href: 'products' },
  { label: 'Контакти', href: 'contacts' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
    }`}>
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center">
            <Navigation items={navItems} />
            <a 
              href="tel:+380XXXXXXXXX" 
              className="ml-6 font-medium text-ukraine-blue hover:text-ukraine-yellow transition-colors duration-200"
            >
              +380 (XX) XXX-XX-XX
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col">
              <Navigation items={navItems} />
              <a 
                href="tel:+380XXXXXXXXX" 
                className="mt-4 py-2 font-medium text-ukraine-blue hover:text-ukraine-yellow transition-colors"
              >
                +380 (XX) XXX-XX-XX
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header; 
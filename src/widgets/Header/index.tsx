'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from '@/entities/Logo';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { MainMenu } from '@/features/MainMenu';
import { companyInfo } from '@/shared/config/company';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update CSS variable for header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      }
    };
    
    // Initial update
    updateHeaderHeight();
    
    // Update on scroll state change and window resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateHeaderHeight);
      
      // Use MutationObserver to detect height changes
      const observer = new MutationObserver(updateHeaderHeight);
      if (headerRef.current) {
        observer.observe(headerRef.current, { 
          attributes: true, 
          childList: true, 
          subtree: true 
        });
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateHeaderHeight);
      }
    };
  }, [isScrolled]);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Section 
      id="header"
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden xl:flex items-center">
            <MainMenu variant="header" />
            <a 
              href={`tel:${companyInfo.phones[0]}`}
              className="ml-6 font-medium text-ukraine-blue hover:text-ukraine-yellow transition-colors duration-200"
            >
              {companyInfo.phones[0]}
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="xl:hidden text-gray-700 z-50"
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
        
        {/* Mobile menu - fullscreen overlay */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col">
            <div className="w-full p-6">
              <a 
                href={`tel:${companyInfo.phones[0]}`}
                className="block mt-20 py-2 font-medium text-ukraine-blue hover:text-ukraine-yellow transition-colors text-xl text-center"
              >
                {companyInfo.phones[0]}
              </a>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <MainMenu 
                variant="header" 
                onItemClick={closeMobileMenu} 
                className="flex flex-col items-center" 
              />
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Header; 
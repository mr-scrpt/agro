'use client';
import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { Logo } from '@/entities/Logo';
import { MainMenu } from '@/features/MainMenu';
import { companyInfo } from '@/shared/config/company';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 md:justify-start justify-center">
      <a href={companyInfo.socialMedia.facebook} className="text-white hover:text-ukraine-yellow transition-colors">
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
      <a href={companyInfo.socialMedia.instagram} className="text-white hover:text-ukraine-yellow transition-colors">
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <Section id="footer" className="bg-gray-800 text-white py-8">
      <Container>
        {/* Main footer content */}
        <div className="md:flex md:flex-row md:justify-between md:items-center">
          {/* For mobile: Logo at top, centered */}
          <div className="order-1 md:order-1 mb-6 md:mb-0 text-center md:text-left flex justify-center md:justify-start">
            <Logo variant="light" />
          </div>
          
          {/* For mobile: Menu in middle */}
          <div className="order-2 md:order-2 mb-6 md:mb-0 text-center md:text-left">
            <MainMenu variant="footer" className="md:justify-start justify-center" />
          </div>
          
          {/* For mobile: Social links next */}
          <div className="order-3 md:order-3 mb-6 md:mb-0">
            <SocialLinks />
          </div>
          
          {/* For mobile: Copyright at bottom */}
          <div className="order-4 md:hidden text-center">
            <p className="text-sm">© {new Date().getFullYear()} {companyInfo.shortName}. Усі права захищені.</p>
          </div>
        </div>
        
        {/* Copyright on desktop - separate row */}
        <div className="hidden md:block md:mt-8 md:pt-4 md:border-t md:border-gray-700">
          <p className="text-sm text-center">© {new Date().getFullYear()} {companyInfo.shortName}. Усі права захищені.</p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer; 
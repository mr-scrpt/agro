'use client';
import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { Logo } from '@/entities/Logo';
import { MainMenu } from '@/features/MainMenu';
import { companyInfo } from '@/shared/config/company';

export const Footer: React.FC = () => {
  return (
    <Section id="footer" className="bg-gray-800 text-white py-8 lg:py-12">
      <Container>
        <div className="flex flex-col items-center lg:grid lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Logo and company info */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="flex flex-col items-start">
              <div className="h-auto">
                <Logo variant="light" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-7 w-full">
            <MainMenu 
              variant="footer" 
              className="flex flex-col items-center lg:flex-row lg:justify-end space-y-4 lg:space-y-0 lg:space-x-8" 
            />
          </div>
        </div>

        {/* Copyright - always at bottom */}
        <div className="mt-6 lg:mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-center">© {new Date().getFullYear()} {companyInfo.shortName}. Усі права захищені.</p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
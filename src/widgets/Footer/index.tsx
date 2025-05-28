'use client';
import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { Logo } from '@/entities/Logo';
import { MainMenu } from '@/features/MainMenu';
import { companyInfo } from '@/shared/config/company';

export const Footer: React.FC = () => {
  return (
    <Section id="footer" className="bg-gray-800 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and company info */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Logo variant="light" />
          </div>

          {/* Navigation */}
          <div className="lg:col-span-7 flex items-center">
            <MainMenu variant="footer" className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-end space-y-4 sm:space-y-0 lg:space-x-8 w-full" />
          </div>
        </div>

        {/* Copyright - always at bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-center">© {new Date().getFullYear()} {companyInfo.shortName}. Усі права захищені.</p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer; 
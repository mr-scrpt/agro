import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { companyInfo } from '@/shared/config/company';

export const AboutCompany: React.FC = () => {
  return (
    <Section 
      id="about" 
      className="bg-gray-50 relative bg-cover bg-top min-h-[550px] max-h-[1200px] md:h-[clamp(800px,calc(100vh-80px),1200px)]" 
      style={{ backgroundImage: 'url(/images/bg_field.png)' }}
    >
      <Container className="h-full p-0">
        <div className="flex w-full h-full">
          {/* Left section with content and overlay */}
          <div className="relative w-[100%] md:w-1/2 h-full">
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 h-full flex items-center p-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center md:text-left border-b-2 border-ukraine-yellow pb-2 inline-block text-white">
                  Про компанію
                </h2>
                <p className="text-white leading-relaxed text-lg">
                  {companyInfo.description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Right section - empty space */}
          <div className="w-[0] md:w-1/2 h-full"></div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutCompany; 
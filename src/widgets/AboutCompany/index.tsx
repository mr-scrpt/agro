import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';

export const AboutCompany: React.FC = () => {
  return (
    <Section 
      id="about" 
      className="bg-gray-50 relative bg-cover bg-center" 
      style={{ backgroundImage: 'url(/images/bg_field.png)' }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <Container className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-center border-b-2 border-ukraine-yellow pb-2 inline-block mx-auto text-white">
          Про компанію
        </h2>
        <div className="md:flex items-center gap-8 mt-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-white leading-relaxed text-lg">
              Ми — молода аграрна компанія, що зростає на родючих землях України. 
              Наша місія — вирощувати якісну сільськогосподарську продукцію з турботою 
              про землю та людей. Ми поєднуємо сучасні технології з традиціями 
              українського землеробства, щоб забезпечити стабільність, якість і розвиток.
            </p>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-80">
            <div className="absolute inset-0 bg-ukraine-blue/50 rounded-lg overflow-hidden">
              <div className="relative h-full"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-ukraine-blue/70 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutCompany; 
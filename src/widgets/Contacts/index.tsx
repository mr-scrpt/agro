import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { ContactItem } from '@/entities/ContactItem';
import { companyInfo } from '@/shared/config/company';

export const Contacts: React.FC = () => {
  return (
    <Section id="contacts" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-ukraine-yellow pb-2 inline-block mx-auto">
          Наші контакти
        </h2>
        <div className="md:flex mt-10 gap-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <ContactItem
              icon="location"
              title="Адреса:"
              content={companyInfo.address}
            />
            <ContactItem
              icon="phone"
              title="Телефон:"
              content={companyInfo.phones[0]}
            />
            <ContactItem
              icon="email"
              title="Email:"
              content={companyInfo.email}
            />
          </div>
          <div className="md:w-1/2">
            {/* Map Component */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-64 md:h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5129.156836780979!2d36.29428731571144!3d49.97492397941459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270a8c0c3d5c7f%3A0x62c85d9eda796e89!2z0L_RgNC-0YHQvy4g0JPQtdGA0L7QtdCyINCl0LDRgNGM0LrQvtCy0LAsIDE5OSwg0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1sru!2sua!4v1637350627044!5m2!1sru!2sua" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contacts; 
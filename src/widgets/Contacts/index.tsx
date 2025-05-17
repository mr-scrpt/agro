import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { ContactItem } from '@/entities/ContactItem';

export const Contacts: React.FC = () => {
  return (
    <Section id="contacts" className="bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-ukraine-yellow pb-2 inline-block mx-auto">
          Наші контакти
        </h2>
        <div className="md:flex mt-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <ContactItem
              icon="location"
              title="Адреса:"
              content="[вулиця/номер, місто, область, Україна]"
            />
            <ContactItem
              icon="phone"
              title="Телефон:"
              content="+380 (XX) XXX-XX-XX"
            />
            <ContactItem
              icon="email"
              title="Email:"
              content="info@agrarna-kompaniya.ua"
            />
          </div>
          <div className="md:w-1/2">
            {/* Map Component */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md h-64 md:h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4771976773625!2d30.5133427!3d50.4480955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce55e0fa8a01%3A0xb78d5c31d3d8eaae!2sKhreshchatyk%20St%2C%20Kyiv%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1637350627044!5m2!1sen!2sus" 
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
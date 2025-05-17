import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '' 
}) => {
  return (
    <section
      id={id}
      className={`py-16 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section; 
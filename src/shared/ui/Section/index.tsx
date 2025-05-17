import React, { forwardRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ 
  id, 
  children, 
  className = '',
  style 
}, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`${className}`}
      style={style}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section; 
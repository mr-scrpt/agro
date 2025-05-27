import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
}) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-ukraine-blue text-white hover:bg-blue-700',
    secondary: 'bg-ukraine-yellow text-gray-800 hover:bg-yellow-500',
    outline: 'border-2 border-ukraine-blue text-ukraine-blue hover:bg-ukraine-blue hover:text-white'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 
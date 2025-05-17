import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 mr-4 relative">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard; 
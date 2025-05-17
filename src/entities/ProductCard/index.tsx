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
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-ukraine-yellow">
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
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard; 
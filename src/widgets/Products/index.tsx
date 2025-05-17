import React from 'react';
import Section from '@/shared/ui/Section';
import Container from '@/shared/ui/Container';
import { ProductCard } from '@/entities/ProductCard';

const products = [
  {
    title: 'Пшениця',
    description: 'Вирощуємо високоякісну пшеницю, яка відповідає міжнародним стандартам. Наше зерно відзначається високою врожайністю, чистотою та відмінними смаковими властивостями. Ідеальне для переробки на борошно та харчову промисловість.',
    icon: '/icons/wheat.svg'
  },
  {
    title: 'Соняшник',
    description: 'Соняшник — одна з наших ключових культур. Ми вирощуємо його з дотриманням всіх агротехнічних норм, що дозволяє отримувати олійність на рівні світових лідерів. Продукція придатна для виробництва олії найвищого ґатунку.',
    icon: '/icons/sunflower.svg'
  }
];

export const Products: React.FC = () => {
  return (
    <Section id="products" className="bg-white">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center border-b-2 border-ukraine-blue pb-2 inline-block mx-auto">
          Наша аграрна продукція
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Products; 
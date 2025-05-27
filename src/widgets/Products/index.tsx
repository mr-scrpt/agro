import React from 'react';
import Section from '@/shared/ui/Section';
import { Container } from '@/shared/ui/Container';
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

export function Products() {
  return (
    <Section id="products" className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-6 border-b-2 border-ukraine-yellow pb-2 inline-block mx-auto">
          Наша аграрна продукція
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
}

export default Products; 
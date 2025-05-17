import React from 'react';
import { Container } from '@/shared/ui/Container';
import { PrincipleCard } from '@/entities/PrincipleCard';

const principles = [
  {
    number: 1,
    title: 'Якість понад усе',
    description: 'Ми впевнені, що успіх у сільському господарстві починається з високоякісного насіння, сучасних технологій та дбайливого ставлення до землі. Ми прагнемо до максимальної якості на кожному етапі виробництва — від підготовки ґрунту до збору врожаю.'
  },
  {
    number: 2,
    title: 'Відповідальність перед землею',
    description: 'Ми дотримуємось принципів сталого землеробства, використовуємо екологічно безпечні методи та зберігаємо родючість ґрунтів для майбутніх поколінь.'
  },
  {
    number: 3,
    title: 'Інновації та розвиток',
    description: 'Ми впроваджуємо сучасні агротехнології, системи точного землеробства та автоматизацію процесів, що дозволяє підвищити ефективність і знизити витрати.'
  },
  {
    number: 4,
    title: 'Прозорість та чесність',
    description: 'Ми будуємо довіру з партнерами, клієнтами та громадою на основі відкритості, чесності та дотримання зобов\'язань.'
  },
  {
    number: 5,
    title: 'Команда — наша сила',
    description: 'Ми інвестуємо в розвиток нашої команди, підтримуємо професійне зростання та створюємо умови для комфортної та безпечної праці.'
  },
  {
    number: 6,
    title: 'Орієнтація на клієнта',
    description: 'Ми уважно слухаємо потреби клієнтів і партнерів, забезпечуючи індивідуальний підхід і високу якість обслуговування.'
  }
];

export function CompanyPrinciples() {
  return (
    <section id="principles" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-6 border-b-2 border-ukraine-yellow pb-2 inline-block mx-auto">Принципи роботи нашої компанії</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle) => (
            <PrincipleCard
              key={principle.number}
              number={principle.number}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CompanyPrinciples; 
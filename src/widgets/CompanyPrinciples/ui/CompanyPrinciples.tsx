import { Container } from '@/shared/ui/Container';
import { PrincipleCard } from '@/entities/PrincipleCard';
import { principles } from '..';

export function CompanyPrinciples() {
  return (
    <section id="principles" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Принципи роботи нашої компанії</h2>
        
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
import { Container } from '@/shared/ui/Container';

export function CompanyPrinciples() {
  return (
    <section id="principles" className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Принципи роботи нашої компанії</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">1. Якість понад усе</h3>
            <p>
              Ми впевнені, що успіх у сільському господарстві починається з високоякісного насіння, 
              сучасних технологій та дбайливого ставлення до землі. Ми прагнемо до максимальної якості 
              на кожному етапі виробництва — від підготовки ґрунту до збору врожаю.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">2. Відповідальність перед землею</h3>
            <p>
              Ми дотримуємось принципів сталого землеробства, використовуємо екологічно безпечні методи 
              та зберігаємо родючість ґрунтів для майбутніх поколінь.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">3. Інновації та розвиток</h3>
            <p>
              Ми впроваджуємо сучасні агротехнології, системи точного землеробства та автоматизацію процесів, 
              що дозволяє підвищити ефективність і знизити витрати.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">4. Прозорість та чесність</h3>
            <p>
              Ми будуємо довіру з партнерами, клієнтами та громадою на основі відкритості, 
              чесності та дотримання зобов'язань.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">5. Команда — наша сила</h3>
            <p>
              Ми інвестуємо в розвиток нашої команди, підтримуємо професійне зростання 
              та створюємо умови для комфортної та безпечної праці.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">6. Орієнтація на клієнта</h3>
            <p>
              Ми уважно слухаємо потреби клієнтів і партнерів, забезпечуючи індивідуальний підхід 
              і високу якість обслуговування.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
} 
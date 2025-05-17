import { AboutCompany } from '@/widgets/AboutCompany';
import { Contacts } from '@/widgets/Contacts';
import { Footer } from '@/widgets/Footer';
import { Products } from '@/widgets/Products';
import { Header } from '@/widgets/Header';
import { CompanyPrinciples } from '@/widgets/CompanyPrinciples';

export default function Home() {
  return (
    <main className="min-h-screen pt-18">
      <Header />
      <AboutCompany />
      <CompanyPrinciples />
      <Products />
      <Contacts />
      <Footer />
    </main>
  );
}

// Использование SSG
export function generateStaticParams() {
  return [];
} 
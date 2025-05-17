import { AboutCompany } from '@/widgets/AboutCompany';
import { Contacts } from '@/widgets/Contacts';
import { Footer } from '@/widgets/Footer';
import { Products } from '@/widgets/Products';
import { Header } from '@/widgets/Header';
export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Header />
      <AboutCompany />
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
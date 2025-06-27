import { AboutCompany } from "@/widgets/AboutCompany";
import { Contacts } from "@/widgets/Contacts";
import { Footer } from "@/widgets/Footer";
import { Products } from "@/widgets/Products";
import { Header } from "@/widgets/Header";
import { CompanyPrinciples } from "@/widgets/CompanyPrinciples";
import { PromoSection } from "@/widgets/PromoSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-[130px]">
      <Header />
      <AboutCompany />
      <CompanyPrinciples />
      <Products />
      <Contacts />
      <PromoSection />
      <Footer />
    </main>
  );
}

// Использование SSG
export function generateStaticParams() {
  return [];
}


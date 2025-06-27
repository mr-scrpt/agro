import { Metadata } from "next";
import { companyInfo } from "./company";

const keywords = [
  "агро",
  "аграрна компанія",
  "сільське господарство",
  "Україна",
  "фермерство",
  companyInfo.companyName,
  "агробізнес",
  "фермерське господарство",
];

export const siteMetadata: Metadata = {
  title: `${companyInfo.shortName} - ${companyInfo.slogan}`,
  description: companyInfo.description,
  keywords,
  authors: [{ name: companyInfo.name }],
  openGraph: {
    title: `${companyInfo.companyName} - ${companyInfo.slogan}`,
    description: companyInfo.description,
    type: "website",
    locale: "ua_UA",
    siteName: companyInfo.companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.companyName} - ${companyInfo.slogan}`,
    description: companyInfo.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default siteMetadata; 
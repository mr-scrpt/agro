import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "АгроЛенд - Аграрна компанія України",
  description: "Аграрна компанія, що зростає на родючих землях України",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
} 
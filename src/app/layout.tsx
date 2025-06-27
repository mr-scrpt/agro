import type { Metadata } from "next";
import "./globals.css";
import { siteMetadata } from "@/shared/config/meta";

export const metadata: Metadata = {
  ...siteMetadata,
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicons/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicons/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicons/favicon-256x256.png", sizes: "256x256", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicons/favicon-256x256.png",
  },
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
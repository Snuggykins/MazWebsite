import type { Metadata } from "next";
import { inter, spaceGrotesk } from "./fonts";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ClientVantaWrapper } from "@/components/ClientVantaWrapper";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Maz Customs & Decor",
  description: "Luxury automotive customization and interior design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-sans bg-background text-copy antialiased">
        <ModeProvider>
          <LanguageProvider>
            {/* The VantaBackground component uses three.js which is client-side only */}
            <Navbar />
            <main>{children}</main>
          </LanguageProvider>
        </ModeProvider>
      </body>
    </html>
  );
}

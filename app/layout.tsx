import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./providers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Пулатов Шерзод Аббозович",
  description: "Официальный сайт. Медиация, образование, консультации.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <Providers>
          {/* деликатный фон-градиент поверх базового */}
          <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-sky-50/70 via-white to-white" />
          <Header />
          <main className="min-h-[60vh]">
            <Hero />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

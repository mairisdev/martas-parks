import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/topbar/TopBar";
import HeaderLayout from "@/components/HeaderLayout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martas Mēbeles",
  description: "Kvalitatīvas mēbeles Jūsu mājām",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className={montserrat.variable}>
      <body className="antialiased" style={{ fontFamily: 'var(--font-montserrat)' }}>
        <TopBar />
        <HeaderLayout />
        <main>{children}</main>
        <footer className="text-center text-sm text-gray-500 mt-10">
          © 2025 Martas Mēbeles, All rights reserved.
        </footer>
      </body>
    </html>
  );
}
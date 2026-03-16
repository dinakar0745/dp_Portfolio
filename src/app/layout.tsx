import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Dinakar Pathakota",
  description:
    "Backend and systems engineer building large-scale imaging pipelines and AI infrastructure.",
  keywords: [
    "backend engineer",
    "systems engineer",
    "whole slide imaging",
    "distributed systems",
    "cloud infrastructure",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-text-primary antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}

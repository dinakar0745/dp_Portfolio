import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dp.ntechx.dev"),
  title: "Dinakar Pathakota",
  description:
    "Software developer and computational pathology researcher. Whole-slide image analysis, GPU-accelerated ML systems, and large-scale image pipelines.",
  keywords: [
    "computational pathology",
    "whole slide imaging",
    "medical imaging",
    "deep learning",
    "graph neural networks",
    "backend engineer",
    "distributed systems",
  ],
  openGraph: {
    title: "Dinakar Pathakota",
    description:
      "Software developer and computational pathology researcher. Whole-slide image analysis, GPU-accelerated ML systems, and large-scale image pipelines.",
    url: "https://dp.ntechx.dev",
    siteName: "Dinakar Pathakota",
    type: "website",
  },
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

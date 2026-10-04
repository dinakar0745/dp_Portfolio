import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MotionProvider from "@/components/motion/MotionProvider";
import { site } from "@/content/site";

// Fonts are self-hosted (src/fonts) so builds never depend on Google Fonts
// and visitors make no third-party font requests.
const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "computational pathology",
    "whole slide imaging",
    "medical imaging",
    "deep learning",
    "graph neural networks",
    "backend engineer",
    "distributed systems",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="bg-bg text-text-primary antialiased"
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-3 focus:py-2 focus:rounded focus:bg-accent focus:text-bg focus:text-sm"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="relative z-10">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

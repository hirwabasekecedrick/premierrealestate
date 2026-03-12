import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premier Real Estate | Modern Living in Kigali",
  description: "Find your dream home in Kigali. Explore premium properties, luxury homes, and popular neighborhoods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon" />
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-[88px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

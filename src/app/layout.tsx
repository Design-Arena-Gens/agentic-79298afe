import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumen Studio — Digital Experiences",
  description:
    "Lumen Studio crafts luminous digital products and marketing experiences for ambitious brands.",
  metadataBase: new URL("https://agentic-79298afe.vercel.app"),
  openGraph: {
    title: "Lumen Studio — Digital Experiences",
    description:
      "A creative collective delivering conversion-focused websites, campaigns, and products.",
    url: "https://agentic-79298afe.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen Studio — Digital Experiences",
    description:
      "Crafting luminous digital products, marketing, and storytelling for ambitious brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

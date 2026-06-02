import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "佐藤 快 | Data Science Student Portfolio",
  description:
    "データサイエンス学部の学生・佐藤快のポートフォリオ。AI・データ分析・Web開発を通じて、身近な課題を形にします。",
  openGraph: {
    title: "佐藤 快 | Data Science Student Portfolio",
    description:
      "AI・データ分析・Web開発を通じて、身近な課題を形にする。データサイエンス学部の学生ポートフォリオ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="bg-white font-sans text-slate-700 antialiased">
        {children}
      </body>
    </html>
  );
}

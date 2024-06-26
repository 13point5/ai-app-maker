import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "remixicon/fonts/remixicon.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI App Maker",
  description: "Make AI apps without writing code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { cormorant, luxuriousScript } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Budeme Myslíkovi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${luxuriousScript.variable}`}>
      <body
        className="bg-champagne text-black"
      >
        {children}
      </body>
    </html>
  );
}

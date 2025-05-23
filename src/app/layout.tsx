import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});



export const metadata: Metadata = {
  title: "JC Criador de QR Codes",
  description: "Um gerador de QR Codes simples, rápido e eficiente. Crie QR Codes dinâmicos, com personalização de cores, logo e alta qualidade para qualquer finalidade.",
  icons: {
    icon: '/fav.png',}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}


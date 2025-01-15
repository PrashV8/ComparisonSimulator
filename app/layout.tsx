// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { I18nextProvider } from 'react-i18next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Comparison Simulator',
  description: 'Compare items and select the best one!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ animation: 'fadeIn 1s ease-in-out' }}>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
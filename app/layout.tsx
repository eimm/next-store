import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

import Footer from '@/components/Footer';
import ModalProvider from '@/components/ModalProvider';
import Navbar from '@/components/Navbar';
import { Providers as ParallaxProvider } from '@/components/ParallaxProvider';
import { Toast } from '@/components/Toast';

import './globals.css';

const font = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toast />
        <ModalProvider />
        <Navbar />
        <ParallaxProvider>{children}</ParallaxProvider>
        <Footer />
      </body>
    </html>
  );
}

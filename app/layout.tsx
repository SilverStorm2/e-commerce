import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { CartProvider } from '@/contexts/cart-context';
import { ReviewProvider } from '@/contexts/reviews-context';

import './globals.css';

const inter = Inter({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Modern Style - Sklep internetowy',
  description:
    'Modern Style to inteligentny sklep internetowy oferujacy spersonalizowane rekomendacje produktow z kategorii moda, dom, sport, uroda i elektronika.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pl'>
      <body className={`${inter.className} min-h-screen bg-slate-50`}>
        <CartProvider>
          <ReviewProvider>
            <div className='flex min-h-screen flex-col'>
              <Header />
              <main className='flex-1'>{children}</main>
              <Footer />
            </div>
          </ReviewProvider>
        </CartProvider>
      </body>
    </html>
  );
}

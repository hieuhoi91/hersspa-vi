import type { Metadata } from 'next';
import { Prata } from 'next/font/google';
import './globals.css';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';

const prata = Prata({
  variable: '--font-prata',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Her S Spa',
  description:
    'HerSspa chuỗi MiniHome Spa toàn cầu, mang đến các giải pháp toàn diện, hiệu quả về chăm sóc, trẻ hóa da và trị liệu Body.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prata.variable}`}>
      <body className="antialiased">
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'APP — Minimalist Monochrome',
  description: 'A sharp editorial black-and-white interface system.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

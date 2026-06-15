import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bakery Naichii',
  description: 'Bakery Naichii - Hangat di Hati, Lembut di Setiap Gigitan',
  metadataBase: new URL('https://bakery-naichii.example.com'),
  openGraph: {
    title: 'Bakery Naichii',
    description: 'Bakery Naichii - Fresh from oven every day.',
    images: '/og-image.png',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

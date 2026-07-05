import './globals.css';
import { Outfit, Shrikhand, Plus_Jakarta_Sans } from 'next/font/google';
import config from '@/lib/data';

const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});
const script = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
  display: 'swap',
});
const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://undangan.example.com'),
  title: config.meta.title,
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    type: 'website',
    locale: 'id_ID',
    images: [{ url: config.person.photo, width: 600, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
  },
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#ff4d8d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

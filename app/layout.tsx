import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pediatric Care | Child Specialist in India | Vaccination & Newborn Care',
  description:
    'Compassionate pediatric care for your little ones. Expert child specialist in India offering vaccination, newborn care, growth monitoring, and general pediatric consultation. Book your appointment today.',
  keywords:
    'pediatrician India, child specialist, baby doctor, vaccination, newborn care, child health, pediatric clinic India, growth monitoring',
  openGraph: {
    title: 'Pediatric Care | Child Specialist in India',
    description: 'Compassionate pediatric care for your little ones. Expert child specialist offering vaccination, newborn care & more.',
    locale: 'en_IN',
    type: 'website',
  },
  robots: 'index, follow',
  authors: [{ name: 'Dr. Ravi Rathore' }],
  creator: 'Dr. Ravi Rathore',
  metadataBase: new URL('https://pediatric-clinic.in'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${inter.className} font-sans min-h-screen flex flex-col bg-white`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MobileMenuProvider } from '@/contexts/MobileMenuContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = 'https://pediatric-clinic.in';
const defaultTitle = 'Best Pediatrician in Ujjain | Dr Ravi Rathore';
const defaultDescription =
  'Dr Ravi Rathore is among the best pediatricians in Ujjain. Child Care & Vaccination Center offers vaccination, child specialist consultation & newborn care. Book your appointment in Ujjain, MP.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: '%s | Dr Ravi Rathore Child Care',
  },
  description: defaultDescription,
  keywords: [
    'Best Pediatrician in Ujjain',
    'pediatrician Ujjain',
    'child specialist Ujjain',
    'vaccination center Ujjain',
    'Dr Ravi Rathore',
    'Child Care Ujjain',
    'pediatric consultation Ujjain',
    'newborn care Ujjain',
  ],
  authors: [{ name: 'Dr. Ravi Rathore', url: siteUrl }],
  creator: 'Dr. Ravi Rathore',
  publisher: 'Dr Ravi Rathore Child Care & Vaccination Center',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Dr Ravi Rathore Child Care & Vaccination Center',
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr Ravi Rathore — Best Pediatrician in Ujjain | Child Care & Vaccination Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  verification: {
    // Optional: add when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
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
      <body className={`${inter.variable} ${inter.className} font-sans min-h-screen min-w-0 flex flex-col bg-white overflow-x-hidden`}>
        <MobileMenuProvider>
          <Navbar />
          <main className="flex-1 min-w-0 w-full overflow-x-hidden">{children}</main>
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  );
}

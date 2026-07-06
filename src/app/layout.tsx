import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { Navigation } from '@/components/ui/Navigation';
import { Footer } from '@/components/ui/Footer';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { CursorGlow } from '@/components/effects/CursorGlow';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BMW | The Ultimate Driving Machine',
  description: 'Experience BMW like never before. Interactive 3D showcase featuring the latest models with cinematic animations, detailed specifications, and immersive storytelling.',
  keywords: ['BMW', 'cars', 'luxury', 'automotive', '3D', 'showcase', 'M Series', 'electric', 'i Series'],
  authors: [{ name: 'BMW Cinematic Experience' }],
  creator: 'BMW Cinematic Experience',
  publisher: 'BMW Cinematic Experience',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bmw-cinematic.vercel.app',
    title: 'BMW | The Ultimate Driving Machine',
    description: 'Experience BMW like never before. Interactive 3D showcase featuring the latest models.',
    siteName: 'BMW Cinematic Experience',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BMW Cinematic Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMW | The Ultimate Driving Machine',
    description: 'Experience BMW like never before. Interactive 3D showcase.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0F0F0F' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorGlow />
          <ScrollProgress />
          <Navigation />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
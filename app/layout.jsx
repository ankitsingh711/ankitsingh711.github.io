import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import Chatbot from '@/components/Chatbot';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'ANKODER — Full Stack Developer',
  description:
    'Ankit Singh — Full Stack Developer building scalable, cloud-ready applications with modern engineering practices. Specializing in React, Node.js, Next.js, and cloud infrastructure.',
  keywords: [
    'Ankit Singh',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Next.js',
    'MERN Stack',
    'Portfolio',
    'Software Engineer',
    'Web Developer',
    'Cloud',
    'DevOps',
  ],
  authors: [{ name: 'Ankit Singh', url: 'https://ankitsingh711.github.io' }],
  creator: 'Ankit Singh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ankitsingh711.github.io',
    title: 'ANKODER — Full Stack Developer',
    description:
      'Building scalable, cloud-ready applications with modern engineering practices.',
    siteName: 'ANKODER',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANKODER — Full Stack Developer',
    description:
      'Building scalable, cloud-ready applications with modern engineering practices.',
    creator: '@AnkitSingh711_',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-inter antialiased">
        <ThemeProvider>
          <CustomCursor />
          <Chatbot />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

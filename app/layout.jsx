import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import Chatbot from '@/components/Chatbot';
import FloatingSocials from '@/components/FloatingSocials';
import FloatingPhone from '@/components/FloatingPhone';

const manrope = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const inter = DM_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Ankit Singh — Full Stack & AI Engineer',
  description:
    'Ankit Singh is a Full Stack & AI Engineer based in Lucknow, India. 3+ years building production web platforms, LLM agents, RAG pipelines, and cloud-native architectures. Available for freelance and full-time roles.',
  keywords: [
    'Ankit Singh',
    'Full Stack Developer',
    'AI Engineer',
    'LLM Engineer',
    'RAG',
    'LangChain',
    'React Developer',
    'Node.js Developer',
    'Next.js',
    'Portfolio',
    'Software Engineer',
    'AI Agent',
    'Cloud Architect',
    'Lucknow',
    'India',
  ],
  authors: [{ name: 'Ankit Singh', url: 'https://ankoder.vercel.app' }],
  creator: 'Ankit Singh',
  metadataBase: new URL('https://ankoder.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ankoder.vercel.app',
    title: 'Ankit Singh — Full Stack & AI Engineer',
    description:
      'Building AI-powered products from idea to production. 3+ years, 10+ projects, 8+ AI apps shipped.',
    siteName: 'Ankit Singh Portfolio',
    images: [
      {
        url: '/images/ankit-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ankit Singh — Full Stack & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Singh — Full Stack & AI Engineer',
    description:
      'Building AI-powered products from idea to production. 3+ years, 10+ projects, 8+ AI apps shipped.',
    creator: '@AnkitSingh711_',
    images: ['/images/ankit-profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://ankoder.vercel.app',
  },
  verification: {
    google: '846d3ee06a003fce',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-inter antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ankit Singh',
              url: 'https://ankoder.vercel.app',
              jobTitle: 'Full Stack & AI Engineer',
              worksFor: { '@type': 'Organization', name: 'Tuna Software Solution Pvt. Ltd.' },
              address: { '@type': 'PostalAddress', addressLocality: 'Lucknow', addressCountry: 'IN' },
              sameAs: [
                'https://github.com/ankitsingh711',
                'https://linkedin.com/in/ankit-singh2127',
                'https://twitter.com/AnkitSingh711_',
                'https://www.youtube.com/@ankkoder',
              ],
              knowsAbout: ['React', 'Next.js', 'Node.js', 'AI Engineering', 'LangChain', 'RAG', 'AWS', 'TypeScript'],
            }),
          }}
        />
        <ThemeProvider>
          <CustomCursor />
<FloatingSocials />
          <FloatingPhone />
          <Chatbot />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

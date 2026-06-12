import './globals.css';
import type { Metadata } from 'next';
import Providers from './providers';
import { siteData } from '../lib/site-data';

export const metadata: Metadata = {
  title: siteData.projectName,
  description: siteData.shortDescription,
  openGraph: {
    title: siteData.projectName,
    description: siteData.shortDescription,
    images: [
      {
        url: '/logo.svg',
        width: 400,
        height: 400,
        alt: siteData.projectName,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteData.projectName,
    description: siteData.shortDescription,
    images: ['/logo.svg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-[#0e1526] via-[#0b1220] to-[#09101b] min-h-screen text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import { Inter, Space_Grotesk } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
});

import {Cormorant_Garamond, Great_Vibes} from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});

export const luxuriousScript = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
});
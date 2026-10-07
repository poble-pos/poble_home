import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";

/**
 * Homepage-only typefaces. They are applied through CSS variables on the
 * homepage wrapper, so other pages keep their existing fonts.
 */
export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const barlow = localFont({
  src: "../fonts/barlow-condensed-700.woff",
  variable: "--font-barlow",
  weight: "700",
  display: "swap",
});

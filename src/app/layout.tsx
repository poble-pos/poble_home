import type { Metadata, Viewport } from "next";
import { Albert_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import { AdminProvider } from '@/context/AdminContext';
import { CartDrawer } from '@/components/CartDrawer';
import { ScrollToTop } from '@/components/ScrollToTop';

const albertSans = Albert_Sans({
    variable: "--font-albert-sans",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: '%s | Poble',
        default: 'Poble',
    },
    description: "Experience the fastest, most reliable iPad POS tailored for modern Australian venues.",
    icons: {
        icon: '/logo-transparent.svg',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-AU" className={`${albertSans.variable} ${outfit.variable}`}>
            <body
                className="font-sans antialiased text-[#0D0D0D] bg-[#F9F8F3]"
                suppressHydrationWarning
            >
                <AdminProvider>
                    <CartProvider>
                        <CartDrawer />
                        {children}
                    </CartProvider>
                </AdminProvider>
                <ScrollToTop />
            </body>
        </html >
    );
}

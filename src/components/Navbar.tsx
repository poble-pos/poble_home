/**
 * @component Navbar
 * @description Global navigation system with responsive mobile drawer and anchor scroll handling.
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '@/context/CartContext';

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { cartCount, setIsCartOpen } = useCart();

    /**
     * Centralized Navigation Config
     */
    const NAV_LINKS = [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Hardware', href: '/hardware' },
        { name: 'About', href: '/about' },
    ];

    /**
     * Logic: Standard Smooth Scroll for On-page Anchors
     */
    const handleScroll = (e: React.MouseEvent, href: string) => {
        if (pathname === '/' && href.startsWith('/#')) {
            e.preventDefault();
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setMobileMenuOpen(false);
        }
    };

    const isAnchorOnHome = (href: string) => pathname === '/' && href.startsWith('/#');

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
            {/* Main Pill Navigation Container */}
            <div className="w-full max-w-3xl bg-white/80 rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex justify-between items-center border border-white/80 backdrop-blur-xl">

                {/* Brand Identity Slot */}
                <Logo
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                />

                {/* Desktop Link Group */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        isAnchorOnHome(link.href) ? (
                            <button
                                key={link.name}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-base font-bold transition-colors tracking-tight text-slate-700 hover:text-poble-charcoal cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-bold transition-colors tracking-tight text-slate-700 hover:text-poble-charcoal"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Action Slot: Cart & Lead Gen */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-poble-gold hover:text-poble-charcoal transition-all border border-slate-100 group cursor-pointer"
                        title="View Deployment Cart"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-poble-gold text-poble-charcoal text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <Link
                        href="/#contact"
                        onClick={(e) => handleScroll(e, '/#contact')}
                        className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-extrabold hover:bg-poble-charcoal hover:text-white transition-all flex items-center gap-3 group tracking-tight"
                    >
                        Talk to an Expert
                        <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Mobile Controls Slot */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100 cursor-pointer"
                        title="View Cart"
                    >
                        <ShoppingBag className="w-4 h-4" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-poble-gold text-poble-charcoal text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <button className="text-poble-charcoal cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Layer */}
            {mobileMenuOpen && (
                <div className="absolute top-24 left-6 right-6 bg-white rounded-[2rem] p-8 flex flex-col gap-6 shadow-2xl border border-slate-100 animate-in fade-in slide-in-from-top-4">
                    {NAV_LINKS.map((link) => (
                        isAnchorOnHome(link.href) ? (
                            <button
                                key={link.name}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-lg font-extrabold text-poble-charcoal tracking-tight text-left cursor-pointer"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-extrabold text-poble-charcoal tracking-tight text-left"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <Link
                        href="/#contact"
                        onClick={(e) => {
                            handleScroll(e, '/#contact');
                            setMobileMenuOpen(false);
                        }}
                        className="bg-teal-600 text-white pl-8 pr-3 py-3 rounded-full text-lg font-extrabold hover:bg-poble-charcoal hover:text-white transition-all flex items-center justify-between group tracking-tight"
                    >
                        Talk to an Expert
                        <ArrowRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            )}
        </nav>
    );
};

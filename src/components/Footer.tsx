"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col md:flex-row lg:flex-col justify-between md:justify-start items-start md:items-center lg:items-start md:gap-12 lg:gap-0">
                        <Logo className="h-16 mb-10 md:mb-0 lg:mb-10 lg:ml-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                        <div className="flex gap-4">
                            <a href="#" title="Instagram" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-poble-gold hover:border-poble-gold transition-all"><Instagram className="w-5 h-5" /></a>
                            <a href="#" title="Twitter" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-poble-gold hover:border-poble-gold transition-all"><Twitter className="w-5 h-5" /></a>
                            <a href="#" title="Facebook" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-poble-gold hover:border-poble-gold transition-all"><Facebook className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-[13px] uppercase tracking-[0.3em] text-slate-900 mb-10">Platform</h4>
                        <ul className="space-y-5 text-slate-700 text-[13px] font-extrabold uppercase tracking-widest">
                            <li><Link href="/#features" className="hover:text-poble-gold transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-poble-gold transition-colors">Pricing</Link></li>
                            <li><Link href="/hardware" className="hover:text-poble-gold transition-colors">Hardware Store</Link></li>
                            <li><Link href="/#integrations" className="hover:text-poble-gold transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-[13px] uppercase tracking-[0.3em] text-slate-900 mb-10">Support</h4>
                        <ul className="space-y-5 text-slate-700 text-[13px] font-extrabold uppercase tracking-widest">
                            <li><Link href="/about" className="hover:text-poble-gold transition-colors">About Us</Link></li>

                            <li><Link href="/manual" className="hover:text-poble-gold transition-colors">User Manual</Link></li>

                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-[13px] uppercase tracking-[0.3em] text-slate-900 mb-10">Contact</h4>
                        <ul className="space-y-5 text-slate-700 text-[13px] font-extrabold uppercase tracking-widest">
                            <li className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-poble-gold flex-shrink-0" />
                                <a href="tel:1300966963" className="hover:text-poble-gold transition-colors">1300 966 963</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-poble-gold flex-shrink-0" />
                                <a href="mailto:sales@poble.com.au" className="hover:text-poble-gold transition-colors">Sales Enquiry</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-3.5 h-3.5 text-poble-gold flex-shrink-0 mt-1" />
                                <a
                                    href="https://www.google.com/maps/dir//14%2F20-30+Stubbs+St,+Silverwater+NSW+2128"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-700 leading-relaxed hover:text-poble-gold transition-colors text-left"
                                >
                                    14/20-30 Stubbs St,<br />Silverwater NSW 2128
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-poble-gold flex-shrink-0" />
                                <span className="text-slate-700">Mon-Fri 9AM-5PM AEST</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                        © 2026 ECNESOFT PTY LTD. Australia.
                    </div>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                        <Link href="/privacy" className="hover:text-poble-charcoal transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-poble-charcoal transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-poble-charcoal transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

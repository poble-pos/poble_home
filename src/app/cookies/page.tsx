/**
 * @file CookiesPage.tsx
 * @description Detailed Cookie Policy explaining types, usage, and management of cookies.
 */

"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <article className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-16 border border-slate-100 shadow-sm">
                    <header className="mb-12 pb-8 border-b border-slate-100">
                        <h1 className="text-3xl md:text-5xl font-black text-poble-charcoal mb-4 font-heading tracking-tight">Cookie Policy</h1>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                            Last Updated: February 1, 2026
                        </p>
                    </header>

                    <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-poble-charcoal prose-p:text-slate-600 prose-p:leading-loose prose-li:text-slate-600 prose-li:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-800 transition-colors space-y-6">
                        <p className="lead text-xl text-slate-700 font-medium leading-relaxed">
                            This Cookie Policy explains how <strong>ECNESOFT PTY LTD</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you use the <strong>poble</strong> website and SaaS platform.
                        </p>

                        <hr className="border-slate-100 my-12" />

                        <h3>1. What Are Cookies?</h3>
                        <p>
                            Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                        </p>
                        <p>
                            Cookies set by the website owner (us) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;.
                        </p>

                        <h3>2. How We Use Cookies</h3>
                        <p>
                            We use cookies for several reasons. Some cookies are required for technical reasons in order for our Platform to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Platform.
                        </p>

                        <div className="not-prose grid gap-6 my-10">
                            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-lg text-poble-charcoal mb-3">🔒 Strictly Necessary Cookies</h4>
                                <p className="text-slate-600 leading-relaxed mb-0">
                                    These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site (e.g., logging into the POS dashboard). Without these cookies, the services you have asked for cannot be provided.
                                </p>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-lg text-poble-charcoal mb-3">📈 Performance & Analytics Cookies</h4>
                                <p className="text-slate-600 leading-relaxed mb-0">
                                    These cookies collect information about how you use our website, such as which pages you go to most often. This data helps us optimize our website and make it easier for you to navigate. We use third-party tools like Google Analytics for this purpose.
                                </p>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-lg text-poble-charcoal mb-3">⚙️ Functional Cookies</h4>
                                <p className="text-slate-600 leading-relaxed mb-0">
                                    These cookies allow our website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features.
                                </p>
                            </div>
                        </div>

                        <h3>3. Essential Cookies We Use</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Auth Tokens:</strong> Used to maintain your secure session after logging in.</li>
                            <li><strong>Session ID:</strong> Identifies your unique browsing session purely for technical operations.</li>
                            <li><strong>CSRF Token:</strong> Protects against Cross-Site Request Forgery attacks.</li>
                        </ul>

                        <h3>4. Managing Cookies</h3>
                        <p>
                            Most web browsers allow you to control cookies through their settings preferences. You can choose to accept or reject cookies.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong>Browser Controls:</strong> You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website (especially the Dashboard) may be restricted.
                            </li>
                            <li>
                                <strong>Opt-out of Analytics:</strong> To opt out of being tracked by Google Analytics across all websites, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
                            </li>
                        </ul>

                        <h3>5. Updates to This Policy</h3>
                        <p>
                            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this page regularly to stay informed about our use of cookies and related technologies.
                        </p>

                        <h3>6. Contact Us</h3>
                        <p>
                            If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:info@poble.com.au">info@poble.com.au</a>.
                        </p>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}

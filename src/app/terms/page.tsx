/**
 * @file TermsPage.tsx
 * @description Comprehensive Terms of Service for the poble SaaS platform.
 * Updated to cover flexible trial periods and usage-based billing.
 */

"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6">
                <article className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-16 border border-slate-100 shadow-sm">
                    <header className="mb-12 pb-8 border-b border-slate-100">
                        <h1 className="text-3xl md:text-5xl font-black text-poble-charcoal mb-4 font-heading tracking-tight">Terms of Service</h1>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                            Last Updated: February 1, 2026
                        </p>
                    </header>

                    <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-poble-charcoal prose-p:text-slate-600 prose-p:leading-loose prose-li:text-slate-600 prose-li:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-800 transition-colors space-y-6">
                        <p className="lead text-xl text-slate-700 font-medium leading-relaxed">
                            Welcome to <strong>poble</strong>. These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "Client", or "you") and <strong>ECNESOFT PTY LTD</strong> ("Provider", "we", "us", or "our") governing your access to and use of the poble Point of Sale (POS) software and related services.
                        </p>

                        <hr className="border-slate-100 my-12" />

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By registering for, accessing, or using the poble platform ("Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                        </p>

                        <h3>2. Grant of License</h3>
                        <p>
                            Subject to your compliance with these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Service solely for your internal business operations during the Subscription Term.
                        </p>
                        <p>
                            You must not:
                        </p>
                        <ul className="space-y-2">
                            <li>License, sell, rent, lease, transfer, or distribute the Service to any third party.</li>
                            <li>Reverse engineer, decompile, or disassemble the software.</li>
                            <li>Access the Service to build a competitive product or service.</li>
                        </ul>

                        <h3>3. Free Trial and Promotional Periods</h3>
                        <p>
                            We may offer a free trial or promotional access period ("Trial Period") for the Service.
                        </p>
                        <ul className="space-y-2">
                            <li><strong>Duration:</strong> The specific duration of your Trial Period will be specified at the time of sign-up or in your specific Order Form (e.g., 30 days, 90 days).</li>
                            <li><strong>Automatic Conversion:</strong> Unless you cancel your subscription before the end of the Trial Period, your account will automatically convert to a paid subscription, and you will be charged the applicable subscription fees.</li>
                            <li><strong>Data Retention:</strong> If you do not upgrade to a paid plan after the trial, your data may be deleted or archived in accordance with our data retention policies.</li>
                        </ul>

                        <h3>4. Fees, Billing, and Usage Charges</h3>
                        <ul className="space-y-2">
                            <li><strong>Subscription Fees:</strong> You agree to pay the fees specified in your plan. All fees are quoted in Australian Dollars (AUD) and are inclusive of GST unless stated otherwise.</li>
                            <li><strong>Add-ons & Usage Fees:</strong> Certain features, such as SMS notifications, Kitchen Display System (KDS) connections, or other add-ons, may incur additional charges. Usage-based fees (e.g., per-SMS charges after a specific threshold) will be billed monthly in arrears based on actual usage.</li>
                            <li><strong>Payment Method:</strong> You must maintain a valid payment method (credit card or direct debit) on file.</li>
                            <li><strong>No Refunds:</strong> Payments are non-refundable unless otherwise required by Australian law.</li>
                        </ul>

                        <h3>5. Cancellation and Termination</h3>
                        <p>
                            You may cancel your subscription at any time via your account dashboard or by contacting support. Cancellation is effective at the end of the current billing cycle. You will not be charged for the next billing cycle, but no refunds are provided for partial months or unused services.
                        </p>

                        <h3>6. Intellectual Property Rights</h3>
                        <p>
                            <strong>Our IP:</strong> ECNESOFT PTY LTD retains all rights, title, and interest in and to the Service, including all related intellectual property rights.
                        </p>
                        <p>
                            <strong>Your Data:</strong> You retain all rights to the data you input into the Service ("Customer Data"). You grant us a license to host, copy, transmit, and display your data strictly as necessary to provide the Service.
                        </p>

                        <h3>7. Limitation of Liability</h3>
                        <p>
                            To the maximum extent permitted by the <em>Australian Consumer Law</em> (ACL):
                        </p>
                        <ul className="space-y-2">
                            <li><strong>Re-supply:</strong> Our liability for any breach of a consumer guarantee is limited to the re-supply of the services or payment of the cost of having the services supplied again.</li>
                            <li><strong>Access & Reliability:</strong> We do not guarantee that the Service will be uninterrupted or error-free. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.</li>
                            <li><strong>Cap on Liability:</strong> Our aggregate liability arising out of or related to these Terms shall not exceed the total amount paid by you hereunder in the twelve (12) months preceding the incident.</li>
                        </ul>

                        <h3>8. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the State of New South Wales, Australia. Each party irrevocably submits to the exclusive jurisdiction of the courts of New South Wales.
                        </p>

                        <h3>9. Contact Information</h3>
                        <p>
                            If you have questions regarding these Terms, please contact us at:
                        </p>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 not-prose mt-8">
                            <p className="font-bold text-poble-charcoal mb-2 text-lg">ECNESOFT PTY LTD</p>
                            <div className="space-y-2 text-slate-700">
                                <p>
                                    <strong>Address:</strong><br />
                                    14/20-30 Stubbs St, Silverwater NSW 2128
                                </p>
                                <p>
                                    <strong>Email:</strong><br />
                                    <a href="mailto:info@poble.com.au" className="text-blue-600 hover:underline font-medium">info@poble.com.au</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}

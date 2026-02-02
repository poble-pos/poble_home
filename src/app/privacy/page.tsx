/**
 * @file PrivacyPage.tsx
 * @description Detailed Privacy Policy compliant with Australian Privacy Principles (APPs).
 */

"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-16 border border-slate-100 shadow-sm">
          <header className="mb-12 pb-8 border-b border-slate-100">
            <h1 className="text-3xl md:text-5xl font-black text-poble-charcoal mb-4 font-heading tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Last Updated: February 1, 2026
            </p>
          </header>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-poble-charcoal prose-p:text-slate-600 prose-p:leading-loose prose-li:text-slate-600 prose-li:leading-relaxed prose-a:text-blue-600 hover:prose-a:text-blue-800 transition-colors space-y-6">
            <p className="lead text-xl text-slate-700 font-medium leading-relaxed">
              <strong>ECNESOFT PTY LTD</strong> (trading as <strong>poble</strong>) (&quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This
              policy outlines how we collect, use, and safeguard your personal information in
              accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy
              Principles (APPs).
            </p>

            <hr className="border-slate-100 my-12" />

            <h3>1. Information We Collect</h3>
            <p>
              We collect personal information that is reasonably necessary for us to provide our
              SaaS (Software as a Service) platform and related support services. The types of
              information we may collect include:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Identity Data:</strong> Full name, username, and business entity details
                (e.g., ABN/ACN).
              </li>
              <li>
                <strong>Contact Data:</strong> Billing address, email address, and telephone
                numbers.
              </li>
              <li>
                <strong>Financial Data:</strong> Bank account and payment card details (processed
                securely via PCI-DSS compliant third-party gateways; we do not store full credit
                card numbers).
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> Internet protocol (IP) address, login data,
                browser type and version, time zone setting, operating system, and how you interact
                with our platform.
              </li>
            </ul>

            <h3>2. How We Collect Information</h3>
            <p>We collect information through various means, including:</p>
            <ul className="space-y-2">
              <li>
                <strong>Direct Interactions:</strong> When you register for an account, subscribe to
                our service, request support, or communicate with us.
              </li>
              <li>
                <strong>Automated Technologies:</strong> As you navigate our platform, we
                automatically collect technical data using cookies and server logs.
              </li>
              <li>
                <strong>Third Parties:</strong> We may receive information from payment providers,
                business partners, or public registers.
              </li>
            </ul>

            <h3>3. Purpose of Collection and Use</h3>
            <p>
              We strictly use your personal information for lawful business purposes, including:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Service Provision:</strong> To register you as a new customer and deliver
                the poble POS software functionalities.
              </li>
              <li>
                <strong>Billing & Administration:</strong> To manage payments, fees, and charges,
                and to collect and recover money owed to us.
              </li>
              <li>
                <strong>Support & Improvement:</strong> To troubleshoot issues, analyze usage
                trends, and improve our platform&quot;s performance and security.
              </li>
              <li>
                <strong>Communication:</strong> To notify you about changes to our terms or privacy
                policy, and to send critical service alerts.
              </li>
              <li>
                <strong>Marketing (Optional):</strong> To provide you with information about other
                goods and services we offer that are similar to those you&apos;ve already purchased
                or enquired about. You may opt out of marketing communications at any time.
              </li>
            </ul>

            <h3>4. Disclosure of Personal Information</h3>
            <p>
              We may disclose your personal information to third parties strictly for the purposes
              outlined above. These parties include:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Service Providers:</strong> Cloud hosting providers (e.g., AWS, Azure),
                payment processors (e.g., Stripe, Tyro), and CRM platforms acting as data
                processors.
              </li>
              <li>
                <strong>Professional Advisers:</strong> Lawyers, bankers, auditors, and insurers who
                provide consultancy, banking, legal, insurance, and accounting services.
              </li>
              <li>
                <strong>Regulators:</strong> The ATO or other government bodies if required by law.
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their
              independent marketing purposes.
            </p>

            <h3>5. Cross-Border Data Transfer</h3>
            <p>
              While our primary operations are in Australia, we may use service providers located
              overseas. We take all reasonable steps to ensure that any overseas recipient handles
              your personal information in a manner consistent with the APPs.
            </p>

            <h3>6. Data Security</h3>
            <p>
              We have implemented appropriate security measures to prevent your personal information
              from being accidentally lost, used, or accessed in an unauthorized way. We use
              industry-standard encryption (TLS/SSL) for data in transit and secure storage
              protocols.
            </p>

            <h3>7. Access and Correction</h3>
            <p>
              Under Australian privacy laws, you have the right to request access to the personal
              information we hold about you and to ask for corrections if it is inaccurate,
              incomplete, or out of date.
            </p>
            <p>
              To exercise these rights, please contact our Privacy Officer at{" "}
              <a href="mailto:privacy@poble.com.au">privacy@poble.com.au</a>. We may need to verify
              your identity before processing your request.
            </p>

            <h3>8. Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy or wish to make a complaint about how
              we have handled your personal information, please contact us:
            </p>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 not-prose mt-8">
              <p className="font-bold text-poble-charcoal mb-2 text-lg">ECNESOFT PTY LTD</p>
              <p className="text-slate-500 mb-6 text-sm uppercase tracking-wider font-bold">
                Attn: Privacy Officer
              </p>
              <div className="space-y-2 text-slate-700">
                <p>
                  <strong>Address:</strong>
                  <br />
                  14/20-30 Stubbs St, Silverwater NSW 2128
                </p>
                <p>
                  <strong>Email:</strong>
                  <br />
                  <a
                    href="mailto:info@poble.com.au"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    info@poble.com.au
                  </a>
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

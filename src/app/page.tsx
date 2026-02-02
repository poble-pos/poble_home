/**
 * @file LandingPage.tsx
 * @description The primary entry point for the Poble POS website.
 * Orchestrates core feature showcases, pricing, and social proof via a dynamic section renderer.
 */

"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { InteractiveFeatures } from "@/components/InteractiveFeatures";
import { Testimonials } from "@/components/Testimonials";
import { Showcase } from "@/components/Showcase";
import { Integrations } from "@/components/Integrations";

import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { useAdmin } from "@/context/AdminContext";

/**
 * LandingPage
 * -----------
 * High-performance, SEO-optimized landing page featuring dynamic section orchestration.
 */
export default function LandingPage() {
    const { siteContent } = useAdmin();

    // Strategy: Filter only visible sections and sort by their defined order
    const visibleSections = siteContent.sections
        .filter(s => s.visible)
        .sort((a, b) => a.order - b.order);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const title = entry.target.getAttribute('data-title');
                    if (title) document.title = title;
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% of section is visible

        document.querySelectorAll('div[data-title]').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [visibleSections]);

    /**
     * Component Resolver: Maps dynamic section types to their React implementations.
     */
    const renderSection = (section: any) => {
        let Component = null;
        let title = "Poble";

        switch (section.type) {
            case 'Hero':
                Component = <Hero />;
                title = "Poble";
                break;
            case 'PainPoints':
                Component = <PainPoints />;
                title = "Why Poble? | Poble";
                break;
            case 'InteractiveFeatures':
                Component = <InteractiveFeatures />;
                title = "Features | Poble";
                break;
            case 'Testimonials':
                Component = <Testimonials />;
                title = "Reviews | Poble";
                break;
            case 'Showcase':
                Component = <Showcase />;
                title = "Showcase | Poble";
                break;
            case 'Integrations':
                Component = <Integrations />;
                title = "Integrations | Poble";
                break;
            case 'FAQ':
                Component = <FAQ />;
                title = "FAQ | Poble";
                break;
            case 'ContactSection':
                Component = <ContactSection />;
                title = "Contact | Poble";
                break;
            case 'CTASection':
                Component = <CTASection />;
                title = "Get Started | Poble";
                break;
            default:
                return null;
        }

        return (
            <div key={section.id} data-title={title} className="w-full">
                {Component}
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-poble-cream text-poble-charcoal font-sans tracking-tight">
            {/* Global Navigation */}
            <Navbar />

            <main className="animate-in fade-in duration-700">
                {visibleSections.map(section => renderSection(section))}
            </main>

            {/* Global Footer */}
            <Footer />
        </div>
    );
}

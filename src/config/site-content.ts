/**
 * @file site-content.ts
 * @description Centralized configuration for platform narratives and section content.
 * Enables quick adjustments to marketing copy and functional section properties.
 */

export interface PricingFeature {
    text: string;
    included: boolean;
}

export interface PricingItem {
    id: string;
    title: string;
    subTitle?: string;
    price: string;
    currency: string;
    period: string;
    description: string;
    features: PricingFeature[];
    isRecommended: boolean;
    badge?: string;
    visible: boolean;
    theme?: 'light' | 'dark' | 'gold' | 'glass';
}

export interface SiteSection {
    id: string;
    type: string;
    name: string;
    visible: boolean;
    order: number;
    content: {
        title?: string;
        subtitle?: string;
        description?: string;
        layout?: 'grid' | 'focus' | 'list' | 'comparison';
        ctaText?: string;
        ctaLink?: string;
        images?: string[];
        items?: any[];
        faq?: Array<{ q: string; a: string; visible: boolean }>;
        [key: string]: any;
    };
}

export interface SiteConfig {
    sections: SiteSection[];
}

export const INITIAL_SITE_CONTENT: SiteConfig = {
    sections: [
        {
            id: 'hero',
            type: 'Hero',
            name: 'Hero Section',
            visible: true,
            order: 0,
            content: {
                title: 'Minus the Clutter,<br />Plus the Speed',
                description: 'The lightweight POS built for Aussie venues. <br />Fast to learn, easy to run — even during the rush.<br />Turn your iPad into a pro POS instantly.*',
                ctaText: 'Start Free Trial',
                ctaLink: '#contact'
            }
        },
        {
            id: 'pain-points',
            type: 'PainPoints',
            name: 'Why Poble?',
            visible: true,
            order: 1,
            content: {
                title: 'Make Every Second Count!',
                subtitle: 'Built for the reality of your day. With poble, we remove the friction from your counter, so your team stays focused on every customer and every cup.',
                feature1_title: 'The Balancing Act',
                feature1_desc: 'End your day in seconds. Automated reconciliation ensures your dockets and payments always match, without the manual grind.',
                feature2_title: 'Ready for the Rush',
                feature2_desc: 'Never miss a docket. Our high-performance brain stays responsive even when the queue is out the door.',
                feature3_title: 'Zero Training',
                feature3_desc: 'Staff ready on Day 1. An interface so intuitive that new team members hit the ground running with zero learning curve.'
            }
        },
        {
            id: 'interactive',
            type: 'InteractiveFeatures',
            name: 'Features',
            visible: true,
            order: 2,
            content: {
                title: "Smart Tools",
                subtitle: "for your Venue.",
                description: "A seamless bridge between your counter, your kitchen, and your back office. Through poble, you gain the system-wide visibility you need to run a flawless operation.",
                feature1_title: "Effortless|Cloud Control",
                feature1_collapsed: "Control menus and staff access with ease. Everything stays in sync across your POS.",
                feature1_desc: "Manage menus, prices, and staff permissions directly on the POS. No separate back office, no delays — changes sync smoothly across your store.",
                feature2_title: "High-Speed|Order Flow",
                feature2_collapsed: "Built for peak-hour service. Orders move fast without slowing your team.",
                feature2_desc: "Designed for busy service counters. Takeaway, dine-in, and phone orders flow smoothly so staff stay focused on service, not the screen.",
                feature3_title: "Aussie Payments|Tyro Ready",
                feature3_collapsed: "Native EFTPOS integration for Australian venues. No double handling.",
                feature3_desc: "Integrated with Tyro and Linkly for a direct terminal workflow. The amount is sent straight from the iPad to EFTPOS, reducing errors and speeding up checkout.",
                feature4_title: "Instant Menu|Live Sync",
                feature4_collapsed: "Edit menus instantly. Updates apply right away.",
                feature4_desc: "Update prices or mark items sold out directly on the POS. All terminals stay aligned in real time, without reloading or manual refresh.",
                feature5_title: "Smart Operations|Table & KDS",
                feature5_collapsed: "Clear table layouts and kitchen display support. Keep service flowing.",
                feature5_desc: "Visual table layouts help manage dine-in service at a glance. Orders are sent straight to the kitchen display, reducing missed tickets and confusion.",
                feature6_title: "Customer Growth|CRM & Online",
                feature6_collapsed: "Built-in loyalty and online ordering to support repeat customers.",
                feature6_desc: "Reward regulars with points and vouchers. Online orders flow directly into the POS, without third-party complexity.",
                feature1_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                feature2_image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
                feature3_image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
                feature4_image: "https://images.unsplash.com/photo-1556741533-974f8e62a92d?auto=format&fit=crop&q=80&w=800",
                feature5_image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800",
                feature6_image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80&w=800"
            }
        },
        {
            id: 'pricing',
            type: 'Pricing',
            name: 'Pricing Page',
            visible: true,
            order: 3,
            content: {
                hero_label: "Transparent Economics",
                hero_title: "Start Basic",
                hero_subtitle: "Scale Tomorrow",
                description: "Begin your 30-day trial with our core POS engine. As your venue grows, our rapidly expanding library of smart add-ons will be ready for you to toggle on instantly.",

                plan_badge: "30-Day Free Trial",
                plan_title: "Basic",
                plan_price: "60",
                plan_currency: "$",
                plan_period: "mo",
                plan_desc: "Perfect for individuals and small businesses",
                plan_ctaText: "Start free trial",
                plan_ctaLink: "https://backoffice.poble.com.au",
                backgroundImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop',

                carousel_items: [
                    {
                        label: "Takeaway & Quick Service",
                        title: "Optimised for Speed",
                        benefit: "Keep the queue moving.",
                        description: "Dedicated flows for takeaway orders. Clear alerts help your team serve pickup customers fast without blocking the counter.",
                        images: [
                            "https://images.unsplash.com/photo-1507133750040-4a8f9489d35f?auto=format&fit=crop&q=80&w=600&h=400"
                        ]
                    },
                    {
                        label: "Complete Order Management",
                        title: "Handle the Rush",
                        benefit: "No more missed orders.",
                        description: "Reliable, high-speed ordering that keeps up with your team during peak service. Designed to reduce taps and human errors.",
                        images: [
                            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600&h=400"
                        ]
                    },
                    {
                        label: "Basic Reports & Analytics",
                        title: "Data-Driven Decisions",
                        benefit: "Know your numbers.",
                        description: "Simple, real-time reporting on your sales and staff performance. Accessible from anywhere.",
                        images: [
                            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400"
                        ]
                    },
                    {
                        label: "Menu & Category Management",
                        title: "Flexible Menu Control",
                        benefit: "Update in seconds.",
                        description: "Easily manage your menu across all devices. Sync categories, items, and prices instantly.",
                        images: [
                            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600&h=400"
                        ]
                    },
                    {
                        label: "Dual Screen / Customer Display",
                        title: "Dual Screen Experience",
                        benefit: "Build trust with customers.",
                        description: "Give your customers a clear view of their order as it hits the screen, reducing errors and increasing transparency.",
                        images: [
                            "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=600&h=400"
                        ]
                    }
                ],

                faq_title: "Pricing Questions",
                faq_desc: "Everything you need to know about trials, plans, and billing.",
                faq: [
                    { q: "How does the 30-day free trial work?", a: "You get full access to the Basic plan for 30 days. We verify your venue profile, and you won't be charged until the trial ends. You can cancel anytime.", visible: true },
                    { q: "What payment methods do you accept?", a: "We accept all major credit cards including Visa, Mastercard, and Amex for monthly software subscriptions.", visible: true },
                    { q: "Am I locked into a contract?", a: "No. Our software plan is month-to-month with no lock-in contracts. You can upgrade your setup or cancel your service at any time.", visible: true },
                    { q: "Can I use my own iPad?", a: "Yes! Poble runs on any standard iPad (7th Gen or later). If you need hardware, you can purchase our professional hardware bundles.", visible: true }
                ]
            }
        },
        {
            id: 'testimonials',
            type: 'Testimonials',
            name: 'Reviews',
            visible: true,
            order: 4,
            content: {
                title: "Loved by Aussie Venues",
                description: "Join hundreds of cafes, bars and restaurants that have switched to poble for a faster, simpler service.",
                quote1_text: "In the Sydney coffee scene, speed is everything. Poble allows us to power through the morning rush without missing a beat.",
                quote1_author: "Chris Kim",
                quote1_venue: "The Little Parry (Sydney)",
                quote2_text: "Running a busy Korean restaurant in Perth means we need absolute reliability. Poble simplified our table service immediately.",
                quote2_author: "Min-ji Park",
                quote2_venue: "Woojeong (Perth)",
                quote3_text: "We use two POS terminals to handle entry ticketing and café orders. The sync is instant, and the system easily manages volume.",
                quote3_author: "Sarah Lee",
                quote3_venue: "Director, Kidsday (Sydney)",
                stat1_val: "99.9%",
                stat1_label: "Uptime\nGuarantee",
                stat2_val: "24/7",
                stat2_label: "Local\nSupport"
            }
        },
        {
            id: 'showcase',
            type: 'Showcase',
            name: 'Showcase',
            visible: true,
            order: 5,
            content: {
                title: "Proven Reliability on Pro Hardware",
                description: "poble runs on the world's most stable tablet platform. Pair it with industry-standard printers for a bulletproof counter setup.",
                images: [
                    "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800&h=1000",
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800&h=1000",
                    "https://images.unsplash.com/photo-1556741533-974f8e62a92d?auto=format&fit=crop&q=80&w=800&h=1000",
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800&h=1000",
                    "https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?auto=format&fit=crop&q=80&w=800&h=1000"
                ],
                feature1_title: "Universal iPad Support",
                feature1_desc: "Compatible with iPad (7th Gen) and later. No need for proprietary, expensive touchscreens.",
                feature2_title: "Industry Standard",
                feature2_desc: "We support proven thermal printers like POSBANK & Epson for bulletproof reliability."
            }
        },
        {
            id: 'integrations',
            type: 'Integrations',
            name: 'Integrations',
            visible: true,
            order: 6,
            content: {
                title: "A Growing Ecosystem",
                description: "We're expanding our network to include the tools you rely on most. Seamless syncing with Australia's most trusted platforms."
            }
        },
        {
            id: 'faq',
            type: 'FAQ',
            name: 'FAQ',
            visible: true,
            order: 7,
            content: {
                title: "Seamless Setup & Ongoing Support.",
                description: "Getting started is simple with our guided installation process. And once you're live, our expert team is available 7 days a week.",
                faq: [
                    { q: "How long does setup take?", a: "Most venues are up and running within 24 hours. If you have an existing menu, we can import it for you instantly.", visible: true },
                    { q: "Do I need special hardware?", a: "Poble is designed to run on any modern iPad (7th Gen or later). We also support standard thermal printers and cash drawers.", visible: true },
                    { q: "Is there a long-term contract?", a: "No. We believe in our product, so we offer simple month-to-month plans. You can cancel at any time without penalty.", visible: true }
                ]
            }
        },
        {
            id: 'contact',
            type: 'ContactSection',
            name: 'Contact',
            visible: true,
            order: 8,
            content: {
                title: "Talk to a POS Specialist",
                description: "Find the perfect setup and pricing for your venue. Our experts will guide you through the transition.",
                email: "sales@poble.com.au",
                phone: "1300 966 963"
            }
        },
        {
            id: 'cta',
            type: 'CTASection',
            name: 'CTA',
            visible: true,
            order: 9,
            content: {
                title: "Ready to Clear the Counter?",
                subtitle: "Join the growing network of Australian venues who have swapped complex, slow systems for the speed of poble.",
                buttonText: "Get Started Free"
            }
        }
    ]
};

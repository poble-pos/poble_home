export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'stand' | 'printer' | 'accessory' | 'bundle';
    image: string;
    stripePriceId?: string; // For future Stripe integration
    features?: string[];
    inStock: boolean;
}

export const products: Product[] = [
    {
        id: 'stand-gemini-dual',
        name: 'Gemini Dual Stand',
        description: 'Premium dual-screen iPad stand for customer interaction.',
        price: 229.95,
        category: 'stand',
        image: '/images/hardware/geminidual.png',
        features: ['Dual Screen Mount', '360° Swivel', 'Premium Finish'],
        inStock: true,
        stripePriceId: '',
    },
    {
        id: 'stand-elite-evo',
        name: 'Elite Evo Stand',
        description: 'Sleek, low-profile iPad stand for minimalist counters.',
        price: 229.95,
        category: 'stand',
        image: '/images/hardware/elitegemini.png',
        features: ['Fixed Angle', 'Tamper Resistant', 'Cable Management'],
        inStock: true,
        stripePriceId: '',
    },
    {
        id: 'stand-touch-evo',
        name: 'Touch Evo Stand',
        description: 'Freestanding iPad stand for flexible positioning.',
        price: 129.95,
        category: 'stand',
        image: '/images/hardware/touchevo_1.jpg',
        features: ['Freestanding Base', 'Tilt Adjustment', 'Cost Effective'],
        inStock: true,
        stripePriceId: '',
    },
    {
        id: 'printer-posbank',
        name: 'POSBANK A11 (Ethernet)',
        description: 'High-speed thermal receipt printer with Ethernet.',
        price: 295.00,
        category: 'printer',
        image: '/images/hardware/Posbank_A11_Receipt_Printer.png',
        features: ['250mm/s Speed', 'Ethernet Interface', 'Auto Cutter'],
        inStock: true,
        stripePriceId: '',
    },
    {
        id: 'printer-epson',
        name: 'Epson TM-m30III (Bluetooth)',
        description: 'Compact Bluetooth receipt printer for wireless flexibility.',
        price: 450.00,
        category: 'printer',
        image: '/images/hardware/tm-m30iii.webp',
        features: ['Bluetooth & WiFi', 'Ultra Compact', 'Reliable'],
        inStock: true,
        stripePriceId: '',
    },
    {
        id: 'cash-drawer',
        name: 'Heavy Duty Cash Drawer',
        description: 'Secure steel cash drawer with 5 note / 8 coin slots.',
        price: 95.00,
        category: 'accessory',
        image: '/images/hardware/cashdrawer.jpg',
        features: ['Key Lock', 'RJ12 Interface', 'Black Finish'],
        inStock: true,
        stripePriceId: '',
    },
    {
        id: 'paper-roll',
        name: 'Thermal Paper Box (24 Rolls)',
        description: 'Premium 80x80mm thermal paper rolls.',
        price: 50.00,
        category: 'accessory',
        image: '/images/hardware/paperroll.webp',
        features: ['BPA Free', 'High Contrast', 'Long Lasting'],
        inStock: true,
        stripePriceId: '',
    },
    {
        id: 'qr-sticker',
        name: 'QR Code Table Stickers',
        description: 'Durable, waterproof QR stickers for instant table ordering.',
        price: 3.00,
        category: 'accessory',
        image: 'https://images.unsplash.com/photo-1622675363311-ac97f3a9a344?auto=format&fit=crop&q=80&w=1000',
        features: ['Waterproof', 'High Contrast', 'Easy Peel'],
        inStock: true,
        stripePriceId: '',
    },
];

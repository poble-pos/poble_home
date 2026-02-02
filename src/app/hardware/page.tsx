/**
 * @file HardwarePage.tsx
 * @description Curated marketplace for hospitality professionals.
 * All hardware is verified for compatibility with the Poble ecosystem.
 */

"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Plus, LayoutGrid, List } from 'lucide-react';

/**
 * Hardware Category Definitions
 */
const CATEGORIES = [
    { id: 'stand', label: 'iPad Stands', description: 'Premium mounts for your point of sale' },
    { id: 'printer', label: 'Printers', description: 'Reliable thermal printing for dockets & receipts' },
    { id: 'accessory', label: 'Accessories', description: 'Essential add-ons for a complete setup' },
];

export default function HardwarePage() {
    const { addToCart } = useCart();
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section: Built to Last */}
            <section className="pt-28 pb-10 md:pt-36 md:pb-16 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-poble-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Recommended Hardware
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-poble-charcoal tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 leading-[0.95] font-heading">
                        Built to <span className="text-slate-400">Last</span>
                    </h1>
                    <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        Curated hardware for hospitality professionals. Tested for durability and seamless compatibility with <span className="font-logo">poble</span>.
                    </p>
                </div>
            </section>

            {/* Category Navigation (Sticky Logic) */}
            <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6 mb-16">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-2">
                        {CATEGORIES.map(category => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }}
                                className="px-5 py-2 rounded-full bg-slate-50 text-slate-600 font-black text-sm hover:bg-poble-charcoal hover:text-white transition-all whitespace-nowrap border border-slate-100 cursor-pointer"
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    <div className="w-px h-8 bg-slate-200 hidden md:block"></div>

                    <div className="hidden md:flex items-center gap-2 bg-slate-50 p-1 rounded-lg border border-slate-100">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-white shadow-sm text-poble-charcoal' : 'text-slate-400 hover:text-slate-600'}`}
                            title="Grid Layout"
                        >
                            <LayoutGrid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all cursor-pointer ${viewMode === 'list' ? 'bg-white shadow-sm text-poble-charcoal' : 'text-slate-400 hover:text-slate-600'}`}
                            title="List Layout"
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Rendering Engine */}
            <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
                {CATEGORIES.map((category) => {
                    const categoryProducts = products.filter(p => p.category === category.id);
                    if (categoryProducts.length === 0) return null;

                    return (
                        <section key={category.id} id={category.id} className="scroll-mt-48">
                            <div className="mb-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-slate-100 pb-4">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-poble-charcoal tracking-tight font-heading">
                                    {category.label}
                                </h2>
                                <p className="text-lg text-slate-500 font-bold opacity-70">
                                    {category.description}
                                </p>
                            </div>

                            <div className={viewMode === 'grid' ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-4"}>
                                {categoryProducts.map(product => (
                                    viewMode === 'grid' ? (
                                        <div key={product.id} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(255,184,0,0.15)] hover:border-poble-gold hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                            <div className="aspect-[4/3] bg-white relative overflow-hidden p-6 flex items-center justify-center">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                                />
                                                {!product.inStock && (
                                                    <div className="absolute top-4 right-4 bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10">
                                                        Out of Stock
                                                    </div>
                                                )}
                                            </div>

                                            <div className="p-8 flex flex-col flex-1">
                                                <div className="mb-4">
                                                    <h3 className="text-xl font-black text-poble-charcoal mb-2 leading-tight font-heading">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 font-medium leading-relaxed opacity-80">
                                                        {product.description}
                                                    </p>
                                                </div>

                                                {product.features && (
                                                    <ul className="mb-8 space-y-2">
                                                        {product.features.map((feature, idx) => (
                                                            <li key={idx} className="text-xs font-bold text-slate-400 flex items-center gap-2">
                                                                <div className="w-1 h-1 bg-poble-gold rounded-full"></div>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                                                    <span className="text-2xl font-black text-poble-charcoal tracking-tight">
                                                        ${product.price.toFixed(2)}
                                                    </span>
                                                    <button
                                                        onClick={() => addToCart(product)}
                                                        disabled={!product.inStock}
                                                        className={`h-12 px-6 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${product.inStock
                                                            ? 'bg-teal-600 text-white hover:bg-poble-charcoal hover:text-white shadow-lg active:scale-95 cursor-pointer'
                                                            : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        Add <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={product.id} className="group bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-6 hover:shadow-[0_10px_30px_-10px_rgba(255,184,0,0.15)] hover:border-poble-gold transition-all duration-300">
                                            <div className="w-24 h-24 bg-slate-50 rounded-xl overflow-hidden shrink-0 relative">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {!product.inStock && (
                                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                        <span className="text-[10px] font-black text-white uppercase">Sold Out</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-lg font-black text-poble-charcoal mb-1 truncate font-heading">{product.name}</h3>
                                                <p className="text-sm text-slate-500 font-medium line-clamp-1">{product.description}</p>
                                                {product.features && (
                                                    <div className="flex items-center gap-3 mt-2">
                                                        {product.features.slice(0, 2).map((feature, idx) => (
                                                            <span key={idx} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                                                                {feature}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-col items-end gap-3 shrink-0">
                                                <span className="text-xl font-black text-poble-charcoal tracking-tight">
                                                    ${product.price.toFixed(2)}
                                                </span>
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    disabled={!product.inStock}
                                                    className={`h-10 px-5 rounded-full font-bold text-xs flex items-center gap-2 transition-all ${product.inStock
                                                        ? 'bg-teal-600 text-white hover:bg-poble-charcoal hover:text-white active:scale-95 cursor-pointer'
                                                        : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                                                        }`}
                                                >
                                                    Add <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            <Footer />
        </main>
    );
}

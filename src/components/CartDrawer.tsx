"use client";

import React from 'react';
import Link from 'next/link';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
    const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex justify-end">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-poble-charcoal/20 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
                onClick={() => setIsCartOpen(false)}
            />

            {/* Drawer */}
            <div className="relative w-[85vw] md:w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 border-l border-slate-100">
                <div className="p-8 flex items-center justify-between border-b border-slate-50">
                    <div className="flex items-center gap-3">
                        <ShoppingBag className="w-6 h-6 text-poble-gold" />
                        <h2 className="text-2xl font-black text-poble-charcoal tracking-tighter">Your Cart</h2>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="p-3 hover:bg-slate-50 rounded-full transition-all group"
                        title="Close Cart"
                    >
                        <X className="w-6 h-6 text-slate-400 group-hover:text-poble-charcoal" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                            <div>
                                <h3 className="text-xl font-black text-poble-charcoal mb-2">Your cart is empty.</h3>
                                <p className="text-sm text-slate-400 font-bold px-8 leading-relaxed">
                                    Time to upgrade your counter. <br />Browse our collection to find the perfect fit.
                                </p>
                            </div>
                            <Link
                                href="/hardware"
                                onClick={() => setIsCartOpen(false)}
                                className="px-8 py-3 bg-teal-600 text-white rounded-full text-sm font-black mt-6 hover:bg-poble-charcoal hover:text-white transition-colors tracking-wide shadow-md inline-block"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.id} className="flex gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100 p-4">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-black text-poble-charcoal tracking-tight leading-tight">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-slate-300 hover:text-red-500 transition-colors ml-2"
                                            title="Remove Item"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-sm font-bold text-slate-500 mb-4">${item.price.toFixed(2)}</p>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-3 bg-slate-50 rounded-full p-1 border border-slate-100">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-poble-charcoal transition-colors border border-slate-100"
                                                title="Decrease Quantity"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm font-black w-4 text-center text-poble-charcoal">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-poble-charcoal transition-colors border border-slate-100"
                                                title="Increase Quantity"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-8 border-t border-slate-50 bg-slate-50/30">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Total</span>
                            <span className="text-3xl font-black text-poble-charcoal tracking-tighter">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-3 bg-teal-600 text-white rounded-full font-bold text-lg tracking-wide hover:bg-poble-charcoal hover:text-white transition-all shadow-lg active:scale-[0.98]">
                            Checkout
                        </button>
                        <p className="text-center text-[9px] font-black text-slate-400 mt-6 uppercase tracking-[0.2em]">
                            Secure checkout powered by Stripe
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

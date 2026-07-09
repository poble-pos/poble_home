"use client";

import { useState } from "react";
import { Loader2, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleCheckout = async () => {
    setCheckoutError(null);
    setIsCheckingOut(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Failed to start checkout.");
      }

      window.location.href = data.url;
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Failed to start checkout."
      );
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-[85vw] md:w-full max-w-md bg-white h-full shadow-xl flex flex-col animate-in slide-in-from-right duration-500 border-l border-black/10">
        <div className="p-8 flex items-center justify-between border-b border-black/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#B9855B]" />
            <h2 className="text-2xl font-medium text-black tracking-[-0.03em]">
              Your Cart
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-3 hover:bg-black/5 rounded-full transition-all group"
            title="Close Cart"
          >
            <X className="w-5 h-5 text-black/45 group-hover:text-black" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div>
                <h3 className="text-xl font-medium text-black mb-2 tracking-tight">
                  Your cart is empty.
                </h3>
                <p className="text-sm text-black/55 px-8 leading-relaxed">
                  Time to upgrade your counter. <br />
                  Browse our collection to find the perfect fit.
                </p>
              </div>
              <Link
                href="/hardware"
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black mt-6"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 animate-in fade-in slide-in-from-right-4 duration-300"
              >
                <div className="w-24 h-24 bg-[#F9F8F3] rounded-xl overflow-hidden shrink-0 border border-black/10 p-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-black tracking-tight leading-tight">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-black/30 hover:text-red-500 transition-colors ml-2"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-black/55 mb-4">
                    ${item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-[#F9F8F3] rounded-full p-1 border border-black/10">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black/55 hover:text-black transition-colors border border-black/10"
                        title="Decrease Quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center text-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black/55 hover:text-black transition-colors border border-black/10"
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
          <div className="p-8 border-t border-black/10 bg-[#F9F8F3]/50">
            <div className="flex justify-between items-center mb-8">
              <span className="text-black/45 font-medium uppercase tracking-[0.2em] text-[10px]">
                Total
              </span>
              <span className="text-3xl font-medium text-black tracking-[-0.03em]">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            {checkoutError && (
              <p className="text-center text-xs text-red-500 mb-4">
                {checkoutError}
              </p>
            )}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition hover:bg-black active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Redirecting…
                </>
              ) : (
                "Checkout"
              )}
            </button>
            <p className="text-center text-[9px] font-medium text-black/45 mt-6 uppercase tracking-[0.2em]">
              Secure checkout powered by Stripe
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

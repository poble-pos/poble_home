"use client";

import React, { useState } from "react";
import { ArrowLeft, CreditCard, Loader2Icon, LucideTrash, Minus, Plus } from "lucide-react";
import { useCart } from "@/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createPaymentLink } from "@/lib/restApis";
import Image from "next/image";
import EmptyCart from "@/components/empty-cart";

export default function CartContent() {
  const router = useRouter();
  const { currentItems, addItem, emptyItem, removeItem, getTotalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const checkoutHandler = async () => {
    setIsLoading(true);

    const items = currentItems || [];

    const stripeOneOffCartItem = items.map((item) => {
      return {
        stripePriceId: item.default_price.id,
        stripeProductId: item.id,
        quantity: item.quantity,
      };
    });

    const paymentLink = await createPaymentLink({
      successUrl: `${location.origin}/payment-success`,
      cancelUrl: `${location.origin}/cart`,
      items: stripeOneOffCartItem,
    });

    location.href = paymentLink;
  };

  const totalPrice = getTotalPrice() / 100;

  if (currentItems?.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => router.push("/hardware")}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors hover:cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Cart</h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-6">Review Your Order</h2>
              <div className="space-y-4">
                {currentItems?.map((item, index) => (
                  <div
                    key={item.id + index}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      {item.images.length > 0 ? (
                        <Image src={item.images[0]} alt={item.name} width={100} height={100} />
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="font-bold text-black mt-2">
                        ${(item.default_price.unit_amount / 100).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-gray-100 rounded hover:cursor-pointer"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => addItem(item)}
                        className="p-1 hover:bg-gray-100 rounded hover:cursor-pointer"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>

                    <button
                      onClick={() => emptyItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors hover:cursor-pointer"
                    >
                      <LucideTrash className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={() => router.push("/hardware")}
                className="w-full mt-10 bg-slate-800 text-white py-3 rounded-lg font-medium transition-colors hover:cursor-pointer"
              >
                Continue to Shipping
              </button>
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-20">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <div className="space-y-3 mb-6">
                {currentItems?.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="flex justify-between text-sm">
                        <span>
                          {item.name} x {item.quantity}
                        </span>
                        <span>
                          ${((item.default_price.unit_amount * item.quantity) / 100).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button
                className={"w-full hover:cursor-pointer"}
                size={"lg"}
                onClick={checkoutHandler}
                disabled={isLoading}
              >
                {isLoading && <Loader2Icon className={"animate-spin"} />}
                <CreditCard />
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

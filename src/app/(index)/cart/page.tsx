"use client";

import React from "react";
import { ArrowLeft, CreditCard, LucideTrash, Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "@/store";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const router = useRouter();
  const { currentItems, addItem, emptyItem, removeItem, getTotalPrice } = useCart();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
    }).format(amount / 100);
  };

  if (currentItems?.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started</p>
          <button
            onClick={() => router.push("/hardware")}
            className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors hover:cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice() / 100;
  const gst = totalPrice * 0.1;
  const subTotal = totalPrice * 0.9;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => router.back()}
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
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="font-bold text-black mt-2">
                        {formatPrice(item.defaultPrice.unitAmount)}
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
                onClick={() => router.back()}
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
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>${subTotal.toFixed(2)}
                </div>
                <div className="flex justify-between text-sm">
                  <span>GST (10%)</span>${gst.toFixed(2)}
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="">
                <Button className={"w-full hover:cursor-pointer"} size={"lg"}>
                  <CreditCard />
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

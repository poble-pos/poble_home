"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmptyCart() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some products to get started</p>
        <button
          onClick={() => router.push("/hardware")}
          className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium transition-colors hover:cursor-pointer text-md"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

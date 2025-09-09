"use client";

import React, { useEffect } from "react";
import { CheckCircle, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/store";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const emptyCart = useCart((state) => state.emptyCart);

  useEffect(() => {
    emptyCart();
  }, [emptyCart]);

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={2} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Payment Successful!</h1>
            <p className="text-green-100 text-sm">Your transaction has been completed</p>
          </div>
          {/* Actions */}
          <div className="px-8 p-10">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 text-sm text-center">
                <span className="font-medium">Receipt sent to your email!</span> Check your inbox
                for transaction details.
              </p>
            </div>
            <button
              onClick={handleGoHome}
              className="w-full bg-slate-800 hover:cursor-pointer text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Return to Home</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

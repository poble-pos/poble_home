"use client";

import React from "react";
import { Check, Star } from "lucide-react";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  cta: string;
  highlight?: boolean;
}

interface Props {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: Props) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        plan.popular ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-200"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
            <span className="text-gray-600">/{plan.period}</span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                  feature.included ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                }`}
              >
                <Check className="w-3 h-3" />
              </div>
              <span className={`text-sm ${feature.included ? "text-gray-900" : "text-gray-500"}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            window.open("https://backoffice.poble.com.au", "_blank");
          }}
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:cursor-pointer ${
            plan.popular
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
              : "bg-slate-800 text-white hover:bg-gray-800"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

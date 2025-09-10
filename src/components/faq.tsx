"use client";

import React from "react";

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">Got questions? We&#39;ve got answers.</p>
      </div>
      <div className="space-y-6">
        {[
          {
            question: "Can I change my plan at any time?",
            answer:
              "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
          },
          {
            question: "Is there a free trial available?",
            answer: "Absolutely! We offer a 90-day free trial.",
          },
          {
            question: "Do you offer refunds?",
            answer:
              "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment in full.",
          },
        ].map((faq, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

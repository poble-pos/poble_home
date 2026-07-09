"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

import { Container } from "@/components/site/Container";
import { PageShell } from "@/components/site/PageShell";
import { useCart } from "@/context/CartContext";
import type { CheckoutSessionResponse } from "@/app/api/checkout/session/route";

function formatAmount(amount: number | null) {
  if (amount === null) return "-";
  return `$${(amount / 100).toFixed(2)}`;
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <PageShell>
          <Container className="py-24 max-w-2xl">
            <div className="flex flex-col items-center text-center gap-4 py-20">
              <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
              <p className="text-slate-500 font-bold">Loading…</p>
            </div>
          </Container>
        </PageShell>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  );
}

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();

  const [order, setOrder] = useState<CheckoutSessionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!sessionId) {
      setError("Missing order reference.");
      setIsLoading(false);
      return;
    }

    fetch(`/api/checkout/session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setOrder(data);
          if (data.paymentStatus === "paid") {
            clearCart();
          }
        }
      })
      .catch(() => setError("Could not retrieve order details."))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  const status = isLoading
    ? "loading"
    : error || !order
      ? "error"
      : order.paymentStatus === "paid"
        ? "paid"
        : "pending";

  return (
    <PageShell>
      <Container className="py-24 max-w-2xl">
        {status === "loading" && (
          <div className="flex flex-col items-center text-center gap-4 py-20">
            <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
            <p className="text-slate-500 font-bold">Confirming your order…</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center text-center gap-4 py-20">
            <XCircle className="w-14 h-14 text-red-500" />
            <h1 className="text-2xl font-black text-poble-charcoal">
              We couldn&apos;t confirm your order
            </h1>
            <p className="text-slate-500 font-bold max-w-md">
              {error ?? "Something went wrong retrieving your order."}
            </p>
            <Link
              href="/hardware"
              className="mt-4 px-8 py-3 bg-teal-600 text-white rounded-full text-sm font-black hover:bg-poble-charcoal transition-colors"
            >
              Back to Hardware
            </Link>
          </div>
        )}

        {status === "paid" && order && (
          <div className="flex flex-col items-center text-center gap-4">
            <CheckCircle2 className="w-16 h-16 text-teal-600" />
            <h1 className="text-3xl font-black text-poble-charcoal tracking-tighter">
              Order confirmed
            </h1>
            <p className="text-slate-500 font-bold max-w-md">
              Thanks for your order{order.customerEmail ? `, we've sent a receipt to ${order.customerEmail}` : ""}.
              Our team will be in touch about delivery.
            </p>

            <div className="w-full mt-8 border border-slate-100 rounded-2xl divide-y divide-slate-50 text-left">
              {order.lineItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center px-6 py-4"
                >
                  <div>
                    <p className="font-black text-poble-charcoal">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400 font-bold">
                      Qty {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-slate-600">
                    {formatAmount(item.amountTotal)}
                  </p>
                </div>
              ))}
              <div className="flex justify-between items-center px-6 py-4 bg-slate-50/50 rounded-b-2xl">
                <p className="font-black uppercase tracking-[0.2em] text-[10px] text-slate-400">
                  Total
                </p>
                <p className="text-xl font-black text-poble-charcoal">
                  {formatAmount(order.amountTotal)}
                </p>
              </div>
            </div>

            <Link
              href="/hardware"
              className="mt-8 px-8 py-3 bg-teal-600 text-white rounded-full text-sm font-black hover:bg-poble-charcoal transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {status === "pending" && (
          <div className="flex flex-col items-center text-center gap-4 py-20">
            <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
            <h1 className="text-2xl font-black text-poble-charcoal">
              Payment processing
            </h1>
            <p className="text-slate-500 font-bold max-w-md">
              Your payment is still being confirmed. This page will update
              automatically once it clears.
            </p>
          </div>
        )}
      </Container>
    </PageShell>
  );
}

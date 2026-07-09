"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";

import { Container } from "@/components/site/Container";
import { PageShell } from "@/components/site/PageShell";

export default function CheckoutCancelPage() {
  return (
    <PageShell>
      <Container className="py-24 max-w-2xl">
        <div className="flex flex-col items-center text-center gap-4 py-20">
          <XCircle className="w-14 h-14 text-slate-300" />
          <h1 className="text-3xl font-black text-poble-charcoal tracking-tighter">
            Checkout cancelled
          </h1>
          <p className="text-slate-500 font-bold max-w-md">
            No payment was taken. Your cart is still saved, so you can pick up
            right where you left off.
          </p>
          <Link
            href="/hardware"
            className="mt-4 px-8 py-3 bg-teal-600 text-white rounded-full text-sm font-black hover:bg-poble-charcoal transition-colors"
          >
            Back to Hardware
          </Link>
        </div>
      </Container>
    </PageShell>
  );
}

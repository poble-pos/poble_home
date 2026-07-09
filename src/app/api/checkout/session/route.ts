import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export interface CheckoutSessionResponse {
  status: string | null;
  paymentStatus: string | null;
  customerEmail: string | null;
  amountTotal: number | null;
  currency: string | null;
  lineItems: {
    name: string | null;
    quantity: number | null;
    amountTotal: number | null;
  }[];
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    return NextResponse.json({
      status: session.status,
      paymentStatus: session.payment_status,
      customerEmail: session.customer_details?.email ?? null,
      amountTotal: session.amount_total,
      currency: session.currency,
      lineItems:
        session.line_items?.data.map((item) => ({
          name: item.description,
          quantity: item.quantity,
          amountTotal: item.amount_total,
        })) ?? [],
    });
  } catch (error) {
    console.error("Failed to retrieve checkout session:", error);
    return NextResponse.json(
      { error: "Could not retrieve order details." },
      { status: 500 }
    );
  }
}

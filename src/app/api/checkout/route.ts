import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { productsById } from "@/data/products";

interface CheckoutRequestItem {
  id: string;
  quantity: number;
}

const MAX_QUANTITY_PER_ITEM = 20;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const requestedItems: CheckoutRequestItem[] = Array.isArray(body?.items)
      ? body.items
      : [];

    if (requestedItems.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      );
    }

    const origin = request.nextUrl.origin;

    const lineItems = requestedItems.map(({ id, quantity }) => {
      const product = productsById.get(id);
      if (!product || !product.inStock) {
        throw new Error(`Product not available: ${id}`);
      }

      const safeQuantity = Math.min(
        Math.max(Math.floor(Number(quantity) || 1), 1),
        MAX_QUANTITY_PER_ITEM
      );

      return {
        quantity: safeQuantity,
        price_data: {
          currency: "aud",
          unit_amount: Math.round(product.price * 100),
          product_data: {
            name: product.name,
            description: product.description,
            images: [`${origin}${product.image}`],
            metadata: { productId: product.id },
          },
        },
      };
    });

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ["AU"],
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    const message =
      error instanceof Error ? error.message : "Failed to start checkout.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

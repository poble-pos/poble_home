import { StripeOneOffCartItem, StripeProduct } from "@/lib/interfaces";

export async function fetchStripeOneOffProductList({
  limit = 100,
  starting_after = "",
  isActive = true,
  testMode = true,
}: {
  limit?: number;
  starting_after?: string;
  isActive?: boolean;
  testMode?: boolean;
}) {
  const params = new URLSearchParams({
    limit: limit.toString(),
    starting_after: starting_after ?? "",
    isActive: String(isActive),
    testMode: String(testMode),
    isOneOff: "true",
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_END_POINT}/api/v1/Subscription/products?${params.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }

  const data = await res.json();

  return data as StripeProduct[];
}

export async function createPaymentLink({
  successUrl,
  cancelUrl,
  items,
}: {
  successUrl: string;
  cancelUrl: string;
  items: StripeOneOffCartItem[];
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_END_POINT}/api/v1/Subscription/createPaymentLink`,
    {
      method: "POST",
      body: JSON.stringify({
        successUrl,
        cancelUrl,
        items,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }

  const data = await res.text();

  return data as string;
}

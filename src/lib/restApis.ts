import { StripeProduct } from "@/lib/interfaces";

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
    `http://localhost:5080/api/v1/Subscription/products?${params.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }

  const data = await res.json();

  return data as StripeProduct[];
}

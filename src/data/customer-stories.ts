import type { Messages } from "@/i18n/messages";

import type { ProductSlug } from "./export-products";

export type StoryId = keyof Messages["stories"];

/**
 * Venue stories shown on the homepage and /customers. Venue names are not
 * translated; the rest of each story is in the dictionaries under `stories.<id>`.
 */
export const CUSTOMER_STORIES: { id: StoryId; name: string; image: string; products: ProductSlug[] }[] = [
  { id: "woojeong", name: "Woojeong", image: "/images/home/venue-woojeong.webp", products: ["pos", "kds", "table-ordering"] },
  { id: "kidsday", name: "Kidsday", image: "/images/home/venue-kidsday.webp", products: ["pos", "dual-screen"] },
  { id: "wind-and-flour", name: "Wind & Flour", image: "/images/home/venue-wind-and-flour.webp", products: ["pos", "kiosk"] },
];

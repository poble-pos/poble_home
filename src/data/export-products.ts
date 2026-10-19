import type { Messages } from "@/i18n/messages";

/** Product slugs, matching the keys of `products` in the translation dictionaries. */
export type ProductSlug = keyof Messages["products"];

/**
 * Product pages from the approved Poble export (product-*.html). The order is the
 * export's pager order; each page links to the next one, wrapping at the end.
 * Product copy (name, title, points, image text) is in the translation
 * dictionaries under `products.<slug>`.
 */
export interface ExportProduct {
  slug: ProductSlug;
  image: { src: string; width: number; height: number };
}

export const EXPORT_PRODUCTS: ExportProduct[] = [
  { slug: "pos", image: { src: "/images/pos/Poble%20POS.png", width: 2960, height: 2290 } },
  { slug: "staff-pos", image: { src: "/images/pos/Staff%20POS.png", width: 2960, height: 2290 } },
  { slug: "kds", image: { src: "/images/pos/KDS.png", width: 2960, height: 2290 } },
  { slug: "dual-screen", image: { src: "/images/pos/Dual%20Screen.png", width: 2960, height: 2290 } },
  { slug: "kiosk", image: { src: "/images/pos/Kiosk.png", width: 2290, height: 2960 } },
  { slug: "table-ordering", image: { src: "/images/pos/Table%20Order.png", width: 2960, height: 2290 } },
  { slug: "crm", image: { src: "/images/pos/CRM.png", width: 1857, height: 3096 } },
];

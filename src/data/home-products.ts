/**
 * @file home-products.ts
 * @description Product explorer on the homepage, from the approved Poble design
 * export. Screens are the supplied Poble product images; the copy for each
 * product is in the translation dictionaries under `products.<id>`.
 */

import { EXPORT_PRODUCTS, type ProductSlug } from "./export-products";

export interface HomeProduct {
  id: ProductSlug;
  image: { src: string; width: number; height: number };
}

/** Same products and order as the product pages. */
export const HOME_PRODUCTS: HomeProduct[] = EXPORT_PRODUCTS.map((product) => ({ id: product.slug, image: product.image }));

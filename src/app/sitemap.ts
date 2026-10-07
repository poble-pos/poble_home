import type { MetadataRoute } from "next";

import { EXPORT_PRODUCTS } from "@/data/export-products";
import { SITE_URL } from "@/lib/site";

const STATIC_PATHS = ["/", "/features", "/pricing", "/customers", "/hardware", "/manual", "/terms", "/privacy", "/cookies"];

export default function sitemap(): MetadataRoute.Sitemap {
  const productPaths = EXPORT_PRODUCTS.map((product) => `/features/${product.slug}`);
  return [...STATIC_PATHS, ...productPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}

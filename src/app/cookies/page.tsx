import type { Metadata } from "next";

import { LegalArticle } from "@/components/site/LegalArticle";
import { LEGAL_DOCS } from "@/data/legal";

export const metadata: Metadata = {
  title: LEGAL_DOCS.cookies.title,
  description: LEGAL_DOCS.cookies.description,
};

export default function CookiesPage() {
  return <LegalArticle slug="cookies" />;
}

import type { Metadata } from "next";

import { LegalArticle } from "@/components/site/LegalArticle";
import { LEGAL_DOCS } from "@/data/legal";

export const metadata: Metadata = {
  title: LEGAL_DOCS.terms.title,
  description: LEGAL_DOCS.terms.description,
};

export default function TermsPage() {
  return <LegalArticle slug="terms" />;
}

import type { Metadata } from "next";

import { LegalArticle } from "@/components/site/LegalArticle";
import { LEGAL_DOCS } from "@/data/legal";

export const metadata: Metadata = {
  title: LEGAL_DOCS.privacy.title,
  description: LEGAL_DOCS.privacy.description,
};

export default function PrivacyPage() {
  return <LegalArticle slug="privacy" />;
}

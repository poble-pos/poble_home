import type { Metadata } from "next";
import Link from "next/link";

import { EnquiryForm } from "@/components/enquiry/EnquiryForm";
import { ExportPage } from "@/components/site/ExportPage";
import { PageShell } from "@/components/site/PageShell";
import { getI18n } from "@/i18n/server";

import "@/styles/enquiry.css";

export async function generateMetadata(): Promise<Metadata> {
  const { m } = await getI18n();
  return m.meta.enquiry;
}

/** Dedicated enquiry page, opened by Send Enquiry and by Contact us outside the homepage. */
export default async function EnquiryPage() {
  const { m } = await getI18n();
  return (
    <PageShell>
      <ExportPage>
        <main id="top" tabIndex={-1} className="enquiry-page">
          <div className="enquiry-wrap">
            <Link className="link enquiry-back" href="/">
              <svg aria-hidden="true">
                <use href="#arrow-l" />
              </svg>
              <span>{m.enquiry.back}</span>
            </Link>
            <EnquiryForm />
          </div>
        </main>
      </ExportPage>
    </PageShell>
  );
}

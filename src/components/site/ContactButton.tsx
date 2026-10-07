"use client";

import type { CSSProperties, ReactNode } from "react";

import { useInquiry } from "@/context/InquiryContext";

/**
 * "Contact us" control for export markup. Opens the shared enquiry panel where the
 * export opened its contact form (data-contact links).
 */
export function ContactButton({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const { openInquiry } = useInquiry();
  return (
    <button type="button" className={className} style={style} onClick={openInquiry}>
      {children}
    </button>
  );
}

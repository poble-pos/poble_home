"use client";

import { useRouter } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";

/**
 * "Contact us" control for export markup. Scrolls to the page's contact section
 * (`#contact`, on the homepage) when there is one; otherwise opens the enquiry page.
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
  const router = useRouter();
  const onClick = () => {
    const section = document.getElementById("contact");
    if (!section) {
      router.push("/enquiry");
      return;
    }
    section.scrollIntoView();
    history.replaceState(null, "", "#contact");
  };
  return (
    <button type="button" className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

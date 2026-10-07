"use client";

import { useEffect, useRef } from "react";

import { useInquiry } from "@/context/InquiryContext";
import { InquiryForm } from "./InquiryForm";

/**
 * Enquiry panel shared by every "Contact us" action. A native modal dialog styled
 * by contact.css (460px on desktop, full width on phones). Escape, the backdrop and
 * the close button dismiss it, and focus returns to the control that opened it.
 */
export function InquirySidebar() {
  const { isInquiryOpen, closeInquiry } = useInquiry();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isInquiryOpen && !dialog.open) {
      opener.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      dialog.showModal();
      closeRef.current?.focus({ preventScroll: true });
    } else if (!isInquiryOpen && dialog.open) {
      dialog.close();
    }
  }, [isInquiryOpen]);

  const handleClose = () => {
    document.body.style.overflow = "";
    closeInquiry();
    opener.current?.focus({ preventScroll: true });
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target !== dialogRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const outside =
      event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      id="inquiryDialog"
      className="inquiry-dialog"
      aria-labelledby="inquiry-title"
      onClose={handleClose}
      onCancel={(event) => {
        event.preventDefault();
        dialogRef.current?.close();
      }}
      onClick={handleBackdropClick}
    >
      <div className="inquiry-heading">
        <h2 id="inquiry-title">Contact us</h2>
        <button ref={closeRef} type="button" className="inquiry-close" aria-label="Close enquiry" onClick={() => dialogRef.current?.close()}>
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <InquiryForm onDone={() => dialogRef.current?.close()} />
    </dialog>
  );
}

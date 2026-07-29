"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import { InquiryForm } from "./InquiryForm";

interface InquirySidebarProps {
  open: boolean;
  onClose: () => void;
}

export function InquirySidebar({ open, onClose }: InquirySidebarProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
        onClick={onClose}
      />

      <div className="relative flex h-full w-[85vw] max-w-md flex-col overflow-y-auto border-l border-black/10 bg-[#F9F8F3] shadow-xl animate-in slide-in-from-right duration-500 md:w-full">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-full p-3 transition-all hover:bg-black/5"
        >
          <X className="h-5 w-5 text-black/45 hover:text-black" />
        </button>

        <div className="p-8 pt-16">
          <InquiryForm onDone={onClose} bare />
        </div>
      </div>
    </div>
  );
}

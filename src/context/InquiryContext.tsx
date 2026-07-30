"use client";

import React, { createContext, useContext, useState } from "react";

interface InquiryContextType {
  isInquiryOpen: boolean;
  openInquiry: () => void;
  closeInquiry: () => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(
  undefined,
);

export const InquiryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <InquiryContext.Provider
      value={{
        isInquiryOpen,
        openInquiry: () => setIsInquiryOpen(true),
        closeInquiry: () => setIsInquiryOpen(false),
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (context === undefined) {
    throw new Error("useInquiry must be used within an InquiryProvider");
  }
  return context;
};

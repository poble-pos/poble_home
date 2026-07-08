"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo: React.FC<{
  className?: string;
  onClick?: React.MouseEventHandler;
}> = ({ className = "", onClick }) => (
  <Link
    href="/"
    className={`flex items-center gap-2 group cursor-pointer ${className}`}
    onClick={onClick}
  >
    <div
      className={`relative transition-transform group-hover:scale-105 shrink-0 ${className.match(/h-\d+|h-full|h-auto/) ? "h-full" : "h-10"}`}
    >
      <Image
        src="/logo-transparent.svg"
        alt="Poble Logo"
        width={1024}
        height={1024}
        className="h-full w-auto object-contain"
      />
    </div>
  </Link>
);

"use client";

import React from 'react';
import Link from 'next/link';

export const Logo: React.FC<{ className?: string; onClick?: React.MouseEventHandler }> = ({ className = "", onClick }) => (
    <Link
        href="/"
        className={`flex items-center gap-2 group cursor-pointer ${className}`}
        onClick={onClick}
    >
        <div className={`relative transition-transform group-hover:scale-105 shrink-0 ${className.match(/h-\d+|h-full|h-auto/) ? 'h-full' : 'h-10'}`}>
            <img
                src="/logo-full.png"
                alt="Poble Logo"
                className="h-full w-auto object-contain"
            />
        </div>
    </Link>
);

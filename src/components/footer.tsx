"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { navigationItems } from "@/lib";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className={"flex flex-col gap-4"}>
              {navigationItems.map((item) => {
                return (
                  <div key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                  </div>
                );
              })}
            </div>
            {/* Company Info */}
            <div className={""}>
              <Image
                src={"/logo.png"}
                alt={"poble_logo_white.png"}
                width={120}
                height={39}
                className={"object-contain mb-3"}
              />
              <p className="text-white leading-relaxed mb-6">
                Cloud-based multi-modular solutions specifically targeting retail, restaurant.
              </p>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Copyright Poble. All Rights Reserved
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              </div>
              <Button
                className="text-slate-400 text-sm hover:cursor-pointer"
                variant={"link"}
                onClick={() => {
                  router.push("/terms-and-conditions");
                }}
              >
                Terms & Conditions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Products", href: "#products" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <div className="border-b border-accent/20 sticky top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="POS Solution Logo" width={140} height={40} className="h-11" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-foreground/80 hover:text-foreground hover:bg-accent/100 font-medium transition-colors"
              asChild
            >
              <a href={item.href}>{item.name}</a>
            </Button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground/80 hover:text-foreground hover:bg-accent/100"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border shadow-lg bg-background/95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-accent/10 font-medium"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

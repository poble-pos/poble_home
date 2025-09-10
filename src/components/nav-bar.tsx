"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DesktopNavigation from "@/components/desktop-navigation";
import MobileNavigation from "@/components/mobile-navigation";

export default function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Hardware", link: "/hardware" },
    { name: "Pricing", link: "/pricing" },
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div className="border-b sticky top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center hover:cursor-pointer">
          <Image
            src="/logo.png"
            alt="POS Solution Logo"
            width={120}
            height={39}
            onClick={() => router.push("/")}
            priority
            className={"object-contain"}
          />
        </div>
        {/* Desktop Navigation */}
        <DesktopNavigation navigationItems={navigationItems} />
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground/80 hover:text-foreground hover:bg-primary"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <MobileNavigation navigationItems={navigationItems} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

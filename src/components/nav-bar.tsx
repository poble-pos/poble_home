"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [{ name: "Hardware", link: "/hardware" }];

  return (
    <div className="border-b sticky top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-md z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center hover:cursor-pointer">
          <Image
            src="/logo.png"
            alt="POS Solution Logo"
            width={120}
            height={30}
            onClick={() => router.push("/")}
            className={"w-auto h-auto"}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navigationItems.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Button
                key={item.name}
                variant={isActive ? "default" : "ghost"}
                className="text-foreground/80 hover:text-foreground hover:bg-primary font-medium transition-colors hover:cursor-pointer"
                onClick={() => router.push(item.link)}
              >
                {item.name}
              </Button>
            );
          })}
        </div>

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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border shadow-lg bg-background/95 backdrop-blur-md">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.link;

              return (
                <Button
                  key={item.name}
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start text-foreground/80 hover:text-foreground hover:primary font-medium hover:cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push(item.link);
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

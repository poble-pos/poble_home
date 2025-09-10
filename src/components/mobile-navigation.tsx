"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { navigationItems } from "@/lib";

interface Props {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNavigation({ setIsMenuOpen }: Props) {
  return (
    <div className="md:hidden border-t border shadow-lg bg-background/95 backdrop-blur-md">
      <div className="flex flex-col gap-5 p-5">
        {navigationItems.map((item) => {
          return (
            <Link key={item.name} href={item.link} onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className={"w-full px-5"}>
        <Separator className={"mb-3"} />
      </div>
      <div className={"w-full flex justify-center px-5 pb-5"}>
        <Button
          className={"hover:cursor-pointer w-full"}
          onClick={() => {
            window.open("https://backoffice.poble.com.au", "_blank");
          }}
        >
          Get Started Free
        </Button>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Props {
  navigationItems: { name: string; link: string }[];
}

export default function DesktopNavigation({ navigationItems }: Props) {
  return (
    <div className="hidden md:flex items-center gap-3">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {navigationItems.map((item) => {
            return (
              <NavigationMenuItem key={item.link}>
                <NavigationMenuLink asChild className={"bg-transparent!"}>
                  <Link href={item.link}>{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          {/*<NavigationMenuItem>*/}
          {/*  <NavigationMenuTrigger className={"bg-transparent! hover:cursor-pointer"}>*/}
          {/*    List*/}
          {/*  </NavigationMenuTrigger>*/}
          {/*  <NavigationMenuContent className={"bg-white!"}>*/}
          {/*    <ul className="grid w-[300px] gap-4">*/}
          {/*      <li>*/}
          {/*        <NavigationMenuLink asChild>*/}
          {/*          <Link href="#">*/}
          {/*            <div className="font-medium">Components</div>*/}
          {/*            <div className="text-muted-foreground">*/}
          {/*              Browse all components in the library.*/}
          {/*            </div>*/}
          {/*          </Link>*/}
          {/*        </NavigationMenuLink>*/}
          {/*        <NavigationMenuLink asChild>*/}
          {/*          <Link href="#">*/}
          {/*            <div className="font-medium">Documentation</div>*/}
          {/*            <div className="text-muted-foreground">Learn how to use the library.</div>*/}
          {/*          </Link>*/}
          {/*        </NavigationMenuLink>*/}
          {/*        <NavigationMenuLink asChild>*/}
          {/*          <Link href="#">*/}
          {/*            <div className="font-medium">Blog</div>*/}
          {/*            <div className="text-muted-foreground">Read our latest blog posts.</div>*/}
          {/*          </Link>*/}
          {/*        </NavigationMenuLink>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </NavigationMenuContent>*/}
          {/*</NavigationMenuItem>*/}
        </NavigationMenuList>
      </NavigationMenu>
      <Separator orientation={"vertical"} className={"min-h-7 bg-slate-500 mr-3"} />
      <Button
        className={"hover:cursor-pointer"}
        onClick={() => {
          window.open("https://backoffice.poble.com.au", "_blank");
        }}
      >
        Get Started Free
      </Button>
      <Separator orientation={"vertical"} />
    </div>
  );
}

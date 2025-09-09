"use client";

import { useCart } from "@/store";
import { ShoppingCart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function CartButton() {
  const router = useRouter();
  const pathname = usePathname();
  const currentItems = useCart((state) => state.currentItems);

  const clickHandler = () => {
    router.push("/cart");
  };

  const totalQuantity =
    currentItems?.reduce((acc, item) => {
      return acc + item.quantity || 0;
    }, 0) || 0;

  if (totalQuantity === 0 || pathname === "/cart") {
    return <></>;
  }

  return (
    <button
      className="fixed bottom-8 right-8 group hover:cursor-pointer z-50"
      onClick={clickHandler}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative w-16 h-16 rounded-full border-2 bg-slate-800 border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-white/40">
        <ShoppingCart className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors duration-300" />
        {totalQuantity > 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-xs font-bold text-white">
              {totalQuantity > 99 ? "99+" : totalQuantity}
            </span>
          </div>
        )}
      </div>
    </button>
  );
}

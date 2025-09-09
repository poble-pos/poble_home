"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { StripeProduct } from "@/lib/interfaces";

interface ProductCardProps {
  product: StripeProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {

  };

  return (
    <div className="group relative col-span-1">
      <div className="relative bg-white backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-300 h-full hover:shadow-lg hover:scale-[1.02]">
        <div className="w-full aspect-square flex items-center justify-center p-5">
          <div className="relative w-full h-full">
            <Image
              src={product.images?.[0] || "/no_image.png"}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                ${(product.defaultPrice.unitAmount / 100).toFixed(2)}
              </span>
            </div>

            <Button
              onClick={handleAddToCart}
              className="bg-primary text-black px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 hover:shadow-md hover:cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

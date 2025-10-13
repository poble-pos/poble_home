import React from "react";
import { Package } from "lucide-react";

// Skeleton Card Component
function ProductCardSkeleton() {
  return (
    <div className="group relative col-span-1">
      <div className="relative bg-white backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-300 h-full">
        {/* Image Skeleton */}
        <div className="w-full aspect-square flex items-center justify-center p-5 rounded-lg">
          <div className="relative w-full h-full bg-gray-200 rounded-lg animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-lg"></div>
          </div>
        </div>
        {/* Content Skeleton */}
        <div className="p-6 flex flex-col">
          {/* Title Skeleton */}
          <div className="mb-3">
            <div className="h-6 bg-gray-200 rounded animate-pulse mb-2">
              <div className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4">
              <div className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded"></div>
            </div>
          </div>
          {/* Price and Button Skeleton */}
          <div className="flex items-center justify-between mt-auto">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-20">
              <div className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded"></div>
            </div>
            <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-32">
              <div className="h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-gradient-to-b from-background to-accent/5 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center py-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" />
            Hardware Store
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Premium <span className="text-primary">Hardware</span> Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Discover our curated selection of cutting-edge technology and hardware products designed
            for professionals, gamers, and tech enthusiasts.
          </p>
        </div>

        {/* Loading Products Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Generate 8 skeleton cards for loading state */}
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

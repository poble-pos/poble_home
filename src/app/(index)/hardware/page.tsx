import React from "react";
import { Package } from "lucide-react";
import ProductCard from "@/components/product-card";
import { fetchStripeOneOffProductList } from "@/lib/restApis";

export default async function HardwarePage() {
  const stripeOneOffProductList = await fetchStripeOneOffProductList({});

  console.log(stripeOneOffProductList);

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

        {/* Products Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stripeOneOffProductList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative mb-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/30 rounded-3xl blur-2xl opacity-50"></div>
          <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-accent/50 text-center">
            <h3 className="text-3xl font-bold mb-4">Need Help Choosing the Right Hardware?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect technology solution for your needs
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200 hover:cursor-pointer">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

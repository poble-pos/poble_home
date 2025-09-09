import { persist } from "zustand/middleware";
import { create } from "zustand";
import { StripeProduct, StripeProductWithQuantity } from "@/lib/interfaces";

interface UseCartInfo {
  currentItems?: StripeProductWithQuantity[];
  addItem: (item: StripeProduct) => void;
  removeItem: (iteId: string) => void;
  emptyItem: (iteId: string) => void;
  getTotalPrice: () => number;
}

export const useCart = create<UseCartInfo>()(
  persist(
    (set, get) => ({
      currentItems: [],
      addItem: (product: StripeProduct) => {
        const items = get().currentItems || [];
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            currentItems: items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          });
        } else {
          set({
            currentItems: [...items, { ...product, quantity: 1 }],
          });
        }
      },
      removeItem: (productId: string) => {
        const items = get().currentItems || [];

        const updatedItems = items
          .map((item) => {
            if (item.id === productId) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0); // remove if quantity is 0

        set({ currentItems: updatedItems });
      },
      emptyItem: (itemId: string) => {
        const items = get().currentItems || [];

        set({
          currentItems: items.filter((item) => item.id !== itemId),
        });
      },
      getTotalPrice: () => {
        const items = get().currentItems || [];

        const totalPrice = items.reduce((total, item) => {
          return total + item.defaultPrice.unitAmount * item.quantity;
        }, 0);

        return totalPrice;
      },
    }),
    {
      name: "cart",
    },
  ),
);

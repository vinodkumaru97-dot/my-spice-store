// store/cart-store.ts
import { create } from "zustand";
import type { Product } from "../lib/products";

export type CartItem = Product & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,

  addItem: (product) => {
    const { items } = get();
    const existing = items.find((i) => i.id === product.id);

    let newItems: CartItem[];
    if (existing) {
      newItems = items.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      newItems = [...items, { ...product, quantity: 1 }];
    }

    set({
      items: newItems,
      totalItems: newItems.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: newItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    });
  },

  removeItem: (productId) => {
    const newItems = get().items.filter((i) => i.id !== productId);
    set({
      items: newItems,
      totalItems: newItems.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: newItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    });
  },

  increment: (productId) => {
    const newItems = get().items.map((i) =>
      i.id === productId ? { ...i, quantity: i.quantity + 1 } : i
    );
    set({
      items: newItems,
      totalItems: newItems.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: newItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    });
  },

  decrement: (productId) => {
    const items = get().items;
    const updated = items
      .map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      )
      .filter((i) => i.quantity > 0);

    set({
      items: updated,
      totalItems: updated.reduce((sum, i) => sum + i.quantity, 0),
      totalPrice: updated.reduce((sum, i) => sum + i.price * i.quantity, 0),
    });
  },

  clearCart: () => {
    set({ items: [], totalItems: 0, totalPrice: 0 });
  },
}));

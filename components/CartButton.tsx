// components/CartButton.tsx
"use client";

import Link from "next/link";
import { useCartStore } from "../store/cart-store";

export default function CartButton() {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-sm text-slate-100 hover:border-amber-400 hover:text-amber-300"
    >
      <span>Cart</span>
      <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-amber-500 px-1 text-[11px] font-semibold text-slate-950">
        {totalItems}
      </span>
    </Link>
  );
}

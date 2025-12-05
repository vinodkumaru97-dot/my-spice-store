"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { productCategories } from "../../../lib/products";
import { useCartStore } from "../../../store/cart-store";

export default function ProductPage() {
  const { productId } = useParams();
  const addItem = useCartStore((state) => state.addItem);

  // Find the product from all categories
  const product = productCategories
    .flatMap((c) => c.items)
    .find((item) => item.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <section className="max-w-4xl mx-auto px-4 py-10 space-y-4">
          <p className="text-red-400 text-sm">Product not found.</p>
          <Link href="/" className="text-amber-400 text-sm hover:text-amber-300">
            ← Back to home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-amber-300"
          >
            ← Back to home
          </Link>
          <Link
            href="/cart"
            className="text-sm text-amber-300 hover:text-amber-200"
          >
            Go to cart
          </Link>
        </div>
      </header>

      {/* Product details */}
      <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.15em] text-amber-400">
            {product.category}
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            {product.name}
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            {product.description}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xl font-semibold text-amber-300">
            ₹{product.price}{" "}
            <span className="text-sm text-slate-400">/ {product.unit}</span>
          </p>
          <p className="text-xs text-slate-500">
            Ideal for retailers, wholesalers, and bulk orders.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => addItem(product)}
            className="text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-full font-medium"
          >
            Add to cart
          </button>
          <a
            href="/#contact"
            className="text-sm border border-slate-700 hover:border-amber-400 text-slate-100 px-5 py-2.5 rounded-full"
          >
            Bulk enquiry
          </a>
        </div>
      </section>
    </main>
  );
}

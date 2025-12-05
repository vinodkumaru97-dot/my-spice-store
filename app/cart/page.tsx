"use client";

import Link from "next/link";
import { useCartStore } from "../../store/cart-store";

export default function CartPage() {
  const {
    items,
    totalItems,
    totalPrice,
    increment,
    decrement,
    removeItem,
    clearCart,
  } = useCartStore();

  const hasItems = items.length > 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-amber-300"
          >
            ← Back to home
          </Link>
          <p className="text-sm text-slate-400">
            Items in cart:{" "}
            <span className="font-semibold text-amber-300">{totalItems}</span>
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-semibold mb-2">Shopping Cart</h1>

        {!hasItems && (
          <p className="text-sm text-slate-400">
            Your cart is empty.{" "}
            <Link href="/" className="text-amber-300 hover:text-amber-200">
              Browse products
            </Link>
          </p>
        )}

        {hasItems && (
          <>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-3 border border-slate-800 rounded-2xl bg-slate-900/60 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      ₹{item.price} • {item.unit} • {item.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        className="h-7 w-7 rounded-full border border-slate-600 text-slate-100 hover:border-amber-400"
                      >
                        -
                      </button>
                      <span className="min-w-[24px] text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        className="h-7 w-7 rounded-full border border-slate-600 text-slate-100 hover:border-amber-400"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-semibold text-amber-300">
                        ₹{item.price * item.quantity}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-[11px] text-slate-400 hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-slate-800 pt-4 mt-4">
              <div className="text-sm text-slate-300 space-y-1">
                <p>
                  Total items:{" "}
                  <span className="font-semibold text-amber-300">
                    {totalItems}
                  </span>
                </p>
                <p>
                  Cart total:{" "}
                  <span className="font-semibold text-emerald-300">
                    ₹{totalPrice}
                  </span>
                </p>
                <p className="text-[11px] text-slate-500">
                  * Taxes, shipping, and GST invoice will be handled at
                  checkout.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-auto">
                <button
                  type="button"
                  onClick={clearCart}
                  className="w-full md:w-auto rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-red-400 hover:text-red-300"
                >
                  Clear cart
                </button>
                <button
                  type="button"
                  className="w-full md:w-auto rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-400"
                  disabled
                >
                  Checkout (coming soon)
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

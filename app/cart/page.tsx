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

  // ---- ORDER SUMMARY (you can tweak these values) ----
  const bagTotal = totalPrice; // total of cart items
  const bagDiscount = 0; // demo: no discount yet
  const deliveryFee = bagTotal > 999 ? 0 : 50; // free delivery above 999
  const convenienceFee = 0; // can set something later
  const platformFee = 0; // can set something later

  const orderTotal =
    bagTotal - bagDiscount + deliveryFee + convenienceFee + platformFee;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* TOP STEP BAR (Bag -> Delivery -> Payment) */}
      <header className="border-b border-slate-800 bg-slate-950/95 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-amber-300"
          >
            ← Continue shopping
          </Link>

          <div className="flex items-center gap-6 text-xs md:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-semibold">
                1
              </div>
              <span className="font-medium text-slate-100">Bag</span>
            </div>
            <div className="h-px w-8 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full border border-slate-600 text-slate-400 flex items-center justify-center text-xs">
                2
              </div>
              <span>Delivery Details</span>
            </div>
            <div className="h-px w-8 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full border border-slate-600 text-slate-400 flex items-center justify-center text-xs">
                3
              </div>
              <span>Payment</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-6 md:py-8 grid md:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] gap-6 md:gap-8">
        {/* LEFT: BAG ITEMS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">My Bag</h1>
            {hasItems && (
              <p className="text-xs text-slate-400">
                {totalItems} item{totalItems > 1 ? "s" : ""}
              </p>
            )}
          </div>

          {!hasItems && (
            <div className="border border-slate-800 rounded-2xl bg-slate-900/70 p-6 text-sm text-slate-300">
              Your bag is empty.{" "}
              <Link
                href="/"
                className="text-amber-300 hover:text-amber-200 font-medium"
              >
                Browse products
              </Link>
            </div>
          )}

          {hasItems && (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="border border-slate-800 rounded-2xl bg-slate-900/70 p-4 flex flex-col md:flex-row gap-4"
                >
                  {/* Product image placeholder */}
                  <div className="h-20 w-20 rounded-xl bg-slate-800 flex-shrink-0 flex items-center justify-center text-[11px] text-slate-400">
                    {item.category.split(" ")[0]}
                  </div>

                  {/* Details + controls */}
                  <div className="flex-1 flex flex-col justify-between gap-2">
                    <div>
                      <p className="text-sm md:text-base font-medium">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Pack: {item.unit} • Category: {item.category}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-3">
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
                      </div>

                      {/* Price + actions */}
                      <div className="flex items-center justify-between md:justify-end gap-4 text-sm w-full">
                        <div className="text-right">
                          <p className="font-semibold text-amber-300">
                            ₹{item.price * item.quantity}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            ₹{item.price} × {item.quantity}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-[11px] text-slate-400 hover:text-red-400"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear bag */}
              <button
                type="button"
                onClick={clearCart}
                className="text-xs text-slate-400 hover:text-red-400"
              >
                Clear entire bag
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: ORDER DETAILS */}
        <aside className="space-y-4">
          <div className="border border-slate-800 rounded-2xl bg-slate-900/80 p-4 space-y-3">
            <h2 className="text-sm font-semibold text-slate-100">
              Order Details
            </h2>

            <div className="space-y-1 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Bag total</span>
                <span>₹{bagTotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bag discount</span>
                <span className={bagDiscount > 0 ? "text-emerald-300" : ""}>
                  {bagDiscount > 0 ? `- ₹${bagDiscount}` : "₹0"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Convenience fee</span>
                <span>
                  {convenienceFee > 0 ? `₹${convenienceFee}` : "Free"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>
                  Delivery fee{" "}
                  <span className="text-[10px] text-slate-500">
                    (Free above ₹999)
                  </span>
                </span>
                <span>
                  {deliveryFee > 0 ? `₹${deliveryFee}` : "Free"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Platform fee</span>
                <span>
                  {platformFee > 0 ? `₹${platformFee}` : "Free"}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-2 mt-1 flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-100">Order total</span>
              <span className="font-semibold text-emerald-300">
                ₹{orderTotal}
              </span>
            </div>

            <button
              disabled={!hasItems}
              className={`w-full mt-2 rounded-md py-2.5 text-sm font-medium ${
                hasItems
                  ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }`}
              onClick={() => {
                if (!hasItems) return;
                // navigate using Link style programmatically
                window.location.href = "/checkout";
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          {/* APPLY COUPON (UI only for now) */}
          <div className="border border-slate-800 rounded-2xl bg-slate-900/60 p-4 space-y-2">
            <p className="text-xs font-semibold text-slate-200">Apply Coupon</p>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 outline-none focus:border-amber-400"
                placeholder="Enter coupon code"
              />
              <button
                type="button"
                className="px-3 py-2 text-xs rounded-lg border border-slate-600 text-slate-200 hover:border-amber-400"
              >
                APPLY
              </button>
            </div>
            <p className="text-[10px] text-slate-500">
              Coupon logic is demo-only right now. You can add real rules later.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

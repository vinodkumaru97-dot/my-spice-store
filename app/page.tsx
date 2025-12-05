"use client";

import Link from "next/link";
import CartButton from "../components/CartButton";
import { productCategories } from "../lib/products";
import { useCartStore } from "../store/cart-store";

const categoryImages: Record<string, string> = {
  Spices: "/images/spices-category.jpg",
  Oils: "/images/oils-category.jpg",
  "Paper Cups & Plates": "/images/paper-category.jpg",
};

export default function Home() {
  // Select pieces from store separately (safer)
  const addItem = useCartStore((state) => state.addItem);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);
  const items = useCartStore((state) => state.items);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-900/40" />
            <div>
              <h1 className="font-semibold text-lg tracking-wide">
                <span className="text-amber-400">Swa</span>
                <span className="text-slate-100">Vin</span>
                <span className="text-amber-300"> Foods</span>
              </h1>
              <p className="text-[11px] text-slate-400 tracking-wide">
                Premium Spices • Cold-Pressed Oils • Eco Paperware
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#products" className="hover:text-amber-400">
              Products
            </a>
            <a href="#why" className="hover:text-amber-400">
              Why SwaVin
            </a>
            <a href="#about" className="hover:text-amber-400">
              About
            </a>
            <a href="#contact" className="hover:text-amber-400">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <CartButton />
            <a
              href="#contact"
              className="hidden sm:inline-block text-sm bg-amber-500 text-slate-950 px-4 py-2 rounded-full font-medium hover:bg-amber-400"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-[11px] text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trusted manufacturer for spices, oils & paperware
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Manufacturing quality you can{" "}
              <span className="text-amber-400">see, smell, and serve.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              SwaVin Foods supplies retailers, wholesalers, caterers and brands
              with consistent, food-safe products – from vibrant spice powders
              and cold-pressed edible oils to eco-friendly paper cups & plates.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-full text-sm font-medium"
            >
              Explore product range
            </a>
            <a
              href="#contact"
              className="border border-slate-600 hover:border-amber-400 text-slate-100 px-5 py-2.5 rounded-full text-sm"
            >
              Get wholesale quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs md:text-sm text-slate-300">
            <div>
              <p className="text-amber-300 font-semibold text-base">50+</p>
              <p>Retailers & distributors served</p>
            </div>
            <div>
              <p className="text-amber-300 font-semibold text-base">5+</p>
              <p>Years in manufacturing</p>
            </div>
            <div>
              <p className="text-amber-300 font-semibold text-base">3</p>
              <p>Core product lines</p>
            </div>
            <div>
              <p className="text-amber-300 font-semibold text-base">Pan-India</p>
              <p>Logistics network</p>
            </div>
          </div>
        </div>

        {/* Right visual panel */}
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 overflow-hidden shadow-2xl shadow-black/40">
            <div
              className="h-32 md:h-40 w-full bg-slate-800 bg-center bg-cover"
              style={{ backgroundImage: "url('/images/spices-hero.jpg')" }}
            />
            <div className="p-4 space-y-2">
              <p className="text-xs text-amber-300 uppercase tracking-[0.15em]">
                Spice Powders
              </p>
              <p className="text-sm text-slate-200">
                Turmeric, chilli and more, with uniform grinding and colour
                suitable for both retail and bulk packs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
              <div
                className="h-20 w-full bg-slate-800 bg-center bg-cover"
                style={{ backgroundImage: "url('/images/oils-hero.jpg')" }}
              />
              <div className="p-3 space-y-1">
                <p className="text-[11px] text-emerald-300 uppercase tracking-[0.15em]">
                  Cold-Pressed Oils
                </p>
                <p className="text-[11px] text-slate-200">
                  Groundnut & sesame for everyday kitchens.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden">
              <div
                className="h-20 w-full bg-slate-800 bg-center bg-cover"
                style={{ backgroundImage: "url('/images/paperware-hero.jpg')" }}
              />
              <div className="p-3 space-y-1">
                <p className="text-[11px] text-sky-300 uppercase tracking-[0.15em]">
                  Paper Cups & Plates
                </p>
                <p className="text-[11px] text-slate-200">
                  Food-grade disposables for events & cafés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SWAVIN SECTION */}
      <section
        id="why"
        className="max-w-6xl mx-auto px-4 pb-10 md:pb-14 space-y-6"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              Why businesses choose{" "}
              <span className="text-amber-400">SwaVin Foods</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Designed for B2B – from consistent batches and private labelling to
              reliable dispatch.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-sm">
          <div className="border border-slate-800 rounded-2xl bg-slate-900/70 p-4 space-y-2">
            <p className="text-amber-300 text-xs uppercase tracking-[0.15em]">
              Batch Consistency
            </p>
            <p className="text-slate-100 font-medium">Uniform quality every time</p>
            <p className="text-slate-400 text-xs">
              Controlled sourcing and in-process checks ensure colour, aroma and
              grind remain consistent across batches.
            </p>
          </div>
          <div className="border border-slate-800 rounded-2xl bg-slate-900/70 p-4 space-y-2">
            <p className="text-amber-300 text-xs uppercase tracking-[0.15em]">
              B2B Friendly
            </p>
            <p className="text-slate-100 font-medium">Custom packs & labelling</p>
            <p className="text-slate-400 text-xs">
              Support for multiple pack sizes and private labelling so you can
              sell under your own brand.
            </p>
          </div>
          <div className="border border-slate-800 rounded-2xl bg-slate-900/70 p-4 space-y-2">
            <p className="text-amber-300 text-xs uppercase tracking-[0.15em]">
              Reliable Dispatch
            </p>
            <p className="text-slate-100 font-medium">On-time shipments</p>
            <p className="text-slate-400 text-xs">
              Coordinated dispatch and logistics partners to support repeat and
              contract orders.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        id="products"
        className="max-w-6xl mx-auto px-4 pb-12 md:pb-16 space-y-6"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Product Range</h3>
            <p className="text-sm text-slate-400">
              Explore our core categories. Individual SKUs can be tailored in
              pack size and branding.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {productCategories.map((group) => (
            <div key={group.id} className="space-y-3">
              {/* Category header card */}
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="h-20 md:h-24 w-full md:w-56 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70">
                  <div
                    className="h-full w-full bg-slate-800 bg-center bg-cover"
                    style={{
                      backgroundImage: `url('${
                        categoryImages[group.name] || "/images/spices-hero.jpg"
                      }')`,
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold text-amber-300">
                    {group.name}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 max-w-xl">
                    Carefully selected raw materials and tightly controlled
                    processing for the {group.name.toLowerCase()} line.
                  </p>
                </div>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => {
                  const inCart = items.find((i) => i.id === item.id);
                  const qty = inCart ? inCart.quantity : 0;

                  return (
                    <div
                      key={item.id}
                      className="border border-slate-800/80 bg-slate-900/70 rounded-2xl p-4 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <p className="font-medium text-sm md:text-base">
                          {item.name}
                        </p>
                        <p className="text-xs md:text-sm text-slate-400">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-3 flex items-end justify-between gap-3">
                        <div className="text-sm">
                          <p className="font-semibold text-amber-300">
                            ₹{item.price}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Pack: {item.unit}
                          </p>
                          {qty > 0 && (
                            <p className="text-[11px] text-emerald-300 mt-1">
                              In cart: {qty} pack{qty > 1 ? "s" : ""}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          {qty === 0 ? (
                            <button
                              type="button"
                              onClick={() => addItem(item)}
                              className="text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full px-3 py-1 font-medium"
                            >
                              Add to cart
                            </button>
                          ) : (
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => decrement(item.id)}
                                className="h-7 w-7 rounded-full border border-slate-600 text-slate-100 hover:border-amber-400 text-sm"
                              >
                                -
                              </button>
                              <span className="min-w-[24px] text-center text-sm">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => increment(item.id)}
                                className="h-7 w-7 rounded-full border border-slate-600 text-slate-100 hover:border-amber-400 text-sm"
                              >
                                +
                              </button>
                            </div>
                          )}

                          <Link
                            href={`/product/${item.id}`}
                            className="text-[11px] text-blue-300 hover:text-blue-200"
                          >
                            View details →
                          </Link>
                          <a
                            href="#contact"
                            className="text-[11px] text-amber-300 hover:text-amber-200"
                          >
                            Bulk enquiry
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT + CONTACT + FOOTER (you can keep as before or use my previous version) */}
      {/* ... keep your existing About + Contact + Footer here, or use previous full version ... */}

      <footer className="border-t border-slate-800 py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} SwaVin Foods. All rights reserved.
      </footer>
    </main>
  );
}

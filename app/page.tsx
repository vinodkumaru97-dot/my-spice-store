"use client";

import Link from "next/link";
import CartButton from "../components/CartButton";
import { productCategories } from "../lib/products";
import { useCartStore } from "../store/cart-store";

export default function Home() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-amber-500" />
            <div>
              {/* <h1 className="font-semibold text-lg">Your Brand Name</h1> */}
              <h1 className="font-semibold text-lg tracking-wide">
                <span className="text-amber-400">Swa</span>
                <span className="text-slate-100">Vin</span>
                <span className="text-amber-300"> Foods</span>
              </h1>
              {/*  <p className="text-xs text-slate-400">
                Spices • Oils • Eco Paper Products
              </p> */}
              <p className="text-[11px] text-slate-400 tracking-wide">
                Premium Spices • Cold-Pressed Oils • Eco-Friendly Paperware
              </p>

            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#products" className="hover:text-amber-400">
              Products
            </a>
            <a href="#about" className="hover:text-amber-400">
              About
            </a>
            <a href="#contact" className="hover:text-amber-400">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <CartButton />
            <a
              href="#contact"
              className="text-sm bg-amber-500 text-slate-950 px-4 py-2 rounded-full font-medium hover:bg-amber-400"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400">
            Manufacturer & Supplier
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Pure Spices, Natural Oils & Eco-Friendly Paperware,{" "}
            <span className="text-amber-400">All From One Source.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-300">
            We manufacture high-quality spices, cold-pressed edible oils, and
            food-grade paper cups & plates for retailers, wholesalers and
            businesses across India.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#products"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-full text-sm font-medium"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="border border-slate-600 hover:border-amber-400 text-slate-100 px-5 py-2.5 rounded-full text-sm"
            >
              Get Bulk Quote
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <div>
              <p className="font-semibold text-slate-200">FSSAI Compliant</p>
              <p>Food-grade, hygienic processing</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">Pan-India Supply</p>
              <p>Ideal for traders & stores</p>
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-md">
          <div className="rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-900/30 border border-amber-500/40 p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs text-amber-300 mb-1">Spices</p>
              <p className="font-semibold text-sm mb-2">
                Turmeric, Chilli, Coriander & more
              </p>
            </div>
            <p className="text-[11px] text-slate-200">
              Bright colour, strong aroma and consistent grind size.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-900/30 border border-emerald-500/40 p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs text-emerald-300 mb-1">Oils</p>
              <p className="font-semibold text-sm mb-2">
                Cold-pressed edible oils
              </p>
            </div>
            <p className="text-[11px] text-slate-200">
              Groundnut, sesame & more for homes and commercial kitchens.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-sky-900/30 border border-sky-500/40 p-4 flex flex-col justify-between col-span-2">
            <div>
              <p className="text-xs text-sky-300 mb-1">Paperware</p>
              <p className="font-semibold text-sm mb-2">
                Paper cups & plates for events and food service
              </p>
            </div>
            <p className="text-[11px] text-slate-200">
              Food-safe, disposable, and available in multiple sizes & prints.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="max-w-6xl mx-auto px-4 pb-12 md:pb-16 space-y-6"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Products</h3>
            <p className="text-sm text-slate-400">
              Explore our main product categories. Custom packing and branding
              available.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8">
          {productCategories.map((group) => (
            <div key={group.id} className="space-y-3">
              <h4 className="text-lg font-semibold text-amber-300">
                {group.name}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-slate-800/80 bg-slate-900/60 rounded-2xl p-4 flex flex-col justify-between"
                  >
                    <div>
                      <p className="font-medium text-sm md:text-base">
                        {item.name}
                      </p>
                      <p className="text-xs md:text-sm text-slate-400 mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-sm">
                        <p className="font-semibold text-amber-300">
                          ₹{item.price}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Pack: {item.unit}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <button
                          type="button"
                          onClick={() => addItem(item)}
                          className="text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full px-3 py-1 font-medium"
                        >
                          Add to cart
                        </button>
                        <a
                          href="#contact"
                          className="text-[11px] text-amber-300 hover:text-amber-200"
                        >
                          Bulk enquiry
                        </a>
                        <Link
                          href={`/product/${item.id}`}
                          className="text-[11px] text-blue-300 hover:text-blue-200"
                        >
                          View details →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 pb-12 md:pb-16 grid md:grid-cols-2 gap-8 items-start"
      >
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-semibold">About Us</h3>
          <p className="text-sm md:text-base text-slate-300">
            We are a manufacturing unit focused on delivering consistent quality
            in every batch. From raw material selection to final packing, every
            step is monitored to ensure hygiene, taste and shelf life.
          </p>
          <p className="text-sm md:text-base text-slate-300">
            Whether you are a retailer, distributor, caterer or food brand, we
            can supply in bulk and also support you with private labelling.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="border border-slate-800 rounded-2xl p-4">
            <p className="font-semibold mb-1 text-slate-100">
              Quality Control
            </p>
            <p>
              Batch-wise checks for moisture, aroma, colour and packaging
              integrity.
            </p>
          </div>
          <div className="border border-slate-800 rounded-2xl p-4">
            <p className="font-semibold mb-1 text-slate-100">
              Custom Packaging
            </p>
            <p>
              We support multiple pack sizes suitable for retail and wholesale.
            </p>
          </div>
          <div className="border border-slate-800 rounded-2xl p-4">
            <p className="font-semibold mb-1 text-slate-100">
              Timely Dispatch
            </p>
            <p>On-time dispatch for repeat and contract orders.</p>
          </div>
          <div className="border border-slate-800 rounded-2xl p-4">
            <p className="font-semibold mb-1 text-slate-100">
              Pan-India Network
            </p>
            <p>We work with transport partners across India.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 pb-16 md:pb-20 grid md:grid-cols-2 gap-8"
      >
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-semibold">
            Contact & Enquiry
          </h3>
          <p className="text-sm md:text-base text-slate-300">
            Share your requirements for spices, oils or paper products. We&apos;ll
            respond with pricing, MOQ and delivery details.
          </p>
          <div className="text-sm text-slate-300 space-y-1">
            <p>
              <span className="text-slate-400">Phone:</span> +91-XXXXXXXXXX
            </p>
            <p>
              <span className="text-slate-400">Email:</span>{" "}
              youremail@example.com
            </p>
            <p>
              <span className="text-slate-400">Location:</span> Your City, Your
              State, India
            </p>
          </div>
        </div>
        <form className="border border-slate-800 bg-slate-900/60 rounded-2xl p-5 space-y-4 text-sm">
          <div>
            <label className="block text-slate-300 mb-1">Name</label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm outline-none focus:border-amber-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1">
              Phone / WhatsApp
            </label>
            <input
              type="text"
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm outline-none focus:border-amber-400"
              placeholder="+91-XXXXXXXXXX"
            />
          </div>
          <div>
            <label className="block text-slate-300 mb-1">Requirement</label>
            <textarea
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 text-sm outline-none focus:border-amber-400 min-h-[80px]"
              placeholder="Example: 200kg turmeric powder per month, 1L oil bottles, 200ml paper cups, etc."
            />
          </div>
          <button
            type="button"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium py-2.5 rounded-lg"
          >
            Submit (static form)
          </button>
          <p className="text-[11px] text-slate-400">
            This is a demo static form. For real enquiries, connect via phone or
            email shown on the left.
          </p>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 text-center text-[11px] text-slate-500">
        © {new Date().getFullYear()} SwaVin Foods. All rights reserved.
      </footer>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "../../store/cart-store";

const GST_RATE = 0.05; // 5% GST as example. You can change this to 0.12 or 0.18 etc.

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();

  const [customerName, setCustomerName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [gstin, setGstin] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [note, setNote] = useState("");

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <section className="max-w-4xl mx-auto px-4 py-10 space-y-4">
          <p className="text-sm text-slate-300">
            Your cart is empty. Please add items before checkout.
          </p>
          <Link
            href="/"
            className="inline-block text-sm text-amber-300 hover:text-amber-200"
          >
            ← Back to products
          </Link>
        </section>
      </main>
    );
  }

  // Calculations
  const subtotal = totalPrice; // from cart (before GST)
  const gstAmount = Math.round(subtotal * GST_RATE);
  const grandTotal = subtotal + gstAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This is where you would send data to backend / API in a real app
    console.log("Checkout data:", {
      customerName,
      businessName,
      gstin,
      phone,
      email,
      billingAddress,
      shippingAddress: sameAsBilling ? billingAddress : shippingAddress,
      note,
      items,
      subtotal,
      gstAmount,
      grandTotal,
    });

    alert(
      "Order captured in demo mode.\nIn a real system, this would generate a GST invoice and trigger payment."
    );

    // Optional: clear cart after confirming
    clearCart();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/cart"
            className="text-sm text-slate-300 hover:text-amber-300"
          >
            ← Back to cart
          </Link>
          <p className="text-sm text-slate-400">Checkout & GST Invoice</p>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-[1.1fr,0.9fr] gap-8">
        {/* Left: Checkout form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 border border-slate-800 bg-slate-900/70 rounded-2xl p-5 text-sm"
        >
          <h1 className="text-xl font-semibold mb-1">
            Customer & Billing Details
          </h1>
          <p className="text-xs text-slate-400 mb-2">
            Enter customer and business information for the GST invoice.
          </p>

          {/* Customer section */}
          <div className="space-y-3">
            <div>
              <label className="block text-slate-300 mb-1">
                Customer Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400"
                placeholder="Customer full name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400"
                  placeholder="email@example.com"
                />
              </div>
            </div>
          </div>

          {/* Business / GST section */}
          <div className="border-t border-slate-800 pt-4 mt-2 space-y-3">
            <p className="text-xs text-slate-400">
              If this order is for a registered business, fill GST details for
              proper tax invoice.
            </p>
            <div>
              <label className="block text-slate-300 mb-1">
                Business / Firm Name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400"
                placeholder="Business legal name"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1">GSTIN</label>
              <input
                type="text"
                value={gstin}
                onChange={(e) => setGstin(e.target.value.toUpperCase())}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400 uppercase"
                placeholder="15-digit GSTIN (optional in demo)"
              />
            </div>
          </div>

          {/* Address section */}
          <div className="border-t border-slate-800 pt-4 mt-2 space-y-3">
            <div>
              <label className="block text-slate-300 mb-1">
                Billing Address *
              </label>
              <textarea
                required
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400 min-h-[70px]"
                placeholder="Door no, street, area, city, state, pincode"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <input
                id="same-as-billing"
                type="checkbox"
                checked={sameAsBilling}
                onChange={(e) => {
                  setSameAsBilling(e.target.checked);
                  if (e.target.checked) {
                    setShippingAddress("");
                  }
                }}
                className="h-3 w-3"
              />
              <label htmlFor="same-as-billing">
                Shipping address same as billing
              </label>
            </div>
            {!sameAsBilling && (
              <div>
                <label className="block text-slate-300 mb-1">
                  Shipping Address
                </label>
                <textarea
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400 min-h-[70px]"
                  placeholder="Door no, street, area, city, state, pincode"
                />
              </div>
            )}
          </div>

          {/* Note / special instructions */}
          <div className="border-t border-slate-800 pt-4 mt-2 space-y-3">
            <div>
              <label className="block text-slate-300 mb-1">
                Order note / special instructions
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400 min-h-[60px]"
                placeholder="Example: Please pack turmeric in 1kg pouches, send test report copy, etc."
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400"
            >
              Confirm order (demo) & preview GST invoice
            </button>
            <p className="text-[11px] text-slate-500 mt-1">
              In a production system, this would generate a GST-compliant
              invoice number and redirect to payment.
            </p>
          </div>
        </form>

        {/* Right: Invoice-style summary */}
        <aside className="space-y-4 border border-slate-800 bg-slate-900/70 rounded-2xl p-4 text-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                Invoice Preview
              </p>
              <p className="text-sm font-semibold text-slate-100">
                SwaVin Foods
              </p>
              <p className="text-[11px] text-slate-400">
                Spices • Oils • Paperware
              </p>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <p>Date: {new Date().toLocaleDateString("en-IN")}</p>
              <p>Invoice No: DEMO-{new Date().getTime().toString().slice(-6)}</p>
            </div>
          </div>

          {/* Billed to */}
          <div className="border-t border-slate-800 pt-3">
            <p className="text-xs text-slate-400 mb-1">Billed To:</p>
            <p className="text-sm text-slate-100">
              {businessName || customerName || "Customer Name"}
            </p>
            {gstin && (
              <p className="text-[11px] text-slate-400">GSTIN: {gstin}</p>
            )}
            <p className="text-[11px] text-slate-400">
              {billingAddress || "Billing address will appear here"}
            </p>
          </div>

          {/* Items */}
          <div className="border-t border-slate-800 pt-3 space-y-2 max-h-52 overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-[11px]"
              >
                <div className="max-w-[60%]">
                  <p className="text-slate-100">{item.name}</p>
                  <p className="text-slate-500">
                    Qty: {item.quantity} × ₹{item.price} ({item.unit})
                  </p>
                </div>
                <p className="text-slate-100">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-slate-800 pt-3 space-y-1 text-[13px]">
            <div className="flex items-center justify-between">
              <p className="text-slate-300">Subtotal (before GST)</p>
              <p className="text-slate-100">₹{subtotal}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-slate-300">
                GST @ {(GST_RATE * 100).toFixed(0)}%
              </p>
              <p className="text-amber-300">₹{gstAmount}</p>
            </div>
            <div className="flex items-center justify-between border-t border-slate-800 pt-2 mt-1">
              <p className="font-semibold text-slate-100">Grand Total</p>
              <p className="font-semibold text-emerald-300">₹{grandTotal}</p>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              * This is a demo GST breakup. Final tax rate depends on actual HSN
              code and applicable slab.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

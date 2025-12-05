"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "../../store/cart-store";

const GST_RATE = 0.05; // 5% GST (demo)

export default function CheckoutPage() {
  // Cart store (hook 1)
  const { items, totalPrice, clearCart } = useCartStore();

  // Form state hooks (always called, no early returns)
  const [customerName, setCustomerName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [gstin, setGstin] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  // Price & GST
  const subtotal = totalPrice;
  const gstAmount = Math.round(subtotal * GST_RATE);
  const cgst = Math.round(gstAmount / 2);
  const sgst = gstAmount - cgst;
  const grandTotal = subtotal + gstAmount;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    const shippingFinal = sameAsBilling ? billingAddress : shippingAddress;

    console.log("ORDER DATA", {
      customerName,
      businessName,
      gstin,
      phone,
      email,
      billingAddress,
      shippingAddress: shippingFinal,
      note,
      paymentMethod,
      items,
      subtotal,
      cgst,
      sgst,
      gstAmount,
      grandTotal,
    });

    alert(
      `Demo order placed!\n\nTotal: ₹${grandTotal}\nPayment method: ${paymentMethod}\n\nIn production this would save the order and open a payment gateway.`
    );

    clearCart();
  };

  const cartIsEmpty = items.length === 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* TOP STEP BAR */}
      <header className="border-b border-slate-800 bg-slate-950/95 sticky top-0 z-20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={cartIsEmpty ? "/" : "/cart"}
            className="text-sm text-slate-300 hover:text-amber-300"
          >
            ← {cartIsEmpty ? "Back to products" : "Back to bag"}
          </Link>

          <div className="flex items-center gap-6 text-xs md:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-semibold">
                1
              </div>
              <span className="font-medium text-slate-100">Bag</span>
            </div>
            <div className="h-px w-8 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-semibold">
                2
              </div>
              <span className="font-medium text-slate-100">
                Delivery Details
              </span>
            </div>
            <div className="h-px w-8 bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center text-xs font-semibold">
                3
              </div>
              <span>Payment</span>
            </div>
          </div>
        </div>
      </header>

      {/* If cart empty, show simple message, but hooks above are still called */}
      {cartIsEmpty ? (
        <section className="max-w-5xl mx-auto px-4 py-10 space-y-4">
          <p className="text-sm text-slate-300">
            Your cart is empty. Please add items before checkout.
          </p>
          <Link
            href="/"
            className="inline-block text-sm text-amber-300 hover:text-amber-200"
          >
            Browse products
          </Link>
        </section>
      ) : (
        <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-[1.15fr,0.85fr] gap-8">
          {/* LEFT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-slate-800 bg-slate-900/80 rounded-2xl p-5 text-sm"
          >
            {/* DELIVERY DETAILS */}
            <div className="space-y-3">
              <h1 className="text-lg font-semibold">Delivery details</h1>
              <div>
                <label className="block text-slate-300 mb-1">
                  Customer name *
                </label>
                <input
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">
                  Billing address *
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
                    if (e.target.checked) setShippingAddress("");
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
                    Shipping address
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

            {/* BUSINESS / GST */}
            <div className="border-t border-slate-800 pt-4 space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Business & GST (optional)
              </h2>
              <div>
                <label className="block text-slate-300 mb-1">
                  Business / firm name
                </label>
                <input
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400"
                  placeholder="Business legal name"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-1">GSTIN</label>
                <input
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value.toUpperCase())}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400 uppercase"
                  placeholder="15-digit GSTIN"
                />
              </div>
            </div>

            {/* PAYMENT */}
            <div className="border-t border-slate-800 pt-4 space-y-3">
              <h2 className="text-sm font-semibold text-slate-100">
                Payment method (demo)
              </h2>
              <div className="space-y-2 text-xs text-slate-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "UPI"}
                    onChange={() => setPaymentMethod("UPI")}
                    className="h-3 w-3"
                  />
                  <span>UPI / QR</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "BANK"}
                    onChange={() => setPaymentMethod("BANK")}
                    className="h-3 w-3"
                  />
                  <span>Bank transfer / NEFT</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                    className="h-3 w-3"
                  />
                  <span>Cash on delivery</span>
                </label>
              </div>
            </div>

            {/* NOTE + SUBMIT */}
            <div className="border-t border-slate-800 pt-4 space-y-3">
              <div>
                <label className="block text-slate-300 mb-1">
                  Order note / special instructions
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 outline-none focus:border-amber-400 min-h-[60px]"
                  placeholder="Example: pack turmeric in 1kg pouches, share test report copy, delivery timing, etc."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                Place order (demo)
              </button>
            </div>
          </form>

          {/* RIGHT: GST INVOICE PREVIEW */}
          <aside className="space-y-4 border border-slate-800 bg-slate-900/80 rounded-2xl p-4 text-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                  Invoice Preview
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  SwaVin Foods
                </p>
                <p className="text-[11px] text-slate-400">
                  Spices • Oils • Eco Paperware
                </p>
              </div>
              <div className="text-right text-[11px] text-slate-400">
                <p>Date: {new Date().toLocaleDateString("en-IN")}</p>
                <p>
                  Invoice No: DEMO-
                  {new Date().getTime().toString().slice(-6)}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-3">
              <p className="text-xs text-slate-400 mb-1">Billed to</p>
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

            <div className="border-t border-slate-800 pt-3 space-y-1 text-[13px]">
              <div className="flex items-center justify-between">
                <p className="text-slate-300">Subtotal (before GST)</p>
                <p className="text-slate-100">₹{subtotal}</p>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <p className="text-slate-300">
                  CGST @ {(GST_RATE * 100 / 2).toFixed(1)}%
                </p>
                <p className="text-amber-300">₹{cgst}</p>
              </div>
              <div className="flex items-center justify-between text-[12px]">
                <p className="text-slate-300">
                  SGST @ {(GST_RATE * 100 / 2).toFixed(1)}%
                </p>
                <p className="text-amber-300">₹{sgst}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-slate-300 font-medium">Total GST</p>
                <p className="text-amber-300 font-medium">₹{gstAmount}</p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800 pt-2 mt-1">
                <p className="font-semibold text-slate-100">Grand Total</p>
                <p className="font-semibold text-emerald-300">
                  ₹{grandTotal}
                </p>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                * Demo GST split. Actual tax depends on HSN and state.
              </p>
            </div>

            <div className="border-t border-slate-800 pt-3 text-[12px] space-y-1">
              <p className="text-slate-300">
                Payment method:{" "}
                <span className="font-semibold text-slate-100">
                  {paymentMethod}
                </span>
              </p>
              <p className="text-[11px] text-slate-500">
                This is only a UI preview. Later you can connect a real UPI /
                card / bank payment gateway here.
              </p>
            </div>
          </aside>
        </section>
      )}
    </main>
  );
}

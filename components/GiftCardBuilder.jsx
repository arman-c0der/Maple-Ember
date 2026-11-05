"use client";
import { useState } from "react";

const amounts = [50, 100, 150, 250];
const field = "w-full rounded-sm border border-brass/25 bg-roast px-4 py-3 text-cream placeholder:text-cream/35 focus:border-brass focus:outline-none";

export default function GiftCardBuilder() {
  const [amount, setAmount] = useState(100);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="grid items-start gap-14 lg:grid-cols-2">
      <div>
        <p className="text-sm text-cream/70">Choose an amount</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {amounts.map((a) => (
            <button key={a} onClick={() => setAmount(a)} aria-pressed={amount === a}
              className={`rounded-sm px-6 py-3 font-display text-xl transition ${amount === a ? "bg-brass text-espresso" : "border border-brass/30 hover:border-brass"}`}>${a}</button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipient name" aria-label="Recipient name" className={field} />
          <input type="email" placeholder="Recipient email" aria-label="Recipient email" className={field} />
        </div>
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} maxLength={120} placeholder="Your message (120 characters)" aria-label="Message" className={`${field} mt-4`} />
        <button className="mt-6 rounded-full bg-brass px-8 py-3.5 text-espresso transition hover:bg-brass-soft">Buy a ${amount} gift card</button>
      </div>
      <div className="relative mx-auto aspect-[1.6/1] w-full max-w-md -rotate-2 rounded-xl bg-gradient-to-br from-clay via-bark to-roast p-8 shadow-2xl ring-1 ring-brass/40">
        <p className="font-display text-2xl">Maple <span className="italic text-brass">&amp;</span> Ember</p>
        <p className="mt-6 text-sm text-cream/60">For</p>
        <p className="font-display text-2xl">{name || "Your guest"}</p>
        <p className="mt-2 line-clamp-2 text-sm text-cream/70">{msg}</p>
        <p className="absolute bottom-6 right-8 font-display text-6xl text-brass">${amount}</p>
      </div>
    </div>
  );
}

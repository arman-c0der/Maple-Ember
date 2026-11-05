"use client";
import { useState } from "react";

const field = "mt-2 w-full rounded-sm border border-brass/25 bg-espresso/60 px-4 py-3 text-cream placeholder:text-cream/35 focus:border-brass focus:outline-none";

export default function ReservationForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div role="status" className="py-16 text-center">
        <h3 className="font-display text-3xl text-brass">Request received</h3>
        <p className="mt-3 text-cream/70">We'll confirm your table by email shortly.</p>
        <button onClick={() => setSent(false)} className="mt-8 text-sm underline underline-offset-4">Make another booking</button>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5 text-sm text-cream/70 sm:grid-cols-2">
      <label>Full name<input required placeholder="Your name" className={field} /></label>
      <label>Phone<input required type="tel" placeholder="+880 …" className={field} /></label>
      <label>Email<input required type="email" placeholder="you@email.com" className={field} /></label>
      <label>Guests
        <select defaultValue="2" className={field}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (<option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>))}
        </select>
      </label>
      <label>Date<input required type="date" className={`${field} [color-scheme:dark]`} /></label>
      <label>Time<input required type="time" className={`${field} [color-scheme:dark]`} /></label>
      <label>Occasion
        <select className={field} defaultValue="">
          <option value="">None</option><option>Birthday</option><option>Anniversary</option><option>Business dinner</option><option>Other</option>
        </select>
      </label>
      <label>Seating
        <select className={field} defaultValue="">
          <option value="">No preference</option><option>Near the oven</option><option>Quiet corner</option><option>Bar</option>
        </select>
      </label>
      <label className="sm:col-span-2">Special requests<textarea rows={3} placeholder="Allergies, celebrations…" className={field} /></label>
      <button type="submit" className="rounded-full bg-brass px-8 py-3.5 text-base text-espresso transition hover:bg-brass-soft sm:col-span-2">Request reservation</button>
    </form>
  );
}

"use client";
import { useState } from "react";

const field = "w-full rounded-sm border border-brass/25 bg-roast px-4 py-3 text-cream placeholder:text-cream/35 focus:border-brass focus:outline-none";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <p role="status" className="py-10 text-brass">Message sent. We'll reply within a day.</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4">
      <input required placeholder="Your name" aria-label="Your name" className={field} />
      <input required type="email" placeholder="Your email" aria-label="Your email" className={field} />
      <select aria-label="Subject" defaultValue="General question" className={field}>
        <option>General question</option><option>Private event</option><option>Feedback</option><option>Careers</option>
      </select>
      <textarea required rows={5} placeholder="Your message" aria-label="Your message" className={field} />
      <button type="submit" className="w-fit rounded-full bg-brass px-8 py-3.5 text-espresso transition hover:bg-brass-soft">Send message</button>
    </form>
  );
}

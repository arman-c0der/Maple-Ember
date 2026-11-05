"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { reviews } from "@/data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section className="bg-bark py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading center title="What our guests say" />
        <figure className="mt-14 min-h-[240px]" aria-live="polite">
          <span aria-hidden className="font-display text-7xl leading-none text-brass">“</span>
          <blockquote className="-mt-4 font-display text-2xl leading-relaxed md:text-3xl">{r.quote}</blockquote>
          <figcaption className="mt-8">
            <p aria-label={`${r.rating} out of 5 stars`} className="text-brass">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
            <p className="mt-2">{r.name}</p>
            <p className="text-sm text-cream/55">{r.role}</p>
          </figcaption>
        </figure>
        <div className="mt-10 flex justify-center gap-3">
          {reviews.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Show review ${idx + 1}`} aria-current={i === idx}
              className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-brass" : "w-2.5 bg-cream/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

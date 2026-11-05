"use client";
import { useState } from "react";
import { menu } from "@/data/site";

const tagLabel = { V: "Vegetarian", VG: "Vegan", GF: "Gluten free", S: "Spicy" };

export default function MenuTabs() {
  const tabs = Object.keys(menu);
  const [active, setActive] = useState(tabs[0]);
  return (
    <div>
      <div role="tablist" className="flex flex-wrap justify-center gap-2">
        {tabs.map((t) => (
          <button key={t} role="tab" aria-selected={active === t} onClick={() => setActive(t)}
            className={`rounded-full px-6 py-2.5 text-sm transition ${active === t ? "bg-brass text-espresso" : "border border-brass/30 text-cream/75 hover:border-brass hover:text-brass"}`}>
            {t}
          </button>
        ))}
      </div>
      <ul className="mt-14 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {menu[active].map((item) => (
          <li key={item.name}>
            <div className="flex items-baseline gap-3">
              <h3 className="font-display text-2xl">{item.name}</h3>
              <span className="flex-1 border-b border-dotted border-brass/40" />
              <span className="font-display text-xl text-brass">${item.price}</span>
            </div>
            <p className="mt-1.5 text-sm text-cream/60">{item.desc}</p>
            {item.tags.length > 0 && (
              <p className="mt-2 flex gap-2">
                {item.tags.map((t) => (<span key={t} title={tagLabel[t]} className="rounded-full border border-brass/40 px-2 py-0.5 text-xs text-brass-soft">{t}</span>))}
              </p>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-12 text-center text-sm text-cream/50">V vegetarian · VG vegan · GF gluten free · S spicy. Please tell us about allergies before ordering.</p>
    </div>
  );
}

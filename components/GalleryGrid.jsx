"use client";
import { useEffect, useState } from "react";
import SafeImage from "./SafeImage";
import { gallery } from "@/data/site";

const cats = ["All", ...new Set(gallery.map((g) => g.category))];

export default function GalleryGrid() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const list = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full px-6 py-2.5 text-sm transition ${cat === c ? "bg-brass text-espresso" : "border border-brass/30 text-cream/75 hover:border-brass"}`}>{c}</button>
        ))}
      </div>
      <div className="mt-12 columns-2 gap-3 md:columns-3">
        {list.map((img) => (
          <button key={img.src} onClick={() => setActive(img)} aria-label={`Open photo: ${img.alt}`} className="group mb-3 block w-full overflow-hidden rounded-sm">
            <SafeImage src={img.src} alt={img.alt} className="w-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {active && (
        <div role="dialog" aria-modal="true" onClick={() => setActive(null)} className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-espresso/95 p-6">
          <button className="absolute right-6 top-6 text-3xl" aria-label="Close" onClick={() => setActive(null)}>×</button>
          <SafeImage src={active.src} alt={active.alt} className="max-h-[80vh] max-w-full rounded-sm object-contain" />
          <p className="mt-4 text-cream/70">{active.alt}</p>
        </div>
      )}
    </div>
  );
}

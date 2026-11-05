import { faqs } from "@/data/site";

export default function Faq() {
  return (
    <div className="divide-y divide-brass/20 border-y border-brass/20">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-display text-2xl">
            {f.q}<span className="ml-4 text-brass transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-2xl text-cream/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

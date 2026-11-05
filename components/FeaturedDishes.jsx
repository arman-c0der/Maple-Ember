import Link from "next/link";
import SafeImage from "./SafeImage";
import SectionHeading from "./SectionHeading";
import { featured } from "@/data/site";

export default function FeaturedDishes() {
  return (
    <section className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading center title="From the fire this week" text="Three dishes our regulars order first." />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {featured.map((d) => (
            <li key={d.name} className="group">
              <div className="overflow-hidden rounded-sm">
                <SafeImage src={d.image} alt={d.name} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <span className="font-display text-xl text-brass">${d.price}</span>
              </div>
              <p className="mt-1 text-sm text-cream/60">{d.desc}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <Link href="/menu" className="inline-block rounded-full border border-brass px-8 py-3 text-brass transition hover:bg-brass hover:text-espresso">See the full menu</Link>
        </div>
      </div>
    </section>
  );
}

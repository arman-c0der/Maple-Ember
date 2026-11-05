import Link from "next/link";
import { images, site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Put your video at public/videos/hero.mp4 */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster={images.hero}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/50 to-espresso" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
        <p className="mb-5 text-sm text-brass-soft">{site.tagline} · Open from 5 pm</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl md:text-8xl">
          Cooked over fire,
          <br />
          shared at <span className="italic text-brass">one table</span>.
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream/75">
          Seasonal produce, slow embers and a room that feels like home. Come hungry, stay late.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/reservation" className="rounded-full bg-brass px-8 py-3.5 text-espresso transition hover:bg-brass-soft">Reserve a table</Link>
          <Link href="/menu" className="rounded-full border border-cream/40 px-8 py-3.5 transition hover:border-brass hover:text-brass">View menu</Link>
        </div>
      </div>
    </section>
  );
}

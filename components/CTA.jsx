import Link from "next/link";

export default function CTA({ title, text, href, label }) {
  return (
    <section className="bg-bark py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl text-cream md:text-5xl">{title}</h2>
        {text && <p className="mt-4 text-cream/70">{text}</p>}
        <Link href={href} className="mt-8 inline-block rounded-full bg-brass px-8 py-3.5 text-espresso transition hover:bg-brass-soft">
          {label}
        </Link>
      </div>
    </section>
  );
}

import PageHero from "@/components/PageHero";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { images, team, timeline, values } from "@/data/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About us" text="A kitchen built around fire." image={images.kitchen} />

      <section className="py-24"><div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <SafeImage src={images.interior} alt="Our dining room" className="aspect-[4/5] w-full rounded-sm object-cover" />
        <div>
          <SectionHeading title="Our story" />
          <p className="mt-8 leading-relaxed text-cream/75">Maple &amp; Ember started as a single oven and a short menu. Ten years on, the oven is still the heart of the room. We cook with oak and fruitwood, buy from farms within an hour of the kitchen, and change the menu with every season.</p>
          <p className="mt-4 leading-relaxed text-cream/75">Our team believes a good meal is slow, generous and shared. Pull up a chair.</p>
        </div>
      </div></section>

      <section className="bg-roast py-24"><div className="mx-auto max-w-6xl px-6">
        <SectionHeading center title="What we care about" />
        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {values.map((v) => (<li key={v.title} className="border-t border-brass/40 pt-5"><h3 className="font-display text-2xl">{v.title}</h3><p className="mt-2 text-cream/70">{v.text}</p></li>))}
        </ul>
      </div></section>

      <section className="py-24"><div className="mx-auto max-w-4xl px-6">
        <SectionHeading center title="Ten years of fire" />
        <ol className="mt-14 space-y-10 border-l border-brass/40 pl-8">
          {timeline.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-brass" />
              <p className="font-display text-3xl text-brass">{t.year}</p>
              <h3 className="mt-1 text-lg">{t.title}</h3><p className="mt-1 text-cream/65">{t.text}</p>
            </li>
          ))}
        </ol>
      </div></section>

      <section className="bg-roast py-24"><div className="mx-auto max-w-6xl px-6">
        <SectionHeading center title="The people behind the table" />
        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {team.map((p) => (
            <li key={p.name}>
              <SafeImage src={p.image} alt={p.name} className="aspect-square w-full rounded-sm object-cover" />
              <h3 className="mt-4 font-display text-2xl">{p.name}</h3><p className="text-sm text-cream/60">{p.role}</p>
            </li>
          ))}
        </ul>
      </div></section>

      <Testimonials />
      <CTA title="Come and meet us" href="/reservation" label="Reserve a table" />
    </>
  );
}

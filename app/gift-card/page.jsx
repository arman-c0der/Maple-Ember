import PageHero from "@/components/PageHero";
import GiftCardBuilder from "@/components/GiftCardBuilder";
import SectionHeading from "@/components/SectionHeading";
import { giftSteps, giftTerms, images } from "@/data/site";

export const metadata = { title: "Gift Card" };

export default function GiftCardPage() {
  return (
    <>
      <PageHero title="Gift cards" text="Give someone a table. Delivered by email, valid for 12 months." image={images.table} />
      <section className="py-24"><div className="mx-auto max-w-7xl px-6"><GiftCardBuilder /></div></section>
      <section className="bg-roast py-24"><div className="mx-auto max-w-6xl px-6">
        <SectionHeading center title="How it works" />
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {giftSteps.map((s, i) => (
            <li key={s.title}><span className="font-display text-5xl text-brass">{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3><p className="mt-2 text-cream/70">{s.text}</p></li>
          ))}
        </ol>
      </div></section>
      <section className="py-20"><div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-3xl">Terms</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-cream/70 marker:text-brass">{giftTerms.map((t) => <li key={t}>{t}</li>)}</ul>
      </div></section>
    </>
  );
}

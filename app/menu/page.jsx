import Link from "next/link";
import PageHero from "@/components/PageHero";
import MenuTabs from "@/components/MenuTabs";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { images, tastingMenu } from "@/data/site";

export const metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <>
      <PageHero title="The menu" text="Dishes change with the market. Ask your server about today's specials." image={images.dish} />
      <section className="py-24"><div className="mx-auto max-w-5xl px-6"><MenuTabs /></div></section>

      <section className="bg-roast py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <SafeImage src={images.plated} alt="Dish from the tasting menu" className="aspect-[4/3] w-full rounded-sm object-cover" />
          <div>
            <SectionHeading title={tastingMenu.title} text={tastingMenu.desc} />
            <p className="mt-8 font-display text-5xl text-brass">${tastingMenu.price}<span className="ml-2 text-lg text-cream/60">per person</span></p>
            <p className="mt-2 text-cream/60">Add wine pairing for ${tastingMenu.pairing}.</p>
            <Link href="/reservation" className="mt-8 inline-block rounded-full bg-brass px-8 py-3.5 text-espresso transition hover:bg-brass-soft">Book the tasting menu</Link>
          </div>
        </div>
      </section>
      <CTA title="Hungry yet?" text="Reserve your table for tonight." href="/reservation" label="Reserve a table" />
    </>
  );
}

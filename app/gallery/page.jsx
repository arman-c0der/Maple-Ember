import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import { images } from "@/data/site";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" text="Food, fire and the room where it all happens." image={images.interior} />
      <section className="py-24"><div className="mx-auto max-w-7xl px-6"><GalleryGrid /></div></section>
      <CTA title="See it in person" text="Photos only go so far." href="/reservation" label="Reserve a table" />
    </>
  );
}

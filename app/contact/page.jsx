import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import SectionHeading from "@/components/SectionHeading";
import { images, site } from "@/data/site";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact us" text="Questions, private events or feedback. We reply within a day." image={images.bar} />
      <section className="py-24"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading title="Get in touch" />
          <ul className="mt-10 space-y-6 text-cream/80">
            <li><p className="text-sm text-brass">Address</p>{site.address}</li>
            <li><p className="text-sm text-brass">Phone</p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brass">{site.phone}</a></li>
            <li><p className="text-sm text-brass">Email</p><a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a></li>
            <li><p className="text-sm text-brass">Opening hours</p>{site.hours.map((h) => <span key={h.day} className="block">{h.day}: {h.time}</span>)}</li>
          </ul>
          <div className="mt-10"><ContactForm /></div>
        </div>
        <div>
          <MapEmbed className="h-[460px]" />
          <div className="mt-8 grid gap-6 text-sm text-cream/70 sm:grid-cols-2">
            <div><h3 className="text-brass">Parking</h3><p className="mt-1">Free street parking on Orchard Lane and a paid lot two minutes away.</p></div>
            <div><h3 className="text-brass">Getting here</h3><p className="mt-1">Ten minutes by CNG or rickshaw from Agrabad Commercial Area.</p></div>
          </div>
        </div>
      </div></section>
    </>
  );
}

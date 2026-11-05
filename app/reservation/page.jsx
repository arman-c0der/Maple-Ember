import PageHero from "@/components/PageHero";
import ReservationForm from "@/components/ReservationForm";
import SectionHeading from "@/components/SectionHeading";
import Faq from "@/components/Faq";
import MapEmbed from "@/components/MapEmbed";
import { images, reservationInfo, site } from "@/data/site";

export const metadata = { title: "Reservation" };

export default function ReservationPage() {
  return (
    <>
      <PageHero title="Reserve a table" text="Book online in under a minute, or call us." image={images.dining} />
      <section className="bg-bark py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-5">
          <aside className="lg:col-span-2">
            <h2 className="font-display text-3xl">Opening hours</h2>
            <dl className="mt-6 space-y-4 text-cream/80">
              {site.hours.map((h) => (<div key={h.day}><dt className="text-sm text-brass">{h.day}</dt><dd>{h.time}</dd></div>))}
            </dl>
            <h2 className="mt-12 font-display text-3xl">Before you book</h2>
            <ul className="mt-6 space-y-5">
              {reservationInfo.map((r) => (<li key={r.title}><h3 className="text-brass">{r.title}</h3><p className="mt-1 text-sm text-cream/70">{r.text}</p></li>))}
            </ul>
            <p className="mt-10 text-cream/70">Prefer to talk? Call <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-brass">{site.phone}</a>.</p>
          </aside>
          <div className="rounded-sm border border-brass/20 bg-roast p-8 md:p-10 lg:col-span-3"><ReservationForm /></div>
        </div>
      </section>
      <section className="py-24"><div className="mx-auto max-w-4xl px-6">
        <SectionHeading center title="Common questions" /><div className="mt-12"><Faq /></div>
      </div></section>
      <section className="bg-roast py-24"><div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="How to find us" text={site.address} />
        <MapEmbed className="mt-10 h-[420px]" />
      </div></section>
    </>
  );
}

import { site } from "@/data/site";

export default function InfoBar() {
  return (
    <section className="border-y border-brass/20 bg-roast">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div><h3 className="text-sm text-brass">Address</h3><p className="mt-2 text-cream/80">{site.address}</p></div>
        <div><h3 className="text-sm text-brass">Opening hours</h3>
          {site.hours.map((h) => (<p key={h.day} className="mt-2 text-cream/80">{h.day}: <span className="text-cream/60">{h.time}</span></p>))}
        </div>
        <div><h3 className="text-sm text-brass">Reservations</h3><p className="mt-2 text-cream/80">{site.phone}</p><p className="text-cream/60">{site.email}</p></div>
      </div>
    </section>
  );
}

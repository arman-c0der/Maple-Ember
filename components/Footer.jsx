import Link from "next/link";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-brass/20 bg-espresso pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-2xl">Maple <span className="italic text-brass">&amp;</span> Ember</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/60">{site.tagline}. Seasonal food cooked over oak and shared at one table.</p>
        </div>
        <div>
          <h3 className="text-sm text-brass">Pages</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-brass">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm text-brass">Opening hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {site.hours.map((h) => (
              <li key={h.day}>{h.day}<br /><span className="text-cream/50">{h.time}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm text-brass">Find us</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/70">
            <p>{site.address}</p>
            <p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brass">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-brass">{site.email}</a></p>
          </address>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-brass/15 px-6 pt-6 text-sm text-cream/45 md:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-6">
          {site.social.map((s) => (<a key={s.label} href={s.href} className="hover:text-brass">{s.label}</a>))}
        </div>
      </div>
    </footer>
  );
}

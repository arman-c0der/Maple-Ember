"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const active = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-espresso/95 shadow-[0_1px_0_0_rgba(200,164,106,0.25)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl tracking-wide text-cream">
          Maple <span className="italic text-brass">&amp;</span> Ember
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active(l.href) ? "page" : undefined}
                className={`text-sm transition hover:text-brass ${active(l.href) ? "text-brass" : "text-cream/80"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/reservation"
          className="hidden rounded-full border border-brass px-6 py-2.5 text-sm text-brass transition hover:bg-brass hover:text-espresso lg:inline-block"
        >
          Book a table
        </Link>

        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
          <span className="mt-1.5 block h-0.5 w-6 bg-cream" />
        </button>
      </nav>

      {open && (
        <ul className="border-t border-brass/20 px-6 pb-6 pt-3 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`block py-2.5 ${active(l.href) ? "text-brass" : "text-cream/85"}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

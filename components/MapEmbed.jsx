import { site } from "@/data/site";

export default function MapEmbed({ className = "" }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
  return (
    <div className={`overflow-hidden rounded-sm border border-brass/25 ${className}`}>
      <iframe
        title={`Map showing ${site.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[360px] w-full"
      />
    </div>
  );
}

import { site } from "@/lib/site";

/** Google Maps embed (no API key). Fills its parent; give the parent a height. */
export default function MapEmbed({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-cream-deep ${className}`}>
      <iframe
        title={title}
        src={site.links.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

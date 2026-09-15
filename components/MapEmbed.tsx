import { site } from "@/lib/site";

export default function MapEmbed({ title }: { title: string }) {
  return (
    <div className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-[2px] border border-line bg-cream-deep">
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

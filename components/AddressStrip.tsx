import { site, fullAddress } from "@/lib/site";

export default function AddressStrip() {
  return (
    <div className="bg-wine text-cream text-center font-heading text-[11px] md:text-xs font-medium uppercase tracking-[0.14em] px-4 py-2">
      <span>{fullAddress()}</span>
      <span className="hidden sm:inline" aria-hidden="true">
        {" "}·{" "}
      </span>
      <a href={site.phoneHref} className="block sm:inline hover:underline underline-offset-4">
        {site.phone}
      </a>
    </div>
  );
}

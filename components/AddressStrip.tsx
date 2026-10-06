import { site } from "@/lib/site";

/** Thin burgundy strip above the header: address · phone */
export default function AddressStrip() {
  return (
    <div className="bg-wine px-4 py-[9px] text-center font-heading text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-cream">
      <span>{site.address.street}, {site.address.city}</span>
      <span aria-hidden="true"> · </span>
      <a href={site.phoneHref} className="whitespace-nowrap hover:underline underline-offset-4">
        {site.phone}
      </a>
    </div>
  );
}

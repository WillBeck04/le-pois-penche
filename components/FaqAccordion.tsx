export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <details key={item.q} className="group py-5" open={i === 0}>
          <summary className="flex cursor-pointer items-start justify-between gap-6 font-heading text-base md:text-lg font-semibold uppercase leading-snug text-ink hover:text-wine">
            <span>{item.q}</span>
            <span aria-hidden="true" className="mt-1 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">+</span>
          </summary>
          <p className="mt-3 max-w-3xl text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

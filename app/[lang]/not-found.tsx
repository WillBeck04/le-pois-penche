import Link from "next/link";

export default function NotFound() {
  const btn = "btn rounded-[2px] border-2 border-wine px-[30px] py-[15px] text-ink hover:bg-wine hover:text-cream";
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-8 md:py-32">
      <section className="relative rounded-[20px] border-[3px] border-wine px-6 pt-16 pb-12 text-center outline outline-1 -outline-offset-8 outline-wine">
        <h1 className="absolute inset-x-4 top-0 mx-auto w-fit -translate-y-1/2 bg-cream px-5 text-[clamp(28px,4vw,48px)] text-wine">404</h1>
        <p className="text-ink-soft">Cette page n&apos;existe pas. · This page does not exist.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 font-heading text-xs font-semibold uppercase tracking-[0.18em]">
          <Link href="/fr" className={btn}>Accueil</Link>
          <Link href="/en" className={btn}>Home</Link>
        </div>
      </section>
    </div>
  );
}

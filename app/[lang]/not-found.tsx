import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-4xl text-wine">404</h1>
      <p className="mt-6 text-ink-soft">Cette page n&apos;existe pas. · This page does not exist.</p>
      <div className="mt-10 flex justify-center gap-4 font-heading text-xs font-semibold uppercase tracking-[0.16em]">
        <Link href="/fr" className="border-2 border-wine text-wine rounded-[2px] px-6 py-3 hover:bg-wine hover:text-cream transition-colors">Accueil</Link>
        <Link href="/en" className="border-2 border-wine text-wine rounded-[2px] px-6 py-3 hover:bg-wine hover:text-cream transition-colors">Home</Link>
      </div>
    </section>
  );
}

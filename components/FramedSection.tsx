import type { ReactNode } from "react";

/** The Le Rock "label on frame" device: a heading sitting on a double burgundy rule. */
export default function FramedSection({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`relative rounded-[20px] border-[3px] border-wine outline outline-1 outline-wine -outline-offset-8 px-5 sm:px-8 md:px-12 pt-12 pb-10 ${className}`}>
      <h2 className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-cream px-4 text-center text-lg md:text-2xl text-wine whitespace-nowrap">
        {title}
      </h2>
      {children}
    </section>
  );
}

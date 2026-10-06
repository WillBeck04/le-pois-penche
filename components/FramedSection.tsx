import type { ReactNode } from "react";

/** The Design 1 "label on frame": a heading sitting on a double burgundy rule with rounded corners. */
export default function FramedSection({ title, children, className = "", id }: { title: string; children: ReactNode; className?: string; id?: string }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-32 rounded-[20px] border-[3px] border-wine outline outline-1 outline-wine -outline-offset-8 px-5 sm:px-10 md:px-14 pt-14 pb-10 md:pt-16 md:pb-12 ${className}`}
    >
      <h2 className="absolute inset-x-4 top-0 mx-auto w-fit -translate-y-1/2 bg-cream px-4 md:px-5 text-center text-[22px] md:text-[32px] leading-[1.1] text-wine md:whitespace-nowrap">
        {title}
      </h2>
      {children}
    </section>
  );
}

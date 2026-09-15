import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLang } from "@/lib/routes";
import { buildMetadata } from "@/lib/buildMetadata";
import HomePage from "@/components/pages/HomePage";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata(lang, "home");
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <HomePage lang={lang} />;
}

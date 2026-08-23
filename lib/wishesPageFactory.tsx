import { Metadata } from "next";
import { notFound } from "next/navigation";
import { OCCASION_HUBS } from "@/data/wishesTaxonomy";
import { WishesTemplate } from "@/components/wishes/WishesTemplate";

export function generateWishMetadata(slug: string): Metadata {
  const hub = OCCASION_HUBS.find((h) => h.slug === slug);
  if (!hub) return {};

  return {
    title: `100+ Best ${hub.name} (2026) — Quotes, Messages & WhatsApp Cards`,
    description: hub.description,
    alternates: {
      canonical: `/${hub.slug}`,
    },
    openGraph: {
      title: `100+ Best ${hub.name} — UniToolkit`,
      description: hub.description,
    },
  };
}

export function RenderWishPage(slug: string) {
  const hub = OCCASION_HUBS.find((h) => h.slug === slug);
  if (!hub) notFound();
  return <WishesTemplate hub={hub} />;
}

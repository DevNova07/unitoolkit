import { Metadata } from "next";
import { notFound } from "next/navigation";
import { OCCASION_HUBS } from "@/data/wishesTaxonomy";
import { WishesTemplate } from "@/components/wishes/WishesTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return OCCASION_HUBS.map((hub) => ({
    slug: hub.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
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

export default async function WishPage({ params }: PageProps) {
  const { slug } = await params;
  const hub = OCCASION_HUBS.find((h) => h.slug === slug);

  if (!hub) {
    notFound();
  }

  return <WishesTemplate hub={hub} />;
}

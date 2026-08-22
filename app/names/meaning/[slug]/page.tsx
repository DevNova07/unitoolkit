import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";
import { MEANING_THEMES_LIST, getCategoryCustomization } from "@/data/namesTaxonomy";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MEANING_THEMES_LIST.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = MEANING_THEMES_LIST.find((m) => m.slug === slug);
  if (!theme) {
    return { title: "Meaning Not Found" };
  }

  const custom = getCategoryCustomization(slug);

  return {
    title: custom.metaTitle,
    description: custom.metaDescription,
    alternates: {
      canonical: `/names/meaning/${slug}`,
    },
    openGraph: {
      title: custom.metaTitle,
      description: custom.metaDescription,
      url: `https://unitoolkit.com/names/meaning/${slug}`,
      type: "article",
    },
  };
}

export default async function NameMeaningSubpage({ params }: PageProps) {
  const { slug } = await params;
  const theme = MEANING_THEMES_LIST.find((m) => m.slug === slug);
  if (!theme) {
    notFound();
  }

  const custom = getCategoryCustomization(slug);

  // Find names matching this meaning or theme
  let matchedNames = NAMES_DATA.filter((item) => {
    return (
      item.themes.includes(slug) ||
      item.meaning.toLowerCase().includes(slug.toLowerCase()) ||
      (item.detailedMeaning && item.detailedMeaning.toLowerCase().includes(slug.toLowerCase()))
    );
  });

  const relatedLinks = MEANING_THEMES_LIST.filter((m) => m.slug !== slug)
    .slice(0, 8)
    .map((m) => ({
      label: `${m.emoji} Names Meaning ${m.name}`,
      href: `/names/meaning/${m.slug}`,
    }));

  return (
    <NamesTemplate
      h1={custom.h1}
      badge={custom.badge}
      intro={custom.intro}
      items={matchedNames}
      categoryType="meaning"
      categorySlug={`meaning/${slug}`}
      bannerTitle={custom.bannerTitle}
      bannerSubtitle={custom.bannerSubtitle}
      tipsTitle={custom.tipsTitle}
      tips={custom.tips}
      overviewSections={custom.overviewSections}
      letterHeadingPrefix={custom.letterHeadingPrefix}
      faqs={custom.faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "Names", href: "/names" },
        { label: "Meanings", href: "/names" },
        { label: `Meaning: ${theme.name}` },
      ]}
    />
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";
import { MEANING_THEMES_LIST } from "@/data/namesTaxonomy";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MEANING_THEMES_LIST.map((m) => ({ slug: m.slug }));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const theme = MEANING_THEMES_LIST.find((m) => m.slug === slug);
  if (!theme) {
    return { title: "Meaning Not Found" };
  }

  return {
    title: `Baby Names Meaning ${theme.name} [2026] — Origins & AI Matcher | UniToolkit`,
    description: `Discover beautiful baby boy, girl, and unisex names meaning ${theme.name.toLowerCase()} across global cultures with pronunciations and meanings.`,
    alternates: {
      canonical: `/names/meaning/${slug}`,
    },
  };
}

export default async function NameMeaningSubpage({ params }: PageProps) {
  const { slug } = await params;
  const theme = MEANING_THEMES_LIST.find((m) => m.slug === slug);
  if (!theme) {
    notFound();
  }

  // Find names matching this meaning or theme
  let matchedNames = NAMES_DATA.filter((item) => {
    return (
      item.themes.includes(slug) ||
      item.meaning.toLowerCase().includes(slug.toLowerCase()) ||
      (item.detailedMeaning && item.detailedMeaning.toLowerCase().includes(slug.toLowerCase()))
    );
  });

  if (matchedNames.length < 6) {
    const additional = NAMES_DATA.filter((n) => !matchedNames.some((m) => m.id === n.id)).slice(
      0,
      12 - matchedNames.length
    );
    matchedNames = [...matchedNames, ...additional];
  }

  const faqs = [
    {
      question: `Why choose a baby name meaning ${theme.name.toLowerCase()}?`,
      answer: `Names meaning ${theme.name.toLowerCase()} offer continuous positive spiritual and emotional reinforcement, inspiring virtue and confidence throughout life.`,
    },
    {
      question: `Which cultures have the richest names meaning ${theme.name.toLowerCase()}?`,
      answer: `Sanskrit, Arabic, Hebrew, Greek, and Celtic traditions feature some of the most poetic and enduring names celebrating ${theme.name.toLowerCase()}.`,
    },
  ];

  const relatedLinks = MEANING_THEMES_LIST.filter((m) => m.slug !== slug)
    .slice(0, 8)
    .map((m) => ({
      label: `${m.emoji} Names Meaning ${m.name}`,
      href: `/names/meaning/${m.slug}`,
    }));

  return (
    <NamesTemplate
      h1={`Baby Names Meaning ${theme.name} [2026]`}
      badge={`${theme.emoji} Meaning: ${theme.name}`}
      intro={`Explore beautiful, powerful, and poetic baby names from across the world that celebrate the profound virtue and beauty of ${theme.name.toLowerCase()}.`}
      items={matchedNames}
      categoryType="meaning"
      categorySlug={`meaning/${slug}`}
      faqs={faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "Names", href: "/names" },
        { label: "Meanings", href: "/names" },
        { label: `Meaning: ${theme.name}` },
      ]}
    />
  );
}

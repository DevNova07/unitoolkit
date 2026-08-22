import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

interface PageProps {
  params: Promise<{ letter: string }>;
}

export async function generateStaticParams() {
  return ALPHABET.map((letter) => ({ letter }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { letter } = await params;
  const upper = letter.toUpperCase();
  if (!ALPHABET.includes(letter.toLowerCase())) {
    return { title: "Letter Not Found" };
  }

  return {
    title: `Baby Names Starting with ${upper} [2026] — Meanings & Origins | UniToolkit`,
    description: `Discover top baby boy, girl, and unisex names starting with letter ${upper} with verified meanings, origins, and AI generator.`,
    alternates: {
      canonical: `/names/starting-with/${letter.toLowerCase()}`,
    },
  };
}

export default async function StartingWithLetterPage({ params }: PageProps) {
  const { letter } = await params;
  const upper = letter.toUpperCase();
  if (!ALPHABET.includes(letter.toLowerCase())) {
    notFound();
  }

  let matchedNames = NAMES_DATA.filter(
    (item) => item.startingLetter.toUpperCase() === upper || item.name.toUpperCase().startsWith(upper)
  );

  if (matchedNames.length < 6) {
    const additional = NAMES_DATA.filter((n) => !matchedNames.some((m) => m.id === n.id)).slice(
      0,
      12 - matchedNames.length
    );
    matchedNames = [...matchedNames, ...additional];
  }

  const faqs = [
    {
      question: `What are the most popular names starting with ${upper}?`,
      answer: `Names starting with ${upper} are highly sought after for their strong phonetic opening and cross-cultural versatility.`,
    },
    {
      question: `Can I filter names starting with ${upper} by gender or culture?`,
      answer: `Yes! Use the filter toolbar on this page to narrow down by Boy, Girl, Unisex, or specific origins like Indian, Arabic, or European.`,
    },
  ];

  const relatedLetters = ALPHABET.filter((l) => l !== letter.toLowerCase())
    .slice(0, 8)
    .map((l) => ({
      label: `Names Starting with ${l.toUpperCase()}`,
      href: `/names/starting-with/${l}`,
    }));

  return (
    <NamesTemplate
      h1={`Baby Names Starting with Letter ${upper} [2026]`}
      badge={`🔤 Letter ${upper} Names`}
      intro={`Browse curated baby boy, girl, and unisex names beginning with '${upper}'. Explore cultural origins, phonetic breakdowns, and detailed meanings.`}
      items={matchedNames}
      categoryType="letter"
      categorySlug={`starting-with/${letter.toLowerCase()}`}
      faqs={faqs}
      relatedLinks={relatedLetters}
      breadcrumbs={[
        { label: "Names", href: "/names" },
        { label: "A-Z Discovery", href: "/names" },
        { label: `Letter ${upper}` },
      ]}
    />
  );
}

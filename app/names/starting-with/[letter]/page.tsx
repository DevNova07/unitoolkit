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
    title: `100+ Baby Names Starting with '${upper}' [2026] — Meanings & A–Z Guide | UniToolkit`,
    description: `Discover 100+ unique baby boy, girl, and unisex names starting with letter ${upper} with verified meanings, origins, and 1-tap audio pronunciation.`,
    alternates: {
      canonical: `/names/starting-with/${letter.toLowerCase()}`,
    },
    openGraph: {
      title: `100+ Baby Names Starting with '${upper}' [2026] | UniToolkit`,
      description: `Explore unique baby names beginning with letter ${upper} with verified meanings.`,
      url: `https://unitoolkit.com/names/starting-with/${letter.toLowerCase()}`,
      type: "article",
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

  if (matchedNames.length < 15) {
    const additional = NAMES_DATA.filter((n) => !matchedNames.some((m) => m.id === n.id)).slice(
      0,
      25 - matchedNames.length
    );
    matchedNames = [...matchedNames, ...additional];
  }

  const tips = [
    { title: "Phonetic Initial", desc: `Letter ${upper} provides a crisp, memorable starting sound that pairs well with most global surnames.` },
    { title: "Astrology Harmony", desc: `If your family follows Rashi or Nakshatra syllables, letter ${upper} offers auspicious astrological alignment.` },
    { title: "Syllable Balance", desc: "Choose between short 1–2 syllable names and longer melodic 3-syllable choices." },
    { title: "Spelling Clarity", desc: "Ensure the initial letter spelling is simple and universally recognizable." },
    { title: "Shortlist Test", desc: `Select your 3 favorite ${upper} names and practice saying them in everyday conversation.` },
  ];

  const faqs = [
    {
      question: `What are the most popular baby names starting with ${upper} in 2026?`,
      answer: `Names starting with ${upper} are highly sought after across global cultures for their crisp phonetic opening and timeless resonance.`,
    },
    {
      question: `How to check the pronunciation of names starting with ${upper}?`,
      answer: `Use the built-in speaker button on each name in this list to hear the authentic syllable stress and clear pronunciation.`,
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
      h1={`100+ Baby Names Starting with Letter '${upper}' with Meanings (A to Z) [2026]`}
      badge={`🔤 Letter ${upper} Names`}
      intro={`Browse curated baby boy, girl, and unisex names beginning with '${upper}'. Explore cultural origins, phonetic breakdowns, and verified meanings.`}
      items={matchedNames}
      categoryType="letter"
      categorySlug={`starting-with/${letter.toLowerCase()}`}
      bannerTitle={`Letter ${upper} Baby Names`}
      bannerSubtitle={`A to Z Curated Guide • 2026 Edition`}
      tipsTitle={`How to choose a baby name starting with ${upper} (quick tips)`}
      tips={tips}
      letterHeadingPrefix={`Names starting with`}
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

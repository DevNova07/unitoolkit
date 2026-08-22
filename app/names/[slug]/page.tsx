import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA, NameRecord } from "@/data/namesData";
import {
  CORE_NAME_HUBS,
  ORIGIN_CULTURE_LIST,
  RELIGION_TRADITION_LIST,
  STYLE_PREFERENCE_LIST,
  POPULARITY_LIST,
} from "@/data/namesTaxonomy";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Combine all valid subslugs for SSG
const ALL_CATEGORY_SLUGS = [
  ...CORE_NAME_HUBS.map((c) => c.slug),
  ...ORIGIN_CULTURE_LIST.map((o) => o.slug),
  ...RELIGION_TRADITION_LIST.map((r) => r.slug),
  ...STYLE_PREFERENCE_LIST.map((s) => s.slug),
  ...POPULARITY_LIST.map((p) => p.slug),
];

export async function generateStaticParams() {
  return ALL_CATEGORY_SLUGS.map((slug) => ({ slug }));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!ALL_CATEGORY_SLUGS.includes(slug)) {
    return { title: "Names Category Not Found" };
  }

  const name = capitalize(slug);
  return {
    title: `${name} Names [2026] — Meanings, Origins & AI Styler | UniToolkit`,
    description: `Discover best ${name.toLowerCase()} names with authentic meanings, cultural background, pronunciation guides, and instant AI generator.`,
    alternates: {
      canonical: `/names/${slug}`,
    },
    openGraph: {
      title: `${name} Names with Meanings & Origins | UniToolkit`,
      description: `Best ${name.toLowerCase()} names collection for babies and characters.`,
      url: `https://unitoolkit.com/names/${slug}`,
      type: "article",
    },
  };
}

export default async function NameCategorySubpage({ params }: PageProps) {
  const { slug } = await params;
  if (!ALL_CATEGORY_SLUGS.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);

  // Filter matching names from dataset
  let matchedNames = NAMES_DATA.filter((item) => {
    const s = slug.toLowerCase();
    if (s === "boy" || s === "girl" || s === "unisex") {
      return item.gender === s;
    }
    return (
      item.origin.toLowerCase().includes(s) ||
      (item.religion && item.religion.toLowerCase().includes(s)) ||
      item.style.some((st) => st.toLowerCase().includes(s)) ||
      item.themes.some((th) => th.toLowerCase().includes(s)) ||
      item.culture.toLowerCase().includes(s)
    );
  });

  // Fallback items to ensure page is always content-rich
  if (matchedNames.length < 6) {
    const fallback = NAMES_DATA.filter((n) => !matchedNames.some((m) => m.id === n.id)).slice(
      0,
      12 - matchedNames.length
    );
    matchedNames = [...matchedNames, ...fallback];
  }

  const faqs = [
    {
      question: `What makes a great ${name.toLowerCase()} name?`,
      answer: `A great ${name.toLowerCase()} name combines authentic cultural resonance with easy phonetic pronunciation and an uplifting, positive lifelong meaning.`,
    },
    {
      question: `How do I verify the pronunciation and spelling of ${name.toLowerCase()} names?`,
      answer: `Use our audio pronunciation tool or phonetic breakdown on each card to ensure proper syllable inflection before naming your child.`,
    },
    {
      question: `Can I generate custom ${name.toLowerCase()} names with AI?`,
      answer: `Yes! Launch our free AI Name Generator studio to specify your desired letters, meaning virtues, and sibling combinations.`,
    },
  ];

  const relatedLinks = [
    { label: "👦 Boy Names", href: "/names/boy" },
    { label: "👧 Girl Names", href: "/names/girl" },
    { label: "⚡ Unisex Names", href: "/names/unisex" },
    { label: "🇮🇳 Indian Names", href: "/names/indian" },
    { label: "🌙 Arabic Names", href: "/names/arabic" },
    { label: "👑 Royal Names", href: "/names/royal" },
    { label: "✨ Modern Names", href: "/names/modern" },
    { label: "❤️ Names Meaning Love", href: "/names/meaning/love" },
    { label: "🤖 AI Baby Generator", href: "/ai-baby-name-generator" },
  ];

  return (
    <NamesTemplate
      h1={`Best ${name} Names with Meanings & Origins [2026]`}
      badge={`${name} Collection`}
      intro={`Explore curated ${name.toLowerCase()} names with verified meanings, spiritual heritage, pronunciation guides, and instant AI generator.`}
      items={matchedNames}
      categoryType="general"
      categorySlug={slug}
      faqs={faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[{ label: "Names", href: "/names" }, { label: `${name} Names` }]}
    />
  );
}

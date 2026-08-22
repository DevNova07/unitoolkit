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

const CANONICAL_MAP: Record<string, string> = {
  islamic: "/names/muslim",
  american: "/names/english",
  sanskrit: "/names/indian",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!ALL_CATEGORY_SLUGS.includes(slug)) {
    return { title: "Names Category Not Found" };
  }

  const name = capitalize(slug);
  const canonicalUrl = CANONICAL_MAP[slug] || `/names/${slug}`;

  return {
    title: `100+ Unique ${name} Baby Names With Meanings (A to Z) [2026] | UniToolkit`,
    description: `Discover top ${name.toLowerCase()} baby boy, girl, and unisex names with authentic meanings, pronunciation guides, and instant AI generator.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${name} Names with Meanings (A to Z) | UniToolkit`,
      description: `Explore 100+ unique ${name.toLowerCase()} names with verified meanings.`,
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
    if (s === "muslim" || s === "islamic") {
      return item.religion === "Muslim" || item.origin === "Arabic";
    }
    if (s === "hindu") {
      return item.religion === "Hindu" || item.language === "Sanskrit";
    }
    if (s === "indian") {
      return item.origin === "Indian" || item.culture === "South Asian";
    }
    return (
      item.origin.toLowerCase().includes(s) ||
      (item.religion && item.religion.toLowerCase().includes(s)) ||
      item.style.some((st) => st.toLowerCase().includes(s)) ||
      item.themes.some((th) => th.toLowerCase().includes(s)) ||
      item.culture.toLowerCase().includes(s)
    );
  });

  // Fallback items to ensure page is always content-rich across A-Z
  if (matchedNames.length < 15) {
    const fallback = NAMES_DATA.filter((n) => !matchedNames.some((m) => m.id === n.id)).slice(
      0,
      25 - matchedNames.length
    );
    matchedNames = [...matchedNames, ...fallback];
  }

  const faqs = [
    {
      question: `What makes a great ${name.toLowerCase()} baby name?`,
      answer: `A great ${name.toLowerCase()} name combines authentic cultural resonance with easy phonetic pronunciation and an uplifting, positive lifelong meaning.`,
    },
    {
      question: `How do I verify the pronunciation and spelling of ${name.toLowerCase()} names?`,
      answer: `Use our audio pronunciation tool or phonetic breakdown on each entry to ensure proper syllable inflection before naming your child.`,
    },
    {
      question: `Can I generate custom ${name.toLowerCase()} names with AI?`,
      answer: `Yes! Launch our free AI Baby Name Generator studio to specify your desired letters, meaning virtues, and sibling combinations.`,
    },
  ];

  const relatedLinks = ALL_CATEGORY_SLUGS.filter((s) => s !== slug)
    .slice(0, 10)
    .map((s) => ({
      label: `${capitalize(s)} Names`,
      href: `/names/${s}`,
    }));

  return (
    <NamesTemplate
      h1={`100+ Unique ${name} Baby Names With Meanings (A to Z) [2026]`}
      badge={`✨ ${name} Names Vault`}
      intro={`Explore curated ${name.toLowerCase()} baby boy, girl, and unisex names organized alphabetically from A to Z with verified meanings, origins, and audio pronunciations.`}
      items={matchedNames}
      categoryType="category"
      categorySlug={slug}
      faqs={faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[{ label: "Names", href: "/names" }, { label: `${name} Names` }]}
    />
  );
}

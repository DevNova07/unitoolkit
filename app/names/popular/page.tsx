import { Metadata } from "next";
import { NAMES_DATA } from "@/data/namesData";
import { NamesTemplate } from "@/components/names/NamesTemplate";

export const metadata: Metadata = {
  title: "Most Popular Baby Names [2026] — Global Trends & Rankings | UniToolkit",
  description:
    "Explore the most popular baby names of 2026 across USA, UK, India, Australia, and worldwide with verified meanings and rankings.",
  alternates: {
    canonical: "/names/popular",
  },
  openGraph: {
    title: "Most Popular Baby Names [2026] | UniToolkit",
    description: "Trending and top 100 baby names worldwide with official statistics.",
    url: "https://unitoolkit.com/names/popular",
  },
};

const POPULAR_SLUGS = [
  "boy",
  "girl",
  "unisex",
  "world",
  "india",
  "usa",
  "uk",
  "canada",
  "australia",
  "2026",
];

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function PopularNamesIndexPage() {
  const relatedLinks = POPULAR_SLUGS.map((s) => ({
    label: `Top ${capitalize(s)} Names`,
    href: `/names/popular/${s}`,
  }));

  const faqs = [
    {
      question: "What are the most popular baby names in 2026 globally?",
      answer:
        "Globally, top names include Liam, Noah, Oliver, Aarav, and Zayn for boys, and Olivia, Emma, Sophia, Saanvi, and Mia for girls.",
    },
  ];

  return (
    <NamesTemplate
      h1="Most Popular Baby Names of 2026 (Official Rankings & Trends)"
      badge="📊 Popular Names 2026"
      intro="Browse top trending and most popular baby names across the globe with official birth registry statistics, origins, and verified meanings."
      items={NAMES_DATA.slice(0, 100)}
      categoryType="popularity"
      categorySlug="popular"
      faqs={faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "Names", href: "/names" },
        { label: "Popular Names" },
      ]}
    />
  );
}

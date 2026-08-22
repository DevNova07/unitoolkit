import { Metadata } from "next";
import { NAMES_DATA } from "@/data/namesData";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { CORE_NAME_HUBS, ORIGIN_CULTURE_LIST } from "@/data/namesTaxonomy";

export const metadata: Metadata = {
  title: "100+ Unique Global Baby Names With Meanings (A to Z) [2026] | UniToolkit",
  description:
    "Explore 10,000+ verified baby boy, girl, and unisex names organized alphabetically from A to Z with verified meanings, cultural origins, and pronunciation guides.",
  alternates: {
    canonical: "/names",
  },
  openGraph: {
    title: "100+ Unique Global Baby Names With Meanings (A to Z) [2026] | UniToolkit",
    description:
      "Explore 10,000+ verified baby names with meanings, cultural origins, and pronunciation guides.",
    url: "https://unitoolkit.com/names",
    type: "website",
  },
};

export default function NamesIndexPage() {
  const faqs = [
    {
      question: "What makes a great baby name for 2026?",
      answer:
        "A great name pairs deep cultural and spiritual resonance with clear spelling, positive virtue meanings, and easy pronunciation across global communities.",
    },
    {
      question: "How is this A to Z name guide organized?",
      answer:
        "Every letter from A to Z features verified multicultural entries with concise meanings and 1-tap audio pronunciation assistance.",
    },
    {
      question: "Can I generate custom baby names with AI?",
      answer:
        "Yes! Launch our free AI Baby Name Generator studio to specify your desired origins, themes, and parental name combinations.",
    },
  ];

  const relatedLinks = [
    ...CORE_NAME_HUBS.map((c) => ({ label: c.name, href: `/names/${c.slug}` })),
    ...ORIGIN_CULTURE_LIST.slice(0, 6).map((o) => ({ label: `${o.name} Names`, href: `/names/${o.slug}` })),
  ];

  return (
    <NamesTemplate
      h1="100+ Unique Global Baby Names With Meanings (A to Z) [2026]"
      badge="✨ Global Names Directory"
      intro="Discover verified baby boy, girl, and unisex names organized alphabetically from A to Z with authentic meanings, origins, and instant audio pronunciations."
      items={NAMES_DATA}
      categoryType="core"
      categorySlug="names"
      faqs={faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[{ label: "Names", href: "/names" }]}
    />
  );
}

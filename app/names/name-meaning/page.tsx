import { Metadata } from "next";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";

export const metadata: Metadata = {
  title: "Name Meaning & Etymology Dictionary [2026] | UniToolkit",
  description: "Search the comprehensive name meaning dictionary to discover the origin, history, spiritual roots, and significance of thousands of names.",
  alternates: {
    canonical: "/names/name-meaning",
  },
};

export default function NameMeaningUtilityPage() {
  const faqs = [
    {
      question: "How do I check the exact etymology of a name?",
      answer: "Use our search bar to look up any name. Each entry provides root language derivation (Sanskrit, Arabic, Hebrew, Latin, Greek, Celtic) and cultural context.",
    },
  ];

  return (
    <NamesTemplate
      h1="Comprehensive Name Meaning & Etymology Dictionary [2026]"
      badge="📖 Meaning & Etymology Dictionary"
      intro="Discover the profound spiritual, linguistic, and historical meanings behind names from across the world."
      items={NAMES_DATA}
      categoryType="utility"
      categorySlug="name-meaning"
      faqs={faqs}
      breadcrumbs={[{ label: "Names", href: "/names" }, { label: "Name Meaning Dictionary" }]}
    />
  );
}

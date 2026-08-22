import { Metadata } from "next";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";

export const metadata: Metadata = {
  title: "Name Pronunciation Guide & Audio Phonetics [2026] | UniToolkit",
  description: "Listen to authentic audio pronunciations and phonetic breakdowns for baby names across Indian, Arabic, European, and Asian origins.",
  alternates: {
    canonical: "/names/name-pronunciation",
  },
};

export default function NamePronunciationUtilityPage() {
  const faqs = [
    {
      question: "How does the name pronunciation tool work?",
      answer: "Click the speaker audio icon on any name card to hear the accurate phonetic cadence pronounced with natural speech synthesis.",
    },
  ];

  return (
    <NamesTemplate
      h1="Global Name Pronunciation & Phonetics Guide [2026]"
      badge="🔊 Audio Pronunciation Guide"
      intro="Hear how multicultural names are authentically spoken. Explore phonetic syllable breakdowns to ensure effortless cross-cultural communication."
      items={NAMES_DATA}
      categoryType="utility"
      categorySlug="name-pronunciation"
      faqs={faqs}
      breadcrumbs={[{ label: "Names", href: "/names" }, { label: "Pronunciation Guide" }]}
    />
  );
}

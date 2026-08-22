import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Sibling & Twin Name Matcher — Harmonious Baby Names [2026] | UniToolkit",
  description: "Find matching sibling and twin names that pair melodiously with your older child's name in syllable count and theme.",
  alternates: {
    canonical: "/ai-sibling-name-generator",
  },
};

export default function AISiblingNameGeneratorPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "AI Sibling & Twin Matcher" }]} />
      <AINameStudio
        title="AI Sibling & Twin Name Harmony Matcher"
        description="Enter your existing children's names to discover complementary sibling names that share subtle thematic harmony and cadence."
        defaultPrompt="Sibling names that match with Aarav and Ananya in rhythm and cultural warmth"
      />
    </div>
  );
}

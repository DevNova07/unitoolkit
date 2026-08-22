import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Name Generator — Multi-Cultural & Personalized Names [2026] | UniToolkit",
  description:
    "Free AI Name Generator: Generate personalized, beautiful names based on heritage, letters, gender, and deep philosophical meanings in seconds.",
  alternates: {
    canonical: "/ai-name-generator",
  },
};

export default function AINameGeneratorPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "AI Name Generator" }]} />
      <AINameStudio
        title="Universal AI Name Generator"
        description="Describe any naming concept, cultural blend, or aesthetic theme. Our Grok-powered linguistic engine analyzes phonetic rhythm and historical roots."
      />
    </div>
  );
}

import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Baby Name Generator — Intelligent Newborn Name Matcher [2026] | UniToolkit",
  description:
    "Generate modern, meaningful, and auspicious baby names with our AI Baby Name Generator based on parental heritage, preferred initials, and style.",
  alternates: {
    canonical: "/ai-baby-name-generator",
  },
};

export default function AIBabyNameGeneratorPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "AI Baby Name Generator" }]} />
      <AINameStudio
        title="AI Baby Name Generator & Heritage Matcher"
        description="Craft personalized baby names for your newborn based on both parents' cultural backgrounds, sound rhythm with your surname, and positive virtues."
        defaultPrompt="Modern auspicious baby name with good rhythm, easy pronunciation, and meaningful heritage"
      />
    </div>
  );
}

import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Parent Name Combiner & Dual Heritage Blender [2026] | UniToolkit",
  description: "Combine parents' names or dual family origins into charming, unique modern baby names.",
  alternates: {
    canonical: "/names/name-combiner",
  },
};

export default function NameCombinerUtilityPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "Name Combiner" }]} />
      <AINameStudio
        title="Dual Name & Heritage Combiner"
        description="Blend syllables and phonetic components from both parents' names into melodious, modern baby names."
        defaultPrompt="Combine 'Aryan' and 'Maya' into unique harmonious boy and girl names"
      />
    </div>
  );
}

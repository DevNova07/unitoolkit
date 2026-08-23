import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";

export const metadata: Metadata = {
  title: "AI Name Combiner & Blender — Combine Two Names for Baby [2026] | UniToolkit",
  description: "Combine and blend mom & dad's names or two family heritages into unique, melodious modern baby names with AI.",
  alternates: {
    canonical: "/ai-name-combiner",
  },
};

export default function AINameCombinerPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "AI Name Combiner" }]} />
      <AINameStudio
        title="AI Name Combiner & Dual Heritage Blender"
        description="Blend mother & father names or bridge two different cultural backgrounds into a cohesive, charming modern baby name."
        defaultPrompt="Combine names 'Rohan' and 'Aisha' into creative, melodious boy and girl names"
      />
      <HowToUseGuide
        guideId="ai-name-combiner"
        pageUrl="https://unitoolkit.com/ai-name-combiner"
      />
    </div>
  );
}

import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Name Finder by Description — Natural Language Name Matcher | UniToolkit",
  description: "Find names by describing the exact personality, mood, cultural tone, or fictional world using natural language AI.",
  alternates: {
    canonical: "/ai-name-finder",
  },
};

export default function AINameFinderPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "AI Name Finder" }]} />
      <AINameStudio
        title="AI Name Finder by Description & Vibe"
        description="Describe any character, aesthetic personality, or specific naming criteria in free-form words to find exact linguistic matches."
        defaultPrompt="A charismatic, calm leader with celestial or noble heritage"
      />
    </div>
  );
}

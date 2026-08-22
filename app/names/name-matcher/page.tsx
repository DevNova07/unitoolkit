import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Baby Name Matcher — Find Names Both Parents Love [2026] | UniToolkit",
  description: "Match baby names based on mother and father's mutual cultural preferences, starting initials, and style priorities.",
  alternates: {
    canonical: "/names/name-matcher",
  },
};

export default function NameMatcherUtilityPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "Parent Name Matcher" }]} />
      <AINameStudio
        title="Parent Compatibility & Baby Name Matcher"
        description="Input preferences from both partners (e.g. Partner 1 prefers Modern Indian, Partner 2 prefers Short Nature names) to find common ground."
        defaultPrompt="A modern name that balances Indian cultural roots with a short, minimalist international sound"
      />
    </div>
  );
}

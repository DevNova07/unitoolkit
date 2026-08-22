import { Metadata } from "next";
import { AINameStudio } from "@/components/names/AINameStudio";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "AI Name by Meaning Finder — Reverse Etymology Search | UniToolkit",
  description: "Enter any virtue, nature element, celestial body, or concept to discover matching global names in seconds with AI.",
  alternates: {
    canonical: "/ai-name-by-meaning",
  },
};

export default function AINameByMeaningPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "AI Name by Meaning" }]} />
      <AINameStudio
        title="AI Name by Meaning & Virtue Search"
        description="Type any specific word, feeling, or virtue (e.g., 'morning light', 'peaceful river', 'warrior of truth') to generate matching names."
        defaultPrompt="Names meaning fearless courage, gentle wisdom, and dawn light"
      />
    </div>
  );
}

import { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CategoryGrid } from "@/components/captions/CategoryGrid";
import { CTASection } from "@/components/common/CTASection";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Caption Categories — Browse 18+ Themes & Vibes",
  description:
    "Explore our complete directory of social media caption categories including Attitude, Love, Travel, Gym, Motivation, Funny, Birthday, and more.",
  alternates: {
    canonical: "/categories",
  },
};

export default function CategoriesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ label: "Categories" }]} />

      <div className="space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <Layers className="w-3.5 h-3.5" />
          <span>18+ Curated Themes</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Caption Categories
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
          Browse our hand-curated collections of social media captions categorized by vibe, emotion, event, and aesthetic style.
        </p>
      </div>

      <CategoryGrid />

      <CTASection
        title="Can't find your specific theme?"
        subtitle="Generate unique captions tailored to any custom scenario using our instant AI Caption Generator."
      />
    </div>
  );
}

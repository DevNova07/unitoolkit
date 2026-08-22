import { Metadata } from "next";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "AI Hashtag Finder [2026] — Discover Niche Hashtags | UniToolkit",
  description: "Find low-competition, high-conversion niche hashtags for any industry or social profile.",
  alternates: {
    canonical: "/ai-hashtag-finder",
  },
};

export default function AIHashtagFinderPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="WebApplication"
        title="AI Hashtag Finder"
        description="Discover niche hashtags tailored for creator profiles and business accounts."
        url="https://unitoolkit.com/ai-hashtag-finder"
      />
      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: "AI Hashtag Finder" },
        ]}
      />
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI Hashtag Finder
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Discover low-competition, high-intent niche hashtags tailored to your exact industry.
        </p>
      </header>
      <HashtagGeneratorTool />
      <AuthorBioBox categoryType="Hashtag Analytics" topic="AI Hashtag Finder" />
    </div>
  );
}

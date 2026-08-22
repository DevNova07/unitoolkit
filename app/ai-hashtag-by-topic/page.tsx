import { Metadata } from "next";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "AI Hashtags by Topic [2026] — Niche Topic Generator | UniToolkit",
  description: "Generate targeted hashtag sets by entering any custom topic or keyword.",
  alternates: {
    canonical: "/ai-hashtag-by-topic",
  },
};

export default function AIHashtagByTopicPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="WebApplication"
        title="AI Hashtags by Topic"
        description="Generate 30 custom hashtags by entering any topic or niche."
        url="https://unitoolkit.com/ai-hashtag-by-topic"
      />
      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: "Hashtags by Topic" },
        ]}
      />
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI Hashtags by Topic
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Enter any niche topic to generate a full 30-tag viral ladder set with 1-click copy.
        </p>
      </header>
      <HashtagGeneratorTool />
      <AuthorBioBox categoryType="Hashtag Strategy" topic="Hashtags by Topic" />
    </div>
  );
}

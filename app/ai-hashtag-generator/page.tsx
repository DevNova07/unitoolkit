import { Metadata } from "next";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "AI Hashtag Generator [2026] — Viral Tags for Instagram & TikTok | UniToolkit",
  description: "Generate 30 high-engagement viral hashtags for Instagram, TikTok, Reels, and YouTube in 3 seconds with AI ladder matching.",
  alternates: {
    canonical: "/ai-hashtag-generator",
  },
  openGraph: {
    title: "AI Hashtag Generator Studio | UniToolkit",
    description: "Instant AI hashtag generator with ladder reach targeting for social creators.",
    url: "https://unitoolkit.com/ai-hashtag-generator",
    type: "website",
  },
};

export default function AIHashtagGeneratorPage() {
  const faqs = [
    {
      question: "How does the AI Hashtag Generator select high-performing tags?",
      answer: "The AI analyzes your keyword, niche topic, and target platform to construct a balanced 30-tag ladder containing high-competition viral hooks, medium-competition discovery tags, and low-competition ranking tags."
    },
    {
      question: "Is this AI Hashtag Generator 100% free?",
      answer: "Yes! 100% free with unlimited generation, custom hashtag synthesis, and 1-click clipboard copy without registration."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="WebApplication"
        title="AI Hashtag Generator Studio"
        description="Free AI hashtag generator with tiered ladder reach matching for Instagram, TikTok, and YouTube."
        url="https://unitoolkit.com/ai-hashtag-generator"
      />
      <JsonLdSchema type="FAQPage" faqs={faqs} />

      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: "AI Hashtag Generator" },
        ]}
      />

      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI Hashtag Generator Studio [2026]
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Generate 30 tiered hashtags optimized with the viral ladder strategy to maximize reach on Instagram, TikTok & YouTube.
        </p>
      </header>

      {/* Main Interactive Tool */}
      <HashtagGeneratorTool />

      <FAQSection faqs={faqs} title="AI Hashtag Generator FAQ" />
      <AuthorBioBox categoryType="AI Tools & Social Growth" topic="AI Hashtag Generator Studio" />
    </div>
  );
}

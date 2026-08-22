import { Metadata } from "next";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "AI Instagram Hashtag Generator [2026] — Viral Tags for Reels & Posts | UniToolkit",
  description: "Generate targeted Instagram & Reels hashtags with AI ladder reach matching and 1-click copy.",
  alternates: {
    canonical: "/ai-instagram-hashtag-generator",
  },
};

export default function AIInstagramHashtagGeneratorPage() {
  const faqs = [
    {
      question: "How does Instagram index hashtags in 2026?",
      answer: "Instagram uses AI semantic vision alongside hashtags to index posts into Explore topic buckets and Reels audio feeds."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="WebApplication"
        title="AI Instagram Hashtag Generator"
        description="Free AI hashtag generator tailored for Instagram feeds, Reels, and Explore pages."
        url="https://unitoolkit.com/ai-instagram-hashtag-generator"
      />
      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: "AI Instagram Generator" },
        ]}
      />
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI Instagram Hashtag Generator
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Generate high-performing hashtag sets for Instagram photos, carousels, and viral Reels.
        </p>
      </header>
      <HashtagGeneratorTool />
      <FAQSection faqs={faqs} />
      <AuthorBioBox categoryType="Instagram Growth" topic="Instagram Hashtags" />
    </div>
  );
}

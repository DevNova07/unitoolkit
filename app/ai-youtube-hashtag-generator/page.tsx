import { Metadata } from "next";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "AI YouTube Shorts Hashtag Generator [2026] | UniToolkit",
  description: "Generate high-ranking YouTube and Shorts hashtags for video descriptions and title tags.",
  alternates: {
    canonical: "/ai-youtube-hashtag-generator",
  },
};

export default function AIYouTubeHashtagGeneratorPage() {
  const faqs = [
    {
      question: "How many hashtags should I put in YouTube Shorts descriptions?",
      answer: "YouTube allows up to 15 hashtags, but 3 to 5 hyper-targeted tags in the description or title generate the highest click-through rate."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="WebApplication"
        title="AI YouTube Shorts Hashtag Generator"
        description="Free AI hashtag generator tailored for YouTube video descriptions and Shorts feed."
        url="https://unitoolkit.com/ai-youtube-hashtag-generator"
      />
      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: "AI YouTube Generator" },
        ]}
      />
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI YouTube Shorts Hashtag Generator
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Generate targeted hashtags for YouTube Shorts and video descriptions.
        </p>
      </header>
      <HashtagGeneratorTool />
      <FAQSection faqs={faqs} />
      <AuthorBioBox categoryType="YouTube Growth" topic="YouTube Hashtags" />
    </div>
  );
}

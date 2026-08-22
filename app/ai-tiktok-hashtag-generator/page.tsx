import { Metadata } from "next";
import { HashtagGeneratorTool } from "@/components/tools/HashtagGeneratorTool";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

export const metadata: Metadata = {
  title: "AI TikTok Hashtag Generator [2026] — FYP & Viral Video Tags | UniToolkit",
  description: "Generate high-velocity TikTok and FYP hashtags designed to push videos to the For You Page algorithm.",
  alternates: {
    canonical: "/ai-tiktok-hashtag-generator",
  },
};

export default function AITikTokHashtagGeneratorPage() {
  const faqs = [
    {
      question: "How do hashtags help videos reach the TikTok FYP?",
      answer: "TikTok tests videos against interest communities identified by hashtags before scaling reach to broader FYP feeds."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="WebApplication"
        title="AI TikTok Hashtag Generator"
        description="Free AI hashtag generator tailored for TikTok algorithms and FYP discovery."
        url="https://unitoolkit.com/ai-tiktok-hashtag-generator"
      />
      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: "AI TikTok Generator" },
        ]}
      />
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          AI TikTok Hashtag Generator
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
          Generate viral hashtags crafted for the TikTok FYP algorithm and video discovery.
        </p>
      </header>
      <HashtagGeneratorTool />
      <FAQSection faqs={faqs} />
      <AuthorBioBox categoryType="TikTok Growth" topic="TikTok Hashtags" />
    </div>
  );
}

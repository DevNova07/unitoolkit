import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PlatformGrid } from "@/components/captions/PlatformGrid";
import { CTASection } from "@/components/common/CTASection";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import { Sparkles, Layers, CheckCircle2, ShieldCheck, Zap, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "10 Social Media Platforms Creator Hub [2026] | UniToolkit",
  description:
    "Explore platform-specific captions, viral hashtags, and VIP bios optimized for Instagram, TikTok, YouTube, WhatsApp, Facebook, LinkedIn, X, Threads, Pinterest, and Snapchat.",
  alternates: {
    canonical: "/platforms",
  },
  openGraph: {
    title: "10 Social Media Platforms Creator Hub [2026] | UniToolkit",
    description: "Tailored caption vaults and algorithm guides for 10 major social networks.",
    url: "https://unitoolkit.com/platforms",
    type: "website",
  },
};

const PLATFORMS_FAQS = [
  {
    question: "Why does each social platform require a different caption style?",
    answer:
      "Every platform operates on distinct algorithms and user expectations: Instagram prioritizes visual aesthetic hooks and 3-5 targeted tags, TikTok rewards keyword-rich descriptions for FYP search, LinkedIn values structured career insights with paragraph breaks, and WhatsApp requires short punchy 2-line statuses.",
  },
  {
    question: "How do I format captions with line breaks for Instagram and Facebook?",
    answer:
      "Use our pre-spaced caption lines or VIP Bio Styler. Our system embeds invisible spacing characters that preserve your exact paragraph spacing when pasted into native apps.",
  },
  {
    question: "How many hashtags should I include across different platforms?",
    answer:
      "For Instagram Reels and TikTok, 3 to 5 hyper-targeted niche tags perform best. For YouTube Shorts, use 3 tags in the title/description. For LinkedIn and Facebook, 2 to 3 topic tags maximize indexing without appearing spammy.",
  },
  {
    question: "What is the character ceiling across major social platforms?",
    answer:
      "Instagram captions allow up to 2,200 characters (truncated after ~125), TikTok allows 4,000 characters, X allows 280 characters (standard), LinkedIn allows 3,000 characters, and WhatsApp status allows 700 characters.",
  },
  {
    question: "Are these platform-specific captions free for commercial influencer brand posts?",
    answer:
      "Yes! 100% of the curated lines and AI generator outputs across all 10 platform hubs are completely free to use for both personal creator profiles and agency client work.",
  },
  {
    question: "How do I download visual story quotes for Instagram and Pinterest?",
    answer:
      "Click the image icon on any caption card to open our Visual Quote Studio, choose from 5 aesthetic color themes (Dark Slate, Warm Cream, Nebula Glow, Sunset Gold, Emerald Sage), and download high-res 9:16 or 1:1 image cards in 1-click.",
  },
  {
    question: "How often are the platform algorithms and trending lines updated?",
    answer:
      "Our team of social media strategists audits platform algorithm changes weekly to refresh caption hooks, trending audio pairings, and hashtag ladder structures.",
  },
];

export default function PlatformsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={PLATFORMS_FAQS}
        title="Social Media Platforms Creator Directory — UniToolkit"
        description="Comprehensive guides for Instagram, TikTok, YouTube, and WhatsApp creators."
        url="https://unitoolkit.com/platforms"
      />

      <Breadcrumbs items={[{ label: "Platforms" }]} />

      {/* Hero Intro */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>10 Major Social Networks</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Social Media Platforms Directory
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Each social platform has its own algorithm, character cadence, and audience culture. Browse caption libraries, 30-tag hashtag ladders, and bio stylers crafted specifically for each destination.
        </p>
      </div>

      {/* Master 10 Platform Grid */}
      <PlatformGrid />

      {/* How To Use Guide */}
      <HowToUseGuide
        guideId="platform-explorer"
        categoryName="Multi-Platform Publishing"
        title="How to Cross-Post & Optimize Captions for Every Algorithm"
        pageUrl="https://unitoolkit.com/platforms"
      />

      {/* Topic Cluster Silo Linking */}
      <TopicClusterSiloCloud
        topic="Instagram"
        contentType="captions"
        currentRoute="/platforms"
      />

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Cross-Platform Social Strategy" topic="Platform Mechanics" />

      {/* 7 Structured FAQs */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About Social Media Platforms"
          subtitle="Everything you need to know about algorithm differences, character limits, and posting strategies."
          faqs={PLATFORMS_FAQS}
        />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to craft custom captions for any platform?"
        subtitle="Our AI generator adapts your caption style and structure for Instagram Reels, TikTok hooks, LinkedIn lessons, and WhatsApp statuses."
      />
    </div>
  );
}

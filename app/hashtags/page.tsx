import { Metadata } from "next";
import Link from "next/link";
import { Hash, Sparkles, TrendingUp, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HASHTAG_PLATFORM_HUBS, HASHTAG_NICHE_LIST } from "@/data/hashtagsTaxonomy";

export const metadata: Metadata = {
  title: "Trending Hashtags for Instagram, TikTok & Reels [2026] | UniToolkit",
  description: "Explore the ultimate 2026 directory of trending hashtags across 10 social platforms and 25+ niches with live post count metrics and 1-click copy.",
  alternates: {
    canonical: "/hashtags",
  },
  openGraph: {
    title: "Trending Hashtags Directory | UniToolkit",
    description: "Best hashtags for Instagram, Reels, TikTok, and YouTube with live volume analytics.",
    url: "https://unitoolkit.com/hashtags",
    type: "website",
  },
};

export default function HashtagsMainPage() {
  const faqs = [
    {
      question: "How do I choose the best hashtags for my social media posts in 2026?",
      answer: "Use a strategic mix of 1–2 high-volume broad tags (over 10M posts), 2–3 medium niche tags (100k–1M posts), and 1–2 highly specific community tags to maximize both immediate discovery and steady algorithmic indexing."
    },
    {
      question: "Does Instagram penalize using 30 hashtags?",
      answer: "No, Instagram does not penalize using up to 30 hashtags, but recent algorithm updates prioritize relevance over quantity. Using 3 to 5 hyper-targeted hashtags often yields the cleanest engagement."
    },
    {
      question: "Can I generate custom hashtags with AI on UniToolkit?",
      answer: "Yes! Use our free AI Hashtag Generator studio to describe your photo, video, or niche topic to receive instantly optimized hashtag bundles."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title="Trending Hashtags Directory [2026]"
        description="Comprehensive directory of viral and niche hashtags across Instagram, TikTok, and social media."
        url="https://unitoolkit.com/hashtags"
      />

      <Breadcrumbs items={[{ label: "Hashtags" }]} />

      {/* Hero Header */}
      <header className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-2xs">
          <Hash className="w-3.5 h-3.5" />
          <span>Hashtag Analytics & Copy Hub • 2026 Edition</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          Best Trending Hashtags for Social Media Growth
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Discover verified hashtag sets with live post volume analytics, viral percentage breakdowns, and 1-click clipboard copy across 10 platforms and 25+ creator niches.
        </p>
      </header>

      {/* AI Tool Banner */}
      <div className="p-6 rounded-3xl bg-linear-to-r from-emerald-500/10 via-teal-500/10 to-transparent border border-emerald-200/80 dark:border-emerald-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Need Custom Hashtags for Your Post?</span>
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Describe your photo or video topic to generate 30 high-ranking hashtags instantly.
          </p>
        </div>
        <Link
          href="/ai-hashtag-generator"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
        >
          Launch AI Generator →
        </Link>
      </div>

      {/* 1. 10 Platform Hubs */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Hashtags by Platform
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {HASHTAG_PLATFORM_HUBS.map((platform) => (
            <Link
              key={platform.slug}
              href={`/hashtags/${platform.slug}`}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-all text-left space-y-1 group"
            >
              <div className="text-xs text-zinc-400 font-medium">#{platform.slug}</div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                {platform.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. High-Demand Creator Niches */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Popular Niche Hashtags
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {HASHTAG_NICHE_LIST.map((niche) => (
            <Link
              key={niche.slug}
              href={`/hashtags/${niche.slug}`}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition-all text-left space-y-1 group"
            >
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                #{niche.slug}
              </div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                {niche.name}
              </div>
              <div className="text-xs text-zinc-500">
                {niche.platform}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={faqs} title="Hashtag Strategy FAQ" />

      {/* E-E-A-T Author & Research Review Box */}
      <AuthorBioBox categoryType="Social Media & Hashtag Analytics" topic="Hashtag Strategy & Volume Analytics" />
    </div>
  );
}

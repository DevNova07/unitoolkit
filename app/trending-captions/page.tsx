"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Flame, Copy, ArrowRight, ChevronDown } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CaptionCard } from "@/components/captions/CaptionCard";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { BacklinkWidget } from "@/components/common/BacklinkWidget";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { WhyThisWorksCard } from "@/components/common/WhyThisWorksCard";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import { CTASection } from "@/components/common/CTASection";
import { CAPTIONS_DATA } from "@/data/captionsData";

const TRENDING_CAPTIONS_FAQS = [
  {
    question: "What makes a caption go viral on Instagram Reels and TikTok?",
    answer:
      "A viral caption combines a 3-second visual hook, high emotional resonance (attitude, relatable humor, or deep romance), and a prompt that encourages saves or comment discussions. Saves trigger algorithmic distribution to explore feeds.",
  },
  {
    question: "How often is the trending captions feed updated on UniToolkit?",
    answer:
      "We audit real-time social audio trends, creator meme templates, and viral hashtag performance daily to keep our trending feed completely fresh and algorithm-ready.",
  },
  {
    question: "Should I place hashtags directly in the caption or in the first comment?",
    answer:
      "Official 2026 data shows that placing 3 to 5 targeted hashtags directly at the bottom of the caption text improves post indexing by Instagram's AI recommendation search engine.",
  },
  {
    question: "How do I format multi-line captions so line breaks don't collapse on mobile?",
    answer:
      "All captions on UniToolkit are pre-encoded with invisible spacing characters, guaranteeing that your line breaks and emoji bullet points stay perfectly formatted when pasted into Instagram or TikTok.",
  },
  {
    question: "Can I download trending captions as 9:16 Instagram Story image cards?",
    answer:
      "Yes! Click the visual image button on any card to launch our Visual Quote Studio, select from 5 aesthetic color palettes, and download crisp 1080x1920px story cards.",
  },
  {
    question: "Can I generate unique AI captions based on current viral trends?",
    answer:
      "Yes! Launch our free AI Caption Generator Studio, choose 'Viral' or 'Savage' style, and generate custom trending lines in 3 seconds.",
  },
  {
    question: "Are trending captions free to use for monetized creator channels and brand campaigns?",
    answer:
      "100% yes. All curated lines, status quotes, and AI generator outputs are completely royalty-free for personal, creator, and commercial usage.",
  },
];

export default function TrendingCaptionsPage() {
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const trendingCaptions = CAPTIONS_DATA.filter((c) => (c.likes || 0) > 15000 || c.featured);
  const visibleItems = (trendingCaptions.length >= 50 ? trendingCaptions : CAPTIONS_DATA).slice(0, visibleCount);
  const totalCount = trendingCaptions.length >= 50 ? trendingCaptions.length : CAPTIONS_DATA.length;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={TRENDING_CAPTIONS_FAQS}
        title="Trending Captions 2026 — Viral Social Media Lines | UniToolkit"
        description="Daily updated viral social media captions."
        url="https://unitoolkit.com/trending-captions"
      />

      <Breadcrumbs items={[{ label: "Trending Captions" }]} />

      {/* Hero Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200/60 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-bold shadow-2xs">
          <Flame className="w-3.5 h-3.5 fill-current" />
          <span>Daily Viral Feed • Top 1% Engagement</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Trending Captions [2026]
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The most viral captions, aesthetic quotes, and royal attitude lines taking over Instagram, TikTok, and WhatsApp today. 1-click copy with instant share.
        </p>
      </div>

      {/* 50+ Verified Items Grid with Interleaved Tip Boxes */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-[11px] font-bold text-rose-600 dark:text-rose-400 mb-1">
              <Sparkles className="w-3 h-3" />
              <span>50+ Viral Leaderboard</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              Highest-Engagement Social Captions
            </h2>
          </div>
          <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
            Showing {visibleItems.length} of {totalCount}+ Verified Lines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              <CaptionCard caption={item} />
              {(idx + 1) % 10 === 0 && (
                <WhyThisWorksCard
                  index={idx}
                  category="Trending Viral"
                  platform="all"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {visibleCount < totalCount && (
          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 24, totalCount))}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Load More Lines ({totalCount - visibleCount} Remaining)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* How To Use Guide */}
      <HowToUseGuide
        guideId="caption-selection"
        categoryName="Trending Viral Hooks"
        title="How to Leverage Viral Captions to Boost Reel & FYP Reach"
        pageUrl="https://unitoolkit.com/trending-captions"
      />

      {/* Topic Cluster Silo Cloud */}
      <TopicClusterSiloCloud
        topic="Viral"
        contentType="captions"
        currentRoute="/trending-captions"
      />

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Viral Growth Analytics" topic="Algorithm Engineering" />

      {/* 7 Structured FAQs */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About Trending Captions"
          subtitle="Everything you need to know about viral retention, hashtag placement, and algorithm mechanics."
          faqs={TRENDING_CAPTIONS_FAQS}
        />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to engineer your next viral post?"
        subtitle="Use our free AI studio above to generate custom trending hooks and 30-tag viral ladders."
      />
    </div>
  );
}

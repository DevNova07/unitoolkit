"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Clock, Copy, ArrowRight, ChevronDown, Flame } from "lucide-react";
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

const NEW_CAPTIONS_FAQS = [
  {
    question: "How often are new captions added to UniToolkit?",
    answer:
      "Our editorial team and automated trend sensors add dozens of fresh, verified captions, Hindi couplets, and status lines daily to capture real-time internet slang and viral meme audio trends.",
  },
  {
    question: "How does using fresh, newly trending captions improve post reach?",
    answer:
      "Social media algorithms heavily reward novel phrasing over overused clichés. Fresh captions capture higher dwell time and comment engagement during the crucial first 30 minutes after posting.",
  },
  {
    question: "Can I submit my own original captions and shayari to be featured?",
    answer:
      "Yes! Creators can submit original lines via our Contact form. Submissions are reviewed weekly by our editorial team for quality and cultural relevance.",
  },
  {
    question: "Are new captions optimized for short-form video hooks on Reels & TikTok?",
    answer:
      "Yes. Every newly added line is pre-tested for high punchiness, line-break readability, and curiosity triggers designed to stop fast-scrolling feeds.",
  },
  {
    question: "Can I download these new captions as visual story quote images?",
    answer:
      "Yes! Click the image icon on any caption card to open our Visual Quote Studio, pick your favorite aesthetic color palette, and download high-resolution 9:16 story cards in 1-click.",
  },
  {
    question: "Are newly added captions completely free for commercial creator use?",
    answer:
      "100% yes. All new lines and AI generator outputs are free to copy, modify, and publish on personal profiles or commercial client accounts without attribution.",
  },
  {
    question: "How do I filter new captions by specific mood or platform?",
    answer:
      "Use our top category navigation or search bar to filter by Attitude, Love, Gym, Sad, Hinglish, or specific platforms like Instagram, TikTok, and WhatsApp.",
  },
];

export default function NewCaptionsPage() {
  const [visibleCount, setVisibleCount] = useState<number>(24);
  const newCaptions = [...CAPTIONS_DATA].reverse();
  const visibleItems = newCaptions.slice(0, visibleCount);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={NEW_CAPTIONS_FAQS}
        title="New Captions 2026 — Fresh Daily Arrivals | UniToolkit"
        description="Fresh daily updated captions and status quotes."
        url="https://unitoolkit.com/new-captions"
      />

      <Breadcrumbs items={[{ label: "New Captions" }]} />

      {/* Hero Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-2xs">
          <Clock className="w-3.5 h-3.5 fill-current" />
          <span>Fresh Daily Arrivals • Updated Today</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          New Captions & Viral Status [2026]
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The latest handpicked captions, aesthetic quotes, and attitude lines added to our master database today. 1-click copy with instant WhatsApp share.
        </p>
      </div>

      {/* 50+ Verified Items Grid with Interleaved Tip Boxes */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 mb-1">
              <Sparkles className="w-3 h-3" />
              <span>50+ High-Engagement Vault</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              Fresh Daily Curated Lines
            </h2>
          </div>
          <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
            Showing {visibleItems.length} of {newCaptions.length}+ Verified Lines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleItems.map((item, idx) => (
            <React.Fragment key={item.id}>
              <CaptionCard caption={item} />
              {(idx + 1) % 10 === 0 && (
                <WhyThisWorksCard
                  index={idx}
                  category="Fresh Daily"
                  platform="all"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {visibleCount < newCaptions.length && (
          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 24, newCaptions.length))}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Load More Lines ({newCaptions.length - visibleCount} Remaining)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* How To Use Guide */}
      <HowToUseGuide
        guideId="caption-selection"
        categoryName="Daily Fresh Content"
        title="How to Select & Deploy Fresh Daily Captions for Maximum Reach"
        pageUrl="https://unitoolkit.com/new-captions"
      />

      {/* Topic Cluster Silo Cloud */}
      <TopicClusterSiloCloud
        topic="Trending"
        contentType="captions"
        currentRoute="/new-captions"
      />

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Social Media Freshness" topic="Daily Trend Curation" />

      {/* 7 Structured FAQs */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About New Captions"
          subtitle="Everything you need to know about fresh updates, algorithm triggers, and visual card downloads."
          faqs={NEW_CAPTIONS_FAQS}
        />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Want custom captions tailored to your exact photo?"
        subtitle="Use our free AI studio above to generate unlimited personalized hooks and viral hashtag ladders."
      />
    </div>
  );
}

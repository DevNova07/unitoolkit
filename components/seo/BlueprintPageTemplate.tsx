"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Copy, Layers, BookOpen, Flame, CheckCircle2, ChevronDown } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { BacklinkWidget } from "@/components/common/BacklinkWidget";
import { CaptionCard } from "@/components/captions/CaptionCard";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { WhyThisWorksCard } from "@/components/common/WhyThisWorksCard";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import { MasterSeoPage } from "@/data/masterSeo300Data";
import { CAPTIONS_DATA } from "@/data/captionsData";

interface BlueprintPageTemplateProps {
  page: MasterSeoPage;
  breadcrumbs: { label: string; href?: string }[];
  relatedLinks?: { label: string; href: string }[];
}

export function BlueprintPageTemplate({
  page,
  breadcrumbs,
  relatedLinks = [],
}: BlueprintPageTemplateProps) {
  const [visibleCount, setVisibleCount] = useState<number>(24);

  // Find matching dynamic items from database with intelligent deep fallback (50+ items guarantee)
  let matched = CAPTIONS_DATA.filter((c) => {
    if (page.platform && c.platform !== "all" && c.platform !== page.platform) return false;
    if (page.subCategory) {
      return (
        c.category.toLowerCase().includes(page.subCategory.toLowerCase()) ||
        c.text.toLowerCase().includes(page.subCategory.toLowerCase()) ||
        c.hashtags?.some((h) => h.toLowerCase().includes(page.subCategory!.toLowerCase()))
      );
    }
    return true;
  });

  // If matched items are fewer than 50, blend in relevant popular high-quality items to reach 50+
  if (matched.length < 50) {
    const supplement = CAPTIONS_DATA.filter(
      (c) => !matched.some((m) => m.id === c.id)
    ).slice(0, 50 - matched.length);
    matched = [...matched, ...supplement];
  }

  const dbItems = matched.slice(0, 72);
  const visibleItems = dbItems.slice(0, visibleCount);

  const canonicalUrl = `https://unitoolkit.com${page.route}`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      {/* Schema Markup for Google SEO */}
      <JsonLdSchema
        type="FAQPage"
        faqs={page.faqs}
        title={page.h1}
        description={page.metaDescription}
        url={canonicalUrl}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header with Semantic H1 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{page.badge} • 2026 Collection</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          {page.h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {page.subheading}
        </p>
      </div>

      {/* Quick AI Generator Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-pink-500/10 via-rose-500/10 to-transparent border border-pink-200/80 dark:border-pink-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Need Custom {page.badge} Lines?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Generate unlimited unique variations tailored to your specific photos and videos with our free AI tool.
          </p>
        </div>
        <Link
          href={`/ai-caption-generator?topic=${encodeURIComponent(page.primaryKeyword)}`}
          className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Generate with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Featured Highlighted Samples Section with H2 */}
      {page.sampleItems && page.sampleItems.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                {page.h2s && page.h2s[0] ? page.h2s[0] : `Top ${page.badge} Highlights`}
              </h2>
              <p className="text-xs text-zinc-500 pt-0.5">
                Hand-picked viral lines optimized for social media engagement.
              </p>
            </div>
            <span className="text-xs font-bold text-pink-600 dark:text-pink-400 shrink-0">
              1-Click Copy Ready
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {page.sampleItems.map((sample, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed hover:border-pink-500/50 transition-all flex flex-col justify-between gap-3 shadow-xs"
              >
                <p className="whitespace-pre-line select-all">{sample}</p>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50 text-xs text-zinc-400">
                  <span>#Curated</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(sample)}
                    className="flex items-center gap-1 font-bold text-pink-600 dark:text-pink-400 hover:text-pink-500 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Step-by-Step 'How To Use' System (Google HowTo Schema + Tailored UI) */}
      <HowToUseGuide
        contentType={page.contentType}
        platform={page.platform}
        categoryName={page.badge}
        title={page.h1}
        pageUrl={canonicalUrl}
      />

      {/* 50+ Verified Curated Database Cards with Interleaved Algorithmic Tip Boxes */}
      {dbItems.length > 0 && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                <Sparkles className="w-3 h-3" />
                <span>50+ High-Engagement Vault</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                {page.h2s && page.h2s[2] ? page.h2s[2] : `50+ Curated ${page.badge} Lines`}
              </h2>
            </div>
            <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
              Showing {visibleItems.length} of {dbItems.length} Verified Lines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleItems.map((item, idx) => (
              <React.Fragment key={item.id}>
                <CaptionCard caption={item} />
                {/* Interleaved 'Why This Works' Algorithmic Tip Box every 10 captions */}
                {(idx + 1) % 10 === 0 && (
                  <WhyThisWorksCard
                    index={idx}
                    category={page.badge}
                    platform={page.platform}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Progressive 'Load More' Interaction */}
          {visibleCount < dbItems.length && (
            <div className="pt-4 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 24, dbItems.length))}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Load More Lines ({dbItems.length - visibleCount} Remaining)</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      )}

      {/* Embed & Backlink Widget */}
      <BacklinkWidget
        pageTitle={page.h1}
        canonicalUrl={page.route}
        description={page.metaDescription}
        badge={page.badge}
      />

      {/* Deep Topic Cluster Silo Architecture for Crawl Authority (Pillar 5) */}
      <TopicClusterSiloCloud
        topic={page.subCategory || page.badge}
        contentType={page.contentType}
        platform={page.platform}
        currentRoute={page.route}
      />

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Social Media" topic={page.badge} />

      {/* Structured FAQ Section */}
      <FAQSection faqs={page.faqs} />

      {/* Call to Action */}
      <CTASection />
    </div>
  );
}

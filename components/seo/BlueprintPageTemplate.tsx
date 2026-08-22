"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Copy, Layers, BookOpen, Flame, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { BacklinkWidget } from "@/components/common/BacklinkWidget";
import { CaptionCard } from "@/components/captions/CaptionCard";
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
  // Find matching dynamic items from database if available
  let dbItems = CAPTIONS_DATA.filter((c) => {
    if (page.platform && c.platform !== "all" && c.platform !== page.platform) return false;
    if (page.subCategory) {
      return (
        c.category.toLowerCase().includes(page.subCategory.toLowerCase()) ||
        c.text.toLowerCase().includes(page.subCategory.toLowerCase()) ||
        c.hashtags?.some((h) => h.toLowerCase().includes(page.subCategory!.toLowerCase()))
      );
    }
    return true;
  }).slice(0, 18);

  if (dbItems.length === 0) {
    dbItems = CAPTIONS_DATA.slice(0, 12);
  }

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

      {/* Editorial Masterclass & Engagement Strategy Guide with Platform-Specific Algorithmic Rules (Point 6 & 7) */}
      <section className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6 text-left">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>
              {page.platform
                ? `${page.platform.toUpperCase()} Algorithm Optimization Guide`
                : "Editorial Creator Guide"}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            {page.h2s && page.h2s[1] ? page.h2s[1] : `How to Create High-Converting ${page.badge} Content`}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {page.platform === "instagram"
              ? "Instagram favors Reels and Carousel posts where the first 5 words hook viewers before the '...more' truncation."
              : page.platform === "tiktok"
              ? "TikTok algorithm rewards fast 1-second visual hooks paired with relatable looping captions that boost completion rate."
              : page.platform === "youtube"
              ? "YouTube Shorts and Community posts convert best when the caption creates curiosity for the full video."
              : page.platform === "linkedin"
              ? "LinkedIn prioritizes clear B2B value, career mindset shifts, and clean spacing between paragraphs."
              : page.platform === "whatsapp"
              ? "WhatsApp status viewers read in under 2 seconds; keep lines punchy with authentic emotion."
              : `Publishing great ${page.badge.toLowerCase()} requires pairing compelling words with strong algorithmic hooks.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-2.5">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span>{page.h3s && page.h3s[0] ? page.h3s[0] : "1. The 2-Second Hook"}</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {page.platform === "instagram"
                ? "Put your boldest statement in line 1 before the 'more' button cut-off to maximize Reels dwell time."
                : page.platform === "tiktok"
                ? "Match your caption with on-screen text in the first second to boost FYP algorithm recommendation."
                : page.platform === "linkedin"
                ? "Open with a counter-intuitive industry insight or career lesson to stop the professional feed scroll."
                : "Place the most captivating words in the opening line so mobile viewers immediately pause their feed."}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-2.5">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>{page.h3s && page.h3s[1] ? page.h3s[1] : "2. Emotional Resonance"}</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {page.platform === "whatsapp"
                ? "Use heartfelt Hindi couplets or punchy 2-line attitude statuses that contacts will want to screenshot."
                : page.platform === "threads" || page.platform === "x"
                ? "Write relatable hot-takes or raw self-reflections that prompt instant reposts and quote-tweets."
                : "Deliver genuine attitude, wit, or vulnerability that triggers shares, DMs, and bookmarks."}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-2.5">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{page.h3s && page.h3s[2] ? page.h3s[2] : "3. Clear Call to Action"}</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {page.platform === "youtube"
                ? "Prompt viewers to comment their favorite timestamp or subscribe for weekly shorts."
                : page.platform === "instagram"
                ? "Ask '1 or 2?' or 'Drop a 🔥 if you agree' to multiply comment section activity."
                : "End with a question or relatable opinion to multiply comments and signal strong relevance to the algorithm."}
            </p>
          </div>
        </div>
      </section>

      {/* Database Matched Cards */}
      {dbItems.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              {page.h2s && page.h2s[2] ? page.h2s[2] : `More Curated ${page.badge} Lines`}
            </h2>
            <span className="text-xs text-zinc-500">{dbItems.length} lines available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dbItems.map((item) => (
              <CaptionCard key={item.id} caption={item} />
            ))}
          </div>
        </section>
      )}

      {/* Embed & Backlink Widget */}
      <BacklinkWidget
        pageTitle={page.h1}
        canonicalUrl={page.route}
        description={page.metaDescription}
        badge={page.badge}
      />

      {/* Related Cluster Internal Linking */}
      {relatedLinks.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-pink-500" />
            <span>Explore Related {page.platform ? page.platform.toUpperCase() : "Creator"} Categories</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-pink-500 hover:text-pink-600 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Structured FAQ Section */}
      <FAQSection faqs={page.faqs} />

      {/* Call to Action */}
      <CTASection />
    </div>
  );
}

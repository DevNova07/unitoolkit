"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Compass,
  Copy,
  Check,
  Flame,
  Clock,
  Hash,
  FileText,
  Target,
  Sparkles,
  Zap,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { PlatformInfo } from "@/lib/types";
import { EditorialHero } from "@/components/captions/EditorialHero";
import { PlatformToolsSuite } from "@/components/captions/PlatformToolsSuite";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { PLATFORM_TAXONOMY } from "@/data/platformTaxonomy";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface PlatformPageTemplateProps {
  platform: PlatformInfo;
}

export function PlatformPageTemplate({ platform }: PlatformPageTemplateProps) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const platformDetail = PLATFORM_TAXONOMY[platform.id] || {
    id: platform.id,
    name: platform.name,
    slug: platform.slug,
    route: platform.path,
    cluster: "social",
    badge: platform.badge || "Creator Essential",
    tagline: platform.description,
    description: platform.description,
    count: platform.count,
    color: platform.color,
    gradient: "from-indigo-600 to-purple-600",
    features: [],
    aiTools: [],
    popularTopics: ["Attitude", "Love", "Gym", "Travel", "Aesthetic", "Motivation"],
    specs: {
      charLimit: "Standard Platform Limit",
      optimalLength: "70 – 150 Characters",
      hashtagLimit: "3 – 5 Niche Tags",
      bestHours: "6:00 PM – 9:00 PM",
      hookFormula: "3-Second Bold Statement",
    },
    quickLines: [],
    growthGuide: [],
  };

  const handleCopy = async (text: string, idx: number) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedIdx(idx);
      showToast("Copied to clipboard! 📋");
      setTimeout(() => setCopiedIdx(null), 2000);
    }
  };

  const platformFAQs = [
    {
      question: `What tools are available for ${platform.name}?`,
      answer: `Our ${platform.name} hub includes: 1) ${platform.name} Captions Vault, 2) ${platform.name} Hashtags Hub, 3) ${platform.name} Bio Generator, 4) ${platform.name} Quotes Hub, and 5) Authentic Hindi Shayari with 1-click sharing.`,
    },
    {
      question: `How do I write a high-engagement ${platform.name} caption?`,
      answer: `Start with a compelling 3-second hook or bold statement, keep the key message above the fold before the '...more' button, and include a clear question or call-to-action to maximize comment velocity.`,
    },
    {
      question: `What is the optimal character length for ${platform.name}?`,
      answer: `${platformDetail.specs?.optimalLength || "70 to 150 characters generally achieve the highest organic reach and reader retention."}`,
    },
    {
      question: `Can I copy and share directly to WhatsApp or social media?`,
      answer: `Yes! Every line and curated caption includes 1-click clipboard copy and a direct share button.`,
    },
    {
      question: `Are these ${platform.name} tools and captions 100% free?`,
      answer: `Yes! 100% of the tools and caption databases for ${platform.name} on UniToolkit are completely free with no registration required.`,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 space-y-10 sm:space-y-14 text-left">
      {/* 1. Platform Creator Toolkit Hero */}
      <EditorialHero
        platformName={platform.name}
        badge={`${platform.name} Hub`}
        title={`The Complete ${platform.name} Creator Suite`}
        description={`Access dedicated caption vaults, 120-tag hashtag ladders, profile bios, and quotes tailored for ${platform.name}.`}
        breadcrumbs={[
          { label: "Platforms", href: "/platforms" },
          { label: platform.name },
        ]}
      />

      {/* 2. Platform Core Tool Cards (5 Pillar Cards Grid: Captions, Hashtags, Bios, Quotes, Shayari) */}
      <div id="platform-tools" className="scroll-mt-24">
        <PlatformToolsSuite platformDetail={platformDetail} />
      </div>

      {/* 3. ⚡ Instant 1-Click Trending Lines Vault */}
      {platformDetail.quickLines && platformDetail.quickLines.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-bold shadow-2xs">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Trending for {platform.name}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                Top Trending {platform.name} Lines (1-Click Copy)
              </h2>
            </div>
            <Link
              href={`/captions?platform=${platformDetail.id}`}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All 3.5K+</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {platformDetail.quickLines.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex items-start justify-between gap-3 group"
              >
                <div className="space-y-2 flex-1">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-[10px] font-bold text-zinc-500 uppercase tracking-wide">
                    {item.vibe}
                  </span>
                  <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                    &quot;{item.text}&quot;
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(item.text, idx)}
                  className="shrink-0 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-zinc-700 dark:text-zinc-300 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. 📊 Platform Quick Specs & Algorithm Cheat-Sheet */}
      {platformDetail.specs && (
        <section className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold shadow-2xs">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Algorithm Benchmark</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              {platform.name} Content & Algorithm Cheat-Sheet [2026]
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Verified metrics and formatting rules for maximum reach and organic impressions on {platform.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold">
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Character Limits</span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white">
                {platformDetail.specs.charLimit}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold">
                <Target className="w-4 h-4 text-purple-500" />
                <span>Optimal Length</span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white">
                {platformDetail.specs.optimalLength}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold">
                <Hash className="w-4 h-4 text-emerald-500" />
                <span>Hashtag Strategy</span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white">
                {platformDetail.specs.hashtagLimit}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Peak Posting Hours</span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white">
                {platformDetail.specs.bestHours}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 5. 📖 Platform Growth & Algorithm Guide (Google E-E-A-T) */}
      {platformDetail.growthGuide && platformDetail.growthGuide.length > 0 && (
        <section className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-2xs">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Creator Playbook</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              How to Beat the {platform.name} Algorithm in 2026
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Practical content strategies based on audience retention data and social feed indexing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {platformDetail.growthGuide.map((guide, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-black text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {guide.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. 🏷️ Sub-Niches Topic Explorer */}
      {platformDetail.popularTopics && platformDetail.popularTopics.length > 0 && (
        <section className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-4 text-left">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Compass className="w-4 h-4 text-indigo-500" />
            <span>Explore {platform.name} Niches & Vibes:</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {platformDetail.popularTopics.map((topic) => (
              <Link
                key={topic}
                href={`/categories/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-2xs"
              >
                #{topic}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 7. FAQ Section */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title={`${platform.name} Creator Toolkit FAQ`}
          subtitle={`Everything you need to know about writing, formatting, and styling content for ${platform.name}.`}
          faqs={platformFAQs}
        />
      </section>

      {/* 8. E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType={`${platform.name} Social Media Growth`} topic={`${platform.name} Content`} />

      {/* JSON-LD Schema for Google Search Rich Snippets */}
      <JsonLdSchema type="FAQPage" faqs={platformFAQs} />
      <JsonLdSchema
        type="Breadcrumbs"
        breadcrumbs={[
          { name: "Home", item: "https://unitoolkit.com" },
          { name: "Platforms", item: "https://unitoolkit.com/platforms" },
          { name: `${platform.name} Hub`, item: `https://unitoolkit.com/${platform.id}-captions` },
        ]}
      />

      {/* 9. CTA Section */}
      <CTASection />
    </div>
  );
}

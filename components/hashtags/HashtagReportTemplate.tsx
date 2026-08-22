"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Camera,
  Edit3,
  Heart,
  MessageSquare,
  Check,
  Copy,
  Clock,
  Flame,
  Zap,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HashtagTopicData } from "@/data/hashtagsTaxonomy";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface HashtagReportTemplateProps {
  data: HashtagTopicData;
  relatedSlugs?: string[];
}

type CopyCount = 5 | 10 | 30;
type CopyFormat = "space" | "comma" | "dots" | "nohash";

export function HashtagReportTemplate({ data, relatedSlugs = [] }: HashtagReportTemplateProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [tagCount, setTagCount] = useState<CopyCount>(30);
  const [formatMode, setFormatMode] = useState<CopyFormat>("space");

  // Format Helper
  const formatTags = (tags: string[], count: CopyCount, format: CopyFormat): string => {
    const slice = tags.slice(0, count);
    if (format === "nohash") {
      return slice.map((t) => t.replace(/^#/, "")).join(" ");
    }
    if (format === "comma") {
      return slice.map((t) => t.replace(/^#/, "")).join(", ");
    }
    if (format === "dots") {
      return `.\n.\n.\n${slice.join(" ")}`;
    }
    return slice.join(" ");
  };

  const handleCopy = async (tags: string[], sectionId: string) => {
    const textToCopy = formatTags(tags, tagCount, formatMode);
    const ok = await copyToClipboard(textToCopy);
    if (ok) {
      setCopiedSection(sectionId);
      showToast(`Copied ${tagCount} hashtags to clipboard! 📋`);
      setTimeout(() => setCopiedSection(null), 2000);
    }
  };

  const handleCopyText = async (text: string, sectionId: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedSection(sectionId);
      showToast("Copied caption to clipboard! ✨");
      setTimeout(() => setCopiedSection(null), 2000);
    }
  };

  const compactText = data.compactSet.join(" ");

  return (
    <article className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={data.faqs}
        title={data.h1}
        description={data.metaDescription}
        url={`https://unitoolkit.com/hashtags/${data.slug}`}
      />

      <Breadcrumbs
        items={[
          { label: "Hashtags", href: "/hashtags" },
          { label: `#${data.slug}` },
        ]}
      />

      {/* 1. Header (Exact Match to Image 1 + Competition & Time Signals) */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
            120+ Curated Hashtags • 4 Tiers
          </span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold">
            Difficulty: <strong>{data.difficulty}</strong>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
          BEST #{data.name.toUpperCase()} HASHTAGS
        </h1>

        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          #{data.slug} - <strong>{data.recentUses}</strong> uses in the last 7 days
        </p>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Grow your {data.platform.toLowerCase()} using the most popular <strong>{data.slug}</strong> hashtags across 4 competition tiers.
        </p>
      </header>

      {/* 🕒 Best Posting Times Card */}
      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white">
          <Clock className="w-4 h-4 text-emerald-600" />
          <span>Best Times to Post with #{data.slug} (Peak Algorithmic Reach)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-zinc-600 dark:text-zinc-400 pt-1">
          <div className="p-2 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <span className="font-bold text-zinc-900 dark:text-zinc-200">📸 Instagram:</span>
            <p className="text-[11px] text-zinc-500 mt-0.5">{data.bestTime.instagram}</p>
          </div>
          <div className="p-2 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <span className="font-bold text-zinc-900 dark:text-zinc-200">🎵 TikTok:</span>
            <p className="text-[11px] text-zinc-500 mt-0.5">{data.bestTime.tiktok}</p>
          </div>
          <div className="p-2 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <span className="font-bold text-zinc-900 dark:text-zinc-200">▶️ YouTube:</span>
            <p className="text-[11px] text-zinc-500 mt-0.5">{data.bestTime.youtube}</p>
          </div>
        </div>
      </div>

      {/* ⚡ Quick Interactive Controls (Tag Count & Format Switcher) */}
      <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          {/* Tag Count Selector */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-700 dark:text-zinc-300">Copy Count:</span>
            <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-800 p-0.5 bg-zinc-50 dark:bg-zinc-900">
              <button
                type="button"
                onClick={() => setTagCount(5)}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                  tagCount === 5 ? "bg-emerald-600 text-white shadow-xs" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                Top 5 (IG Pick)
              </button>
              <button
                type="button"
                onClick={() => setTagCount(10)}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                  tagCount === 10 ? "bg-emerald-600 text-white shadow-xs" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                Top 10 (Reels)
              </button>
              <button
                type="button"
                onClick={() => setTagCount(30)}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                  tagCount === 30 ? "bg-emerald-600 text-white shadow-xs" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                All 30
              </button>
            </div>
          </div>

          {/* Format Switcher */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-700 dark:text-zinc-300">Format:</span>
            <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-800 p-0.5 bg-zinc-50 dark:bg-zinc-900">
              <button
                type="button"
                onClick={() => setFormatMode("space")}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                  formatMode === "space" ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                #tag
              </button>
              <button
                type="button"
                onClick={() => setFormatMode("comma")}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                  formatMode === "comma" ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                }`}
                title="Comma separated for YouTube Tags"
              >
                tag,
              </button>
              <button
                type="button"
                onClick={() => setFormatMode("dots")}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                  formatMode === "dots" ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                }`}
                title="Line dots before tags"
              >
                Dots
              </button>
              <button
                type="button"
                onClick={() => setFormatMode("nohash")}
                className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                  formatMode === "nohash" ? "bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                tag
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SET 1: Mega Viral & High Reach (Exact Match to Image 1) */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
            <span>Tier 1: Mega Viral & Global Reach (50M+ Posts)</span>
          </div>
          <span className="text-[11px] text-zinc-400">Explore Page Surge</span>
        </div>

        <button
          type="button"
          onClick={() => handleCopy(data.megaSet, "mega")}
          className="px-4 py-1.5 rounded-sm bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {copiedSection === "mega" ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied ({tagCount})</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Mega Set ({tagCount})</span>
            </>
          )}
        </button>

        <div className="p-4 sm:p-5 rounded-sm bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal select-all">
          {formatTags(data.megaSet, tagCount, formatMode)}
        </div>
      </section>

      {/* 3. SET 2: High Popularity (Exact Match to Image 1) */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
            <span>Tier 2: Second Most Liked Hashtags (5M–20M Posts)</span>
          </h2>
          <span className="text-[11px] text-zinc-400">Feed Impressions</span>
        </div>

        <button
          type="button"
          onClick={() => handleCopy(data.popularSet, "popular")}
          className="px-4 py-1.5 rounded-sm bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {copiedSection === "popular" ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied ({tagCount})</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Popular Set ({tagCount})</span>
            </>
          )}
        </button>

        <div className="p-4 sm:p-5 rounded-sm bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal select-all">
          {formatTags(data.popularSet, tagCount, formatMode)}
        </div>

        <p className="text-xs sm:text-sm text-zinc-500 pt-1">
          Use one of these sets of hashtags in your next post and you&apos;ll see a big boost.
        </p>
      </section>

      {/* 4. SET 3: Medium Niche Competition (Best for 1k-10k Creators to Rank) */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Tier 3: Medium Niche Competition (500K–2M Posts)</span>
          </h3>
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
            ⭐ Recommended for Top Posts Tab
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleCopy(data.mediumSet, "medium")}
          className="px-4 py-1.5 rounded-sm bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {copiedSection === "medium" ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied ({tagCount})</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Medium Set ({tagCount})</span>
            </>
          )}
        </button>

        <div className="p-4 sm:p-5 rounded-sm bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal select-all">
          {formatTags(data.mediumSet, tagCount, formatMode)}
        </div>
      </section>

      {/* 5. SET 4: Low Competition / Micro Niche (Instant Ranking) */}
      <section className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            <span>Tier 4: Low Competition / Fast Rank (50K–200K Posts)</span>
          </h3>
          <span className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
            🚀 Instant Search Discovery
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleCopy(data.nicheSet, "niche")}
          className="px-4 py-1.5 rounded-sm bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {copiedSection === "niche" ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied ({tagCount})</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Niche Set ({tagCount})</span>
            </>
          )}
        </button>

        <div className="p-4 sm:p-5 rounded-sm bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal select-all">
          {formatTags(data.nicheSet, tagCount, formatMode)}
        </div>
      </section>

      {/* 6. Hashtag Report Metrics (Exact visual match to Image 2) */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          Hashtag report
        </h2>

        <div className="space-y-3">
          {/* Metric 1: Post count */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-[#546e7a] dark:bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Camera className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Post using this hashtag: <strong className="text-zinc-900 dark:text-white">{data.reportMetrics.totalPosts}</strong>
              </div>
              <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#7cb342] w-[85%]" />
              </div>
            </div>
          </div>

          {/* Metric 2: Posts per hour */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-[#546e7a] dark:bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Edit3 className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Posts per hour: <strong className="text-zinc-900 dark:text-white">{data.reportMetrics.postsPerHour}</strong>
              </div>
              <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#7cb342] w-[65%]" />
              </div>
            </div>
          </div>

          {/* Metric 3: Average likes */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-[#546e7a] dark:bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Average likes per post: <strong className="text-zinc-900 dark:text-white">{data.reportMetrics.avgLikes}</strong>
              </div>
              <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#7cb342] w-[70%]" />
              </div>
            </div>
          </div>

          {/* Metric 4: Average comments */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xs bg-[#546e7a] dark:bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-xs">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Average comments per post: <strong className="text-zinc-900 dark:text-white">{data.reportMetrics.avgComments}</strong>
              </div>
              <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#7cb342] w-[45%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TOP 10 VIRAL HASHTAGS (Exact visual match to Image 3) */}
      <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <header className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
            TOP 10 VIRAL HASHTAGS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Best viral hashtags popular on Instagram, Twitter, Facebook, TikTok:
          </p>
        </header>

        <div className="space-y-3 pt-2">
          {data.viralPercentages.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                <span>{item.hashtag}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#7cb342] rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(item.percentage, 4)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Popular Hashtags Table & Context (Exact visual match to Image 4) */}
      <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <header className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Popular hashtags
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Related hashtags to {data.slug} that have the most posts we could find. Trending hashtags for #{data.slug}.
          </p>
        </header>

        <div className="space-y-2">
          <button
            type="button"
            onClick={() => handleCopy(data.compactSet, "compact")}
            className="px-4 py-1.5 rounded-sm bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copiedSection === "compact" ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>

          <div className="p-4 rounded-sm bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 font-mono select-all">
            {compactText}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2">
          Popular hashtags related to #{data.slug} are the most widely used Instagram hashtags connected to this topic. These hashtags usually have the highest post volume, making them the best choice for reaching a broad audience and improving visibility on Instagram. For best results, combine these high-volume hashtags with niche and medium difficulty hashtags to keep your hashtag strategy balanced and effective.
        </p>

        {/* Top 10 Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 font-bold">
                <th className="py-2.5 px-2 w-10">#</th>
                <th className="py-2.5 px-3">Hashtag</th>
                <th className="py-2.5 px-3 text-right">Instagram Posts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900 font-medium">
              {data.popularTable.map((row) => (
                <tr key={row.rank} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="py-2 px-2 text-zinc-400">{row.rank}</td>
                  <td className="py-2 px-3 text-[#7cb342] font-semibold hover:underline">
                    <Link href={`/hashtags/${row.hashtag.replace("#", "")}`}>
                      {row.hashtag}
                    </Link>
                  </td>
                  <td className="py-2 px-3 text-right text-zinc-700 dark:text-zinc-300">
                    {row.posts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Matched Viral Captions for this Hashtag */}
      {data.matchedCaptions && data.matchedCaptions.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <header className="space-y-1">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Matched Captions for #{data.slug} Posts</span>
            </h3>
            <p className="text-xs text-zinc-500">
              Pair your hashtags with these high-converting 1-line captions for instant engagement.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.matchedCaptions.map((cap, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 group"
              >
                <div className="space-y-1 text-xs">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{cap.category}</span>
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{cap.text}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyText(cap.text, `caption-${idx}`)}
                  className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 transition-colors shrink-0 cursor-pointer"
                  title="Copy Caption"
                >
                  {copiedSection === `caption-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 10. FAQs */}
      <FAQSection faqs={data.faqs} title={`Frequently Asked Questions`} />

      {/* 11. E-E-A-T Author & Research Review Box */}
      <AuthorBioBox categoryType="Hashtag Analytics & Growth" topic={`#${data.slug} Hashtags`} />

      {/* 12. Related Hashtag Topics */}
      {relatedSlugs.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white">
            Explore More Trending Hashtags
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/hashtags/${slug}`}
                className="px-3 py-1 rounded-sm bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                #{slug}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

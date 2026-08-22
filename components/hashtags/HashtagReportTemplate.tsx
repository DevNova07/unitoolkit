"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, Edit3, Heart, MessageSquare, Check, Copy } from "lucide-react";
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

export function HashtagReportTemplate({ data, relatedSlugs = [] }: HashtagReportTemplateProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = async (text: string, sectionId: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedSection(sectionId);
      showToast("Copied hashtags to clipboard! 📋");
      setTimeout(() => setCopiedSection(null), 2000);
    }
  };

  const primaryText = data.megaSet.join(" ");
  const secondaryText = data.popularSet.join(" ");
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

      {/* 1. Header (Exact Replica of Image 1) */}
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
          BEST #{data.name.toUpperCase()} HASHTAGS
        </h1>

        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          #{data.slug} - <strong>{data.recentUses}</strong> uses in the last 7 days
        </p>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Grow your {data.platform.toLowerCase()} using the most popular <strong>{data.slug}</strong> hashtags
        </p>
      </header>

      {/* 2. Primary Hashtag Box (Exact Replica of Image 1) */}
      <section className="space-y-2">
        <button
          type="button"
          onClick={() => handleCopy(primaryText, "primary")}
          className="px-4 py-1.5 rounded-sm bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {copiedSection === "primary" ? (
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

        <div className="p-4 sm:p-5 rounded-sm bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal select-all">
          {primaryText}
        </div>
      </section>

      {/* 3. Secondary Hashtag Box (Exact Replica of Image 1) */}
      <section className="space-y-3 pt-2">
        <h2 className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200">
          Second most liked instagram hashtags used with <strong>{data.slug}</strong>
        </h2>

        <button
          type="button"
          onClick={() => handleCopy(secondaryText, "secondary")}
          className="px-4 py-1.5 rounded-sm bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {copiedSection === "secondary" ? (
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

        <div className="p-4 sm:p-5 rounded-sm bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal select-all">
          {secondaryText}
        </div>

        <p className="text-xs sm:text-sm text-zinc-500 pt-1">
          Use one of these sets of hashtags in your next instagram post and you&apos;ll see a big boost.
        </p>
      </section>

      {/* 4. Hashtag Report Metrics (Exact visual match to Image 2) */}
      <section className="space-y-4 pt-4">
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

      {/* 5. TOP 10 VIRAL HASHTAGS (Exact visual match to Image 3) */}
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

      {/* 6. Popular Hashtags Table & Context (Exact visual match to Image 4) */}
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
            onClick={() => handleCopy(compactText, "compact")}
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

      {/* 7. FAQs */}
      <FAQSection faqs={data.faqs} title={`Frequently Asked Questions`} />

      {/* 8. E-E-A-T Author & Research Review Box */}
      <AuthorBioBox categoryType="Hashtag Analytics & Growth" topic={`#${data.slug} Hashtags`} />

      {/* 9. Related Hashtag Topics */}
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

"use client";

import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { TOPIC_CLUSTERS } from "@/data/platformTaxonomy";

export function TopicExplorerSection() {
  return (
    <section className="space-y-5 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] font-bold text-blue-600 dark:text-blue-400">
            <Compass className="w-3 h-3" />
            <span>Popular Search Moods</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Explore Content by Mood
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Direct access to high-demand categories across captions, status, shayari, and quotes.
          </p>
        </div>

        <Link
          href="/categories"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <span>View All 52+ Moods</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Sleek, Modern, High-Density Topic Pills */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {TOPIC_CLUSTERS.map((topic) => (
          <Link
            key={topic.id}
            href={`/categories/${topic.categorySlug}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/90 shadow-2xs transition-all group cursor-pointer"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              {topic.emoji}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {topic.name}
            </span>
          </Link>
        ))}

        <Link
          href="/categories"
          className="inline-flex items-center gap-1 px-3.5 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-bold hover:bg-indigo-100 transition-colors"
        >
          <span>+40 More Moods</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* High-Search Seasonal & Festival Quick Links */}
      <div className="pt-2">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
            <span>🎉</span>
            <span>Trending Festivals & Seasons:</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "🪔 Diwali Lights & Wishes", href: "/captions/diwali" },
            { label: "🌙 Eid Mubarak Blessings", href: "/status/eid" },
            { label: "🎆 New Year 2026 Goals", href: "/captions/new-year" },
            { label: "❤️ Valentine's Day Romance", href: "/shayari/valentines" },
            { label: "🎨 Holi Colors & Gulal", href: "/captions/holi" },
            { label: "🧵 Raksha Bandhan Sibling Love", href: "/status/raksha-bandhan" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-500/20 text-xs font-semibold transition-all hover:scale-105"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

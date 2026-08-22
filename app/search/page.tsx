"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Sparkles, Copy, Check, Filter, Layers, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CAPTIONS_DATA } from "@/data/captionsData";
import { ALL_PLATFORM_BLUEPRINTS } from "@/data/masterSeo300Data";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    return CAPTIONS_DATA.filter((item) => {
      if (selectedPlatform !== "all" && item.platform !== selectedPlatform) {
        return false;
      }
      if (!q) return true;
      return (
        item.text.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.hashtags?.some((h) => h.toLowerCase().includes(q))
      );
    }).slice(0, 36);
  }, [query, selectedPlatform]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Instant Search" }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>10,000+ Lines Database</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Instant Search Engine
        </h1>

        <p className="text-base text-zinc-600 dark:text-zinc-400">
          Find captions, bios, Hindi shayari, quotes, and status lines in milliseconds.
        </p>
      </div>

      {/* Search Bar Input & Filter */}
      <div className="space-y-4 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type keywords (e.g. 'attitude', 'royal', 'love', 'selfie', 'chai')..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white focus:outline-hidden focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all shadow-xs"
          />
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap gap-2 items-center text-xs">
          <span className="text-zinc-400 font-semibold">Popular:</span>
          {["Attitude", "Love", "Royal", "Selfie", "Hindi", "Motivation", "Sad"].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-pink-50 dark:hover:bg-pink-950/50 text-zinc-700 dark:text-zinc-300 hover:text-pink-600 transition cursor-pointer font-medium"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Platform Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        {["all", "instagram", "whatsapp", "facebook", "tiktok", "youtube", "linkedin", "twitter"].map((plat) => (
          <button
            key={plat}
            onClick={() => setSelectedPlatform(plat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition capitalize cursor-pointer ${
              selectedPlatform === plat
                ? "bg-pink-600 text-white shadow-sm"
                : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            {plat === "all" ? "All Platforms" : plat}
          </button>
        ))}
      </div>

      {/* Search Results Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>Found {filteredResults.length} matching lines</span>
          <span>1-Click Copy Ready</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between hover:border-pink-500/50 transition-all shadow-xs"
            >
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed select-all">
                {item.text}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs">
                <span className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-semibold">
                  {item.category}
                </span>

                <button
                  onClick={() => handleCopy(item.text, item.id)}
                  className="flex items-center gap-1 font-bold text-pink-600 dark:text-pink-400 hover:text-pink-500 cursor-pointer"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, Search } from "lucide-react";
import { CaptionCard } from "@/components/captions/CaptionCard";
import { EditorialHero } from "@/components/captions/EditorialHero";
import { SearchBar } from "@/components/captions/SearchBar";
import { FilterBar, FilterState } from "@/components/captions/FilterBar";
import { CAPTIONS_DATA } from "@/data/captionsData";
import { CTASection } from "@/components/common/CTASection";
import { RelatedSearches } from "@/components/captions/RelatedSearches";

import { Caption } from "@/lib/types";

const EDITORIAL_SECTIONS: {
  id: string;
  title: string;
  count: number;
  desc: string;
  filterFn: (c: Caption) => boolean;
}[] = [
  {
    id: "section-aesthetic",
    title: "short & aesthetic captions",
    count: 35,
    desc: "Minimalist, moody, and clean one-liners perfect for aesthetic selfies, outfit checks, and reels.",
    filterFn: (c: Caption) => c.style === "aesthetic" || c.length === "short",
  },
  {
    id: "section-attitude",
    title: "attitude & confident status",
    count: 44,
    desc: "Bold, fearless, and royal attitude captions for unapologetic boss moves and iconic photos.",
    filterFn: (c: Caption) => c.category === "attitude" || c.style === "savage",
  },
  {
    id: "section-travel",
    title: "travel & wanderlust captions",
    count: 28,
    desc: "Scenic road trips, airport vibes, mountain views, and unforgettable passport memories.",
    filterFn: (c: Caption) => c.category === "travel",
  },
  {
    id: "section-love",
    title: "love & romantic lines",
    count: 30,
    desc: "Heartfelt, deep, and poetic couple quotes celebrating love, relationships, and soulmates.",
    filterFn: (c: Caption) => c.category === "love" || c.category === "romantic",
  },
  {
    id: "section-funny",
    title: "funny & relatable one-liners",
    count: 25,
    desc: "Hilarious, sarcastic, and witty one-liners guaranteed to spark laughter and comment engagement.",
    filterFn: (c: Caption) => c.category === "funny" || c.style === "funny",
  },
  {
    id: "section-motivation",
    title: "motivational & mindset quotes",
    count: 40,
    desc: "Daily discipline, hard work, focus, and inspiring mindset shifts for creators and dream chasers.",
    filterFn: (c: Caption) => c.category === "motivation" || c.category === "success",
  },
  {
    id: "section-gym",
    title: "gym & fitness captions",
    count: 20,
    desc: "Heavy lifting motivation, PR celebrations, pump checks, and relentless gym grind mentality.",
    filterFn: (c: Caption) => c.category === "gym" || c.category === "fitness",
  },
  {
    id: "section-hinglish",
    title: "Hinglish viral statuses",
    count: 35,
    desc: "Desi swag, relatable Hindi-English blend lines, chai lovers, and sukoon quotes.",
    filterFn: (c: Caption) => c.language === "hinglish",
  },
  {
    id: "section-coffee",
    title: "cafe & coffee aesthetic",
    count: 25,
    desc: "Cozy morning cafe vibes, iced lattes, matcha moments, and warm aesthetic cafe aesthetics.",
    filterFn: (c: Caption) => c.category === "coffee",
  },
  {
    id: "section-traditional",
    title: "traditional & saree glam",
    count: 30,
    desc: "Desi girl energy, royal kurtas, jhumkas, and ethnic wedding guest looks.",
    filterFn: (c: Caption) => c.category === "traditional",
  },
  {
    id: "section-cars",
    title: "late night drives & cars",
    count: 25,
    desc: "Highway therapy, city lights, exhaust notes, midnight drives, and horsepower dreams.",
    filterFn: (c: Caption) => c.category === "cars",
  },
  {
    id: "section-genz",
    title: "Gen-Z slang & viral hooks",
    count: 35,
    desc: "Main character energy, rizz, delulu is solulu, and unbothered soft era lines.",
    filterFn: (c: Caption) => c.category === "genz",
  },
];

function CaptionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") || "all";
  const initialPlatform = searchParams?.get("platform") || "all";
  const initialSearch = searchParams?.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    platform: initialPlatform,
    style: "all",
    language: "all",
    length: "all",
  });
  const [visibleCount, setVisibleCount] = useState(25);

  const isFilteringActive =
    searchQuery.trim().length > 0 ||
    filters.category !== "all" ||
    filters.platform !== "all" ||
    filters.style !== "all" ||
    filters.language !== "all" ||
    filters.length !== "all";

  const filteredCaptions = useMemo(() => {
    return CAPTIONS_DATA.filter((cap) => {
      // 1. Search Query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const textMatch = cap.text.toLowerCase().includes(q);
        const catMatch = cap.category.toLowerCase().includes(q);
        const platMatch = cap.platform.toLowerCase().includes(q);
        const styleMatch = cap.style.toLowerCase().includes(q);
        const subMatch = cap.subcategory?.toLowerCase().includes(q) || false;
        if (!textMatch && !catMatch && !platMatch && !styleMatch && !subMatch) {
          return false;
        }
      }

      // 2. Category match
      if (filters.category !== "all" && cap.category !== filters.category) {
        return false;
      }

      // 3. Platform match
      if (filters.platform !== "all" && cap.platform !== "all" && cap.platform !== filters.platform) {
        return false;
      }

      // 4. Style match
      if (filters.style !== "all" && cap.style !== filters.style) {
        return false;
      }

      // 5. Language match
      if (filters.language !== "all" && cap.language !== filters.language) {
        return false;
      }

      // 6. Length match
      if (filters.length !== "all" && cap.length !== filters.length) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const displayedList = filteredCaptions.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCaptions.length;

  const handleResetFilters = () => {
    setSearchQuery("");
    setFilters({
      category: "all",
      platform: "all",
      style: "all",
      language: "all",
      length: "all",
    });
    setVisibleCount(25);
  };

  // Build section-specific caption datasets
  const structuredSections = useMemo(() => {
    return EDITORIAL_SECTIONS.map((sec) => {
      const matching = CAPTIONS_DATA.filter(sec.filterFn);
      return {
        ...sec,
        captions: matching.slice(0, sec.count),
      };
    }).filter((s) => s.captions.length > 0);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10">
      {/* 1. Editorial Hero (Clean & Action-First) */}
      <EditorialHero
        platformName="Captions"
        badge="Curated Library"
        title="350+ Caption Ideas to Make Your Own (+ Write Yours with AI)"
        description="Over 350 funny, clever, or meaningful caption ideas for you to use on your next post, along with a guide to creating your own AI caption generator."
        heroImage="/images/hero-creator.jpg"
        breadcrumbs={[
          { label: "Content", href: "/#explore-content" },
          { label: "Caption Library" },
        ]}
        tocItems={structuredSections.map((sec) => ({
          id: sec.id,
          label: `${sec.captions.length} ${sec.title}`,
        }))}
      />

      {/* 2. Search & Interactive Filter Bar */}
      <div id="search-filter" className="space-y-4 pt-2 scroll-mt-24 text-left">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Search & Filter Any Vibe
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Type keywords, choose a category, or select a platform to instantly filter all captions.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChange={(val) => {
            setSearchQuery(val);
            setVisibleCount(25);
          }}
        />

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          onChange={(newFilters) => {
            setFilters(newFilters);
            setVisibleCount(25);
          }}
          onReset={handleResetFilters}
        />
      </div>

      {/* 4. Display Content: Filtered Results OR Curated Subsections */}
      {isFilteringActive ? (
        /* Filtered Search Results View */
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            <span>
              Showing <strong className="text-zinc-900 dark:text-white">{displayedList.length}</strong> of{" "}
              <strong className="text-zinc-900 dark:text-white">{filteredCaptions.length}</strong> matching captions
            </span>

            <button
              type="button"
              onClick={handleResetFilters}
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Reset Filters
            </button>
          </div>

          {displayedList.length > 0 ? (
            <div className="space-y-1 sm:space-y-1.5">
              {displayedList.map((cap, i) => (
                <CaptionCard key={`filt-${cap.id}-${i}`} caption={cap} index={i + 1} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="p-12 sm:p-16 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                <Search className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">No captions found</h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                  We couldn&apos;t find any captions matching your query &quot;{searchQuery}&quot;. Try adjusting your filters or synthesize a new caption with AI!
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-300 transition-colors"
                >
                  Reset All Filters
                </button>
                <Link
                  href={`/ai-caption-generator?topic=${encodeURIComponent(searchQuery)}`}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-md flex items-center gap-1.5 hover:bg-indigo-700 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Generate with AI</span>
                </Link>
              </div>
            </div>
          )}

          {/* Load More for filtered search */}
          {hasMore && (
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 25)}
                className="px-8 py-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-semibold border border-zinc-200 dark:border-zinc-800 transition-all shadow-xs"
              >
                Load More Captions ({filteredCaptions.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Default Curated Sections List (All Jump Anchors Live & Working!) */
        <div className="space-y-12">
          {structuredSections.map((sec) => (
            <section
              key={sec.id}
              id={sec.id}
              className="space-y-3 pt-2 scroll-mt-24 text-left"
            >
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                  {sec.captions.length} {sec.title}
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {sec.desc}
                </p>
              </div>

              {/* Numbered vertical list container */}
              <div className="space-y-1 sm:space-y-1.5">
                {sec.captions.map((cap, idx) => (
                  <CaptionCard key={`sec-${sec.id}-${cap.id}-${idx}`} caption={cap} index={idx + 1} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* 5. AI Caption Generator Section (TOC Target) */}
      <section id="ai-caption-generator" className="scroll-mt-24 pt-4">
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>AI Engine</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              AI Social Media Caption Generator
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Want something unique? Describe your photo or topic, choose your mood, and generate 10+ viral captions in seconds.
            </p>
          </div>

          <Link
            href="/ai-caption-generator"
            className="shrink-0 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Try AI Generator Free</span>
          </Link>
        </div>
      </section>

      {/* 6. People Also Search For */}
      <RelatedSearches currentTopic="Social Media Captions" />

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
}

export default function CaptionsPage() {
  return (
    <Suspense fallback={<div className="h-screen max-w-7xl mx-auto px-4 py-12 animate-pulse bg-zinc-100 dark:bg-zinc-900 rounded-3xl" />}>
      <CaptionsContent />
    </Suspense>
  );
}

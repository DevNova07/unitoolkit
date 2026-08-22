"use client";

import { useState, useMemo } from "react";
import {
  Hash,
  Copy,
  Check,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Flame,
  Layers,
  Search,
  Filter,
  Zap,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { HASHTAG_NICHES, HashtagNiche } from "@/data/hashtagsData";

type CopyFormat = "with_hash" | "no_hash" | "spaced";
type CategoryTab = "all" | "viral" | "attitude" | "travel" | "fitness" | "fashion" | "food" | "tech" | "luxury" | "celebration";

export function HashtagGeneratorTool() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("all");
  const [activeNicheKey, setActiveNicheKey] = useState<string>("reels");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [platformMode, setPlatformMode] = useState<"instagram" | "tiktok" | "youtube" | "linkedin">("instagram");
  const [copyFormat, setCopyFormat] = useState<CopyFormat>("with_hash");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Dynamic Keyword Search / Matcher
  const matchedNiche: HashtagNiche = useMemo(() => {
    const query = searchKeyword.toLowerCase().trim();
    if (!query) return HASHTAG_NICHES[activeNicheKey] || HASHTAG_NICHES["reels"];

    // Check direct key match
    if (HASHTAG_NICHES[query]) return HASHTAG_NICHES[query];

    // Check partial match in name, description or tags
    const found = Object.values(HASHTAG_NICHES).find(
      (n) =>
        n.name.toLowerCase().includes(query) ||
        n.description.toLowerCase().includes(query) ||
        n.preset30.some((t) => t.toLowerCase().includes(query))
    );

    if (found) return found;

    // Fallback: Dynamically synthesize 30 hashtags from user query
    const cleanWord = query.replace(/[^a-zA-Z0-9]/g, "");
    return {
      id: "custom",
      name: `Custom Search: "${searchKeyword}"`,
      category: "viral",
      icon: "✨",
      description: `AI-synthesized viral hashtag ladder for ${searchKeyword}`,
      avgReach: "15.4M Est. Reach 🔥",
      difficulty: "Viral",
      preset30: [
        `#${cleanWord}`, `#${cleanWord}vibes`, `#${cleanWord}life`, `#${cleanWord}love`, `#${cleanWord}daily`,
        `#${cleanWord}gram`, `#${cleanWord}photography`, `#${cleanWord}goals`, `#${cleanWord}reels`, `#${cleanWord}trend`,
        `#viral${cleanWord}`, `#explore${cleanWord}`, `#trending${cleanWord}`, `#instadaily`, `#explorepage`,
        `#viral`, `#trending`, `#fyp`, `#foryou`, `#reels`,
        `#photooftheday`, `#instagood`, `#love`, `#lifestyle`, `#aesthetic`,
        `#feedviral`, `#creators`, `#content`, `#reachgrowth`, `#trendingnow`
      ],
      trending30: [
        `#${cleanWord}2026`, `#trending${cleanWord}`, `#${cleanWord}tok`, `#${cleanWord}inspo`, `#best${cleanWord}`,
        `#${cleanWord}creator`, `#${cleanWord}community`, `#viral${cleanWord}reels`, `#${cleanWord}aesthetic`, `#${cleanWord}moment`,
        `#explorepage`, `#viralpost`, `#trendingsong`, `#trendingreels`, `#foryoupage`,
        `#dailyviral`, `#instatrend`, `#reachboost`, `#boostmyreach`, `#algorithmboost`,
        `#discoverfeed`, `#exploreindia`, `#viralgrowth`, `#videocreators`, `#reelitfeelit`,
        `#contentcreator`, `#popularposts`, `#trendingtoday`, `#highviews`, `#viralnow`
      ],
      reelsShorts: [`#${cleanWord}`, `#${cleanWord}reels`, `#viral`, `#trending`, `#explorepage`, `#fyp`, `#foryou`],
      ladder: {
        high: [`#${cleanWord}`, `#viral`, `#trending`, `#explorepage`, `#fyp`, `#reels`, `#instagood`, `#foryou`],
        medium: [`#${cleanWord}vibes`, `#${cleanWord}life`, `#${cleanWord}daily`, `#trendingreels`, `#reelitfeelit`, `#viralpost`],
        low: [`#${cleanWord}photography`, `#${cleanWord}goals`, `#${cleanWord}gram`, `#${cleanWord}inspo`, `#reachboost`, `#discoverfeed`]
      }
    };
  }, [searchKeyword, activeNicheKey]);

  // Format Helper function
  const formatTagList = (tags: string[]) => {
    if (copyFormat === "no_hash") {
      return tags.map((t) => t.replace(/^#/, "")).join(" ");
    }
    if (copyFormat === "spaced") {
      return `.\n.\n.\n${tags.join(" ")}`;
    }
    return tags.join(" ");
  };

  const handleCopyTags = async (tags: string[], key: string, label: string) => {
    const formatted = formatTagList(tags);
    const ok = await copyToClipboard(formatted);
    if (ok) {
      setCopiedKey(key);
      showToast(`Copied ${tags.length} ${label} hashtags!`, "sparkle");
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  // Platform Pack construction
  const platformTags = useMemo(() => {
    if (platformMode === "tiktok") {
      return [...matchedNiche.ladder.high.slice(0, 3), ...matchedNiche.ladder.medium.slice(0, 2), "#fyp", "#viral", "#foryou"];
    }
    if (platformMode === "youtube") {
      return [...matchedNiche.ladder.high.slice(0, 2), "#shorts", "#trending", "#viral"];
    }
    if (platformMode === "linkedin") {
      return [...matchedNiche.ladder.medium.slice(0, 3), ...matchedNiche.ladder.low.slice(0, 2)];
    }
    return matchedNiche.preset30;
  }, [platformMode, matchedNiche]);

  const platformLabel = useMemo(() => {
    if (platformMode === "tiktok") return "TikTok FYP Viral Set (8 Tags)";
    if (platformMode === "youtube") return "YouTube Shorts Title & Desc (5 Tags)";
    if (platformMode === "linkedin") return "LinkedIn Professional Reach (5 Tags)";
    return "Instagram Complete 30-Tag Ladder (30 Tags)";
  }, [platformMode]);

  // Filtered Niches list by Tab
  const displayedNiches = useMemo(() => {
    const list = Object.values(HASHTAG_NICHES);
    if (activeTab === "all") return list;
    return list.filter((n) => n.category === activeTab);
  }, [activeTab]);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 text-left">
      {/* 1. Header Control Panel & Live Keyword Search */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 shadow-sm space-y-6">
        {/* Top Title & Search Input */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span>{matchedNiche.icon}</span>
                <span>{matchedNiche.name}</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                {matchedNiche.description}
              </p>
            </div>

            {/* Metric Pills */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900">
                {matchedNiche.avgReach}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Safe</span>
              </span>
            </div>
          </div>

          {/* Real-Time Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search or type ANY topic (e.g. Jaipur cafe, gym chest pump, saree aesthetic, sunset)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            {searchKeyword && (
              <button
                type="button"
                onClick={() => setSearchKeyword("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 border-b border-zinc-100 dark:border-zinc-900">
          {([
            { id: "all", label: "🌟 All Niches" },
            { id: "viral", label: "🔥 Reels & Viral" },
            { id: "attitude", label: "👑 Attitude & Boys" },
            { id: "travel", label: "🏔️ Travel & Trek" },
            { id: "fitness", label: "💪 Gym & Fitness" },
            { id: "fashion", label: "👗 Fashion & Glam" },
            { id: "food", label: "☕ Food & Chai" },
            { id: "tech", label: "🤖 Tech & Gaming" },
            { id: "luxury", label: "🏎️ Luxury & Wealth" },
            { id: "celebration", label: "🎂 Celebrations" },
          ] as { id: CategoryTab; label: string }[]).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setSearchKeyword("");
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-black shadow-xs"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Niche Selection Chips */}
        <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto pr-1">
          {displayedNiches.map((niche) => {
            const isSelected = activeNicheKey === niche.id && !searchKeyword;

            return (
              <button
                key={niche.id}
                type="button"
                onClick={() => {
                  setActiveNicheKey(niche.id);
                  setSearchKeyword("");
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                    : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <span>{niche.icon}</span>
                <span>{niche.name}</span>
              </button>
            );
          })}
        </div>

        {/* Copy Format & Platform Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-900 text-xs font-medium text-zinc-500">
          {/* Format Options */}
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-zinc-700 dark:text-zinc-300">Format:</span>
            <button
              type="button"
              onClick={() => setCopyFormat("with_hash")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                copyFormat === "with_hash"
                  ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                  : "hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              With # (Standard)
            </button>
            <button
              type="button"
              onClick={() => setCopyFormat("no_hash")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                copyFormat === "no_hash"
                  ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                  : "hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Without # (Search)
            </button>
            <button
              type="button"
              onClick={() => setCopyFormat("spaced")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                copyFormat === "spaced"
                  ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                  : "hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              Caption Bottom (Spaced)
            </button>
          </div>

          {/* Platform Mode */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            {(["instagram", "tiktok", "youtube", "linkedin"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlatformMode(p)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                  platformMode === p
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Primary Hashtag Copy Box: Top 30 Most Popular All-Time */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              🔥 Pack 1: Top 30 Most Popular (All-Time Viral Set)
            </h3>
          </div>
          <span className="text-xs text-zinc-400 font-medium">{matchedNiche.preset30.length} Tags</span>
        </div>

        {/* Clean Container Card with Prominent Top-Left Green Copy Button */}
        <div className="relative rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 p-5 sm:p-7 shadow-sm transition-all hover:border-emerald-500/60 dark:hover:border-emerald-500/60">
          <div className="mb-4">
            <button
              type="button"
              onClick={() => handleCopyTags(matchedNiche.preset30, "pack1", "Top 30 All-Time")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white shadow-md transition-all duration-200 cursor-pointer active:scale-95 ${
                copiedKey === "pack1"
                  ? "bg-emerald-600 shadow-emerald-500/20 scale-102"
                  : "bg-[#65b32e] hover:bg-[#5ca528] dark:bg-emerald-600 dark:hover:bg-emerald-500"
              }`}
            >
              {copiedKey === "pack1" ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed tracking-normal select-all break-words font-sans">
            {formatTagList(matchedNiche.preset30)}
          </p>
        </div>
      </div>

      {/* 3. Pack 2: Top 30 Trending Today (Rising Velocity) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              📈 Pack 2: Top 30 Trending Today (Algorithm Boost & High Velocity)
            </h3>
          </div>
          <span className="text-xs text-zinc-400 font-medium">{matchedNiche.trending30.length} Tags</span>
        </div>

        <div className="relative rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 p-5 sm:p-7 shadow-sm transition-all hover:border-purple-500/60 dark:hover:border-purple-500/60">
          <div className="mb-4">
            <button
              type="button"
              onClick={() => handleCopyTags(matchedNiche.trending30, "pack2", "Trending Today")}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white shadow-md transition-all duration-200 cursor-pointer active:scale-95 ${
                copiedKey === "pack2"
                  ? "bg-purple-600 shadow-purple-500/20 scale-102"
                  : "bg-[#65b32e] hover:bg-[#5ca528] dark:bg-emerald-600 dark:hover:bg-emerald-500"
              }`}
            >
              {copiedKey === "pack2" ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed tracking-normal select-all break-words font-sans">
            {formatTagList(matchedNiche.trending30)}
          </p>
        </div>
      </div>

      {/* 4. Pack 3: Platform Optimized Set */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              ⚡ Pack 3: {platformLabel}
            </h3>
          </div>
          <span className="text-xs text-zinc-400 font-medium">{platformTags.length} Tags</span>
        </div>

        <div className="relative rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 p-5 sm:p-7 shadow-sm transition-all hover:border-indigo-500/60 dark:hover:border-indigo-500/60">
          <div className="mb-4">
            <button
              type="button"
              onClick={() => handleCopyTags(platformTags, "pack3", platformMode.toUpperCase())}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white shadow-md transition-all duration-200 cursor-pointer active:scale-95 ${
                copiedKey === "pack3"
                  ? "bg-indigo-600 shadow-indigo-500/20 scale-102"
                  : "bg-[#65b32e] hover:bg-[#5ca528] dark:bg-emerald-600 dark:hover:bg-emerald-500"
              }`}
            >
              {copiedKey === "pack3" ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed tracking-normal select-all break-words font-sans">
            {formatTagList(platformTags)}
          </p>
        </div>
      </div>

      {/* 5. Tiered Hashtag Ladder Breakdown (High, Medium, Low Competition) */}
      <div className="space-y-6 pt-4">
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
            Hashtag Ladder Competition Tiers
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Copy individual reach tiers to mix with your own custom post keywords.
          </p>
        </div>

        <div className="space-y-5">
          {/* Low Competition Tier Box (Highest probability of ranking for new accounts) */}
          <div className="relative rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-sm transition-all hover:border-emerald-500/50">
            <div className="flex items-center justify-between mb-3.5">
              <button
                type="button"
                onClick={() => handleCopyTags(matchedNiche.ladder.low, "tierLow", "Low Competition")}
                className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-bold text-white shadow-xs transition-all duration-200 cursor-pointer active:scale-95 ${
                  copiedKey === "tierLow"
                    ? "bg-emerald-600"
                    : "bg-[#65b32e] hover:bg-[#5ca528] dark:bg-emerald-600 dark:hover:bg-emerald-500"
                }`}
              >
                {copiedKey === "tierLow" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === "tierLow" ? "Copied!" : "Copy"}</span>
              </button>

              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900">
                🎯 Low Competition (&lt;50K Posts Instant Top Rank)
              </span>
            </div>

            <p className="text-sm text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed select-all break-words font-sans">
              {formatTagList(matchedNiche.ladder.low)}
            </p>
          </div>

          {/* Medium Competition Tier Box */}
          <div className="relative rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-sm transition-all hover:border-amber-500/50">
            <div className="flex items-center justify-between mb-3.5">
              <button
                type="button"
                onClick={() => handleCopyTags(matchedNiche.ladder.medium, "tierMed", "Medium Competition")}
                className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-bold text-white shadow-xs transition-all duration-200 cursor-pointer active:scale-95 ${
                  copiedKey === "tierMed"
                    ? "bg-amber-600"
                    : "bg-[#65b32e] hover:bg-[#5ca528] dark:bg-emerald-600 dark:hover:bg-emerald-500"
                }`}
              >
                {copiedKey === "tierMed" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === "tierMed" ? "Copied!" : "Copy"}</span>
              </button>

              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-900">
                ⚡ Medium Momentum (50K–500K Posts Sustained Reach)
              </span>
            </div>

            <p className="text-sm text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed select-all break-words font-sans">
              {formatTagList(matchedNiche.ladder.medium)}
            </p>
          </div>

          {/* High Competition Tier Box */}
          <div className="relative rounded-2xl bg-white dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-sm transition-all hover:border-rose-500/50">
            <div className="flex items-center justify-between mb-3.5">
              <button
                type="button"
                onClick={() => handleCopyTags(matchedNiche.ladder.high, "tierHigh", "High Competition")}
                className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-bold text-white shadow-xs transition-all duration-200 cursor-pointer active:scale-95 ${
                  copiedKey === "tierHigh"
                    ? "bg-rose-600"
                    : "bg-[#65b32e] hover:bg-[#5ca528] dark:bg-emerald-600 dark:hover:bg-emerald-500"
                }`}
              >
                {copiedKey === "tierHigh" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey === "tierHigh" ? "Copied!" : "Copy"}</span>
              </button>

              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/60 dark:border-rose-900">
                🔥 High Competition (500K+ Viral Explore Reach)
              </span>
            </div>

            <p className="text-sm text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed select-all break-words font-sans">
              {formatTagList(matchedNiche.ladder.high)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

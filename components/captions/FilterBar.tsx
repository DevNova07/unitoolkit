"use client";

import { useState } from "react";
import { Filter, X, RotateCcw, Sparkles, SlidersHorizontal } from "lucide-react";
import { CategoryType, PlatformType, StyleType, LanguageType, LengthType } from "@/lib/types";
import { CATEGORIES } from "@/data/categoriesData";
import { PLATFORMS } from "@/data/platformsData";

export interface FilterState {
  category: string;
  platform: string;
  style: string;
  language: string;
  length: string;
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  className?: string;
}

const QUICK_CHIPS = [
  { id: "all", label: "🔥 All Trending", type: "category" },
  { id: "boys", label: "👦 Boys Attitude", type: "category" },
  { id: "girls", label: "👧 Girls Sassy", type: "category" },
  { id: "mirror-selfie", label: "🪞 Mirror Selfie", type: "category" },
  { id: "photo-dump", label: "📸 Photo Dump", type: "category" },
  { id: "golden-hour", label: "🌅 Golden Hour", type: "category" },
  { id: "one-word", label: "⚡ 1-Word", type: "category" },
  { id: "genz", label: "✨ Gen-Z Slang", type: "category" },
  { id: "traditional", label: "🥻 Saree & Ethnic", type: "category" },
  { id: "coffee", label: "☕ Cafe & Coffee", type: "category" },
  { id: "fitness", label: "💪 Gym & Gains", type: "category" },
  { id: "cars", label: "🚗 Cars & Drives", type: "category" },
  { id: "attitude", label: "😎 Savage & Attitude", type: "category" },
  { id: "travel", label: "✈️ Travel", type: "category" },
  { id: "love", label: "❤️ Love & Romance", type: "category" },
];

export function FilterBar({ filters, onChange, onReset, className = "" }: FilterBarProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const activeFiltersCount = Object.values(filters).filter((val) => val !== "all").length;

  const styles = [
    { id: "all", label: "All Styles" },
    { id: "aesthetic", label: "✨ Aesthetic" },
    { id: "viral", label: "🔥 Viral" },
    { id: "savage", label: "👑 Savage" },
    { id: "funny", label: "😂 Funny" },
    { id: "minimal", label: "▫️ Minimal" },
    { id: "romantic", label: "❤️ Romantic" },
    { id: "inspirational", label: "🌟 Inspirational" },
    { id: "professional", label: "💼 Professional" },
    { id: "emotional", label: "🤍 Emotional" },
    { id: "casual", label: "✌️ Casual" },
  ];

  const languages = [
    { id: "all", label: "All Languages" },
    { id: "en", label: "English" },
    { id: "hinglish", label: "Hinglish (Desi)" },
    { id: "hi", label: "Hindi" },
  ];

  const lengths = [
    { id: "all", label: "All Lengths" },
    { id: "short", label: "Short (< 10 words)" },
    { id: "medium", label: "Medium (10–25 words)" },
    { id: "long", label: "Long (Storytelling)" },
  ];

  const handleSelect = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  const handleChipClick = (chip: (typeof QUICK_CHIPS)[0]) => {
    if (chip.id === "all") {
      onReset();
    } else if (chip.type === "category") {
      onChange({ ...filters, category: chip.id, style: "all" });
    } else if (chip.type === "style") {
      onChange({ ...filters, style: chip.id, category: "all" });
    }
  };

  return (
    <div className={`w-full space-y-3 text-left ${className}`}>
      {/* 1-Click Horizontal Scrollable Pill Chips (Frictionless UX) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none no-scrollbar">
        {QUICK_CHIPS.map((chip) => {
          const isActive =
            chip.id === "all"
              ? filters.category === "all" && filters.style === "all"
              : (chip.type === "category" && filters.category === chip.id) ||
                (chip.type === "style" && filters.style === chip.id);

          return (
            <button
              key={chip.id}
              type="button"
              onClick={() => handleChipClick(chip)}
              className={`shrink-0 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold border transition-all ${
                isActive
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-black border-transparent shadow-xs scale-[1.02]"
                  : "bg-white dark:bg-zinc-950 border-zinc-200/90 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900"
              }`}
            >
              {chip.label}
            </button>
          );
        })}

        {/* Toggle Advanced Filters Button */}
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={`shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold border transition-colors ${
            showAdvanced || activeFiltersCount > 0
              ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
              : "bg-white dark:bg-zinc-950 border-zinc-200/90 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
        </button>
      </div>

      {/* Advanced Filters Expandable Drawer */}
      {showAdvanced && (
        <div className="p-4 sm:p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xs space-y-3 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Refine by Platform, Length & Language
            </span>

            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Category Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-zinc-500">Category</label>
              <select
                value={filters.category}
                onChange={(e) => handleSelect("category", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Categories ({CATEGORIES.length})</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Platform Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-zinc-500">Platform</label>
              <select
                value={filters.platform}
                onChange={(e) => handleSelect("platform", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Platforms ({PLATFORMS.length})</option>
                {PLATFORMS.map((plat) => (
                  <option key={plat.id} value={plat.id}>
                    {plat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-zinc-500">Language</label>
              <select
                value={filters.language}
                onChange={(e) => handleSelect("language", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {languages.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Length Select */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-zinc-500">Length</label>
              <select
                value={filters.length}
                onChange={(e) => handleSelect("length", e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {lengths.map((len) => (
                  <option key={len.id} value={len.id}>
                    {len.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sparkles, Wand2, Compass, Heart, Globe2 } from "lucide-react";

interface NameSearchHeroProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  totalCount: number;
}

export function NameSearchHero({ onSearchChange, searchQuery, totalCount }: NameSearchHeroProps) {
  const quickCategories = [
    { label: "👦 Boy Names", href: "/names/boy" },
    { label: "👧 Girl Names", href: "/names/girl" },
    { label: "⚡ Unisex", href: "/names/unisex" },
    { label: "🇮🇳 Indian", href: "/names/indian" },
    { label: "🌙 Arabic & Islamic", href: "/names/arabic" },
    { label: "✨ Sanskrit", href: "/names/sanskrit" },
    { label: "👑 Royal", href: "/names/royal" },
    { label: "🌿 Nature", href: "/names/nature" },
    { label: "❤️ Love", href: "/names/meaning/love" },
    { label: "💪 Strength", href: "/names/meaning/strength" },
    { label: "🤖 AI Baby Generator", href: "/ai-baby-name-generator" },
  ];

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-indigo-50/80 via-purple-50/40 to-white dark:from-indigo-950/30 dark:via-zinc-900/50 dark:to-zinc-950 border border-indigo-100 dark:border-zinc-800 p-6 sm:p-10 text-center space-y-6 shadow-sm overflow-hidden">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-2xs">
        <Globe2 className="w-3.5 h-3.5" />
        <span>UniToolkit Names • 10,000+ Multi-Cultural Vault</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-2 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
          Find the Perfect Name with Meaning, Origin & AI
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Search thousands of verified names across 30+ cultures, 20+ aesthetic styles, and spiritual traditions — free, instant, and with pronunciation guides.
        </p>
      </div>

      {/* Instant Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative flex items-center p-2 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-indigo-200 dark:border-zinc-700 shadow-xl focus-within:border-indigo-600 transition-all">
          <div className="pl-3 text-indigo-500">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search names, meanings, origins (e.g. 'Aarav', 'strength', 'Japanese girl', 'sun')..."
            className="w-full min-w-0 px-3 py-2 text-sm sm:text-base bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none font-medium"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="px-2 text-xs font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Quick Discovery Pills */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
        {quickCategories.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-2xs hover:scale-105"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

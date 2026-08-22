"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Search,
  Check,
  Copy,
  Volume2,
  Heart,
  Lightbulb,
  List,
  LayoutGrid,
  ChevronRight,
  Info,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { NameRecord } from "@/data/namesData";
import { NameCard } from "./NameCard";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { toggleFavoriteName, isNameFavorite } from "@/lib/namesFavoritesStore";

interface NamesTemplateProps {
  h1: string;
  badge: string;
  intro: string;
  items: NameRecord[];
  categoryType: string;
  categorySlug: string;
  faqs?: { question: string; answer: string }[];
  relatedLinks?: { label: string; href: string }[];
  breadcrumbs?: { label: string; href?: string }[];
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function NamesTemplate({
  h1,
  badge,
  intro,
  items,
  categoryType,
  categorySlug,
  faqs = [],
  relatedLinks = [],
  breadcrumbs = [{ label: "Names", href: "/names" }],
}: NamesTemplateProps) {
  const [search, setSearch] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string>("ALL");
  const [genderFilter, setGenderFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"list" | "cards">("list");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favMap, setFavMap] = useState<Record<string, boolean>>({});

  const handleCopy = async (item: NameRecord) => {
    const text = `${item.name} — ${item.meaning}`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(item.id);
      showToast(`Copied: "${item.name}"`);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const handlePlayAudio = (name: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(name);
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleToggleFav = (item: NameRecord) => {
    const nextState = toggleFavoriteName(item);
    setFavMap((prev) => ({ ...prev, [item.id]: nextState }));
    showToast(nextState ? `Saved ${item.name} to Favorites!` : `Removed ${item.name}`);
  };

  // Filter items by search, gender, and selected letter
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchSearch =
        search === "" ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.meaning.toLowerCase().includes(search.toLowerCase()) ||
        item.origin.toLowerCase().includes(search.toLowerCase());

      const matchGender = genderFilter === "all" || item.gender === genderFilter;

      const matchLetter =
        selectedLetter === "ALL" ||
        item.startingLetter.toUpperCase() === selectedLetter ||
        item.name.toUpperCase().startsWith(selectedLetter);

      return matchSearch && matchGender && matchLetter;
    });
  }, [items, search, genderFilter, selectedLetter]);

  // Group filtered items by Alphabet letter
  const groupedByLetter = useMemo(() => {
    const groups: Record<string, NameRecord[]> = {};
    for (const letter of ALPHABET) {
      const letterNames = filteredItems.filter(
        (n) => n.startingLetter.toUpperCase() === letter || n.name.toUpperCase().startsWith(letter)
      );
      if (letterNames.length > 0) {
        groups[letter] = letterNames;
      }
    }
    return groups;
  }, [filteredItems]);

  const activeLetters = Object.keys(groupedByLetter);

  const defaultFaqs = [
    {
      question: `What are the most popular names in this collection for 2026?`,
      answer: `Top names in this category combine melodious phonetic sound, deep spiritual roots, and easy modern pronunciation across cultures.`,
    },
    {
      question: `How should I choose the right name from this A to Z list?`,
      answer: `Check the meaning first for positive virtues, test the syllable cadence with your family surname, and maintain a short list of 3–5 favorite picks.`,
    },
  ];

  const activeFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={activeFaqs}
        title={h1}
        description={intro}
        url={`https://unitoolkit.com/names/${categorySlug}`}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Header Section */}
      <div className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>{badge}</span>
          </span>
          <span className="text-xs font-semibold text-zinc-400">
            Updated for 2026 • Verified Etymology
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          {h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {intro}
        </p>
      </div>

      {/* 2. Quick Tips Editorial Guide Box (Clean & Helpful like screenshot) */}
      <div className="p-6 sm:p-7 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <span>How to choose a baby name (quick tips)</span>
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">•</span>
            <span>
              <strong>Meaning first:</strong> Pick a quality you wish for your child (peace, courage, wisdom, or light).
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">•</span>
            <span>
              <strong>Say it out loud:</strong> Pair the name with your surname; check nicknames family might use.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">•</span>
            <span>
              <strong>Astrology / Letter:</strong> Many families choose from the alphabet suggested at birth; use the A–Z jump buttons below.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">•</span>
            <span>
              <strong>Spelling:</strong> One clear spelling avoids school-form and passport confusion later.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">•</span>
            <span>
              <strong>Keep a short list:</strong> Three to five names are much easier to decide than thirty.
            </span>
          </li>
        </ul>
      </div>

      {/* 3. Interactive Filter & Search Toolbar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
        {/* Search bar & Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, meaning, or root (e.g. peaceful, light, courage)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
            />
          </div>

          {/* Gender Pills */}
          <div className="flex items-center gap-1.5 shrink-0 w-full sm:w-auto overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: "All Genders" },
              { id: "boy", label: "👦 Boy" },
              { id: "girl", label: "👧 Girl" },
              { id: "unisex", label: "⚡ Unisex" },
            ].map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGenderFilter(g.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  genderFilter === g.id
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black shadow-xs"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200"
                }`}
              >
                {g.label}
              </button>
            ))}

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 pl-2 border-l border-zinc-200 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setViewMode("list")}
                title="Clean List View"
                className={`p-2 rounded-xl text-xs ${
                  viewMode === "list"
                    ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("cards")}
                title="Card Grid View"
                className={`p-2 rounded-xl text-xs ${
                  viewMode === "cards"
                    ? "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4. Sticky / Fast A–Z Alphabet Jump Bar */}
        <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center justify-between text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
            <span>Jump to Letter (A to Z)</span>
            <span>{filteredItems.length} Names Found</span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
            <button
              type="button"
              onClick={() => setSelectedLetter("ALL")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold shrink-0 transition-all ${
                selectedLetter === "ALL"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200"
              }`}
            >
              ALL (A–Z)
            </button>

            {ALPHABET.map((letter) => {
              const hasNames = items.some(
                (n) => n.startingLetter.toUpperCase() === letter || n.name.toUpperCase().startsWith(letter)
              );
              return (
                <button
                  key={letter}
                  type="button"
                  disabled={!hasNames}
                  onClick={() => setSelectedLetter(letter)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold shrink-0 flex items-center justify-center transition-all ${
                    selectedLetter === letter
                      ? "bg-indigo-600 text-white shadow-xs"
                      : hasNames
                      ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                      : "opacity-30 text-zinc-400 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. A-to-Z Structured Sections (Exact Match with user's screenshot) */}
      <div className="space-y-12">
        {activeLetters.length > 0 ? (
          activeLetters.map((letter) => {
            const letterItems = groupedByLetter[letter];
            return (
              <section key={letter} id={`letter-${letter}`} className="space-y-4 scroll-mt-24">
                {/* Section Header (Semantic H2) */}
                <div className="pb-2 border-b border-zinc-200 dark:border-zinc-800">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                    Baby names starting with {letter}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    Explore meaningful baby names starting with '{letter}', curated for cultural depth, good rhythm, and auspicious meanings.
                  </p>
                </div>

                {/* Editorial Clean Numbered List View */}
                {viewMode === "list" ? (
                  <div className="space-y-2">
                    {letterItems.map((item, idx) => (
                      <div
                        key={item.id}
                        className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500/50 hover:shadow-xs flex items-center justify-between gap-3 transition-all group"
                      >
                        <div className="flex items-start sm:items-center gap-3 min-w-0">
                          <span className="text-xs font-bold text-zinc-400 w-5 shrink-0 pt-0.5 sm:pt-0">
                            {idx + 1}.
                          </span>

                          <div className="space-y-0.5 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-extrabold text-sm sm:text-base text-zinc-900 dark:text-white">
                                {item.name}
                              </span>
                              <span className="text-zinc-400 dark:text-zinc-500 font-normal">—</span>
                              <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-medium">
                                {item.meaning}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                              <span className="capitalize">{item.gender}</span>
                              <span>•</span>
                              <span>{item.origin}</span>
                              {item.pronunciation && (
                                <>
                                  <span>•</span>
                                  <span className="italic">{item.pronunciation}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons (1-Tap Copy, Audio, Save) */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => handlePlayAudio(item.name)}
                            title="Hear Pronunciation"
                            className="p-2 rounded-xl text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleToggleFav(item)}
                            title="Save to Favorites"
                            className={`p-2 rounded-xl transition-colors ${
                              favMap[item.id] || isNameFavorite(item.id)
                                ? "text-rose-500 bg-rose-50 dark:bg-rose-950/60"
                                : "text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                            }`}
                          >
                            <Heart
                              className={`w-3.5 h-3.5 ${
                                favMap[item.id] || isNameFavorite(item.id) ? "fill-current" : ""
                              }`}
                            />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleCopy(item)}
                            title="Copy Name & Meaning"
                            className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-indigo-600 hover:text-white text-zinc-700 dark:text-zinc-300 text-xs font-bold transition-all flex items-center gap-1.5"
                          >
                            {copiedId === item.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Rich Card Grid View */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {letterItems.map((item) => (
                      <NameCard key={item.id} nameItem={item} />
                    ))}
                  </div>
                )}
              </section>
            );
          })
        ) : (
          <div className="p-12 text-center rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <p className="text-sm font-bold text-zinc-700 dark:text-zinc-300">
              No names found matching "{search}"
            </p>
            <p className="text-xs text-zinc-400">
              Try adjusting your search query or selecting "ALL" letters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedLetter("ALL");
                setGenderFilter("all");
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 6. AI Studio Generator Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-indigo-950 via-zinc-950 to-purple-950 text-white border border-indigo-900/50 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Need Custom or Sibling Matches?</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold">
          Generate Personalized AI Baby Names
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl leading-relaxed">
          Blend Mom & Dad's names, match astrological letters, or generate rare cultural names based on deep virtues in seconds.
        </p>
        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/ai-baby-name-generator"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <span>Launch AI Baby Name Generator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/ai-name-combiner"
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all"
          >
            <span>Combine Parent Names</span>
          </Link>
        </div>
      </div>

      {/* 7. Related Categories Navigation */}
      {relatedLinks.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
            Explore Related Name Collections
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 transition-colors flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3 h-3 text-zinc-400" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 8. Verified FAQs Section */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle={`Everything you need to know about selecting the best ${badge.toLowerCase()}.`}
        faqs={activeFaqs}
      />

      {/* 9. Bottom CTA */}
      <CTASection
        title="Find or Generate the Perfect Name"
        subtitle="Explore our 15,000+ verified multicultural name vaults or generate custom names with AI."
        primaryBtnText="Try AI Baby Name Generator"
        primaryBtnHref="/ai-baby-name-generator"
        secondaryBtnText="Explore All Names"
        secondaryBtnHref="/names"
      />
    </div>
  );
}

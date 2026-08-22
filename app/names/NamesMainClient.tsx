"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  Heart,
  Volume2,
  Copy,
  Check,
  Wand2,
  ArrowRight,
  Filter,
  Layers,
  Globe2,
} from "lucide-react";
import { NAMES_DATA, NameRecord } from "@/data/namesData";
import {
  CORE_NAME_HUBS,
  ORIGIN_CULTURE_LIST,
  STYLE_PREFERENCE_LIST,
  MEANING_THEMES_LIST,
  AI_NAME_STUDIOS,
} from "@/data/namesTaxonomy";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { toggleFavoriteName, isNameFavorited } from "@/lib/namesFavoritesStore";

export function NamesMainClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter names based on instant search and active pills
  const filteredNames = useMemo(() => {
    return NAMES_DATA.filter((item) => {
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.themes.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesGender =
        selectedGender === "all" || item.gender.toLowerCase() === selectedGender.toLowerCase();

      const matchesOrigin =
        selectedOrigin === "all" || item.origin.toLowerCase() === selectedOrigin.toLowerCase();

      return matchesQuery && matchesGender && matchesOrigin;
    });
  }, [searchQuery, selectedGender, selectedOrigin]);

  const handleCopyName = async (name: NameRecord) => {
    const text = `${name.name} — ${name.meaning}`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(name.id);
      showToast(`Copied ${name.name}!`);
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

  const handleToggleFavorite = (name: NameRecord) => {
    const isNowFav = toggleFavoriteName(name);
    if (isNowFav) {
      showToast(`Saved ${name.name} to Favorites! ❤️`);
    } else {
      showToast(`Removed ${name.name} from Favorites`);
    }
  };

  const faqs = [
    {
      question: "How do I choose the best baby name for my child?",
      answer:
        "Focus on positive virtues, cultural resonance, easy spelling and pronunciation across languages, and check how naturally it pairs with your family surname.",
    },
    {
      question: "Are these baby names verified with authentic meanings?",
      answer:
        "Yes, every name in our 2026 taxonomy is cross-referenced with native linguistic root dictionaries including Sanskrit, Arabic, Latin, Greek, and Old Norse.",
    },
    {
      question: "Can I save my favorite names offline?",
      answer:
        "Yes! Click the heart icon on any name to save it to your private shortlist without needing an account or login.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="WebSite"
        title="100+ Unique Global Baby Names With Meanings (A to Z) [2026] | UniToolkit"
        description="Search 2026 verified baby names across Hindu, Muslim, Indian, Arabic, and Western cultures with instant pronunciation."
        url="https://unitoolkit.com/names"
      />

      <Breadcrumbs items={[{ label: "Names", href: "/names" }]} />

      {/* 1. Master Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Updated for 2026 • Verified Meanings & A–Z Guide</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          Global Baby Names & Meaning Directory
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Search verified baby names by meaning, origin, gender, and starting letter. Zero cards, clean editorial list layout with 1-click pronunciation and copy.
        </p>
      </div>

      {/* 2. Sleek Search & Filter Bar */}
      <div className="p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, meaning, or virtue (e.g. 'Aarav', 'Peaceful', 'Moon', 'Brave')..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm sm:text-base text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Gender Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: "all", label: "✨ All Genders" },
              { id: "boy", label: "👦 Boy Names" },
              { id: "girl", label: "👧 Girl Names" },
              { id: "unisex", label: "⚡ Unisex Names" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedGender(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGender === tab.id
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Culture Quick Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-zinc-400" />
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 focus:outline-none"
            >
              <option value="all">🌍 All Cultures</option>
              <option value="Indian">🇮🇳 Indian / Sanskrit</option>
              <option value="Arabic">🌙 Arabic / Islamic</option>
              <option value="English">🇬🇧 English / British</option>
              <option value="Irish">☘️ Irish / Celtic</option>
              <option value="Japanese">🌸 Japanese</option>
              <option value="French">🇫🇷 French</option>
              <option value="Spanish">🇪🇸 Spanish / Latin</option>
              <option value="Greek">🏛️ Greek / Mythology</option>
              <option value="Hebrew">🕊️ Hebrew / Biblical</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Pure Clean Numbered List (NO CARDS) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Trending & Curated Names"}
          </h2>
          <span className="text-xs text-zinc-500">{filteredNames.length} names found</span>
        </div>

        {filteredNames.length > 0 ? (
          <ol className="space-y-1.5 text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-medium list-none">
            {filteredNames.map((name, idx) => (
              <li
                key={name.id}
                className="flex items-baseline justify-between gap-3 py-2 group border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-2 rounded-lg transition-colors"
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-zinc-900 dark:text-white">
                      {idx + 1}. {name.name}
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500">—</span>
                    <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-normal">
                      {name.meaning}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="capitalize">{name.gender}</span>
                    <span>•</span>
                    <span>{name.origin}</span>
                    {name.pronunciation && (
                      <>
                        <span>•</span>
                        <span className="italic">/{name.pronunciation}/</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Action buttons (Copy, Audio, Save) */}
                <div className="flex items-center gap-1.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(name.name)}
                    title="Hear Pronunciation"
                    className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleFavorite(name)}
                    title="Save to Favorites"
                    className="p-1.5 text-zinc-400 hover:text-rose-500 transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isNameFavorited(name.id) ? "text-rose-500 fill-current" : ""
                      }`}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyName(name)}
                    title="Copy"
                    className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors"
                  >
                    {copiedId === name.id ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              No matching names found for &apos;{searchQuery}&apos;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedGender("all");
                setSelectedOrigin("all");
              }}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 underline cursor-pointer"
            >
              Clear Search & Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. 6 Dedicated AI Name Studios Section */}
      <section className="space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Wand2 className="w-3.5 h-3.5" />
            <span>AI Linguistic Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
            6 Intelligent AI Name Generation Studios
          </h2>
          <p className="text-sm text-zinc-500">
            Generate custom names tailored to your exact family heritage, meaning wishes, and phonetic rhythm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_NAME_STUDIOS.map((tool) => (
            <Link
              key={tool.slug}
              href={tool.route}
              className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 hover:shadow-lg transition-all space-y-3 group text-left"
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Wand2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {tool.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>Launch Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. 30 Origins & Cultures Explorer */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Explore 30+ Cultural Origins & Traditions
          </h2>
          <Link href="/names/baby" className="text-xs font-bold text-indigo-600 hover:underline">
            View All Baby Names →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
          {ORIGIN_CULTURE_LIST.map((orig) => (
            <Link
              key={orig.slug}
              href={`/names/${orig.slug}`}
              className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 hover:bg-white dark:hover:bg-zinc-800 text-center transition-all group"
            >
              <span className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 block truncate">
                {orig.name}
              </span>
              <span className="text-[10px] text-zinc-400 block truncate">{orig.region}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. 20 Aesthetic Styles */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
          Explore by Aesthetic Style & Vibe
        </h2>
        <div className="flex flex-wrap gap-2">
          {STYLE_PREFERENCE_LIST.map((st) => (
            <Link
              key={st.slug}
              href={`/names/${st.slug}`}
              className="px-3.5 py-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 transition-all shadow-2xs hover:scale-105"
            >
              #{st.name} Names
            </Link>
          ))}
        </div>
      </section>

      {/* 7. 20 Names by Meaning */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
          Explore Names by Underlying Meaning
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
          {MEANING_THEMES_LIST.map((m) => (
            <Link
              key={m.slug}
              href={`/names/meaning/${m.slug}`}
              className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 hover:bg-white dark:hover:bg-zinc-800 transition-all group"
            >
              <span className="text-base group-hover:scale-110 transition-transform">{m.emoji}</span>
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 block truncate">
                {m.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. FAQs */}
      <FAQSection faqs={faqs} title="Frequently Asked Questions About Global Names" />
    </div>
  );
}

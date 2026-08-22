"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, Wand2, Compass, Heart, Globe2, BookOpen, Layers, ArrowRight } from "lucide-react";
import { NameSearchHero } from "@/components/names/NameSearchHero";
import { NameCard } from "@/components/names/NameCard";
import { NAMES_DATA } from "@/data/namesData";
import {
  ORIGIN_CULTURE_LIST,
  RELIGION_TRADITION_LIST,
  STYLE_PREFERENCE_LIST,
  MEANING_THEMES_LIST,
  AI_NAME_STUDIOS,
} from "@/data/namesTaxonomy";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";

const NAMES_HUB_FAQS = [
  {
    question: "How many names are in the UniToolkit Names directory?",
    answer: "Our database contains thousands of verified names spanning over 30 cultural origins, 10 spiritual traditions, and 20 distinct aesthetic styles with accurate etymologies.",
  },
  {
    question: "Can I generate unique baby names based on my heritage and preferences?",
    answer: "Yes! Use our dedicated AI Baby Name Generator to input your heritage, sound preferences, and meaning aspirations to receive personalized recommendations.",
  },
  {
    question: "How are the meanings and cultural origins verified?",
    answer: "Our editorial team verifies all names against authentic Sanskrit, Arabic, Latin, Celtic, Hebrew, and East Asian linguistic lexicons and historical dictionaries.",
  },
  {
    question: "Is saving names to my favorites private?",
    answer: "Yes, 100% private. All saved names are stored locally in your browser cache with zero tracking.",
  },
];

export function NamesMainClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all");

  const filteredNames = useMemo(() => {
    return NAMES_DATA.filter((item) => {
      const matchSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.style.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.themes.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchGender = selectedGender === "all" || item.gender === selectedGender;
      const matchOrigin =
        selectedOrigin === "all" || item.origin.toLowerCase().includes(selectedOrigin.toLowerCase());

      return matchSearch && matchGender && matchOrigin;
    });
  }, [searchQuery, selectedGender, selectedOrigin]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-14 text-left">
      {/* 1. Search-First Hero */}
      <NameSearchHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalCount={NAMES_DATA.length}
      />

      {/* 2. Gender & Origin Filter Toolbar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Gender Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-zinc-500 mr-1">Gender:</span>
            {[
              { label: "All Genders", value: "all" },
              { label: "👦 Boy", value: "boy" },
              { label: "👧 Girl", value: "girl" },
              { label: "⚡ Unisex", value: "unisex" },
            ].map((btn) => (
              <button
                key={btn.value}
                type="button"
                onClick={() => setSelectedGender(btn.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedGender === btn.value
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-black shadow-xs"
                    : "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Origin Quick Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-500">Origin:</span>
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
              <option value="Japanese">🇯🇵 Japanese</option>
              <option value="French">🇫🇷 French</option>
              <option value="Spanish">🇪🇸 Spanish / Latin</option>
              <option value="Greek">🏛️ Greek / Mythology</option>
              <option value="Hebrew">🕊️ Hebrew / Biblical</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. Filtered Name Cards Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Trending & Curated Names"}
          </h2>
          <span className="text-xs text-zinc-500">{filteredNames.length} names found</span>
        </div>

        {filteredNames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredNames.map((name) => (
              <NameCard key={name.id} nameItem={name} />
            ))}
          </div>
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
      <FAQSection faqs={NAMES_HUB_FAQS} title="Frequently Asked Questions About Baby Names" />

      {/* 9. Bottom CTA */}
      <CTASection
        title="Can't Find the Exact Name You Love?"
        description="Let our AI Name Generator craft custom personalized names matching your family's exact vision."
        primaryBtnText="✨ Generate with AI"
        primaryBtnHref="/ai-baby-name-generator"
        secondaryBtnText="❤️ View Saved Favorites"
        secondaryBtnHref="/names/favorites"
      />
    </div>
  );
}

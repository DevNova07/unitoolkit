"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, Layers, Search, Filter, Globe2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { NameCard } from "./NameCard";
import { NameRecord } from "@/data/namesData";

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
  const [genderFilter, setGenderFilter] = useState<string>("all");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchSearch =
        search === "" ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.meaning.toLowerCase().includes(search.toLowerCase()) ||
        item.origin.toLowerCase().includes(search.toLowerCase());

      const matchGender = genderFilter === "all" || item.gender === genderFilter;

      return matchSearch && matchGender;
    });
  }, [items, search, genderFilter]);

  const defaultFaqs = [
    {
      question: `What are the most popular ${badge} right now?`,
      answer: `Top trending selections combine deep cultural roots with easy pronunciation and uplifting modern meanings.`,
    },
    {
      question: `How do I choose the best name for my newborn?`,
      answer: `Consider the syllable flow with your surname, cultural resonance, and whether the meaning reflects values you wish to impart.`,
    },
  ];

  const activeFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={activeFaqs}
        title={h1}
        description={intro}
        url={`https://unitoolkit.com/names/${categorySlug}`}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header with Semantic H1 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          {h1}
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {intro}
        </p>
      </div>

      {/* Quick AI Generator Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-200/80 dark:border-indigo-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Looking for AI-Generated Custom Names?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Generate unique custom variations tailored to your family heritage, letter preference, and sound rhythm.
          </p>
        </div>
        <Link
          href={`/ai-name-generator?origin=${encodeURIComponent(categorySlug)}`}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>✨ AI Name Studio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Filter & Live Search Toolbar */}
      <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Filter ${badge}...`}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Gender Toggle */}
        <div className="flex items-center gap-1 shrink-0">
          {[
            { label: "All", value: "all" },
            { label: "👦 Boy", value: "boy" },
            { label: "👧 Girl", value: "girl" },
            { label: "⚡ Unisex", value: "unisex" },
          ].map((btn) => (
            <button
              key={btn.value}
              type="button"
              onClick={() => setGenderFilter(btn.value)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                genderFilter === btn.value
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-black shadow-2xs"
                  : "bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Curated Name Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Curated {badge}
          </h2>
          <span className="text-xs text-zinc-500">{filteredItems.length} names available</span>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <NameCard key={item.id} nameItem={item} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              No matching names found for &apos;{search}&apos;.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setGenderFilter("all");
              }}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Editorial Naming Guide Section */}
      <section className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Linguistic & Naming Advice</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            How to Choose the Best {badge}
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Names carry lifelong emotional, cultural, and spiritual resonance. When selecting from this {badge.toLowerCase()} collection, keep these 3 core principles in mind:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <span>1. Phonetic Balance</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Say the full name aloud 3 times with your surname to verify that the cadence, vowels, and ending consonants roll effortlessly off the tongue.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <span>2. Meaning & Heritage</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Pick a name whose underlying virtue (strength, wisdom, joy, devotion) offers positive inspiration throughout childhood and adulthood.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 space-y-2">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
              <span>3. Cross-Cultural Ease</span>
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              In our global world, choosing a name with intuitive spelling and pronunciation makes school, travel, and international life smooth.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection faqs={activeFaqs} title={`Frequently Asked Questions About ${badge}`} />

      {/* Related Categories */}
      {relatedLinks.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-500" />
            <span>Explore Related Name Categories</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Find the Perfect Baby Name?"
        description="Try our AI Baby Name Generator to combine parental heritage, preferred initials, and meaningful vibes."
        primaryBtnText="✨ Launch AI Name Studio"
        primaryBtnHref="/ai-baby-name-generator"
        secondaryBtnText="📚 Browse All 10K+ Names"
        secondaryBtnHref="/names"
      />
    </div>
  );
}

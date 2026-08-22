"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Copy, Check, Volume2, Sparkles, BookOpen, Heart, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { NameRecord } from "@/data/namesData";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { toggleFavoriteName, isNameFavorite } from "@/lib/namesFavoritesStore";

interface OverviewSection {
  heading: string;
  body: string;
}

interface NamesTemplateProps {
  h1: string;
  badge: string;
  intro: string;
  items: NameRecord[];
  categoryType: string;
  categorySlug: string;
  bannerTitle?: string;
  bannerSubtitle?: string;
  tipsTitle?: string;
  tips?: { title: string; desc: string }[];
  overviewSections?: OverviewSection[];
  letterHeadingPrefix?: string;
  faqs?: { question: string; answer: string }[];
  relatedLinks?: { label: string; href: string }[];
  breadcrumbs?: { label: string; href?: string }[];
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LETTER_INTROS: Record<string, string> = {
  A: "Letter A is among the most popular starting sounds for unique baby names. These cute names are widely used across modern families and are easy to pronounce.",
  B: "Explore meaningful baby names starting with B, many connecting to devotion, prosperity, the earth, or inner strength.",
  C: "Whether you prefer a classic or a modern feel, these baby names starting with C offer great rhythm and timeless grace.",
  D: "Here are strong and auspicious baby names starting with D for your family's shortlist.",
  E: "Names with E can sound unique yet familiar. These are lovely modern baby names celebrating light and leadership.",
  F: "Discover joyful and radiant baby names beginning with F with deep spiritual and poetic origins.",
  G: "Explore noble and luminous baby names starting with G connecting to wisdom, glory, and serenity.",
  H: "Names starting with H carry warmth, courage, and blissful happiness.",
  I: "These luminous baby names starting with I connect to divine blessings and radiant morning light.",
  J: "Discover triumphant and peaceful baby names starting with J that resonate with victory and joy.",
  K: "Names beginning with K combine majestic royal heritage with crisp, modern phonetics.",
  L: "Explore gentle, melodious baby names starting with L celebrating life, love, and celestial light.",
  M: "Meaningful baby names starting with M with profound contemplation and cherished blessings.",
  N: "Names starting with N represent strong foundations, eternal comfort, and divine glow.",
  O: "Explore short, powerful baby names starting with O connected to prosperity and sacred wisdom.",
  P: "Loving and auspicious baby names starting with P celebrating beloved grace and divine gifts.",
  Q: "Generous and distinguished baby names starting with Q with rich heritage.",
  R: "Luminous and inspiring baby names starting with R representing sunlight, hope, and victory.",
  S: "Popular and prosperous baby names starting with S celebrating beauty, peace, and auspicious grace.",
  T: "Guiding and celestial baby names starting with T representing morning stars and radiant illumination.",
  U: "Prosperous and noble baby names starting with U symbolizing flourishing life and elevation.",
  V: "Auspicious baby names starting with V celebrating dawn, morning light, and sacred truth.",
  W: "Distinguished and graceful baby names starting with W with charming timeless resonance.",
  X: "Rare and unique baby names starting with X offering a fresh international sound.",
  Y: "Victorious and fragrant baby names starting with Y celebrating fame, triumph, and natural beauty.",
  Z: "Modern, popular, and radiant baby names starting with Z symbolizing steady growth and excellence.",
};

export function NamesTemplate({
  h1,
  badge,
  intro,
  items,
  categoryType,
  categorySlug,
  bannerTitle = "Baby Name Ideas",
  bannerSubtitle = "A to Z Curated List • 2026 Edition",
  tipsTitle = "How to choose a baby name (quick tips)",
  tips,
  overviewSections = [],
  letterHeadingPrefix = "Baby names starting with",
  faqs = [],
  relatedLinks = [],
  breadcrumbs = [{ label: "Names", href: "/names" }],
}: NamesTemplateProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (item: NameRecord) => {
    const text = `${item.name} — ${item.meaning}`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(item.id);
      showToast(`Copied: ${item.name} — ${item.meaning}`);
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

  const handleToggleFav = (nameItem: NameRecord) => {
    const isNow = toggleFavoriteName(nameItem);
    showToast(isNow ? `Saved ${nameItem.name} to favorites ❤️` : `Removed from favorites`);
  };

  // Subsets for Structured Intent Sections
  const boyNames = useMemo(() => items.filter((n) => n.gender === "boy"), [items]);
  const girlNames = useMemo(() => items.filter((n) => n.gender === "girl"), [items]);

  // Group items strictly by letter from the authentic category items
  const groupedByLetter = useMemo(() => {
    const groups: Record<string, NameRecord[]> = {};
    for (const letter of ALPHABET) {
      const letterNames = items.filter(
        (n) => n.startingLetter.toUpperCase() === letter || n.name.toUpperCase().startsWith(letter)
      );

      if (letterNames.length > 0) {
        groups[letter] = letterNames;
      }
    }
    return groups;
  }, [items]);

  const activeLetters = Object.keys(groupedByLetter);

  const defaultTips = [
    { title: "Meaning first", desc: "Pick a quality you wish for your child: peace, courage, wisdom, or light." },
    { title: "Say it out loud", desc: "Pair the name with your surname; check nicknames family might use." },
    { title: "Astrology letter", desc: "Many families choose from the alphabet suggested at birth, use the sections below by letter." },
    { title: "Spelling", desc: "One clear spelling avoids school-form confusion later." },
    { title: "Keep a short list", desc: "Three to five names are easier to decide than thirty." },
  ];

  const activeTips = tips && tips.length > 0 ? tips : defaultTips;

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
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={activeFaqs}
        title={h1}
        description={intro}
        url={`https://unitoolkit.com/names/${categorySlug}`}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. Article Title & Metadata */}
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          {h1}
        </h1>

        <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          <span>Updated for 2026</span>
          <span>•</span>
          <span>Verified Meanings & A–Z Guide</span>
        </div>

        <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
          {intro}
        </p>
      </header>

      {/* 2. Editorial Notebook Banner */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 via-stone-200 to-amber-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-stone-300/80 dark:border-zinc-800 shadow-md flex items-center justify-center p-6 text-center select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

        <div className="relative px-8 sm:px-14 py-6 sm:py-8 rounded-2xl bg-white/90 dark:bg-zinc-950/90 shadow-xl border border-stone-200/90 dark:border-zinc-800 backdrop-blur-xs space-y-2 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <p className="font-serif italic text-3xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            {bannerTitle}
          </p>
          <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold">
            {bannerSubtitle}
          </p>
        </div>
      </div>

      {/* 3. Dedicated Intent Overview Sections (If Provided) */}
      {overviewSections.length > 0 && (
        <div className="space-y-6 pt-2">
          {overviewSections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                {sec.heading}
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {sec.body}
              </p>
            </section>
          ))}
        </div>
      )}

      {/* 4. Intent Highlights: Top Boy Picks in this Category (When applicable) */}
      {boyNames.length > 0 && categorySlug !== "girl" && (
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            Popular {bannerTitle?.replace(" Ideas", "")} for Boys
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500">
            Strong, classic, and modern boy choices with authentic cultural roots.
          </p>
          <ol className="space-y-2 text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-medium list-none">
            {boyNames.slice(0, 5).map((item, idx) => (
              <li
                key={`top-boy-${item.id}`}
                className="flex items-baseline justify-between gap-2 py-1 group border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="font-semibold text-zinc-900 dark:text-white shrink-0">
                    {idx + 1}. {item.name}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500">—</span>
                  <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal">
                    {item.meaning}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(item.name)}
                    title="Hear Pronunciation"
                    className="p-1 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    title="Copy Name"
                    className="p-1 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 5. Intent Highlights: Top Girl Picks in this Category (When applicable) */}
      {girlNames.length > 0 && categorySlug !== "boy" && (
        <section className="space-y-3 pt-2">
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
            Popular {bannerTitle?.replace(" Ideas", "")} for Girls
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500">
            Sweet, elegant, and melodious girl choices celebrating grace and beauty.
          </p>
          <ol className="space-y-2 text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-medium list-none">
            {girlNames.slice(0, 5).map((item, idx) => (
              <li
                key={`top-girl-${item.id}`}
                className="flex items-baseline justify-between gap-2 py-1 group border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="font-semibold text-zinc-900 dark:text-white shrink-0">
                    {idx + 1}. {item.name}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500">—</span>
                  <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal">
                    {item.meaning}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => handlePlayAudio(item.name)}
                    title="Hear Pronunciation"
                    className="p-1 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    title="Copy Name"
                    className="p-1 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* 6. Category Specific Quick Tips */}
      <section className="space-y-4 pt-2">
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          {tipsTitle}
        </h2>

        <ul className="space-y-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc list-inside">
          {activeTips.map((t, idx) => (
            <li key={idx}>
              <strong>{t.title}:</strong> {t.desc}
            </li>
          ))}
        </ul>
      </section>

      {/* 7. A–Z Quick Jump Bar */}
      {activeLetters.length > 1 && (
        <nav aria-label="A to Z Alphabet Jump" className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-1.5 flex-wrap text-xs font-bold text-zinc-600 dark:text-zinc-300">
            <span className="text-zinc-400 font-semibold pr-1">Jump to:</span>
            {activeLetters.map((l) => (
              <a
                key={l}
                href={`#letter-${l.toLowerCase()}`}
                className="px-2 py-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* 8. Pure Clean A to Z Text Sections */}
      <div className="space-y-12 pt-4">
        {activeLetters.map((letter) => {
          const letterItems = groupedByLetter[letter];
          const introParagraph =
            LETTER_INTROS[letter] ||
            `Explore meaningful baby names starting with ${letter}, curated for cultural depth, good rhythm, and auspicious meanings.`;

          return (
            <section
              key={letter}
              id={`letter-${letter.toLowerCase()}`}
              className="space-y-3 scroll-mt-20"
            >
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                {letterHeadingPrefix} {letter}
              </h2>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {introParagraph}
              </p>

              <ol className="space-y-2.5 pt-2 text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-medium list-none">
                {letterItems.map((item, idx) => (
                  <li
                    key={item.id}
                    className="flex items-baseline justify-between gap-2 py-1 group border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="font-semibold text-zinc-900 dark:text-white shrink-0">
                        {idx + 1}. {item.name}
                      </span>
                      <span className="text-zinc-400 dark:text-zinc-500">—</span>
                      <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-normal">
                        {item.meaning}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => handlePlayAudio(item.name)}
                        title="Hear Pronunciation"
                        className="p-1 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopy(item)}
                        title="Copy Name & Meaning"
                        className="p-1 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </div>

      {/* 9. FAQs Section */}
      <FAQSection faqs={activeFaqs} title={`Frequently Asked Questions`} />

      {/* 10. E-E-A-T Author & Research Review Box */}
      <AuthorBioBox categoryType="Names" topic={h1} />

      {/* 11. Related Category Links */}
      {relatedLinks.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
            Explore More Baby Name Collections
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 transition-all"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

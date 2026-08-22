"use client";

import Link from "next/link";
import { Globe2, Sparkles, ArrowRight, Wand2, Compass, Heart, Users } from "lucide-react";

export function NamesFeatureCard() {
  const quickPills = [
    { label: "👦 Boy Names", href: "/names/boy" },
    { label: "👧 Girl Names", href: "/names/girl" },
    { label: "⚡ Unisex", href: "/names/unisex" },
    { label: "🇮🇳 Indian", href: "/names/indian" },
    { label: "🌙 Arabic", href: "/names/arabic" },
    { label: "✨ Sanskrit", href: "/names/sanskrit" },
    { label: "👑 Royal", href: "/names/royal" },
    { label: "❤️ Love & Light", href: "/names/meaning/love" },
    { label: "🤖 AI Baby Generator", href: "/ai-baby-name-generator" },
  ];

  return (
    <section className="w-full text-left">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-black border border-indigo-800/60 p-6 sm:p-10 text-white shadow-xl">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-xs font-bold text-indigo-300">
              <Globe2 className="w-3.5 h-3.5" />
              <span>New Hub • UniToolkit Global Names 2026</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              10,000+ Global Baby Names with Meaning & AI Studio
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Explore verified baby names across 30+ cultures (Indian, Arabic, Persian, French, Japanese & more), 20 aesthetic styles, and AI baby name generation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/names"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-zinc-900 font-bold text-xs sm:text-sm shadow-md hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all"
              >
                <Compass className="w-4 h-4 text-indigo-600" />
                <span>Explore Names Directory</span>
              </Link>

              <Link
                href="/ai-baby-name-generator"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600/40 hover:bg-indigo-600/60 border border-indigo-400/40 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <Wand2 className="w-4 h-4 text-indigo-300" />
                <span>AI Baby Name Generator</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Quick Tags Grid */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-300 font-semibold border-b border-white/10 pb-2">
              <span>Quick Discovery Hubs</span>
              <span className="text-indigo-400">135+ Pages</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {quickPills.map((pill) => (
                <Link
                  key={pill.href}
                  href={pill.href}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-semibold text-zinc-200 hover:text-white transition-all hover:scale-105"
                >
                  {pill.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 text-right">
              <Link
                href="/names"
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-300 hover:text-indigo-200 hover:underline"
              >
                <span>View All 30 Origins & 20 Styles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

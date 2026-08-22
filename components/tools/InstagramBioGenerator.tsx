"use client";

import { useState } from "react";
import { Copy, Check, Search, X } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface BioTemplate {
  id: string;
  category: "boys" | "girls" | "aesthetic" | "vip" | "business" | "minimal";
  text: string;
  tags: string[];
}

const BIO_TEMPLATES: BioTemplate[] = [
  // VIP & Attitude for Boys
  {
    id: "bio-1",
    category: "boys",
    text: `👑 King of my own world\n⚡ Silent moves • Loud success\n🕶️ Rule breaker & Game changer\n📍 Mumbai | CA 🎓\n🔥 Wish me on 18th Oct 🎂`,
    tags: ["Royal", "Attitude", "VIP"],
  },
  {
    id: "bio-2",
    category: "boys",
    text: `🔱 Mahakal Ke Bhakt 🔱\n👔 Dapper Gentleman\n🚀 Building my empire in silence\n🎯 No competition • Only progress`,
    tags: ["Desi Swag", "Royal", "Bhai"],
  },
  {
    id: "bio-3",
    category: "boys",
    text: `👑 Official Account 👑\n💎 Classy & Savage\n🏎️ Horsepower & Late Night Drives\n❌ Trust Nobody ❌`,
    tags: ["Savage", "Alpha"],
  },
  {
    id: "bio-3b",
    category: "boys",
    text: `★》VIP Account 🎖️\n★》Royal Blood 👑\n★》Gym Freak 💪\n★》Single & Focused 🎯\n★》Checkmate is coming ♟️`,
    tags: ["VIP Symbols", "Swag"],
  },

  // Aesthetic & Queen for Girls
  {
    id: "bio-4",
    category: "girls",
    text: `🌸 Soft heart • Fierce mind\n✨ Living in my main character era\n🎨 Coffee, sunsets & poetry\n🌙 Manifesting pure magic\n💌 PR/Collabs: DM`,
    tags: ["Aesthetic", "Soft Girl", "Queen"],
  },
  {
    id: "bio-5",
    category: "girls",
    text: `👑 Queen with her own crown\n💅 Too glam to give a damn\n🥻 Saree lover • Chai enthusiast\n✨ Creating sunshine on rainy days`,
    tags: ["Desi Glam", "Sassy", "Queen"],
  },
  {
    id: "bio-6",
    category: "girls",
    text: `🌿 Slow living & warm lattes\n📷 Film archives & uncurated life\n🕊️ Protecting my peace\n🤍 90s soul with modern goals`,
    tags: ["Minimalist", "Cozy", "Vibes"],
  },

  // Minimalist & Clean
  {
    id: "bio-7",
    category: "minimal",
    text: `creating my own light.\nvisual diary & thoughts.\nbased in new delhi.`,
    tags: ["Minimal", "Aesthetic"],
  },
  {
    id: "bio-8",
    category: "minimal",
    text: `less noise, more focus.\narchitect of my own destiny.\n🕊️`,
    tags: ["Deep", "OneLiner"],
  },

  // VIP & Luxury Symbols
  {
    id: "bio-9",
    category: "vip",
    text: `◢ 👑 Royal Entry 👑 ◣\n◢ 🎯 Billionaire Mindset ◣\n◢ 🏎️ Fast Lane Living ◣\n◢ ⚡ Unapologetic Standards ◣`,
    tags: ["VIP Borders", "Attitude"],
  },
  {
    id: "bio-10",
    category: "vip",
    text: `★━━━━━━━━★\n👑 The Untamed King 👑\n⚡ In a league of my own\n🏆 Winner by default\n★━━━━━━━━★`,
    tags: ["Borders", "VIP Style"],
  },

  // Business & Creators
  {
    id: "bio-11",
    category: "business",
    text: `🚀 Helping creators scale to $10K/mo\n📈 500K+ community across socials\n🎙️ Host of The Creator Growth Show\n👇 Free viral hook templates:`,
    tags: ["Entrepreneur", "Growth", "Coach"],
  },
  {
    id: "bio-12",
    category: "business",
    text: `✨ Visual Storyteller & Filmmaker\n🎬 4K Cinematic Reels & Travels\n📩 Work: hello@creative.studio\n📍 Worldwide nomad ✈️`,
    tags: ["Creator", "Filmmaker", "Portfolio"],
  },
];

export function InstagramBioGenerator() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredBios = BIO_TEMPLATES.filter((b) => {
    const matchesCategory = selectedCategory === "all" || b.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      b.text.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q)) ||
      b.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleCopy = async (text: string, id: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedId(id);
      showToast("Bio copied to clipboard!", "sparkle");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div id="bio-vault" className="space-y-6 text-left scroll-mt-24">
      {/* Curated VIP & Aesthetic Bios Gallery */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Trending VIP & Aesthetic Bio Vault
            </h2>
            <p className="text-xs text-zinc-500">
              Ready-made bio templates categorized for boys, girls, VIP status, and creators.
            </p>
          </div>

          <span className="text-xs text-zinc-400 font-medium">
            Showing <strong className="text-zinc-900 dark:text-white">{filteredBios.length}</strong> bios
          </span>
        </div>

        {/* 🔍 Search Input for Bios */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-zinc-400 absolute left-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search VIP bios (e.g. king, queen, mahakal, gym, royal, minimalist)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: "all", label: "All Styles" },
            { id: "boys", label: "👑 Boys Attitude" },
            { id: "girls", label: "🌸 Girls Queen" },
            { id: "vip", label: "★ VIP Symbols" },
            { id: "minimal", label: "🕊️ Minimalist" },
            { id: "business", label: "💼 Creator / Pro" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white shadow-2xs"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBios.map((bio) => (
            <div
              key={bio.id}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs flex flex-col justify-between gap-4 hover:border-indigo-500/50 transition-all"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {bio.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-[10px] font-bold text-zinc-500"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <pre className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap font-sans leading-relaxed">
                  {bio.text}
                </pre>
              </div>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900/60 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => handleCopy(bio.text, bio.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    copiedId === bio.id
                      ? "bg-emerald-500 border-emerald-500 text-white shadow-xs"
                      : "bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 shadow-2xs"
                  }`}
                >
                  {copiedId === bio.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                  <span>{copiedId === bio.id ? "Copied Bio" : "Copy Bio"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

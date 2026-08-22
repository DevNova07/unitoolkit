"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Trash2, Copy, Check, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { NameRecord } from "@/data/namesData";
import { getFavoriteNames, clearAllFavoriteNames, NAMES_FAVORITES_CHANGE_EVENT } from "@/lib/namesFavoritesStore";
import { NameCard } from "@/components/names/NameCard";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

export function NamesFavoritesClient() {
  const [favorites, setFavorites] = useState<NameRecord[]>(() => {
    if (typeof window !== "undefined") {
      try {
        return getFavoriteNames();
      } catch {
        return [];
      }
    }
    return [];
  });
  const [copiedAll, setCopiedAll] = useState(false);

  useEffect(() => {
    const handleUpdate = () => setFavorites(getFavoriteNames());
    window.addEventListener(NAMES_FAVORITES_CHANGE_EVENT, handleUpdate);
    return () => window.removeEventListener(NAMES_FAVORITES_CHANGE_EVENT, handleUpdate);
  }, []);

  const handleCopyAll = async () => {
    if (favorites.length === 0) return;
    const text = favorites
      .map((f) => `${f.name} (${f.gender}) — ${f.meaning} [${f.origin}]`)
      .join("\n");
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedAll(true);
      showToast(`Copied all ${favorites.length} saved names!`);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to remove all saved favorite names?")) {
      clearAllFavoriteNames();
      showToast("Cleared all saved names");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 text-left">
      <Breadcrumbs items={[{ label: "Names", href: "/names" }, { label: "My Saved Names" }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-bold text-rose-600 dark:text-rose-400">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Private Offline Collection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            Saved Favorite Names
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
            Your shortlisted baby and character names stored securely in your browser cache. Zero login required.
          </p>
        </div>

        {favorites.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyAll}
              className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold shadow-xs hover:opacity-90 flex items-center gap-1.5"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? "Copied All" : "Copy All"}</span>
            </button>

            <button
              type="button"
              onClick={handleClearAll}
              className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold border border-rose-200 dark:border-rose-900 hover:bg-rose-100 flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          </div>
        )}
      </div>

      {/* Favorites Grid */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((item) => (
            <NameCard key={item.id} nameItem={item} />
          ))}
        </div>
      ) : (
        <div className="p-12 sm:p-16 text-center rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              No Favorite Names Saved Yet
            </h3>
            <p className="text-xs text-zinc-500 max-w-md mx-auto">
              Click the heart icon on any name card across our 10,000+ name vaults or AI generator studios to build your personal shortlist.
            </p>
          </div>
          <Link
            href="/names"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs"
          >
            <span>Explore Names Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

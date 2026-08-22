"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Trash2, Copy, Check, Sparkles, ArrowRight, Volume2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { NameRecord } from "@/data/namesData";
import { getFavoriteNames, clearAllFavoriteNames, NAMES_FAVORITES_CHANGE_EVENT, toggleFavoriteName } from "@/lib/namesFavoritesStore";
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
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const handleUpdate = () => setFavorites(getFavoriteNames());
    window.addEventListener(NAMES_FAVORITES_CHANGE_EVENT, handleUpdate);
    return () => window.removeEventListener(NAMES_FAVORITES_CHANGE_EVENT, handleUpdate);
  }, []);

  const handleCopyAll = async () => {
    if (favorites.length === 0) return;
    const text = favorites
      .map((f, idx) => `${idx + 1}. ${f.name} — ${f.meaning} [${f.origin}]`)
      .join("\n");
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedAll(true);
      showToast(`Copied all ${favorites.length} saved names!`);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

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

  const handleRemoveFavorite = (name: NameRecord) => {
    toggleFavoriteName(name);
    showToast(`Removed ${name.name} from Favorites`);
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
              className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold shadow-xs hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? "Copied All" : "Copy All"}</span>
            </button>

            <button
              type="button"
              onClick={handleClearAll}
              className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold border border-rose-200 dark:border-rose-900 hover:bg-rose-100 flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          </div>
        )}
      </div>

      {/* Favorites List: Pure Clean Numbered Text (NO CARDS) */}
      {favorites.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Shortlisted Baby Names
            </h2>
            <span className="text-xs text-zinc-500">{favorites.length} saved</span>
          </div>

          <ol className="space-y-1.5 text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-medium list-none">
            {favorites.map((name, idx) => (
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

                {/* Action buttons (Copy, Audio, Remove) */}
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
                    onClick={() => handleRemoveFavorite(name)}
                    title="Remove from favorites"
                    className="p-1.5 text-rose-500 hover:text-rose-700 transition-colors"
                  >
                    <Heart className="w-4 h-4 fill-current text-rose-500" />
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
        </div>
      ) : (
        <div className="p-16 text-center rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
              No Saved Names Yet
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto">
              Explore our global directory or generate custom names and click the heart icon to build your family shortlist.
            </p>
          </div>
          <Link
            href="/names"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
          >
            <span>Browse Names Hub</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

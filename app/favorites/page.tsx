"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bookmark, Copy, Check, Trash2, Sparkles, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Caption } from "@/lib/types";
import { getFavorites, removeFavorite, clearAllFavorites, FAVORITES_CHANGE_EVENT } from "@/lib/favoritesStore";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Caption[]>(() => {
    if (typeof window !== "undefined") {
      try {
        return getFavorites();
      } catch {
        return [];
      }
    }
    return [];
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  useEffect(() => {
    const handleUpdate: EventListener = () => {
      setFavorites(getFavorites());
    };

    window.addEventListener(FAVORITES_CHANGE_EVENT, handleUpdate);
    return () => window.removeEventListener(FAVORITES_CHANGE_EVENT, handleUpdate);
  }, []);

  const handleCopy = async (text: string, id: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      showToast("Caption copied to clipboard!");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleCopyAll = async () => {
    if (favorites.length === 0) return;
    const allText = favorites.map((f) => f.text).join("\n\n");
    const ok = await copyToClipboard(allText);
    if (ok) {
      setCopiedAll(true);
      showToast(`Copied all ${favorites.length} saved captions!`);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  const handleRemove = (id: string) => {
    removeFavorite(id);
    showToast("Removed from saved captions");
  };

  const handleClearAll = () => {
    if (confirm("Are you sure you want to remove all saved captions?")) {
      clearAllFavorites();
      showToast("Cleared all saved captions");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <Breadcrumbs items={[{ label: "Saved Favorites" }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>Personal Collection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Saved Favorites
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
            All your saved ready-made and AI-generated captions are safely stored here for quick copying whenever you need them.
          </p>
        </div>

        {favorites.length > 0 && (
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleCopyAll}
              className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-bold shadow-xs hover:opacity-90 flex items-center gap-1.5 transition-all"
            >
              {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? "Copied All" : "Copy All"}</span>
            </button>

            <button
              type="button"
              onClick={handleClearAll}
              className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-semibold border border-rose-200 dark:border-rose-900 hover:bg-rose-100 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          </div>
        )}
      </div>

      {/* Favorites List */}
      {favorites.length > 0 ? (
        <div className="space-y-3">
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xs divide-y divide-zinc-100 dark:divide-zinc-900">
            {favorites.map((item) => {
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="py-4 sm:py-5 flex items-center justify-between gap-4 group text-left px-2 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors"
                >
                  <p className="text-sm sm:text-base font-normal text-zinc-900 dark:text-zinc-100 leading-relaxed select-text whitespace-pre-line">
                    &ldquo;{item.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleCopy(item.text, item.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                        isCopied
                          ? "bg-emerald-500 border-emerald-500 text-white shadow-2xs"
                          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      }`}
                      aria-label="Copy caption"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRemove(item.id)}
                      className="p-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 sm:p-16 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
            <Bookmark className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">No saved captions yet</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
              Click the bookmark icon on any ready-made or AI-generated caption to save it here for future posts.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/captions"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-semibold shadow-xs hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <span>Explore Caption Library</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/ai-caption-generator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate Captions with AI</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

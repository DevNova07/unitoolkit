"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Heart, Volume2 } from "lucide-react";
import { NameRecord } from "@/data/namesData";
import { isNameFavorite, toggleFavoriteName, NAMES_FAVORITES_CHANGE_EVENT } from "@/lib/namesFavoritesStore";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface NameCardProps {
  nameItem: NameRecord;
  index?: number;
}

export function NameCard({ nameItem, index }: NameCardProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isNameFavorite(nameItem.id));
    const handleUpdate = () => setSaved(isNameFavorite(nameItem.id));
    window.addEventListener(NAMES_FAVORITES_CHANGE_EVENT, handleUpdate);
    return () => window.removeEventListener(NAMES_FAVORITES_CHANGE_EVENT, handleUpdate);
  }, [nameItem.id]);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const copyText = `${nameItem.name} — ${nameItem.meaning}`;
    const ok = await copyToClipboard(copyText);
    if (ok) {
      setCopied(true);
      showToast(`Copied ${nameItem.name}!`);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isNow = toggleFavoriteName(nameItem);
    setSaved(isNow);
    showToast(isNow ? `Saved ${nameItem.name} to favorites ❤️` : `Removed from favorites`);
  };

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(nameItem.name);
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex items-baseline justify-between gap-3 py-2 group border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-2 rounded-lg transition-colors text-left">
      <div className="space-y-0.5 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-bold text-zinc-900 dark:text-white">
            {typeof index === "number" ? `${index + 1}. ` : ""}{nameItem.name}
          </span>
          <span className="text-zinc-400 dark:text-zinc-500">—</span>
          <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-normal">
            {nameItem.meaning}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="capitalize">{nameItem.gender}</span>
          <span>•</span>
          <span>{nameItem.origin}</span>
          {nameItem.pronunciation && (
            <>
              <span>•</span>
              <span className="italic">/{nameItem.pronunciation}/</span>
            </>
          )}
        </div>
      </div>

      {/* Action buttons (Copy, Audio, Save) */}
      <div className="flex items-center gap-1.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          onClick={handleSpeak}
          title="Hear Pronunciation"
          className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors"
        >
          <Volume2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleFavorite}
          title="Save to Favorites"
          className="p-1.5 text-zinc-400 hover:text-rose-500 transition-colors"
        >
          <Heart className={`w-4 h-4 ${saved ? "text-rose-500 fill-current" : ""}`} />
        </button>

        <button
          type="button"
          onClick={handleCopy}
          title="Copy"
          className="p-1.5 text-zinc-400 hover:text-indigo-600 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

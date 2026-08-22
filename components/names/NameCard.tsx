"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Heart, Volume2, Sparkles, Globe2, Share2 } from "lucide-react";
import { NameRecord } from "@/data/namesData";
import { isNameFavorite, toggleFavoriteName, NAMES_FAVORITES_CHANGE_EVENT } from "@/lib/namesFavoritesStore";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface NameCardProps {
  nameItem: NameRecord;
  onSelect?: (name: NameRecord) => void;
}

export function NameCard({ nameItem, onSelect }: NameCardProps) {
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
    const copyText = `${nameItem.name} (${nameItem.gender === "boy" ? "Boy" : nameItem.gender === "girl" ? "Girl" : "Unisex"}) — Meaning: ${nameItem.meaning} [Origin: ${nameItem.origin}]`;
    const ok = await copyToClipboard(copyText);
    if (ok) {
      setCopied(true);
      showToast(`Copied ${nameItem.name} & meaning!`);
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
    } else {
      showToast(`Pronunciation: ${nameItem.pronunciation || nameItem.name}`);
    }
  };

  const genderBg =
    nameItem.gender === "boy"
      ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
      : nameItem.gender === "girl"
      ? "bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800"
      : "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800";

  const genderIcon =
    nameItem.gender === "boy" ? "👦 Boy" : nameItem.gender === "girl" ? "👧 Girl" : "⚡ Unisex";

  return (
    <div
      onClick={() => onSelect?.(nameItem)}
      className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300 text-left cursor-pointer"
    >
      {/* Top Bar: Gender Badge + Origin Pill + Action Icons */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${genderBg}`}>
            {genderIcon}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
            {nameItem.origin}
          </span>
          {nameItem.religion && (
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
              {nameItem.religion}
            </span>
          )}
        </div>

        {/* Favorite & Audio buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleSpeak}
            title="Hear Pronunciation"
            className="p-1.5 rounded-xl text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <Volume2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleFavorite}
            title={saved ? "Remove from favorites" : "Save to favorites"}
            className={`p-1.5 rounded-xl transition-colors ${
              saved
                ? "text-rose-500 bg-rose-50 dark:bg-rose-950/60"
                : "text-zinc-400 hover:text-rose-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
          >
            <Heart className={`w-4 h-4 ${saved ? "fill-rose-500" : ""}`} />
          </button>
        </div>
      </div>

      {/* Main Name & Pronunciation */}
      <div className="space-y-1.5">
        <div className="flex items-baseline gap-2">
          <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {nameItem.name}
          </h3>
          {nameItem.pronunciation && (
            <span className="text-xs text-zinc-400 font-mono">/{nameItem.pronunciation}/</span>
          )}
        </div>

        {/* Meaning Description */}
        <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-snug">
          {nameItem.meaning}
        </p>

        {nameItem.detailedMeaning && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1 line-clamp-2">
            {nameItem.detailedMeaning}
          </p>
        )}
      </div>

      {/* Footer Tags & 1-Click Copy */}
      <div className="flex items-center justify-between pt-4 mt-3 border-t border-zinc-100 dark:divide-zinc-800 border-zinc-100 dark:border-zinc-800/80 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          {nameItem.style.slice(0, 2).map((s) => (
            <span key={s} className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              #{s}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-xs shadow-xs hover:opacity-90 active:scale-95 transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}

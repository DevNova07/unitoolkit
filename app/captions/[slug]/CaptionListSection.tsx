"use client";

import { useState } from "react";
import { Copy, Check, Share2, Heart } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { toggleFavorite } from "@/lib/favoritesStore";

interface CaptionListSectionProps {
  index: number;
  title: string;
  captions: string[];
}

export function CaptionListSection({
  index,
  title,
  captions,
}: CaptionListSectionProps) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (text: string, idx: number) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedIdx(idx);
      showToast("Caption copied to clipboard! 📋✨", "success");
      setTimeout(() => setCopiedIdx(null), 1800);
    }
  };

  const handleWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const handleFavorite = (text: string) => {
    toggleFavorite({
      text,
      category: "captions",
    });
    showToast("Saved to favorites! ❤️", "sparkle");
  };

  return (
    <section id={`section-${index}`} className="space-y-4 scroll-mt-20">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
          {title}
        </h2>
        <span className="text-xs font-bold text-zinc-400">
          {captions.length} Lines
        </span>
      </div>

      <ol className="space-y-2 text-base sm:text-lg text-zinc-900 dark:text-zinc-100 font-medium list-none">
        {captions.map((text, idx) => (
          <li
            key={idx}
            className="flex items-baseline justify-between gap-3 py-2 group border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-2 rounded-lg transition-colors"
          >
            <div className="flex items-baseline gap-2 min-w-0">
              <span className="font-bold text-zinc-400 dark:text-zinc-500 shrink-0 text-sm">
                {idx + 1}.
              </span>
              <span className="text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed">
                {text}
              </span>
            </div>

            <div className="flex items-center gap-1 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={() => handleFavorite(text)}
                title="Save Favorite"
                className="p-1 text-zinc-400 hover:text-rose-500 transition-colors cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => handleWhatsApp(text)}
                title="Share on WhatsApp"
                className="p-1 text-zinc-400 hover:text-emerald-500 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => handleCopy(text, idx)}
                title="Copy Caption"
                className="p-1 text-zinc-400 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {copiedIdx === idx ? (
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
}

"use client";

import { useState } from "react";
import { Copy, Check, Heart } from "lucide-react";
import { BioItem } from "@/data/biosData";
import { showToast } from "@/components/common/Toast";
import { copyToClipboard } from "@/lib/utils";

interface BioCardsListProps {
  bios: BioItem[];
}

export function BioCardsList({ bios }: BioCardsListProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      showToast("Bio copied with line breaks!", "success");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {bios.map((bio) => {
        const isCopied = copiedId === bio.id;
        return (
          <div
            key={bio.id}
            className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between gap-4 hover:border-pink-500/50 transition-all shadow-2xs"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-1 border-b border-zinc-200/50 dark:border-zinc-800/50">
                <span className="font-semibold text-pink-600 dark:text-pink-400 capitalize">
                  {bio.category}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                  {bio.likes.toLocaleString()}
                </span>
              </div>
              <pre className="font-sans text-sm text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap leading-relaxed select-all">
                {bio.text}
              </pre>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50">
              <div className="flex flex-wrap gap-1">
                {bio.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-[10px] text-zinc-600 dark:text-zinc-400"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => handleCopy(bio.id, bio.text)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                  isCopied
                    ? "bg-emerald-600 text-white"
                    : "bg-pink-600/10 hover:bg-pink-600 text-pink-600 hover:text-white"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

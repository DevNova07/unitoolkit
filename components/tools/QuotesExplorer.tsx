"use client";

import { useState } from "react";
import { Copy, Check, Share2, Heart } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { QUOTE_SECTIONS, QuoteItem } from "@/data/quotesData";

export function QuotesExplorer() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});
  const [hasUpvoted, setHasUpvoted] = useState<Record<string, boolean>>({});

  const handleCopyQuote = async (quote: QuoteItem) => {
    const formatted = `"${quote.quote}" — ${quote.author}`;
    const ok = await copyToClipboard(formatted);
    if (ok) {
      setCopiedId(quote.id);
      showToast("Quote copied with author attribution!", "sparkle");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleShareWhatsApp = (quote: QuoteItem) => {
    const text = encodeURIComponent(`"${quote.quote}"\n— ${quote.author}\n\nVia UniToolkit`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleUpvote = (id: string, currentLikes: number) => {
    if (hasUpvoted[id]) {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) - 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: false }));
    } else {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) + 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: true }));
      showToast("❤️ Upvoted this quote!", "heart");
    }
  };

  return (
    <div className="space-y-14 text-left">
      {QUOTE_SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="space-y-4 pt-2 scroll-mt-24"
        >
          {/* Section Header: Clean & Editorial */}
          <div className="space-y-1.5 pb-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {section.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
              {section.intro}
            </p>
          </div>

          {/* Numbered Editorial List (Clean Natural Background, No Cards) */}
          <div className="space-y-1 sm:space-y-1.5">
            {section.items.map((q, idx) => {
              const isCopied = copiedId === q.id;
              const currentLikes = upvotes[q.id] ?? q.likes;
              const isLiked = hasUpvoted[q.id];

              return (
                <div
                  key={q.id}
                  className="group flex items-start sm:items-center justify-between gap-3 sm:gap-4 py-2.5 sm:py-3 text-left rounded-xl transition-colors hover:bg-zinc-50/70 dark:hover:bg-zinc-900/40 px-2 -mx-2"
                >
                  {/* Number index */}
                  <span className="text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500 tabular-nums shrink-0 pt-0.5 sm:pt-0 min-w-[1.5rem] select-none">
                    {idx + 1}.
                  </span>

                  {/* Quote Content: 1-Tap Copy on Mobile & Desktop */}
                  <div
                    onClick={() => handleCopyQuote(q)}
                    className="flex-1 min-w-0 cursor-pointer space-y-1"
                  >
                    <p className="text-sm sm:text-base font-normal text-zinc-800 dark:text-zinc-200 select-text leading-relaxed break-words font-serif">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        — {q.author}
                      </span>
                      {isCopied && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md animate-fade-in">
                          <Check className="w-3 h-3" />
                          <span>Copied!</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Desktop Hover Action Buttons */}
                  <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleUpvote(q.id, q.likes)}
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold border transition-all cursor-pointer select-none ${
                        isLiked
                          ? "bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400"
                          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-rose-600 hover:border-rose-200 opacity-0 group-hover:opacity-100"
                      }`}
                      title="Upvote quote"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-500 text-rose-500" : ""}`} />
                      <span className="text-[11px] tabular-nums font-bold">
                        {currentLikes > 999 ? `${(currentLikes / 1000).toFixed(1)}k` : currentLikes}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleShareWhatsApp(q)}
                      className="inline-flex items-center p-1.5 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 hover:border-emerald-200 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                      title="Share to WhatsApp"
                    >
                      <Share2 className="w-3.5 h-3.5 text-emerald-500" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyQuote(q)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        isCopied
                          ? "!opacity-100 bg-emerald-500 border-emerald-500 text-white shadow-2xs"
                          : "opacity-0 group-hover:opacity-100 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      }`}
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
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

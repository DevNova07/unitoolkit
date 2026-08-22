"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Hash, Heart, Image as ImageIcon, Share2 } from "lucide-react";
import { Caption } from "@/lib/types";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";
import { VisualQuoteModal } from "@/components/captions/VisualQuoteModal";

interface CaptionCardProps {
  caption: Caption;
  index?: number;
  className?: string;
  showMetadata?: boolean;
  selectable?: boolean;
  isSelected?: boolean;
  onToggleSelect?: (caption: Caption) => void;
}

export function CaptionCard({
  caption,
  index,
  className = "",
  showMetadata = false,
  selectable = false,
  isSelected = false,
  onToggleSelect,
}: CaptionCardProps) {
  const [copied, setCopied] = useState(false);
  const [upvoted, setUpvoted] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return localStorage.getItem(`unitoolkit_upvote_${caption.id}`) === "true";
      } catch {
        return false;
      }
    }
    return false;
  });
  const [likesCount, setLikesCount] = useState(caption.likes || 1200);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(caption.text);
    if (ok) {
      setCopied(true);
      showToast("Caption copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyWithTags = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const tags = caption.hashtags && caption.hashtags.length > 0 ? `\n\n${caption.hashtags.join(" ")}` : "";
    const fullText = `${caption.text}${tags}`;
    const ok = await copyToClipboard(fullText);
    if (ok) {
      setCopied(true);
      showToast("📋 Caption + Hashtags copied!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsAppShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const tags = caption.hashtags && caption.hashtags.length > 0 ? `\n\n${caption.hashtags.join(" ")}` : "";
    const text = encodeURIComponent(`${caption.text}${tags}\n\n✨ Found via unitoolkit.app`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    showToast("Opening WhatsApp...", "sparkle");
  };

  const handleToggleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !upvoted;
    setUpvoted(nextState);
    setLikesCount((prev) => (nextState ? prev + 1 : Math.max(1, prev - 1)));

    try {
      if (nextState) {
        localStorage.setItem(`unitoolkit_upvote_${caption.id}`, "true");
        showToast("❤️ Upvoted this caption!", "heart");
      } else {
        localStorage.removeItem(`unitoolkit_upvote_${caption.id}`);
      }
    } catch {
      // Ignore localStorage errors
    }
  };

  const isTrending = likesCount >= 8000 || caption.featured;
  const formattedLikes =
    likesCount >= 1000 ? `${(likesCount / 1000).toFixed(1)}k` : `${likesCount}`;

  return (
    <>
      <div
        className={`group flex items-start sm:items-center justify-between gap-3 sm:gap-4 py-2 sm:py-2.5 text-left rounded-xl transition-colors hover:bg-zinc-50/70 dark:hover:bg-zinc-900/40 px-2 -mx-2 ${
          isSelected ? "bg-indigo-50/80 dark:bg-indigo-950/40" : ""
        } ${className}`}
      >
        {/* Bulk Select Checkbox OR Index Number */}
        <div className="flex items-center gap-2 shrink-0 pt-0.5 sm:pt-0">
          {selectable ? (
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onToggleSelect?.(caption)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
              aria-label="Select caption"
            />
          ) : index !== undefined ? (
            <span className="text-xs sm:text-sm font-bold text-zinc-400 dark:text-zinc-500 tabular-nums min-w-[1.5rem] select-none">
              {index}.
            </span>
          ) : null}
        </div>

        {/* Caption Text + Length indicator + Optional Trending Badge */}
        <div 
          onClick={handleCopy}
          className="flex flex-wrap items-baseline gap-1.5 flex-1 min-w-0 cursor-pointer"
        >
          <p className="text-sm sm:text-base font-normal text-zinc-800 dark:text-zinc-200 select-text leading-relaxed break-words">
            {caption.text}
          </p>

          {/* Micro Trending Social Proof Pill */}
          {isTrending && (
            <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 border border-amber-200/60 dark:border-amber-900 text-[10px] font-semibold text-amber-700 dark:text-amber-400 select-none">
              🔥 Trending
            </span>
          )}

          {copied && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md animate-fade-in">
              <Check className="w-3 h-3" />
              <span>Copied!</span>
            </span>
          )}
        </div>

        {/* Action Buttons: Desktop Hover Copy + Actions */}
        <div className="hidden sm:flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Visual Story / Post Image Modal Trigger */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowImageModal(true);
            }}
            className="inline-flex items-center gap-1 p-1.5 sm:px-2 sm:py-1.5 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all cursor-pointer select-none opacity-0 group-hover:opacity-100"
            title="Make Instagram Story / WhatsApp Status Image"
            aria-label="Create Visual Story Card"
          >
            <ImageIcon className="w-3.5 h-3.5 text-indigo-500" />
            <span className="hidden xl:inline text-[11px]">Story Card</span>
          </button>

          {/* Interactive Upvote Button */}
          <button
            type="button"
            onClick={handleToggleUpvote}
            className={`inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer select-none ${
              upvoted
                ? "bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400"
                : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-200 dark:hover:border-rose-900 opacity-0 group-hover:opacity-100"
            }`}
            title="Upvote this caption"
            aria-label="Upvote caption"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-transform ${
                upvoted ? "fill-rose-500 text-rose-500 scale-110" : ""
              }`}
            />
            <span className="text-[11px] tabular-nums font-bold">{formattedLikes}</span>
          </button>

          {/* 💻 PC ONLY: Copy With Hashtags Button (Feature 6) */}
          {caption.hashtags && caption.hashtags.length > 0 && (
            <button
              type="button"
              onClick={handleCopyWithTags}
              className="hidden lg:inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
              title="Copy caption with viral hashtags"
              aria-label="Copy with hashtags"
            >
              <Hash className="w-3 h-3 text-indigo-500" />
              <span className="text-[11px]">+Tags</span>
            </button>
          )}

          {/* 💻 PC ONLY: WhatsApp Direct Share (Feature 6) */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="hidden sm:inline-flex items-center p-1.5 sm:px-2 sm:py-1.5 rounded-lg text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-900 transition-all cursor-pointer opacity-0 group-hover:opacity-100"
            title="Share directly to WhatsApp"
            aria-label="Share on WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-500" />
          </button>

          {/* Primary 1-Click Copy on Desktop */}
          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
              copied
                ? "!opacity-100 bg-emerald-500 border-emerald-500 text-white shadow-2xs"
                : "opacity-0 group-hover:opacity-100 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
            aria-label="Copy caption"
          >
            {copied ? (
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

      {/* Visual Quote Modal */}
      {showImageModal && (
        <VisualQuoteModal
          isOpen={showImageModal}
          onClose={() => setShowImageModal(false)}
          captionText={caption.text}
        />
      )}
    </>
  );
}

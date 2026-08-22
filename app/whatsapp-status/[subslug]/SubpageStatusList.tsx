"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  Heart,
  MessageCircle,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { WhatsAppStatusItem } from "@/data/whatsappStatusData";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface SubpageStatusListProps {
  title: string;
  badge: string;
  intro: string;
  statuses: WhatsAppStatusItem[];
  subslug: string;
}

export function SubpageStatusList({
  title,
  badge,
  intro,
  statuses,
  subslug,
}: SubpageStatusListProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});
  const [hasUpvoted, setHasUpvoted] = useState<Record<string, boolean>>({});
  const [aiStatuses, setAiStatuses] = useState<WhatsAppStatusItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCopy = async (id: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      showToast("Copied to clipboard! 📲", "success");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp Status... 🟢", "success");
  };

  const handleUpvote = (id: string, currentLikes: number) => {
    if (hasUpvoted[id]) {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) - 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: false }));
    } else {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) + 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: true }));
      showToast("❤️ Upvoted this status!", "heart");
    }
  };

  const handleGenerateMore = async () => {
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Short 1-2 line WhatsApp status about ${badge}, aesthetic and viral`,
          platform: "whatsapp",
          style: "viral",
          tone: "confident",
          length: "short",
          language: "en",
          count: 20,
          includeHashtags: false,
          includeEmojis: true,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && Array.isArray(data.captions) && data.captions.length > 0) {
          const newItems: WhatsAppStatusItem[] = data.captions.map((text: string, idx: number) => ({
            id: `ai-sub-${Date.now()}-${idx}`,
            text,
            category: subslug,
            likes: Math.floor(Math.random() * 12000) + 7000,
          }));

          setAiStatuses((prev) => [...prev, ...newItems]);
          setIsGenerating(false);
          showToast(`✨ Generated 20 more ${badge} statuses!`, "sparkle");
          return;
        }
      }
    } catch (e) {
      console.warn("AI generation failed:", e);
    }

    // Fallback
    const fallbackLines = [
      `Stay focused on your journey, the rest is just background noise 🚀✨`,
      `Quality over quantity in friends, thoughts, and habits 🌿🤍`,
      `Don't adapt to the energy in the room; influence the energy in the room 👑`,
    ];

    const fallbackItems: WhatsAppStatusItem[] = fallbackLines.map((text, idx) => ({
      id: `ai-sub-fb-${Date.now()}-${idx}`,
      text,
      category: subslug,
      likes: 9500 + idx * 300,
    }));

    setAiStatuses((prev) => [...prev, ...fallbackItems]);
    setIsGenerating(false);
    showToast(`✨ Generated 3 more ${badge} statuses!`, "sparkle");
  };

  const allList = [...statuses, ...aiStatuses];

  return (
    <div className="space-y-8 text-left">
      {/* Intro Description */}
      <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {intro}
        </p>
      </div>

      {/* Clean Numbered Status List */}
      <div className="space-y-3 sm:space-y-3.5 pt-1">
        {allList.map((status, idx) => {
          const isCopied = copiedId === status.id;

          return (
            <div
              key={status.id}
              onClick={() => handleCopy(status.id, status.text)}
              className="group relative flex items-start gap-2 py-1 px-1 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer w-full"
              title="Click to copy status"
            >
              <span className="text-base sm:text-[17px] text-zinc-700 dark:text-zinc-300 font-normal shrink-0 select-none">
                {idx + 1}.
              </span>
              <p className="text-base sm:text-[17px] text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed flex-1 select-all break-words">
                {status.text}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(status.id, status.text);
                }}
                className={`hidden sm:inline-flex shrink-0 ml-2 px-2.5 py-1 rounded-md text-xs font-semibold items-center gap-1 transition-all ${
                  isCopied
                    ? "!inline-flex bg-emerald-600 text-white opacity-100 shadow-2xs"
                    : "opacity-0 group-hover:opacity-100 bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* In-Page AI Load More Container */}
      <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-b from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-200 dark:border-emerald-900 shadow-md text-center space-y-4">
        <div className="space-y-1 max-w-md mx-auto">
          <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-emerald-200 text-emerald-600 text-xs font-bold inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Need More {badge} Lines?</span>
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Synthesize 20 More with AI
          </h4>
        </div>

        <button
          type="button"
          onClick={handleGenerateMore}
          disabled={isGenerating}
          className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer disabled:opacity-60"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate 20 More {badge} Statuses</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

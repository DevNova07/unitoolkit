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
import { ShayariItem } from "@/data/shayariData";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

interface SubpageShayariListProps {
  badge: string;
  intro: string;
  items: ShayariItem[];
  subslug: string;
}

export function SubpageShayariList({
  badge,
  intro,
  items,
  subslug,
}: SubpageShayariListProps) {
  const [scriptMode, setScriptMode] = useState<"hindi" | "hinglish">("hindi");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [upvotes, setUpvotes] = useState<Record<string, number>>({});
  const [hasUpvoted, setHasUpvoted] = useState<Record<string, boolean>>({});
  const [aiShayaris, setAiShayaris] = useState<ShayariItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCopy = async (id: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedId(id);
      showToast("Shayari copied! 📜✨", "success");
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleShareWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp... 🟢", "success");
  };

  const handleUpvote = (id: string, currentLikes: number) => {
    if (hasUpvoted[id]) {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) - 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: false }));
    } else {
      setUpvotes((prev) => ({ ...prev, [id]: (prev[id] ?? currentLikes) + 1 }));
      setHasUpvoted((prev) => ({ ...prev, [id]: true }));
      showToast("❤️ Upvoted this Shayari!", "heart");
    }
  };

  const handleGenerateMore = async () => {
    setIsGenerating(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Romantic, emotional, or attitude poetic 2-line Hindi Shayari about ${badge}`,
          platform: "instagram",
          style: "romantic",
          tone: "emotional",
          length: "short",
          language: scriptMode === "hindi" ? "hi" : "hinglish",
          count: 5,
          includeHashtags: false,
          includeEmojis: true,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.captions && Array.isArray(data.captions) && data.captions.length > 0) {
          const newItems: ShayariItem[] = data.captions.map((text: string, idx: number) => ({
            id: `ai-sub-shy-${Date.now()}-${idx}`,
            hindi: text,
            hinglish: text,
            category: subslug,
            format: "2-line",
            likes: Math.floor(Math.random() * 12000) + 7500,
          }));

          setAiShayaris((prev) => [...prev, ...newItems]);
          setIsGenerating(false);
          showToast(`✨ Generated 5 more ${badge} couplets!`, "sparkle");
          return;
        }
      }
    } catch (e) {
      console.warn("AI generation failed:", e);
    }

    // Fallback
    const fallbackLines = [
      {
        hindi: "तेरी यादों का साया जब भी साथ होता है,\nरात का हर एक लम्हा खास होता है! 🌙✨",
        hinglish: "Teri yaadon ka saaya jab bhi saath hota hai,\nRaat ka har ek lamha khaas hota hai! 🌙✨",
      },
    ];

    const fallbackItems: ShayariItem[] = fallbackLines.map((item, idx) => ({
      id: `ai-sub-fb-${Date.now()}-${idx}`,
      hindi: item.hindi,
      hinglish: item.hinglish,
      category: subslug,
      format: "2-line",
      likes: 9000 + idx * 200,
    }));

    setAiShayaris((prev) => [...prev, ...fallbackItems]);
    setIsGenerating(false);
    showToast("✨ Generated more Shayari!", "sparkle");
  };

  const allList = [...items, ...aiShayaris];

  return (
    <div className="space-y-8 text-left">
      {/* Script Switcher & Intro Box */}
      <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl">
          {intro}
        </p>

        <div className="p-1 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setScriptMode("hindi")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              scriptMode === "hindi"
                ? "bg-amber-600 text-white shadow-2xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
            }`}
          >
            हिंदी
          </button>
          <button
            type="button"
            onClick={() => setScriptMode("hinglish")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              scriptMode === "hinglish"
                ? "bg-amber-600 text-white shadow-2xs"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
            }`}
          >
            Hinglish
          </button>
        </div>
      </div>

      {/* Poetry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allList.map((item, idx) => {
          const currentText = scriptMode === "hindi" ? item.hindi : item.hinglish;
          const isCopied = copiedId === item.id;
          const currentLikes = upvotes[item.id] ?? item.likes;
          const isLiked = hasUpvoted[item.id];

          return (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-amber-400/60 hover:shadow-lg transition-all flex flex-col justify-between gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                  #{idx + 1}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500 uppercase tracking-wider">
                  {item.format}
                </span>
              </div>

              <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-100 whitespace-pre-line leading-relaxed font-serif select-all">
                {currentText}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-900">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleCopy(item.id, currentText)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isCopied
                        ? "bg-amber-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? "Copied" : "Copy"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShareWhatsApp(currentText)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => handleUpvote(item.id, item.likes)}
                  className={`hidden sm:flex p-2 rounded-xl text-xs font-semibold transition-all items-center gap-1 cursor-pointer ${
                    isLiked
                      ? "text-rose-600 bg-rose-50 dark:bg-rose-950/40"
                      : "text-zinc-400 hover:text-rose-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-rose-600 text-rose-600" : ""}`} />
                  <span className="text-xs font-mono">
                    {currentLikes > 999 ? `${(currentLikes / 1000).toFixed(1)}k` : currentLikes}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Generate More */}
      <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-b from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200 dark:border-amber-900 shadow-md text-center space-y-4">
        <div className="space-y-1 max-w-md mx-auto">
          <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-amber-200 text-amber-600 text-xs font-bold inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Need More {badge}?</span>
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            Synthesize 5 More with AI
          </h4>
        </div>

        <button
          type="button"
          onClick={handleGenerateMore}
          disabled={isGenerating}
          className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer disabled:opacity-60"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Writing Couplets...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate 5 More {badge}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

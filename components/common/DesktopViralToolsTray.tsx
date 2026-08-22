"use client";

import { useState, useEffect } from "react";
import { Sparkles, Dices, Heart, Flame, X, Copy, Check, TrendingUp, Star } from "lucide-react";
import { CAPTIONS_DATA } from "@/data/captionsData";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

export function DesktopViralToolsTray() {
  const [isOpenSurprise, setIsOpenSurprise] = useState(false);
  const [randomCaption, setRandomCaption] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [pulseCount, setPulseCount] = useState(14820);

  // Sync favorites count from localStorage
  useEffect(() => {
    const updateFavCount = () => {
      try {
        let count = 0;
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key.startsWith("unitoolkit_upvote_") || key.startsWith("captionpro_fav_"))) {
            count++;
          }
        }
        setFavoritesCount(count);
      } catch {}
    };

    updateFavCount();
    window.addEventListener("storage", updateFavCount);

    // Live tick counter simulation
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 15000);

    return () => {
      window.removeEventListener("storage", updateFavCount);
      clearInterval(interval);
    };
  }, []);

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * CAPTIONS_DATA.length);
    const item = CAPTIONS_DATA[randomIndex] || CAPTIONS_DATA[0];
    setRandomCaption(item);
    setIsOpenSurprise(true);
    setCopied(false);
  };

  const handleCopySurprise = async () => {
    if (!randomCaption) return;
    const ok = await copyToClipboard(randomCaption.text);
    if (ok) {
      setCopied(true);
      showToast("🎲 Viral hook copied!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* 💻 PC / DESKTOP EXCLUSIVE FLOATING VIRAL TRAY (Hidden on Mobile) */}
      <aside aria-label="Creator Quick Tools" className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3 select-none">
        {/* Feature 4: Live Social Proof Ticker Badge */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-zinc-950/10 text-xs font-semibold text-zinc-700 dark:text-zinc-300 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="flex items-center gap-1 text-zinc-900 dark:text-white font-bold">
            <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            {pulseCount.toLocaleString()}
          </span>
          <span className="text-zinc-500 dark:text-zinc-400 font-normal">lines copied today</span>
        </div>

        {/* Feature 5: Surprise Me / Random Hook Generator */}
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Roll a random viral caption hook"
        >
          <Dices className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          <span>Surprise Me</span>
        </button>
      </aside>

      {/* Surprise Me Popup Modal */}
      {isOpenSurprise && randomCaption && (
        <div className="hidden lg:flex fixed inset-0 z-50 items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <span>Viral Reel & Post Hook</span>
                    <span className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 text-[10px] uppercase font-bold">
                      {randomCaption.category || "Viral"}
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Handpicked high-retention caption
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpenSurprise(false)}
                className="p-1.5 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Caption Card Body */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <p className="text-base sm:text-lg font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed select-all">
                &ldquo;{randomCaption.text}&rdquo;
              </p>

              {randomCaption.hashtags && randomCaption.hashtags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                  {randomCaption.hashtags.slice(0, 4).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleSurpriseMe}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
              >
                <Dices className="w-3.5 h-3.5" />
                <span>Spin Again</span>
              </button>

              <button
                type="button"
                onClick={handleCopySurprise}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer ${
                  copied
                    ? "bg-emerald-600 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20"
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Hook"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Hash, Copy, Check, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";
import { showToast } from "@/components/common/Toast";

export function HashtagFeatureCard() {
  const [copied, setCopied] = useState(false);
  const sampleTags = "#viral #explorepage #trending #reels #fyp #instagood #instadaily #contentcreator #algorithmboost #reachgrowth";

  const handleCopy = async () => {
    const ok = await copyToClipboard(sampleTags);
    if (ok) {
      setCopied(true);
      showToast("Copied viral hashtags! 📋");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const quickNiches = [
    { label: "🔥 #viral", href: "/hashtags/viral" },
    { label: "📸 #instagram", href: "/hashtags/instagram" },
    { label: "🎬 #reels", href: "/hashtags/reels" },
    { label: "🎵 #tiktok", href: "/hashtags/tiktok" },
    { label: "💪 #fitness", href: "/hashtags/fitness" },
    { label: "✈️ #travel", href: "/hashtags/travel" },
    { label: "👗 #fashion", href: "/hashtags/fashion" },
    { label: "🍔 #food", href: "/hashtags/food" },
    { label: "⚡ #attitude", href: "/hashtags/attitude" },
  ];

  return (
    <section className="w-full text-left">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-950 via-zinc-950 to-black border border-emerald-800/50 p-6 sm:p-10 text-white shadow-xl">
        {/* Glow orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-bold text-emerald-300">
              <Hash className="w-3.5 h-3.5" />
              <span>Live Analytics & 120-Tag Ladders • UniToolkit 2026</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Trending Hashtags Directory with Live Post Count Reports
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Copy 4-tier hashtag sets (Mega, High, Medium, and Low competition) with live posts volume, average likes, and best posting hours across 10 platforms.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/hashtags"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Explore Hashtags Hub</span>
              </Link>

              <Link
                href="/ai-hashtag-generator"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs sm:text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>AI Hashtag Generator</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Quick-Copy Box */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-300 font-semibold border-b border-white/10 pb-2">
              <span>Instant Viral Feed Booster</span>
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1 rounded-md bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>1-Click Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-emerald-300 font-mono select-all leading-relaxed">
              {sampleTags}
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {quickNiches.map((niche) => (
                <Link
                  key={niche.href}
                  href={niche.href}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[11px] font-semibold text-zinc-200 hover:text-white transition-all"
                >
                  {niche.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

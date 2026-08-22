"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Zap, Search, ArrowRight, Flame } from "lucide-react";
import { Hero3DVisual } from "./Hero3DVisual";
import {
  InstagramIcon,
  YoutubeIcon,
  TikTokIcon,
  ThreadsIcon,
  LinkedInIcon,
  XIcon,
  PinterestIcon,
  FacebookIcon,
  SnapchatIcon,
  WhatsAppIcon,
} from "@/components/common/BrandIcons";

export function HeroSection() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      router.push(`/ai-caption-generator?topic=${encodeURIComponent(prompt.trim())}`);
    } else {
      router.push("/ai-caption-generator");
    }
  };

  const trendingTopics = [
    { label: "📸 Sunset Vibes", topic: "sunset golden hour aesthetic" },
    { label: "🔥 Royal Attitude", topic: "silent moves boss attitude" },
    { label: "💪 Gym Motivation", topic: "workout consistency no excuses" },
    { label: "❤️ Love Reels", topic: "romantic love sukoon" },
    { label: "✈️ Travel Wanderlust", topic: "mountains solo trip chai" },
  ];

  const platformsList = [
    { name: "Instagram", href: "/instagram-captions", icon: <InstagramIcon size={20} /> },
    { name: "YouTube", href: "/youtube-captions", icon: <YoutubeIcon size={20} /> },
    { name: "TikTok", href: "/tiktok-captions", icon: <TikTokIcon size={18} /> },
    { name: "WhatsApp", href: "/whatsapp-status", icon: <WhatsAppIcon size={20} /> },
    { name: "Facebook", href: "/facebook-captions", icon: <FacebookIcon size={20} /> },
    { name: "LinkedIn", href: "/linkedin-captions", icon: <LinkedInIcon size={20} /> },
    { name: "Twitter / X", href: "/twitter-captions", icon: <XIcon size={18} /> },
    { name: "Threads", href: "/threads-captions", icon: <ThreadsIcon size={20} /> },
    { name: "Pinterest", href: "/pinterest-captions", icon: <PinterestIcon size={20} /> },
    { name: "Snapchat", href: "/snapchat-captions", icon: <SnapchatIcon size={20} /> },
  ];

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-12 lg:pb-20 overflow-hidden text-left">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Clean Copy & Input Bar */}
          <div className="lg:col-span-7 space-y-5 text-center sm:text-left">
            {/* 1. Sleek Single Badge */}
            <div className="flex items-center justify-center sm:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-2xs">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Creator Suite • 2026 Edition</span>
              </div>
            </div>

            {/* 2. Bold, Clean Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
              Create Better Content{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Faster with AI
              </span>
            </h1>

            {/* 3. Concise 1-Line Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto sm:mx-0 leading-relaxed font-normal">
              Instant AI captions, viral hashtags, authentic shayari, daily status, VIP bios, and 10,000+ baby names across 10 platforms.
            </p>

            {/* 4. Sleek Hero Prompt Input Bar */}
            <div className="pt-1">
              <form
                onSubmit={handleGenerate}
                className="relative flex items-center p-1.5 sm:p-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all text-left"
              >
                <div className="pl-2 sm:pl-3 text-indigo-500">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter topic (e.g. sunset vibes, gym attitude)..."
                  className="w-full min-w-0 px-2 sm:px-3 py-2 text-xs sm:text-base bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="shrink-0 flex items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-xs sm:text-sm font-bold shadow-md hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Generate</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </form>

              {/* 5. Clean Horizontal Trending Pills */}
              <div className="flex items-center gap-2 pt-3 overflow-x-auto no-scrollbar pb-1 text-xs">
                <span className="font-bold text-zinc-500 dark:text-zinc-400 shrink-0 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-rose-500" />
                  <span>Trending:</span>
                </span>
                {trendingTopics.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      setPrompt(item.topic);
                      router.push(`/ai-caption-generator?topic=${encodeURIComponent(item.topic)}`);
                    }}
                    className="shrink-0 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stage Visual (PC ONLY) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <Hero3DVisual />
          </div>
        </div>

        {/* Clean Platform Logos Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-zinc-200/70 dark:border-zinc-800/80 text-center">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5">
            Supported Across All 10 Major Platforms
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            {platformsList.map((plat) => (
              <Link
                key={plat.name}
                href={plat.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-2xs"
              >
                <span>{plat.icon}</span>
                <span className="hidden sm:inline">{plat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Zap, Search, ArrowRight, Flame, ShieldCheck, Globe2, Layers, PenTool } from "lucide-react";
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
    {
      name: "Instagram",
      href: "/instagram-captions",
      icon: <InstagramIcon size={22} />,
      bg: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600",
      shadow: "shadow-[0_8px_18px_rgba(244,63,94,0.35)]",
    },
    {
      name: "YouTube",
      href: "/youtube-captions",
      icon: <YoutubeIcon size={22} />,
      bg: "bg-gradient-to-tr from-red-600 to-rose-500",
      shadow: "shadow-[0_8px_18px_rgba(239,68,68,0.35)]",
    },
    {
      name: "TikTok",
      href: "/tiktok-captions",
      icon: <TikTokIcon size={20} />,
      bg: "bg-zinc-950 border border-zinc-700",
      shadow: "shadow-[0_8px_18px_rgba(0,0,0,0.4)]",
    },
    {
      name: "WhatsApp",
      href: "/whatsapp-status",
      icon: <WhatsAppIcon size={22} />,
      bg: "bg-gradient-to-tr from-emerald-500 to-teal-500",
      shadow: "shadow-[0_8px_18px_rgba(16,185,129,0.35)]",
    },
    {
      name: "Facebook",
      href: "/facebook-captions",
      icon: <FacebookIcon size={22} />,
      bg: "bg-gradient-to-tr from-blue-600 to-indigo-600",
      shadow: "shadow-[0_8px_18px_rgba(37,99,235,0.35)]",
    },
    {
      name: "LinkedIn",
      href: "/linkedin-captions",
      icon: <LinkedInIcon size={22} />,
      bg: "bg-gradient-to-tr from-blue-700 to-cyan-700",
      shadow: "shadow-[0_8px_18px_rgba(2,132,199,0.35)]",
    },
    {
      name: "Twitter / X",
      href: "/twitter-captions",
      icon: <XIcon size={20} />,
      bg: "bg-zinc-950 border border-zinc-700",
      shadow: "shadow-[0_8px_18px_rgba(0,0,0,0.4)]",
    },
    {
      name: "Threads",
      href: "/threads-captions",
      icon: <ThreadsIcon size={22} />,
      bg: "bg-zinc-900 dark:bg-zinc-800",
      shadow: "shadow-[0_8px_18px_rgba(0,0,0,0.3)]",
    },
    {
      name: "Pinterest",
      href: "/pinterest-captions",
      icon: <PinterestIcon size={22} />,
      bg: "bg-gradient-to-tr from-rose-600 to-red-500",
      shadow: "shadow-[0_8px_18px_rgba(225,29,72,0.35)]",
    },
    {
      name: "Snapchat",
      href: "/snapchat-captions",
      icon: <SnapchatIcon size={22} />,
      bg: "bg-gradient-to-tr from-amber-400 to-yellow-500",
      shadow: "shadow-[0_8px_18px_rgba(234,179,8,0.35)]",
    },
  ];

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-12 lg:pb-20 overflow-hidden text-left">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
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

          {/* Right Column: 3D Stage Visual with U and Floating Platform Cards (Mobile & Desktop) */}
          <div className="flex lg:col-span-5 justify-center mt-6 lg:mt-0">
            <Hero3DVisual />
          </div>
        </div>

        {/* 🌟 10 Platform Cards Carousel Strip */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-zinc-200/60 dark:border-zinc-800/80 text-center">
          <p className="text-[11px] sm:text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <span className="w-6 sm:w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span>Supported Across All 10 Major Platforms</span>
            <span className="w-6 sm:w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          </p>

          <div className="flex items-center gap-2.5 sm:gap-4 overflow-x-auto pb-3 sm:pb-4 pt-1 sm:pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x justify-start lg:justify-between">
            {platformsList.map((plat) => (
              <Link
                key={plat.name}
                href={plat.href}
                className="snap-start shrink-0 flex flex-col items-center gap-2 p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[74px] sm:min-w-[96px]"
              >
                <div
                  className={`w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl ${plat.bg} flex items-center justify-center text-white ${plat.shadow} group-hover:rotate-6 transition-transform`}
                >
                  {plat.icon}
                </div>
                <span className="text-[11px] sm:text-[13px] font-bold text-zinc-900 dark:text-white">
                  {plat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 📊 Bottom Real Architecture Metrics Bar */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-8 items-center divide-y-0 md:divide-x divide-zinc-100 dark:divide-zinc-800">
            {/* Stat 1 */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <PenTool className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-zinc-900 dark:text-white">15K+</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Curated Captions</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:pl-6">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900 flex items-center justify-center text-amber-500 shrink-0">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-zinc-900 dark:text-white">52+</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Content Moods</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:pl-6">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 flex items-center justify-center text-blue-500 shrink-0">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-zinc-900 dark:text-white">10</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Social Platforms</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:pl-6">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-pink-50 dark:bg-pink-950/50 border border-pink-100 dark:border-pink-900 flex items-center justify-center text-pink-500 shrink-0">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-zinc-900 dark:text-white">6</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">AI Creator Studios</div>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-2.5 sm:gap-3 md:pl-6 col-span-2 md:col-span-1 pt-2 md:pt-0 border-t md:border-t-0 border-zinc-100 dark:border-zinc-800">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-zinc-900 dark:text-white">100%</div>
                <div className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

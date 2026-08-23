"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Zap, Search, ArrowRight, Flame, ShieldCheck, Globe2, Layers, PenTool, Sparkles } from "lucide-react";
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
    <section className="relative w-full pt-6 sm:pt-12 pb-6 sm:pb-10 overflow-hidden text-left">
      {/* 🌟 Ultra-Prime Ambient Glow & Dynamic Light Spill */}
      <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[500px] sm:w-[750px] h-[450px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-pink-600/15 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] sm:w-[600px] h-[350px] bg-gradient-to-bl from-rose-500/20 via-fuchsia-600/15 to-transparent blur-[110px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clean Copy & Input Bar */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
            {/* 1. Sleek Glowing Prime Badge */}
            <div className="flex items-center justify-center sm:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-950/70 border border-indigo-500/30 text-xs font-bold text-indigo-600 dark:text-indigo-400 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span className="tracking-wide">AI Creator Suite • 2026 Edition</span>
              </div>
            </div>

            {/* 2. Bold, High-Impact Prime Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
              Free AI & Social Media Tools{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                for Creators
              </span>
            </h1>

            {/* 3. Concise High-Conversion Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto sm:mx-0 leading-relaxed font-normal">
              Create viral captions, VIP bios, 3-tier hashtags, shayari couplets, and status quotes — instantly with 1-click copy.
            </p>

            {/* 4. Sleek Hero Prompt Input Bar with Glow */}
            <div className="pt-1 space-y-4">
              <form
                onSubmit={handleGenerate}
                className="relative flex items-center p-1.5 sm:p-2 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.5)] focus-within:border-indigo-500/80 focus-within:shadow-[0_0_30px_rgba(99,102,241,0.25)] backdrop-blur-xl transition-all text-left"
              >
                <div className="pl-3 sm:pl-4 text-indigo-500">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your photo or vibe (e.g. sunset golden hour, gym attitude)..."
                  className="w-full min-w-0 px-2.5 sm:px-4 py-2 text-xs sm:text-base bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  className="shrink-0 flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white text-xs sm:text-sm font-black shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.6)] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Generate</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </form>

              {/* 5. What do you want to create? — 6 Ultra-Prime Action Cards */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    <span>What do you want to create?</span>
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-2.5">
                  {/* Card 1: Caption */}
                  <Link
                    href="/ai-caption-generator"
                    className="flex flex-col items-center justify-center py-1.5 px-1 sm:p-3 rounded-lg sm:rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-indigo-500/70 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] active:scale-95 hover:-translate-y-1 transition-all duration-200 text-center group backdrop-blur-md"
                  >
                    <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/60 dark:border-indigo-800/60 flex items-center justify-center text-xs sm:text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      ✨
                    </div>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-[10px] sm:text-xs font-bold text-zinc-900 dark:text-white block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">Caption</span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium hidden sm:block">15K+ Lines</span>
                    </div>
                  </Link>

                  {/* Card 2: Bio */}
                  <Link
                    href="/ai-bio-generator"
                    className="flex flex-col items-center justify-center py-1.5 px-1 sm:p-3 rounded-lg sm:rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] active:scale-95 hover:-translate-y-1 transition-all duration-200 text-center group backdrop-blur-md"
                  >
                    <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200/60 dark:border-purple-800/60 flex items-center justify-center text-xs sm:text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      👑
                    </div>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-[10px] sm:text-xs font-bold text-zinc-900 dark:text-white block group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">VIP Bio</span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium hidden sm:block">Styler</span>
                    </div>
                  </Link>

                  {/* Card 3: Hashtag */}
                  <Link
                    href="/ai-hashtag-generator"
                    className="flex flex-col items-center justify-center py-1.5 px-1 sm:p-3 rounded-lg sm:rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-pink-500/70 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)] active:scale-95 hover:-translate-y-1 transition-all duration-200 text-center group backdrop-blur-md"
                  >
                    <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-pink-50 dark:bg-pink-950/80 border border-pink-200/60 dark:border-pink-800/60 flex items-center justify-center text-xs sm:text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      #️⃣
                    </div>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-[10px] sm:text-xs font-bold text-zinc-900 dark:text-white block group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-tight">Hashtags</span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium hidden sm:block">3-Tier Set</span>
                    </div>
                  </Link>

                  {/* Card 4: Shayari */}
                  <Link
                    href="/ai-shayari-generator"
                    className="flex flex-col items-center justify-center py-1.5 px-1 sm:p-3 rounded-lg sm:rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-rose-500/70 hover:shadow-[0_0_20px_rgba(244,63,94,0.25)] active:scale-95 hover:-translate-y-1 transition-all duration-200 text-center group backdrop-blur-md"
                  >
                    <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200/60 dark:border-rose-800/60 flex items-center justify-center text-xs sm:text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      📜
                    </div>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-[10px] sm:text-xs font-bold text-zinc-900 dark:text-white block group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-tight">Shayari</span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium hidden sm:block">Couplets</span>
                    </div>
                  </Link>

                  {/* Card 5: Quote */}
                  <Link
                    href="/ai-quotes-generator"
                    className="flex flex-col items-center justify-center py-1.5 px-1 sm:p-3 rounded-lg sm:rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-amber-500/70 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] active:scale-95 hover:-translate-y-1 transition-all duration-200 text-center group backdrop-blur-md"
                  >
                    <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-amber-50 dark:bg-amber-950/80 border border-amber-200/60 dark:border-amber-800/60 flex items-center justify-center text-xs sm:text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      💡
                    </div>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-[10px] sm:text-xs font-bold text-zinc-900 dark:text-white block group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-tight">Quotes</span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium hidden sm:block">Mindset</span>
                    </div>
                  </Link>

                  {/* Card 6: Status */}
                  <Link
                    href="/ai-status-generator"
                    className="flex flex-col items-center justify-center py-1.5 px-1 sm:p-3 rounded-lg sm:rounded-2xl bg-white/95 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-emerald-500/70 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] active:scale-95 hover:-translate-y-1 transition-all duration-200 text-center group backdrop-blur-md"
                  >
                    <div className="w-5 h-5 sm:w-9 sm:h-9 rounded-md sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center text-xs sm:text-lg shadow-2xs group-hover:scale-110 transition-transform">
                      🟢
                    </div>
                    <div className="mt-1 sm:mt-2">
                      <span className="text-[10px] sm:text-xs font-bold text-zinc-900 dark:text-white block group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-tight">Status</span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-400 font-medium hidden sm:block">2-Liners</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stage Visual with U and Floating Platform Cards (Mobile & Desktop) */}
          <div className="flex lg:col-span-5 justify-center mt-6 lg:mt-0">
            <Hero3DVisual />
          </div>
        </div>

        {/* 🌟 10 Platform Cards (5x2 on Mobile, 10-Cols Grid on Desktop) */}
        <div className="mt-12 sm:mt-18 pt-8 sm:pt-10 border-t border-zinc-200/60 dark:border-zinc-800/80 text-center">
          <p className="text-[11px] sm:text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-5 sm:mb-8 flex items-center justify-center gap-2">
            <span className="w-6 sm:w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span>Supported Across All 10 Major Platforms</span>
            <span className="w-6 sm:w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          </p>

          <div className="grid grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-3 lg:gap-3.5 items-stretch">
            {platformsList.map((plat) => (
              <Link
                key={plat.name}
                href={plat.href}
                className="flex flex-col items-center justify-center gap-2 p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_4px_14px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-0"
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${plat.bg} flex items-center justify-center text-white ${plat.shadow} group-hover:rotate-6 transition-transform`}
                >
                  {plat.icon}
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-zinc-900 dark:text-white truncate max-w-full text-center">
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

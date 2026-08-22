"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Star,
  Wand2,
  Flame,
  Users2,
  Globe2,
  ShieldCheck,
} from "lucide-react";
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

  const tryTags = [
    { label: "📸 Golden hour sunset", topic: "sunset in Jaipur golden hour" },
    { label: "🏔️ Mountain solo trip", topic: "mountains solo trip chai" },
    { label: "👑 Silent moves attitude", topic: "silent moves boss mode" },
    { label: "💪 Gym pump motivation", topic: "consistency workout no excuses" },
    { label: "🎂 Birthday photo dump", topic: "birthday celebration with friends" },
  ];

  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Input Bar */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center sm:text-left">
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-xs">
                <span className="flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="w-3.5 h-3.5" /> Unitoolkit 3.0
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="text-zinc-600 dark:text-zinc-400">15K+ Curated Captions</span>
              </div>

              <Link
                href="/ai-caption-generator"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
              >
                <Wand2 className="w-3 h-3" />
                <span>5 AI Engines</span>
              </Link>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
              Create Better Content{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Faster with AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto sm:mx-0 leading-relaxed">
              Instant AI caption generator, authentic Hindi shayari, WhatsApp status, and VIP bios crafted for 10 major platforms.
            </p>

            {/* Social Proof Creators Rating */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  width={32}
                  height={32}
                  className="inline-block h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white dark:ring-zinc-950 object-cover"
                  src="/images/hero-creator.jpg"
                  alt="Creator Avatar"
                  priority
                />
                <div className="inline-flex h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white dark:ring-zinc-950 bg-gradient-to-tr from-pink-500 to-purple-600 text-[10px] font-bold text-white items-center justify-center">
                  AR
                </div>
                <div className="inline-flex h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white dark:ring-zinc-950 bg-gradient-to-tr from-indigo-500 to-blue-600 text-[10px] font-bold text-white items-center justify-center">
                  RK
                </div>
                <div className="inline-flex h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white dark:ring-zinc-950 bg-gradient-to-tr from-emerald-500 to-teal-600 text-[10px] font-bold text-white items-center justify-center">
                  SK
                </div>
              </div>

              <div className="text-xs space-y-0.5 text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="font-bold text-zinc-900 dark:text-white ml-1">4.9/5</span>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-[11px] sm:text-xs">
                  Trusted by <span className="font-semibold text-zinc-700 dark:text-zinc-300">25,000+ creators</span>
                </p>
              </div>
            </div>

            {/* Hero Prompt Input Bar */}
            <div className="pt-1">
              <form
                onSubmit={handleGenerate}
                className="relative flex items-center p-1.5 sm:p-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg shadow-zinc-200/50 dark:shadow-none focus-within:ring-2 focus-within:ring-indigo-500/50 transition-all text-left"
              >
                <div className="pl-2 sm:pl-3 text-indigo-500">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter topic (e.g. sunset vibes, gym attitude)..."
                  className="w-full min-w-0 px-2 sm:px-3 py-2 text-xs sm:text-base bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 flex items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-xs sm:text-sm font-semibold shadow-md hover:opacity-95 active:scale-[0.98] transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" />
                  <span>Generate</span>
                </button>
              </form>

              {/* "Try these" pills */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 pt-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">Try these:</span>
                {tryTags.map((tag, idx) => (
                  <button
                    key={tag.label}
                    type="button"
                    onClick={() => {
                      setPrompt(tag.topic);
                      router.push(`/ai-caption-generator?topic=${encodeURIComponent(tag.topic)}`);
                    }}
                    className={`${
                      idx >= 3 ? "hidden sm:inline-flex" : "inline-flex"
                    } items-center px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors text-xs`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>

              {/* 🎯 Feature 1: Instant "Mood & Vibe" 1-Tap Quick Filters (Mobile + PC) */}
              <div className="pt-4 text-left">
                <div className="flex items-center justify-between pb-2 px-0.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>Instant Mood & Vibe Finder</span>
                  </span>
                  <span className="text-[10px] text-zinc-400">1-Tap Curated Hubs</span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                  {[
                    { label: "🔥 Royal Attitude", href: "/attitude-captions", hot: true },
                    { label: "💖 Romantic & Love", href: "/love-captions", hot: false },
                    { label: "👑 VIP Bios", href: "/bios/attitude", hot: true },
                    { label: "🏋️ Gym PRs", href: "/captions/gym", hot: false },
                    { label: "✨ Aesthetic Glow", href: "/captions/aesthetic", hot: false },
                    { label: "🌧️ Barish & Chai", href: "/captions/monsoon", hot: false },
                    { label: "🪔 Festivals 2026", href: "/captions/diwali", hot: true },
                    { label: "⚡ 1-Liners", href: "/captions/short", hot: false },
                    { label: "💼 Boss Mindset", href: "/captions/motivation", hot: false },
                    { label: "🥀 Sad Sukoon", href: "/sad-captions", hot: false },
                  ].map((vibe) => (
                    <Link
                      key={vibe.label}
                      href={vibe.href}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-500/50 hover:shadow-xs text-xs font-bold text-zinc-800 dark:text-zinc-200 transition-all cursor-pointer"
                    >
                      <span>{vibe.label}</span>
                      {vibe.hot && (
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 📱 MOBILE EXCLUSIVE: 5 AI Engines Quick Launcher Strip */}
            <div className="block lg:hidden pt-4 text-left">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5 px-1">
                ⚡ Instant AI Generators
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <Link
                  href="/ai-caption-generator"
                  className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 flex items-center gap-2.5 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">AI Captions</p>
                    <p className="text-[10px] text-zinc-400 truncate">Reels & Hooks</p>
                  </div>
                </Link>

                <Link
                  href="/ai-bio-generator"
                  className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 flex items-center gap-2.5 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                    <span className="font-black text-xs">Aa</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">AI Bios</p>
                    <p className="text-[10px] text-zinc-400 truncate">VIP Attitude</p>
                  </div>
                </Link>

                <Link
                  href="/ai-status-generator"
                  className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 flex items-center gap-2.5 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <WhatsAppIcon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">Status Hub</p>
                    <p className="text-[10px] text-zinc-400 truncate">1-2 Liners</p>
                  </div>
                </Link>

                <Link
                  href="/ai-shayari-generator"
                  className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 flex items-center gap-2.5 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 font-bold text-xs">
                    ✍️
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-900 dark:text-white truncate">Hindi Shayari</p>
                    <p className="text-[10px] text-zinc-400 truncate">Love & Sad</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stage Visual (PC ONLY - 100% untouched) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <Hero3DVisual />
          </div>
        </div>

        {/* Supported Across All 10 Major Platforms Strip */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-zinc-200/60 dark:border-zinc-800/80 text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-8 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span>Supported Across All 10 Major Platforms</span>
            <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          </p>

          <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 overflow-x-auto no-scrollbar py-3 px-4 -mx-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center snap-x scroll-pl-4">
            {/* 1. Instagram */}
            <Link
              href="/instagram-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(244,63,94,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-pink-300 dark:hover:border-pink-700 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(244,63,94,0.35)] group-hover:rotate-6 transition-transform">
                <InstagramIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">Instagram</span>
            </Link>

            {/* 2. TikTok */}
            <Link
              href="/tiktok-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(6,182,212,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-cyan-300 dark:hover:border-cyan-700 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-cyan-400 shadow-[0_8px_18px_rgba(0,0,0,0.4)] group-hover:rotate-6 transition-transform">
                <TikTokIcon size={20} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">TikTok</span>
            </Link>

            {/* 3. YouTube */}
            <Link
              href="/youtube-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(239,68,68,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-red-300 dark:hover:border-red-700 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(239,68,68,0.35)] group-hover:-rotate-6 transition-transform">
                <YoutubeIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">YouTube</span>
            </Link>

            {/* 4. Facebook */}
            <Link
              href="/facebook-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(37,99,235,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(37,99,235,0.35)] group-hover:-rotate-6 transition-transform">
                <FacebookIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">Facebook</span>
            </Link>

            {/* 5. LinkedIn */}
            <Link
              href="/linkedin-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(37,99,235,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(37,99,235,0.35)] group-hover:rotate-6 transition-transform">
                <LinkedInIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">LinkedIn</span>
            </Link>

            {/* 6. X (Twitter) */}
            <Link
              href="/twitter-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(0,0,0,0.4)] group-hover:-rotate-6 transition-transform">
                <XIcon size={20} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">X (Twitter)</span>
            </Link>

            {/* 7. Threads */}
            <Link
              href="/threads-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(0,0,0,0.3)] group-hover:-rotate-6 transition-transform">
                <ThreadsIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">Threads</span>
            </Link>

            {/* 8. Pinterest */}
            <Link
              href="/pinterest-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(225,29,72,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-rose-300 dark:hover:border-rose-700 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-rose-600 to-red-500 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(225,29,72,0.35)] group-hover:rotate-6 transition-transform">
                <PinterestIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">Pinterest</span>
            </Link>

            {/* 9. Snapchat */}
            <Link
              href="/snapchat-captions"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(234,179,8,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-500 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(234,179,8,0.35)] group-hover:rotate-6 transition-transform">
                <SnapchatIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">Snapchat</span>
            </Link>

            {/* 10. WhatsApp */}
            <Link
              href="/whatsapp-status"
              className="snap-start shrink-0 flex flex-col items-center gap-2.5 p-3 sm:p-4 rounded-3xl bg-white/95 dark:bg-zinc-900/95 border-2 border-white dark:border-zinc-700/80 shadow-[0_12px_28px_-6px_rgba(16,185,129,0.18),inset_0_2px_4px_rgba(255,255,255,0.9)] dark:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)] hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-2 hover:scale-108 transition-all duration-300 group min-w-[84px] sm:min-w-[96px]"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-[0_8px_18px_rgba(16,185,129,0.35)] group-hover:rotate-6 transition-transform">
                <WhatsAppIcon size={22} />
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-zinc-900 dark:text-white">WhatsApp</span>
            </Link>
          </div>
        </div>

        {/* Bottom Stats Metrics Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-100 dark:divide-zinc-800">
            {/* Stat 1 */}
            <div className="flex items-center gap-3 pt-3 md:pt-0">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">300+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">AI Tools & Topics</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900 flex items-center justify-center text-amber-500 shrink-0">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">10M+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Content Generated</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 flex items-center justify-center text-blue-500 shrink-0">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">100K+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Happy Creators</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-500 shrink-0">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">50+</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Languages</div>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-6 col-span-2 md:col-span-1">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">99.9%</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

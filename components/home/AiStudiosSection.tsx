"use client";

import Link from "next/link";
import { Sparkles, Hash, User, MessageCircle, BookOpen, Globe2, ArrowRight, Wand2 } from "lucide-react";

export function AiStudiosSection() {
  const studios = [
    {
      name: "AI Caption Studio",
      desc: "Generate 5 high-converting Reels, Post & Story hooks in 3 seconds.",
      href: "/ai-caption-generator",
      icon: Sparkles,
      color: "from-indigo-600 to-purple-600",
      badge: "Reels & Hooks",
    },
    {
      name: "AI Hashtag Studio",
      desc: "Generate 30 tiered hashtags matching the viral ladder strategy.",
      href: "/ai-hashtag-generator",
      icon: Hash,
      color: "from-purple-600 to-pink-600",
      badge: "Viral Ladder",
    },
    {
      name: "AI VIP Bio Generator",
      desc: "Craft attitude, aesthetic & high-converting bios with fancy fonts.",
      href: "/ai-bio-generator",
      icon: User,
      color: "from-pink-600 to-rose-600",
      badge: "Profile Styler",
    },
    {
      name: "AI WhatsApp Status",
      desc: "Daily quotes & status updates with instant live mobile preview.",
      href: "/ai-status-generator",
      icon: MessageCircle,
      color: "from-emerald-600 to-teal-600",
      badge: "Status Preview",
    },
    {
      name: "AI Hindi Shayari",
      desc: "Emotional Love, Sad, Attitude & 2-Line poetry in authentic Hindi.",
      href: "/ai-shayari-generator",
      icon: BookOpen,
      color: "from-amber-600 to-orange-600",
      badge: "देवनागरी Poetry",
    },
    {
      name: "AI Baby Name Studio",
      desc: "Astrology, heritage, and multi-origin baby name combinations.",
      href: "/ai-baby-name-generator",
      icon: Globe2,
      color: "from-blue-600 to-cyan-600",
      badge: "Global Naming",
    },
  ];

  return (
    <section className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-[11px] font-bold text-purple-600 dark:text-purple-400">
            <Sparkles className="w-3 h-3" />
            <span>6 AI Generation Studios</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            ChatGPT-Powered Creator Tools
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Instant AI synthesis tailored for social algorithms, character limits, and high engagement.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {studios.map((studio) => {
          const Icon = studio.icon;
          return (
            <Link
              key={studio.name}
              href={studio.href}
              className="p-5 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-purple-400 dark:hover:border-purple-600 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${studio.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300">
                    {studio.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {studio.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {studio.desc}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400">
                <span>Launch Studio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  MessageCircle,
  User,
  Quote,
  ArrowRight,
  Wand2,
} from "lucide-react";
import { useLocale } from "@/components/common/LocaleProvider";

export function CoreContentSection() {
  const { hasShayari, t } = useLocale();

  const allTools = [
    {
      id: "captions",
      title: "Captions Studio & Vault",
      desc: "15,000+ hand-crafted lines & AI caption generator across 52+ vibes.",
      icon: Sparkles,
      href: "/captions",
      badge: "15K+ & AI",
      color: "from-indigo-500 to-purple-600",
      accentBorder: "hover:border-indigo-400 dark:hover:border-indigo-600",
      regional: false,
    },
    {
      id: "shayari",
      title: "Hindi Shayari Vault",
      desc: "Authentic Love, Sad, Attitude & 2-Line couplets in Devanagari & Hinglish.",
      icon: BookOpen,
      href: "/shayari",
      badge: "देवनागरी व Roman",
      color: "from-amber-500 to-red-600",
      accentBorder: "hover:border-amber-400 dark:hover:border-amber-600",
      regional: true,
    },
    {
      id: "whatsapp-status",
      title: "WhatsApp Status",
      desc: "Daily quotes, attitude lines & short updates with 1-click WhatsApp share.",
      icon: MessageCircle,
      href: "/whatsapp-status",
      badge: "Daily Status",
      color: "from-emerald-500 to-teal-600",
      accentBorder: "hover:border-emerald-400 dark:hover:border-emerald-600",
      regional: false,
    },
    {
      id: "bios",
      title: "VIP Bio Generator",
      desc: "Aesthetic, VIP attitude & high-converting bios with live profile preview.",
      icon: User,
      href: "/bios",
      badge: "500+ Bios",
      color: "from-pink-500 to-rose-600",
      accentBorder: "hover:border-pink-400 dark:hover:border-pink-600",
      regional: false,
    },
    {
      id: "quotes",
      title: "Quotes & Wisdom Hub",
      desc: "Philosophy, daily motivation & billionaire mindset quotes.",
      icon: Quote,
      href: "/quotes",
      badge: "Mindset",
      color: "from-yellow-500 to-amber-600",
      accentBorder: "hover:border-yellow-400 dark:hover:border-yellow-600",
      regional: false,
    },
  ];

  // Filter tools based on active locale rules
  const visibleTools = hasShayari
    ? allTools
    : allTools.filter((tool) => !tool.regional);

  return (
    <section className="space-y-6 text-left">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
            <Wand2 className="w-3 h-3" />
            <span>{hasShayari ? "5 Core Creator Tools" : "Core Creator Suite"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {hasShayari
              ? "Shayari, Status, Bio, Quotes & Captions"
              : "Captions, Status, Bio & Quotes"}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            Everything you need to craft viral content and aesthetic profiles across 10 platforms.
          </p>
        </div>

        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          <span>{t("allTools")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          hasShayari ? "lg:grid-cols-5" : "lg:grid-cols-4"
        } gap-4 sm:gap-4`}
      >
        {visibleTools.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group ${item.accentBorder}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>Open Tool</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

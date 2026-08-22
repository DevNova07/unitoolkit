"use client";

import Link from "next/link";
import React from "react";
import {
  Sparkles,
  ArrowRight,
  User,
  Quote,
  BookOpen,
  MessageCircle,
  FileText,
} from "lucide-react";
import { PlatformDetail } from "@/data/platformTaxonomy";

const FEATURE_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "ai-studio": Sparkles,
  posts: FileText,
  viral: Sparkles,
  shorts: Sparkles,
  "one-liners": FileText,
  photos: FileText,
  conversations: MessageCircle,
  aesthetic: Sparkles,
  streaks: Sparkles,
  leadership: Sparkles,
  bios: User,
  bio: User,
  quotes: Quote,
  shayari: BookOpen,
  status: MessageCircle,
  "status-gen": Sparkles,
};

interface PlatformToolsSuiteProps {
  platformDetail: PlatformDetail;
}

export function PlatformToolsSuite({ platformDetail }: PlatformToolsSuiteProps) {
  return (
    <section className="space-y-6 text-left">
      <div className="flex items-center justify-between gap-3 pb-1 border-b border-zinc-100 dark:border-zinc-800/80">
        <div>
          <h2 className="text-lg sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {platformDetail.name} Creator Tools
          </h2>
          <p className="hidden sm:block text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            Dedicated caption vaults, bio generators, quotes, and AI tools for {platformDetail.name}.
          </p>
        </div>

        <Link
          href={`/ai-caption-generator?platform=${platformDetail.id}`}
          className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Launch AI Studio</span>
        </Link>
      </div>

      {/* Grid of Platform Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {platformDetail.features.map((feat) => {
          const Icon = FEATURE_ICON_MAP[feat.slug] || Sparkles;

          return (
            <Link
              key={feat.slug}
              href={feat.route}
              className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                    {feat.badge || "Free"}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {feat.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {feat.description}
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

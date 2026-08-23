"use client";

import React from "react";
import { Lightbulb, Sparkles, Flame, Target, MessageSquare, Bookmark, Clock, Zap } from "lucide-react";

interface WhyThisWorksCardProps {
  index: number;
  category?: string;
  platform?: string;
}

interface AlgorithmicTip {
  badge: string;
  title: string;
  insight: string;
  metric: string;
  icon: typeof Lightbulb;
  accent: string;
  bg: string;
  border: string;
}

const ALGORITHMIC_TIPS: AlgorithmicTip[] = [
  {
    badge: "Algorithmic Retention",
    title: "Why Short 1-Liners Get 40% More Saves on Reels",
    insight:
      "When mobile viewers can read a caption in under 3 seconds, they finish reading before the video loops. The algorithm interprets this fast read-to-loop ratio as high viewer satisfaction.",
    metric: "40% Higher Saves",
    icon: Sparkles,
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "from-indigo-500/10 via-purple-500/5 to-transparent",
    border: "border-indigo-200/80 dark:border-indigo-800/80",
  },
  {
    badge: "Comment Velocity",
    title: "The 'Binary Question' Strategy for Explosive Engagement",
    insight:
      "Ending your caption with an effortless question (e.g. '1 or 2?', 'Agree or disagree?') reduces friction. Generating 15+ comments in the first 30 minutes signals high relevance to the explore algorithm.",
    metric: "2.8x Comment Velocity",
    icon: MessageSquare,
    accent: "text-rose-600 dark:text-rose-400",
    bg: "from-rose-500/10 via-pink-500/5 to-transparent",
    border: "border-rose-200/80 dark:border-rose-800/80",
  },
  {
    badge: "Save & Bookmark Psychology",
    title: "Why Mindset & Attitude Couplets Trigger Maximum Bookmarks",
    insight:
      "Users bookmark quotes they want to embody or reference later. In Instagram's 2026 ranking factors, 1 bookmark is weighted equivalent to roughly 5 standard likes.",
    metric: "5x Bookmark Weight",
    icon: Bookmark,
    accent: "text-amber-600 dark:text-amber-400",
    bg: "from-amber-500/10 via-yellow-500/5 to-transparent",
    border: "border-amber-200/80 dark:border-amber-800/80",
  },
  {
    badge: "Peak Posting Windows",
    title: "The 6:00 PM – 9:00 PM Leisure Browsing Dwell Boost",
    insight:
      "Weekday evenings have the highest session duration on social feeds. Posting during peak leisure hours ensures your content catches users when they are not in a rush to close the app.",
    metric: "65% Higher Dwell Time",
    icon: Clock,
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-200/80 dark:border-emerald-800/80",
  },
  {
    badge: "3-Tier Hashtag Pairing",
    title: "Why Placing 30 Tags Inside the Caption Outperforms Comments",
    insight:
      "Instagram's visual and keyword indexing engine scrapes caption text instantly upon upload. Placing ladder-balanced tags in the caption indexes your post into search within 60 seconds.",
    metric: "Instant Search Indexing",
    icon: Target,
    accent: "text-purple-600 dark:text-purple-400",
    bg: "from-purple-500/10 via-indigo-500/5 to-transparent",
    border: "border-purple-200/80 dark:border-purple-800/80",
  },
];

export function WhyThisWorksCard({ index, category = "Creator", platform = "Social Media" }: WhyThisWorksCardProps) {
  const tipIndex = Math.floor(index / 10) % ALGORITHMIC_TIPS.length;
  const tip = ALGORITHMIC_TIPS[tipIndex];
  const IconComponent = tip.icon;

  return (
    <div
      className={`col-span-full my-3 p-5 sm:p-6 rounded-3xl bg-linear-to-r ${tip.bg} border ${tip.border} shadow-2xs text-left relative overflow-hidden transition-all`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-[11px] font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200 shadow-2xs">
              <IconComponent className={`w-3.5 h-3.5 ${tip.accent}`} />
              <span>💡 Why This Works • {tip.badge}</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800">
              {tip.metric}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white">
            {tip.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-4xl">
            {tip.insight}
          </p>
        </div>

        <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-200/60 dark:border-zinc-800/60 text-xs font-bold">
          <span className="text-zinc-400 text-[11px]">Pro Creator Insight</span>
          <span className={`${tip.accent} font-extrabold flex items-center gap-1`}>
            <Zap className="w-3 h-3" />
            <span>Algorithm Verified</span>
          </span>
        </div>
      </div>
    </div>
  );
}

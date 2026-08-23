"use client";

import React from "react";
import {
  Sparkles,
  Filter,
  Copy,
  Share2,
  Hash,
  Music,
  Sliders,
  Search,
  Heart,
  Type,
  Clock,
  Zap,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { HowToGuideConfig, HowToStep, getHowToGuide } from "@/data/howToUseData";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";

interface HowToUseGuideProps {
  guideId?: string;
  config?: HowToGuideConfig;
  categoryName?: string;
  contentType?: string;
  platform?: string;
  title?: string;
  pageUrl?: string;
  className?: string;
}

const ICON_MAP = {
  filter: Filter,
  sparkles: Sparkles,
  copy: Copy,
  share: Share2,
  hash: Hash,
  music: Music,
  sliders: Sliders,
  search: Search,
  heart: Heart,
  type: Type,
  clock: Clock,
  zap: Zap,
};

// Gradient accents for steps 1, 2, 3, 4
const STEP_COLORS = [
  {
    badge: "from-indigo-600 to-blue-600 text-white",
    border: "group-hover:border-indigo-500/50",
    bgLight: "bg-indigo-50/50 dark:bg-indigo-950/20",
    accent: "text-indigo-600 dark:text-indigo-400",
    ring: "ring-indigo-500/20",
  },
  {
    badge: "from-purple-600 to-pink-600 text-white",
    border: "group-hover:border-purple-500/50",
    bgLight: "bg-purple-50/50 dark:bg-purple-950/20",
    accent: "text-purple-600 dark:text-purple-400",
    ring: "ring-purple-500/20",
  },
  {
    badge: "from-emerald-600 to-teal-600 text-white",
    border: "group-hover:border-emerald-500/50",
    bgLight: "bg-emerald-50/50 dark:bg-emerald-950/20",
    accent: "text-emerald-600 dark:text-emerald-400",
    ring: "ring-emerald-500/20",
  },
  {
    badge: "from-amber-600 to-rose-600 text-white",
    border: "group-hover:border-amber-500/50",
    bgLight: "bg-amber-50/50 dark:bg-amber-950/20",
    accent: "text-amber-600 dark:text-amber-400",
    ring: "ring-amber-500/20",
  },
];

export function HowToUseGuide({
  guideId,
  config: customConfig,
  categoryName,
  contentType,
  platform,
  title,
  pageUrl = "https://unitoolkit.com",
  className = "",
}: HowToUseGuideProps) {
  const guide =
    customConfig ||
    getHowToGuide(guideId || "", {
      contentType,
      platform,
      categoryName,
      title,
    });

  const schemaSteps = guide.steps.map((step) => ({
    name: `Step ${step.stepNumber}: ${step.title}`,
    text: step.description,
    url: pageUrl,
  }));

  return (
    <section
      aria-label={guide.heading}
      className={`w-full space-y-6 pt-8 pb-4 border-t border-zinc-200 dark:border-zinc-800 text-left ${className}`}
    >
      {/* Google Schema.org HowTo Structured Data */}
      <JsonLdSchema
        type="HowTo"
        title={guide.heading}
        description={guide.subheading}
        url={pageUrl}
        howToSteps={schemaSteps}
      />

      {/* Header with Semantic H2 & Subheading */}
      <div className="space-y-2 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200/60 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          <span>{guide.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight leading-snug">
          {guide.heading}
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {guide.subheading}
        </p>
      </div>

      {/* Responsive Step Cards Grid (Desktop multi-col, Mobile clean stack) */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          guide.steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        } gap-4 sm:gap-5 pt-2`}
      >
        {guide.steps.map((step, idx) => {
          const color = STEP_COLORS[idx % STEP_COLORS.length];
          const IconComponent =
            step.iconName && ICON_MAP[step.iconName]
              ? ICON_MAP[step.iconName]
              : CheckCircle2;

          return (
            <div
              key={step.stepNumber}
              className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-white dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 shadow-2xs hover:shadow-md ${color.border} transition-all duration-200 flex flex-col justify-between space-y-4`}
            >
              {/* Top Row: Number Badge + Action Tag */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-10 h-10 rounded-2xl bg-linear-to-br ${color.badge} font-black text-base flex items-center justify-center shadow-xs ring-4 ${color.ring}`}
                >
                  {step.stepNumber}
                </div>

                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-[11px] font-bold text-zinc-600 dark:text-zinc-300">
                  <IconComponent className="w-3.5 h-3.5 shrink-0 opacity-80" />
                  <span>{step.shortAction}</span>
                </div>
              </div>

              {/* Title and Detailed Description */}
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Pro Tip Box (if present) */}
              {step.proTip && (
                <div
                  className={`pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-start gap-2 ${color.bgLight} -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl sm:rounded-b-3xl`}
                >
                  <Lightbulb className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${color.accent}`} />
                  <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-300 leading-normal">
                    <strong className="font-semibold text-zinc-800 dark:text-zinc-200">Pro Tip: </strong>
                    {step.proTip}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

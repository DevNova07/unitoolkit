"use client";

import React from "react";
import Link from "next/link";
import { Layers, Sparkles, Compass, ArrowRight, Hash, Flame, BookmarkCheck } from "lucide-react";

interface TopicClusterSiloCloudProps {
  topic?: string;
  contentType?: string;
  platform?: string;
  currentRoute?: string;
  className?: string;
}

interface SiloLink {
  label: string;
  href: string;
  badge?: string;
}

export function TopicClusterSiloCloud({
  topic = "attitude",
  contentType = "captions",
  platform,
  currentRoute = "",
  className = "",
}: TopicClusterSiloCloudProps) {
  const cleanTopic = topic.toLowerCase().replace(/[^a-z0-9]/g, "");
  const capTopic = topic.charAt(0).toUpperCase() + topic.slice(1);

  // 1. Cross-Vertical Silo Links (Captions, Bio, Status, Shayari, Quotes for the same topic)
  const verticalLinks: SiloLink[] = [
    { label: `${capTopic} Captions`, href: `/${cleanTopic}-captions`, badge: "Vault" },
    { label: `${capTopic} Hindi Shayari`, href: `/${cleanTopic}-shayari`, badge: "Poetry" },
    { label: `${capTopic} WhatsApp Status`, href: `/${cleanTopic}-status`, badge: "2-Liner" },
    { label: `${capTopic} VIP Profile Bio`, href: `/${cleanTopic}-bio`, badge: "Bio" },
    { label: `${capTopic} Quotes & Thoughts`, href: `/${cleanTopic}-quotes`, badge: "Mindset" },
  ];

  // 2. High-Intent Sibling Topics in the Same Mood Cluster
  const siblingMoods: Record<string, string[]> = {
    attitude: ["savage", "royal", "boys", "gym", "badmashi", "confidence"],
    love: ["romantic", "couple", "ishq", "sukoon", "cute", "crush"],
    sad: ["heartbreak", "alone", "dard", "healing", "breakup", "silence"],
    funny: ["sarcasm", "memes", "desi", "humor", "relatable", "foodie"],
    gym: ["fitness", "workout", "bodybuilding", "discipline", "pr", "iron"],
    travel: ["mountains", "wanderlust", "sunset", "roadtrip", "beach", "solo"],
    aesthetic: ["softgirl", "goldenhour", "minimal", "clean", "vibes", "luxury"],
  };

  const siblings = (siblingMoods[cleanTopic] || ["attitude", "love", "funny", "gym", "aesthetic"])
    .map((s) => ({
      label: `${s.charAt(0).toUpperCase() + s.slice(1)} ${contentType}`,
      href: `/${s}-${contentType}`,
      badge: "Related",
    }));

  // 3. Platform Specific Hub Silos
  const platformHubs: SiloLink[] = [
    { label: `Instagram ${capTopic}`, href: `/instagram-${contentType}`, badge: "Reels" },
    { label: `WhatsApp ${capTopic}`, href: `/whatsapp-${contentType}`, badge: "Status" },
    { label: `TikTok ${capTopic}`, href: `/tiktok-${contentType}`, badge: "FYP" },
    { label: `YouTube ${capTopic}`, href: `/youtube-${contentType}`, badge: "Shorts" },
    { label: `LinkedIn ${capTopic}`, href: `/linkedin-${contentType}`, badge: "Career" },
  ];

  // 4. AI Generator Tool Link
  const aiToolLink: SiloLink = {
    label: `⚡ AI ${capTopic} Generator (Custom)`,
    href: `/ai-caption-generator?topic=${encodeURIComponent(topic)}`,
    badge: "Free AI",
  };

  // Combine and filter out current page route
  const allSiloLinks = [...verticalLinks, ...siblings, ...platformHubs, aiToolLink].filter(
    (l) => l.href !== currentRoute
  );

  return (
    <section
      aria-label="Related Topic Cluster Silos"
      className={`p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-6 text-left ${className}`}
    >
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400 text-xs font-bold shadow-2xs">
          <Compass className="w-3.5 h-3.5" />
          <span>Topic Cluster Silo</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
          Explore Related {capTopic} & Creator Clusters
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          Discover handpicked sibling vaults, cross-format couplets, and platform-specific creator guides.
        </p>
      </div>

      {/* Cloud of Contextual Pills */}
      <div className="flex flex-wrap gap-2.5 pt-2">
        {allSiloLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800/90 hover:border-indigo-500/60 dark:hover:border-indigo-500/60 hover:shadow-xs transition-all text-xs font-bold text-zinc-800 dark:text-zinc-200"
          >
            <span>{link.label}</span>
            {link.badge && (
              <span className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 text-[10px] text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-semibold transition-colors">
                {link.badge}
              </span>
            )}
            <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
          </Link>
        ))}
      </div>
    </section>
  );
}

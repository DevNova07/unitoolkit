import { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PlatformGrid } from "@/components/captions/PlatformGrid";
import { CTASection } from "@/components/common/CTASection";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Platform Captions — Instagram, TikTok, YouTube & More",
  description:
    "Explore platform-specific captions optimized for Instagram, TikTok, YouTube, LinkedIn, Facebook, Threads, X, Pinterest, Snapchat, and WhatsApp.",
  alternates: {
    canonical: "/platforms",
  },
};

export default function PlatformsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <Breadcrumbs items={[{ label: "Platforms" }]} />

      <div className="space-y-3 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>10 Major Social Networks</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Social Media Platforms
        </h1>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
          Each social platform has its own algorithm, character cadence, and audience culture. Browse caption libraries crafted specifically for each destination.
        </p>
      </div>

      <PlatformGrid />

      <CTASection
        title="Ready to craft custom captions for any platform?"
        subtitle="Our AI generator adapts your caption style and structure for Instagram Reels, TikTok hooks, LinkedIn lessons, and WhatsApp statuses."
      />
    </div>
  );
}

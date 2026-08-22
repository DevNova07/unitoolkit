import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Flame, Copy, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CaptionCard } from "@/components/captions/CaptionCard";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { BacklinkWidget } from "@/components/common/BacklinkWidget";
import { CAPTIONS_DATA } from "@/data/captionsData";

export const metadata: Metadata = {
  title: "Trending Captions [2026] — Viral Instagram, TikTok & WhatsApp Lines | Unitoolkit",
  description:
    "Explore the top trending captions, viral reels lines, royal attitude quotes, and Hindi status lines updated daily with 1-click copy.",
  alternates: {
    canonical: "/trending-captions",
  },
};

const FAQS = [
  { question: "How often are trending captions updated?", answer: "We update our trending feed daily based on current viral audio trends and algorithm analytics." },
  { question: "Can I use these on Reels and Shorts?", answer: "Yes, all lines are optimized for short-form video hooks, carousels, and photo dumps." },
];

export default function TrendingCaptionsPage() {
  const trendingCaptions = CAPTIONS_DATA.slice(0, 24);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={FAQS}
        title="Trending Captions 2026 — Unitoolkit"
        description="Daily updated viral social media captions."
        url="https://unitoolkit.com/trending-captions"
      />

      <Breadcrumbs items={[{ label: "Trending Captions" }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200/60 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-bold shadow-2xs">
          <Flame className="w-3.5 h-3.5 fill-current" />
          <span>Daily Viral Feed • Updated Today</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Trending Captions [2026]
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The most viral captions, aesthetic quotes, and attitude lines taking over Instagram, TikTok, and WhatsApp today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingCaptions.map((caption) => (
          <CaptionCard key={caption.id} caption={caption} />
        ))}
      </div>

      <BacklinkWidget
        pageTitle="Trending Social Media Captions Feed"
        canonicalUrl="/trending-captions"
        badge="Trending Feed"
      />

      <FAQSection faqs={FAQS} />
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { EditorialHero } from "@/components/captions/EditorialHero";
import { QuotesExplorer } from "@/components/tools/QuotesExplorer";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { Sparkles, Quote, BookOpen, Heart, Flame, ShieldCheck } from "lucide-react";

import { QUOTE_SECTIONS } from "@/data/quotesData";

export const metadata: Metadata = {
  title: "Inspiring & Philosophical Quotes Vault (With Authors) — UniToolkit",
  description:
    "Explore 200+ hand-curated quotes across Stoicism, Leadership, Love, Discipline, and Creative Mindset. 1-Click copy formatted with author attributions.",
  alternates: {
    canonical: "/quotes",
  },
};

const QUOTES_FAQS = [
  {
    question: "Why do quote posts and text graphics perform so well on social media?",
    answer:
      "Quotes tap into universal human emotions, identity validation, and timeless wisdom. Users share and repost quotes because the words reflect their personal feelings, philosophy, or current life struggles.",
  },
  {
    question: "How do I format a quote for an aesthetic Instagram post or Story?",
    answer:
      "Keep the typography clean and centered on a muted background (dark mode or warm beige). Use quotation marks, leave generous negative margin around the text, and place the author attribution in a subtle smaller font at the bottom.",
  },
  {
    question: "Can I use these quotes for commercial social media posts?",
    answer:
      "Yes! Timeless historical quotes (e.g. Marcus Aurelius, Seneca, Rumi, Shakespeare) are in the public domain and can be freely used for social media posts, inspirational graphics, and video voiceovers.",
  },
  {
    question: "How do I turn a quote into an engaging Reel or Short?",
    answer:
      "Pair a profound 1-sentence quote with slow-motion aesthetic B-roll (cinematic nature, rain on a window, city lights) and ambient lo-fi audio. Let the quote appear with a subtle fade-in text effect.",
  },
];

export default function QuotesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      {/* Editorial Hero with Visual Banner */}
      <EditorialHero
        platformName="Quotes Vault"
        badge="Quotes Vault"
        title="Inspiring & Philosophical Quotes Vault"
        description="Words that move people. Curated quotes on Stoicism, Discipline, Love, Ambition, and Artistic Growth ready to copy with verified author attribution in 1-click."
        heroImage="/images/quotes-hub-banner.jpg"
        breadcrumbs={[
          { label: "Content", href: "/#explore-content" },
          { label: "Quotes Vault" },
        ]}
        tocItems={[
          ...QUOTE_SECTIONS.map((sec) => ({
            id: sec.id,
            label: sec.title,
          })),
          { id: "storytelling-guide", label: "How to Turn Quotes Into High-Share Social Assets" },
          { id: "quotes-faqs", label: "Frequently Asked Questions About Quotes" },
        ]}
      />

      {/* Main Interactive Tool */}
      <QuotesExplorer />

      {/* Quote Storytelling Masterclass */}
      <div id="storytelling-guide" className="p-8 sm:p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Visual Storytelling Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
            How to Turn Quotes Into High-Share Social Assets
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            Quotes generate up to 4x more direct shares to Instagram Stories than standard photos. Here is how to style them:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Minimalist Dark Mode Cards</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Place white or warm ivory serif typography on a matte black background. It feels sophisticated and fits seamlessly into aesthetic mood boards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Video Text Overlay</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Pair quotes with atmospheric 4K video clips of ocean waves, mountain sunsets, or solo walks for high-retention Reels.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Personal Reflections in Caption</h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Don&apos;t just post the quote. In your caption, share a personal 2-sentence realization about what the quote taught you this week.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="quotes-faqs" className="pt-6 border-t border-zinc-100 dark:border-zinc-900 scroll-mt-24">
        <FAQSection
          title="Frequently Asked Questions About Quotes"
          subtitle="Everything you need to know about quote formatting, attributions, and viral sharing."
          faqs={QUOTES_FAQS}
        />
      </section>

      <JsonLdSchema type="FAQPage" faqs={QUOTES_FAQS} />

      <CTASection />
    </div>
  );
}

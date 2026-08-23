import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CategoryGrid } from "@/components/captions/CategoryGrid";
import { CTASection } from "@/components/common/CTASection";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import { Layers, Sparkles, BookOpen, Flame, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "18+ Caption Categories & Creator Moods [2026] | UniToolkit",
  description:
    "Explore 18+ curated social media caption categories including Attitude, Love, Shayari, Travel, Gym, Motivation, Funny, Birthday, and Aesthetic lines with 1-click copy.",
  alternates: {
    canonical: "/categories",
  },
  openGraph: {
    title: "18+ Caption Categories & Creator Moods [2026] | UniToolkit",
    description: "Browse curated caption collections categorized by vibe, emotion, event, and aesthetic style.",
    url: "https://unitoolkit.com/categories",
    type: "website",
  },
};

const CATEGORY_FAQS = [
  {
    question: "How do I choose the best caption category for my post?",
    answer:
      "Match your photo's visual vibe with your audience's emotional trigger: use 'Attitude' for bold solo portraits and gym PRs, 'Aesthetic' for golden hour and coffee shots, 'Romantic/Love' for couples, and 'Motivation' for career or fitness transformation posts.",
  },
  {
    question: "Are all 18+ caption categories updated for 2026 trends?",
    answer:
      "Yes! Our editorial team updates each category weekly with fresh internet slang, viral audio hooks, and culturally verified Hindi couplets.",
  },
  {
    question: "How does caption length affect Instagram and TikTok reach?",
    answer:
      "Ultra-short 1-line captions (1–5 words) yield higher completion rates on quick-scroll Reels, while micro-blog captions (50–150 words) generate deeper dwell-time and save ratios on photo carousels.",
  },
  {
    question: "Can I generate unique custom captions for unlisted niches?",
    answer:
      "Yes! If your specific event or niche isn't listed, launch our free AI Caption Studio to generate unlimited custom hooks and viral tags in 3 seconds.",
  },
  {
    question: "Are these category lines free for commercial brand accounts?",
    answer:
      "100% yes. All captions, shayari, and status lines are free for both personal influencer accounts and agency client campaigns.",
  },
  {
    question: "Do these captions include invisible line breaks for Instagram bios and posts?",
    answer:
      "Yes. Every multi-line caption is pre-formatted with clean spacing so your line breaks never collapse or look cramped on mobile screens.",
  },
  {
    question: "Can I copy and share directly to WhatsApp or social platforms?",
    answer:
      "Every single card includes 1-click clipboard copy and a direct WhatsApp share button for effortless posting.",
  },
];

export default function CategoriesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={CATEGORY_FAQS}
        title="Caption Categories & Themes — UniToolkit"
        description="Comprehensive directory of social media caption themes."
        url="https://unitoolkit.com/categories"
      />

      <Breadcrumbs items={[{ label: "Categories" }]} />

      {/* Hero Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-2xs">
          <Layers className="w-3.5 h-3.5" />
          <span>18+ Verified Moods & Categories</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Caption Categories & Creator Moods
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Browse our hand-curated collections of social media captions categorized by vibe, emotion, event, and aesthetic style. Perfect for Instagram, TikTok, WhatsApp, and YouTube.
        </p>
      </div>

      {/* Master Category Grid */}
      <CategoryGrid />

      {/* How To Use Guide */}
      <HowToUseGuide
        guideId="category-explorer"
        categoryName="Social Media Captions"
        title="How to Select & Style the Perfect Category Caption"
        pageUrl="https://unitoolkit.com/categories"
      />

      {/* Topic Cluster Silo Linking */}
      <TopicClusterSiloCloud
        topic="Attitude"
        contentType="captions"
        currentRoute="/categories"
      />

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Social Media Categorization" topic="Caption Taxonomy" />

      {/* 7 Structured FAQs */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About Caption Categories"
          subtitle="Everything you need to know about matching vibes, caption lengths, and viral formats."
          faqs={CATEGORY_FAQS}
        />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Can't find your specific theme?"
        subtitle="Generate unique captions tailored to any custom scenario using our instant AI Caption Generator."
      />
    </div>
  );
}

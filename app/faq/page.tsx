import { Metadata } from "next";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { Sparkles, HelpCircle } from "lucide-react";
import { BacklinkWidget } from "@/components/common/BacklinkWidget";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) [2026] — Social Media & Captions | Unitoolkit",
  description:
    "Get answers to common questions about Instagram captions, WhatsApp status formatting, reel viral algorithms, and free AI generators.",
  alternates: {
    canonical: "/faq",
  },
};

const MASTER_FAQS = [
  {
    question: "How do I copy captions and status lines on Unitoolkit?",
    answer:
      "Simply click the 'Copy' button or tap on any caption card. The text is instantly copied to your clipboard ready to paste into Instagram, WhatsApp, or TikTok.",
  },
  {
    question: "Are all tools and captions on Unitoolkit 100% free?",
    answer:
      "Yes, all 10,000+ curated lines, bio templates, shayari verses, and AI generators are completely free to use without requiring registration or subscription.",
  },
  {
    question: "How does the AI Caption Generator create custom lines?",
    answer:
      "Our AI is powered by fine-tuned models trained on high-converting social media posts. You describe your photo or topic, choose your desired tone (e.g. Attitude, Sassy, Romantic, Professional), and the AI produces multiple lines with viral hashtags.",
  },
  {
    question: "How long should an Instagram caption be for maximum engagement?",
    answer:
      "Data shows that either ultra-short punchy captions (1-3 words) or rich micro-story captions (70-150 words with curiosity hooks) perform best. Ensure the first 125 characters hook the viewer before the '...more' truncation.",
  },
  {
    question: "Can I use these captions for commercial brand posts?",
    answer:
      "Yes, you have full commercial rights to use all curated and AI-generated text in your personal, client, or brand marketing campaigns.",
  },
  {
    question: "How often are the trending captions updated?",
    answer:
      "Our editorial team and AI scrapers update the trending feed daily to capture emerging internet slang, memes, and cultural moments.",
  },
  {
    question: "How do I format multi-line bios with aesthetic line breaks on Instagram?",
    answer:
      "Use our VIP Bio Styler or copy our pre-formatted bio templates. Our templates use invisible Unicode spacing characters so your line breaks never collapse on mobile.",
  },
];

export default function FAQPage() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={MASTER_FAQS}
        title="Frequently Asked Questions — Unitoolkit"
        description="Comprehensive FAQ guide for social media creators, captions, and AI tools."
        url="https://unitoolkit.com/faq"
      />

      <Breadcrumbs items={[{ label: "FAQ" }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>Creator Help & Knowledge Base</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight flex items-center gap-3">
          <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500" />
          <span>Frequently Asked Questions</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Everything you need to know about using Unitoolkit captions, bio stylers, Hindi shayari, and AI generators.
        </p>
      </div>

      <FAQSection faqs={MASTER_FAQS} />

      <BacklinkWidget
        pageTitle="Social Media Captions & AI FAQ Guide"
        canonicalUrl="/faq"
        badge="Creator FAQ"
      />
    </div>
  );
}

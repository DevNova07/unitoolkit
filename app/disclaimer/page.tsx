import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { ShieldAlert, CheckCircle2, Lock, Scale, AlertTriangle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer & AI Liability Notice | UniToolkit",
  description:
    "Read UniToolkit's comprehensive disclaimer covering AI-generated content, third-party trademarks (Instagram, TikTok, WhatsApp), and commercial fair use.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer & AI Liability Notice | UniToolkit",
    description: "Legal disclaimers regarding AI content generation, trademarks, and copyright fair use.",
    url: "https://unitoolkit.com/disclaimer",
    type: "website",
  },
};

const DISCLAIMER_FAQS = [
  {
    question: "Is UniToolkit affiliated with Instagram, TikTok, or Meta?",
    answer:
      "No. UniToolkit is an independent creator suite. Instagram, TikTok, WhatsApp, Facebook, YouTube, LinkedIn, X, Threads, Pinterest, and Snapchat are registered trademarks of their respective corporate owners.",
  },
  {
    question: "Can I use generated captions and quotes in commercial advertising?",
    answer:
      "Yes. All curated captions, shayari couplets, bio templates, and AI-generated lines on UniToolkit are free to use for personal, influencer, and commercial brand marketing.",
  },
  {
    question: "Does UniToolkit guarantee viral performance or follower growth?",
    answer:
      "While our captions and hashtag ladders are crafted according to proven algorithmic frameworks, social media reach depends on multiple external factors including audience retention, visual quality, posting consistency, and timing.",
  },
  {
    question: "How does UniToolkit filter offensive or harmful AI outputs?",
    answer:
      "Our AI engines operate on multi-layer safety filters that actively reject hate speech, harassment, derogatory slurs, and harmful stereotypes. Read our full Editorial Policy for detailed standards.",
  },
  {
    question: "What should I do if I find a copyrighted quote or incorrect attribution?",
    answer:
      "If you identify a misattributed quote or believe a line infringes on copyright, please contact our editorial board at editorial@unitoolkit.com. We review and resolve reports within 48 hours.",
  },
  {
    question: "Does UniToolkit store my private AI prompts or clipboard contents?",
    answer:
      "No. We enforce strict zero-logging policies. All AI text generation is processed in-memory and immediately discarded. Your clipboard is never tracked.",
  },
  {
    question: "Are baby name meanings and cultural translations verified?",
    answer:
      "Yes. Our linguistic research team cross-references Sanskrit, Hindi, Arabic, Urdu, and English names against standard etymological lexicons for accuracy and positive meaning.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={DISCLAIMER_FAQS}
        title="Legal Disclaimer & Trademark Notice — UniToolkit"
        description="Comprehensive disclaimers for AI text generation, copyright fair use, and third-party trademarks."
        url="https://unitoolkit.com/disclaimer"
      />

      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-xs font-bold text-amber-700 dark:text-amber-400 shadow-2xs">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Legal & Liability Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Disclaimer & Trademark Notice
        </h1>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Last Updated: <strong>August 2026</strong> • UniToolkit Legal & Compliance Board
        </p>
      </div>

      {/* Core Clauses */}
      <div className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-500" />
            <span>1. General Information & Entertainment Purpose</span>
          </h2>
          <p>
            The content, captions, shayari verses, status quotes, baby names, and AI-generated outputs provided on <strong>UniToolkit</strong> (<Link href="/" className="text-indigo-600 dark:text-indigo-400 underline">unitoolkit.com</Link>) are for creative inspiration, social communication, and entertainment purposes. While we strive for linguistic and cultural accuracy, content is provided on an &quot;as is&quot; basis without express or implied warranties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>2. Third-Party Trademark Notice</span>
          </h2>
          <p>
            Any social media platform names, logos, or brand references (including but not limited to <em>Instagram, TikTok, YouTube, WhatsApp, Facebook, LinkedIn, X, Threads, Pinterest, and Snapchat</em>) are the registered trademarks of their respective owners. UniToolkit is an independent creator utility and is not endorsed by, directly affiliated with, or sponsored by any of these entities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-purple-500" />
            <span>3. AI Generation & Intellectual Property</span>
          </h2>
          <p>
            UniToolkit utilizes advanced neural language models for creative ideation. Users retain full rights to copy, adapt, and publish AI-generated text for personal and commercial projects. UniToolkit does not claim ownership over individual copy snippets generated through user prompts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-500" />
            <span>4. Copyright & Fair Use Notice</span>
          </h2>
          <p>
            Classical poetry, historical couplets, and public quotes are curated under fair use and cultural heritage preservation principles. If you believe any specific piece of content infringes upon your copyright, please notify our team at <strong className="text-zinc-900 dark:text-white">legal@unitoolkit.com</strong> for prompt investigation and removal.
          </p>
        </section>
      </div>

      {/* E-E-A-T Editorial Review Box */}
      <AuthorBioBox categoryType="Legal & Policy Standards" topic="Compliance & Trademarks" />

      {/* 7 Structured FAQs */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title="Frequently Asked Questions About Our Disclaimers"
          subtitle="Everything you need to know about commercial usage, trademarks, and copyright fair use."
          faqs={DISCLAIMER_FAQS}
        />
      </section>

      {/* Call to Action */}
      <CTASection
        title="Have questions about commercial usage?"
        subtitle="Contact our support team anytime for custom licensing or partnership inquiries."
      />
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Clock, Copy, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CaptionCard } from "@/components/captions/CaptionCard";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { BacklinkWidget } from "@/components/common/BacklinkWidget";
import { CAPTIONS_DATA } from "@/data/captionsData";

export const metadata: Metadata = {
  title: "New Captions [2026] — Fresh Daily Captions & Status Lines | Unitoolkit",
  description:
    "Discover brand new captions, fresh aesthetic quotes, Hinglish status, and creative lines added daily to Unitoolkit.",
  alternates: {
    canonical: "/new-captions",
  },
};

const FAQS = [
  { question: "How often are new captions added?", answer: "We add dozens of new captions and status lines every single day." },
  { question: "Can I submit my own captions?", answer: "Yes! Contact our team to submit your original poetry and quotes to be featured." },
];

export default function NewCaptionsPage() {
  const newCaptions = [...CAPTIONS_DATA].reverse().slice(0, 24);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={FAQS}
        title="New Captions 2026 — Unitoolkit"
        description="Fresh daily updated captions and status quotes."
        url="https://unitoolkit.com/new-captions"
      />

      <Breadcrumbs items={[{ label: "New Captions" }]} />

      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-2xs">
          <Clock className="w-3.5 h-3.5 fill-current" />
          <span>Fresh Daily Arrivals</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          New Captions & Status [2026]
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          The latest handpicked captions and viral quotes added to our master database today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newCaptions.map((caption) => (
          <CaptionCard key={caption.id} caption={caption} />
        ))}
      </div>

      <BacklinkWidget
        pageTitle="New Captions & Fresh Social Updates"
        canonicalUrl="/new-captions"
        badge="Fresh Arrivals"
      />

      <FAQSection faqs={FAQS} />
    </div>
  );
}

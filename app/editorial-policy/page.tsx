import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ShieldCheck, CheckCircle2, Award, Users, BookOpen, AlertCircle, RefreshCw, FileText, Lock } from "lucide-react";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: "Editorial Policy & Fact-Checking Standards | UniToolkit",
  description:
    "Learn about UniToolkit's 4-tier curation methodology, AI generation safety filters, linguistic verification standards, and content update policy.",
  alternates: {
    canonical: "/editorial-policy",
  },
  openGraph: {
    title: "Editorial Policy & Fact-Checking Standards | UniToolkit",
    description: "Our standards for cultural authenticity, AI safety, and linguistic accuracy.",
    url: "https://unitoolkit.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 text-left">
      <JsonLdSchema
        type="Article"
        title="UniToolkit Editorial Guidelines and Quality Standards"
        description="Our comprehensive standards for linguistic verification, AI generation ethics, and cultural sensitivity."
        url="https://unitoolkit.com/editorial-policy"
      />

      <Breadcrumbs items={[{ label: "Editorial Policy" }]} />

      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Google E-E-A-T Certified Standards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
          Editorial Guidelines & Content Standards
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Last Updated: <strong>August 2026</strong> • Published by the <strong>UniToolkit Editorial Board</strong>
        </p>
      </div>

      {/* Introduction */}
      <section className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <p>
          At <strong>UniToolkit</strong>, our mission is to empower social media creators, poets, writers, and families with verified, high-quality, and culturally authentic content. We maintain strict editorial guidelines across our 15,000+ curated captions, Hindi shayari couplets, WhatsApp statuses, profile bios, and AI generator utilities.
        </p>
      </section>

      {/* 4-Tier Verification Pipeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-500" />
          <span>1. Our 4-Tier Content Verification Pipeline</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
              01
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-white text-base">
              Linguistic & Etymological Verification
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every Hindi word, Urdu couplet (Sher), and baby name is cross-checked against standard onomastic and literary dictionaries for correct spelling, pronunciation, and positive meaning.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
              02
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-white text-base">
              Platform Formatting & Dwell Testing
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Bios are tested for Instagram&apos;s exact 150-character ceiling. Captions are simulated on iOS and Android devices to ensure line breaks and emojis do not distort.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              03
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-white text-base">
              AI Safety & Hate-Speech Filtering
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              All AI model outputs pass through multi-layer moderation filters that reject derogatory slurs, toxic language, harassment, and harmful stereotypes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center">
              04
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-white text-base">
              Human-in-the-Loop Editorial Review
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our human editorial team conducts quarterly audits to prune outdated social trends, update hashtag competition metrics, and introduce fresh cultural categories.
            </p>
          </div>
        </div>
      </section>

      {/* AI Ethics & Responsible AI Policy */}
      <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <Lock className="w-5 h-5 text-purple-500" />
          <span>2. Responsible AI Generation Policy</span>
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          <p>
            UniToolkit leverages advanced Large Language Models (LLMs) including Google Gemini for creative ideation. We adhere strictly to responsible AI principles:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li><strong>Zero Data Storage of User Prompts:</strong> Your prompts and custom inputs are processed in-memory and are never stored or sold.</li>
            <li><strong>No Plagiarism or Copyright Infringement:</strong> Our generators produce original combinations and do not scrape proprietary literature.</li>
            <li><strong>Transparency:</strong> AI-powered tools are clearly labeled with &quot;AI Generator Studio&quot; badges.</li>
          </ul>
        </div>
      </section>

      {/* Corrections & Feedback */}
      <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-black text-zinc-900 dark:text-white flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-emerald-500" />
          <span>3. Content Corrections & User Feedback</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          If you discover a typo, misattributed quote, or outdated hashtag metric, we invite you to report it directly to our editorial board at <strong className="text-zinc-900 dark:text-white">editorial@unitoolkit.com</strong>. We review and update reports within 48 business hours.
        </p>
      </section>

      {/* Editorial Board Summary */}
      <section className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-indigo-500" />
          <h3 className="font-bold text-zinc-900 dark:text-white text-base">
            UniToolkit Editorial Board
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Led by senior social media creators, Hindi literature scholars, and computational linguistics engineers dedicated to elevating digital communication. Learn more on our <Link href="/about" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">About Page</Link>.
        </p>
      </section>

      <CTASection />
    </div>
  );
}

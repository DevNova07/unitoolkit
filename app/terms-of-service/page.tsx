import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CheckCircle2, Scale } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = {
  title: "Terms of Service — Fair Use, Commercial Rights & Disclaimers | UniToolkit",
  description:
    "Read the terms of service for UniToolkit. 100% royalty-free commercial and personal use rights for all curated captions, shayari, and AI-generated text.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 text-left">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      {/* Header */}
      <div className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
          <Scale className="w-3.5 h-3.5" />
          <span>Creator License & Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-zinc-400">Effective Date: August 20, 2026 • Last Reviewed: August 2026</p>
      </div>

      {/* License Summary Box */}
      <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-4">
        <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Creator License Summary (TL;DR)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          <div>
            <strong>Royalty-Free:</strong> You can use all captions, status lines, and generated text for personal and commercial client posts.
          </div>
          <div>
            <strong>No Attribution Required:</strong> You do not need to credit UniToolkit in your Instagram or TikTok captions.
          </div>
          <div>
            <strong>Free Forever:</strong> No surprise fees, no paywalls, and no subscription contracts.
          </div>
        </div>
      </div>

      <div className="space-y-8 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">1. Agreement to Terms</h2>
          <p>
            By accessing or utilizing <Link href="/" className="text-indigo-600 dark:text-indigo-400 underline">UniToolkit</Link> (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, you are prohibited from using the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">2. Permitted Use & Commercial Rights License</h2>
          <p>
            UniToolkit grants you a worldwide, non-exclusive, royalty-free, perpetual license to copy, publish, modify, and distribute all text content (including captions, quotes, shayari, hashtags, and AI-generated outputs) across any digital medium:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li>Personal social media accounts (Instagram, TikTok, YouTube, Threads, WhatsApp, Facebook, LinkedIn, X).</li>
            <li>Commercial marketing, brand sponsorships, client management, and agency campaigns.</li>
            <li>Print, digital merchandise, video voiceovers, and newsletter communications.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">3. Acceptable Use Policy</h2>
          <p>
            You agree not to use the platform or its AI generation engines to produce, generate, or distribute:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
            <li>Hate speech, harassment, defamation, or content encouraging violence against individuals or protected groups.</li>
            <li>Sexually explicit, non-consensual, or illicit material.</li>
            <li>Automated spam attacks, unauthorized site scraping, or denial-of-service attempts against our infrastructure.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">4. AI Technology Disclaimer</h2>
          <p>
            UniToolkit utilizes advanced generative AI systems to synthesize creative copy and ideas. While we implement rigorous quality and safety filtering, AI outputs are generated probabilistically. Users are encouraged to review all AI-generated content for factual accuracy and brand alignment prior to publishing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">5. Intellectual Property Rights</h2>
          <p>
            The UniToolkit brand name, logos, website layout, bespoke code, UI components, and software architectures are the exclusive intellectual property of UniToolkit Inc. and protected by international copyright laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">6. Limitation of Liability</h2>
          <p>
            UniToolkit is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. Under no circumstances shall UniToolkit be liable for any direct, indirect, or incidental damages resulting from the use or inability to use the platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">7. Contact & Legal Inquiries</h2>
          <p>
            For legal inquiries, copyright notices, or terms clarification, please contact our legal counsel team at <a href="mailto:legal@unitoolkit.com" className="text-indigo-600 dark:text-indigo-400 underline">legal@unitoolkit.com</a>.
          </p>
        </section>
      </div>

      <CTASection />
    </div>
  );
}

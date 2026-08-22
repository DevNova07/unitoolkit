import { Metadata } from "next";
import Link from "next/link";
import { EditorialHero } from "@/components/captions/EditorialHero";
import { InstagramBioGenerator } from "@/components/tools/InstagramBioGenerator";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { Sparkles, UserCheck, ShieldCheck, Zap, Compass, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "VIP Instagram Bio Generator & Aesthetic Profile Styler — UniToolkit",
  description:
    "Generate VIP attitude, aesthetic, stylish fonts, boys & girls bios with real-time Instagram profile preview. Craft high-converting bios that convert profile visitors into followers in 1-click.",
  alternates: {
    canonical: "/bios",
  },
};

const BIO_FAQS = [
  {
    question: "What is the perfect formula for an Instagram bio that converts?",
    answer:
      "A high-converting bio follows a 4-line formula: 1) Who you are (Your Core Identity / Niche), 2) What you provide (Value proposition or credibility hook), 3) Social proof or unique vibe (Awards, location, aesthetic motto), and 4) Clear Call-To-Action pointing to your link (e.g., '👇 Grab my free guide').",
  },
  {
    question: "What is the character limit for an Instagram bio?",
    answer:
      "Instagram limits standard bio text to 150 characters. Our generator automatically tracks your character count and ensures all emojis and stylish fonts fit comfortably within this boundary.",
  },
  {
    question: "How do I add line breaks in my Instagram bio?",
    answer:
      "Instagram often removes plain enter line breaks. When you use UniToolkit's Bio Generator or Line Break Formatter, invisible zero-width space characters are added so your bio retains clean, vertical line spacing on both iOS and Android.",
  },
  {
    question: "Are fancy fonts in Instagram bios readable on all devices?",
    answer:
      "Yes! Our bio generator uses universally supported Unicode character sets. However, we recommend styling only key words or your name to maintain high readability across all screen readers and older mobile operating systems.",
  },
];

export default function BiosPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      {/* Editorial Hero with Visual Banner */}
      <EditorialHero
        platformName="Instagram Bios"
        badge="Bio Styler"
        title="VIP Instagram Bio Generator & Profile Styler"
        description="First impressions happen in 3 seconds. Transform your Instagram, TikTok, and Threads profile into a magnet for followers with curated VIP attitude, aesthetic fonts, and ready-to-copy bio templates."
        heroImage="/images/bio-hub-banner.jpg"
        breadcrumbs={[
          { label: "Content", href: "/#explore-content" },
          { label: "Instagram Bios" },
        ]}
        tocItems={[
          { id: "bio-vault", label: "Trending VIP & Aesthetic Bio Vault" },
          { id: "bio-blueprint", label: "The 4-Part Anatomy of a 100k+ Creator Bio" },
          { id: "bio-faqs", label: "Frequently Asked Questions About Instagram Bios" },
        ]}
      />

      {/* Main Interactive Tool */}
      <InstagramBioGenerator />

      {/* Bio Architecture Guide */}
      <div id="bio-blueprint" className="p-8 sm:p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-8 scroll-mt-24">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Profile Optimization Blueprint</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
            The 4-Part Anatomy of a 100k+ Creator Bio
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            When someone lands on your profile from a viral Reel, your bio determines whether they hit &quot;Follow&quot; or leave. Here is how top creators structure their 150 characters:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-black">
              01
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">The Identity Tag</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Clearly state what you do in 3 words (e.g. &quot;Travel & Filmmaking 🎥&quot; or &quot;Fitness & Mindset Coach 💪&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xs font-black">
              02
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">The Value Proposition</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Why should they follow you? (e.g. &quot;Helping you build lean muscle at home&quot; or &quot;Daily aesthetic outfit inspo&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center text-xs font-black">
              03
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">Social Proof / Vibe</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Add credibility or attitude (e.g. &quot;📍 Mumbai | ✈️ 24 Countries&quot; or &quot;Founder @Brand | 50K+ Readers&quot;).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-black">
              04
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">The Direct CTA Pointer</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Direct attention to your link in bio using downward pointers (e.g. &quot;👇 Watch my newest vlog here&quot;).
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section id="bio-faqs" className="pt-6 border-t border-zinc-100 dark:border-zinc-900 scroll-mt-24">
        <FAQSection
          title="Frequently Asked Questions About Instagram Bios"
          subtitle="How to style, format, and optimize your social media profile for maximum follower growth."
          faqs={BIO_FAQS}
        />
      </section>

      <JsonLdSchema type="FAQPage" faqs={BIO_FAQS} />

      <CTASection />
    </div>
  );
}

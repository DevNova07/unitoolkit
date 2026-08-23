import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Gift, Moon, Sun, Briefcase, Users, Flame } from "lucide-react";
import { WISH_CLUSTERS, OCCASION_HUBS } from "@/data/wishesTaxonomy";
import { FAQSection } from "@/components/common/FAQSection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { TopicClusterSiloCloud } from "@/components/common/TopicClusterSiloCloud";
import { HowToUseGuide } from "@/components/common/HowToUseGuide";

export const metadata: Metadata = {
  title: "Wishes & Greetings Hub (2026) — 1000+ Best Wishes for All Occasions",
  description:
    "Explore 1000+ curated wishes, quotes, and greeting messages for birthdays, weddings, anniversaries, Eid, Diwali, New Year, and daily greetings with 1-click copy & WhatsApp status cards.",
  alternates: {
    canonical: "/wishes",
  },
};

const WISHES_PORTAL_FAQS = [
  {
    question: "How many occasions and festivals are covered in UniToolkit Wishes Hub?",
    answer:
      "We cover 80+ dedicated high-intent occasion hubs organized into 8 clusters: Life Milestones (Birthdays, Weddings), Islamic Occasions (Eid, Ramadan, Jummah), Indian Festivals (Diwali, Holi, Rakhi), Global Holidays (New Year, Christmas, Valentine's), Daily Greetings, Career Wins, and Relationship Days.",
  },
  {
    question: "Can I copy wishes in Hindi, Hinglish, and English?",
    answer:
      "Yes! Every occasion hub features a 1-click script switcher [English], [हिंदी Devanagari], and [Hinglish Roman].",
  },
  {
    question: "How to download wishes as 9:16 Instagram Story & WhatsApp photo cards?",
    answer:
      "Click the 🖼️ Photo Card button on any wish card to open our visual maker and export high-resolution image cards in 5 aesthetic color themes.",
  },
  {
    question: "What if I need a custom wish for a unique occasion?",
    answer:
      "Use our free AI Wishes Generator (/ai-wishes-generator) which supports 150+ occasions with custom recipient names and emotional tones.",
  },
];

export default function WishesMasterDirectoryPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-950/70 border border-amber-500/30 text-xs font-bold text-amber-600 dark:text-amber-400">
          <Gift className="w-3.5 h-3.5 text-amber-500" />
          <span>Wishes & Greetings Portal • 2026 Edition</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          1000+ Best Wishes for{" "}
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
            Every Occasion & Milestone
          </span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Heartfelt quotes, cultural blessings, and cheerful greetings. Switch languages, copy in 1-click, or export as WhatsApp story cards.
        </p>

        <div className="pt-2">
          <Link
            href="/ai-wishes-generator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Try AI Custom Wishes Generator →</span>
          </Link>
        </div>
      </div>

      {/* 8 Clusters Matrix Grid */}
      <div className="space-y-12 text-left">
        {WISH_CLUSTERS.map((cluster) => {
          const hubsInCluster = OCCASION_HUBS.filter((h) => h.cluster === cluster.id);
          return (
            <section key={cluster.id} className="space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-2xl">{cluster.icon}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
                    {cluster.name}
                  </h2>
                  <span className="text-xs font-semibold text-zinc-400">
                    {cluster.count} • Curated Collections
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {hubsInCluster.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={`/${hub.slug}`}
                    className="p-5 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-amber-500 hover:shadow-lg transition-all group flex flex-col justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-1">
                        <span className="text-xl">{hub.emoji}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/50">
                          {hub.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors pt-1">
                        {hub.name}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 pt-1 leading-relaxed">
                        {hub.tagline}
                      </p>
                    </div>

                    <span className="text-xs text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                      <span>Explore Wishes</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Guide, Silos & E-E-A-T */}
      <HowToUseGuide
        guideId="wishes-directory-guide"
        categoryName="Wishes Portal"
        title="How to Browse, Format & Share Festival Greetings"
        pageUrl="https://unitoolkit.com/wishes"
      />

      <TopicClusterSiloCloud topic="Wishes & Greetings" contentType="wishes" currentRoute="/wishes" />

      <AuthorBioBox categoryType="Special Events & Life Milestones" topic="Festivals & Wishes Hub" />

      <section className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <FAQSection
          title="Frequently Asked Questions About Wishes Portal"
          subtitle="Everything you need to know about browsing occasion wishes."
          faqs={WISHES_PORTAL_FAQS}
        />
      </section>

      <JsonLdSchema type="FAQPage" faqs={WISHES_PORTAL_FAQS} />
    </div>
  );
}

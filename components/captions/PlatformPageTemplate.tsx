import { Metadata } from "next";
import Link from "next/link";
import { Compass } from "lucide-react";
import { PlatformInfo } from "@/lib/types";
import { EditorialHero } from "@/components/captions/EditorialHero";
import { PlatformToolsSuite } from "@/components/captions/PlatformToolsSuite";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { PLATFORM_TAXONOMY } from "@/data/platformTaxonomy";

interface PlatformPageTemplateProps {
  platform: PlatformInfo;
}

export function PlatformPageTemplate({ platform }: PlatformPageTemplateProps) {
  const platformDetail = PLATFORM_TAXONOMY[platform.id] || {
    id: platform.id,
    name: platform.name,
    slug: platform.slug,
    route: platform.path,
    cluster: "social",
    badge: platform.badge || "Creator Essential",
    tagline: platform.description,
    description: platform.description,
    count: platform.count,
    color: platform.color,
    gradient: "from-indigo-600 to-purple-600",
    features: [],
    aiTools: [],
    popularTopics: ["Attitude", "Love", "Gym", "Travel", "Aesthetic", "Motivation"],
  };

  const platformFAQs = [
    {
      question: `What tools are available for ${platform.name}?`,
      answer: `Our ${platform.name} hub includes: 1) ${platform.name} Captions Vault, 2) ${platform.name} Bio Generator, 3) ${platform.name} Quotes Hub, 4) Authentic Hindi Shayari, and 5) Curated copy tools with 1-click sharing.`,
    },
    {
      question: `How do I write a high-engagement ${platform.name} caption?`,
      answer: `Start with a compelling 3-second hook or bold statement, keep the key message above the fold before the '...more' button, and include a clear question or call-to-action to maximize comment velocity.`,
    },
    {
      question: `What is the optimal character length for ${platform.name}?`,
      answer: `While ${platform.name} supports long descriptions, captions between 70 and 150 characters generally achieve the highest organic reach and reader retention.`,
    },
    {
      question: `Can I copy and share directly to WhatsApp or social media?`,
      answer: `Yes! Every line and curated caption includes 1-click clipboard copy and a direct WhatsApp share button.`,
    },
    {
      question: `Are these ${platform.name} tools and captions 100% free?`,
      answer: `Yes! 100% of the tools and caption databases for ${platform.name} on UniToolkit are completely free with no registration required.`,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 space-y-8 sm:space-y-12">
      {/* 1. Platform Creator Toolkit Hero */}
      <EditorialHero
        platformName={platform.name}
        badge={`${platform.name} Hub`}
        title={`The Complete ${platform.name} Creator Suite`}
        description={`Access dedicated caption vaults, style aesthetic profile bios, discover quotes, and copy authentic lines tailored for ${platform.name}.`}
        breadcrumbs={[
          { label: "Platforms", href: "/platforms" },
          { label: platform.name },
        ]}
      />

      {/* 2. Platform Core Tool Cards (The Clean 3-4 Pillar Cards Grid) */}
      <div id="platform-tools" className="scroll-mt-24">
        <PlatformToolsSuite platformDetail={platformDetail} />
      </div>

      {/* 3. Popular Topics Bar for this Platform */}
      {platformDetail.popularTopics && platformDetail.popularTopics.length > 0 && (
        <div className="p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-3 text-left">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Compass className="w-3.5 h-3.5 text-indigo-500" />
            <span>Explore {platform.name} Content by Topic:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {platformDetail.popularTopics.map((topic) => (
              <Link
                key={topic}
                href={`/categories/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 transition-colors shadow-2xs"
              >
                #{topic}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 4. FAQ Section */}
      <section className="pt-6 border-t border-zinc-100 dark:border-zinc-900">
        <FAQSection
          title={`${platform.name} Creator Toolkit FAQ`}
          subtitle={`Everything you need to know about writing, formatting, and styling content for ${platform.name}.`}
          faqs={platformFAQs}
        />
      </section>

      {/* JSON-LD Schema for Google Search Rich Snippets */}
      <JsonLdSchema type="FAQPage" faqs={platformFAQs} />
      <JsonLdSchema
        type="Breadcrumbs"
        breadcrumbs={[
          { name: "Home", item: "https://unitoolkit.com" },
          { name: "Platforms", item: "https://unitoolkit.com/platforms" },
          { name: `${platform.name} Hub`, item: `https://unitoolkit.com/${platform.id}-captions` },
        ]}
      />

      {/* 5. CTA Section */}
      <CTASection />
    </div>
  );
}

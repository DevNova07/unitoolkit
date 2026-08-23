import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, Check, Copy, Share2, Layers, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { PILLAR_CAPTIONS_SUBPAGES } from "@/data/master300Architecture";
import { getCategoryCaptions } from "@/data/captionsBlueprintEngine";
import { CaptionListSection } from "./CaptionListSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PILLAR_CAPTIONS_SUBPAGES.map((slug) => ({ slug }));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!PILLAR_CAPTIONS_SUBPAGES.includes(slug)) {
    return { title: "Captions Not Found" };
  }

  const name = capitalize(slug);
  return {
    title: `100+ Best ${name} Captions for Instagram & Social Media [2026]`,
    description: `Explore 100+ curated ${name.toLowerCase()} captions for Instagram photos, reels, and TikTok. 1-click copy, verified engagement hooks, and instant AI generator.`,
    alternates: {
      canonical: `/captions/${slug}`,
    },
    openGraph: {
      title: `100+ Best ${name} Captions for Instagram | UniToolkit`,
      description: `100+ curated ${name.toLowerCase()} captions for photos, reels, and stories with 1-click copy.`,
      url: `https://unitoolkit.com/captions/${slug}`,
      type: "article",
    },
  };
}

export default async function CaptionsSubpage({ params }: PageProps) {
  const { slug } = await params;
  if (!PILLAR_CAPTIONS_SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  const data = getCategoryCaptions(slug);

  const relatedPlatforms = [
    { name: "Instagram", href: `/instagram-captions` },
    { name: "TikTok", href: `/tiktok-captions` },
    { name: "WhatsApp", href: `/whatsapp-status` },
    { name: "YouTube", href: `/youtube-captions` },
    { name: "LinkedIn", href: `/linkedin-captions` },
  ];

  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-10 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={data.faqs}
        title={data.h1}
        description={data.intro}
        url={`https://unitoolkit.com/captions/${slug}`}
      />
      <JsonLdSchema
        type="ItemList"
        title={data.h1}
        description={data.intro}
        url={`https://unitoolkit.com/captions/${slug}`}
        items={data.sections.flatMap((s) => s.captions).slice(0, 25).map((text) => ({ name: text }))}
      />

      <Breadcrumbs
        items={[
          { label: "Captions", href: "/captions" },
          { label: `${name} Captions` },
        ]}
      />

      {/* 1. Header with Semantic H1 */}
      <header className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>100+ Curated {name} Captions • 2026 Edition</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
          {data.h1}
        </h1>

        <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
          <span>Updated for 2026</span>
          <span>•</span>
          <span>1-Click Copy & WhatsApp Ready</span>
        </div>

        <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">
          {data.intro}
        </p>
      </header>

      {/* 2. Quick Section Jump Navigation */}
      <nav aria-label="Section Jump Bar" className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 flex-wrap text-xs font-bold text-zinc-600 dark:text-zinc-300">
          <span className="text-zinc-400 font-semibold pr-1">Jump to:</span>
          {data.sections.map((sec, idx) => (
            <a
              key={idx}
              href={`#section-${idx + 1}`}
              className="px-2.5 py-1 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-indigo-600 dark:text-indigo-400 transition-colors"
            >
              {sec.title}
            </a>
          ))}
        </div>
      </nav>

      {/* 3. AI Action Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-transparent border border-indigo-200/80 dark:border-indigo-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Need Custom {name} Captions?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Describe your photo or reel to generate personalized {name.toLowerCase()} lines in seconds.
          </p>
        </div>
        <Link
          href={`/ai-caption-generator?topic=${encodeURIComponent(name + " caption")}`}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Generate with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4. 5 Dedicated H2 Sections (20 captions each = 100 captions) */}
      <div className="space-y-12 pt-2">
        {data.sections.map((section, sIdx) => (
          <CaptionListSection
            key={sIdx}
            index={sIdx + 1}
            title={section.title}
            captions={section.captions}
          />
        ))}
      </div>

      {/* 5. How to Choose & Use these Captions (3 Tips) */}
      <section className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          How to Choose the Best {name} Caption
        </h2>

        <ul className="space-y-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed list-disc list-inside">
          {data.tips.map((t, idx) => (
            <li key={idx}>
              <strong>{t.title}:</strong> {t.desc}
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Related Categories & Related Platforms */}
      <section className="space-y-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-2">
          <h3 className="text-lg font-black text-zinc-900 dark:text-white">
            Related Caption Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            {PILLAR_CAPTIONS_SUBPAGES.filter((s) => s !== slug).slice(0, 10).map((item) => (
              <Link
                key={item}
                href={`/captions/${item}`}
                className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all capitalize"
              >
                {item} Captions
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-black text-zinc-900 dark:text-white">
            Platform Caption Guides
          </h3>
          <div className="flex flex-wrap gap-2">
            {relatedPlatforms.map((plat) => (
              <Link
                key={plat.name}
                href={plat.href}
                className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-indigo-500 hover:text-indigo-600 transition-all"
              >
                {plat.name} Captions & Hooks
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. E-E-A-T Author & Research Review Box */}
      <AuthorBioBox categoryType="Social Media Copywriting" topic={`${name} Captions`} />

      {/* 8. FAQs */}
      <FAQSection faqs={data.faqs} title={`Frequently Asked Questions about ${name} Captions`} />
    </article>
  );
}

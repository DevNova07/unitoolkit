import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { AuthorBioBox } from "@/components/common/AuthorBioBox";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { InstagramBioGenerator } from "@/components/tools/InstagramBioGenerator";
import { BioCardsList } from "@/components/bios/BioCardsList";
import { SearchIntentGuide } from "@/components/common/SearchIntentGuide";
import { PILLAR_BIOS_SUBPAGES } from "@/data/master300Architecture";
import { BIOS_DATA } from "@/data/biosData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PILLAR_BIOS_SUBPAGES.map((slug) => ({ slug }));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!PILLAR_BIOS_SUBPAGES.includes(slug)) {
    return { title: "Bio Not Found" };
  }

  const name = capitalize(slug);
  return {
    title: `50+ Best ${name} Bios for Instagram & Social Media [2026] | UniToolkit`,
    description: `Copy the best ${name.toLowerCase()} bios for Instagram, TikTok, and Twitter with clean line breaks, VIP aesthetic symbols, and 1-click instant AI variations.`,
    alternates: {
      canonical: `/bios/${slug}`,
    },
    openGraph: {
      title: `${name} Bios for Instagram & Social Media | UniToolkit`,
      description: `Best ${name.toLowerCase()} bios with aesthetic fonts and line breaks.`,
      url: `https://unitoolkit.com/bios/${slug}`,
      type: "article",
    },
  };
}

export default async function BioSlugPage({ params }: PageProps) {
  const { slug } = await params;
  if (!PILLAR_BIOS_SUBPAGES.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);
  
  // Filter matching bios or fallback gracefully
  let matchingBios = BIOS_DATA.filter(
    (b) =>
      b.category.toLowerCase().includes(slug.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(slug.toLowerCase()))
  );

  if (matchingBios.length === 0) {
    matchingBios = BIOS_DATA.slice(0, 10);
  }

  const faqs = [
    {
      question: `How do I copy these ${name} bios with line breaks?`,
      answer: `Click the copy button on any template to copy with preserved line breaks directly into your Instagram profile settings without any formatting errors.`,
    },
    {
      question: `Can I customize these ${name} bios with AI?`,
      answer: `Yes! Click 'Create Bio with AI' at the top of the page to generate personalized ${name.toLowerCase()} bios based on your exact profession, hobby, and aesthetic vibe.`,
    },
    {
      question: `How many characters can I use in my Instagram bio?`,
      answer: `Instagram allows up to 150 characters for standard profile bios. All templates in this curated collection are pre-tested to fit comfortably within the limit.`,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`${name} Bios for Instagram & Social Media`}
        description={`Best ${name.toLowerCase()} bios with aesthetic fonts and line breaks.`}
        url={`https://unitoolkit.com/bios/${slug}`}
      />

      <Breadcrumbs
        items={[
          { label: "VIP Bios", href: "/bios" },
          { label: `${name} Bios` },
        ]}
      />

      {/* Hero Header with Semantic H1 */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/60 border border-pink-200/60 dark:border-pink-800 text-pink-600 dark:text-pink-400 text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>{name} • VIP Styler & Line Breaks [2026]</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          50+ Best {name} Bios for Instagram & Social Media
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Level up your profile with high-converting {name.toLowerCase()} bios, aesthetic font styling, VIP symbols, and clean line breaks ready for 1-click copy.
        </p>
      </div>

      {/* Quick AI Action Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-pink-500/10 via-rose-500/10 to-transparent border border-pink-200/80 dark:border-pink-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span>Generate custom {name} bio with AI?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Create personalized VIP bios with line breaks and aesthetic emojis in 3 seconds.
          </p>
        </div>
        <Link
          href={`/ai-bio-generator?topic=${encodeURIComponent(name + " bio")}`}
          className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Create Bio with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Curated Bio Cards Section with H2 */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              Trending {name} Bio Templates
            </h2>
            <p className="text-xs text-zinc-500 pt-0.5">
              Copy directly with preserved line breaks for Instagram, TikTok & Twitter.
            </p>
          </div>
          <span className="text-xs font-bold text-pink-600 dark:text-pink-400 shrink-0">
            1-Click Copy
          </span>
        </div>

        <BioCardsList bios={matchingBios} />
      </section>

      {/* Search Intent Guide (Character limits, CTA placement, aesthetic bullets) */}
      <SearchIntentGuide categoryName={name} type="bio" />

      {/* Interactive Bio Generator Studio */}
      <InstagramBioGenerator />

      {/* Related Bio Categories */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white flex items-center gap-2">
          <Layers className="w-4 h-4 text-pink-500" />
          <span>Explore More Bio Styles</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {PILLAR_BIOS_SUBPAGES.filter((s) => s !== slug).map((item) => (
            <Link
              key={item}
              href={`/bios/${item}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-pink-500 hover:text-pink-600 transition-all capitalize"
            >
              {item} Bios
            </Link>
          ))}
        </div>
      </section>

      {/* E-E-A-T Author & Research Review Box */}
      <AuthorBioBox categoryType="Social Profiles & Bios" topic={`${name} Bios`} />

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}

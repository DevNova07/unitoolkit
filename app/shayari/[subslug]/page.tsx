import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { JsonLdSchema } from "@/components/common/JsonLdSchema";
import { SubpageShayariList } from "./SubpageShayariList";
import { PILLAR_SHAYARI_SUBPAGES } from "@/data/master300Architecture";
import { SHAYARI_SECTIONS, ShayariItem } from "@/data/shayariData";

interface PageProps {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return PILLAR_SHAYARI_SUBPAGES.map((subslug) => ({ subslug }));
}

function capitalize(s: string) {
  return s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subslug } = await params;
  if (!PILLAR_SHAYARI_SUBPAGES.includes(subslug)) {
    return { title: "Shayari Not Found" };
  }

  const name = capitalize(subslug);
  return {
    title: `${name} Shayari in Hindi & English [2026] | UniToolkit`,
    description: `Best ${name.toLowerCase()} shayari, 2-line couplets, and WhatsApp status in authentic Hindi font and Hinglish with 1-click share.`,
    alternates: {
      canonical: `/shayari/${subslug}`,
    },
    openGraph: {
      title: `${name} Shayari | UniToolkit`,
      description: `Best ${name.toLowerCase()} shayari in Hindi script.`,
      url: `https://unitoolkit.com/shayari/${subslug}`,
      type: "article",
    },
  };
}

export default async function ShayariSubSlugPage({ params }: PageProps) {
  const { subslug } = await params;
  if (!PILLAR_SHAYARI_SUBPAGES.includes(subslug)) {
    notFound();
  }

  const name = capitalize(subslug);
  const allShayari = SHAYARI_SECTIONS.flatMap((s) => s.items);
  const matchingData = allShayari.filter((s) => {
    return (
      s.category.toLowerCase().includes(subslug.toLowerCase()) ||
      s.hindi.toLowerCase().includes(subslug.toLowerCase()) ||
      s.hinglish.toLowerCase().includes(subslug.toLowerCase())
    );
  }).slice(0, 20);

  const items: ShayariItem[] = matchingData.length > 0
    ? matchingData
    : [
        {
          id: `${subslug}-1`,
          hindi: "तेरी आँखों की कशिश दिल में उतर जाती है,\nतू जब मुस्कुराती है तो जिंदगी संवर जाती है। ❤️🌸",
          hinglish: "Teri aankhon ki kashish dil me utar jaati hai,\nTu jab muskurati hai to zindagi sanwar jaati hai.",
          category: `${name} Shayari`,
          format: "2-line",
          likes: 620,
        },
        {
          id: `${subslug}-2`,
          hindi: "खामोशी से अपनी पहचान बनाओ,\nतुम्हारी कामयाबी खुद शोर मचाएगी! 🔥👑",
          hinglish: "Khamoshi se apni pehchan banao,\nTumhari kamyabi khud shor machayegi!",
          category: `${name} Shayari`,
          format: "2-line",
          likes: 540,
        },
      ];

  const faqs = [
    {
      question: `How do I share these ${name} couplets directly to WhatsApp?`,
      answer: `Click the WhatsApp button next to any shayari card to share formatted text directly to your status or chat.`,
    },
    {
      question: `Can I write custom ${name} shayari with AI?`,
      answer: `Yes! Click the 'Generate with AI' button to compose customized 2-line or 4-line couplets.`,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-left">
      <JsonLdSchema
        type="FAQPage"
        faqs={faqs}
        title={`${name} Shayari in Hindi`}
        description={`Best ${name.toLowerCase()} shayari in authentic Hindi font.`}
        url={`https://unitoolkit.com/shayari/${subslug}`}
      />

      <Breadcrumbs
        items={[
          { label: "Hindi Shayari", href: "/shayari" },
          { label: `${name} Shayari` },
        ]}
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold shadow-2xs">
          <BookOpen className="w-3.5 h-3.5 fill-current" />
          <span>{name} • Hindi & Hinglish</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
          Best {name} Shayari in Hindi
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Deep, heart-touching, and authentic {name.toLowerCase()} couplets with 1-click WhatsApp status sharing and copy.
        </p>
      </div>

      {/* Quick AI Action Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-linear-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-200/80 dark:border-amber-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Compose custom {name} shayari with AI?</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Generate customized rhyming couplets in authentic Urdu & Hindi meter.
          </p>
        </div>
        <Link
          href={`/ai-shayari-generator?topic=${encodeURIComponent(name + " shayari")}`}
          className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-xs transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Write with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Shayari List */}
      <SubpageShayariList
        badge={`${name} Shayari`}
        intro={`Best collection of ${name.toLowerCase()} shayari in authentic Hindi font & Hinglish.`}
        items={items}
        subslug={subslug}
      />

      {/* Related Categories */}
      <section className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white">
          Explore More Shayari Genres
        </h3>
        <div className="flex flex-wrap gap-2">
          {PILLAR_SHAYARI_SUBPAGES.filter((s) => s !== subslug).map((item) => (
            <Link
              key={item}
              href={`/shayari/${item}`}
              className="px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-amber-500 hover:text-amber-600 transition-all capitalize"
            >
              {capitalize(item)} Shayari
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <CTASection />
    </div>
  );
}

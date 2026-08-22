import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";
import {
  CORE_NAME_HUBS,
  ORIGIN_CULTURE_LIST,
  RELIGION_TRADITION_LIST,
  STYLE_PREFERENCE_LIST,
  POPULARITY_LIST,
  getCategoryCustomization,
  capitalize,
} from "@/data/namesTaxonomy";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Combine all valid subslugs for SSG
const ALL_CATEGORY_SLUGS = [
  ...CORE_NAME_HUBS.map((c) => c.slug),
  ...ORIGIN_CULTURE_LIST.map((o) => o.slug),
  ...RELIGION_TRADITION_LIST.map((r) => r.slug),
  ...STYLE_PREFERENCE_LIST.map((s) => s.slug),
  ...POPULARITY_LIST.map((p) => p.slug),
];

export async function generateStaticParams() {
  return ALL_CATEGORY_SLUGS.map((slug) => ({ slug }));
}

const CANONICAL_MAP: Record<string, string> = {
  islamic: "/names/muslim",
  american: "/names/english",
  sanskrit: "/names/indian",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!ALL_CATEGORY_SLUGS.includes(slug)) {
    return { title: "Names Category Not Found" };
  }

  const custom = getCategoryCustomization(slug);
  const canonicalUrl = CANONICAL_MAP[slug] || `/names/${slug}`;

  return {
    title: custom.metaTitle,
    description: custom.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: custom.metaTitle,
      description: custom.metaDescription,
      url: `https://unitoolkit.com/names/${slug}`,
      type: "article",
    },
  };
}

export default async function NameCategorySubpage({ params }: PageProps) {
  const { slug } = await params;
  if (!ALL_CATEGORY_SLUGS.includes(slug)) {
    notFound();
  }

  const custom = getCategoryCustomization(slug);

  // Filter matching names strictly from dataset
  const matchedNames = NAMES_DATA.filter((item) => {
    const s = slug.toLowerCase();
    if (s === "boy" || s === "girl" || s === "unisex") {
      return item.gender === s;
    }
    if (s === "muslim" || s === "islamic") {
      return item.religion === "Muslim";
    }
    if (s === "hindu" || s === "sanskrit") {
      return item.religion === "Hindu";
    }
    if (s === "indian") {
      return item.origin === "Indian";
    }
    if (s === "english" || s === "american" || s === "british") {
      return item.origin === "English";
    }
    return (
      item.origin.toLowerCase().includes(s) ||
      (item.religion && item.religion.toLowerCase().includes(s)) ||
      item.style.some((st) => st.toLowerCase().includes(s)) ||
      item.themes.some((th) => th.toLowerCase().includes(s)) ||
      item.culture.toLowerCase().includes(s)
    );
  });

  const relatedLinks = ALL_CATEGORY_SLUGS.filter((s) => s !== slug)
    .slice(0, 10)
    .map((s) => ({
      label: `${capitalize(s)} Names`,
      href: `/names/${s}`,
    }));

  return (
    <NamesTemplate
      h1={custom.h1}
      badge={custom.badge}
      intro={custom.intro}
      items={matchedNames}
      categoryType="category"
      categorySlug={slug}
      bannerTitle={custom.bannerTitle}
      bannerSubtitle={custom.bannerSubtitle}
      tipsTitle={custom.tipsTitle}
      tips={custom.tips}
      overviewSections={custom.overviewSections}
      letterHeadingPrefix={custom.letterHeadingPrefix}
      faqs={custom.faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[{ label: "Names", href: "/names" }, { label: `${custom.name}` }]}
    />
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NamesTemplate } from "@/components/names/NamesTemplate";
import { NAMES_DATA } from "@/data/namesData";

const POPULAR_SLUGS = [
  "boy",
  "girl",
  "unisex",
  "world",
  "india",
  "usa",
  "uk",
  "canada",
  "australia",
  "2026",
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POPULAR_SLUGS.map((slug) => ({ slug }));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = capitalize(slug);
  if (!POPULAR_SLUGS.includes(slug)) {
    return { title: "Popularity Hub Not Found" };
  }

  return {
    title: `Top ${name} Baby Names [2026] — Official Statistics & Rankings | UniToolkit`,
    description: `Official ranking and verified statistics for top ${name.toLowerCase()} baby names with origins, meanings, and trend forecasts.`,
    alternates: {
      canonical: `/names/popular/${slug}`,
    },
  };
}

export default async function PopularNameSubpage({ params }: PageProps) {
  const { slug } = await params;
  if (!POPULAR_SLUGS.includes(slug)) {
    notFound();
  }

  const name = capitalize(slug);

  let matchedNames = NAMES_DATA.filter((item) => {
    if (slug === "boy" || slug === "girl" || slug === "unisex") {
      return item.gender === slug;
    }
    if (item.popularityRank && item.popularityRank.country.toLowerCase() === slug.toLowerCase()) {
      return true;
    }
    return true;
  });

  const faqs = [
    {
      question: `Where does the popularity ranking data come from?`,
      answer: `Our statistics are curated from official national registries including the US Social Security Administration (SSA), UK Office for National Statistics (ONS), and regional birth registries.`,
    },
    {
      question: `What baby naming trends are dominant in 2026?`,
      answer: `Parents in 2026 increasingly favor short 2-syllable names, nature/celestial meanings, vintage revivals, and multicultural names that travel well globally.`,
    },
  ];

  const relatedLinks = POPULAR_SLUGS.filter((s) => s !== slug).map((s) => ({
    label: `Top ${capitalize(s)} Names`,
    href: `/names/popular/${s}`,
  }));

  return (
    <NamesTemplate
      h1={`Official Top ${name} Baby Names Rankings [2026]`}
      badge={`📊 Top ${name} Rankings`}
      intro={`Verified popularity rankings and national statistics for ${name.toLowerCase()} baby names. Updated with verified registry sources and meanings.`}
      items={matchedNames}
      categoryType="popularity"
      categorySlug={`popular/${slug}`}
      faqs={faqs}
      relatedLinks={relatedLinks}
      breadcrumbs={[
        { label: "Names", href: "/names" },
        { label: "Popularity", href: "/names/popular" },
        { label: `Top ${name}` },
      ]}
    />
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HashtagReportTemplate } from "@/components/hashtags/HashtagReportTemplate";
import { ALL_HASHTAG_SLUGS, getHashtagTopicData } from "@/data/hashtagsTaxonomy";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_HASHTAG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!ALL_HASHTAG_SLUGS.includes(slug)) {
    return { title: "Hashtags Not Found" };
  }

  const data = getHashtagTopicData(slug);

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/hashtags/${slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://unitoolkit.com/hashtags/${slug}`,
      type: "article",
    },
  };
}

export default async function HashtagSubpage({ params }: PageProps) {
  const { slug } = await params;
  if (!ALL_HASHTAG_SLUGS.includes(slug)) {
    notFound();
  }

  const data = getHashtagTopicData(slug);
  const relatedSlugs = ALL_HASHTAG_SLUGS.filter((s) => s !== slug).slice(0, 12);

  return <HashtagReportTemplate data={data} relatedSlugs={relatedSlugs} />;
}

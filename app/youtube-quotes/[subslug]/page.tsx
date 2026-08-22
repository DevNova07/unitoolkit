import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("youtube", "quotes");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("youtube", "quotes", subslug);
}

export default async function YouTubeQuotesSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("youtube", "quotes", subslug);
}

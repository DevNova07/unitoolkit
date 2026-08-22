import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("instagram", "quotes");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("instagram", "quotes", subslug);
}

export default async function InstagramQuotesSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("instagram", "quotes", subslug);
}

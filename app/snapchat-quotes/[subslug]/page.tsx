import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("snapchat", "quotes");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("snapchat", "quotes", subslug);
}

export default async function SnapchatQuotesSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("snapchat", "quotes", subslug);
}

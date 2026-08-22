import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("pinterest", "quotes");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("pinterest", "quotes", subslug);
}

export default async function PinterestQuotesSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("pinterest", "quotes", subslug);
}

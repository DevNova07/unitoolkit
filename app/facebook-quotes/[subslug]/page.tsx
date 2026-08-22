import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("facebook", "quotes");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("facebook", "quotes", subslug);
}

export default async function FacebookQuotesSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("facebook", "quotes", subslug);
}

import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("whatsapp", "quotes");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("whatsapp", "quotes", subslug);
}

export default async function WhatsAppQuotesSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("whatsapp", "quotes", subslug);
}

import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("whatsapp", "shayari");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("whatsapp", "shayari", subslug);
}

export default async function WhatsAppShayariSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("whatsapp", "shayari", subslug);
}

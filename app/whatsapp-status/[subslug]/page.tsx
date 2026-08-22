import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("whatsapp", "status");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("whatsapp", "status", subslug);
}

export default async function WhatsAppStatusSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("whatsapp", "status", subslug);
}

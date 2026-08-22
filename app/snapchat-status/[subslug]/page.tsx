import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("snapchat", "status");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("snapchat", "status", subslug);
}

export default async function SnapchatStatusSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("snapchat", "status", subslug);
}

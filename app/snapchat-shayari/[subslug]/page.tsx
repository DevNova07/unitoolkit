import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("snapchat", "shayari");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("snapchat", "shayari", subslug);
}

export default async function SnapchatShayariSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("snapchat", "shayari", subslug);
}

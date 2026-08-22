import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("tiktok", "bio");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("tiktok", "bio", subslug);
}

export default async function TikTokBioSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("tiktok", "bio", subslug);
}

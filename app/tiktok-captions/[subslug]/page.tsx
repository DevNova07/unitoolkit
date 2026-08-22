import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("tiktok", "captions");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("tiktok", "captions", subslug);
}

export default async function TikTokCaptionsSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("tiktok", "captions", subslug);
}

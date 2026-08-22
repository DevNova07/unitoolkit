import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("youtube", "shayari");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("youtube", "shayari", subslug);
}

export default async function YouTubeShayariSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("youtube", "shayari", subslug);
}

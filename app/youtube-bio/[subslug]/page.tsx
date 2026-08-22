import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("youtube", "bio");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("youtube", "bio", subslug);
}

export default async function YouTubeBioSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("youtube", "bio", subslug);
}

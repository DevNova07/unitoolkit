import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("instagram", "shayari");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("instagram", "shayari", subslug);
}

export default async function InstagramShayariSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("instagram", "shayari", subslug);
}

import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("linkedin", "shayari");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("linkedin", "shayari", subslug);
}

export default async function LinkedInShayariSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("linkedin", "shayari", subslug);
}

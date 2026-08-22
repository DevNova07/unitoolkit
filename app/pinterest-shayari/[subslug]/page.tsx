import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("pinterest", "shayari");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("pinterest", "shayari", subslug);
}

export default async function PinterestShayariSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("pinterest", "shayari", subslug);
}

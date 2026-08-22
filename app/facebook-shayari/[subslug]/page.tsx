import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("facebook", "shayari");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("facebook", "shayari", subslug);
}

export default async function FacebookShayariSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("facebook", "shayari", subslug);
}

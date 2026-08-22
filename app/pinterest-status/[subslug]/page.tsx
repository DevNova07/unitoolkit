import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("pinterest", "status");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("pinterest", "status", subslug);
}

export default async function PinterestStatusSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("pinterest", "status", subslug);
}

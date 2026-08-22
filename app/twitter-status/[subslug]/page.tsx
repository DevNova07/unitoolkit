import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("twitter", "status");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("twitter", "status", subslug);
}

export default async function TwitterStatusSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("twitter", "status", subslug);
}

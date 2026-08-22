import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("twitter", "bio");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("twitter", "bio", subslug);
}

export default async function TwitterBioSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("twitter", "bio", subslug);
}

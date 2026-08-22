import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("linkedin", "bio");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("linkedin", "bio", subslug);
}

export default async function LinkedInBioSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("linkedin", "bio", subslug);
}

import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("snapchat", "bio");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("snapchat", "bio", subslug);
}

export default async function SnapchatBioSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("snapchat", "bio", subslug);
}

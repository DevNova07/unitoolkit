import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("linkedin", "status");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("linkedin", "status", subslug);
}

export default async function LinkedInStatusSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("linkedin", "status", subslug);
}

import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("linkedin", "captions");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("linkedin", "captions", subslug);
}

export default async function LinkedInCaptionsSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("linkedin", "captions", subslug);
}

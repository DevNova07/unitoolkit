import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("youtube", "captions");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("youtube", "captions", subslug);
}

export default async function YouTubeCaptionsSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("youtube", "captions", subslug);
}

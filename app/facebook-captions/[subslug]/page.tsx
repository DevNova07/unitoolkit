import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("facebook", "captions");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("facebook", "captions", subslug);
}

export default async function FacebookCaptionsSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("facebook", "captions", subslug);
}

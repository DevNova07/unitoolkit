import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("snapchat", "captions");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("snapchat", "captions", subslug);
}

export default async function SnapchatCaptionsSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("snapchat", "captions", subslug);
}

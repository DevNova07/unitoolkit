import { Metadata } from "next";
import { renderPlatformPage, createPlatformMetadata, createPlatformStaticParams } from "@/lib/seoPageFactory";

interface Props {
  params: Promise<{ subslug: string }>;
}

export async function generateStaticParams() {
  return createPlatformStaticParams("threads", "status");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subslug } = await params;
  return createPlatformMetadata("threads", "status", subslug);
}

export default async function ThreadsStatusSubpage({ params }: Props) {
  const { subslug } = await params;
  return renderPlatformPage("threads", "status", subslug);
}

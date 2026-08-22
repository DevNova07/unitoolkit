import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("attitude", "bio");

export default function AttitudeBioPage() {
  return renderTopicPage("attitude", "bio");
}

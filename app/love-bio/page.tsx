import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("love", "bio");

export default function LoveBioPage() {
  return renderTopicPage("love", "bio");
}

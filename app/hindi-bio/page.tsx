import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("hindi", "bio");

export default function HindiBioPage() {
  return renderTopicPage("hindi", "bio");
}

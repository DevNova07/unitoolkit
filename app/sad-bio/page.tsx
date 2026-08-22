import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("sad", "bio");

export default function SadBioPage() {
  return renderTopicPage("sad", "bio");
}

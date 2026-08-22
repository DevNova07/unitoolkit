import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("funny", "bio");

export default function FunnyBioPage() {
  return renderTopicPage("funny", "bio");
}

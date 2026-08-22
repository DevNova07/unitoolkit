import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("english", "bio");

export default function EnglishBioPage() {
  return renderTopicPage("english", "bio");
}

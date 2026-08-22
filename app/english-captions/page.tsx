import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("english", "captions");

export default function EnglishCaptionsPage() {
  return renderTopicPage("english", "captions");
}

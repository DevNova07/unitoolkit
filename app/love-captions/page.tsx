import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("love", "captions");

export default function LoveCaptionsPage() {
  return renderTopicPage("love", "captions");
}

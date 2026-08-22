import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("hindi", "captions");

export default function HindiCaptionsPage() {
  return renderTopicPage("hindi", "captions");
}

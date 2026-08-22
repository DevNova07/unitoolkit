import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("sad", "captions");

export default function SadCaptionsPage() {
  return renderTopicPage("sad", "captions");
}

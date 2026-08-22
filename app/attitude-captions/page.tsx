import { createTopicMetadata, renderTopicPage } from "@/lib/seoPageFactory";

export const metadata = createTopicMetadata("attitude", "captions");

export default function AttitudeCaptionsPage() {
  return renderTopicPage("attitude", "captions");
}

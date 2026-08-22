import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("twitter", "captions");

export default function TwitterCaptionsHubPage() {
  return renderPlatformPage("twitter", "captions");
}

import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("twitter", "status");

export default function TwitterStatusHubPage() {
  return renderPlatformPage("twitter", "status");
}

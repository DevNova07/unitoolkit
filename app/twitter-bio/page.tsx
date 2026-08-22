import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("twitter", "bio");

export default function TwitterBioHubPage() {
  return renderPlatformPage("twitter", "bio");
}

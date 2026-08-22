import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("facebook", "bio");

export default function FacebookBioHubPage() {
  return renderPlatformPage("facebook", "bio");
}

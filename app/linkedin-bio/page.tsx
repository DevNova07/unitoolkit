import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("linkedin", "bio");

export default function LinkedInBioHubPage() {
  return renderPlatformPage("linkedin", "bio");
}

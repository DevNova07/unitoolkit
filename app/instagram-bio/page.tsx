import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("instagram", "bio");

export default function InstagramBioHubPage() {
  return renderPlatformPage("instagram", "bio");
}

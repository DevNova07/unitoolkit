import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("pinterest", "bio");

export default function PinterestBioHubPage() {
  return renderPlatformPage("pinterest", "bio");
}

import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("snapchat", "bio");

export default function SnapchatBioHubPage() {
  return renderPlatformPage("snapchat", "bio");
}

import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("snapchat", "shayari");

export default function SnapchatShayariHubPage() {
  return renderPlatformPage("snapchat", "shayari");
}

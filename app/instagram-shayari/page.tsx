import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("instagram", "shayari");

export default function InstagramShayariHubPage() {
  return renderPlatformPage("instagram", "shayari");
}

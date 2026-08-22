import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("twitter", "shayari");

export default function TwitterShayariHubPage() {
  return renderPlatformPage("twitter", "shayari");
}

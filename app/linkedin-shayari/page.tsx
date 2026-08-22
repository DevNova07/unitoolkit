import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("linkedin", "shayari");

export default function LinkedInShayariHubPage() {
  return renderPlatformPage("linkedin", "shayari");
}

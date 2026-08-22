import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("threads", "shayari");

export default function ThreadsShayariHubPage() {
  return renderPlatformPage("threads", "shayari");
}

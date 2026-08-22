import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("whatsapp", "quotes");

export default function WhatsAppQuotesHubPage() {
  return renderPlatformPage("whatsapp", "quotes");
}

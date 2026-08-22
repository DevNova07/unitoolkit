import { renderPlatformPage, createPlatformMetadata } from "@/lib/seoPageFactory";

export const metadata = createPlatformMetadata("whatsapp", "shayari");

export default function WhatsAppShayariHubPage() {
  return renderPlatformPage("whatsapp", "shayari");
}
